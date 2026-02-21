"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import CustomPageBanner from "@/components/custom-page-banner";
import PageHeader from "@/components/page-header/page-header";
import { type Episode, EpisodeData } from "@/data/episodes";

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
      <div className="dark-section px-[8%] lg:px-[12%] py-15">
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

      {/* Custom Page Banner */}
      <CustomPageBanner mainProps="dark-section" />
    </>
  );
};

export default LatestEpisodes;
