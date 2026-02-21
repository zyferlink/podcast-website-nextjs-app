"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EpisodeCard from "@/components/episode-card";
import PageHeader from "@/components/page-header/page-header";
import type { Episode } from "@/data/episodes";
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

const FavoriteEpisodes = () => {
  const [favorites, setFavorites] = useState<Episode[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteEpisodes");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const removeFavorite = (id: number) => {
    const removedEpisode = favorites.find((ep) => ep.id === id);

    const updated = favorites.filter((ep) => ep.id !== id);
    setFavorites(updated);

    localStorage.setItem("favoriteEpisodes", JSON.stringify(updated));

    toast.error("Removed from favorites X");
  };

  return (
    <>
      {/* Page Header */}
      <PageHeader title="Favorite Episodes" />

      {/* Favorite Episodes */}
      <div className="dark-section bg-black/98 text-white px-[8%] lg:px-[16%] py-15">
        {favorites.length === 0 ? (
          <p className="text-center text-gray-400 text-xl border-t border-b border-red-400 py-5">
            ❤️ No favorite episodes yet
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {/* Episodes List */}
            {favorites.map((episode) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
                isFavorite={() => {
                  return true;
                }}
                toggleFavorite={() => {}}
                removeFavorite={removeFavorite}
              />
            ))}
          </div>
        )}
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

export default FavoriteEpisodes;
