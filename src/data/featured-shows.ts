import type { StaticImageData } from "next/dist/shared/lib/get-img-props";
import TopListens1 from "../../public/assets/images/top-listens-1.jpg";
import TopListens2 from "../../public/assets/images/top-listens-2.jpg";
import TopListens3 from "../../public/assets/images/top-listens-3.jpg";
import TopListens4 from "../../public/assets/images/top-listens-4.jpg";

export interface TopListen {
  id: number;
  title: string;
  image: StaticImageData;
  episode: string;
  hostName: string;
}

export const TopListensData: TopListen[] = [
  {
    id: 1,
    title: "Behind the Mic: Podcasting Expanded",
    image: TopListens1,
    episode: "Episode 06",
    hostName: "Emily Chen",
  },
  {
    id: 2,
    title: "Laughing Through Life's Labyrinth",
    image: TopListens2,
    episode: "Episode 12",
    hostName: "Jessica Martinez",
  },
  {
    id: 3,
    title: "Tech Trends Unveiled: Future Horizons",
    image: TopListens3,
    episode: "Episode 17",
    hostName: "Amanda Foster",
  },
  {
    id: 4,
    title: "The Mindset Shift: Personal Growth Daily",
    image: TopListens4,
    episode: "Episode 08",
    hostName: "Marcus Thompson",
  },
];
