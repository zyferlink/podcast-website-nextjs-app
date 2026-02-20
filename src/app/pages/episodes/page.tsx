"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import PageHeader from "@/components/page-header/page-header";
import PageBanner1 from "../../../../public/images/Page-banner-1.png";
import PageBanner2 from "../../../../public/images/Page-banner-2.png";
import RocketIcon from "../../../../public/images/rocket-icon.png";
import EpisodesData from "../../../data/EpisodeData.json";

type Episode = {
  id: number;
  name: string;
  title: string;
  pere: string;
  episode: string;
  image: string;
};

const Episodes = () => {
  const [showAll, setShowAll] = useState(false);

  // Search Episodes
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEpisodes = EpisodesData.filter(
    (episode) =>
      episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.episode.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const visibleEpisodes = showAll
    ? filteredEpisodes
    : filteredEpisodes.slice(0, 10);

  const [sortBy, setSortBy] = useState("default");

  const sortedEpisode = [...visibleEpisodes].sort((a, b) => {
    const epA = parseInt(a.episode.replace("Episode", ""));
    const epB = parseInt(b.episode.replace("Episode", ""));

    if (sortBy === "high") return epB - epA;
    if (sortBy === "low") return epA - epB;
    if (sortBy === "title") return a.title.localeCompare(b.title);

    return 0;
  });

  const [favorites, setFavorites] = useState<Episode[]>(() => {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem("favoriteEpisodes");
    return stored ? (JSON.parse(stored) as Episode[]) : [];
  });

  const toggleFavorite = (episode: Episode) => {
    let updatedFavorites: Episode[];

    const isFav = favorites.some((fav) => fav.id === episode.id);

    if (isFav) {
      updatedFavorites = favorites.filter((fav) => fav.id !== episode.id);

      toast.error(`Removed from Favorites `, {
        icon: "💔",
      });
    } else {
      updatedFavorites = [...favorites, episode];

      toast.error(`Added to Favorites `, {
        icon: "❤️",
      });
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteEpisodes", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (id: number) => {
    return favorites.some((fav: Episode) => fav.id === id);
  };

  return (
    <>
      {/* Page Section */}
      <PageHeader title="All Episodes" />

      {/* Episodes */}
      <div className="dark-section  bg-black/98 text-white">
        <div className="px-[8%] lg:px-[16%] py-30 pb-0 md:pb-10 relative">
          {/* Search Episodes */}
          <div className="w-full bg-gray px-5 py-3 rounded-full flex justify-between items-center gap-5 episode-search">
            <input
              type="text"
              placeholder="Search Episode ... "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[80%] py-3 outline-none ps-5 text-xl bg-transparent"
            />
            <button type="button" className="btn btn2">
              Search <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>

          <div className="flex justify-between items-center gap-5 mt-4">
            <h2>Total Episodes Available ( {visibleEpisodes.length} )</h2>

            {/* Sorting */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray text-primary px-5 py-3 pr-12 
                rounded-full outline-none cursor-pointer font-medium hover:bg-gray-light 
                transition-all duration-300"
              >
                <option value="default">Sort by</option>
                <option value="high">Episode: High to Low</option>
                <option value="low">Episode: Low to High</option>
                <option value="title">Title: A to Z</option>
              </select>

              <i className="bi bi-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-primary pointer-events-none"></i>
            </div>
          </div>

          {/* Episodes Not Found */}
          {searchTerm && sortedEpisode.length === 0 && (
            <div className="w-full text-center mt-12">
              <h2 className="text-3xl text-gray-400 border-t border-b border-red-400 py-5">
                '{searchTerm}' Episode not Found
              </h2>
            </div>
          )}

          {/* Episodes List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {sortedEpisode.map((episode, index) => (
              <div
                key={index.toString()}
                className="flex w-full flex-col lg:flex-row justify-between bg-gray-light rounded-lg p-4 overflow-hidden"
              >
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <div className="w-[80%] lg:w-full">
                    <Image
                      src={"/images" + episode.image}
                      alt={episode.name}
                      width={1000}
                      height={1000}
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/1">
                  <div className="p-5">
                    <div className="flex flex-row flex-wrap justify-between items-center">
                      <Link href={`/pages/Episodes/${episode.id}`}>
                        <p className="font-light text-gray-200 hover:text-primary tracking-wider transition-all duration-200">
                          <i className="bi bi-mic text-primary"></i>
                          {episode.name}
                        </p>
                      </Link>
                      <h2 className="text-gray-300">
                        <i className="bi bi-clock pe-1 text-primary"></i>
                        4hr 12min
                      </h2>

                      <i
                        onClick={() => toggleFavorite(episode)}
                        className={`bi ${
                          isFavorite(episode.id)
                            ? "bi-balloon-heart-fill text-red-500"
                            : "bi-balloon-heart text-primary"
                        } me-3 text-xl cursor-pointer transition-all duration-200`}
                      ></i>
                    </div>

                    <Link href={`/pages/episodes/${episode.id}`}>
                      <h2 className="mt-3 text-2xl hover:text-primary transition-all duration-200">
                        {episode.title}
                      </h2>
                      <p className="my-3">{episode.pere}</p>
                    </Link>

                    <div className="flex justify-between items-center gap-5">
                      <Link
                        href={`/pages/Episodes/${episode.id}`}
                        className="flex items-center gap-2 group"
                      >
                        <i
                          className="bi bi-play p-4 bg-primary rounded-full flex text-black text-2x1 group-hover:bg-secondary 
                          group-hover:text-white items-center justify-center transition-all duration-200"
                        ></i>
                        <h2 className="text-lg underline text-primary group-hover:text-secondary transition-all duration-200">
                          Listen Now
                        </h2>
                      </Link>

                      <span className="bg-gray px-5 py-3 rounded-full text-sm text-primary font-semibold tracking-wide">
                        {episode.episode}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {EpisodesData.length > 10 && (
            <div className="flex justify-center mt-12">
              <button
                type="button"
                className="btn btn2"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show less" : "Show More"}
                <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          )}
        </div>

        <div className="px-[8%] lg:px-[10%] py-20">
          <div className="page-banner p-15 flex flex-col justify-center items-center text-center rounded-2xl relative">
            <Image
              src={PageBanner1}
              alt="PageBanner1"
              width={500}
              height={550}
              className="hidden lg:block absolute bottom-0 left-0"
            />
            <Image
              src={PageBanner2}
              alt="PageBanner2"
              width={500}
              height={550}
              className="hidden lg:block absolute bottom-0 right-0"
            />

            <div className="music-waves"></div>
            <div className="my-3 mt-5">
              <span className="flex items-center gap-2 text-black px-4 py-3 rounded-full border border-black">
                <Image
                  src={RocketIcon}
                  alt="rocketIcon"
                  width={30}
                  height={30}
                />
                <h2 className="text-xl">Call To Action</h2>
              </span>
            </div>
            <h1 className="text-2xl lg:text-3xl mb-5 font-semibold w-full lg:w-[50%] text-text">
              Let's Discuss <br />
              For <br />
              Any Episodes
            </h1>
            <button type="button" className="btn btn2 bg-text">
              Get In Touch <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Episodes;
