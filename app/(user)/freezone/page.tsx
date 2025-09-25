"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import Button from "../App_Chunks/Components/Button";
import { useSearchParams } from "next/navigation";
import { MdLabelImportant } from "react-icons/md";
import Banner from "../App_Chunks/Components/Banner";
import data from "../App_Chunks/Components/freezone";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
  const router = useRouter();
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
       case "IFZA":
         metaInfo = {
           title: "IFZA Business Setup | Free Zone Setup in Dubai",
           description:
             "Set up your business with IFZA, the premier free zone in the UAE. Enjoy cost-effective company formation, efficient processes, and world-class facilities. Start your IFZA business today.",
         };
         break;
       case "DMCC":
         metaInfo = {
           title: "DMCC Free Zone Business Setup",
           description:
             "Start your business in DMCC, the leading free zone in Dubai. Benefit from flexible licensing options, and a prime location. Simplify your DMCC business setup today with Biz Growth!",
         };
         break;
       case "ADGM":
         metaInfo = {
           title: "Start your Free Zone Company in ADGM",
           description:
             "Set up your business in ADGM, Abu Dhabi's leading financial free zone. Enjoy tax benefits, and global connectivity. Simplify your ADGM business setup today!",
         };
         break;
       case "DIFC":
         metaInfo = {
           title: "DIFC Company Setup | Free Zone License in Dubai",
           description:
             "Establish your business in DIFC, Dubai’s leading financial hub. It provides your business the platform to expand its operations and choose from a variety of company structures.",
         };
         break;
       case "MEYDAN":
         metaInfo = {
           title: "Setup Your Free Zone Company in Meydan",
           description:
             "Set up your business in Meydan Free Zone, Dubai's business hub for entrepreneurs. Enjoy flexible licensing, 100% ownership, and a prime business location. Start your Meydan Free Zone journey today!",
         };
         break;
       case "SPC":
         metaInfo = {
           title: "SPC Free Zone | Business Setup in Sharjah",
           description:
             "Start your business in the SPC Free Zone, Sharjah's hub for entrepreneurs. Enjoy 100% ownership, cost-effective packages, and a quick setup process. Simplify your SPC Free Zone business setup today!",
         };
         break;
       case "JAFZA":
         metaInfo = {
           title: "JAFZA Free Zone | Business Setup in Dubai",
           description:
             "Jebel Ali Free Zone (JAFZA) is one of the world’s leading business hubs located in the prime locations of Dubai. Offering businesses easy access to international markets, excellent infrastructure, and 100% Ownership.",
         };
         break;
       case "RAKEZ":
         metaInfo = {
           title: "Company Setup in UAE | RAKEZ Free Zone",
           description:
             "Set up your business in RAKEZ, Ras Al Khaimah's dynamic free zone. Enjoy cost-effective solutions, 100% ownership, and custom business packages. Start your RAKEZ business journey today!",
         };
         break;
       case "Ajman":
         metaInfo = {
           title: "Ajman Free Zone Company Formation in UAE",
           description:
             "Start your business in Ajman Free Zone, a cost-effective hub for entrepreneurs. Enjoy 100% ownership, flexible packages, and UAE access. Simplify your Ajman Free Zone business setup today!",
         };
         break;
       case "SRTI":
         metaInfo = {
           title: "SRTI Free Zone Company Formation | Get Expert Guidance",
           description:
             "Set up your business in SRTI Free Zone, a dynamic hub for innovation and growth. Enjoy 100% ownership, flexible licensing options, and a quick setup process. Start your SRTI Free Zone business today!",
         };
         break;
       case "DAFZA":
         metaInfo = {
           title: "DAFZA Business Formation | Free Zone in UAE",
           description:
             "Establish your business in DAFZA, Dubai's free zone for global trade and innovation. Enjoy tax benefits, 100% ownership, and a prime location. Simplify your DAFZA business setup today!",
         };
         break;
       default:
         metaInfo = {
           title: "Business Setup in UAE Free Zones",
           description:
             "Explore the best free zone options for setting up your business in the UAE. Find out the best solutions for establishing your company in leading UAE free zones.",
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setCurrentStep(0);
    };
  }, []);

  useEffect(() => {
    router.refresh();
  }, [query]);
  return (
    <div className="w-full">
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>{processData?.heroTitle}</div>

          <p className="text-lg text-center lg:text-start font-Satoshi mt-4">
            {processData?.heroDescription}
          </p>
          <Link href={"/contact"}>
            <Button  className="mt-5">Get Expert Consultation</Button>
          </Link>
          
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
            <div key={index} className="w-full rounded-lg bg-[#C2DAC2] p-5">
              <div className="size-12 text-3xl flex justify-center items-center bg-[#A4C9A4] rounded-full">
                {elem?.icon}
              </div>

              <div className=" mt-6">
                <p className="font-SplineSans text-xl font-[600]">
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
              <p className="font-SplineSans font-[500] text-xl mt-3">
                {item.title}
              </p>
              <p className="font-Satoshi text-lg">{item.desc}</p>
              {item.isPoints &&
                (item as { points: string[] }).points?.map((point, id) => (
                  <div className="flex items-start gap-2" key={id}>
                    <div> <div className="size-2 mt-2 bg-lime-700 rounded-full" /></div>
                    {point}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full container my-24">
        <div>{processData?.sixthTitle}</div>

        <div className="mt-10 overflow-auto">
          <table className="w-[600px] lg:w-full border-collapse border border-gray-300">
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
              {processData?.sixthTableBody.map((item, index) => (
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
                        {item.docs.map((doc, id) => (
                          <li
                            key={id}
                            className="border flex items-center gap-2 py-2 px-5"
                          >
                            <div>
                              <MdLabelImportant className="text-lime-800" />
                            </div>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ) : null}

                  {query?.toLowerCase() && "doc1" in item ? (
                    <td className="border border-gray-300  ">
                      <ul>
                        <li className="border flex items-center gap-2 py-2 px-5">
                          <div>
                            <MdLabelImportant className="text-lime-800" />
                          </div>
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

      <Banner title={processData?.bannerTitle} desc={processData?.bannerDesc} />
    </div>
  );
};

export default Page;
