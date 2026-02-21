"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa6";
import Banner from "@/app/index/banner/page";
import HostProfiles from "@/app/index/host-profiles/page";
import Testimonial from "@/app/index/testimonial/page";
import { StyledButtonSecondary } from "@/components/buttons/styled-button-secondary";
import HeaderTitle from "@/components/header-title";
import PageHeader from "@/components/page-header/page-header";
import ExperienceBanner1 from "../../../../public/images/elevate-banner-1.png";
import ExperienceBanner2 from "../../../../public/images/elevate-banner-2.png";
import ExperienceBannerArrow1 from "../../../../public/images/elevate-banner-arrow1.png";
import ExperienceBannerArrow2 from "../../../../public/images/elevate-banner-arrow2.png";
import WhyChooseUsImage1 from "../../../../public/images/why-choose-1.png";
import WhyChooseUsImage2 from "../../../../public/images/why-choose-2.png";
import WhyChooseUsImage3 from "../../../../public/images/why-choose-3.png";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="About VoiceFlow" />

      {/* Experience */}
      <div className="dark-section pb-14">
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="content">
                {/* header title */}
                <HeaderTitle
                  badgeText="Elevate Your Experience"
                  badgeIcon="bi bi-rocket-takeoff"
                  title="Explore Excellence in Podcasting"
                  className="leading-[1.1]"
                  titleProps="text-[3rem] md:text-[4.2rem]"
                />

                <p className="my-5 tracking-wider text-white font-light text-base">
                  Explore vibrant soundscapes where stories of every kind come
                  alive, taking you on an immersive journey and through
                  captivating narratives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 border-b border-dashed border-primary-light pb-6 pt-5">
                  <div className="flex items-center gap-2">
                    <div>
                      <i className="bi bi-volume-up border-s-2 ps-2 border-[#0de27c] text-5xl text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl text-white font-bold">
                        Empower Listeners
                      </h2>
                      <p className="mt-3 text-gray-300">
                        Explore vibrant soundscapes where stories
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div>
                      <i className="bi bi-volume-up border-s-2 ps-2 border-[#0de27c] text-5xl text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl text-white font-bold">
                        Build Community
                      </h2>
                      <p className="mt-3 text-gray-300">
                        Explore vibrant soundscapes where stories
                      </p>
                    </div>
                  </div>
                </div>

                <StyledButtonSecondary
                  onClick={() => {}}
                  className="px-8 tracking-normal text-xl"
                  icon={<FaArrowRight size={12} />}
                >
                  Get Started Free
                </StyledButtonSecondary>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="experience-images flex items-start gap-3">
                <Image
                  src={ExperienceBanner1}
                  alt="Experience1"
                  className="exp-img rounded-2xl"
                />
                <Image
                  src={ExperienceBanner2}
                  alt="Experience1"
                  className="exp-img hidden md:block rounded-2xl"
                />
                <Image
                  src={ExperienceBannerArrow1}
                  alt="arrow1"
                  className="exp-arrow1"
                />
                <Image
                  src={ExperienceBannerArrow2}
                  alt="arrow1"
                  className="exp-arrow2"
                />

                <div className="absolute bottom-0 right-35 lg:right-0 bg-[#0de27c] p-5 rounded-2xl">
                  <div className="flex items-center justify-center gap-5 text-dark-text">
                    <h2 className="text-6xl font-semibold">
                      <CountUp start={0} end={11} duration={5} />
                    </h2>
                    <p className="text-xl w-1/2">Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="light-section">
        <div className="px-[8%] md:px-[12%] 2xl:px-[16%] py-24 pb-50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="w-full lg:w-1/2">
              {/* why choose us image section */}
              <div className="relative animate-[anim-small-translate_5s_ease-in-out_infinite] flex items-end gap-5 overflow-hidden">
                <Image
                  src={WhyChooseUsImage1}
                  alt="WhyChooseUsImg"
                  className="w-full h-fit border-t-2 border-purple-600 pt-3"
                />
                <Image
                  src={WhyChooseUsImage2}
                  alt="WhyChooseUsImg"
                  className="w-full h-fit"
                />
                <Image
                  src={WhyChooseUsImage3}
                  alt="WhyChooseUsImg"
                  className="absolute bottom-0 -right-[10%] w-50 h-50 object-contain lg:right-[20%]"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-white">
              <div className="content">
                <HeaderTitle
                  badgeText="Why Choose Us"
                  badgeIcon="bi bi-rocket-takeoff"
                  title="What Makes Us Different From Other"
                  className="leading-[1.1]"
                  titleProps="text-[3rem] md:text-[4rem]"
                />

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
                <div className="flex md:flex-row flex-col items-center justify-between gap-5 pt-4">
                  <StyledButtonSecondary
                    onClick={() => {}}
                    className="px-4 tracking-normal text-xl"
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
                    justify-center text-black text-xl group-hover:bg-secondary 
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

      {/* Counter Info*/}
      <div className="dark-section about-wave2 wave-wrapper-section2 bg-black/90 text-white">
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-light rounded-2xl p-8 text-center">
              <h2 className="text-6xl font-semibold text-primary">
                <CountUp start={0} end={99} enableScrollSpy scrollSpyOnce />+
              </h2>
              <p className="mt-3 text-xl text-gray-300">Total Episodes</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-light rounded-2xl p-8 text-center">
              <h2 className="text-6xl font-semibold text-primary">
                <CountUp start={0} end={595} enableScrollSpy scrollSpyOnce />K
              </h2>
              <p className="mt-3 text-xl text-gray-300">Podcast Subscribers</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-light rounded-2xl p-8 text-center">
              <h2 className="text-6xl font-semibold text-primary">
                <CountUp start={0} end={210} enableScrollSpy scrollSpyOnce />M
              </h2>
              <p className="mt-3 text-xl text-gray-300">Happy Listeners</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-light rounded-2xl p-8 text-center">
              <h2 className="text-6xl font-semibold text-primary">
                <CountUp start={0} end={210} enableScrollSpy scrollSpyOnce />+
              </h2>
              <p className="mt-3 text-xl text-gray-300">Our Awards</p>
            </div>
          </div>
        </div>
      </div>

      <HostProfiles />
      <Testimonial />
      <Banner />
    </>
  );
};

export default About;
