"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import CustomPageBanner from "@/components/custom-page-banner";
import EpisodeCard from "@/components/episode-card";
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
          {latestEpisodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>

      {/* Custom Page Banner */}
      <CustomPageBanner mainProps="dark-section" />
    </>
  );
};

export default LatestEpisodes;
