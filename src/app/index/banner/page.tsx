import Image from "next/image";
import BannerImage from "../../../../public/images/banner.png";

const Banner = () => {
  return (
    <div className="px-[8%] lg:px-[16%] py-20 light-section">
      <div className="banner bg-[#FFCA79] px-[7%] rounded-xl">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-25">
            <div className="w-full lg:w-1/2 relative">
              <h1 className="text-4xl lg:text-5x1 text-text font-semibold my-10">
                Get the Latest Episode & Never Miss an Episode
              </h1>
              <div
                className="flex flex-col md:flex-row items-start justify-between 
                md:items-center gap-5 md:gap-0 bg-black rounded-2xl md:rounded-full p-5 "
              >
                <div className="email-input">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className=" text-white px-3 py-2 outline-none"
                  />
                </div>
                <div className="sub-btn">
                  <button type="button" className="btn btn1">
                    Subscribe <i className="bi bi-arrow-right-short"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="banner-img">
                <Image
                  src={BannerImage}
                  alt="bannerImg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
