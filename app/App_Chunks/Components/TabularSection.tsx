"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const TabularSection = () => {
  const tabs = [
    {
      img: "https://intuitconsultancy.com/wp-content/uploads/2022/09/dubai-mainland-company-formation.png",
      title: "Mainland",
    },
    {
      img: "https://rockyrealestate.com/wp-content/uploads/2022/05/free-zone-areas-in-dubai.jpg",
      title: "Free Zone",
    },
    {
      img: "https://www.dubai-offshore.com/wp-content/uploads/2021/10/resort-exterior-1.jpg",
      title: "Offshore",
    },
  ];

  return (
    <div className="w-full h-full mb-20 container">
      <h1 className="text-3xl lg:text-5xl font-Satoshi font-[500] mb-10">
        CHOOSE YOUR JURISDICTION
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, type: "spring", damping: 7 }}
            className="h-[500px] group cursor-pointer relative flex justify-start items-end p-3 rounded-lg w-full bg-red-50"
          >
            <img
              src={tab.img}
              className="absolute rounded-lg w-full h-full object-cover top-0 left-0"
            />
            <div className="absolute rounded-lg w-full h-full bg-slate-900/20 top-0 left-0" />

            <div className="bg-slate-50 flex items-center justify-between opacity-80 relative rounded-full z-10 w-full px-5 py-3">
              <h1 className="text-xl lg:text-3xl font-Satoshi text-slate-950 font-[600]">
                {tab.title}
              </h1>
              <motion.div
                className="flex group-hover:rotate-45 transition-all duration-200  items-center justify-center"
                transition={{ duration: 0.5, type: "spring", damping: 7 }}
              >
                <MdArrowOutward className="text-4xl" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TabularSection;
