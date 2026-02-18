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
import PageBanner1 from "../../../../public/images/Page-banner-1.png";
import PageBanner2 from "../../../../public/images/Page-banner-2.png";
import PageElement1 from "../../../../public/images/page-elm-1.png";
import PageElement2 from "../../../../public/images/page-elm-2.png";
import PageElement3 from "../../../../public/images/page-elm-3.png";
import PageElement4 from "../../../../public/images/page-elm-4.png";
import RocketIcon from "../../../../public/images/rocket-icon.png";
import EpisodesData from "../../../data/EpisodeData.json";

const HostProfilesData = [
  {
    id: 1,
    img: HostImage1,
    name: "Kathryn Murphy",
    role: "Singer",
  },
  {
    id: 2,
    img: HostImage2,
    name: "Ashadul islam",
    role: "Developer",
  },
  {
    id: 3,
    img: HostImage3,
    name: "Kathryn Murphy",
    role: "Singer",
  },
  {
    id: 4,
    img: HostImage4,
    name: "Ashadul islam",
    role: "Developer",
  },
  {
    id: 5,
    img: HostImage5,
    name: "Ashadul islam",
    role: "Developer",
  },
  {
    id: 6,
    img: HostImage6,
    name: "Kathryn Murphy",
    role: "Singer",
  },
  {
    id: 7,
    img: HostImage7,
    name: "Ashadul islam",
    role: "Developer",
  },
  {
    id: 8,
    img: HostImage8,
    name: "Kathryn Murphy",
    role: "Singer",
  },
  {
    id: 9,
    img: HostImage9,
    name: "Ashadul islam",
    role: "Developer",
  },
  {
    id: 10,
    img: HostImage10,
    name: "Ashadul islam",
    role: "Developer",
  },
];

const HostProfile = () => {
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
            Host <span className="text-primary">Profile</span>
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

      <div className="dark-section pt-20 bg-black/98 text-white">
        <div className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-30 pb-10">
          <div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {HostProfilesData.map((host, index) => (
                  <div key={index.toString()} className={`host-card relative`}>
                    <div className="host-img-wrap">
                      <div className="host-img overflow-auto rounded-2xl">
                        <Image
                          src={host.img}
                          alt={host.name}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="host-info px-3 py-4">
                      <h3 className="text-2xl text-gray-300">{host.name}</h3>
                      <p className="text-lg text-gray-300">{host.role}</p>
                    </div>

                    <div className="host-icons absolute bottom-5 bg-gray rounded-full right-5 group">
                      {/* Plus Icon */}
                      <i
                        className="bi bi-plus-lg bg-gray w-12 h-12 flex items-center 
                        justify-center rounded-full cursor-pointer border border-transparent 
                        group-hover:rounded-t-none group-hover:bg-gray-light 
                        group-hover:border-gray transition-all duration-300"
                      ></i>

                      {/* Hidden Social Icons */}
                      <div
                        className="host-hidden-icon flex flex-col absolute bottom-12 right-0 
                        opacity-0 invisible translate-y-4 group-hover:opacity-100 
                        group-hover:visible group-hover:translate-y-0 transition-all duration-300 
                        ease-out bg-gray rounded-t-full p-2"
                      >
                        <i
                          className="bi bi-facebook w-8 h-8 mb-1 flex items-center 
                        justify-center rounded-full bg-gray-light border border-primary 
                        hover:bg-primary transition-all duration-200 cursor-pointer"
                        ></i>
                        <i
                          className="bi bi-dribbble w-8 h-8 mb-1 flex items-center 
                        justify-center rounded-full bg-gray-light border border-primary 
                        hover:bg-primary transition-all duration-200 cursor-pointer"
                        ></i>
                        <i
                          className="bi bi-twitter-x w-8 h-8 mb-1 flex items-center 
                        justify-center rounded-full bg-gray-light border border-primary 
                        hover:bg-primary transition-all duration-200 cursor-pointer"
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostProfile;
