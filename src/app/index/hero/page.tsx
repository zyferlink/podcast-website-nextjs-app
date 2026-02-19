"use client";
// Next.js components
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { StyledButtonPrimary } from "@/components/buttons/styled-button-primary";
import { StyledButtonSecondary } from "@/components/buttons/styled-button-secondary";
// Assets
import BrandIcon1 from "../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../public/images/brand-icon-5.png";
import HeroImage from "../../../../public/images/Hero.png";
import HeroBarImage from "../../../../public/images/hero-1.png";
import SunShapeImage from "../../../../public/images/hero-sun-shape.png";
import RoundedText from "../../../../public/images/Rouded-text.webp";

const Hero = () => {
  return (
    <div
      className="flex relative w-full bg-black/90 h-screen items-center pb-[3%] 
    overflow-hidden z-10 bg-[url('/images/texture-bg-1.png')] bg-no-repeat"
    >
      {/* vector line drawing*/}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/vector-line.png')] bg-no-repeat -z-10" />

      {/* rotating sun elements */}
      <div className="sun-elem">
        <Image src={SunShapeImage} alt="Sun Shape Image" />
        <Image src={SunShapeImage} alt="Sun Shape Image" />
        <Image src={SunShapeImage} alt="Sun Shape Image" />
      </div>

      <div className="px-[8%] lg:px-[16%] pt-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col w-full justify-center items-center text-center pb-[5%]">
              <Image src={HeroBarImage} alt="hero bar" className="h-10" />
              <h1 className="text-3xl md:text-4xl my-4 font-bold text-white">
                Explore <span className="text-primary"> Sound </span>{" "}
                Storytelling Magic
              </h1>
              <p className="tracking-normal text-base text-white/80">
                Discover the harmony of heartfelt conversations. Bringing
                clarity to life's complexities. Focus on what matters most
              </p>

              {/* action buttons */}
              <div className="flex items-center gap-5 my-5">
                <StyledButtonSecondary
                  onClick={() => {}}
                  icon={<FaArrowRight size={12} />}
                >
                  Latest
                </StyledButtonSecondary>

                <StyledButtonPrimary
                  onClick={() => {}}
                  icon={<FaArrowRight size={12} />}
                >
                  Subscribe
                </StyledButtonPrimary>
              </div>

              <div className="mt-4">
                <p className="tracking-wider text-xl text-white">
                  Listen to Podcaster through
                </p>
                <div className="flex items-center gap-3 cursor-pointer my-2">
                  <Image src={BrandIcon1} alt="brand" className="w-8" />
                  <Image src={BrandIcon2} alt="brand" className="w-8" />
                  <Image src={BrandIcon3} alt="brand" className="w-8" />
                  <Image src={BrandIcon4} alt="brand" className="w-8" />
                  <Image src={BrandIcon5} alt="brand" className="w-8" />
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
