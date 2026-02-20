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
import { useRef } from "react";
import HeaderTitle from "@/components/header-title";

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

const HostProfiles = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="light-section wave-wrapper-section">
      <div className="px-[8%] lg:px-[16%] pt-28 pb-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-3/4">
            {/* header title */}
            <HeaderTitle
              badgeText="Host Profiles"
              badgeIcon="bi bi-mic"
              title="Meet the Voices Behind"
              className="items-start text-start leading-tight"
              titleProps="text-[3.5rem] md:text-[4.5rem]"
            />
          </div>

          <div className="w-full md:w-1/4">
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
                border border-primary text-primary hover:bg-primary hover:text-black 
                transition-all duration-200 hover:translate-x-1 cursor-pointer"
              >
                <i className="bi bi-chevron-double-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-30 pb-10">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          speed={1800}
          breakpoints={{
            1200: { slidesPerView: 4 },
            991: { slidesPerView: 2 },
            757: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className="host-wrapper-swiper"
        >
          {HostProfilesData.map((host, index) => (
            <SwiperSlide key={index.toString()}>
              <div
                className={`host-card ${index % 2 === 1 ? "offset-card" : ""}`}
              >
                <div className="host-img-wrap">
                  <div className="host-img overflow-hidden rounded-2xl">
                    <Image
                      src={host.img}
                      alt={host.name}
                      width={1000}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="host-info px-3 py-4">
                  <h3 className="text-xl text-gray-300">{host.name}</h3>
                  <p className="text-lg text-gray-300">{host.role}</p>
                </div>

                <div className="host-icons absolute bottom-5 bg-gray rounded-full right-5 group">
                  {/* Plush Icon */}
                  <i
                    className="bi bi-plus-lg bg-gray w-12 h-12 flex 
                    items-center justify-center rounded-full cursor-pointer border 
                    border-transparent group-hover:rounded-t-none group-hover:bg-gray-light 
                    group-hover:border group-hover:border-gray transition-all duration-300"
                  ></i>

                  {/* Hidden Social Icon */}
                  <div
                    className="host-hidden flex flex-col absolute bottom-11 right-0 
                    opacity-0 invisible translate-y-4 group-hover:opacity-100 
                    group-hover:visible group-hover:translate-y-0 transition-all 
                    duration-300 ease-out bg-gray rounded-t-full p-2"
                  >
                    <i
                      className="bi bi-facebook w-8 h-8 mb-1 flex items-center 
                      justify-center rounded-full bg-gray-200 border border-primary hover:bg-primary 
                      transition-all duration-300 cursor-pointer"
                    />
                    <i
                      className="bi bi-dribbble w-8 h-8 mb-1 flex items-center 
                      justify-center rounded-full bg-gray-200 border border-primary hover:bg-primary 
                      transition-all duration-300 cursor-pointer"
                    />
                    <i
                      className="bi bi-twitter-x w-8 h-8 mb-1 flex items-center 
                      justify-center rounded-full bg-gray-200 border border-primary hover:bg-primary 
                      transition-all duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HostProfiles;
