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
import data from "../App_Chunks/Components/eliteServices";

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

  useEffect(() => {
    document.body.style.backgroundColor = "#fffbeb";
    return () => {
      document.body.style.backgroundColor = "#eff8ed";
    };
  }, []);

  return (
    <div className="w-full">
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>{processData?.heroTitle}</div>

          <p className="text-lg font-Satoshi mt-4">
            {processData?.heroDescription}
          </p>
          <Button className="mt-5 text-amber-950 bg-gradient-to-tr from-amber-300 to-amber-400">
            Get Expert Consultation
          </Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={processData?.heroImg} />
        </div>
      </div>

      {processData?.goldenVisaTitle ? (
        <div className="w-full container my-24">
          <div>{processData?.goldenVisaTitle}</div>{" "}
          <div>
            <p className="text-center w-full mt-5 text-lg font-Satoshi">
              {processData.goldenVisaDesc}
            </p>
          </div>
        </div>
      ) : null}

      <div className="w-full container my-24">
        <div>{processData?.secondTitle}</div>
        <div className="w-full ">
          <p className="w-full text-center font-Satoshi text-lg">
            {processData?.secondSubDescription}
          </p>
        </div>

        <motion.div
          transition={{ staggerChildren: 0.2 }}
          className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {processData?.secondPoints.map((elem, index) => (
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
              className="w-full rounded-lg flex flex-col justify-between items-start bg-amber-100 p-5"
            >
              <div className="">
                <div className="size-12 text-3xl flex justify-center items-center bg-amber-200 rounded-full">
                  {elem?.icon}
                </div>
                <p className="font-SplineSans mt-6 text-xl font-[600]">
                  {elem.title}
                </p>
                <p className="font-Satoshi text-lg mt-1">{elem.desc}</p>
              </div>
              <Button className="mt-5 text-amber-950 bg-gradient-to-tr from-amber-300 to-amber-400">
                Learn More
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {processData?.goldenVisaEligibility ? (
        <div className="w-full container my-24">
          <div className="">{processData.goldenVisaEligibility}</div>
          <p className="w-full text-center font-Satoshi">
            {processData?.goldenVisaEligibilityDesc}
          </p>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processData.goldenVisaEligibilityPoints.map((elem, index) => (
              <motion.div
                key={index}
                className="w-full gap-2 flex items-start relative overflow-hidden bg-amber-100 p-5 rounded-xl"
              >
                <div className="w-full h-full absolute top-0 left-0">
                  <img
                    src={"/media/mainland/noiseEffect.svg"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="size-6 mt-[1px] rounded-full">
                    <img src={"/media//mainland/checked.png"} />
                  </div>
                </div>

                <div>
                  <h1 className="text-xl font-[600] font-SplineSans">
                    {elem.title}
                  </h1>
                  <div>{elem.desc}</div>
                </div>
              </motion.div>
            ))}
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
          {processData?.fourthPoints
            ? processData?.fourthPoints.map((item: any, index) => (
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
                  <p className="font-SplineSans font-[500] mt-3 text-xl">
                    {item.title}
                  </p>
                  <p className="font-Satoshi text-lg">{item.desc}</p>
                  {item.isPoints && item.points ? (
                    <ul className="font-Satoshi mt-3 py-3 border-t w-full border-lime-700">
                      {item.points.map((elem: any, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="bg-lime-800 rounded-full size-2" />
                          {elem}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="w-full container my-24">
        <div>{processData?.sixthTitle}</div>

        <div className="mt-10">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-amber-100">
              <tr>
                {processData?.sixthTableHead.map((elem, index) => (
                  <th key={index} className="border border-gray-300  py-2">
                    <div className=" flex font-Satoshi text-lg text-[#152b0c] justify-start px-5 w-full">
                      {elem}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {processData?.sixthTableBody.map((item, index) => (
                <tr key={index} className="font-Satoshi">
                  <td className="border text-lg border-gray-300  py-2">
                    <div className="w-full flex justify-start font-semibold px-5">
                      {item.title}
                    </div>
                  </td>

                  {query && "docs" in item && Array.isArray(item?.docs) ? (
                    <td className="border border-gray-300">
                      <ul>
                        {item.docs.map((doc, id) => (
                          <li
                            key={id}
                            className="border flex items-center gap-2 py-2 px-5"
                          >
                            <div>
                              <MdLabelImportant className="text-amber-500" />
                            </div>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ) : null}
                  {item.duration ? (
                    <td className="border text-lg border-gray-300  py-2">
                      <div className="w-full flex justify-start font-medium px-5">
                        {item.duration}
                      </div>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {processData?.goldenUpdatesTitle ? (
        <div className="w-full container my-24">
          <p className="text-xl font-SplineSans font-[600] text-amber-950">
            {processData?.goldenUpdatesTitle}
          </p>
          <div className="">
            {processData?.goldenVisaPoints.map((item, index) => (
              <div key={index} className="my-5">
                <p className="font-Satoshi  text-lg font-[600]">
                  {index + 1}
                  {".)"} {item.title}
                </p>
                {item.pointDesc ? (
                  <div>
                    <p className="font-Satoshi font-medium">{item.pointDesc}</p>
                    {item.points.map((it, id) => (
                      <div key={id} className="flex ml-3 items-center gap-2">
                        <div className="size-2 rounded-full bg-slate-900">
                          <div />
                        </div>
                        <p className="font-Satoshi">
                          <span className="font-semibold text-amber-600 font-SplineSans">
                            {it.title} {": "}
                          </span>{" "}
                          {it.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-Satoshi text-md">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <Banner title={processData?.bannerTitle} desc={processData?.bannerDesc} />
    </div>
  );
};

export default Page;
