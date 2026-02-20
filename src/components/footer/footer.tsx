import Image from "next/image";
import Link from "next/link";
import { NavLinksFooter } from "@/data/navigation";
import PlatformIcon5 from "../../../public/assets/images/platform-icon-instagram.svg";
import PlatformIcon1 from "../../../public/assets/images/platform-icon-soundcloud.svg";
import PlatformIcon2 from "../../../public/assets/images/platform-icon-spotify.svg";
import PlatformIcon3 from "../../../public/assets/images/platform-icon-swarm.svg";
import PlatformIcon4 from "../../../public/assets/images/platform-icon-youtube.svg";
import LogoIcon from "../../../public/assets/images/voice-flow-icon.png";

const Footer = () => {
  return (
    <div className="dark-section">
      <div className="px-[8%] lg:px-[12%] py-20 pb-10">
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
              <div className="music-waves2" />
              <div className="music-waves2 absolute top-0 left-0" />
              <div className="music-waves2 absolute top-0 left-0" />
            </div>

            <div className="flex items-center gap-3">
              <h2 className="flex items-center gap-3 text-xl text-white">
                Subscribe on :
                <div className="flex items-center gap-3 cursor-pointer ">
                  <Image src={PlatformIcon1} alt="brand" className="w-7" />
                  <Image src={PlatformIcon2} alt="brand" className="w-7" />
                  <Image src={PlatformIcon3} alt="brand" className="w-7" />
                  <Image src={PlatformIcon4} alt="brand" className="w-7" />
                  <Image src={PlatformIcon5} alt="brand" className="w-7" />
                </div>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 py-15 pb-15 text-white">
            <div className="footer-col">
              <h2 className="text-3xl mb-5">Pages</h2>

              <div className="flex flex-col gap-2">
                {NavLinksFooter.map((link, index) => (
                  <Link key={index.toString()} href={link.href}>
                    <h3
                      className="font-light text-xl text-gray-200 hover:text-primary 
                      hover:translate-z-1 transition-all duration-300 cursor-pointer"
                    >
                      {link.label}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h2 className="text-3xl mb-5">Contact</h2>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg text-gray-300 hover:text-primary transition-all duration-300 cursor-pointer">
                    <i className="bi bi-telephone pe-2 text-primary"></i>
                    +91 123 456 789
                  </h2>

                  <h2 className="text-lg text-gray-300 hover:text-primary transition-all duration-300 cursor-pointer">
                    <i className="bi bi-telephone pe-2 text-primary"></i>
                    +91 123 456 670
                  </h2>

                  <h2 className="text-lg text-gray-300 hover:text-primary transition-all duration-300 cursor-pointer">
                    <i className="bi bi-envelope pe-2 text-primary"></i>
                    info@example.com
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

          <div className="footer-bottom border-t border-primary/30 pt-8 text-white">
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
