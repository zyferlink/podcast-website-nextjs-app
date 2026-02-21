"use client";

import Image from "next/image";
import Link from "next/link";
import CustomPageBanner from "@/components/custom-page-banner";
import PageHeader from "@/components/page-header/page-header";
import { BlogPosts } from "@/data/blog";

const Blog = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Our Recent Articles" />

      <div className="px-[8%] md:px-[12%] 2xl:px-[16%] py-20 pb-20 dark-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BlogPosts.map((blog) => (
            <Link
              href={`/pages/blogs/${blog.id}`}
              key={blog.id}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="bg-gray-light w-full p-2 rounded-2xl">
                <div className="blog-img">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                </div>

                <div className="mt-4">
                  <div className="flex items-center  gap-3">
                    <span className="px-5 py-1 text-base font-bold rounded-full bg-secondary hover:bg-primary transition-all duration-200 cursor-pointer">
                      {blog.type}
                    </span>
                    <span className="px-5 py-1 font-sans text-base rounded-full bg-gray text-primary cursor-pointer">
                      {blog.date}
                    </span>
                  </div>
                  <h2 className="text-2xl my-5 min-h-14 text-white px-1 text-center font-bold">
                    {blog.title}
                  </h2>
                  <div className="flex items-center justify-between px-2">
                    <span className="text-primary text-base border-b">
                      Read More
                    </span>
                    <div
                      className="w-[65%] 2xl:w-[70%] h-7.5 bg-[url('/assets/images/music-waves-2.png')] 
                  bg-repeat-x bg-size-[auto_100%] animate-[anim-wave-scroll_50s_linear_infinite]"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Custom Page Banner */}
      <CustomPageBanner mainProps="dark-section" />
    </>
  );
};

export default Blog;
