"use client";
import Image from "next/image";
import { useState } from "react";
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
      {/* Page Section */}
      <div className="page-section bg-black/98 text-white">
        <Image src={PageElement2} alt="Element" className="elm2 elemet" />
        <Image src={PageElement3} alt="Element" className="elm3 elemet" />
        <Image src={PageElement4} alt="Element" className="elm4 elemet" />
        <div className="page-content w-full md:w-1/2 flex justify-center flex-col pt-10">
          <Image src={PageElement1} alt="Element" className="w-full h-full" />

          <h1 className="text-6xl lg:text-8xl justify-center my-6">
            FAQ<span className="text-primary">s</span>
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

      <div className="dark-section bg-black/98 text-white">
        <div className="px-[8%] lg:px-[16%] py-40 pt-30 pb-20">
          <div className="title flex flex-col items-center justify-center">
            <div>
              <h2 className="inline-block px-4 py-2 rounded-full text-primary text-2xl font-normal border border-primary">
                <i className="bi bi-rocket-takeoff pe-4"></i>
                FAQs
              </h2>
            </div>
            <h1 className="text-5xl text-white lg:text-6xl font-semibold mt-7 mb-5">
              Frequently Asked Questions
            </h1>
            <p>
              FAQs are widely used on websites, in product manuals, and in
              various instructional documents to address frequently asked
              questions by users or customers.
            </p>
          </div>

          {/* Faqs */}
          <div className="bg-gray p-5 rounded-2xl mt-15">
            <div className="border border-dashed border-primary mt-3 mb-5 opacity-30"></div>
            {/* faq content */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index.toString()}
                    className={` rounded-xl p-4 transition-all duration-500 ease-in-out ${isOpen ? "bg-primary text-black" : "bg-gray-light"} `}
                  >
                    <div
                      className={`flex justify-between items-center cursor-pointer pb-3 transition-all duration-300 
                        ${isOpen ? "border-b border-dashed border-black/40" : ""} `}
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-md md:text-xl font-medium">
                        {faq.question}
                      </h3>
                      {/* Icon */}
                      <span
                        className={`w-10 h-10 flex items-center justify-center rounded-full 
                          transition-all duration-300 ${isOpen ? "bg-black text-primary" : "bg-primary text-black"} `}
                      >
                        <i
                          className={`bi ${isOpen ? "bi-dash-lg" : "bi-plus-lg"} text-xl `}
                        ></i>
                      </span>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"} `}
                    >
                      <p className="text-sm">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
