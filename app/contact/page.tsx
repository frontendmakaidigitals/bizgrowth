import React from "react";
import Button from "../App_Chunks/Components/Button";
import Heading from "../App_Chunks/Components/Heading";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Page = () => {
  return (
    <div className=" mb-20">
      <div className="container  mt-1">
        <div className="w-full py-12 px-5 text-slate-950 border border-lime-300 overflow-hidden font-Satoshi font-semibold flex flex-col justify-center items-center rounded-xl relative">
          <div className="absolute w-full h-full -z-10">
            <img
              src={"/media/gggrain.svg"}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl text-center">
            Get Personalized Assitance to set up your business in UAE!
          </h1>
          <h2 className="mt-4 text-lg font-[500] text-center">
            We’re here to help you navigate the process of setting up your
            business and support services in the UAE. Whether you’re just
            starting out or looking to expand, our team of experts is ready to
            provide personalized, professional support every step of the way.
          </h2>
        </div>
      </div>
      <div className="container mt-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#dcedc8] flex flex-col justify-between items-start w-full p-7 h-full rounded-l-lg">
          <h1 className="text-3xl font-Satoshi font-[500]">
            Please fill out the form below
          </h1>
          <p className="">
            Get in touch with us today to discuss your business needs, ask
            questions, or schedule a consultation!
          </p>

          <form action="" className="mt-10">
            <div className="mt-2">
              <label className="">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="border border-dashed bg-gray-950/10 mt-1 border-gray-400 rounded-lg w-full p-2"
              />
            </div>
            <div className="mt-4">
              <label>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="border border-dashed bg-gray-950/10 mt-1 border-gray-400 rounded-lg w-full p-2"
              />
            </div>
            <div className="grid mt-4 grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label>
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="border border-dashed bg-gray-950/10 mt-1 border-gray-400 rounded-lg w-full p-2"
                />
              </div>
              <div className="">
                <label>
                  Contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Contact"
                  className="border border-dashed bg-gray-950/10 mt-1 border-gray-400 rounded-lg w-full p-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label>
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter your message here"
                className="border h-40 resize-none border-dashed bg-gray-950/10 mt-1 border-gray-400 rounded-lg w-full p-2"
              />
            </div>
            <div className="mt-4">
              <Button className="px-5">Submit</Button>
            </div>
          </form>
          <div></div>
        </div>
        <div className="h-[700px] flex flex-col justify-between p-7 items-center bg-gradient-to-tr from-green-300 to-yellow-300 rounded-r-lg">
          <div className="w-full flex items-center justify-end px-3 py-2 ">
            <p className="px-4 py-2 text-slate-600 font-Satoshi font-[500] rounded-full ">
              Get in Touch
            </p>
          </div>
          <div className="w-full flex items-center gap-3">
            {[
              <FaFacebook />,
              <FaSquareInstagram />,
              <FaSquareXTwitter />,
              <FaYoutube />,
            ].map((_, index) => {
              return (
                <div
                  className="size-10 text-2xl text-[#244010] flex items-center justify-center rounded-full bg-green-400"
                  key={index}
                >
                  {_}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;