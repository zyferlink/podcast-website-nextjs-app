"use client";

import { FaArrowRight } from "react-icons/fa6";
import { StyledButtonPrimary } from "./buttons/styled-button-primary";

interface PricingCardProps {
  packageName: string;
  price: string;
  period: string;
  desc: string;
  serviceList: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  packageName = "",
  price = "",
  period = "",
  desc = "",
  serviceList = [],
}) => {
  return (
    <div className="bg-gray-light px-6 py-6 rounded-xl">
      <div className="border-b border-dashed border-primary-light pb-8">
        <h4 className="font-semibold text-xl text-white text-start mb-4">
          {packageName}
        </h4>
        <div className="flex items-end justify-center gap-1 mb-5">
          <h1 className="text-5xl text-primary font-semibold">{price}</h1>
          <span className="text-xl text-primary">
            {"/ "}
            {period}
          </span>
        </div>

        <p className="text-white">{desc}</p>
      </div>

      <ul className="space-y-3 list-none py-8 ">
        {serviceList.map((item, index) => (
          <li key={index.toString()} className="flex gap-3 items-center">
            <i className="bi bi-check-circle-fill text-primary text-xl"></i>
            <span className="text-white text-start font-light">{item}</span>
          </li>
        ))}
      </ul>

      <StyledButtonPrimary
        onClick={() => {}}
        className="text-base"
        icon={<FaArrowRight size={12} />}
      >
        Get Started Now
      </StyledButtonPrimary>
    </div>
  );
};

export default PricingCard;
