"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderTitle from "@/components/header-title";
import BannerImage from "../../../../public/images/episode-card-banner.png";

const RecentEpisodes = () => {
  return (
    <div className="dark-section">
      <div className="px-[8%] lg:px-[12%] pt-28 pb-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2">
            {/* header title */}
            <HeaderTitle
              badgeText="Recent Episodes"
              badgeIcon="bi bi-mic"
              title="Explore Our Latest Talks"
              className="items-center text-center leading-tight"
              titleProps="text-[3rem] md:text-[4rem]"
            />
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

              <h2 className="text-gray-300 text-2xl md:text-3xl font-semibold">
                Laughter Unleashed: Join Us for Joyful Conversations Today
              </h2>
              <p className=" my-4 tracking-wide">
                Embark on a journey of unexplored wisdom as we delve into
                fascinating topics that challenge the mind
              </p>
              <div className="flex justify-between items-center gap-5 ">
                <Link
                  href="/app/pages"
                  className="flex items-center gap-2 group"
                >
                  <i
                    className="bi bi-play p-2 bg-primary rounded-full flex items-center 
                    justify-center text-black text-2xl group-hover:bg-secondary 
                    group-hover:text-white cursor-pointer transition-all duration-200"
                  ></i>
                  <h2 className="text-xl underline text-black group-hover:text-secondary transition-all duration-200">
                    Listen Now
                  </h2>
                </Link>
                <span className="bg-gray-800 text-primary px-5 py-2 rounded-full text-xl">
                  Episode 04
                </span>
              </div>
            </div>
          </div>

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

              <h2 className="text-gray-300 text-2xl md:text-3xl font-semibold">
                Behind the Scenes: Candid Talks on Podcasting Strategies
              </h2>
              <p className=" my-4 tracking-wide">
                Unlock the secrets of inspiration with heartfelt stories and
                motivational insights in this uplifting episode
              </p>
              <div className="flex justify-between items-center gap-5 ">
                <Link
                  href="/app/pages"
                  className="flex items-center gap-2 group"
                >
                  <i
                    className="bi bi-play p-2 bg-primary rounded-full flex items-center 
                    justify-center text-black text-2xl group-hover:bg-secondary 
                    group-hover:text-white cursor-pointer transition-all duration-200"
                  ></i>
                  <h2 className="text-xl underline text-black group-hover:text-secondary transition-all duration-200">
                    Listen Now
                  </h2>
                </Link>
                <span className="bg-gray-800 text-primary px-5 py-2 rounded-full text-xl">
                  Episode 04
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEpisodes;
