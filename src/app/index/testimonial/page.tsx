"use client";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";
import HeaderTitle from "@/components/header-title";
import { StarRating } from "@/components/star-rating";
import { TestimonialData } from "@/data/testimonial-data";
import QuoteIcon from "../../../../public/assets/images/quote-icon.svg";
import QuoteBg from "../../../../public/assets/images/testimonial-card-qoute-bg.png";

const Testimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="dark-section wave-wrapper-section2">
      <div className="px-[8%] lg:px-[16%] pt-28 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full flex justify-center items-center text-center">
            <div className="w-full lg:w-2/3 title flex flex-col gap-2">
              {/* header title */}
              <HeaderTitle
                badgeText="Testimonial"
                badgeIcon="bi bi-rocket-takeoff"
                title="Listener Love, What They Say"
                className="items-center text-center leading-[1.1]"
                titleProps="text-[3.5rem] md:text-[4.2rem]"
              />

              <p className="text-gray-100 tracking-wider pt-2 text-lg font-light">
                Explore what our listeners have to say about their experiences
                with our podcast. Their testimonials capture the essence of the
                joy, inspiration
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 md:mt-10 px-[8%] lg:px-[16%] lg:pb-30 pb-10">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          speed={1500}
          className="test-wrapper-swiper"
        >
          {TestimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="w-full lg:w-2/5">
                  <div className="test-img relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="quote-img">
                      <Image
                        src={QuoteBg}
                        alt="qouteBg"
                        className="object-contain absolute top-0 right-0"
                      />
                      <Image
                        src={QuoteIcon}
                        alt="qoute"
                        width={100}
                        height={100}
                        className="object-contain p-5 rounded-full absolute bg-primary top-0 right-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 test-content-wrap">
                  <div className="test-content">
                    <StarRating
                      rating={testimonial.rating}
                      className={"test-stars flex items-center gap-3"}
                    />

                    <p className="text-xl text-gray-300 tracking-wide my-5">
                      {testimonial.quote}
                    </p>

                    <div className="test-border border-t border-dashed border-primary-light opacity-50 pt-5" />
                    <div className="test-info">
                      <h2 className="text-3xl text-white">
                        {testimonial.name}
                      </h2>
                      <h2 className="text-xl mt-2 text-gray-300 font-light">
                        {testimonial.role}
                      </h2>
                    </div>
                  </div>

                  {/* Custom Navigation button */}
                  <div className="text-btns flex justify-start gap-4 mt-6">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
