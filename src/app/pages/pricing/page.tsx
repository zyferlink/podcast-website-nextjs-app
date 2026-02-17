"use client";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HostImage1 from "../../../../public/images/host-profile-1.png";
import HostImage2 from "../../../../public/images/host-profile-2.png";
import HostImage3 from "../../../../public/images/host-profile-3.png";
import HostImage4 from "../../../../public/images/host-profile-4.png";
import HostImage5 from "../../../../public/images/host-profile-5.png";
import HostImage6 from "../../../../public/images/host-profile-6.png";
import HostImage7 from "../../../../public/images/host-profile-7.png";
import HostImage8 from "../../../../public/images/host-profile-8.png";
import HostImage9 from "../../../../public/images/host-profile-9.png";
import HostImage10 from "../../../../public/images/host-profile-10.png";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import BrandIcon1 from "../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../public/images/brand-icon-5.png";
import MusicWavesImage from "../../../../public/images/music-waves.png";
import PageBanner1 from "../../../../public/images/Page-banner-1.png";
import PageBanner2 from "../../../../public/images/Page-banner-2.png";
import PageElement1 from "../../../../public/images/page-elm-1.png";
import PageElement2 from "../../../../public/images/page-elm-2.png";
import PageElement3 from "../../../../public/images/page-elm-3.png";
import PageElement4 from "../../../../public/images/page-elm-4.png";
import RocketIcon from "../../../../public/images/rocket-icon.png";
import EpisodesData from "../../../data/EpisodeData.json";

const faqData = [
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

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const [openLeftIndex, setopenLeftIndex] = useState<number | null>(null);
  const [openRightIndex, setopenRightIndex] = useState<number | null>(null);

  const toggleLeft = (index: number) => {
    setopenLeftIndex(openLeftIndex === index ? null : index);
  };

  const toggleRight = (index: number) => {
    setopenRightIndex(openRightIndex === index ? null : index);
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

          <h1 className="text-6xl lg:text-8xl justify-center my-6">
            <span className="text-primary">Pricing</span>
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

      <div className="dark-section bg-black/98 text-white">
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="title text-center">
            <div>
              <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                <i className="bi bi-rocket-takeoff pe-4"></i>
                Pricing Plan
              </h2>
            </div>
            <h1 className="text-5xl text-white lg:text-6xl font-semibold mt-7">
              Flexible Pricing Options
            </h1>

            <div className="flex items-center justify-center gap-4 mt-4">
              <span className={billing === "monthly" ? "text-white" : ""}>
                Monthly
              </span>

              <button
                type="button"
                onClick={() =>
                  setBilling(billing === "monthly" ? "yearly" : "monthly")
                }
                className="relative w-14 h-7 bg-gray rounded-full cursor-pointer"
              >
                <span
                  className={`absolute top-1 w-5 h-5 bg-primary rounded-full transition-all 
                  duration-300 ${billing === "yearly" ? "left-8" : "left-1"}`}
                ></span>
              </button>

              <span className={billing === "yearly" ? "text-white" : ""}>
                Yearly <span className="text-primary">(Save 30%)</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-15">
              <div className="bg-gray-light px-6 py-6 rounded-xl">
                <div className="border-b border-dashed border-primary-light pb-8">
                  <h4 className="font-semibold text-xl text-start mb-2">
                    Free
                  </h4>
                  <div className="flex items-end justify-center gap-1 mb-5">
                    <h1 className="text-5xl text-primary font-semibold">
                      0.00
                    </h1>
                    <span className="text-xl text-primary">
                      /{billing === "monthly" ? "Mo" : "Yr"}
                    </span>
                  </div>

                  <p className="">
                    Get exclusive podcasts from your favorite hosts on here for
                    free.
                  </p>
                </div>

                <ul className="space-y-3 list-none py-8">
                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Latest and freebies topics
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Curated speakers
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Free content only
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Available on all platforms
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    upto 20 channel Subscribe
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Unlimited episodes
                  </li>
                </ul>

                <button type="button" className="btn btn1">
                  Get Started Now <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>

              <div className="bg-gray-light px-6 py-6 rounded-xl">
                <div className="border-b border-dashed border-primary-light pb-8">
                  <div className="flex justify-center text-start items-center">
                    <h4 className="font-semibold text-xl mb-2">Premium</h4>
                    <Image
                      src={MusicWavesImage}
                      alt="music-waves-img"
                      className="w-40"
                    />
                  </div>

                  <div className="flex items-end justify-center gap-1 mb-5">
                    <h1 className="text-5xl text-primary font-semibold">
                      {billing === "monthly" ? "29.00" : "329.00"}
                    </h1>
                    <span className="text-xl text-primary">
                      /{billing === "monthly" ? "Mo" : "Yr"}
                    </span>
                  </div>

                  <p className="">
                    Get exclusive podcasts from your favorite hosts on here for
                    free.
                  </p>
                </div>

                <ul className="space-y-3 list-none py-8">
                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Latest and Premium topics
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Curated speakers
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    All content
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Available on all platforms
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    upto 20 channel Subscribe
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Unlimited episodes
                  </li>
                </ul>

                <button type="button" className="btn btn1">
                  Get Started Now <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>

              <div className="bg-gray-light px-6 py-6 rounded-xl">
                <div className="border-b border-dashed border-primary-light pb-8">
                  <h4 className="font-semibold text-xl text-start mb-2">
                    Special
                  </h4>
                  <div className="flex items-end justify-center gap-1 mb-5">
                    <h1 className="text-5xl text-primary font-semibold">
                      {billing === "monthly" ? "99.00" : "999.00"}
                    </h1>
                    <span className="text-xl text-primary">
                      /{billing === "monthly" ? "Mo" : "Yr"}
                    </span>
                  </div>

                  <p className="">
                    Get exclusive podcasts from your favorite hosts on here for
                    free.
                  </p>
                </div>

                <ul className="space-y-3 list-none py-8">
                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Latest and freebies topics
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Curated speakers
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Free content only
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Available on all platforms
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    upto 20 channel Subscribe
                  </li>

                  <li className="flex gap-3 items-center">
                    <i className="bi bi-check-circle-fill text-primary text-xl"></i>
                    Unlimited episodes
                  </li>
                </ul>

                <button type="button" className="btn btn1">
                  Get Started Now <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
