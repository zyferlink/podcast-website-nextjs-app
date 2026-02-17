"use client";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Testimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="light-section wave-wrapper-section">
      <div className="px-[8%] lg:px-[16%] py-30 pb-10 lg:pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full flex justify-center items-center text-center">
            <div className="w-full lg:w-1/2 title flex flex-col gap-2">
              <div>
                <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                  <i className="bi bi-rocket-takeoff pe-4"></i>
                  Testimonial
                </h2>
              </div>

              <h1 className="text-4xl lg:text-5xl text-white font-semibold mt-4">
                Listener Love, What They Say
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
