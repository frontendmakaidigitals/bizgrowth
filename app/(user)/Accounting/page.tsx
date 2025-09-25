"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import Button from "../App_Chunks/Components/Button";
import { useSearchParams } from "next/navigation";
import { MdLabelImportant } from "react-icons/md";
import Banner from "../App_Chunks/Components/Banner";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import data from "../App_Chunks/Components/Accounting";

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

    // Dynamic title and meta description based on query
    let metaInfo = {
      title: "Business Setup in UAE - Mainland",
      description:
        "Learn about the business setup process in the UAE Mainland. Find out the best solutions for establishing your company.",
    };

    switch (query) {
      case "VAT Consultancy":
        metaInfo = {
          title: "VAT Consultancy Service in Dubai, UAE",
          description:
            "We specialize in providing expert VAT consulting services for businesses of all sizes. If your business is ready to optimize your VAT processes or need professional advice, contact us today for a free consultation.",
        };
        break;
      case "Corporate Tax":
        metaInfo = {
          title: "Tax Consultants in Dubai, UAE",
          description:
            "Whether you’re a startup or an established corporation, Biz Growth is your trusted partner for navigating the complexities of corporate tax. Contact us today to schedule a consultation and learn more about how our corporate tax services can benefit your business.",
        };
        break;
      case "Accounting and Bookkeeping":
        metaInfo = {
          title: "Expert Bookkeeping and Accounting Service in Dubai",
          description:
            "Whether you’re a startup or an established corporation, Biz Growth is your trusted partner for navigating the complexities of bookkeeping and accounting. Contact us today to schedule a consultation and learn more about how our services can benefit your business.",
        };
        break;
      case "Auditing":
        metaInfo = {
          title: "Professional Auditing Service in Dubai, UAE",
          description:
            "We specialize in providing professional auditing services designed to simplify your business operations. We offer solutions to help you stay organized, save time, and make informed financial decisions.",
        };
        break;
      default:
        metaInfo = {
          title: "Financial Services in UAE | Biz Growth",
          description:
            "Explore a range of expert financial services in Dubai, from VAT consultancy to corporate tax, accounting, and auditing services. Let Biz Growth guide your business toward financial success with our expert consulting and tailored solutions.",
        };
        break;
    }

    // Dynamically update the document metadata based on the selected location
    if (metaInfo) {
      // Set the document title
      document.title = metaInfo.title;

      // Set the meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", metaInfo.description);
      } else {
        const newMetaDescription = document.createElement("meta");
        newMetaDescription.setAttribute("name", "description");
        newMetaDescription.setAttribute("content", metaInfo.description);
        document.head.appendChild(newMetaDescription);
      }

      // Optionally, you can add Open Graph meta tags as well:
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", metaInfo.title);
      } else {
        const newOgTitle = document.createElement("meta");
        newOgTitle.setAttribute("property", "og:title");
        newOgTitle.setAttribute("content", metaInfo.title);
        document.head.appendChild(newOgTitle);
      }

      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute("content", metaInfo.description);
      } else {
        const newOgDescription = document.createElement("meta");
        newOgDescription.setAttribute("property", "og:description");
        newOgDescription.setAttribute("content", metaInfo.description);
        document.head.appendChild(newOgDescription);
      }
    }
  }, [query, data]);
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
          <Link href={"/contact"} >
            <Button className="mt-5">Get Expert Consultation</Button>
          </Link>
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
                className="w-full rounded-lg flex flex-col justify-between items-start bg-[#C2DAC2] p-5"
              >
                <div className="">
                  <div className="size-12 text-3xl flex justify-center items-center bg-[#A4C9A4] rounded-full">
                    {elem?.icon}
                  </div>
                  <p className="font-SplineSans mt-6 text-xl font-[600]">
                    {elem.title}
                  </p>
                  <p className="font-Satoshi text-lg mt-1">{elem.desc}</p>
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
      {processData?.sixthTitle ? (
        <div className="w-full container my-24">
          <div>{processData?.sixthTitle}</div>

          <div className="mt-10">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-[#9ccc65]">
                <tr>
                  {Array.isArray(processData?.sixthTableHead) &&
                    processData?.sixthTableHead.map(
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
                {processData?.sixthTableBody &&
                  processData?.sixthTableBody.map(
                    (item: any, index: number) => (
                      <tr key={index} className="font-Satoshi">
                        <td className="border text-lg border-gray-300  py-2">
                          <div className="w-full flex justify-start font-semibold px-5">
                            {item.title}
                          </div>
                        </td>

                        {query?.toLowerCase() !== "auditing" &&
                        "doc1" in item ? (
                          <td className="border border-gray-300  ">
                            <ul>
                              <li className="border flex items-start gap-2 py-2 px-5">
                                <div>
                                  <MdLabelImportant className="text-lime-800 mt-1" />
                                </div>
                                {item.doc1}
                              </li>
                            </ul>
                          </td>
                        ) : null}
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
          <div className="mt-3">
            <p className="font-Satoshi text-sm">{processData?.tableFooter}</p>
          </div>
        </div>
      ) : null}

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

      <Banner title={processData?.bannerTitle} desc={processData?.bannerDesc} />
    </div>
  );
};

export default Page;
