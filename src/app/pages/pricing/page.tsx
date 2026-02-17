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
import musicWavesImage from "@/public/music-waves.png";
import BrandIcon1 from "../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../public/images/brand-icon-5.png";
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
    </>
  );
};

export default Pricing;
