"use client";
import React, { useState } from "react";
import Button from "./Button";
import { FaBuilding } from "react-icons/fa6";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaPassport } from "react-icons/fa";
import { MdOutlineAccountBalance } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { PiOfficeChairBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { HiOutlineTableCells } from "react-icons/hi2";
import { GoSponsorTiers } from "react-icons/go";
import { MdAssistant } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";
import { TbReceiptTax } from "react-icons/tb";
import Heading from "./Heading";
const FourthSection = () => {
  const services = [
    {
      title: "Company Formation",
      icon: <FaBuilding className="text-2xl" />,
      desc: "Form your company effortlessly with our guidance on the legal process of establishing your business entity.",
    },
    {
      title: "Company Incorporation",
      icon: <PiBuildingOfficeFill className="text-2xl" />,
      desc: "We handle the whole process of incorporating your business, from choosing a legal structure to registering with relevant authorities. ",
    },
    {
      title: "Bank Account Assistance",
      icon: <MdOutlineAccountBalance className="text-2xl" />,
      desc: "We guide you in opening and managing bank account for smooth financial transactions for your business.",
    },
    {
      title: "Visa Processing",
      icon: <FaPassport className="text-2xl" />,
      desc: "We process the visa applications and immigration procedures for a smooth business operations",
    },
    {
      title: "PRO Services",
      icon: <FaUserTie className="text-2xl" />,
      desc: "We provide translation, interpretation, and document attestation, to facilitate international business operations.",
    },
    {
      title: "Office Space Solutions",
      icon: <PiOfficeChairBold className="text-2xl" />,
      desc: " We help you get the apt office space solutions, from virtual offices to fully- furnished, & serviced workspaces. ",
    },

    {
      title: "VAT Services",
      icon: <TbReceiptTax className="text-2xl" />,
      desc: " We provide comprehensive VAT services, including registration, compliance, and refund claims. ",
    },
    {
      title: "Accounting & Bookkeeping",
      icon: <HiOutlineTableCells className="text-2xl" />,
      desc: " We provide efficient accounting and book keeping services to manage your financial records ",
    },
    {
      title: "Golden Visa",
      icon: <GoSponsorTiers className="text-2xl" />,
      desc: "We assist with Golden Visa application process, helping you secure long-term residency ",
    },
    {
      title: "Wealth Management",
      icon: <MdAssistant className="text-2xl" />,
      desc: "We provide comprehensive wealth management services, including investment planning, portfolio management and retirement planning",
    },
    {
      title: "Design & Marketing Services",
      icon: <MdDesignServices className="text-2xl" />,
      desc: " We provide creative design solutions and effective marketing strategies to promote your brand online & offline",
    },
    {
      title: "Government Permit & Approval",
      icon: <RiGovernmentFill className="text-2xl" />,
      desc: "We assist in obtaining government permits and approvals required for your business operations",
    },
  ];

  // State for controlling whether to show more services
  const [showMore, setShowMore] = useState(false);

  // Number of services to show initially
  const servicesToShow = showMore ? services.length : 8;

  return (
    <div className="container mb-20">
      <Heading className="!text-center w-full">
        Your <span className="text-lime-500 font-Synonym">One-Stop</span> shop
        for business solutions!
      </Heading>
      <motion.div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5">
        {services.slice(0, servicesToShow).map((service, index) => (
          <motion.div
            key={index}
            className="w-full hover:shadow-lg transition-all duration-300 bg-[#dcedc8] p-3 rounded-xl"
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.15,
              ease: [0.65, 0.05, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[100px]">
              <div className="size-14 text-[#244010] flex justify-center items-center overflow-hidden rounded-full bg-slate-50">
                {service.icon}
              </div>
            </div>
            <div className="flex flex-col justify-between items-start">
              <p className="text-left font-Satoshi font-[600] text-xl">
                {service.title}
              </p>
              <p className="text-sm">{service.desc}</p>
              <div className="mt-6">
                <button className="text-[#244010] bg-lime-300 px-3 py-1 rounded-lg font-Satoshi font-[500]">
                  Read more
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More / Show Less Button */}
      <div className="flex justify-center w-full">
        <Button
          onClick={() => setShowMore(!showMore)}
          className="mt-5 px-5 py-2"
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
};

export default FourthSection;
