"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CustomPageBanner from "@/components/custom-page-banner";
import EpisodeCard from "@/components/episode-card";
import PageHeader from "@/components/page-header/page-header";
import type { Episode } from "@/data/episodes";

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

      {/* Custom Page Banner */}
      <CustomPageBanner mainProps="dark-section" />
    </>
  );
};

export default FavoriteEpisodes;
