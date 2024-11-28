import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
const Form = () => {
  return (
    <div className="w-full py-14 bg-lime-100">
      <div className=" container">
        <Heading className="!text-center w-full">
          Get in <span className="text-lime-600 font-Synonym">touch</span> with
          us
        </Heading>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div className="h-[500px] w-auto overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-contain "
              src={"/media/form.png"}
            />
          </div>
          <form className="font-Satoshi">
            <div className="grid grid-cols-1 ">
              <label className="font-[500] text-xl ">Full Name</label>
              <input
                placeholder="Enter your full name"
                className="bg-slate-950/10 placeholder:text-slate-600 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="grid grid-cols-1">
                <label className="font-[500] text-xl ">
                  Select business activitiy
                </label>
                <div className="w-full">
                  <Select>
                    <SelectTrigger className="w-full mt-1 h-10 bg-slate-950/10 border-0 ">
                      <SelectValue
                        className="placehodler:text-slate-600"
                        placeholder="Select Business Activity"
                      />
                    </SelectTrigger>
                    <SelectContent className=" bg-[#c5e1a5] text-slate-950">
                      <SelectGroup>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
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
                  className="bg-slate-950/10 placeholder:text-slate-600 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl ">Email</label>
              <input
                placeholder="Eter your email"
                className="bg-slate-950/10 placeholder:text-slate-600 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
              />
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl ">Message</label>
              <textarea
                placeholder="Enter your message"
                className="resize-none bg-slate-950/10 placeholder:text-slate-600 rounded-lg focus:shadow-md focus:outline-dashed  h-28 px-4 py-2 mt-1"
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
