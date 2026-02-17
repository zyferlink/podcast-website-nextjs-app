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

const faqs = [
  {
    question: "How often are new episodes released?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
  {
    question: "Can I suggest topics or guests for future episodes?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
  {
    question: "Is there a way to get early access or exclusive content?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
  {
    question: "How do I leave a review or feedback?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
  {
    question: "Do you accept listener questions?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
];

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

  const randomEpisodes = [...EpisodesData]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  // Faq's
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

                <div className="bg-gray-light rounded-lg mt-5 p-5">
                  <h2 className="text-4xl mb-4">Episode Description</h2>
                  <p className=" text-gray-200 tracking-wide">
                    ore the enchanting world of storytelling in Episode 12 -
                    "Stories Resonate: The Art of Storytelling. " In this
                    episode, we unravel the power of narratives, discussing how
                    stories connect us, evoke emotions, and leave a lasting
                    impact. Join us for an insightful conversation on the
                    techniques, emotions, and magic that make storytelling a
                    timeless art form .
                  </p>
                  <h2 className="text-3xl my-5">Guest appearance</h2>
                  <p className=" text-gray-200 tracking-wide">
                    Learn more about our special guest, a seasoned storyteller
                    with a passion for weaving narratives that resonate. Segment
                    of our podcast, where we bring you the insights and
                    perspectives of remarkable individuals who have made their
                    mark in various fields.
                  </p>

                  <h2 className="text-4xl my-5 mt-8">More Related Episodes</h2>
                  <div className="flex flex-col mt-5">
                    {randomEpisodes.map((episode, index) => (
                      <div
                        key={index.toString()}
                        className="flex flex-col bg-gray p-5 rounded-2xl items-center gap-2"
                      >
                        <Link
                          href={`/pages/episodes/${episode.id}`}
                          className="flex flex-col md:flex-row gap-3"
                        >
                          <div className="">
                            <Image
                              src={`/images${episode.image}`}
                              alt={episode.title}
                              width={1000}
                              height={1000}
                              className="w-full min-w-[12rem] h-full rounded-2xl object-cover"
                            />
                          </div>

                          <div className="">
                            <h2 className="text-3xl hover:text-primary transition-all duration-200">
                              {episode.title}
                            </h2>
                            <h2 className="text-2xl my-2 text-primary">
                              {episode.name}
                            </h2>
                            <p className="text-gray-200">{episode.pere}</p>

                            <div className="flex items-center gap-2 mt-2">
                              <i
                                className="bi bi-instagram w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                              ></i>
                              <i
                                className="bi bi-github w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                              ></i>
                              <i
                                className="bi bi-twitter w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                              ></i>
                              <i
                                className="ri-youtube-line w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                              ></i>
                              <i
                                className="bi bi-threads w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                              ></i>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl my-5 mt-8">Transcript</h2>
                <p className="text-gray-300">
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

                <h2 className="text-2xl my-5">
                  App Exploration: Your Current Playground?{" "}
                </h2>
                <p className="text-gray-300">
                  The ever-changing world of apps gives you a front-row ticket
                  to the latest technological marvels. Join us as we explore the
                  exciting world of digital innovation, with each episode
                  serving as a journey of discovery through the apps that shape
                  our daily lives. Apps have become our digital playgrounds in a
                  tech-centric world, bringing together creativity, utility, and
                  enjoyment. Our podcast explores the various programs that
                  enrich and simplify our modern existence.
                </p>

                <div className="flex items-center gap-5 mt-5">
                  <h2 className="text-primary text-3xl">
                    Follow <i className="bi bi-chevron-double-right" />
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <i
                      className="bi bi-instagram w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                    <i
                      className="bi bi-github w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                    <i
                      className="bi bi-twitter w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                    <i
                      className="ri-youtube-line w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                    <i
                      className="bi bi-threads w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Faq */}
            <div className="bg-gray p-5 rounded-2xl mt-5">
              <h2 className="text-3xl font-semibold text-primary">FAQs</h2>
              <div className="border border-dashed border-primary mt-3 mb-5 opacity-30"></div>
              {/* Faq Content */}
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index.toString()}
                      className={` rounded-xl p-4 transition-all duration-500 ease-in-out 
                        ${isOpen ? "bg-primary text-black" : "bg-gray-light"}`}
                    >
                      {/* Question */}
                      <div
                        className={`flex justify-between items-center cursor-pointer 
                          pb-3 transition-all duration-300 
                          ${isOpen ? "border-b border-dashed border-black/40" : ""}`}
                        onClick={() => toggleFaq(index)}
                      >
                        <h3 className="text-xl font-medium">{faq.question}</h3>

                        {/* Icon */}
                        <span
                          className={`w-10 h-10 flex items-center justify-center 
                            rounded-full transition-all duration-300 
                            ${isOpen ? "bg-black text-primary" : "bg-primary text-black"} `}
                        >
                          <i
                            className={`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"} text-xl`}
                          ></i>
                        </span>
                      </div>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 
                          ease-in-out 
                          ${isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"} `}
                      >
                        <p className="text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 sticky top-20 left-0 h-full">
            <div className="bg-gray p-5 rounded-2xl">
              <div className="bg-[#1c1d20] p-5 rounded-2xl">
                <div className="flex justify-center items-center">
                  <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
                    <Image
                      src={`/images${episode.image}`}
                      alt={episode.name}
                      width={800}
                      height={800}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center flex flex-col items-center justify-center mt-4">
                  <h3 className="text-primary">Hosted by</h3>
                  <h2 className="text-2xl">{episode.name}</h2>
                  <h3 className="text-primary">Follow on</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <i
                      className="bi bi-instagram w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                    <i
                      className="bi bi-github w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                    <i
                      className="bi bi-twitter w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                    <i
                      className="ri-youtube-line w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                    <i
                      className="bi bi-threads w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                    ></i>
                  </div>
                </div>
              </div>

              <div className="bg-[#1c1d20] p-5 rounded-2xl mt-5">
                <h2 className="text-3xl text-primary font-semibold">
                  Listen On
                </h2>
                <div className="border border-dashed border-primary mt-3 mb-5 opacity-30"></div>
                <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
                  <Image src={BrandIcon1} alt="brand" />
                  <Image src={BrandIcon2} alt="brand" />
                  <Image src={BrandIcon3} alt="brand" />
                  <Image src={BrandIcon4} alt="brand" />
                  <Image src={BrandIcon5} alt="brand" />
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
