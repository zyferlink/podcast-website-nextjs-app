import Image from "next/image";
import Link from "next/link";
import LogoIcon from "../../../public/assets/images/voice-flow-icon.png";
import BrandIcon1 from "../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../public/images/brand-icon-5.png";

const Footer = () => {
  return (
    <div className="dark-section bg-black/90 text-white">
      <div className="px-[8%] lg:px-[16%] py-20 pb-10">
        <footer>
          <div className="flex flex-wrap justify-between items-center gap-5 border-b border-primary/30 pb-8">
            <div className="flex items-center gap-2 pointer-events-none">
              <Image
                src={LogoIcon}
                alt="App logo"
                className="object-cover w-8 h-8"
              />
              <h1 className="font-poiret-one text-2xl tracking-widest font-bold text-white">
                Voice<span className="text-primary">Flow</span>
              </h1>
            </div>

            <div className="footer-waves relative">
              <div className="music-waves2"></div>
              <div className="music-waves2 absolute top-0 left-0"></div>
              <div className="music-waves2 absolute top-0 left-0"></div>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="flex items-center gap-3 text-xl">
                Subscribe on :
                <div className="flex items-center gap-3 cursor-pointer ">
                  <Image src={BrandIcon1} alt="brand" className="w-8" />
                  <Image src={BrandIcon2} alt="brand" className="w-8" />
                  <Image src={BrandIcon3} alt="brand" className="w-8" />
                  <Image src={BrandIcon4} alt="brand" className="w-8" />
                  <Image src={BrandIcon5} alt="brand" className="w-8" />
                </div>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 py-15 pb-15">
            <div className="footer-col">
              <h2 className="text-4xl mb-5">Pages</h2>

              <div className="flex flex-col gap-2">
                <Link href="/">
                  <h3 className="text-gray-300 text-xl hover:text-primary hover:translate-z-1 transition-all duration-300 cursor-pointer">
                    Home
                  </h3>
                </Link>
                <Link href="/">
                  <h3 className=" text-gray-300 text-xl hover:text-primary hover:translate-z-1 transition-all duration-300 cursor-pointer">
                    About
                  </h3>
                </Link>

                <Link href="/">
                  <h3 className=" text-gray-300 text-xl hover:text-primary hover:translate-z-1 transition-all duration-300 cursor-pointer">
                    Episodes
                  </h3>
                </Link>

                <Link href="/">
                  <h3 className=" text-gray-300 text-xl hover:text-primary hover:translate-z-1 transition-all duration-300 cursor-pointer">
                    Blog
                  </h3>
                </Link>
              </div>
            </div>

            <div className="footer-col">
              <h2 className="text-4xl mb-5">Contact</h2>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl text-gray-300 hover:text-primary transition-all duration-300 cursor-pointer">
                    <i className="bi bi-telephone-x pe-2 text-primary"></i>
                    +91 123 456 7890
                  </h2>

                  <h2 className="text-xl text-gray-300 hover:text-primary transition-all duration-300 cursor-pointer">
                    <i className="bi bi-telephone-x pe-2 text-primary"></i>
                    +91 123 456 6587
                  </h2>

                  <h2 className="text-xl text-gray-300 hover:text-primary transition-all duration-300 cursor-pointer">
                    <i className="bi bi-envelope pe-2 text-primary"></i>
                    info@gmail.com
                  </h2>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="text-4xl mb-5">Address</h2>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl text-gray-300 hover:text-primary transition-all duration-300 cursor-pointer">
                    <i className="bi bi-geo-alt pe-2 text-primary"></i>
                    742 Evergreen Terrace, Springfield, IL 62704
                  </h2>

                  <h2 className="text-xl text-gray-300 hover:text-primary transition-all duration-300 cursor-pointer">
                    <i className="bi bi-geo-alt pe-2 text-primary"></i>
                    901 Sunset Blvd, Palm Valley, CA 90210
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom border-t border-primary/30 pt-8">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5">
              <p className="text-gray-300">
                @Copyright 2026. All Rights Reserved by{" "}
                <Link
                  href="https://github.com/zyferlink"
                  className="text-primary text-xl"
                >
                  ZyferLink
                </Link>
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="hover:text-primary hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/"
                  className="hover:text-primary hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
