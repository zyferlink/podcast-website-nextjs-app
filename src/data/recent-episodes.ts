import type { StaticImageData } from "next/dist/shared/lib/get-img-props";

export interface RecentEpisode {
  id: number;
  title: string;
  desc: string;
  duration: string;
  episode: string;
  hostName: string;
  image?: StaticImageData;
}

export const RecentEpisodeData: RecentEpisode[] = [
  {
    id: 1,
    title: "Innovation Insights: Diving Deep into Future Tech Trends",
    desc: "Ever wondered what happens behind the scenes? Join us for a candid conversation about podcasting and more",
    duration: "2hr 25min",
    episode: "Episode 04",
    hostName: "Emily Chen",
  },
  {
    id: 2,
    title: "Laughter Unleashed: Join Us for Joyful Conversations Today",
    desc: "Embark on a journey of unexplored wisdom as we delve into fascinating topics that challenge the mind",
    duration: "1hr 52min",
    episode: "Episode 12",
    hostName: "Jessica Martinez",
  },
  {
    id: 3,
    title: "Behind the Scenes: Candid Talks on Podcasting Strategies",
    desc: "Unlock the secrets of inspiration with heartfelt stories and motivational insights in this uplifting episode",
    duration: "4hr 28min",
    episode: "Episode 17",
    hostName: "Amanda Foster",
  },
];
