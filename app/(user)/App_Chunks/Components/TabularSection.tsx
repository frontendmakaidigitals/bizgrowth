"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Heading from "./Heading";
const TabularSection = () => {
  const tabs = [
    {
      img: "/tabular-images/mainland.png",
      title: "Mainland",
    },
    {
      img: "/tabular-images/free-zone.jpeg",
      title: "Free Zone",
    },
    {
      img: "/tabular-images/offshore.jpg",
      title: "Offshore",
    },
  ];
  const [hoverId, setHoverId] = React.useState<null | number>(null);

  const mainland = [
    "100 % Ownership",
    "Diverse Business Opportunities",
    "Unrestricted trade",
    "Access to Government Contracts",
    "Simplified Procedures",
    "Unlimited Fund transfer",
    "Access to Readymade Office space, warehouse & Factories ",
  ];
  const offshore = [
    "100% Foreign Ownership",
    "Confidentiality",
    "Asset Protection",
    "Strong Legal Framework",
    "Minimal Reporting Requirements",
    "Global Business Opportunities",
    "Strategic Location",
  ];
  const freezone = [
    "100% Foreign Ownership",
    "Tax benefits",
    "Easy Setup & Operations",
    "Visa Benefits",
    "No Currency Restriction",
    "Duty-free Imports & Exports",
    "Government Support",
  ];

  return (
    <div className="w-full h-full mb-20 container">
      <Heading className="!text-center w-full">
        Choose your{" "}
        <span className="text-lime-500 font-Synonym">Jurisdiction</span>
      </Heading>
      <motion.div
        transition={{ staggerChildren: 1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10"
      >
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoverId(index)}
            onMouseLeave={() => setHoverId(null)}
            className="h-[500px] group cursor-pointer relative flex justify-start items-end p-3 rounded-lg w-full bg-red-50"
          >
            <img
              src={tab.img}
              className="absolute rounded-lg w-full h-full object-cover top-0 left-0"
            />
            <div className="absolute rounded-lg w-full h-full bg-slate-900/20 top-0 left-0" />

            <motion.div
              className="bg-[#f2fee5] overflow-hidden group-hover:rounded-lg flex items-center justify-between relative z-10 w-full px-5 py-3"
              animate={{ height: hoverId === index ? "450px" : "50px" }}
              transition={{ duration: 0.55, type: "spring" }}
            >
              {hoverId === index ? (
                <AnimatePresence mode="wait">
                  <div>
                    <div className="mb-3 w-full font-Satoshi">
                      <h1 className="text-xl lg:text-3xl text-green-950 font-[600]">
                        {tab.title}
                      </h1>
                      <div className="mt-2 text-sm font-[500] flex bg-[#dcedc8] px-2 rounded-lg w-full py-2 items-center gap-3">
                        <p className="border-r pr-2  border-gray-400">
                          Company Set-up
                        </p>
                        <p className="border-r pr-2 border-gray-400">VISA</p>
                        <p>Bank Assistance</p>
                      </div>
                    </div>

                    {hoverId === 0 &&
                      mainland.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ y: 50 }}
                          animate={{ y: 0 }}
                          exit={{ y: 50 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className="flex text-lg overflow-hidden h-8 items-start gap-2"
                        >
                          <div className="mt-1">
                            <IoMdCheckmarkCircle className="text-green-500" />
                          </div>
                          <p>{item}</p>
                        </motion.div>
                      ))}

                    {hoverId === 1 &&
                      freezone.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ y: 50 }}
                          animate={{ y: 0 }}
                          exit={{ y: 50 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className="text-lg flex items-start gap-2"
                        >
                          <div className="mt-1">
                            <IoMdCheckmarkCircle className="text-green-500" />
                          </div>
                          <p>{item}</p>
                        </motion.div>
                      ))}

                    {hoverId === 2 &&
                      offshore.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ y: 50 }}
                          animate={{ y: 0 }}
                          exit={{ y: 50 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className="text-lg flex items-start gap-2"
                        >
                          <div className="mt-1">
                            <IoMdCheckmarkCircle className="text-green-500" />
                          </div>
                          <p>{item}</p>
                        </motion.div>
                      ))}
                  </div>
                </AnimatePresence>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <motion.h1
                    className="text-xl lg:text-3xl font-Satoshi text-[#12250a] font-[600]"
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    {tab.title}
                  </motion.h1>
                  <motion.div className="flex group-hover:rotate-45 transition-all duration-200 items-center justify-center">
                    <MdArrowOutward className="text-4xl text-[#12250a]" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TabularSection;
