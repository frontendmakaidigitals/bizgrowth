import React from "react";
import Heading from "./Heading";
import Button from "./Button";
const Form = () => {
  return (
    <div className="w-full py-14 bg-no-repeat bg-center bg-cover bg-[url('/media/rm183-techi-11.jpg')]">
      <div className=" container">
        <Heading className="!text-center w-full">Get in touch with us</Heading>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div className="h-full w-auto overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-contain "
              src={
                "https://img.freepik.com/free-vector/organic-flat-feedback-concept-illustrated_23-2148952275.jpg?t=st=1732604512~exp=1732608112~hmac=00389f9b05dc07b4d0f7e21754b78a6f018c09c8f1db206ca9aa3587dcb745a3&w=900"
              }
            />
          </div>
          <form className="font-Satoshi">
            <div className="grid grid-cols-1 ">
              <label className="font-[500] text-xl ">Full Name</label>
              <input
                placeholder="Enter your full name"
                className="bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="grid grid-cols-1">
                <label className="font-[500] text-xl ">Company</label>
                <input
                  placeholder="Enter your company name"
                  className="bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
                />
              </div>
              <div className="grid grid-cols-1 ">
                <label className="font-[500] text-xl ">Contact</label>
                <input
                  placeholder="Enter Contact Number"
                  className="bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl ">Email</label>
              <input
                placeholder="Eter your email"
                className="bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1"
              />
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl ">Message</label>
              <textarea
                placeholder="Enter your message"
                className="resize-none bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  h-28 px-4 py-2 mt-1"
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
