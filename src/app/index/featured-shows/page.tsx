"use client";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TopListens1 from "../../../../public/images/top-listens-1.png";
import TopListens2 from "../../../../public/images/top-listens-2.png";
import TopListens3 from "../../../../public/images/top-listens-3.png";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const TopListensData = [
  {
    id: 1,
    title: "Behind the Mic: Podcasting Exp ... ",
    img: TopListens1,
    episode: "Episode 06",
    hostName: "Devon Lane",
  },
  {
    id: 3,
    title: "Laughing Through Life's Labyri ... ",
    img: TopListens3,
    episode: "Episode 12",
    hostName: "Mr Jones Weks",
  },
  {
    id: 4,
    title: "Tech Trends Unveiled: Future H ... ",
    img: TopListens2,
    episode: "Episode 17",
    hostName: "Arlene McCoy",
  },

  {
    id: 5,
    title: "Laughing Through Life's Labyri ... ",
    img: TopListens3,
    episode: "Episode 12",
    hostName: "Mr Jones Weks",
  },
];

const FeaturedShows = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="dark-section bg-black/80">
      <div className="px-[8%] lg:px-[16%] py-30 pb-10 lg:pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2">
            <div className="title flex flex-col gap-2">
              <div>
                <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                  <i className="bi bi-rocket-takeoff pe-4"></i>
                  Featured Shows
                </h2>
              </div>

              <h1 className="text-4xl lg:text-5xl text-white font-semibold mt-4">
                Top Listens Now
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
          {TopListensData.map((item, idx) => (
            <SwiperSlide key={idx.toString()}>
              <div className="w-full">
                <div className="flex w-full justify-between bg-gray-light rounded-lg overflow-hidden">
                  <div className="w-full lg:w-1/2">
                    <Image
                      src={item.img}
                      alt="TopListens"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="p-2">
                      <div className="flex flex-col lg:flex-row justify-between items-center">
                        <span className="bg-gray/50 px-4 py-1 rounded-2xl text-primary font-medium text-base tracking-wide">
                          {item.episode}
                        </span>
                        <Link href="/app/pages">
                          <p className="ml-2 py-2 font-light text-gray-200 hover:text-primary tracking-wider transition-all duration-200">
                            <i className="bi bi-mic text-primary"></i>
                            {item.hostName}
                          </p>
                        </Link>
                      </div>
                      <h2 className="my-5 text-white  text-xl lg:text-3xl font-semibold">
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
