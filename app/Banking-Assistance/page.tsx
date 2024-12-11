"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import Button from "@/app/App_Chunks/Components/Button";
import { useSearchParams } from "next/navigation";
import { MdLabelImportant } from "react-icons/md";
import Banner from "../App_Chunks/Components/Banner";
import data from "../App_Chunks/Components/banking";
import { motion } from "framer-motion";
import Heading from "../App_Chunks/Components/Heading";
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
  switch (query) {
    case "Trade Financial Services":
      return <TradeFinancial />;
    case "Crypto & VARA Registration":
      return <CryptoVara />;
    case "Commercial Financial Services":
      return <CommercialFinancing />;
    default:
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
                  <Button className="mt-3">Learn More</Button>
                </motion.div>
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
                  <p className="font-SplineSans font-[500] text-xl">
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
                  {processData?.sixthTableBody.map(
                    (item: any, index: number) => (
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
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-3">
              <p className="font-Satoshi text-sm">{processData?.tableFooter}</p>
            </div>
          </div>

          <Banner
            title={processData?.bannerTitle}
            desc={processData?.bannerDesc}
          />
        </div>
      );
  }
};

const CryptoVara = () => {
  const regulatoryAuthorities = [
    {
      title: "Virtual Assets Regulatory Authority (VARA)",
      desc: "Based in Dubai, VARA oversees all virtual asset-related activities within the emirate and its free zones (excluding the DIFC).",
    },
    {
      title: "Abu Dhabi Global Market (ADGM)",
      desc: "A leading financial center with a robust framework for digital assets under the Financial Services Regulatory Authority (FSRA).",
    },
    {
      title: "Dubai International Financial Centre (DIFC)",
      desc: "Governed by the Dubai Financial Services Authority (DFSA), DIFC has introduced a regulatory framework for investment tokens.",
    },
    {
      title: "Sharjah Research, Technology, and Innovation Park (SRTIP)",
      desc: "Emerging as a hub for blockchain and crypto innovation, SRTIP offers licensing opportunities for startups and R&D-focused projects.",
    },
  ];
  const cryptoLicensing = [
    {
      title: "Crypto Exchange License",
      desc: "This license is required for businesses operating cryptocurrency trading platforms. It covers activities such as crypto-to-crypto and crypto-to-fiat trading.",
    },
    {
      title: "Crypto Wallet Service License",
      desc: "This license is for providers offering custodial and wallet management services for virtual assets.",
    },
    {
      title: "Token Issuance and ICO License",
      desc: "This is required for businesses issuing cryptocurrencies, tokens, or conducting Initial Coin Offerings (ICOs).",
    },
    {
      title: "Mining License",
      desc: "This license permits businesses to engage in cryptocurrency mining operations.",
    },
    {
      title: "Payment Service Provider License",
      desc: "This is for businesses offering payment gateways or solutions involving cryptocurrencies.",
    },
    {
      title: "Consultancy License",
      desc: "This is for companies providing advisory services in blockchain technology and crypto investments.",
    },
  ];

  const complianceSteps = [
    {
      title: "Compliance Assessment",
      desc: "We evaluate your business model to identify the regulatory requirements specific to your operations.",
    },
    {
      title: "Document Preparation",
      desc: "Assistance with compiling and preparing required documentation, including:",
      points: [
        "Business plans.",
        "AML (Anti-Money Laundering) and KYC (Know Your Customer) policies.",
        "Operational frameworks.",
      ],
    },
    {
      title: "Application Submission",
      desc: "Handling the submission process with VARA, ensuring accuracy and completeness.",
    },
    {
      title: "Regulatory Liaison",
      desc: "Acting as your point of contact with VARA to facilitate smooth communication and faster approvals.",
    },
    {
      title: "Ongoing Compliance Support",
      desc: "Providing advisory services to ensure your business remains compliant with evolving regulations.",
    },
  ];
  const tableHeader = ["Regulatory Authority", "Documents Required"];
  const tableBody = [
    {
      title: "VARA (Virtual Assets Regulatory Authority)",
      docs: [
        "Business Plan: Detailed operations, financial projections, and objectives.",
        "AML/KYC Policy: Anti-money laundering and customer verification policies.",
        "Shareholder Information: Passports, CVs, Emirates IDs (if applicable).",
        "Proof of Address: Recent utility bills or lease agreements.",
        "Technical Documentation: Security protocols and compliance systems.",
        "Capital Proof: Bank statements or proof of funds.",
        "Company Formation Documents: MOA, AOA, trade license (if incorporated).",
        "Risk Management Framework: Operational, financial, and cybersecurity risk policies.",
      ],
    },
    {
      title: "DFSA (Dubai Financial Services Authority)",
      docs: [
        "Regulatory Business Plan: Business activities and alignment with DFSA standards.",
        "Corporate Structure: Organizational chart and ownership details.",
        "AML/CFT Framework: Policies for anti-money laundering and combating financing of terrorism.",
        "Shareholder and Director Details: Passports, CVs, and proof of address.",
        "Financial Statements: Evidence of capital adequacy.",
        "Compliance Policies: Internal audit, governance, and reporting procedures.",
        "Legal Documentation: MOA, AOA, and company registration details.",
      ],
    },
    {
      title: "FSRA (Financial Services Regulatory Authority)",
      docs: [
        "Comprehensive Business Plan: Description of virtual asset services.",
        "AML/KYC Procedures: Policies for preventing financial crimes.",
        "Shareholder Information: Identity documents and proof of residence.",
        "Financial Projections: Demonstrating sustainability and profitability.",
        "Technical Systems Details: IT infrastructure and cybersecurity measures.",
        "Risk Assessment Report: Identifying and mitigating operational risks.",
        "Capital Proof: Evidence of meeting FSRA’s minimum capital requirements.",
        "Legal Documents: Company registration, MOA, and AOA.",
      ],
    },
    {
      title: "SCA (Securities and Commodities Authority)",
      docs: [
        "Business Model Overview: Details on services, token issuance, or trading activities.",
        "AML/KYC Framework: Compliance with UAE financial crime regulations.",
        "Financial Statements: Proof of capital adequacy.",
        "Corporate Governance Framework: Policies for decision-making and accountability.",
        "Shareholder and Director Documentation: ID copies, CVs, and proof of address.",
        "Technology Architecture: Overview of blockchain systems and security protocols.",
        "Compliance Policies: Ongoing monitoring and reporting mechanisms.",
        "Legal Registration: MOA, AOA, and commercial license.",
      ],
    },
  ];
  const keyPoints = [
    "Additional documents may be required depending on the specific business model or activities.",
    "Authorities may request further clarifications or supplementary documentation during the review process.",
    "Ensure all documents are certified, notarized, or attested as required by UAE regulations.",
  ];
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
          <div>
            <Heading>
              Your Gateway to <span className="text-lime-500">Crypto</span> and{" "}
              <span className="text-lime-500">VARA Registration</span>
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            As the crypto landscape continues to evolve, compliance with
            regulatory standards is essential for businesses in the UAE. We
            provide end-to-end support for crypto licensing and VARA
            registration.
          </p>
          <Button className="mt-5">Get Expert Consultation</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>
      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          <span className="text-lime-500">Crypto</span> and{" "}
          <span className="text-lime-500">VARA Registration</span> in the UAE
        </Heading>
        <div className="grid gap-10 mt-9 grid-cols-1 lg:grid-cols-2 my-24">
          <div className="order-1">
            <p className="font-Satoshi text-lg">
              The UAE has rapidly emerged as a global blockchain and
              cryptocurrency innovation hub. To operate legally and effectively
              in this forward-thinking market, businesses must comply with
              regulatory standards set by the Virtual Assets Regulatory
              Authority (VARA).The Virtual Assets Regulatory Authority (VARA) is
              the dedicated regulator overseeing Dubai's virtual asset sector.
              Established to promote transparency, investor protection, and
              innovation, VARA sets the standards for crypto licensing and
              operations in the UAE.
            </p>
            <div className="font-Satoshi text-lg ">
              <p className="mt-5 font-SplineSans">
                By obtaining VARA registration, your business gains:
              </p>
              <div>
                <div className="flex mt-2 items-start gap-2">
                  <div className="mt-3">
                    <div className="size-2 bg-lime-950 rounded-full" />
                  </div>
                  <p className="font-Satoshi">
                    Legal standing to operate in Dubai.
                  </p>
                </div>
                <div className="flex mt-2 items-start gap-2">
                  <div className="mt-3">
                    <div className="size-2 bg-lime-950 rounded-full" />
                  </div>
                  <p className="font-Satoshi">
                    Increased trust and credibility with stakeholders.
                  </p>
                </div>
                <div className="flex mt-2 items-start gap-2">
                  <div className="mt-3">
                    <div className="size-2 bg-lime-950 rounded-full" />
                  </div>
                  <p className="font-Satoshi">
                    Access to the region's growing virtual assets market.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[440px]">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={
                "https://img.hubbis.com/optimiser/img/news/cropped/a2464642ede52b28d5611fbfbc56e57bf3e5d35a.jpeg"
              }
            />
          </div>
        </div>
      </div>
      <div className="my-24">
        <div className="container w-full">
          <Heading className="!text-center">
            Who Needs <span className="text-lime-500">VARA Registration?</span>
          </Heading>
          <p className="text-center w-full font-Satoshi">
            If your business engages in any of the following activities, VARA
            registration is required:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            {[
              "Cryptocurrency exchanges",
              "Custodial services for virtual assets",
              "Virtual asset payment services",
              "Crypto wallet providers",
              "Initial coin offerings (ICOs), token issuance, or related services",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-4 bg-lime-300 rounded-lg"
              >
                <div className="mt-2">
                  <div className="size-2 bg-lime-950 rounded-full" />
                </div>
                <p className="font-SplineSans">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                Key Regulatory Bodies for{" "}
                <span className="text-lime-500">Crypto</span> in the UAE
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {regulatoryAuthorities.map((item, index) => (
                <div key={index} className="p-5 bg-lime-200 rounded-xl">
                  <h1 className="text-xl font-SplineSans text-lime-950 font-[600]">
                    {item.title}
                  </h1>
                  <p className="text-lg mt-3 font-Satoshi">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                Types of{" "}
                <span className="text-lime-500">Cryptocurrency Licenses</span>{" "}
                Available
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {cryptoLicensing.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex items-start gap-3 rounded-lg bg-indigo-100 p-5"
                >
                  <div>
                    <div className="size-6  mt-[1px] rounded-full">
                      <img src={"media/mainland/checked.png"} />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-SplineSans  font-[600] text-xl">
                      {item.title}
                    </h2>
                    <p className="mt-1 font-Satoshi">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                Steps for <span className="text-lime-500">Crypto</span> and{" "}
                <span className="text-lime-500">VARA Registration</span>
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5">
              {complianceSteps.map((item, index) => (
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
                  <p className="font-SplineSans font-[500] text-xl">
                    {item.title}
                  </p>
                  <p className="font-Satoshi text-lg">{item.desc}</p>
                  {item.points && (
                    <div className="mt-3 border-t py-2 border-lime-800">
                      {item.points.map((elem, id) => (
                        <div key={id} className="flex  items-start gap-2">
                          <div className="mt-2">
                            <div className="size-2 bg-lime-950 rounded-full" />
                          </div>
                          <p className="font-Satoshi">{elem}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container w-full mt-24">
        <Heading className="!text-center w-full">
          Documents Required for{" "}
          <span className="text-lime-500">Crypto Registration</span> in the UAE
        </Heading>
        <table className="w-full border-collapse mt-10 border border-gray-300">
          <thead className="w-full  bg-yellow-100 ">
            <tr className="w-full ">
              {tableHeader.map((item, index) => (
                <th key={index} className="border  border-slate-950 py-2 px-5">
                  <div className="w-full text-start capitalize font-SplineSans text-lg text-[#152b0c] ">
                    {item}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {tableBody.map((item, index) => (
              <tr key={index} className="border border-slate-950 w-full">
                <td className=" py-2 border border-gray-300 ">
                  <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                    {item.title}
                  </div>
                </td>
                <td className=" py-2 border border-gray-300 ">
                  {item.docs.map((elem, id) => (
                    <div
                      key={id}
                      className="flex items-start py-2 gap-2 font-Satoshi text-lg text-[#152b0c] justify-start px-5 "
                    >
                      <div>
                        <MdLabelImportant className="text-lime-800 mt-1" />
                      </div>
                      <div>{elem}</div>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container w-full mt-4 mb-24">
        <p className="font-SplineSans font-[500]">Key points</p>
        <div className="grid grid-cols-1 gap-1">
          {keyPoints.map((item, index) => (
            <div key={index} className="flex mt-1 items-start gap-2">
              <div className="mt-2">
                <div className="size-2 bg-lime-950 rounded-full" />
              </div>
              <p className="font-Satoshi font-[400]">
                Access to the region's growing virtual assets market.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TradeFinancial = () => {
  const tradeFinanceServices = [
    {
      title: "Letters of Credit (LC)",
      desc: "Secure your trade transactions with a reliable letter of credit. We help mitigate risks and ensure timely payments.",
    },
    {
      title: "Invoice Financing",
      desc: "Turn your invoices into immediate cash flow. Stay liquid and focus on growing your business.",
    },
    {
      title: "Supply Chain Financing",
      desc: "Streamline your supply chain with flexible financing options for your suppliers and buyers.",
    },
    {
      title: "Export & Import Finance",
      desc: "Simplify cross-border trade with financial support customized to your business needs.",
    },
    {
      title: "Performance Guarantees",
      desc: "Reinforce trust in your business relationships with performance and payment guarantees.",
    },
    {
      title: "Custom Trade Finance Solutions",
      desc: "If your business has unique financial needs, we will provide custom solutions for your business.",
    },
  ];
  const services = [
    {
      icon: "media/Will Formation icon/manufacturing.png",
      title: "Manufacturing",
      desc: "Optimize cash flow and supply chain operations.",
    },
    {
      icon: "media/Will Formation icon/construction.png",
      title: "Construction",
      desc: "Access financing for large-scale projects.",
    },
    {
      icon: "media/Will Formation icon/bags.png",
      title: "Retail & Distribution",
      desc: "Meet seasonal demands with flexible funding.",
    },
    {
      icon: "media/Will Formation icon/oil-drum.png",
      title: "Oil & Gas",
      desc: "Specialized financial services for energy trade.",
    },
    {
      icon: "media/Will Formation icon/sprout.png",
      title: "Agriculture",
      desc: "Support for import and export of agricultural commodities.",
    },
  ];
  const tradeFinanceProcess = [
    {
      title: "Identify Financial Requirements",
      desc: "Assess the type of trade financing required based on transaction specifics, such as import/export nature, buyer/supplier credibility, and payment terms.",
    },
    {
      title: "Application Submission",
      desc: "Prepare documentation with proforma invoice or purchase order, business trade license, etc. Submit the application to the selected financing provider along with the required documents.",
    },
    {
      title: "Credit Assessment and Approval",
      desc: "The provider conducts a credit risk assessment of your business, the buyer/supplier, and the trade transaction.",
    },
    {
      title: "Issuance of Trade Finance Instruments",
      desc: "Letters of Credit (LCs), Bank Guarantees, Trade Credit Insurance, customized to fit the transaction and business needs.",
    },
    {
      title: "Execution of Trade Transaction",
      desc: "In import financing, the supplier ships goods, and shipping documents are submitted to the financier. For exports, the exporter provides shipment documents to receive payment.",
    },
    {
      title: "Monitoring and Repayment",
      desc: "Financiers may monitor the transaction to ensure compliance with terms and smooth execution of the trade cycle.",
    },
  ];

  const tableHeader = ["Category", "Required Documents"];
  const tableBody = [
    {
      title: "Business Information",
      docs: [
        "Valid Trade License",
        "Memorandum of Association (MOA) or Articles of Association (AOA)",
        "Certificate of Incorporation or Registration",
        "Passport copies and Emirates IDs of business owners and authorized signatories",
      ],
    },
    {
      title: "Financial Information",
      docs: [
        "Latest audited financial statements (1-3 years)",
        "Bank statements (past 6-12 months)",
        "Cash flow projections or financial forecast",
        "Tax compliance certificates, if applicable",
      ],
    },
    {
      title: "Transaction Details",
      docs: [
        "Proforma Invoice or Sales Contract",
        "Purchase Order (PO)",
        "Letter of Credit (LC) or other trade finance instruments, if applicable",
        "Bill of Lading or Airway Bill (for shipping transactions)",
        "Commercial Invoice",
        "Packing List",
      ],
    },
    {
      title: "Collateral Documents",
      docs: [
        " Details of pledged collateral (if required)",
        "Ownership documents for pledged assets (e.g., property, vehicles, etc.)",
        "Insurance documents for goods or assets pledged",
      ],
    },
    {
      title: "Additional Supporting Documents",
      docs: [
        "Business profile or company introduction letter",
        "Import/export license",
        "Customs clearance documents (if applicable)",
        "Trade references (from suppliers or buyers)",
        "Any existing trade finance facility agreements",
      ],
    },
  ];
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
          <div>
            <Heading>
              Your Partner in Trade{" "}
              <span className="text-lime-500">Finance Excellence</span>
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            Empowering businesses in the UAE and beyond with financial solutions
            to fuel growth and success. From letters of credit to supply chain
            finance, we provide the tools you need to thrive in global markets.
          </p>
          <Button className="mt-5">Get Expert Consultation</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>
      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          <span className="text-lime-500">Trade Financing</span> in the UAE
        </Heading>
        <p className="font-Satoshi text-center mt-3 text-lg">
          The UAE is a global trading hub, offering opportunities for businesses
          to expand across borders. With its prime location, advanced
          infrastructure, and business-friendly policies, trade financing is
          pivotal in supporting the nation's import-export ecosystem. Trade
          financing involves financial instruments and services that facilitate
          international and domestic trade. It helps businesses manage cash
          flow, mitigate risks, and ensure seamless transactions between buyers
          and suppliers.
        </p>
      </div>

      <div>
        <div className="w-full container my-24">
          <div>
            <Heading className="!text-center w-full">
              Types of{" "}
              <span className="text-lime-500">Cryptocurrency Licenses</span>{" "}
              Available
            </Heading>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
            {tradeFinanceServices.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-start gap-3 rounded-lg bg-lime-200 p-5"
              >
                <div>
                  <div className="size-6  mt-[1px] rounded-full">
                    <img src={"media/mainland/checked.png"} />
                  </div>
                </div>
                <div>
                  <h2 className="font-SplineSans  font-[600] text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-1 font-Satoshi">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="w-full container my-24">
          <div>
            <Heading className="!text-center w-full">
              <span className="text-lime-500">Industries</span> We Serve
            </Heading>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-7">
            {services.map((item, index) => (
              <div key={index} className="w-full rounded-lg bg-lime-200 p-5">
                <div>
                  <div className="size-14 p-3 overflow-hidden bg-lime-400 rounded-full">
                    <img src={item.icon} />
                  </div>
                </div>
                <div>
                  <h2 className="font-SplineSans mt-6 font-[600] text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-1 font-Satoshi">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                The Process of{" "}
                <span className="text-lime-500">Trade Financing</span> in the
                UAE
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5">
              {tradeFinanceProcess.map((item, index) => (
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
                  <p className="font-SplineSans font-[500] text-xl">
                    {item.title}
                  </p>
                  <p className="font-Satoshi text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container w-full mt-24">
        <Heading className="!text-center w-full">
          Documents Required for{" "}
          <span className="text-lime-500">Crypto Registration</span> in the UAE
        </Heading>
        <table className="w-full border-collapse mt-10 border border-gray-300">
          <thead className="w-full  bg-lime-200 ">
            <tr className="w-full ">
              {tableHeader.map((item, index) => (
                <th key={index} className="border  border-slate-950 py-2 px-5">
                  <div className="w-full text-start capitalize font-SplineSans text-lg text-[#152b0c] ">
                    {item}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {tableBody.map((item, index) => (
              <tr key={index} className="border border-slate-950 w-full">
                <td className=" py-2 border border-gray-300 ">
                  <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                    {item.title}
                  </div>
                </td>
                <td className=" py-2 border border-gray-300 ">
                  {item.docs.map((elem, id) => (
                    <div
                      key={id}
                      className="flex items-start py-2 gap-2 font-Satoshi text-lg text-[#152b0c] justify-start px-5 "
                    >
                      <div>
                        <MdLabelImportant className="text-lime-800 mt-1" />
                      </div>
                      <div>{elem}</div>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const CommercialFinancing = () => {
  const tradeFinanceServices = [
    {
      title: "Business Consulting Services",
      desc: "Our expert consultants work alongside your team to offer actionable insights into improving operational efficiency, scaling your business, and navigating market complexities. We provide.",
      points: [
        "Strategic planning and budgeting",
        "Risk management and compliance",
        "Performance analysis and optimization",
      ],
    },
    {
      title: "Commercial Lending",
      desc: "We offer a range of commercial loan options designed to meet the unique needs of your business. From working capital to expansion, our lending solutions include.",
      points: [
        "Small Business Loans",
        "SBA Loans",
        "Equipment Financing",
        "Real Estate Financing",
        "Lines of Credit",
      ],
    },
    {
      title: " Cash Flow Management",
      desc: "Managing cash flow is essential to business stability. Our team helps you optimize your cash flow, ensuring your business can meet its financial obligations and invest in growth. Our services include.",
      points: [
        "Cash flow forecasting",
        "Expense management",
        "Receivables and payables solutions",
      ],
    },
    {
      title: "Investment Advisory",
      desc: "Let us help you make informed decisions about your business’s future with our professional investment advisory services. We specialize in:",
      points: [
        "Portfolio management",
        "Asset allocation",
        "Risk analysis",
        "Growth strategies",
      ],
    },
    {
      title: "Tax Planning & Preparation",
      desc: "Tax regulations can be complex, but our experienced team simplifies the process. We offer:",
      points: [
        "Tax strategy development",
        "Corporate tax planning",
        "Preparation and filing of business taxes",
        "Multi-state and international tax services",
      ],
    },
  ];
  const selfPraise = [
    {
      title: "Expert Knowledge of the UAE Market",
      desc: "With in-depth knowledge of local financial regulations and opportunities, we provide financing solutions that align with your business goals.",
    },
    {
      title: "Flexible Financing Solutions",
      desc: "We understand that every business is unique. That’s why we offer financing options designed to meet your specific needs.",
    },
    {
      title: "Quick Approval and Disbursement",
      desc: "Our processes ensure quick approvals, so you can access funds when you need them.",
    },
    {
      title: "Competitive Rates",
      desc: "We partner with leading financial institutions to offer the most competitive rates in the market.",
    },
    {
      title: "Personalized Support",
      desc: "Our team of experts provides you with hands-on support throughout the financing process.",
    },
  ];
  const advanteges = [
    {
      icon: "",
      title: "Startups",
      desc: "Gain access to essential capital to launch and grow your business.",
    },
    {
      icon: "",
      title: "SMEs",
      desc: "Secure the funding needed for expansion, innovation, and scaling your operations.",
    },
    {
      icon: "",
      title: "Large Enterprises",
      desc: "Benefit from advanced financing options tailored to the complex needs of large corporations.",
    },
    {
      icon: "",
      title: "Exporters and Importers",
      desc: "Optimize your trade and export processes with flexible trade finance options.",
    },
    {
      icon: "",
      title: "Real Estate Investors",
      desc: "Invest in commercial properties or develop new real estate projects with our financing solutions.",
    },
  ];
  const commercialTypes = [
    {
      title: "Business Loans",
      desc: "Business loans are one of the most common types of financing, offering businesses the capital they need to grow or manage operations.",
    },
    {
      title: "Equipment Financing",
      desc: "Equipment financing is designed to help businesses acquire machinery, technology, vehicles, or other essential equipment without draining their working capital.",
    },
    {
      title: "Commercial Real Estate Financing",
      desc: "This type of financing is used for purchasing or refinancing commercial properties such as office buildings, warehouses, retail spaces, or other income-generating real estate.",
    },
    {
      title: "Trade and Export Financing",
      desc: "Trade and export financing is designed for businesses involved in international trade. It helps businesses manage the risks and challenges of importing and exporting goods.",
    },
    {
      title: "Invoice Financing (Factoring & Discounting)",
      desc: "Invoice financing allows businesses to access funds quickly by using outstanding invoices as collateral.",
    },
    {
      title: "Lines of Credit",
      desc: "A line of credit is a flexible form of financing that allows businesses to borrow up to a certain limit, as needed, and repay as funds become available.",
    },
    {
      title: "Merchant Cash Advances (MCA)",
      desc: "A merchant cash advance (MCA) is a type of financing where a business receives a lump sum of cash in exchange for a portion of future sales. Repayment is usually made by automatically deducting a percentage of daily credit card or debit card sales.",
    },
    {
      title: "SBA Loans (Small Business Administration Loans)",
      desc: "SBA loans are government-backed loans designed to support small businesses. These loans often offer favorable terms, such as lower interest rates and longer repayment periods.",
    },
    {
      title: "Trade Credit",
      desc: "Trade credit is a type of financing that allows businesses to buy goods or services on account, paying for them later. This is commonly used between suppliers and customers, and it helps businesses manage cash flow while they await payments from customers.",
    },
    {
      title: "Venture Capital",
      desc: "Venture capital (VC) is a form of equity financing where investors provide capital to startups or early-stage businesses in exchange for equity or ownership in the company.",
    },
  ];

  const tableHeader = ["Category", "Document Name", "Purpose"];
  const tableBody = [
    {
      title: "General Documents",
      docs: [
        "Completed Application Form",
        "Valid Trade License",
        "Emirates ID (for UAE Nationals/Residents)",
        "Passport Copy",
        "UAE Residence Visa Copy (for expatriates)",
      ],
      purpose: [
        "To formally apply for financing",
        "To verify legal business registration",
        "Identification of business owner(s) or directors",
        "Proof of identity for business owner(s), partners, or directors",
        "Verification of residency for foreign owners or directors",
      ],
    },
    {
      title: "Financial Documents",
      docs: [
        "Bank Statements (6–12 months)",
        "Audited Financial Statements (2–3 years)",
        "Profit & Loss Statement",
        "Balance Sheet",
      ],
      purpose: [
        "To evaluate cash flow and financial health",
        "To provide a clear picture of the company's financial performance",
        "To demonstrate revenue, expenses, and profitability",
        "To outline the company’s assets, liabilities, and equity",
      ],
    },
    {
      title: "Business Information",
      docs: [
        "Business Plan",
        "Company Profile",
        "Contracts or Purchase Orders",
      ],
      purpose: [
        "To describe the company’s goals, operations, and use of financing",
        "Overview of the company’s industry, operations, and market position",
        "To prove ongoing or upcoming business activity",
      ],
    },
    {
      title: "Collateral Documents",
      docs: [
        "Property Title Deeds or Lease Agreements (if applicable)",
        "Asset Valuation Reports (if applicable)",
        "Guarantees or Pledge Agreements (if applicable)",
      ],
      purpose: [
        "To document ownership or leasing of collateral",
        "To determine the value of assets offered as collateral",
        "To formalize collateral agreements",
      ],
    },
    {
      title: "Legal Documents",
      docs: [
        "Memorandum of Association (MOA)",
        "Power of Attorney (if applicable)",
      ],
      purpose: [
        "To outline the ownership and business structure",
        "Required if a representative is applying on behalf of the business",
      ],
    },
    {
      title: "Tax Documents",
      docs: ["VAT Registration Certificate", "Tax Returns (if applicable)"],
      purpose: [
        "Proof of tax compliance, if applicable",
        "To verify tax compliance and financial integrity",
      ],
    },
  ];
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
          <div>
            <Heading>
              Your Partner in Trade{" "}
              <span className="text-lime-500">Finance Excellence</span>
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            Empowering businesses in the UAE and beyond with financial solutions
            to fuel growth and success. From letters of credit to supply chain
            finance, we provide the tools you need to thrive in global markets.
          </p>
          <Button className="mt-5">Get Expert Consultation</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>

      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          Commercial <span className="text-lime-500">Financing Solutions</span>{" "}
          in the UAE
        </Heading>
        <div className="grid gap-10 mt-9 grid-cols-1 lg:grid-cols-2 my-24">
          <div className="order-1">
            <p className="font-Satoshi text-lg">
              At BizGrowth, we specialize in providing innovative commercial
              financing solutions to businesses across the UAE. Whether you're a
              small startup or a large enterprise, we offer flexible financing
              options designed to help you grow and succeed in the dynamic UAE
              market.
              <br />
              Our deep understanding of the UAE business landscape and our
              strong connections with financial institutions allow us to offer
              the best financing solutions customized to your unique needs. Our
              mission is to empower businesses with the financial tools,
              insights, and resources needed to navigate today’s fast-paced,
              competitive markets. We focus on building long-term relationships
              with our clients, ensuring that every business we work with
              achieves its full potential.
            </p>
          </div>
          <div className="h-[440px]">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={
                "https://img.hubbis.com/optimiser/img/news/cropped/a2464642ede52b28d5611fbfbc56e57bf3e5d35a.jpeg"
              }
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
          {tradeFinanceServices.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-start gap-3 rounded-lg bg-lime-200 p-5"
            >
              <h2 className="font-SplineSans  font-[600] text-xl">
                {item.title}
              </h2>
              <p className="mt-1 font-Satoshi">{item.desc}</p>

              <div>
                {item.points.map((elem, index) => (
                  <div key={index}>
                    <div>
                      <div className="size-2 bg-lime-700 rounded-full" />
                    </div>
                    <div>{elem}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="w-full container my-24">
          <div>
            <Heading className="!text-center w-full">
              Why Choose Us for Commercial Financing in the UAE?
            </Heading>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
            {selfPraise.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-start gap-3 rounded-lg bg-indigo-100 p-5"
              >
                <div>
                  <div className="size-6  mt-[1px] rounded-full">
                    <img src={"media/mainland/checked.png"} />
                  </div>
                </div>
                <div>
                  <h2 className="font-SplineSans  font-[600] text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-1 font-Satoshi">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="w-full container my-24">
          <div>
            <Heading className="!text-center w-full">
              Who Can Benefit from Our Commercial Financial Services?
            </Heading>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-7">
            {advanteges.map((item, index) => (
              <div key={index} className="w-full rounded-lg bg-lime-200 p-5">
                <div>
                  <div className="size-14 p-3 overflow-hidden bg-lime-400 rounded-full">
                    <img src={item?.icon} />
                  </div>
                </div>
                <div>
                  <h2 className="font-SplineSans mt-6 font-[600] text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-1 font-Satoshi">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="w-full container my-24">
          <div>
            <Heading className="!text-center w-full">
              Types of Commercial Financial Services
            </Heading>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-7">
            {commercialTypes.map((item, index) => (
              <div key={index} className="w-full rounded-lg bg-lime-200 p-5">
               
                <div>
                  <h2 className="font-SplineSans mt-6 font-[600] text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-1 font-Satoshi">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container w-full mt-24">
        <Heading className="!text-center w-full">
          Documents Required for{" "}
          <span className="text-lime-500">Crypto Registration</span> in the UAE
        </Heading>
        <table className="w-full border-collapse mt-10 border border-gray-300">
          <thead className="w-full  bg-lime-200 ">
            <tr className="w-full ">
              {tableHeader.map((item, index) => (
                <th key={index} className="border  border-slate-950 py-2 px-5">
                  <div className="w-full text-start capitalize font-SplineSans text-lg text-[#152b0c] ">
                    {item}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {tableBody.map((item, index) => (
              <tr key={index} className="border border-slate-950 w-full">
                <td className=" py-2 border border-gray-300 ">
                  <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                    {item.title}
                  </div>
                </td>
                <td className=" py-2 border border-gray-300 ">
                  {item.docs.map((elem, id) => (
                    <div
                      key={id}
                      className="flex items-start py-2 gap-2 font-Satoshi text-lg text-[#152b0c] justify-start px-5 "
                    >
                      <div>
                        <MdLabelImportant className="text-lime-800 mt-1" />
                      </div>
                      <div>{elem}</div>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
