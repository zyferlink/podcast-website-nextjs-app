"use client";

import Image from "next/image";
import Link from "next/link";
import WhyChooseUsImage1 from "../../../../public/images/why-choose-1.png";
import WhyChooseUsImage2 from "../../../../public/images/why-choose-2.png";
import WhyChooseUsImage3 from "../../../../public/images/why-choose-3.png";

const WhyChooseUs = () => {
  return (
    <div className="light-section bg-black/80">
      <div className="px-[8%] lg:px-[16%] py-30">
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
              <div className="title flex flex-col gap-2">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                    <i className="bi bi-rocket-takeoff pe-4"></i>
                    Why Choose Us
                  </h2>
                </div>
                <h1 className="text-5xl text-white lg:text-6xl font-semibold mt-7">
                  What Makes Us Different From Other
                </h1>
              </div>
              <p className="my-5 tracking-wider text-white">
                Explore vibrant soundscapes where stories of every kind come
                alive, taking you on an immersive journey and through
                captivating narratives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-5 my-5 border-b border-dashed border-primary-light pb-6 pt-5">
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
                    className="bi bi-play p-4 bg-primary rounded-full flex 
                      items-center justify-center text-black text-2xl group-hover:bg-secondary 
                      group-hover:text-white cursor-pointer transition-all duration-200"
                  ></i>

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
