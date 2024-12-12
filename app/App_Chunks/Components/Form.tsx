import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Form = () => {
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

  return (
    <div className="w-full py-14 bg-black ">
      <div className=" container text-slate-50">
        <Heading className="!text-center w-full">
          Get in <span className="!text-lime-600 font-Synonym">touch</span> with
          us
        </Heading>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div className="h-[500px] w-auto overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-contain "
              src={"/media/form.jpeg"}
            />
          </div>
          <form className="font-Satoshi">
            <div className="grid grid-cols-1 ">
              <label className="font-[500] text-xl ">Full Name</label>
              <input
                placeholder="Enter your full name"
                className="bg-slate-50/20 placeholder:text-slate-400 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="grid grid-cols-1">
                <label className="font-[500] text-xl ">
                  Select business activitiy
                </label>
                <div className="w-full">
                  <Select>
                    <SelectTrigger className="w-full mt-1 h-10 bg-slate-50/20 border-0 ">
                      <SelectValue
                        className="placehodler:text-slate-600"
                        placeholder="Select Business Activity"
                      />
                    </SelectTrigger>
                    <SelectContent className=" bg-[#c7c7c7] text-slate-950">
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
              </div>
              <div className="grid grid-cols-1 ">
                <label className="font-[500] text-xl ">Contact</label>
                <input
                  type="number"
                  placeholder="Enter Contact Number"
                  className="bg-slate-50/20 placeholder:text-slate-400 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl ">Email</label>
              <input
                placeholder="Eter your email"
                className="bg-slate-50/20 placeholder:text-slate-400 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
              />
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl ">Message</label>
              <textarea
                placeholder="Enter your message"
                className="resize-none bg-slate-50/20 placeholder:text-slate-400 rounded-lg focus:shadow-md focus:outline-dashed  h-28 px-4 py-2 mt-1"
              />
            </div>
            <Button className="px-4 mt-4 py-2 bg-blue-300 hover:bg-blue-400 rounded-lg ">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
