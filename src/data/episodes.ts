import type { StaticImageData } from "next/dist/shared/lib/get-img-props";

import EpisodeImage1 from "../../public/assets/images/episode-1.jpg";
import EpisodeImage2 from "../../public/assets/images/episode-2.jpg";
import EpisodeImage3 from "../../public/assets/images/episode-3.jpg";
import EpisodeImage4 from "../../public/assets/images/episode-4.jpg";
import EpisodeImage5 from "../../public/assets/images/episode-5.jpg";
import EpisodeImage6 from "../../public/assets/images/episode-6.jpg";
import EpisodeImage7 from "../../public/assets/images/episode-7.jpg";
import EpisodeImage8 from "../../public/assets/images/episode-8.jpg";
import EpisodeImage9 from "../../public/assets/images/episode-9.jpg";
import EpisodeImage10 from "../../public/assets/images/episode-10.jpg";
import EpisodeImage11 from "../../public/assets/images/episode-11.jpg";

export interface Episode {
  id: number;
  title: string;
  desc: string;
  duration: string;
  episode: string;
  hostName: string;
  image?: StaticImageData;
}

export const EpisodeData: Episode[] = [
  {
    id: 1,
    title: "Innovation Insights: Diving Deep into Future Tech Trends",
    desc: "Ever wondered what happens behind the scenes? Join us for a candid conversation about podcasting and more",
    duration: "2hr 25min",
    episode: "Episode 04",
    hostName: "Ethan Anderson",
    image: EpisodeImage1,
  },
  {
    id: 2,
    title: "Laughter Unleashed: Join Us for Joyful Conversations Today",
    desc: "Embark on a journey of unexplored wisdom as we delve into fascinating topics that challenge the mind",
    duration: "1hr 52min",
    episode: "Episode 12",
    hostName: "Sophia Reynolds",
    image: EpisodeImage2,
  },
  {
    id: 3,
    title: "Behind the Scenes: Candid Talks on Podcasting Strategies",
    desc: "Unlock the secrets of inspiration with heartfelt stories and motivational insights in this uplifting episode",
    duration: "4hr 28min",
    episode: "Episode 17",
    hostName: "Benjamin Foster",
    image: EpisodeImage3,
  },
  {
    id: 4,
    hostName: "Olivia Martinez",
    duration: "4hr 12min",
    title: "Comic Relief: Laughter in Every",
    desc: "Exploring the art of storytelling and its impact on various mediums, from books to podcasts.",
    episode: "Episode 11",
    image: EpisodeImage4,
  },
  {
    id: 5,
    hostName: "Mason Chen",
    duration: "4hr 12min",
    title: "Mic Magic: Crafting Captivating Podcasts",
    desc: "Exploring the art of storytelling and its impact on various mediums, from books to podcasts.",
    episode: "Episode 35",
    image: EpisodeImage5,
  },
  {
    id: 6,
    hostName: "Zoya Sheikh",
    duration: "4hr 12min",
    title: "Triumphs Unveiled: Stories",
    desc: "Exploring the art of storytelling and its impact on various mediums, from books to podcasts.",
    episode: "Episode 45",
    image: EpisodeImage6,
  },
  {
    id: 7,
    hostName: "Andrew Coleman",
    duration: "4hr 12min",
    title: "Culinary Journeys: Flavors of the World",
    desc: "Exploring the art of storytelling and its impact on various mediums, from books to podcasts.",
    episode: "Episode 15",
    image: EpisodeImage7,
  },
  {
    id: 8,
    hostName: "Olivia Turner",
    duration: "4hr 12min",
    title: "Mindful Moments: Finding Peace Within",
    desc: "Exploring the art of storytelling and its impact on various mediums, from books to podcasts.",
    episode: "Episode 06",
    image: EpisodeImage8,
  },
  {
    id: 9,
    hostName: "Benjamin Foster",
    duration: "4hr 12min",
    title: "Future Tech: Exploring Tomorrow's",
    desc: "Exploring the art of storytelling and its impact on various mediums, from books to podcasts.",
    episode: "Episode 16",
    image: EpisodeImage9,
  },
  {
    id: 10,
    hostName: "Lucas Mitchell",
    duration: "4hr 12min",
    title: "Startup Stories: Entrepreneurs",
    desc: "Exploring the art of storytelling and its impact on various mediums, from books to podcasts.",
    episode: "Episode 32",
    image: EpisodeImage10,
  },
  {
    id: 11,
    hostName: "Ethan Walker",
    duration: "4hr 12min",
    title: "Stories Resonate: The Art of Storytelling",
    desc: "Exploring the art of storytelling and its impact on various mediums, from books to podcasts.",
    episode: "Episode 12",
    image: EpisodeImage11,
  },
];
