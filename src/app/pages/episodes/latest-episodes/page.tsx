"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import PageHeader from "@/components/page-header/page-header";
import { type Episode, EpisodeData } from "@/data/episodes";
import BrandIcon1 from "../../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../../public/images/brand-icon-5.png";
import PageBanner1 from "../../../../../public/images/Page-banner-1.png";
import PageBanner2 from "../../../../../public/images/Page-banner-2.png";
import PageElement1 from "../../../../../public/images/page-elm-1.png";
import PageElement2 from "../../../../../public/images/page-elm-2.png";
import PageElement3 from "../../../../../public/images/page-elm-3.png";
import PageElement4 from "../../../../../public/images/page-elm-4.png";
import RocketIcon from "../../../../../public/images/rocket-icon.png";

const LatestEpisodes = () => {
  const latestEpisodes: Episode[] = EpisodeData.slice(0, 10);

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
      {/* Page Header */}
      <PageHeader title="Latest Episodes" />

      {/* Latest Episodes */}
      <div className="dark-section bg-black/98 text-white px-[8%] lg:px-[16%] py-15">
        {/* Episodes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {latestEpisodes.map((episode, index) => (
            <div
              key={index.toString()}
              className="flex w-full flex-col lg:flex-row justify-between bg-gray-light rounded-lg p-4 overflow-hidden"
            >
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="w-[80%] lg:w-full">
                  <Image
                    src={episode.image}
                    alt={episode.title}
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
                        {episode.hostName}
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
                    <p className="my-3">{episode.desc}</p>
                  </Link>

                  <div className="flex justify-between items-center gap-5">
                    <Link
                      href={`/pages/episodes/${episode.id}`}
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
      </div>

      <div className="px-[8%] lg:px-[10%] py-20 bg-black/98 text-white ">
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
              <Image src={RocketIcon} alt="rocketIcon" width={30} height={30} />
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
    </>
  );
};

export default LatestEpisodes;
