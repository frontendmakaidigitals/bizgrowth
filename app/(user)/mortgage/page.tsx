"use client";
import { motion } from "motion/react";
import React from "react";
import Heading from "../App_Chunks/Components/Heading";
import {
  Building2,
  Landmark,
  Home,
  RefreshCw,
  Wallet,
  CheckCircle2,
} from "lucide-react";
import Banner from "../App_Chunks/Components/Banner";
const page = () => {
  const mortgageServices = [
    {
      title: "Off-Plan Finance",
      description:
        "Financing solutions for properties under construction, with payments structured across the development timeline.",
      icon: Building2,
    },
    {
      title: "Primary Sales Finance",
      description:
        "Mortgage support for buying directly from developers, including final payment and handover financing.",
      icon: Landmark,
    },
    {
      title: "Secondary Sales Finance",
      description:
        "Financing for buying or selling properties between individual owners after the initial developer sale.",
      icon: Home,
    },
    {
      title: "Buyout / Mortgage Transfer",
      description:
        "Move your existing mortgage to another bank to secure better interest rates and improved terms.",
      icon: RefreshCw,
    },
    {
      title: "Equity Release",
      description:
        "Unlock the built-up value of your property and convert it into accessible cash for investment or personal use.",
      icon: Wallet,
    },
  ];

  const benefits = [
    "Fast pre-approval assistance",
    "Bank comparison and eligibility check",
    "Support for residents and non-residents",
    "Salary-based & self-employed mortgage guidance",
    "Complete documentation & bank coordination",
    "Transparent, reliable, and end-to-end service",
  ];
  return (
    <div>
      <section className="pt-14">
        <div className="container grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Heading className="!text-start ">
              Home Buying Made{" "}
              <span className="text-lime-500 font-SplineSans">Easy</span>
            </Heading>

            <p className="mt-3">
              At Biz Growth Consultancy, we make property financing simple,
              transparent, and stress‑free. Our mortgage support service helps
              clients secure the right financing with faster processing, clear
              guidance, and end‑to‑end assistance.  
            </p>
          </div>
          <div
            className="w-full h-[320px] overflow-hidden shadow-2xl"
            style={{
              clipPath:
                "polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)",
            }}
          >
            <img
              src="/mortgage.jpeg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="mt-32 container">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center">
            Our <span className="text-lime-500">Mortgage & Property</span>{" "}
            Financing Services
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {mortgageServices.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={index}
              initial={{ y: 200, rotate: "10deg" }}
              whileInView={{ y: 0, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.08, 0.82, 0.17, 1],
                delay: index * 0.02,
              }}
              viewport={{ once: true }}
              className="w-full rounded-lg flex flex-col justify-between items-start bg-[#C2DAC2] p-5"
            >
              <div className="">
                <div className="size-12 text-3xl flex justify-center items-center bg-[#A4C9A4] rounded-full">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-SplineSans mt-6 text-xl font-[600]">
                  {title}
                </p>
                <p className="font-Satoshi text-lg mt-1">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="my-28">
        <div className="container">
          <div className="">
            <h2 className="text-3xl lg:text-4xl font-semibold  text-center max-w-3xl mx-auto mb-10">
              Why Choose{" "}
              <span className="text-indigo-600">
                <span className="text-lime-500">Biz</span> Growth{" "}
              </span>{" "}
              Consultancy for Mortgage Support
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex bg-white rounded-xl p-4 items-start gap-3 text-lg text-gray-700"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Banner
        title={"Start Your Mortgage Application with Biz Growth Consultancy"}
        desc={
          "Whether you're buying your first home or expanding your investment portfolio, Biz Growth ensures a smooth and guided mortgage journey from start to finish."
        }
      />
    </div>
  );
};

export default page;
