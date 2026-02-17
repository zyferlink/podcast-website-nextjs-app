"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import BrandIcon1 from "../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../public/images/brand-icon-5.png";
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
      {/* Page Section */}
      <div className="page-section bg-black/98 text-white">
        {/* <Image src={PageElement2} alt="Element" className="elm2 elemet" />
        <Image src={PageElement3} alt="Element" className="elm3 elemet" />
        <Image src={PageElement4} alt="Element" className="elm4 elemet" /> */}
        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          {/* <Image src={PageElement1} alt="Element" className="w-full h-full" /> */}

          <h1 className="text-6xl lg:text-8x1 justify-center my-6">
            Favorite <span className="text-primary">Episodes</span>
          </h1>

          <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
            <Image src={BrandIcon1} alt="brand" />
            <Image src={BrandIcon2} alt="brand" />
            <Image src={BrandIcon3} alt="brand" />
            <Image src={BrandIcon4} alt="brand" />
            <Image src={BrandIcon5} alt="brand" />
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="dark-section pb-20">
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="flex flex-col lg:flow-row justify-between items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="content">
                <div className="title flex flex-col gap-2">
                  <div>
                    <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                      <i className="bi bi-rocket-takeoff pe-4"></i>
                      Elevate Your Experience
                    </h2>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-semibold mt-7 mb-5">
                    Explore Excellence in{" "}
                    <span className="text-primary">Podcasting</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
