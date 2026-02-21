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
import Banner from "@/app/index/banner/page";
import Testimonial from "@/app/index/testimonial/page";
import PageHeader from "@/components/page-header/page-header";
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
      {/* Page Header */}
      <PageHeader title="Pricing Plan" />

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

      <div className="light-section wave-wrapper-section text-white">
        <div className="px-[8%] lg:px-[16%] py-40 pt-50 pb-20 lg:pb-40">
          <div className="title flex flex-col items-center justify-center">
            <div>
              <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                <i className="bi bi-rocket-takeoff pe-4"></i>
                FAQs
              </h2>
            </div>
            <h1 className="text-5xl text-white lg:text-6xl font-semibold mb-5">
              Frequently Asked Questions
            </h1>
            <p className="tracking-wider text-start md:text-center lg:w-[70%]">
              FAQs are widely used on websites, in product manuals, and in
              various instructional documents to address frequently asked
              questions by users or customers.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 pt-10">
            <div className="w-full lg:w-1/2">
              <div className="space-y-4 w-full py-10">
                {faqData.map((item, index) => (
                  <div
                    key={index.toString()}
                    className={`overflow-hidden rounded-md py-4 px-4 lg:px-8 transition-all duration-300 
                      ${
                        openLeftIndex === index
                          ? "bg-primary text-text border border-[#222e48]"
                          : "bg-gray border border-transparent"
                      } `}
                  >
                    <button
                      type="button"
                      onClick={() => toggleLeft(index)}
                      className={`w-full flex justify-between items-center cursor-pointer 
                        transition-all duration-300 border-b border-dashed 
                        ${openLeftIndex === index ? "pb-4 [border-[#222e48]" : "border-transparent"} `}
                    >
                      <span className="text-xl text-left">{item.question}</span>

                      {openLeftIndex === index ? (
                        <i className="bi bi-dash-circle-fill text-2xl text-gray"></i>
                      ) : (
                        <i className="bi bi-plus-circle-fill text-2xl text-primary"></i>
                      )}
                    </button>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden 
                    ${openLeftIndex === index ? "max-h-[300px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
                    >
                      <p className="text-sm">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="space-y-4 w-full py-10">
                {faqData.map((item, index) => (
                  <div
                    key={index.toString()}
                    className={`overflow-hidden rounded-md py-4 px-4 lg:px-8 transition-all duration-300 
                      ${
                        openRightIndex === index
                          ? "bg-primary text-text border border-[#222e48]"
                          : "bg-gray border border-transparent"
                      } `}
                  >
                    <button
                      type="button"
                      onClick={() => toggleRight(index)}
                      className={`w-full flex justify-between items-center cursor-pointer 
                        transition-all duration-300 border-b border-dashed 
                        ${openRightIndex === index ? "pb-4 [border-[#222e48]" : "border-transparent"} `}
                    >
                      <span className="text-xl text-left">{item.question}</span>

                      {openRightIndex === index ? (
                        <i className="bi bi-dash-circle-fill text-2xl text-gray"></i>
                      ) : (
                        <i className="bi bi-plus-circle-fill text-2xl text-primary"></i>
                      )}
                    </button>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden 
                    ${openRightIndex === index ? "max-h-[300px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
                    >
                      <p className="text-sm">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <Banner />
    </>
  );
};

export default Pricing;
