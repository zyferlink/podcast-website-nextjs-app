"use client";
// Next.js components
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { StyledButtonPrimary } from "@/components/buttons/styled-button-primary";
import { StyledButtonSecondary } from "@/components/buttons/styled-button-secondary";
// Assets
import PlatformIcon5 from "../../../../public/assets/images/platform-icon-instagram.svg";
import PlatformIcon1 from "../../../../public/assets/images/platform-icon-soundcloud.svg";
import PlatformIcon2 from "../../../../public/assets/images/platform-icon-spotify.svg";
import PlatformIcon3 from "../../../../public/assets/images/platform-icon-swarm.svg";
import PlatformIcon4 from "../../../../public/assets/images/platform-icon-youtube.svg";
import SparkleStar from "../../../../public/assets/images/sparkle-star.png";
import HeroImage from "../../../../public/images/Hero.png";
import HeroBarImage from "../../../../public/images/hero-1.png";
import RoundedText from "../../../../public/images/Rouded-text.webp";

const Hero = () => {
  return (
    <div
      className="flex relative w-full bg-black/90 text-light-text h-screen items-center pb-[3%] 
    overflow-hidden z-10 bg-[url('/images/texture-bg-1.png')] bg-no-repeat"
    >
      {/* vector line drawing*/}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/vector-line.png')] bg-no-repeat -z-10" />

      {/* rotating sparkling elements */}
      <div className="sparkling-elem">
        <Image src={SparkleStar} alt="Sun Shape Image" />
        <Image src={SparkleStar} alt="Sun Shape Image" />
        <Image src={SparkleStar} alt="Sun Shape Image" />
      </div>

      <div className="px-[8%] lg:px-[16%] pt-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col w-full justify-center items-center text-center pb-[5%]">
              <Image src={HeroBarImage} alt="hero bar" className="h-10" />

              <h1 className="min-w-md text-[1.9rem] md:text-[2.3rem] my-4 font-bold text-white leading-tight">
                Discover<span className="text-primary"> Podcasts </span> <br />
                You'll Love, Right Here
              </h1>
              <p className="min-w-md font-poiret-one font-bold tracking-widest text-base text-white/90">
                Dive into meaningful talks. Navigating life's complexities with
                clarity.
              </p>

              {/* action buttons */}
              <div className="flex items-center gap-5 my-5">
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

              <div className="mt-4">
                <p className="tracking-wide font-normal text-lg">
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
          <div className="flex w-full hero-img">
            <Image src={HeroImage} alt="HeroImg" className="w-68 lg:w-87" />
            <div className="rounded-text">
              <Image src={RoundedText} alt="roundedText" />
              <i className="bi bi-arrow-right-short"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
