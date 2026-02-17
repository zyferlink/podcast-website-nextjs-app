"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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

const EpisodeDetails = () => {
  const { id } = useParams();

  const episode = EpisodesData.find((ep) => ep.id === Number(id)) as
    | Episode
    | undefined;

  if (!episode) {
    return (
      <div className="dark-section px-[8%] lg:px-[16%] py-30 text-center bg-black/98 text-white">
        <h2 className="text-4xl text-gray-400">Episode not found</h2>

        <Link
          href="/pages/episodes"
          className="inline-block mt-6 text-primary underline"
        >
          Back to Episodes
        </Link>
      </div>
    );
  }

  return <div>Page</div>;
};

export default EpisodeDetails;
