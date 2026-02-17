import Image from "next/image";
import Link from "next/link";
import BrandIcon1 from "../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../public/images/brand-icon-5.png";
import LogoIcon from "../../../public/images/Logo-icon.png";

const Footer = () => {
  return (
    <div className="dark-section bg-black/90 text-white">
      <div className="px-[8%] lg:px-[16%] py-20 pb-10">
        <footer>
          <div className="flex flex-wrap justify-between items-center gap-5 border-b border-primary/30 pb-8">
            <Link href="/">
              <div className="flex items-center gap-2 overflow-hidden">
                <Image
                  src={LogoIcon}
                  alt="Logo"
                  className="object-cover w-8 h-8"
                />
                <h1 className="font-kanit text-2xl tracking-wider">
                  Voice<span className="text-primary">Flow</span>
                </h1>
              </div>
            </Link>

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
        </footer>
      </div>
    </div>
  );
};

export default Footer;
