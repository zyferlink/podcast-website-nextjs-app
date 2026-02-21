import Image from "next/image";
import PageElement1 from "../../../public/assets/images/header-element-1.png";
import PageElement2 from "../../../public/assets/images/header-element-2.png";
import PageElement3 from "../../../public/assets/images/header-element-3.png";
import PageElement4 from "../../../public/assets/images/header-element-4.png";
import PlatformIcon5 from "../../../public/assets/images/platform-icon-instagram.svg";
import PlatformIcon1 from "../../../public/assets/images/platform-icon-soundcloud.svg";
import PlatformIcon2 from "../../../public/assets/images/platform-icon-spotify.svg";
import PlatformIcon3 from "../../../public/assets/images/platform-icon-swarm.svg";
import PlatformIcon4 from "../../../public/assets/images/platform-icon-youtube.svg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleProps?: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  className = "",
  titleProps = "",
}) => {
  return (
    <div className="page-section">
      <Image
        src={PageElement2}
        alt="Element"
        className="absolute top-[20%] left-[8%] w-auto h-auto animate-spin opacity-60 delay-300 
        xl:top-[15%] xl:w-25 xl:h-25"
      />
      <Image
        src={PageElement3}
        alt="Element"
        className="absolute top-[75%] left-[85%] w-auto h-auto animate-spin opacity-50 delay-500 
        xl:left-[80%] xl:w-25 xl:h-25"
      />
      <Image
        src={PageElement4}
        alt="Element"
        className="absolute top-[70%] left-[15%] w-auto h-auto animate-spin opacity-40 delay-700"
      />
      <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-12">
        <Image src={PageElement1} alt="Element" className="w-full h-8" />

        <h1 className="text-5xl lg:text-6xl justify-center my-8 text-white ">
          {title}
        </h1>

        <div className="flex items-center justify-center gap-3 cursor-pointer ">
          <Image src={PlatformIcon1} alt="brand" className="w-8" />
          <Image src={PlatformIcon2} alt="brand" className="w-8" />
          <Image src={PlatformIcon3} alt="brand" className="w-8" />
          <Image src={PlatformIcon4} alt="brand" className="w-8" />
          <Image src={PlatformIcon5} alt="brand" className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
