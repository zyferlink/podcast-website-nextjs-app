"use client";
// Next.js components
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { StyledButtonPrimary } from "@/components/buttons/styled-button-primary";
import { StyledButtonSecondary } from "@/components/buttons/styled-button-secondary";
import BannerRoundedText from "../../../../public/assets/images/banner-rounded.png";
import HeroImage from "../../../../public/assets/images/hero-image.png";
// Assets
import PlatformIcon5 from "../../../../public/assets/images/platform-icon-instagram.svg";
import PlatformIcon1 from "../../../../public/assets/images/platform-icon-soundcloud.svg";
import PlatformIcon2 from "../../../../public/assets/images/platform-icon-spotify.svg";
import PlatformIcon3 from "../../../../public/assets/images/platform-icon-swarm.svg";
import PlatformIcon4 from "../../../../public/assets/images/platform-icon-youtube.svg";
import SparkleStar from "../../../../public/assets/images/sparkle-star.png";
import HeroBarImage from "../../../../public/images/hero-1.png";

const Hero = () => {
  return (
    <div
      className="flex relative h-screen overflow-x-hidden  bg-black/90 text-light-text items-center justify-center pb-[3%] 
    overflow-hidden z-10 bg-[url('/images/texture-bg-1.png')] bg-no-repeat bg-cover bg-center"
    >
      {/* vector line drawing*/}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/vector-line.png')] bg-no-repeat -z-10" />

      {/* rotating sparkling elements */}
      <div className="sparkling-elem pointer-events-none ">
        <Image src={SparkleStar} alt="Sun Shape Image" className="opacity-70" />
        <Image src={SparkleStar} alt="Sun Shape Image" className="opacity-70" />
        <Image src={SparkleStar} alt="Sun Shape Image" className="opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto pt-24">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex w-full md:w-1/2">
            <div className="flex flex-col w-full justify-center items-center text-center pb-[5%]">
              <Image src={HeroBarImage} alt="hero bar" className="h-10" />

              <h1 className="min-w-md text-[1.9rem] md:text-[2.3rem] 2xl:text-[3rem] my-4 font-bold text-white leading-tight">
                Discover<span className="text-primary"> Podcasts </span> <br />
                You'll Love, Right Here
              </h1>
              <p className="min-w-md font-poiret-one font-bold tracking-widest text-base 2xl:text-lg text-white/90">
                Dive into meaningful talks. Navigating life's complexities with
                clarity.
              </p>

              {/* action buttons */}
              <div className="flex items-center gap-5 my-7 2xl:my-10">
                <StyledButtonSecondary
                  onClick={() => {}}
                  className="px-8 tracking-normal"
                  icon={<FaArrowRight size={12} />}
                >
                  Latest
                </StyledButtonSecondary>

                <StyledButtonPrimary
                  onClick={() => {}}
                  className="tracking-wide"
                  icon={<FaArrowRight size={12} />}
                >
                  Subscribe
                </StyledButtonPrimary>
              </div>

              <div>
                <p className="tracking-wide font-normal text-lg 2xl:text-xl">
                  Listen to Podcaster through
                </p>
                <div className="flex w-full  justify-center items-center gap-3 cursor-pointer my-2">
                  <Image src={PlatformIcon1} alt="brand" className="w-8" />
                  <Image src={PlatformIcon2} alt="brand" className="w-8" />
                  <Image src={PlatformIcon3} alt="brand" className="w-8" />
                  <Image src={PlatformIcon4} alt="brand" className="w-8" />
                  <Image src={PlatformIcon5} alt="brand" className="w-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex w-full max-w-xl">
            <div className="relative flex top-0 left-[10%] lg:left-[5%] items-center justify-center z-0 animate-[anim-small-translate_5s_infinite_ease-in-out]">
              <Image src={HeroImage} alt="HeroImg" className="w-full lg:w-92" />
            </div>

            <div className="relative top-60 lg:top-64 right-36 -translate-x-1/2 -translate-y-1/2 w-36 h-36 flex items-center justify-center">
              <Image
                src={BannerRoundedText}
                alt="roundedText"
                className="left-1/2 top-1/2 animate-[spin_5s_infinite_linear]"
              />

              <i
                className="bi bi-arrow-right-short absolute left-1/2 top-1/2 bg-primary text-black 
               -translate-x-1/2 -translate-y-1/2 w-15 h-15 
              rounded-full flex items-center justify-center text-4xl hover:scale-110 
              transition-all duration-300 cursor-pointer"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
