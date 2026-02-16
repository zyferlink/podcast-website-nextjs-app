"use client";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
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
import { useRef } from "react";

const HostProfiles = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="light-section ">
      <div className="px-[8%] lg:px-[16%] py-30 pb-10 lg:pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full lg:w-1/1">
            <div className="title flex flex-col gap-2">
              <div>
                <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                  <i className="bi bi-rocket-takeoff pe-4"></i>
                  Host Profiles
                </h2>
              </div>

              <h1 className="text-4xl lg:text-5xl text-white font-semibold mt-4">
                Meet the Voices Behind
              </h1>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {/* Custom Navigation Button */}

            <div className="flex justify-start md:justify-end gap-4 mt-6 lg:mt-0">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 flex items-center justify-center rounded-full 
                border border-primary text-primary hover:bg-primary Ohover:text-black 
                transition-all duration-200 hover:-translate-x-1 cursor-pointer"
              >
                <i className="bi bi-chevron-double-left"></i>
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 flex items-center justify-center rounded-full 
                border border-primary text-primary hover:bg-primary Ohover:text-black 
                transition-all duration-200 hover:translate-x-1 cursor-pointer"
              >
                <i className="bi bi-chevron-double-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostProfiles;
