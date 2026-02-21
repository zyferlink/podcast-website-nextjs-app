import Image from "next/image";
import Link from "next/link";
import Page404Img from "../../public/assets/images/error-404.png";

const NotFound = () => {
  return (
    <div className="dark-section bg-black/98 text-white">
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          src={Page404Img}
          alt="Page404Img"
          width={1000}
          height={1000}
          className="w-full lg:w-[70%] h-full lg:h-[70%] object-contain"
        />
        <Link
          href="/"
          className="mt-0 md:mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full border 
          border-white/20 text-white text-sm tracking-wide transition-all duration-300 
          hover:border-white hover:bg-white hover:text-black"
        >
          <i className="bi bi-arrow-left-short text-xl"></i>
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
