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

  return (
    <>
      {/* Page Section */}
      <div className="page-section bg-black/98 text-white">
        <Image src={PageElement2} alt="Element" className="elm2 elemet" />
        <Image src={PageElement3} alt="Element" className="elm3 elemet" />
        <Image src={PageElement4} alt="Element" className="elm4 elemet" />
        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          <Image src={PageElement1} alt="Element" className="w-full h-full" />

          <h1 className="text-6xl lg:text-8x1 justify-center my-6">
            Episode <span className="text-primary">Details</span>
          </h1>

          <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
            <Image src={BrandIcon1} alt="brand" />
            <Image src={BrandIcon2} alt="brand" />
            <Image src={BrandIcon3} alt="brand" />
            <Image src={BrandIcon4} alt="brand" />
            <Image src={BrandIcon5} alt="brand" />
          </div>
        </div>
      </div>

      {/* Episode Details Wrapper */}
      <div className="dark-section px-[8%] lg:px-[16%] py-20 bg-black/98 text-white">
        <div className="flex flex-col lg:flex-row justify-baseline gap-5">
          <div className="w-full lg:w-1/1">
            <div className="flex flex-col">
              {/* Episode Details */}
              <div className="bg-gray p-5 rounded-2xl">
                {/* Episode Card */}
                <div className="flex w-full flex-col md:flex-row justify-between bg-gray-light rounded-lg p-4 overflow-hidden">
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
                        <Link href={`/pages/Episodes/${episode.id}`}>
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

                      <Link href={`/pages/Episodes/${episode.id}`}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpisodeDetails;
