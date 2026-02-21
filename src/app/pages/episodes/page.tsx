"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";
import { StyledButtonSecondary } from "@/components/buttons/styled-button-secondary";
import EpisodeCard from "@/components/episode-card";
import PageBannerCustom from "@/components/page-banner-custom";
import PageHeader from "@/components/page-header/page-header";
import { type Episode, EpisodeData } from "@/data/episodes";

const Episodes = () => {
  const [showAll, setShowAll] = useState(false);

  // Search Episodes
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEpisodes = EpisodeData.filter(
    (episode) =>
      episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.hostName.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      {/* Page Header */}
      <PageHeader title="All Episodes" />

      {/* Episodes */}
      <div className="dark-section">
        <div className="px-[8%] lg:px-[12%] py-30 pb-0 md:pb-8 relative">
          {/* Search Episodes */}
          <div
            className="flex md:flex-row flex-col absolute -top-4 z-5 w-[85%] md:w-[75%] bg-gray px-4 py-2 
            rounded-2xl md:rounded-full justify-between items-center gap-5 "
          >
            <input
              type="text"
              placeholder="Search Episode ... "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[80%] placeholder:text-gray-200 py-3 text-white outline-none ps-5 text-xl bg-transparent"
            />
            <StyledButtonSecondary
              onClick={() => {}}
              className="px-8 text-xl tracking-normal"
              icon={<FaArrowRight size={12} />}
            >
              Search
            </StyledButtonSecondary>
          </div>

          <div className="flex justify-between items-center gap-5 px-2 sm:pt-0 pt-5">
            <h2 className="text-white text-lg font-semibold">
              Total Episodes Available ( {visibleEpisodes.length} )
            </h2>

            {/* Sorting */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray text-primary px-5 py-3 pr-12 
                rounded-full outline-none cursor-pointer font-sans text-base font-medium hover:bg-gray-light 
                transition-all duration-300"
              >
                <option value="default">Sort by</option>
                <option value="high">Episode: High to Low</option>
                <option value="low">Episode: Low to High</option>
                <option value="title">Title: A to Z</option>
              </select>

              <i className="bi bi-chevron-down absolute right-4 top-[60%] -translate-y-1/2 text-primary pointer-events-none" />
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
            {sortedEpisode.map((episode) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
                isFavorite={isFavorite}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>

          {EpisodeData.length > 10 && (
            <div className="flex justify-center mt-12">
              <StyledButtonSecondary
                onClick={() => setShowAll(!showAll)}
                className="px-8 text-xl tracking-normal"
                icon={<FaArrowRight size={12} />}
              >
                {showAll ? "Show less" : "Show More"}
              </StyledButtonSecondary>
            </div>
          )}
        </div>

        <PageBannerCustom />
      </div>
    </>
  );
};

export default Episodes;
