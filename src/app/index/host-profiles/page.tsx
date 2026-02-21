"use client";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";
import HeaderTitle from "@/components/header-title";
import { HostProfileData } from "@/data/host-profiles";

const HostProfiles = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="light-section wave-wrapper-section">
      <div className="px-[8%] lg:px-[16%] pt-28 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-3/4">
            {/* header title */}
            <HeaderTitle
              badgeText="Host Profiles"
              badgeIcon="bi bi-rocket-takeoff"
              title="Meet the Voices Behind"
              titleProps="text-[3.5rem] md:text-[4.5rem] leading-[1.1]"
            />
          </div>

          <div className="w-full md:w-1/4">
            {/* Custom Navigation Button */}
            <div className="flex justify-start md:justify-end gap-4 mt-6 lg:mt-0">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 flex items-center justify-center rounded-full 
                border border-primary text-primary hover:bg-primary hover:text-black 
                transition-all duration-200 hover:-translate-x-1 cursor-pointer"
              >
                <i className="bi bi-chevron-double-left" />
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 flex items-center justify-center rounded-full 
                border border-primary text-primary hover:bg-primary hover:text-black 
                transition-all duration-200 hover:translate-x-1 cursor-pointer"
              >
                <i className="bi bi-chevron-double-right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[16%] lg:pb-30 pb-10">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          speed={2000}
          breakpoints={{
            1200: { slidesPerView: 4 },
            991: { slidesPerView: 2 },
            757: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="host-wrapper-swiper"
        >
          {HostProfileData.map((host, index) => (
            <SwiperSlide key={index.toString()}>
              <div
                className={`host-card ${index % 2 === 1 ? "offset-card" : ""}`}
              >
                <div className="host-img-wrap">
                  <div className="host-img overflow-hidden rounded-2xl">
                    <Image
                      src={host.image}
                      alt={host.name}
                      width={1000}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="host-info px-3 py-4">
                  <h3 className="text-lg text-gray-100 font-bold">
                    {host.name}
                  </h3>
                  <p className="text-base text-gray-300 font-bold">
                    {host.role}
                  </p>
                </div>

                <div className="host-icons absolute bottom-6 bg-gray rounded-full right-0 group">
                  {/* Plush Icon */}
                  <i
                    className="bi bi-plus-lg text-primary bg-gray-600 w-11 h-11 flex 
                    items-center justify-center rounded-full cursor-pointer border 
                    border-transparent group-hover:rounded-t-none group-hover:bg-gray-500 
                    group-hover:border group-hover:border-gray transition-all duration-300"
                  />

                  {/* Hidden Social Icon */}
                  <div
                    className="host-hidden flex flex-col absolute bottom-10 right-0 
                    opacity-0 invisible translate-y-4 group-hover:opacity-100 
                    group-hover:visible group-hover:translate-y-0 transition-all 
                    duration-300 ease-out bg-gray rounded-t-full p-2"
                  >
                    <i
                      className="bi bi-facebook w-7 h-7 mb-1 flex items-center 
                      justify-center rounded-full bg-gray-200 border border-primary hover:bg-primary 
                      transition-all duration-300 cursor-pointer"
                    />
                    <i
                      className="bi bi-dribbble w-7 h-7 mb-1 flex items-center 
                      justify-center rounded-full bg-gray-200 border border-primary hover:bg-primary 
                      transition-all duration-300 cursor-pointer"
                    />
                    <i
                      className="bi bi-twitter-x w-7 h-7 mb-1 flex items-center 
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
