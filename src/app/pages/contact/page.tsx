"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Banner from "@/app/index/banner/page";
import PageHeader from "@/components/page-header/page-header";
import BrandIcon1 from "../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../public/images/brand-icon-5.png";
import ContactClient1 from "../../../../public/images/contact-client-1.png";
import ContactClient2 from "../../../../public/images/contact-client-2.png";
import ContactClient3 from "../../../../public/images/contact-client-3.png";
import ContactClient4 from "../../../../public/images/contact-client-4.png";
import ContactClient5 from "../../../../public/images/contact-client-5.png";
import PageElement1 from "../../../../public/images/page-elm-1.png";
import PageElement2 from "../../../../public/images/page-elm-2.png";
import PageElement3 from "../../../../public/images/page-elm-3.png";
import PageElement4 from "../../../../public/images/page-elm-4.png";

const Contact = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Contact Us" />

      <div className="dark-section bg-black/98 text-white">
        <div className="px-[8%] lg:px-[16%] py-40  pb-20">
          <div className="title text-center">
            <div>
              <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                <i className="bi bi-rocket-takeoff pe-4"></i>
                Get In Touch
              </h2>
            </div>
            <h1 className="text-5xl text-white lg:text-6xl font-semibold mt-7 mb-5">
              Let Us Help You
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15">
            <div
              className="flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-primary 
              hover:text-text transition-all duration-300"
            >
              <div
                className="mt-3 w-15 h-15 rounded-full bg-primary group-hover:bg-text 
                transition-all duration-300 px-5 flex items-center justify-center"
              >
                <i
                  className="bi bi-geo-alt text-text group-hover:text-primary text-3xl 
                  transition-all duration-300"
                ></i>
              </div>
              <div>
                <h2 className="text-4xl group-hover:text-text transition-all duration-300">
                  Main Office
                </h2>
                <p className="text-gray-300 my-2 group-hover:text-text transition-all duration-300">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>

                <Link
                  href="/"
                  className="text-primary border-b border-primary group-hover:border-text 
                font-semibold group-hover:text-text transition-all duration-300"
                >
                  Find Location
                </Link>
              </div>
            </div>

            <div
              className="flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-primary 
              hover:text-text transition-all duration-300"
            >
              <div
                className="mt-3 w-15 h-15 rounded-full bg-primary group-hover:bg-text 
                transition-all duration-300 px-5 flex items-center justify-center"
              >
                <i
                  className="bi bi-envelope text-text group-hover:text-primary text-3xl 
                  transition-all duration-300"
                ></i>
              </div>
              <div>
                <h2 className="text-4xl group-hover:text-text transition-all duration-300">
                  Email Address
                </h2>
                <p className="text-gray-300 my-2 group-hover:text-text transition-all duration-300">
                  info@gmail.com
                  <br />
                  website.info@gmail.com
                </p>

                <Link
                  href="/"
                  className="text-primary border-b border-primary group-hover:border-text 
                font-semibold group-hover:text-text transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div
              className="flex gap-3 bg-gray-600/30 backdrop-blur-2xl p-5 rounded-2xl group hover:bg-primary 
              hover:text-text transition-all duration-300"
            >
              <div
                className="mt-3 w-15 h-15 rounded-full bg-primary group-hover:bg-text 
                transition-all duration-300 px-5 flex items-center justify-center"
              >
                <i
                  className="bi bi-telephone-inbound text-text group-hover:text-primary text-3xl 
                  transition-all duration-300"
                ></i>
              </div>
              <div>
                <h2 className="text-4xl group-hover:text-text transition-all duration-300">
                  Phone Number
                </h2>
                <p className="text-gray-300 my-2 group-hover:text-text transition-all duration-300">
                  +91 123 456 7890
                  <br />
                  +91 321 846 8975
                </p>

                <Link
                  href="/"
                  className="text-primary border-b border-primary group-hover:border-text 
                font-semibold group-hover:text-text transition-all duration-300"
                >
                  Contact Us Today!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="light-section wave-wrapper-section text-white">
        <div className="px-[8%] lg:px-[16%] py-20 pt-40">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="w-full lg:w-1/2">
              <div className="title">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                    <i className="bi bi-rocket-takeoff pe-4"></i>
                    Contact Us
                  </h2>
                </div>
                <h1 className="text-5xl text-white lg:text-6xl font-semibold mt-7 mb-5">
                  Have questions? don't hesitate to{" "}
                  <span className="text-primary">contact us</span>
                </h1>
                <p>
                  Purpose of an introduction is to grab the audience's
                  attention, their interest, provide a preview of the value or
                  insights.
                </p>

                <div className="my-5 mt-10 flex items-center gap-3">
                  <div className="flex items-center">
                    <Image
                      src={ContactClient1}
                      alt="client1"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={ContactClient2}
                      alt="client1"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={ContactClient3}
                      alt="client1"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={ContactClient4}
                      alt="client1"
                      className="rounded-full -me-3"
                    />
                    <Image
                      src={ContactClient5}
                      alt="client1"
                      className="rounded-full -me-3"
                    />
                  </div>

                  <div className="flex flex-col gap-2 ms-6">
                    <div className="flex items-center gap-1">
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                      <i className="bi bi-star-fill text-primary"></i>
                    </div>
                    <h2>2.5k+ reviews (4.95 of 5)</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-gray p-5 rounded-2xl">
                <div className="bg-gray-light p-5 rounded-2xl">
                  <h2 className="text-3xl">Get In Touch</h2>
                  <div className="border-b py-2 border-dashed border-primary/30"></div>
                  <div className="mt-5">
                    <form>
                      <div className="flex flex-col gap-1">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className="outline-none bg-gray px-4 py-3 rounded-lg 
                          border border-transparent focus:border-primary transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-1 mt-2">
                        <label>E-mail</label>
                        <input
                          type="text"
                          placeholder="Enter Your Email"
                          className="outline-none bg-gray px-4 py-3 rounded-lg 
                          border border-transparent focus:border-primary transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-1 mt-2">
                        <label>Phone</label>
                        <input
                          type="text"
                          placeholder="Enter Your Phone"
                          className="outline-none bg-gray px-4 py-3 rounded-lg 
                          border border-transparent focus:border-primary transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-1 mt-2">
                        <label>Message</label>
                        <textarea
                          rows={4}
                          placeholder="Write Your Message"
                          className="outline-none bg-gray px-4 py-3 rounded-lg 
                          border border-transparent focus:border-primary transition-all 
                          duration-300 resize-none"
                        />
                      </div>
                      <button type="button" className="btn btn2 mt-5">
                        Send Message <i className="bi bi-arrow-right-short"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="light-section">
        <Banner />
      </div>
    </>
  );
};

export default Contact;
