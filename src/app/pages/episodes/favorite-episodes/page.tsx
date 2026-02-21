"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PageHeader from "@/components/page-header/page-header";
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
import EpisodesData from "../../../../data/EpisodeData.json";

type Episode = {
  id: number;
  name: string;
  title: string;
  pere: string;
  episode: string;
  image: string;
};

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
              <div
                key={episode.id}
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
                      <Link href={`/pages/episodes/${episode.id}`}>
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
                        onClick={() => removeFavorite(episode.id)}
                        className="bi bi-x-circle text-primary text-xl cursor-pointer 
                        transition-all duration-200"
                        title="Remove Ifrom Favorite"
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
