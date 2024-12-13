import React from "react";
import Heading from "@/app/App_Chunks/Components/Heading";
import Button from "@/app/App_Chunks/Components/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import FourthSection from "../App_Chunks/Components/FourthSection";

const Page = () => {
  const businessActivities = [
    "Advertising",
    "Architecture",
    "Forex Trading",
    "Business Consultancy",
    "Cryptocurrency Activity",
    "Design Services",
    "Fashion Design Consultancy",
    "E-Commerce",
    "Event Management",
    "Food & Beverage Trading",
    "IT Consultancy",
    "Lifestyle Consultancy",
    "Human Resource Consultancy",
    "General Trading",
    "Interior Design",
    "Management Consultancy",
    "Media Services",
    "Marketing Services",
    "Online Education",
    "Photography Services",
    "Production",
    "Public Relations",
    "Project Management Consultancy",
    "Publishing",
    "Recruitment Consultancy",
    "Tax Consultancy",
    "Training Services",
    "Software Development",
    "Sports Management",
    "Wholesale of Household Goods",
    "Others",
  ];
  const regions = [
    {
      name: "Mainland",
      data: [
        "100 % Ownership",
        "Diverse Business Opportunities",
        "Unrestrict trade",
        "Access to Government Contracts",
        "Simplified Procedures",
        "Unlimited Fund transfer",
        "Access to Readymade Office space",
      ],
      icon: "",
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
      icon: "",
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
        "Stategic Location",
      ],
      icon: "",
    },
  ];
  return (
    <div className="w-full mt-16 ">
      <div className={`container w-full`}>
        <div
          className={`w-full grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}
        >
          <div className={" py-2  px-5 rounded-lg "}>
            <Heading className="font-bold !text-5xl">
              <span className="text-indigo-500">Expenses for Starting</span> and{" "}
              <span className="text-lime-500">Registering a Business</span> in
              Dubai and the UAE.
            </Heading>
            <p className={"font-Satoshi text-lg mt-7"}>
              To begin, kindly share some key details about yourself and your
              business. Once we have this information, we`ll provide an instant
              quote and give you the option to schedule a meeting with one of
              our setup specialists if you require further assistance.
            </p>
            <p className={"mt-6 font-Synonym font-[600]"}>
              Ready to take the next step? Share your details now and let’s get
              started!
            </p>
          </div>

          <div
            className={
              "w-full bg-indigo-50 transition-all duration-300 hover:shadow-md rounded-xl p-7 font-SplineSans"
            }
          >
            <form className="w-full">
              <div>
                <h2
                  className={
                    "w-full text-center text-xl lg:text-2xl  font-[600]"
                  }
                >
                  Cost Calculator
                </h2>
              </div>

              <div
                className={"grid  mt-4 grid-cols-1  lg:grid-cols-2 mb-4 gap-4"}
              >
                <input
                  placeholder={"First name*"}
                  className={
                    " py-2 border border-lime-300 font-Satoshi  placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm px-5 rounded-lg "
                  }
                />
                <input
                  placeholder={"Last name*"}
                  className={
                    " py-2 border border-lime-300 font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm px-5 rounded-lg "
                  }
                />
              </div>

              <div className={"grid grid-cols-1  lg:grid-cols-2 mb-4 gap-4"}>
                <div className="w-full">
                  <Select>
                    <SelectTrigger className="w-full  h-10 bg-gray-50 text-indigo-950  font-[400]  border-lime-300 border focus:outline-indigo-300 rounded-lg ">
                      <SelectValue
                        className="placehodler:text-slate-600"
                        placeholder="Select Business Activity"
                      />
                    </SelectTrigger>
                    <SelectContent className=" bg-indigo-100  text-slate-950">
                      <SelectGroup>
                        {businessActivities.map((activity, index) => (
                          <SelectItem key={index} value={activity}>
                            {activity}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <input
                  type="number"
                  placeholder={"Phone*"}
                  className={
                    " py-2 border border-lime-300 font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm px-5 rounded-lg "
                  }
                />
              </div>

              <div className={"grid grid-cols-1  lg:grid-cols-2 mb-4 gap-4"}>
                <input
                  placeholder={"Email*"}
                  className={
                    " py-2 border border-lime-300 font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm px-5 rounded-lg "
                  }
                />
                <input
                  placeholder={"Number of Visas*"}
                  className={
                    " py-2 border border-lime-300 font-Satoshi placeholder:text-slate-700 bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm px-5 rounded-lg "
                  }
                />
              </div>

              <div className="w-full">
                <textarea
                  placeholder={"Describe your business"}
                  className={
                    " py-2 border h-28 w-full border-lime-300 placeholder:text-slate-700 font-Satoshi  bg-gray-50 text-lime-800 focus:outline-indigo-300 font-[500] shadow-sm px-5 rounded-lg resize-none"
                  }
                />
              </div>

              <Button className="mt-4">Calculate</Button>
            </form>
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
              <Card key={index} region={region} />
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full my-24 ">
        <div className="container w-full  py-20">
          <Heading className="!text-center text-slate-50">
            Our Exclusive Corporate Service
          </Heading>
          <FourthSection />
        </div>
      </div>
    </div>
  );
};

const Card = ({ region }: { region: any }) => {
  return (
    <div className="w-full flex flex-col justify-between items-start bg-lime-200 border  border-slate-200 rounded-xl p-7 ">
      <div>
        <div className="size-16 bg-lime-500 rounded-full" />
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

        <button className="mt-6 bg-blue-500 text-slate-50 py-2 px-4 font-Synonym font-[600] rounded-lg">
          Calculate now
        </button>
      </div>
    </div>
  );
};
export default Page;
