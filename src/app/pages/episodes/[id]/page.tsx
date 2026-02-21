"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import PageHeader from "@/components/page-header/page-header";
import SocialMediaSet2 from "@/components/social-media-buttons/social-media-set-2";
import { type Episode, EpisodeData } from "@/data/episodes";
import { FaqData } from "@/data/faq";
import { TagsData } from "@/data/tags";
import PlatformIcon5 from "../../../../../public/assets/images/platform-icon-instagram.svg";
import PlatformIcon1 from "../../../../../public/assets/images/platform-icon-soundcloud.svg";
import PlatformIcon2 from "../../../../../public/assets/images/platform-icon-spotify.svg";
import PlatformIcon3 from "../../../../../public/assets/images/platform-icon-swarm.svg";
import PlatformIcon4 from "../../../../../public/assets/images/platform-icon-youtube.svg";

const EpisodeDetails = () => {
  const { id } = useParams();

  const episode = EpisodeData.find((ep) => ep.id === Number(id)) as
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

  const randomEpisodes = [...EpisodeData]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  // Faq's
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Page Header */}
      <PageHeader title="Episode Details" />

      {/* Episode Details Wrapper */}
      <div className="dark-section px-[8%] lg:px-[12%] 2xl:px-[16%] py-20">
        <div className="flex flex-col lg:flex-row justify-baseline gap-5">
          <div className="w-full lg:w-1/1">
            <div className="flex flex-col">
              {/* Episode Details */}
              <div className="bg-gray p-3 rounded-2xl">
                {/* Episode Card */}
                <div className="flex w-full flex-col md:flex-row justify-between bg-gray-light rounded-lg p-4 overflow-hidden">
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
                    <div className="p-5">
                      <div className="flex flex-row flex-wrap justify-between items-center">
                        <Link href={`/pages/episodes/${episode.id}`}>
                          <p className=" text-gray-200 hover:text-primary tracking-wider transition-all duration-200">
                            <i className="bi bi-mic text-primary" />{" "}
                            {episode.hostName}
                          </p>
                        </Link>

                        <h2 className="text-gray-300 font-light">
                          <i className="bi bi-clock pe-1 text-primary" />{" "}
                          {episode.duration}
                        </h2>

                        <span className="bg-gray px-4 py-2 rounded-full text-sm text-primary font-semibold tracking-wide">
                          {episode.episode}
                        </span>
                      </div>

                      <Link href={`/pages/episodes/${episode.id}`}>
                        <h2 className="mt-3 text-2xl text-white hover:text-primary transition-all duration-200">
                          {episode.title}
                        </h2>
                        <p className="my-3 text-gray-300 font-light text-base">
                          {episode.desc}
                        </p>
                      </Link>

                      <div className="flex justify-between items-center gap-5 pt-2">
                        <Link
                          href={`/pages/episodes/${episode.id}`}
                          className="flex items-center gap-2 group"
                        >
                          <i
                            className="bi bi-play p-3 bg-primary rounded-full flex text-black text-2xl group-hover:bg-secondary 
                          group-hover:text-white items-center justify-center transition-all duration-200"
                          />
                          <h2 className="text-lg underline text-primary group-hover:text-secondary transition-all duration-200">
                            Listen Now
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-light rounded-lg mt-3 p-5">
                  <h2 className="text-4xl mb-4 text-white">
                    Episode Description
                  </h2>
                  <p className="text-gray-100 tracking-wide font-light">
                    Explore the enchanting world of storytelling in Episode 12 -
                    "Stories Resonate: The Art of Storytelling. "In this
                    episode, we unravel the power of narratives, discussing how
                    stories connect us, evoke emotions, and leave a lasting
                    impact. Join us for an insightful conversation on the
                    techniques, emotions, and magic that make storytelling a
                    timeless art form .
                  </p>
                  <h2 className="text-3xl my-5 pt-4 text-white">
                    Guest appearance
                  </h2>
                  <p className="text-gray-100 tracking-wide font-light">
                    Learn more about our special guest, a seasoned storyteller
                    with a passion for weaving narratives that resonate. Segment
                    of our podcast, where we bring you the insights and
                    perspectives of remarkable individuals who have made their
                    mark in various fields.
                  </p>

                  <h2 className="text-4xl my-6 mt-12 text-white">
                    More Related Episodes
                  </h2>
                  <div className="flex flex-col">
                    {randomEpisodes.map((episode) => (
                      <div
                        key={episode.id}
                        className="flex flex-col bg-gray my-2 p-3 rounded-2xl items-center gap-2"
                      >
                        <Link
                          href={`/pages/episodes/${episode.id}`}
                          className="flex flex-col md:flex-row gap-3"
                        >
                          <div className="">
                            <Image
                              src={episode.image}
                              alt={episode.title}
                              width={1000}
                              height={1000}
                              className="w-full min-w-48 h-full rounded-2xl object-cover"
                            />
                          </div>

                          <div className="flex flex-col py-2 justify-between">
                            <h2 className="text-3xl text-white hover:text-primary transition-all duration-200">
                              {episode.title}
                            </h2>
                            <h2 className="text-2xl my-2 text-primary">
                              {episode.hostName}
                            </h2>
                            <p className="text-gray-200 font-light my-4">
                              {episode.desc}
                            </p>

                            <SocialMediaSet2 mainProps="mt-2" />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl my-5 mt-8 text-white">Transcript</h2>
                <p className="text-gray-100 tracking-wide font-light">
                  For those who prefer reading or have accessibility needs,
                  here's the full transcript of the episode. View captivating
                  images and visuals that complement the storytelling journey
                  explored in this episode. Untangle the strands that bind us to
                  stories that have formed cultures, sparked imaginations, and
                  stirred emotions throughout history. This podcast allows you
                  to dive into the stories that resonate and uncover the
                  everlasting essence of storytelling, whether you're a literary
                  aficionado, a cinema buff, or simply intrigued by the craft of
                  weaving narratives.
                </p>

                <h2 className="text-2xl my-5 text-white pt-4">
                  App Exploration: Your Current Playground?{" "}
                </h2>
                <p className="text-gray-100 tracking-wide font-light">
                  The ever-changing world of apps gives you a front-row ticket
                  to the latest technological marvels. Join us as we explore the
                  exciting world of digital innovation, with each episode
                  serving as a journey of discovery through the apps that shape
                  our daily lives. Apps have become our digital playgrounds in a
                  tech-centric world, bringing together creativity, utility, and
                  enjoyment. Our podcast explores the various programs that
                  enrich and simplify our modern existence.
                </p>

                <div className="flex items-center gap-5 mt-5 mb-2">
                  <h2 className="text-primary text-2xl">
                    Follow <i className="bi bi-chevron-double-right" />
                  </h2>
                  <SocialMediaSet2 />
                </div>
              </div>
            </div>

            {/* Faq */}
            <div className="bg-gray p-5 rounded-2xl mt-5">
              <h2 className="text-4xl font-semibold text-primary">FAQs</h2>
              <div className="border border-dashed border-primary mt-3 mb-5 opacity-30"></div>
              {/* Faq Content */}
              <div className="space-y-4">
                {FaqData.map((faq) => {
                  const isOpen = openIndex === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={` rounded-xl p-4 transition-all duration-500 ease-in-out 
                        ${isOpen ? "bg-primary text-black" : "bg-gray-light"}`}
                    >
                      {/* Question */}
                      <div
                        role="group"
                        className={`flex justify-between items-center cursor-pointer 
                          pb-3 transition-all duration-300 
                          ${isOpen ? "border-b border-dashed border-black/40" : ""}`}
                        onClick={() => toggleFaq(faq.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleFaq(faq.id);
                          }
                        }}
                      >
                        <h3
                          className={`text-xl font-medium  ${isOpen ? "text-black" : "text-white"}`}
                        >
                          {faq.question}
                        </h3>

                        {/* Icon */}
                        <span
                          className={`w-10 h-10 flex items-center justify-center 
                            rounded-full transition-all duration-300 
                            ${isOpen ? "bg-black text-primary" : "bg-primary text-black"} `}
                        >
                          <i
                            className={`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"} pt-1 text-xl`}
                          />
                        </span>
                      </div>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out 
                          ${isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"} `}
                      >
                        <p className="text-base px-2">{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 sticky top-20 left-0 h-full">
            <div className="bg-gray p-3 rounded-2xl">
              <div className="bg-[#1c1d20] p-5 rounded-2xl">
                <div className="flex justify-center items-center">
                  <div className="w-50 h-50 overflow-hidden rounded-full">
                    <Image
                      src={episode.image}
                      alt={episode.title}
                      width={800}
                      height={800}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center flex flex-col items-center justify-center mt-4">
                  <h3 className="text-primary">Hosted by</h3>
                  <h2 className="text-2xl text-white">{episode.hostName}</h2>
                  <h3 className="text-primary">Follow on</h3>
                  <SocialMediaSet2 mainProps="mt-2" />
                </div>
              </div>

              <div className="bg-[#1c1d20] p-5 rounded-2xl mt-3">
                <h2 className="text-3xl text-primary font-semibold">
                  Listen On
                </h2>
                <div className="border border-dashed border-primary mt-3 mb-5 opacity-30" />
                <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
                  <Image src={PlatformIcon1} alt="brand" className="w-8" />
                  <Image src={PlatformIcon2} alt="brand" className="w-8" />
                  <Image src={PlatformIcon3} alt="brand" className="w-8" />
                  <Image src={PlatformIcon4} alt="brand" className="w-8" />
                  <Image src={PlatformIcon5} alt="brand" className="w-8" />
                </div>
              </div>

              <div className="bg-[#1c1d20] p-5 rounded-2xl mt-3">
                <h2 className="text-3xl text-primary font-semibold">
                  Popular Tags
                </h2>
                <div className="border border-dashed border-primary mt-3 mb-5 opacity-30" />
                <div className="flex flex-wrap items-center gap-3 mt-5">
                  {TagsData.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-5 py-1 text-white rounded-full bg-gray hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      {tag.label}
                    </span>
                  ))}
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
