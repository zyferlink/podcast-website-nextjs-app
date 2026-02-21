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

      <div className="px-[8%] lg:px-[16%] py-20 pb-20 dark-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BlogPosts.map((blog) => (
            <Link
              href={`/pages/blogs/${blog.id}`}
              key={blog.id}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="bg-gray-light w-full p-5 rounded-2xl">
                <div className="blog-img">
                  <Image
                    src={blog.image}
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
                    <div className="music-waves2"></div>
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
