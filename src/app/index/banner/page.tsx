"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { StyledButtonPrimary } from "@/components/buttons/styled-button-primary";
import BannerMicImage from "../../../../public/assets/images/banner-mic.png";

const Banner = () => {
  return (
    <div className="dark-section px-[8%] lg:px-[12%] py-20">
      <div className="banner bg-banner-background px-[7%] rounded-xl">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-25">
            <div className="w-full lg:w-1/2 relative">
              <h1 className="text-4xl lg:text-5xl text-dark-text leading-[1.1] font-semibold my-10">
                Get the Latest Episode & Never Miss an Episode
              </h1>
              <div
                className="flex flex-col md:flex-row items-start justify-between 
                md:items-center gap-5 md:gap-0 bg-black rounded-2xl md:rounded-full px-3 py-2 mb-4"
              >
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="text-white placeholder:text-gray-300 px-3 py-2 outline-none"
                  />
                </div>
                <div className="sub-btn">
                  <StyledButtonPrimary
                    onClick={() => {}}
                    className="tracking-wide"
                    icon={<FaArrowRight size={12} />}
                  >
                    Subscribe
                  </StyledButtonPrimary>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="banner-img">
                <Image
                  src={BannerMicImage}
                  alt="bannerImg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
