"use client";

import { useState } from "react";
import Banner from "@/app/index/banner/page";
import Testimonial from "@/app/index/testimonial/page";
import HeaderTitle from "@/components/header-title";
import PageHeader from "@/components/page-header/page-header";
import PricingCard from "@/components/pricing-card";
import { FaqData } from "@/data/faq";

enum BillingPeriod {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

const Pricing = () => {
  const [billing, setBilling] = useState<BillingPeriod>(BillingPeriod.MONTHLY);

  const [openLeftIndex, setopenLeftIndex] = useState<number | null>(null);
  const [openRightIndex, setopenRightIndex] = useState<number | null>(null);

  const toggleLeft = (index: number) => {
    setopenLeftIndex(openLeftIndex === index ? null : index);
  };

  const toggleRight = (index: number) => {
    setopenRightIndex(openRightIndex === index ? null : index);
  };

  return (
    <>
      {/* Page Header */}
      <PageHeader title="Pricing Plan" />

      <div className="dark-section bg-black/98 text-white">
        <div className="px-[8%] lg:px-[16%] py-20">
          <div className="text-center">
            {/* header title */}
            <HeaderTitle
              badgeText="Pricing Plan"
              badgeIcon="bi bi-rocket-takeoff"
              title="Flexible Pricing Options"
              className="items-center text-center leading-[1.1]"
              titleProps="text-[3.2rem] md:text-[4rem]"
            />

            <div className="flex items-center justify-center gap-4 mt-4 font-bold text-lg">
              <span
                className={`cursor-pointer ${billing === BillingPeriod.MONTHLY ? "text-secondary" : "text-white"}`}
              >
                Monthly
              </span>

              <button
                type="button"
                onClick={() =>
                  setBilling(
                    billing === BillingPeriod.MONTHLY
                      ? BillingPeriod.YEARLY
                      : BillingPeriod.MONTHLY,
                  )
                }
                className="relative w-14 h-7 bg-gray rounded-full cursor-pointer"
              >
                <span
                  className={`absolute top-1 w-5 h-5 bg-primary rounded-full transition-all 
                  duration-300 ${billing === BillingPeriod.YEARLY ? "left-8" : "left-1"}`}
                />
              </button>

              <span
                className={`cursor-pointer ${billing === BillingPeriod.YEARLY ? "text-secondary" : "text-white"}`}
              >
                Yearly <span className="text-primary"> (Save 30%)</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-15">
              <PricingCard
                packageName="Free"
                price="0.00"
                period={billing === BillingPeriod.MONTHLY ? "Mo" : "Yr"}
                desc="Get exclusive podcasts from your favorite hosts on here for
                    free."
                serviceList={[
                  "Latest and freebies topics",
                  "Curated speakers",
                  "Free content only",
                  "Available on all platforms",
                  "Upto 20 channel Subscribe",
                  "Unlimited episodes",
                ]}
              />

              <PricingCard
                packageName="Premium"
                price={billing === BillingPeriod.MONTHLY ? "29.00" : "329.00"}
                period={billing === BillingPeriod.MONTHLY ? "Mo" : "Yr"}
                desc="Get exclusive podcasts from your favorite hosts on here for
                    free."
                serviceList={[
                  "Latest and freebies topics",
                  "Curated speakers",
                  "Free content only",
                  "Available on all platforms",
                  "Upto 20 channel Subscribe",
                  "Unlimited episodes",
                ]}
              />

              <PricingCard
                packageName="Special"
                price={billing === BillingPeriod.MONTHLY ? "99.00" : "999.00"}
                period={billing === BillingPeriod.MONTHLY ? "Mo" : "Yr"}
                desc="Get exclusive podcasts from your favorite hosts on here for
                    free."
                serviceList={[
                  "Latest and freebies topics",
                  "Curated speakers",
                  "Free content only",
                  "Available on all platforms",
                  "Upto 20 channel Subscribe",
                  "Unlimited episodes",
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="light-section wave-wrapper-section text-white">
        <div className="px-[8%] lg:px-[16%] py-40 pt-50 pb-20 lg:pb-40">
          <div className="flex flex-col items-center justify-center">
            {/* header title */}
            <HeaderTitle
              badgeText="FAQs"
              badgeIcon="bi bi-rocket-takeoff"
              title="Frequently Asked Questions"
              className="items-center text-center leading-[1.1]"
              titleProps="text-[3.5rem] md:text-[4.2rem]"
            />
            <p className="tracking-wider text-start text-white md:text-center pt-8 lg:w-[70%]">
              FAQs are widely used on websites, in product manuals, and in
              various instructional documents to address frequently asked
              questions by users or customers.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 pt-4">
            <div className="w-full lg:w-1/2">
              <div className="space-y-4 w-full py-10">
                {FaqData.map((item, index) => (
                  <div
                    key={index.toString()}
                    className={`overflow-hidden rounded-md py-4 px-4 lg:px-6 transition-all duration-300 
                      ${
                        openLeftIndex === index
                          ? "bg-primary text-text border border-[#222e48]"
                          : "bg-gray border border-transparent"
                      } `}
                  >
                    <button
                      type="button"
                      onClick={() => toggleLeft(index)}
                      className={`w-full flex justify-between items-center cursor-pointer 
                        transition-all duration-300 border-b border-dashed 
                        ${openLeftIndex === index ? "pb-4 border-[#222e48]" : "border-transparent"} `}
                    >
                      <span
                        className={`text-lg text-start font-bold tracking-normal  
                          ${openLeftIndex === index ? "text-black" : "text-white"}`}
                      >
                        {item.question}
                      </span>

                      {/* Icon */}
                      <i
                        className={`pt-1 text-3xl bi 
                          ${openLeftIndex === index ? "bi-dash-circle-fill text-black" : "bi-plus-circle-fill text-primary"}`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden 
                    ${openLeftIndex === index ? "max-h-75 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
                    >
                      <p className="text-base text-black">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="space-y-4 w-full py-10">
                {FaqData.map((item, index) => (
                  <div
                    key={index.toString()}
                    className={`overflow-hidden rounded-md py-4 px-4 lg:px-8 transition-all duration-300 
                      ${
                        openRightIndex === index
                          ? "bg-primary text-text border border-[#222e48]"
                          : "bg-gray border border-transparent"
                      } `}
                  >
                    <button
                      type="button"
                      onClick={() => toggleRight(index)}
                      className={`w-full flex justify-between items-center cursor-pointer 
                        transition-all duration-300 border-b border-dashed 
                        ${openRightIndex === index ? "pb-4 border-[#222e48]" : "border-transparent"} `}
                    >
                      <span
                        className={`text-lg text-start font-bold tracking-normal  
                          ${openRightIndex === index ? "text-black" : "text-white"}`}
                      >
                        {item.question}
                      </span>

                      {/* Icon */}
                      <i
                        className={`pt-1 text-3xl bi 
                          ${openRightIndex === index ? "bi-dash-circle-fill text-black" : "bi-plus-circle-fill text-primary"}`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden 
                    ${openRightIndex === index ? "max-h-75 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
                    >
                      <p className="text-base text-black">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <Banner />
    </>
  );
};

export default Pricing;
