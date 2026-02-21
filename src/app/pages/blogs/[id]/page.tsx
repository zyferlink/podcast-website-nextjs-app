"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import PageHeader from "@/components/page-header/page-header";
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
      {/* Page Header */}
      <PageHeader title="Blog Details" />

      {/* Blog Details Wrapper */}
      <div className="dark-section px-[8%] lg:px-[16%] py-20 bg-black/98 text-white">
        <div className="flex flex-col lg:flex-row justify-baseline gap-5">
          <div className="w-full lg:w-1/1">
            <div className="flex flex-col">
              {/* Blog Details */}
              <div className="bg-gray p-5 rounded-2xl">
                {/* Blog Card */}
                <div className="flex w-full flex-col md:flex-row justify-between bg-gray-light rounded-lg p-4 overflow-hidden">
                  <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="w-[80%] lg:w-full">
                      <Image
                        src={"/images" + blog.image}
                        alt={"Blog Image"}
                        width={1000}
                        height={1000}
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="p-5">
                      <div className="flex flex-row flex-wrap align-middle gap-5">
                        <span className="px-5 py-2 text-xl rounded-full bg-secondary hover:bg-primary transition-all durhtion-200">
                          {blog.type}
                        </span>
                        <span className="px-5 py-2 text-xl rounded-full bg-secondary hover:bg-primary transition-all durhtion-200">
                          {blog.date}
                        </span>
                      </div>

                      <Link href={`/pages/episodes/${blog.id}`}>
                        <h2 className="mt-3 text-2xl hover:text-primary transition-all duration-200">
                          {blog.title}
                        </h2>
                      </Link>

                      <div className="mt-4">
                        <p className="text-sm text-gray-300">
                          Discover how powerful storytelling transforms simple
                          ideas into memorable experiences that captivate
                          readers and spark lasting emotional connections
                        </p>
                        <p className="text-sm text-gray-300">
                          Learn the techniques writers use to build tension
                          shape characters and deliver narratives that resonate
                          deeply across different audiences
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-light rounded-lg mt-5 p-5">
                  <h2 className="text-4xl mb-4">
                    The Essence of Storytelling in Podcasts
                  </h2>
                  <p className=" text-gray-200 tracking-wide">
                    Discuss why storytelling is a powerful tool in podcasting.
                    Explore its impact on listener engagement and connection.
                    The beauty of podcasts is their variety. There's a podcast
                    for every interest, whether you're looking for true crime
                    mysteries, in-depth interviews with thought leaders, debates
                    on mental health, or even a deep dive into the history of a
                    specialized subject.
                  </p>

                  <div className="flex flex-col my-5">
                    <p className="text-sm text-gray-300">
                      <span>1. </span>Immense spectrum of subjects, ranging from
                      hyper-focused niche topics .
                    </p>
                    <p className="text-sm text-gray-300">
                      <span>2. </span>Envelopments that might be hard to find
                      elsewhere .
                    </p>
                    <p className="text-sm text-gray-300">
                      <span>3.</span>Resonates deeply with audiences who share
                      similar interests .
                    </p>
                    <p className="text-sm text-gray-300">
                      <span>4.</span>Spaces for discussions, networking, and
                      shared experiences.
                    </p>
                  </div>

                  <h2 className="text-3xl mb-4">Learning On the Go</h2>
                  <p className=" text-gray-200 tracking-wide">
                    Evolved linto an unorthodox yet effective platform for
                    learning. Podcasts provide an audio school that you can take
                    with you everywhere, from language instruction to business
                    tactics. Consider turning your regular commute or workout
                    into a chance for personal development and enlightenment.
                  </p>

                  <div className="flex flex-col my-5">
                    <p className="text-sm text-gray-300">
                      Immense spectrum of subjects, ranging from hyper-focused
                      niche topics .
                    </p>
                    <p className="text-sm text-gray-300">
                      Envelopments that might be hard to find elsewhere .
                    </p>
                    <p className="text-sm text-gray-300">
                      Resonates deeply with audiences who share similar
                      interests .
                    </p>
                    <p className="text-sm text-gray-300">
                      Spaces for discussions, networking, and shared
                      experiences.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {BlogsData.slice(1, 5).map((blog, index) => (
                      <Image
                        key={index.toString()}
                        src={`/images${blog.image}`}
                        alt="toplisting"
                        width={1000}
                        height={1000}
                        className="w-full h-full rounded-2xl"
                      />
                    ))}
                  </div>

                  <h2 className="text-3xl my-5 ">A Connection Beyond Words</h2>
                  <p className="text-gray-300">
                    Podcasting transcends the written word. Through
                    storytelling, hosts can convey emotions, nuances, and
                    authenticity that go beyond the limitations of text.
                    Podcasting is an intimate medium that allows storytellers to
                    weave narratives that captivate and resonate with audiences.
                    In the realm of audio.
                  </p>

                  <h2 className="text-2xl my-5">Immersive Experiences:</h2>
                  <p className="text-gray-300">
                    A well-crafted story transports listeners into different
                    worlds. Whether it's a personal anecdote, fictional tale, or
                    exploration of real-life events, storytelling allows
                    audiences to immerse themselves in the narrative. Stories
                    have the power to foster empathy by putting listeners in
                    someone else's shoes.
                  </p>

                  <div className="flex items-center gap-5 mt-5">
                    <h2 className="text-primary text-3xl">
                      Follow <i className="bi bi-chevron-double-right" />
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <i
                        className="bi bi-instagram w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                      ></i>
                      <i
                        className="bi bi-github w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                      ></i>
                      <i
                        className="bi bi-twitter w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                      ></i>
                      <i
                        className="ri-youtube-line w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                      ></i>
                      <i
                        className="bi bi-threads w-10 h-10 text-primary rounded-full flex items-center 
                                justify-center border border-primary hover:bg-primary hover:text-black text-xl transition-all 
                                duration-300 cursor-pointer"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 sticky top-20 left-0 h-full">
            <div className="bg-gray p-5 rounded-2xl">
              <div className="">
                <div className="bg-[#1c1d20] p-5 rounded-t-2xl">
                  <h2 className="text-3xl font-semibold text-primary">
                    More Related Blog
                  </h2>
                  <div className="border border-dashed border-primary mt-3 opacity-30"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-[#1c1d20] px-4 rounded-b-2xl">
                  {BlogsData.slice(1, 7).map((blog, index) => (
                    <Link
                      key={index.toString()}
                      className="flex items-center gap-3 mt-5"
                      href={`/pages/blogs/${blog.id}`}
                    >
                      <div className="w-full md:w-1/2">
                        <Image
                          key={index.toString()}
                          src={`/images${blog.image}`}
                          alt="topListens"
                          width={1000}
                          height={1000}
                          className="w-full min-w-20 h-full rounded-lg"
                        />
                      </div>
                      <div className="w-full md:w-1/1 flex flex-col">
                        <h2 className="text-gray-300 text-xl md-text-2xl hover:text-primary transition-all duration-300 cursor-pointer">
                          {blog.title}
                        </h2>
                        <h4 className="text-primary mt-2">{blog.date}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#1c1d20] p-5 rounded-2xl mt-5">
                <h2 className="text-3xl text-primary font-semibold">
                  Listen On
                </h2>
                <div className="border border-dashed border-primary mt-3 mb-5 opacity-30"></div>
                <div className="flex items-center justify-center gap-3 cursor-pointer mt-5">
                  <Image src={BrandIcon1} alt="brand" />
                  <Image src={BrandIcon2} alt="brand" />
                  <Image src={BrandIcon3} alt="brand" />
                  <Image src={BrandIcon4} alt="brand" />
                  <Image src={BrandIcon5} alt="brand" />
                </div>
              </div>

              <div className="bg-[#1c1d20] p-5 rounded-2xl mt-5">
                <h2 className="text-3xl text-primary font-semibold">
                  Popular Tag
                </h2>
                <div className="border border-dashed border-primary mt-3 mb-5 opacity-30"></div>
                <div className="flex flex-wrap items-center gap-3 mt-5">
                  <span className="px-6 py-2 rounded-full bg-gray hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                    Love Story
                  </span>
                  <span className="px-6 py-2 rounded-full bg-gray hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                    Romantic
                  </span>
                  <span className="px-6 py-2 rounded-full bg-gray hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                    Music
                  </span>
                  <span className="px-6 py-2 rounded-full bg-gray hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                    Storytelling
                  </span>
                  <span className="px-6 py-2 rounded-full bg-gray hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                    New
                  </span>
                  <span className="px-6 py-2 rounded-full bg-gray hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                    Emotional
                  </span>
                  <span className="px-6 py-2 rounded-full bg-gray hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                    Softhearted
                  </span>
                  <span className="px-6 py-2 rounded-full bg-gray hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                    Melancholic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
