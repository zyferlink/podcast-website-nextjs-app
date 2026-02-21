"use client";
import Image from "next/image";
import { useState } from "react";
import Banner from "@/app/index/banner/page";
import HeaderTitle from "@/components/header-title";
import PageHeader from "@/components/page-header/page-header";
import { FaqData } from "@/data/faq";
import BrandIcon1 from "../../../../public/images/brand-icon-1.png";
import BrandIcon2 from "../../../../public/images/brand-icon-2.png";
import BrandIcon3 from "../../../../public/images/brand-icon-3.png";
import BrandIcon4 from "../../../../public/images/brand-icon-4.png";
import BrandIcon5 from "../../../../public/images/brand-icon-5.png";
import PageBanner1 from "../../../../public/images/Page-banner-1.png";
import PageBanner2 from "../../../../public/images/Page-banner-2.png";
import PageElement1 from "../../../../public/images/page-elm-1.png";
import PageElement2 from "../../../../public/images/page-elm-2.png";
import PageElement3 from "../../../../public/images/page-elm-3.png";
import PageElement4 from "../../../../public/images/page-elm-4.png";
import RocketIcon from "../../../../public/images/rocket-icon.png";

const faqs = [
  {
    question: "How often are new episodes released?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
  {
    question: "Can I suggest topics or guests for future episodes?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
  {
    question: "Is there a way to get early access or exclusive content?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
  {
    question: "How do I leave a review or feedback?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
  {
    question: "Do you accept listener questions?",
    answer:
      "If you have premium or exclusive content, provide information on how listeners can access it. Share information about any online communities or forums where listeners can connect and discuss episodes.",
  },
];

const Faqs = () => {
  const [openIndex, setopenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setopenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Page Header */}
      <PageHeader title="FAQs" />

      <div className="dark-section">
        <div className="px-[8%] lg:px-[16%] py-40 pt-30 pb-20">
          <div className="title flex flex-col items-center justify-center">
            {/* header title */}
            <HeaderTitle
              badgeText="FAQs"
              badgeIcon="bi bi-rocket-takeoff"
              title="Frequently Asked Questions"
              className="items-center text-center leading-[1.1]"
              titleProps="text-[3.2rem] md:text-[4rem]"
            />
            <p className="tracking-wider text-start text-white md:text-center pt-8 lg:w-[70%]">
              FAQs are widely used on websites, in product manuals, and in
              various instructional documents to address frequently asked
              questions by users or customers.
            </p>
          </div>

          {/* Faqs */}
          <div className="bg-gray p-5 rounded-2xl mt-15">
            <div className="border border-dashed border-primary mt-3 mb-5 opacity-30" />
            {/* faq content */}
            <div className="space-y-4">
              {FaqData.map((faq) => {
                const isOpen = openIndex === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={` rounded-xl p-4 transition-all duration-500 ease-in-out 
                        ${isOpen ? "bg-primary text-black" : "bg-gray-light"}`}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className={`flex w-full justify-between items-center cursor-pointer pb-2 px-2 transition-all duration-300 
                          ${isOpen ? "border-b border-dashed border-black/40" : ""}`}
                    >
                      <h3
                        className={`text-xl font-medium  ${isOpen ? "text-black" : "text-white"}`}
                      >
                        {faq.question}
                      </h3>

                      {/* Icon */}
                      <span
                        className={`w-10 h-10 flex items-center justify-center 
                            rounded-full transition-all duration-300 
                            ${isOpen ? "bg-black text-primary" : "bg-primary text-black"} `}
                      >
                        <i
                          className={`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"} pt-1 text-xl`}
                        />
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out 
                          ${isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"} `}
                    >
                      <p className="text-base px-2">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border border-dashed border-primary mt-5 opacity-30" />
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
};

export default Faqs;
