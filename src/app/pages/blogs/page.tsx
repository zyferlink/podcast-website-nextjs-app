"use client";

import Image from "next/image";
import Link from "next/link";
import BrandIcon1 from "../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../public/images/brand-icon-5.png";
import PageElement1 from "../../../../public/images/page-elm-1.png";
import PageElement2 from "../../../../public/images/page-elm-2.png";
import PageElement3 from "../../../../public/images/page-elm-3.png";
import PageElement4 from "../../../../public/images/page-elm-4.png";
import BlogsData from "../../../data/BlogsData.json";

const Blog = () => {
  return (
    <>
      {/* Page Section */}
      <div className="page-section bg-black/98 text-white">
        <Image src={PageElement2} alt="Element" className="elm2 elemet" />
        <Image src={PageElement3} alt="Element" className="elm3 elemet" />
        <Image src={PageElement4} alt="Element" className="elm4 elemet" />
        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          <Image src={PageElement1} alt="Element" className="w-full h-full" />

          <h1 className="text-5xl lg:text-6xl justify-center my-6">
            Our Recent <span className="text-primary">Articles</span>
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

      <div className="px-[8%] lg:px-[16%] py-30 pb-20 bg-black/98 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BlogsData.map((blog, index) => (
            <Link
              href={`/pages/blogs/${blog.id}`}
              key={index.toString()}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="bg-gray-light w-full p-5 rounded-2xl">
                <div className="blog-img">
                  <Image
                    src={`/images${blog.image}`}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                </div>

                <div className="blog-content mt-6">
                  <div className="flex items-center gap-3">
                    <span className="px-5 py-2 text-xl rounded-full bg-secondary hover:bg-primary transition-all duration-200 cursor-pointer">
                      {blog.type}
                    </span>
                    <span className="px-5 py-2 text-x1 rounded-full bg-gray text-primary cursor-pointer">
                      {blog.date}
                    </span>
                  </div>
                  <h2 className="text-4xl my-5">{blog.title}</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-xl border-b">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
