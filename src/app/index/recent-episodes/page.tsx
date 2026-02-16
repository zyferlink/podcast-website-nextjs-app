"use client";

import Image from "next/image";
import Link from "next/link";
import BannerImage from "../../../../public/images/episode-card-banner.png";

const RecentEpisodes = () => {
  return (
    <div className="dark-section bg-black/95 text-white">
      <div className="px-[8%] lg:px-[16%] py-30 pb-0 md:pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full lg:w-1/1">
            <div className="title flex flex-col gap-2">
              <div>
                <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                  <i className="bi bi-rocket-takeoff pe-4"></i>
                  Recent Episodes
                </h2>
              </div>
              <h1 className="text-4xl text-white lg:text-5xl font-semibold mt-7">
                Explore Our Latest Talks
              </h1>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-4">
            <p>
              Dive into the most recent episodes that just hit the airwaves.
              Discover what's trending
            </p>
            <button type="button" className="btn btn2 mt-4 font-bold">
              View All Episode <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 px-[8%] lg:px-[16%] pb-30">
        <div className="episodeBanner bg-[#FFCA79] px-5 rounded-2xl pb-5 lg:pb-0">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-0 lg:gap-5">
            <div className="w-full lg:w-1/2">
              <Image
                src={BannerImage}
                alt="bannerImg"
                className="w-full h-full"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-5 py-5">
                <Link href="/app/pages">
                  <h2 className="text-text hover:text-black">
                    <i className="bi bi-mic"> Devon Lane</i>
                  </h2>
                </Link>

                <h2 className="text-text">
                  <i className="bi bi-clock pe-1"></i> 4hr 12min
                </h2>
                <div className="flex items-center gap-3">
                  <i className="bi bi-balloon-heart me-3 text-text text-xl"></i>
                  <div className="music-waves"></div>
                </div>
              </div>

              <h2 className="text-text text-4xl font-semibold">
                Innovation Insights: Diving Deep into Future Tech Trends
              </h2>
              <p className="text-text my-4 tracking-wide">
                Ever wondered what happens behind the scenes? Join us for a
                candid conversation about podcasting and more
              </p>

              <div className="flex justify-between items-center gap-5 ">
                <Link
                  href="/app/pages"
                  className="flex items-center gap-2 group"
                >
                  <i
                    className="bi bi-play p-2 bg-black rounded-full flex items-center 
                    justify-center text-primary text-2xl group-hover:bg-secondary 
                    group-hover:text-white cursor-pointer transition-all duration-200"
                  ></i>
                  <h2 className="text-xl underline text-black group-hover:text-secondary transition-all duration-200">
                    Listen Now
                  </h2>
                </Link>
                <span className="bg-black text-primary px-5 py-2 rounded-full text-xl">
                  Episode 04
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
          <div className="w-full lg:w-1/2">
            <div className="p-6 rounded-2xl bg-gray">
              <div className="flex flex-wrap items-center gap-5">
                <Link href="/app/pages">
                  <h2 className="text-gray-300">
                    <i className="bi bi-mic"> Devon Lane</i>
                  </h2>
                </Link>

                <h2 className="text-gray-300">
                  <i className="bi bi-clock pe-1"></i> 4hr 12min
                </h2>
                <div className="flex items-center gap-3">
                  <i className="bi bi-balloon-heart me-3 text-gray-300 text-xl"></i>
                  <div className="music-waves2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEpisodes;
