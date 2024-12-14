"use client";
import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="h-[80vh] lg:h-[99vh] w-screen overflow-hidden mb-24 relative">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/media/Header VIDEO.mp4" type="video/mp4" />
        </video>
        <div className="bg-slate-900/30 flex justify-center  items-center w-full h-full absolute top-0 left-0 ">
          <div className=" container py-20  flex flex-col justify-center items-center gap-5">
            <h1 className="text-[#f1f8e9] text-center text-2xl lg:text-7xl  font-Synonym font-[600]">
              From Idea to Incorporation <br /> Your Business setup partner
            </h1>
            <h2 className="text-white w-full lg:w-2/3 text-center text-md lg:text-2xl font-Satoshi font-[400]">
              Lead your way to Success by partnering with BIZ GROWTH. We are
              experts in empowering your business ideas into action.
            </h2>
            <Button>Get a Free Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
