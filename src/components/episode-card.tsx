import Image from "next/image";
import Link from "next/link";
import type { Episode } from "@/data/episodes";

interface EpisodeCardProps {
  episode: Episode;
  toggleFavorite: (episode: Episode) => void;
  isFavorite: (id: number) => boolean;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode,
  toggleFavorite,
  isFavorite,
}) => {
  return (
    <div className="flex w-full flex-col lg:flex-row justify-between bg-gray-light rounded-lg p-4 overflow-hidden">
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
        <div className="px-5">
          <div className="flex flex-row flex-wrap justify-between items-center">
            <div className="flex md:flex-col flex-row justify-between w-[80%]">
              <Link href={`/pages/episodes/${episode.id}`}>
                <p className="font-normal text-gray-200 hover:text-primary tracking-wider transition-all duration-200">
                  <i className="bi bi-mic text-primary" /> {episode.hostName}
                </p>
              </Link>
              <h2 className="text-gray-300 font-light">
                <i className="bi bi-clock pe-1 text-primary" />{" "}
                {episode.duration}
              </h2>
            </div>

            <button type="button" onClick={() => toggleFavorite(episode)}>
              <i
                className={`bi ${
                  isFavorite(episode.id)
                    ? "bi-balloon-heart-fill text-red-500"
                    : "bi-balloon-heart text-primary"
                } me-3 text-xl cursor-pointer transition-all duration-200`}
              />
            </button>
          </div>

          <Link href={`/pages/episodes/${episode.id}`}>
            <h2 className="mt-3 text-xl font-bold text-white hover:text-primary transition-all duration-200">
              {episode.title}
            </h2>
            <p className="my-3 text-gray-300 font-light line-clamp-3">
              {episode.desc}
            </p>
          </Link>

          <div className="flex justify-between items-center gap-5">
            <Link
              href={`/pages/episodes/${episode.id}`}
              className="flex items-center gap-2 group"
            >
              <i
                className="bi bi-play p-4 bg-primary rounded-full flex text-black text-lg group-hover:bg-secondary 
                          group-hover:text-white items-center justify-center transition-all duration-200"
              />
              <h2 className="text-lg underline text-primary group-hover:text-secondary transition-all duration-200">
                Listen Now
              </h2>
            </Link>

            <span className="bg-gray px-5 py-3 rounded-full text-sm text-center text-primary font-semibold tracking-wide">
              {episode.episode}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
