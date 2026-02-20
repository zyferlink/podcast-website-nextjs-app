"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { StyledButtonSecondary } from "@/components/buttons/styled-button-secondary";
import HeaderTitle from "@/components/header-title";
import { type RecentEpisode, RecentEpisodeData } from "@/data/recent-episodes";
import BannerImage from "../../../../public/images/episode-card-banner.png";

const RecentEpisodes = () => {
  const mainBannerData: RecentEpisode = RecentEpisodeData[0];

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

          <div className="flex flex-col w-full lg:w-1/2 p-4 items-center justify-center ">
            <p className="text-white max-w-xs text-xl font-light text-center tracking-wider pb-8 ">
              Dive into the most recent episodes that just hit the airwaves.
              <br />
              Discover what's trending
            </p>

            <StyledButtonSecondary
              onClick={() => {}}
              className="px-8 tracking-normal text-xl"
              icon={<FaArrowRight size={12} />}
            >
              View All Episode
            </StyledButtonSecondary>
          </div>
        </div>
      </div>

      <div className="mt-10 px-[8%] lg:px-[12%] pb-30">
        {/* main banner */}
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
                    <i className="bi bi-mic">{mainBannerData.hostName}</i>
                  </h2>
                </Link>

                <h2 className="text-text">
                  <i className="bi bi-clock pe-1"></i> {mainBannerData.duration}
                </h2>
                <div className="flex items-center gap-3">
                  <i className="bi bi-balloon-heart me-3 text-text text-xl"></i>
                  <div
                    className="w-20 md:w-40 h-7.5 bg-[url('../../public/images/music-waves.png')] 
                  bg-repeat-x bg-size-[auto_100%] animate-[anim-wave-scroll_50s_linear_infinite]"
                  />
                </div>
              </div>

              <h2 className="text-text text-4xl font-semibold">
                {mainBannerData.title}
              </h2>
              <p className="text-text my-4 tracking-wide">
                {mainBannerData.desc}
              </p>

              <div className="flex justify-between items-center gap-5 pb-4">
                <Link
                  href="/app/pages"
                  className="flex items-center gap-2 group"
                >
                  <i
                    className="bi bi-play p-3 bg-black rounded-full flex items-center 
                    justify-center text-primary text-2xl group-hover:bg-secondary 
                    group-hover:text-white cursor-pointer transition-all duration-200"
                  />
                  <h2 className="text-xl underline text-black group-hover:text-secondary transition-all duration-200">
                    Listen Now
                  </h2>
                </Link>
                <span className="bg-black text-primary px-5 py-2 pointer-events-none rounded-full text-xl">
                  {mainBannerData.episode}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
          {RecentEpisodeData.slice(1, 3).map((item) => (
            <div key={item.id} className="w-full lg:w-1/2">
              <div className="p-6 rounded-2xl bg-gray">
                <div className="flex flex-wrap items-center gap-5">
                  <Link href="/app/pages">
                    <h2 className="text-gray-300">
                      <i className="bi bi-mic"> {item.hostName}</i>
                    </h2>
                  </Link>

                  <h2 className="text-gray-300">
                    <i className="bi bi-clock pe-1"></i> {item.duration}
                  </h2>
                  <div className="flex items-center gap-3">
                    <i className="bi bi-balloon-heart me-3 text-gray-300 text-xl"></i>
                    <div className="music-waves2"></div>
                  </div>
                </div>

                <h2 className="text-gray-300 text-2xl md:text-3xl font-semibold">
                  {item.title}
                </h2>
                <p className=" my-4 tracking-wide">{item.desc}</p>
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
                    {item.episode}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentEpisodes;
