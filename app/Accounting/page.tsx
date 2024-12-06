"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import Button from "@/app/App_Chunks/Components/Button";
import { useSearchParams } from "next/navigation";
import { MdLabelImportant } from "react-icons/md";
import Banner from "../App_Chunks/Components/Banner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import data from "../App_Chunks/Components/Accounting";
import { Heading } from "lucide-react";

const Page = () => {
  return (
    <Suspense>
      <MainPage />
    </Suspense>
  );
};

const MainPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("name");
  const [processData, setProcessData] = useState<(typeof data)[0] | null>(null);
  useEffect(() => {
    const matchingItem = data.find(
      (item) => item.name.toLowerCase() === query?.toLowerCase()
    );
    setProcessData(matchingItem || null); // Set the found item or null if no match
  }, [data, query]);
  const [currentStep, setCurrentStep] = useState(0);
  const stepsRefs = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stepOffsets = stepsRefs.current.map((ref) => ref.offsetTop);
      for (let i = 0; i < stepOffsets.length; i++) {
        if (scrollPosition >= stepOffsets[i] - 200) {
          setCurrentStep(i);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full">
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>{processData?.heroTitle}</div>

          <p className="text-lg font-Satoshi mt-4">
            {processData?.heroDescription}
          </p>
          <Button className="mt-5">Get Expert Consultation</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={processData?.heroImg} />
        </div>
      </div>

      {processData?.corpTaxTitle ? (
        <div className="w-full container my-14 grid grid-cols-1">
          <div>
            {processData?.corpTaxTitle}
            <div className="text-lg font-Satoshi">
              {processData?.corpTaxDesc}
            </div>
          </div>
        </div>
      ) : null}

      <div className="w-full container my-24">
        <div>{processData?.secondTitle}</div>
        {processData?.AccBookPoints ? (
          <div className="grid grid-cols-1 my-16 lg:grid-cols-3 gap-5 container">
            {processData?.AccBookPoints.map((elem: any, index: number) => (
              <div key={index} className="w-full rounded-lg bg-[#C2DAC2] p-6">
                <div className="text-3xl ">{elem?.title}</div>
                <ul className="mt-5">
                  {elem.points.map((item: any, id: number) => (
                    <li key={id}>
                      <div className="flex items-start gap-2">
                        <div>
                          <div className="size-2 bg-lime-800 mt-2 rounded-full" />
                        </div>
                        <p className="font-Satoshi">
                          <span className="font-bold font-SplineSans">
                            {item.title}{" "}
                          </span>
                          {":"} {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
        <div className="w-full ">
          <p className="w-full text-center font-Satoshi text-lg">
            {processData?.secondSubDescription}
          </p>
        </div>

        <motion.div
          transition={{ staggerChildren: 0.2 }}
          className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {processData?.secondPoints &&
            processData?.secondPoints.map((elem, index) => (
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
                className="w-full rounded-lg bg-[#C2DAC2] p-5"
              >
                <div className="size-12 text-3xl flex justify-center items-center bg-[#A4C9A4] rounded-full">
                  {elem?.icon}
                </div>

                <div className=" mt-6">
                  <p className="font-SplineSans text-xl font-[600]">
                    {elem.title}
                  </p>
                  <p className="font-Satoshi text-lg mt-1">{elem.desc}</p>
                  <Button className="mt-3">Learn More</Button>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {processData?.corpTitle ? (
        <div className="w-full container my-24">
          <div>{processData?.corpTitle}</div>

          <div className="mt-10">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-[#9ccc65]">
                <tr>
                  {Array.isArray(processData?.corpTableHead) &&
                    processData?.corpTableHead.map(
                      (elem: string, index: number) => (
                        <th
                          key={index}
                          className="border border-gray-300  py-2"
                        >
                          <div className=" flex font-Satoshi text-lg text-[#152b0c] justify-start px-5 w-full">
                            {elem}
                          </div>
                        </th>
                      )
                    )}
                </tr>
              </thead>
              <tbody>
                {processData?.corpTableBody &&
                  processData?.corpTableBody.map((item: any, index: number) => (
                    <tr key={index} className="font-Satoshi">
                      <td className="border text-lg border-gray-300  py-2">
                        <div className="w-full flex justify-start font-semibold px-5">
                          {item.title}
                        </div>
                      </td>

                      {query?.toLowerCase() !== "auditing" &&
                      "desc1" in item ? (
                        <td className="border border-gray-300  ">
                          <ul>
                            <li className="border flex items-center gap-2 py-2 px-5">
                              <MdLabelImportant className="text-lime-800" />
                              {item.desc1}
                            </li>
                          </ul>
                        </td>
                      ) : null}

                      {query?.toLowerCase() !== "auditing" &&
                      "desc2" in item ? (
                        <td className="border border-gray-300  ">
                          <ul>
                            <li className="border flex items-center gap-2 py-2 px-5">
                              <MdLabelImportant className="text-lime-800" />
                              {item.desc2}
                            </li>
                          </ul>
                        </td>
                      ) : null}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3">
            <p className="font-Satoshi text-sm">{processData?.tableFooter}</p>
          </div>
        </div>
      ) : null}

      <div className="w-full container my-24">
        <div>{processData?.thirdTitle}</div>
        <p className="text-center font-Satoshi mt-3">
          {processData?.thirdSubDesc}
        </p>

        <motion.div
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-5"
        >
          {processData?.thirdPoints.map((elem, index) => (
            <motion.div
              key={index}
              initial={{ y: 200 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="w-full relative border border-gray-300 gap-2 flex overflow-hidden justify-center p-5 items-start bg-gradient-to-br from-[#DAFFEE] to-[#E2FCFF] rounded-xl"
            >
              <div className="w-full h-full absolute top-0 left-0">
                <img
                  src={"/media/mainland/noiseEffect.svg"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-20">
                <div className="size-7 rounded-full">
                  <img src={"/media//mainland/checked.png"} />
                </div>
              </div>
              <div className="relative z-20">{elem}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-full container my-24">
        <div>{processData?.fourthTitle}</div>
        <div className="mt-10 grid grid-cols-1 gap-5">
          {processData?.fourthPoints.map((item: any, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  stepsRefs.current[index] = el;
                }
              }}
              className={`w-full p-5 border rounded-2xl ${
                index <= currentStep ? "bg-[#dcedc8]" : "bg-slate-200"
              }`}
            >
              <p className="text-xl font-SplineSans">Step {index + 1}</p>
              <p className="font-SplineSans font-[500] text-xl">{item.title}</p>
              <p className="font-Satoshi text-lg">{item.desc}</p>
              {item.points && item.isPoints ? (
                <ul className="font-Satoshi mt-3 py-3 border-t w-full border-lime-700">
                  {item.points.map((elem: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="bg-lime-800 rounded-full size-2" />
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full container my-24">
        <div>{processData?.sixthTitle}</div>

        <div className="mt-10">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-[#9ccc65]">
              <tr>
                {Array.isArray(processData?.sixthTableHead) &&
                  processData?.sixthTableHead.map(
                    (elem: string, index: number) => (
                      <th key={index} className="border border-gray-300  py-2">
                        <div className=" flex font-Satoshi text-lg text-[#152b0c] justify-start px-5 w-full">
                          {elem}
                        </div>
                      </th>
                    )
                  )}
              </tr>
            </thead>
            <tbody>
              {processData?.sixthTableBody &&
                processData?.sixthTableBody.map((item: any, index: number) => (
                  <tr key={index} className="font-Satoshi">
                    <td className="border text-lg border-gray-300  py-2">
                      <div className="w-full flex justify-start font-semibold px-5">
                        {item.title}
                      </div>
                    </td>

                    {query?.toLowerCase() !== "auditing" && "doc1" in item ? (
                      <td className="border border-gray-300  ">
                        <ul>
                          <li className="border flex items-center gap-2 py-2 px-5">
                            <MdLabelImportant className="text-lime-800" />
                            {item.doc1}
                          </li>
                        </ul>
                      </td>
                    ) : null}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3">
          <p className="font-Satoshi text-sm">{processData?.tableFooter}</p>
        </div>
      </div>

      {processData?.seventhTitle ? (
        <div className="w-full container my-24">
          <div>{processData?.seventhTitle}</div>
          <div className="w-full mt-14">
            <Carousel className="w-full ">
              <CarouselContent>
                {processData?.seventhPoints?.map((item: any, index: number) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <div className="w-full border bg-[#dff2d8] border-lime-700 p-5 rounded-xl h-full">
                      <p className="text-xl font-semibold font-SplineSans">
                        {item.title}
                      </p>
                      <p className="font-Satoshi mt-1">{item.desc}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      ) : null}

      <Banner query={query} />
    </div>
  );
};

export default Page;
