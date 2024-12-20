"use client";
import React, { useEffect, useState } from "react";
import Heading from "../App_Chunks/Components/Heading";
import FourthSection from "../App_Chunks/Components/FourthSection";
import type { ConfettiRef } from "@/components/ui/confetti";
import Confetti from "@/components/ui/confetti";
import { useRef } from "react";
const Page = () => {
  const confettiRef = useRef<ConfettiRef>(null);
  useEffect(() => {
    if (confettiRef.current) {
      confettiRef.current?.fire({ particleCount: 100 });
    }
  }, [])
  return (
    <div className="">
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
      />
      <div className=" py-14  text-slate-950 border border-lime-100 overflow-hidden font-Satoshi font-semibold flex flex-col justify-center items-center relative">
        <div className="absolute w-full h-full -z-10">
          <img
            src={"/media/gggrain.svg"}
            className="w-full h-full opacity-[.6] object-cover"
          />
        </div>
        <div className="flex justify-center ">
          <Heading className="!text-center w-full lg:w-2/3">
            Thank You for reaching out to{" "}
            <span className="text-indigo-500">Biz</span>
            <span className="text-lime-500">growth</span> Business Consultancy.
          </Heading>
        </div>
      </div>
      <div className="mt-14">
        <FourthSection />
      </div>
    </div>
  );
};

export default Page;
