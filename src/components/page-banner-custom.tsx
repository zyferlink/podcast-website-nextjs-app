import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import PageBanner1 from "../../public/assets/images/page-banner-1.png";
import PageBanner2 from "../../public/assets/images/page-banner-2.png";
import { StyledButtonPrimary } from "./buttons/styled-button-primary";

const PageBannerCustom = () => {
  return (
    <div className="px-[8%] lg:px-[10%] py-20">
      <div className="page-banner p-15 flex flex-col justify-center items-center text-center rounded-2xl relative">
        <Image
          src={PageBanner1}
          alt="PageBanner1"
          width={500}
          height={550}
          className="hidden lg:block absolute bottom-0 left-0"
        />
        <Image
          src={PageBanner2}
          alt="PageBanner2"
          width={500}
          height={550}
          className="hidden lg:block absolute bottom-0 right-0"
        />

        <div className="music-waves" />
        <div className="my-3 ">
          <span className="flex items-center gap-2 text-black px-4 py-3 rounded-full border-[1.5px] border-black">
            <i className="bi bi-rocket-takeoff text-2xl" />
            <h2 className="text-xl">Call To Action</h2>
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl mb-5 font-semibold w-full lg:w-[50%] text-text">
          Let's Discuss <br />
          For <br />
          Any Episodes
        </h1>

        <StyledButtonPrimary
          className="px-8 text-xl bg-dark-text text-white tracking-normal"
          icon={<FaArrowRight size={12} className="text-white" />}
        >
          Get In Touch
        </StyledButtonPrimary>
      </div>
    </div>
  );
};

export default PageBannerCustom;
