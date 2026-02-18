"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import Banner from "@/app/index/banner/page";
import HostProfiles from "@/app/index/host-profiles/page";
import Testimonial from "@/app/index/testimonial/page";
import BrandIcon1 from "../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../public/images/brand-icon-5.png";
import ExperienceBanner1 from "../../../../public/images/elevate-banner-1.png";
import ExperienceBanner2 from "../../../../public/images/elevate-banner-2.png";
import ExperienceBannerArrow1 from "../../../../public/images/elevate-banner-arrow1.png";
import ExperienceBannerArrow2 from "../../../../public/images/elevate-banner-arrow2.png";
import PageElement1 from "../../../../public/images/page-elm-1.png";
import PageElement2 from "../../../../public/images/page-elm-2.png";
import PageElement3 from "../../../../public/images/page-elm-3.png";
import PageElement4 from "../../../../public/images/page-elm-4.png";
import WhyChooseUsImage1 from "../../../../public/images/why-choose-1.png";
import WhyChooseUsImage2 from "../../../../public/images/why-choose-2.png";
import WhyChooseUsImage3 from "../../../../public/images/why-choose-3.png";

const About = () => {
  return (
    <>
      {/* Page Section */}
      <div className="page-section bg-black/98 text-white">
        <Image src={PageElement2} alt="Element" className="elm2 elemet" />
        <Image src={PageElement3} alt="Element" className="elm3 elemet" />
        <Image src={PageElement4} alt="Element" className="elm4 elemet" />
        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          <Image src={PageElement1} alt="Element" className="w-full h-full" />

          <h1 className="text-6xl lg:text-8x1 justify-center my-6">
            About <span className="text-primary">VoiceFlow</span>
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
      <div className="dark-section pb-20 bg-black/98 text-white">
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
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

                <p className="my-5 tracking-wider">
                  Explore vibrant soundscapes where stories of every kind come
                  alive, taking you on an immersive journey and through
                  captivating narratives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 border-b border-dashed border-primary-light pb-6 pt-5">
                  <div className="flex items-center gap-2">
                    <div>
                      <i className="bi bi-volume-up border-s-2 ps-2 border-[#0de27c] text-5xl text-primary"></i>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Empower Listeners</h2>
                      <p className="mt-3 text-gray-300">
                        Explore vibrant soundscapes where stories
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div>
                      <i className="bi bi-volume-up border-s-2 ps-2 border-[#0de27c] text-5xl text-primary"></i>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Build Community</h2>
                      <p className="mt-3 text-gray-300">
                        Explore vibrant soundscapes where stories
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    className="btn btn2"
                    style={{ fontWeight: 500 }}
                  >
                    Get Started Free <i className="bi bi-arrow-right-short"></i>
                  </button>
                </div>
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

                <div className="absolute bottom-0 right-35 lg:right-0 bg-[#0de27c] p-5 rounded-2xl">
                  <div className="flex items-center justify-center gap-5 text-text">
                    <h2 className="text-6xl font-semibold">
                      <CountUp start={0} end={17} duration={5} />
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
        <div className="px-[8%] lg:px-[16%] py-30 pb-50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="WhyChooseUs-img flex items-end gap-5">
                <Image
                  src={WhyChooseUsImage1}
                  alt="WhyChooseImg"
                  className="w-full h-fit border-t-2 border-primary pt-5"
                />
                <Image
                  src={WhyChooseUsImage2}
                  alt="WhyChooseImg"
                  className="w-full h-fit"
                />
                <Image src={WhyChooseUsImage3} alt="WhyChooseImg" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-white">
              <div className="content">
                <div className="title flex flex-col gap-2">
                  <div>
                    <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                      <i className="bi bi-rocket-takeoff pe-4"></i>
                      Why Choose Us
                    </h2>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-semibold mt-7 mb-5">
                    What Makes Us Different From Other
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 border-b border-dashed border-primary-light pb-6 pt-5">
                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-primary rounded-full"></i>
                    More Collection Podcast
                  </h2>
                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-primary rounded-full"></i>
                    Create Your Channel
                  </h2>
                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-primary rounded-full"></i>
                    Listen To Podcast On Offline
                  </h2>
                  <h2 className="text-lg flex items-center gap-2">
                    <i className="bi bi-check2 w-8 h-8 flex justify-center items-center bg-primary rounded-full"></i>
                    Listen In Screen Off Position
                  </h2>
                </div>

                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    className="btn btn2"
                    style={{ fontWeight: 500 }}
                  >
                    Get Started Free <i className="bi bi-arrow-right-short"></i>
                  </button>
                  <Link
                    href="/app/pages"
                    className="flex items-center gap-2 group"
                  >
                    <i
                      className="bi bi-play p-4 bg-primary rounded-full flex items-center 
                      justify-center text-black text-2xl group-hover:bg-secondary 
                      group-hover:text-white cursor-pointer transition-all duration-200"
                    ></i>
                    <h2 className="text-xl underline text-primary group-hover:text-secondary transition-all duration-200">
                      See About Us
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
