"use client";
import React, { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Form from "./PopupForm";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast";
const ThirdSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  return (
    <div className="container grid grid-cols-1 items-center lg:grid-cols-2 gap-14 mb-20">
      {isOpen && <Form setIsOpen={setIsOpen} setStatus={setStatus} />}
      <AnimatePresence mode="wait">
        {status === "success" && (
          <Toast
            title="Success"
            desc="Form submitted successfully"
            type="success"
          />
        )}
        {status === "failed" && (
          <Toast title="Error" desc="Please try again later" type={"error"} />
        )}
      </AnimatePresence>
      <div className="h-[300px] relative lg:h-[500px] rounded-xl">
        <img
          className="w-full h-full object-cover relative z-[10] rounded-xl"
          src={
            "https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <div className="shadow-xl absolute -top-3 left-3 xxl:-top-10 xl:-top-5 xl:left-5 xxl:left-10 rounded-xl w-full bg-slate-950/70 h-full" />
      </div>
      <div className="">
        <Heading className="text-start">
          ACCELERATE YOUR{" "}
          <span className="text-lime-500 font-Synonym">BUSINESS GROWTH</span>{" "}
          WITH US
        </Heading>
        <p className="text-xl font-Satoshi mt-5">
          BIZ Growth Consultancy, your trusted partner in setting up and growing
          your business in the UAE. <br /> <br /> We simplify the complexities
          of company formation, ensuring a seamless and efficient process. We
          specialize in providing comprehensive business setup services that
          streamline the process of establishing a company in one of the world’s
          most dynamic and business-friendly environments.
        </p>
        <Button onClick={()=>setIsOpen(true)} className="mt-5">Contact us</Button>
      </div>
    </div>
  );
};

export default ThirdSection;
