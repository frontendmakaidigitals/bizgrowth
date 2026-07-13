"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Heading from "./Heading";
const BusinessSteps = () => {

  const data = [
    {
      title: "Step 1",
      content: (
        <div>
          <p className="text-neutral-800  text-xs md:text-lg font-Satoshi font-semibold  mb-2">
            Consult Business Setup Expert Consultants at Biz Growth
          </p>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/8465067/pexels-photo-8465067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div>
          <p className="text-neutral-800  text-xs md:text-lg font-Satoshi font-semibold  mb-2">
            Choose Jurisdiction and Type of Business
          </p>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/277593/pexels-photo-277593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <p className="text-neutral-800  text-xs md:text-lg font-Satoshi font-semibold  mb-2">
            Choose Business Name
          </p>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/4393610/pexels-photo-4393610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 4",
      content: (
        <div>
          <p className="text-neutral-800  text-xs md:text-lg font-Satoshi font-semibold  mb-2">
            Submit Documents for Approval
          </p>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 5",
      content: (
        <div>
          <p className="text-neutral-800  text-xs md:text-lg font-Satoshi font-semibold  mb-2">
            Trade License Setup
          </p>
          <div className="w-full">
            <img
              src="https://img.freepik.com/free-photo/guarantee-approved-authorized-certified-concept_53876-122452.jpg"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 6",
      content: (
        <div>
          <p className="text-neutral-800  text-xs md:text-lg font-Satoshi font-semibold  mb-2">
            Open Corporate Bank Account
          </p>
          <div className="w-full">
            <img
              src="https://www.enkel.ca/wp-content/uploads/2018/12/separate-business-and-personal-bank-accounts.png"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 7",
      content: (
        <div>
          <p className="text-neutral-800  text-xs md:text-lg font-Satoshi font-semibold  mb-2">
            Set Up Your Office with Biz Growth
          </p>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mb-20">
      <Heading>Business Setup Process</Heading>
      <Timeline data={data} />
    </div>
  );
};

export default BusinessSteps;
