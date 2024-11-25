"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";

const BusinessSteps = () => {
  const steps = [
    "Consult Business Setup Expert Consultants at BIZ Growth",
    "Choose Jurisdiction and Type of Business",
    "Choose Business Name",
    "Submit Documents for Approval",
    "Trade License Setup",
    "Open Corporate Bank Account",
    "Set Up Your Office with BIZ Growth",
  ];

  const data = [
    {
      title: "Step 1",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Consult Business Setup Expert Consultants at BIZ Growth
          </p>
          <div className="w-full">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Choose Jurisdiction and Type of Business
          </p>
          <div className="w-full">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Choose Business Name
          </p>
          <div className="w-full">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 4",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Submit Documents for Approval
          </p>
          <div className="w-full">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 5",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Trade License Setup
          </p>
          <div className="w-full">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 6",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Open Corporate Bank Account
          </p>
          <div className="w-full">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 7",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Set Up Your Office with BIZ Growth
          </p>
          <div className="w-full">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              className="rounded-lg object-cover h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  // State to track the active step
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="container mb-20">
      <h2 className="text-2xl font-bold mb-5">Business Setup Process</h2>
      <Timeline data={data} />
    </div>
  );
};

export default BusinessSteps;
