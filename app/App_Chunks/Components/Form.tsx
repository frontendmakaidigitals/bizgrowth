import React from "react";
import Heading from "./Heading";
const Form = () => {
  return (
    <div className="w-full bg-yellow-300 py-14 ">
      <div className=" container">
        <Heading>Get in touch with us</Heading>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10  mt-8">
          <div className="h-full bg-pink-100 w-auto">
            <img
              className="w-full h-full object-contain"
              src={
                "https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912018.png"
              }
            />
          </div>
          <form className="font-Satoshi">
            <div className="grid grid-cols-1 ">
              <label className="font-[500] text-xl ">Full Name</label>
              <input className="bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="grid grid-cols-1">
                <label className="font-[500] text-xl ">Company</label>
                <input className="bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1" />
              </div>
              <div className="grid grid-cols-1 ">
                <label className="font-[500] text-xl ">Contact</label>
                <input className="bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1" />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl ">Email</label>
              <input className="bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  px-4 py-2 mt-1" />
            </div>
            <div className="grid grid-cols-1 mt-4">
              <label className="font-[500] text-xl ">Message</label>
              <textarea className="resize-none bg-slate-100 rounded-lg focus:shadow-md focus:outline-dashed  h-28 px-4 py-2 mt-1" />
            </div>
            <button
              type="submit"
              className="px-3 mt-4 py-1 bg-blue-300 hover:bg-blue-400 rounded-lg "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
