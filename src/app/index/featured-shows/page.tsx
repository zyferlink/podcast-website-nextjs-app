"use client";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderTitle from "@/components/header-title";
import { TopListensData } from "@/data/featured-shows";

const FeaturedShows = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="dark-section">
      <div className="px-[8%] lg:px-[16%] py-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* header title */}
          <div className="w-full lg:w-1/2">
            <HeaderTitle
              badgeText="Featured Shows"
              badgeIcon="bi bi-rocket-takeoff"
              title="Top Listens Now"
            />
          </div>

          {/* custom navigation button */}
          <div className="w-full md:w-1/2">
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

      <div className="mt-10 px-5 pb-30">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            1200: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            757: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {TopListensData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full">
                <div className="flex w-full min-h-87 justify-between bg-gray-light rounded-lg overflow-hidden">
                  <div className="w-full lg:w-1/2">
                    <Image
                      src={item.image}
                      alt="TopListens"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="p-2">
                      <div className="flex flex-col justify-between items-center">
                        <Link href="/app/pages">
                          <p className="ml-2 py-2 font-light text-gray-200 hover:text-primary tracking-wider transition-all duration-200">
                            <i className="bi bi-mic text-primary"></i>
                            {item.hostName}
                          </p>
                        </Link>
                        <span className="bg-gray/50 px-4 py-1 rounded-2xl text-primary font-medium text-base tracking-wide">
                          {item.episode}
                        </span>
                      </div>
                      <h2 className="my-8 mx-2 text-center text-white text-2xl lg:text-xl font-semibold">
                        {item.title}
                      </h2>
                      <div className="flex items-center gap-3">
                        <i
                          className="bi bi-play p-4 bg-primary rounded-full flex items-center justify-center text-black text-2xl 
                          hover:bg-secondary hover:text-white cursor-pointer transition-all duration-200"
                        ></i>

                        <div className="w-full flex flex-col gap-2">
                          <div className="w-full h-1 bg-gray"></div>
                          <span className="text-gray-200">0:00</span>
                        </div>
                      </div>
                      <div className="mt-7">
                        <Link
                          href="/"
                          className="text-primary hover:text-white underline transition-all duration-300 tracking-wider"
                        >
                          Listen Now
                        </Link>
                      </div>
                    </div>
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

export default FeaturedShows;
