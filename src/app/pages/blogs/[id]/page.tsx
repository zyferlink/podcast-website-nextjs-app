"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import BrandIcon1 from "../../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../../public/images/brand-icon-5.png";
import PageElement1 from "../../../../../public/images/page-elm-1.png";
import PageElement2 from "../../../../../public/images/page-elm-2.png";
import PageElement3 from "../../../../../public/images/page-elm-3.png";
import PageElement4 from "../../../../../public/images/page-elm-4.png";
import RocketIcon from "../../../../../public/images/rocket-icon.png";
import BlogsData from "../../../../data/BlogsData.json";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = BlogsData.find((item) => item.id === Number(id));
  if (!blog) {
    return (
      <div className="dark-section px-[8%] lg:px-[16%] py-30 text-center bg-black/98 text-white">
        <h2 className="text-4xl text-gray-400">Blog not found</h2>
        <Link
          href="/pages/blogs"
          className="inline-block mt-6 text-primary underline"
        >
          Back to Episodes
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Page Section */}
      <div className="page-section bg-black/98 text-white">
        <Image src={PageElement2} alt="Element" className="elm2 elemet" />
        <Image src={PageElement3} alt="Element" className="elm3 elemet" />
        <Image src={PageElement4} alt="Element" className="elm4 elemet" />
        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          <Image src={PageElement1} alt="Element" className="w-full h-full" />

          <h1 className="text-6xl lg:text-8xl justify-center my-6">
            Blog <span className="text-primary">Details</span>
          </h1>

          <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
            <Image src={BrandIcon1} alt="brand" />
            <Image src={BrandIcon2} alt="brand" />
            <Image src={BrandIcon3} alt="brand" />
            <Image src={BrandIcon4} alt="brand" />
            <Image src={BrandIcon5} alt="brand" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
