"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import Button from "@/app/App_Chunks/Components/Button";
import { useSearchParams } from "next/navigation";
import { MdLabelImportant } from "react-icons/md";
import Banner from "../App_Chunks/Components/Banner";
import data from "../App_Chunks/Components/offshore";

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
     case "Dubai Offshore":
       metaInfo = {
         title: "Dubai Offshore Company Formation | UAE",
         description:
           "Form your Dubai Offshore company with ease. Enjoy 100% foreign ownership, tax benefits, and access to global markets. Start your Dubai Offshore company setup today!",
       };
       break;
     case "Jafza Offshore":
       metaInfo = {
         title: "Offshore Company Formation in JAFZA | UAE",
         description:
           "Set up your Offshore company in JAFZA, Dubai's leading free zone. Benefit from 100% ownership, tax exemptions, and access to international markets. Start your JAFZA Offshore company today!",
       };
       break;
     case "Rak ICC Offshore":
       metaInfo = {
         title: "RAK ICC Offshore Company Formation in UAE",
         description:
           "Form your Offshore company in RAK ICC, Ras Al Khaimah's premier offshore jurisdiction. Enjoy 100% ownership, tax benefits, and privacy protection. Start your RAK ICC Offshore company today!",
       };
       break;
     case "Ajman Offshore":
       metaInfo = {
         title: "Ajman Offshore Company Formation in UAE",
         description:
           "Set up your Offshore company in Ajman, a cost-effective and flexible jurisdiction. Enjoy 100% ownership, tax advantages, and privacy protection. Start your Ajman Offshore company today!",
       };
       break;
     default:
       metaInfo = {
         title: "Offshore Company Formation in UAE",
         description:
           "Explore the best offshore company formation options in the UAE. Enjoy 100% ownership, tax benefits, and access to global markets. Start your offshore company setup today!",
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
          <Button className="mt-5">Get Expert Consultation</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={processData?.heroImg} />
        </div>
      </div>

      <div className="w-full container my-24">
        <div>{processData?.secondTitle}</div>
        <div className="w-full ">
          <p className="w-full text-center font-Satoshi text-lg">
            {processData?.secondSubDescription}
          </p>
        </div>

        <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {processData?.secondPoints.map((elem, index) => (
            <div
              key={index}
              className="w-full flex flex-col justify-between items-start rounded-lg bg-[#C2DAC2] p-5"
            >
              <div>
                <div className="size-12 text-3xl flex justify-center items-center bg-[#A4C9A4] rounded-full">
                  {elem?.icon}
                </div>
                <p className="font-SplineSans mt-6 text-xl font-[600]">
                  {elem.title}
                </p>
                <p className="font-Satoshi text-lg mt-1">{elem.desc}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      <div className="w-full container my-24">
        <div>{processData?.thirdTitle}</div>
        <p className="text-center font-Satoshi mt-3">
          {processData?.thirdSubDesc}
        </p>

        {processData?.thirdPoints.length ? (
          <div className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-5">
            {processData?.thirdPoints.map((elem, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="w-full container my-24">
        <div>{processData?.fourthTitle}</div>
        <div className="mt-10 grid grid-cols-1 gap-5">
          {processData?.fourthPoints.map((item, index) => (
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
              {processData?.sixthTableBody.map((item: any, index: number) => (
                <tr key={index} className="font-Satoshi">
                  <td className="border text-lg border-gray-300  py-2">
                    <div className="w-full flex justify-start font-semibold px-5">
                      {item.title}
                    </div>
                  </td>

                  {query?.toLowerCase() !== "sharjah mainland" &&
                  "docs" in item &&
                  Array.isArray(item?.docs) ? (
                    <td className="border border-gray-300">
                      <ul>
                        {item.docs.map((doc: string, id: number) => (
                          <li
                            key={id}
                            className="border flex items-start gap-2 py-2 px-5"
                          >
                            <div>
                              <MdLabelImportant className="text-lime-800 mt-1" />
                            </div>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ) : null}

                  {query && "doc1" in item ? (
                    <td className="border border-gray-300  ">
                      <ul>
                        <li className="border flex items-start gap-2 py-2 px-5">
                          <div>
                            <MdLabelImportant className="text-lime-800 mt-1" />
                          </div>
                          {item?.doc1}
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

      <Banner title={processData?.bannerTitle} desc={processData?.bannerDesc} />
    </div>
  );
};

export default Page;
