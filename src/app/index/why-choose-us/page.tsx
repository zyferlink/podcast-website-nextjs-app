"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { StyledButtonSecondary } from "@/components/buttons/styled-button-secondary";
import HeaderTitle from "@/components/header-title";
import WhyChooseUsImage1 from "../../../../public/images/why-choose-1.png";
import WhyChooseUsImage2 from "../../../../public/images/why-choose-2.png";
import WhyChooseUsImage3 from "../../../../public/images/why-choose-3.png";

const WhyChooseUs = () => {
  return (
    <div className="light-section">
      <div className="px-[8%] lg:px-[12%] pt-28 pb-24">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="w-full lg:w-1/2">
            <div className="WhyChooseUs-img flex items-end gap-5">
              <Image
                src={WhyChooseUsImage1}
                alt="WhyChooseUsImg"
                className="w-full h-fit border-t-2 border-primary pt-5"
              />
              <Image
                src={WhyChooseUsImage2}
                alt="WhyChooseUsImg"
                className="w-full h-fit"
              />
              <Image src={WhyChooseUsImage3} alt="WhyChooseUsImg" />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="content">
              {/* header title */}
              <HeaderTitle
                badgeText="Why Choose Us"
                badgeIcon="bi bi-rocket-takeoff"
                title="What Makes Us Unique"
                className="items-center text-center leading-tight"
              />

              <p className="my-2 tracking-wider text-lg font-light leading-snug text-white">
                Experience the magic of sound as stories from all walks of life
                come to life, inviting you on an immersive journey through
                powerful narratives.
              </p>

              {/* points list */}
              <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-4 my-4 border-b border-dashed border-primary-light pb-6 pt-5">
                {[
                  "Play in Background",
                  "Create Your Channel",
                  "Listen Offline",
                  "Browse More Podcasts",
                ].map((point, index) => (
                  <div
                    key={index.toString()}
                    className="text-lg flex items-center gap-2 "
                  >
                    <i className="bi bi-check2 w-7 h-7 flex justify-center items-center bg-primary rounded-full text-dark shrink-0"></i>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              {/* bottom buttons */}
              <div className="flex flex-col items-center gap-5 pt-4">
                <StyledButtonSecondary
                  onClick={() => {}}
                  className="px-8 tracking-normal text-xl"
                  icon={<FaArrowRight size={12} />}
                >
                  Get Started Free
                </StyledButtonSecondary>

                <Link
                  href="/app/pages"
                  className="flex items-center gap-3 group"
                >
                  <i
                    className="bi bi-play p-3 bg-primary rounded-full flex items-center 
                    justify-center text-black text-2xl group-hover:bg-secondary 
                      group-hover:text-white cursor-pointer transition-all duration-200"
                  />
                  <h2 className="text-xl underline text-primary group-hover:text-secondary transition-all duration-200">
                    See About us
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
