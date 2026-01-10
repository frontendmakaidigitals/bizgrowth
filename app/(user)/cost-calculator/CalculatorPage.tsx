"use client";
import React, { useState } from "react";
import Heading from "../App_Chunks/Components/Heading";
import FourthSection from "../App_Chunks/Components/FourthSection";
import Banner from "../App_Chunks/Components/Banner";
import { Button } from "@/components/ui/button";
import CalculatorModal from "../App_Chunks/Components/Calculator-Modal";
import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, Check } from "lucide-react";
const CalculatorPage = () => {
  const [open, setOpen] = useState(false);
  const regions = [
    {
      name: "Mainland",
      data: [
        "100 % Ownership",
        "Diverse Business Opportunities",
        "Unrestricted trade",
        "Access to Government Contracts",
        "Simplified Procedures",
        "Unlimited Fund transfer",
        "Access to Readymade Office space",
      ],
      icon: "https://static.thenounproject.com/png/5201539-200.png",
    },
    {
      name: "Freezone",
      data: [
        "100% Foreign Ownership",
        "Tax benefits",
        "Easy Setup & Operations",
        "Visa Benefits",
        "No Currency Restriction",
        "Duty-free Imports & Exports",
        "Government Support",
      ],
      icon: "https://cdn-icons-png.flaticon.com/512/3798/3798583.png",
    },
    {
      name: "Offshore",
      data: [
        "100% Foreign Ownership",
        "Confidentiality",
        "Asset Protection",
        "Strong Legal Framework",
        "Minimal Reporting Requirements",
        "Global Business Opportunities",
        "Strategic Location",
      ],
      icon: "https://cdn-icons-png.flaticon.com/512/1/1803.png",
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => [setOpen(false)];

  return (
    <div className="w-full mt-16 ">
      {open ? <CalculatorModal onClose={handleClose} /> : null}
      <div id={"calculator"} className={`container w-full`}>
        <div
          className={`w-full grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}
        >
          <div className={"  rounded-lg "}>
            <Heading className="font-bold !text-start !text-4xl">
              <span className="text-indigo-500">Expenses for Starting</span> and{" "}
              <span className="text-lime-500">Registering a Business</span> in
              Dubai and the UAE
            </Heading>
            <p className={"font-Satoshi text-lg mt-7"}>
              To begin, kindly share some key details about yourself and your
              business. Once we have this information, we`ll provide an instant
              quote and give you the option to schedule a meeting with one of
              our setup specialists if you require further assistance.
            </p>
            <p className={"mt-4 font-Synonym font-[600] text-slate-700"}>
              Ready to take the next step? Share your details now and let’s get
              started!
            </p>
            <p className="text-slate-800 mt-4 flex items-center gap-2">
              <span>
                <BadgeCheck className="fill-green-500 stroke-slate-50" />{" "}
              </span>{" "}
              Takes less than 60 seconds
            </p>
            <div className="flex lg:flex-row flex-col items-start  lg:items-center gap-1 w-full lg:gap-4 mt-4 lg:mt-0">
              <Button
                onClick={handleOpen}
                className="h-11 px-4 mt-4 bg-indigo-600 hover:bg-indigo-500 w-full lg:w-auto"
              >
                Calculate My Cost
              </Button>
              <Link href={"/contact"} className="w-full lg:w-auto">
                <Button className="h-11  px-4 bg-transparent w-full lg:w-auto border border-slate-400 hover:bg-green-500 hover:text-slate-50 hover:border-green-500 shadow-none text-black mt-4">
                  Book a free consultation
                </Button>
              </Link>
            </div>
          </div>

          <div
            className={
              "w-full  hidden lg:block lg:h-[470px] transition-all duration-300 bg-indigo-50 rounded-xl font-SplineSans font-bold"
            }
          >
            <Image
              className="w-full h-full object-cover"
              src="/contact.jpg"
              width={700}
              height={700}
              alt="Contact illustration"
            />
          </div>
        </div>
      </div>
      <div className=" w-full my-24 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500">
        <div className="container w-full  py-20">
          <Heading className="!text-center text-slate-50">
            Where Should You Register Your Business in Dubai?
          </Heading>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {regions.map((region, index) => (
              <Card key={index} region={region} target={"calculator"} />
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full mt-24 ">
        <div className="container w-full  py-20">
          <Heading className="!text-center text-slate-50">
            Our Exclusive Corporate Service
          </Heading>
          <FourthSection />
        </div>
      </div>
      <Banner
        title={"Get Started Now"}
        desc={
          "Provide your details and receive an instant, personalized quote to start your business in Dubai. Our experts are here to guide you every step of the way—let's turn your vision into reality!"
        }
      />
    </div>
  );
};

const Card = ({ region, target }: { region: any; target: string }) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col justify-between items-start bg-lime-200 border  border-slate-200 rounded-xl p-7 ">
      <div>
        <div className="size-16 bg-lime-500 rounded-full p-1">
          <img src={region.icon} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-7">
        <h1 className="text-xl lg:text-2xl font-[600] text-lime-950 font-SplineSans">
          Dubai {region.name}
        </h1>

        <div className="mt-4">
          {region.data.map((item: string, index: number) => (
            <div
              key={index}
              className="flex items-start gap-3 font-Synonym mt-2 font-[500]"
            >
              <div className="mt-[2px]">
                <div className="size-5">
                  <img src={"media/mainland/checked.png"} />
                </div>
              </div>
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={handleScroll}
          className="mt-6 bg-blue-500 text-slate-50 py-2 px-4 font-Synonym font-[600] rounded-lg"
        >
          Calculate now
        </button>
      </div>
    </div>
  );
};
export default CalculatorPage;
