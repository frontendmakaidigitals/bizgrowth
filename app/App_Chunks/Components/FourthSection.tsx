"use client";
import React, { useState } from "react";
import Button from "./Button";
import { FaBuilding } from "react-icons/fa6";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaPassport } from "react-icons/fa";
import { MdOutlineAccountBalance } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { PiOfficeChairBold } from "react-icons/pi";
import { GoLaw } from "react-icons/go";
import { HiOutlineTableCells } from "react-icons/hi2";
import { GoSponsorTiers } from "react-icons/go";
import { MdAssistant } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";
import { TbReceiptTax } from "react-icons/tb";
const FourthSection = () => {
  const services = [
    {
      title: "Company Formation",
      icon: <FaBuilding className="text-2xl" />,
    },
    {
      title: "Company Incorporation",
      icon: <PiBuildingOfficeFill className="text-2xl" />,
    },
    {
      title: "Bank Account Assistance",
      icon: <MdOutlineAccountBalance className="text-2xl" />,
    },
    { title: "Visa Processing", icon: <FaPassport className="text-2xl" /> },
    { title: "PRO Services", icon: <FaUserTie className="text-2xl" /> },
    {
      title: "Office Space Solutions",
      icon: <PiOfficeChairBold className="text-2xl" />,
    },
    {
      title: "Legal and Advisory Services",
      icon: <GoLaw className="text-2xl" />,
    },
    {
      title: "VAT Services",
      icon: <TbReceiptTax className="text-2xl" />,
    },
    {
      title: "Accounting & Bookkeeping",
      icon: <HiOutlineTableCells className="text-2xl" />,
    },
    {
      title: "Business Sponsorship and Local Partner Services",
      icon: <GoSponsorTiers className="text-2xl" />,
    },
    {
      title: "Corporate Banking Assistance",
      icon: <MdAssistant className="text-2xl" />,
    },
    {
      title: "Business Consultation & Market Research",
      icon: <GiArchiveResearch className="text-2xl" />,
    },
    {
      title: "Design & Marketing Services",
      icon: <MdDesignServices className="text-2xl" />,
    },
    {
      title: "Government Permit & Approval",
      icon: <RiGovernmentFill className="text-2xl" />,
    },
  ];

  // State for controlling whether to show more services
  const [showMore, setShowMore] = useState(false);

  // Number of services to show initially
  const servicesToShow = showMore ? services.length : 8;

  return (
    <div className="container mb-20">
      <h1 className="text-2xl lg:text-4xl font-Satoshi font-[600]">
        YOUR ONE-STOP SHOP FOR BUSINESS SOLUTIONS!
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5">
        {services.slice(0, servicesToShow).map((service, index) => (
          <div
            key={index}
            className="w-full hover:shadow-lg transition-all duration-300 flex justify-between flex-col h-[200px] bg-slate-200 p-3 rounded-xl"
          >
            <div className="size-14 flex justify-center items-center overflow-hidden rounded-full bg-slate-50">
              {service.icon}
            </div>
            <div>
              <p className="text-left font-Satoshi font-[500] text-xl">
                {service.title}
              </p>
              <div>
                <button className="text-blue-500">Read more</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="flex justify-center w-full">
        <Button
          onClick={() => setShowMore(!showMore)}
          className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg"
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
};

export default FourthSection;
