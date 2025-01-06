"use client";
import React, { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/app/App_Chunks/Components/Button";
import { MdLabelImportant } from "react-icons/md";
import Banner from "../App_Chunks/Components/Banner";
import Heading from "../App_Chunks/Components/Heading";
import { motion } from "framer-motion";
import Link from "next/link";
// Main page that uses a suspense to load the child component dynamically
const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainPage />
    </Suspense>
  );
};

const MainPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("name")?.toLowerCase();
  useEffect(() => {
    let metaInfo = {
      title: "Business Setup in UAE - Mainland",
      description:
        "Learn about the business setup process in the UAE Mainland. Find out the best solutions for establishing your company.",
    };

    switch (query) {
      case "golden visa":
        metaInfo = {
          title: "UAE Golden Visa Services | Long-term Residency",
          description:
            "Dubai invites you to secure your future with the prestigious Golden Visa. Whether you’re an investor, entrepreneur, professional, or outstanding student, we are here to make your Golden Visa application journey easy.",
        };
        break;
      case "will formation":
        metaInfo = {
          title: "Will Writing & Registration Services in UAE",
          description:
            "Creating a will in the UAE is an essential step in ensuring your assets are protected, and your loved ones are provided for according to your wishes. Our expert Will formation service simplifies this process, offering peace of mind.",
        };
        break;
      case "real estate":
        metaInfo = {
          title: "Real Estate Investment Consultants in UAE",
          description:
            "At Real Estate Investment Services, we provide expert guidance and opportunities to help you build, grow, and protect your wealth through property investments. Whether you're a first-time investor or a professional, we offer services to meet your needs.",
        };
        break;
      case "wealth management":
        metaInfo = {
          title: "Wealth Management Services Company in UAE",
          description:
            "Managing wealth in the UAE also comes with its own unique set of challenges. Our wealth management services are designed to address these challenges and provide you with clear solutions to secure your financial future.",
        };
        break;
      case "nominee director services":
        metaInfo = {
          title: "Nominee Director Services in Dubai",
          description:
            "We offer professional Nominee Director Services to ensure your company remains compliant, secure, and operates smoothly. Whether you’re a foreign investor or need a third-party director for privacy or confidentiality, our team provides a reliable solution.",
        };
        break;
      default:
        metaInfo = {
          title: "Expert Services in UAE | Biz Growth",
          description:
            "Explore a wide range of expert services in the UAE, including Golden Visa, Will formation, Real Estate investment, Wealth management, and Nominee Director services. Let Biz Growth guide you toward securing your future in the UAE.",
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
  }, [query]);
  useEffect(() => {
    if (query === "golden visa") {
      document.body.style.backgroundColor = "#fffbeb";
    }
    return () => {
      document.body.style.backgroundColor = "#f6f8ff";
    };
  }, [query]);

  // Render components based on the query parameter
  const renderComponent = () => {
    switch (query) {
      case "golden visa":
        return <GoldenVisa />;
      case "will formation":
        return <WillFormation />;
      case "wealth management":
        return <WealthManagement />;
      case "nominee director services":
        return <NomineeDirectory />;
      case "real estate":
        return <RealEstateInvestment />;
      default:
        return <div>No matching component found</div>;
    }
  };

  return <div>{renderComponent()}</div>;
};

// Component for Golden Visa
const GoldenVisa = () => {
  const selfPraise = [
    {
      icon: "media/goldenVisa/resideny.png",
      title: "Long-Term Residency",
      desc: "Stay in UAE for up to 10 years with automatic renewal options.",
    },
    {
      title: "No Sponsor Requirement",
      icon: "media/goldenVisa/no-sponsor.png",
      desc: "Freedom to live, work, or study without the need for a local sponsor.",
    },
    {
      icon: "media/goldenVisa/family.png",
      title: "Family Benefits",
      desc: "Include your spouse, children, and even domestic staff under your visa.",
    },
    {
      icon: "media/goldenVisa/businessOpp.png",
      title: "Business Opportunities",
      desc: "Enjoy 100% ownership of your business in Dubai’s investment market.",
    },
    {
      icon: "media/goldenVisa/lifestyle.png",
      title: "Exclusive Lifestyle",
      desc: "Access Dubai`s world-class healthcare, education, and lifestyle opportunities.",
    },
  ];
  const eligibility = [
    {
      eligible: "Investors",
      desc: "Real estate, business, or public investments.",
    },
    {
      eligible: "Entrepreneurs",
      desc: "Founders of innovative or scalable ventures.",
    },
    {
      eligible: "Professionals",
      desc: "Specialists in healthcare, technology, education, or culture.",
    },
    {
      eligible: "Scientists & Researchers",
      desc: "Accredited by UAE-recognized institutions.",
    },
    {
      eligible: "Outstanding Students",
      desc: "Top achievers in UAE or global institutions.",
    },
    {
      eligible: "Humanitarian Pioneers",
      desc: "Contributors to philanthropy or community welfare.",
    },
  ];
  const goldenServices = [
    {
      name: "Personalized Consultation",
      desc: "Assess your eligibility and guide you through the application requirements.",
    },
    {
      name: "Documentation Assistance",
      desc: "Compile, verify, and submit your documents accurately.",
    },
    {
      name: "End-to-End Support",
      desc: "From medical tests to Emirates ID, we manage every step.",
    },
    {
      name: "Fast-Track Application",
      desc: "Get your visa approval with expert handling.",
    },
    {
      name: "Post-Visa Services",
      desc: "Assistance with family sponsorship, renewals, and more.",
    },
  ];
  const tableHead = ["category", "Requirements", "Visa Duration"];
  const tableData = [
    {
      title: "Investors",
      docs: [
        "Minimum investment of AED 2 million in a company or startup.",
        "Proof of company registration and ownership.",
        "Company should contribute to UAE`s economy.",
        "Official audit report showing financial health (if applicable).",
      ],
    },
    {
      title: "Salaried Professionals",
      docs: [
        "Monthly salary of at least AED 30,000.",
        "Bachelor’s degree or higher in specialized fields (e.g., healthcare, IT, education).",
        "Employment contract valid in the UAE.",
        "Professional experience and role should align with UAE`s priority sectors.",
      ],
    },
    {
      title: "Real Estate Investors",
      docs: [
        " Property investment worth AED 2 million or more (must not be mortgaged beyond AED 2 million).",
        " Property must be retained for at least 3 years.",
        " Investment in approved real estate projects only.",
        " Official property valuation and purchase agreement required.",
      ],
    },
  ];

  return (
    <div>
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>
            <Heading>
              Your <span className="text-amber-500">Trusted Partner</span> for
              Long-Term Residency in the UAE
            </Heading>
          </div>
          <p className="text-lg font-Satoshi mt-4">
            UAE invites you to secure your future with the prestigious Golden
            Visa. Whether you`re an investor, entrepreneur, professional, or
            outstanding student, we are here to make your Golden Visa
            application journey easy.
          </p>
          <Link href={"/contact"}>
            <Button className="!from-amber-400 text-amber-950 mt-5 !to-amber-200">
              Get Expert Consultation
            </Button>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} alt="Hero" />
        </div>
      </div>

      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          What is the UAE <span className="text-amber-400">Golden Visa?</span>
        </Heading>
        <p className="text-center w-full mt-3 text-lg font-Satoshi">
          The Dubai Golden Visa is a long-term residency visa designed to
          attract talent, innovation, and investment to the UAE. The 10-year
          residency visa provides a great opportunity for qualified individuals
          and their families. The scheme was introduced in 2019 and it gives a
          great opportunity for ‘skilled talents’ to settle in the UAE.
        </p>
      </div>

      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          Why Choose The{" "}
          <span className="text-amber-400">UAE Golden Visa?</span>
        </Heading>
        <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-7">
          {selfPraise.map((elem, index) => (
            <div key={index} className="w-full  rounded-lg bg-amber-100 p-5">
              <div>
                <div className="size-12 bg-amber-300 p-1 flex items-center justify-center rounded-full">
                  <img src={elem.icon} className="w-full h-full scale-[.8]" />
                </div>
              </div>
              <div>
                <h2 className="font-SplineSans mt-5 font-[600] text-xl">
                  {elem.title}
                </h2>
                <p className="mt-1 font-Satoshi">{elem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container w-full my-24">
        <Heading className="!text-center w-full">Who is Eligible?</Heading>
        <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-7">
          {eligibility.map((elem, index) => (
            <div
              key={index}
              className="w-full flex items-start gap-3 rounded-lg bg-amber-100 p-5"
            >
              <div>
                <div className="size-6  mt-[1px] rounded-full">
                  <img src={"media/mainland/checked.png"} />
                </div>
              </div>
              <div>
                <h2 className="font-SplineSans  font-[600] text-xl">
                  {elem.eligible}
                </h2>
                <p className="mt-1 font-Satoshi">{elem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          Our <span className="text-amber-400">Golden Visa</span> Services
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {goldenServices.map((item, index) => (
            <div key={index} className="w-full rounded-lg bg-amber-100 p-5">
              <div></div>
              <div>
                <h2 className="text-xl font-SplineSans font-[600]">
                  {item.name}
                </h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container w-full mt-24">
        <Heading className="!text-center w-full">
          Documents Required for{" "}
          <span className="text-amber-400">Golden Visa</span> Services
        </Heading>
        <table className="w-full border-collapse mt-10 border border-gray-300">
          <thead className="w-full  bg-yellow-100 ">
            <tr className="w-full ">
              {tableHead.map((item, index) => (
                <th key={index} className="border  border-slate-950 py-2 px-5">
                  <div className="w-full text-start capitalize font-SplineSans text-lg text-[#152b0c] ">
                    {item}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {tableData.map((item, index) => (
              <tr key={index} className="border border-slate-950 w-full">
                <td className=" py-2 border border-gray-300 ">
                  <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                    {item.title}
                  </div>
                </td>
                <td className=" py-2 border border-gray-300 ">
                  {item.docs.map((doc, id) => (
                    <div
                      key={id}
                      className="flex  items-start gap-2 font-Satoshi text-lg text-[#152b0c] justify-start px-5 "
                    >
                      <div>
                        <MdLabelImportant className="text-amber-800 mt-1" />
                      </div>
                      <div>{doc}</div>
                    </div>
                  ))}
                </td>
                <td className=" py-2 border border-gray-300 px-5">
                  <div className=" font-Satoshi text-lg text-[#152b0c] justify-start ">
                    10 years
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container w-full mt-6 mb-24">
        <div>
          <h1 className="text-xl font-SplineSans font-[600]">
            Golden Visa Updates for 2024
          </h1>
        </div>
        <div>
          <h1 className="text-md font-SplineSans mt-2 font-[500]">
            For Professionals
          </h1>
          <p className="font-Satoshi text-md">
            The basic salary requirement for salaried professionals has been
            standardized at AED 30,000 per month. This eliminates the ambiguity
            between basic pay and allowances.
          </p>
        </div>
        <div>
          <h1 className="text-md font-[500] mt-3">
            {" "}
            For Real Estate Investors
          </h1>
          <p>Investment Thresholds</p>
          <div className="ml-3 flex items-center gap-2">
            <div>
              <div className="size-2 bg-amber-400 rounded-full" />
            </div>
            <div>
              <p className="font-Satoshi">
                <span className="font-SplineSans font-[500]">
                  10-years Visa
                </span>{" "}
                Minimum property investment of AED 2 million (can include
                under-construction properties).
              </p>
            </div>
          </div>
          <div className="ml-3 flex items-center gap-2">
            <div>
              <div className="size-2 bg-amber-400 rounded-full" />
            </div>
            <div>
              <p className="font-Satoshi">
                <span className="font-SplineSans font-[500]">5-years Visa</span>{" "}
                Minimum property investment of AED 1 million (completed
                properties only).
              </p>
            </div>
          </div>
          <div className="ml-3 flex items-center gap-2">
            <div>
              <div className="size-2 bg-amber-400 rounded-full" />
            </div>
            <div>
              <p className="font-Satoshi">
                <span className="font-SplineSans font-[500]">2-years Visa</span>{" "}
                Minimum property investment of AED 750,000 (completed properties
                only).
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-md font-[500] mt-4">
            {" "}
            For Cultural and Creative Industries:
          </h1>
          <p className="font-Satoshi">
            Artists, filmmakers, and other creatives have been given easier
            access to obtain the visa, reflecting the UAE`s focus on cultural
            and artistic innovation.
          </p>
        </div>
      </div>
      <Banner
        title={"Start your journey to a long-term future in Dubai."}
        desc={
          "Let us handle the complexities while you focus on building your life."
        }
      />
    </div>
  );
};

const WillFormation = () => {
  const willData = [
    {
      icon: "media/Will Formation icon/balance.png",
      title: "Compliance with UAE Law",
      desc: "Without a registered Will, UAE courts distribute assets according to Sharia law. A Will ensures your intentions are honored, giving you full control over your assets.",
    },
    {
      icon: "media/Will Formation icon/shield.png",
      title: "Protection for Expats",
      desc: "Expatriates in the UAE can specify asset distribution by their home country laws, safeguarding their global and local assets.",
    },
    {
      icon: "media/Will Formation icon/child.png",
      title: "Guardianship of Minor Children",
      desc: "Appoint guardians for your children in your Will to avoid legal uncertainties.",
    },
  ];
  const expertise = [
    {
      title: "Dubai International Financial Centre (DIFC) Wills",
      desc: "DIFC Wills are recognized as legally binding under common law and are ideal for non-Muslim residents with assets in Dubai and other Emirates.",
    },
    {
      title: "Sharjah, Abu Dhabi, and UAE-wide Wills",
      desc: "Whether you own property, businesses, or bank accounts across the Emirates, we’ll draft a comprehensive Will covering all your assets.",
    },
    {
      title: "Specialized Services for Muslims",
      desc: "Ensure your Will complies with Sharia principles while meeting your personal needs and preferences.",
    },
  ];
  const nonMuslimDifference = {
    title: "Non-Muslim Wills in the UAE",
    desc: "Non-Muslims residing in the UAE have the option to distribute their assets and appoint guardians according to their personal preferences or the laws of their home country. A legally registered Will allows non-Muslims to bypass Sharia law.",
    points: [
      {
        title: "Freedom of Distribution",
        desc: "Decide how your local and international assets are distributed among heirs, dependents, or charities",
      },
      {
        title: "DIFC Wills Service Centre",
        desc: "The DIFC provides a secure, internationally recognized platform for registering Wills, ideal for non-Muslims.",
      },
      {
        title: "Guardianship Provisions",
        desc: "Appoint guardians for minor children to ensure their well-being in case of unforeseen circumstances.",
      },
    ],
  };

  const muslimDifference = {
    title: "Muslim Wills in the UAE",
    desc: "Muslims in the UAE can create Wills to ensure their asset distribution and other provisions is aligned with Islamic principles. Sharia law provides detailed guidelines for inheritance, and a Muslim Will allows for personalization within these boundaries.",
    points: [
      {
        title: "Sharia-Compliant Distribution",
        desc: "Ensure your assets are distributed as per Islamic inheritance rules, which allocate shares to specific heirs",
      },
      {
        title: "Bequests (Wasiyyah)",
        desc: "Allocate up to one-third of your estate to non-heirs, such as friends, charities, or other causes, within Sharia guidelines.",
      },
      {
        title: "Guardianship Provisions",
        desc: "Specify guardianship for minor children, which aligns with Islamic and UAE legal standards.",
      },
    ],
  };

  const relTableHead = ["Feature", "Non-Muslim", "Muslim Wills"];
  const relTableBody = [
    {
      title: "Asset Distribution",
      muslim: "Must comply with Sharia inheritance rules",
      nonMuslim: "Full freedom to distribute assets as desired",
    },
    {
      title: "Guardianship",
      muslim: "Must comply with Sharia and UAE laws",
      nonMuslim: "Can appoint guardians freely",
    },
    {
      title: "Registration Options",
      muslim: "Local courts for Sharia compliance",
      nonMuslim: "DIFC or local courts",
    },
    {
      title: "Charitable Bequests",
      muslim: "Limited to 1/3 of the estate",
      nonMuslim: "Unlimited",
    },
  ];
  const willBenefits = [
    {
      title: "Clarity and Control Over Asset Distribution",
      desc: "Without a Will, your assets in the UAE will be distributed according to Sharia law, which may not align with your personal preferences.",
    },
    {
      title: "Guardianship for Minor Children",
      desc: "For parents, a Will is essential to appoint guardians for minor children. This ensures your children’s future care is decided by you and not by the courts.",
    },
    {
      title: "Peace of Mind for Expats",
      desc: "The UAE has a diverse population with expatriates from around the world. A Will allows expats to distribute their assets according to the laws of their home country.",
    },
    {
      title: "Avoiding Lengthy Legal Processes",
      desc: "Without a Will, your family may face prolonged legal proceedings to access your assets.",
    },
    {
      title: "Flexibility and Customization",
      desc: "A Will allows you to customize your asset plan to meet your unique needs.",
    },
    {
      title: "Sharia-Compliant Options for Muslims",
      desc: "For Muslims, a Will provides a structured way to ensure asset distribution aligns with Islamic inheritance laws.",
    },
    {
      title: "Legal Validity and Recognition",
      desc: "A registered Will ensures your intentions are legally binding and enforceable in the UAE courts.",
    },
    {
      title: "Simplifying Multi-Jurisdictional Inheritance",
      desc: "For individuals with assets in multiple countries, a Will helps navigate different legal systems effectively.",
    },
    {
      title: "Protection for Business Owners",
      desc: "If you own a business in the UAE, a Will can ensure a smooth transfer of ownership or succession planning.",
    },
    {
      title: "Ease of Updates",
      desc: "A Will is not set in stone. You can revise it to reflect changes in family circumstances, such as marriages, births, or divorces.",
    },
  ];
  const willFormationSteps = [
    {
      step: "Initial Consultation",
      desc: "Meet with a legal expert to discuss your asset planning goals. Determine whether you need a Sharia-compliant Will or a DIFC/non-Muslim Will.",
    },
    {
      step: "Asset Inventory and Documentation",
      desc: "Prepare a comprehensive list of your assets, including Property (real estate in the UAE or abroad), Investments, Business shares or valuables.",
    },
    {
      step: "Drafting the Will",
      desc: "Your lawyer will draft a Will tailored to your requirements, ensuring compliance with UAE laws.",
    },
    {
      step: "Review and Approval",
      desc: "Review the draft carefully with your legal advisor to ensure accuracy and completeness.",
    },
    {
      step: " Legal Translation (if required)",
      desc: "In some cases, the Will may need to be translated into Arabic, the official language of the UAE, for court submissions.",
    },
    {
      step: "Will Registration",
      desc: "The next step depends on the type of Will and your specific circumstances.",
    },
    {
      step: "Finalization and Storage",
      desc: "Once registered, the Will becomes legally binding and enforceable. Store a copy in a secure location and inform your executor of its existence.",
    },
    {
      step: " Periodic Updates",
      desc: "Life circumstances change—marriage, children, or acquiring new assets may require updates to your Will.",
    },
    {
      step: "Timeline for Will Formation",
      desc: "The entire process typically takes 1-3 weeks, depending on the complexity of your asset and the chosen registration authority.",
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
    <div>
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>
            <Heading>
              Secure Your Legacy with Ease -{" "}
              <span className="text-lime-500">Will Formation Services</span>
            </Heading>
          </div>
          <p className="text-lg font-Satoshi mt-4">
            Creating a Will in the UAE is an essential step in ensuring your
            assets are protected, and your loved ones are provided for according
            to your wishes. Our expert Will formation service simplifies this
            process, offering peace of mind.
          </p>
          <Link href={"/contact"}>
            <Button className="mt-5">Get Expert Consultation</Button>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} alt="Hero" />
        </div>
      </div>

      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          Why a <span className="text-lime-500">Will is Essential</span> in the
          UAE?
        </Heading>
        <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-7">
          {willData.map((elem, index) => (
            <div key={index} className="w-full  rounded-lg bg-lime-100 p-5">
              <div>
                <div className="size-12 bg-lime-200 p-1 flex items-center justify-center rounded-full">
                  <img src={elem.icon} className="w-full h-full scale-[.8]" />
                </div>
              </div>
              <div>
                <h2 className="font-SplineSans mt-5 font-[600] text-xl">
                  {elem.title}
                </h2>
                <p className="mt-1 font-Satoshi">{elem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container w-full my-24">
        <Heading className="!text-center w-full">Our Expertise</Heading>
        <motion.div
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-5"
        >
          {expertise.map((elem, index) => (
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
              <div className="relative z-20">
                <p className="text-lg">
                  <span className="font-SplineSans font-[600]">
                    {elem.title}
                  </span>{" "}
                  {elem.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="bg-lime-100 py-14 my-24">
        <div className="container w-full ">
          <Heading className="!text-center w-full">
            Difference between <span className="text-lime-500">Muslim</span> and{" "}
            <span className="text-lime-500">Non-Muslim Wills</span>
          </Heading>
          <div className="w-full mt-9 grid grid-cols-1 lg:grid-cols-2 gap-7">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full bg-slate-50 border border-gray-300 rounded-lg p-5"
            >
              <h2 className="text-2xl text-center text-lime-800 font-SplineSans font-[600]">
                {nonMuslimDifference.title}
              </h2>
              <p className="mt-3 font-Satoshi">{nonMuslimDifference.desc}</p>
              <div className="mt-6">
                {nonMuslimDifference.points.map((elem, index) => (
                  <div key={index} className="mt-4 flex items-start gap-2">
                    <div>
                      <div className="size-2 bg-lime-700 mt-2 rounded-full" />
                    </div>
                    <p className="font-Satoshi text-md">
                      <span className="font-SplineSans font-[500]">
                        {elem.title}
                      </span>{" "}
                      {elem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full bg-slate-50 border border-gray-300 rounded-lg p-5"
            >
              <h2 className="text-2xl text-center text-lime-800 font-SplineSans font-[600]">
                {muslimDifference.title}
              </h2>
              <p className="mt-3 font-Satoshi">{muslimDifference.desc}</p>
              <div className="mt-6">
                {muslimDifference.points.map((elem, index) => (
                  <div key={index} className="mt-4 flex items-start gap-2">
                    <div>
                      <div className="size-2 bg-lime-700 mt-2 rounded-full" />
                    </div>
                    <p className="font-Satoshi text-md">
                      <span className="font-SplineSans font-[500]">
                        {elem.title}
                      </span>{" "}
                      {elem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="container w-full mt-14">
          <table className="w-full border-collapse mt-10 border border-gray-300">
            <thead className="w-full  bg-lime-700 ">
              <tr className="w-full ">
                {relTableHead.map((item, index) => (
                  <th
                    key={index}
                    className="border  border-slate-950 py-2 px-5"
                  >
                    <div className="w-full text-lime-100 text-start capitalize font-SplineSans text-lg  ">
                      {item}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {relTableBody.map((item, index) => (
                <tr key={index} className="border border-slate-950 w-full">
                  <td className=" py-2 border border-gray-950 ">
                    <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                      {item.title}
                    </div>
                  </td>
                  <td className=" py-2 border border-gray-950 ">
                    <div className="flex items-start gap-2 font-Satoshi text-lg text-[#152b0c] justify-start px-5 ">
                      <div>
                        <MdLabelImportant className="text-amber-800 mt-1" />
                      </div>
                      <div>{item.nonMuslim}</div>
                    </div>
                  </td>
                  <td className=" py-2 border border-gray-950 ">
                    <div className="flex items-start gap-2 font-Satoshi text-lg text-[#152b0c] justify-start px-5 ">
                      <div>
                        <MdLabelImportant className="text-amber-800 mt-1" />
                      </div>
                      <div>{item.muslim}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          Advantages of <span className="text-lime-500">Will Formation</span> in
          the UAE
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-8">
          {willBenefits.map((elem, index) => (
            <div key={index} className="p-5 rounded-md bg-lime-200">
              <h2 className="font-SplineSans text-xl font-[600]">
                {elem.title}
              </h2>
              <p className="font-Satoshi font-[500] mt-2">{elem.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container w-full my-24">
        <div className="mt-10 grid grid-cols-1 gap-5">
          {willFormationSteps.map((item, index) => (
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
                {item.step}
              </p>
              <p className="font-Satoshi text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Banner
        title={"Secure Your Future Today"}
        desc={
          "Take control of your legacy and protect your loved ones. Contact us to begin your Will formation proces. Don’t wait—planning ahead ensures peace of mind for you and your family."
        }
      />
    </div>
  );
};
const RealEstateInvestment = () => {
  const realEstateData = [
    {
      icon: "media/Will Formation icon/growth.png",
      title: "Stable and Long-Term Growth",
      desc: "Real estate is a proven, long-term investment that offers stability and consistent returns.",
    },
    {
      icon: "media/Will Formation icon/diverse.png",
      title: "Diversification",
      desc: "Real estate allows you to diversify your investment portfolio, reducing risks and providing new avenues for growth.",
    },
    {
      icon: "media/Will Formation icon/passive-income.png",
      title: "Passive Income",
      desc: "Rental properties generate regular income, offering financial security through cash flow.",
    },
    {
      icon: "media/Will Formation icon/feedback.png",
      title: "Appreciation Potential",
      desc: "Property values increase over time, providing potential for capital gains when you sell.",
    },
  ];

  const investmentsTypes = [
    {
      title: "Residential Properties",
      desc: "Residential real estate remains one of the most bought investment types in the UAE. Investors can choose from a variety of property types, such as:",
      points: [
        {
          title: "Apartments",
          desc: "Invest in high-demand apartments in cities like Dubai, Abu Dhabi, or Sharjah, offering great rental yields, particularly in prime locations",
        },
        {
          title: "Villas and Townhouses",
          desc: "Spacious villas and townhouses are ideal for family living, attracting long-term tenants.",
        },
        {
          title: "Off-Plan Properties",
          desc: "Off-plan or pre-construction properties offer the potential for significant capital appreciation.",
        },
        {
          title: "Luxury Real Estate",
          desc: "Luxury villas and high-end apartments in prestigious locations such as Palm Jumeirah,Dubai Marina, and the Abu Dhabi Corniche are popular among high-net-worth individuals",
        },
      ],
    },
    {
      title: "Commercial Properties",
      desc: "Commercial real estate provides opportunities for higher returns, with properties that can cater to businesses and corporate clients",
      points: [
        {
          title: "Office Spaces",
          desc: "Prime office buildings in business hubs like Dubai’s Business Bay, DIFC, and Abu Dhabi’s CBD offer long-term rental income and attract corporate tenants.",
        },
        {
          title: "Retail Spaces",
          desc: "Shopping malls, showrooms, and retail stores give foot traffic, providing a steady rental income.",
        },
        {
          title: "Industrial Properties",
          desc: "Warehouses, logistics centers, and manufacturing units are ideal for businesses looking to set up operations.",
        },
      ],
    },
    {
      title: "Real Estate Investment Trusts (REITs)",
      desc: "For investors who prefer to invest in real estate without the hassle of property management, REITs are an attractive option.",
    },
    {
      title: "Off-Plan Developments (Pre-Construction Projects)",
      desc: "Investing in off-plan properties allows you to purchase real estate before it is built, typically at lower prices than completed properties.",
    },
    {
      title: "Vacation and Holiday Homes",
      desc: "With tourism being a significant part of the UAE’s economy, vacation homes are a profitable investment option.",
    },
    {
      title: " Land Investments",
      desc: "Investing in land is an option for those looking for long-term capital appreciation.",
      points: [
        {
          title: "Developable Land",
          desc: " Developable land is for residential, commercial, or industrial projects. It is a major focus in urban areas like Dubai, Abu Dhabi, and Sharjah.",
        },
        {
          title: "Agricultural Land",
          desc: "Agricultural land is used or intended for farming activities, including crop production or livestock farming.",
        },
      ],
    },
    {
      title: " Hotel Investments",
      desc: "The UAE`s thriving hospitality sector provides opportunities for investors in hotels and resorts.",
    },
  ];
  const services = [
    {
      title: "Real Estate Investments",
      desc: "Invest in high-growth properties locally and internationally, with expert advice on:",
      points: [
        "Residential and commercial properties.",
        "Off-plan developments and REITs (Real Estate Investment Trusts).",
        "Property management and rental income optimization.",
      ],
    },
    {
      title: "Portfolio Management",
      desc: "Our team develops and manages diversified portfolios tailored to your financial objectives.",
      points: [
        "Risk assessment and mitigation.",
        "Investment in stocks, bonds, and mutual funds.",
        "Regular performance reviews and rebalancing.",
      ],
    },
    {
      title: "Wealth Planning",
      desc: "Secure your financial future with:",
      points: [
        "Retirement and succession planning.",
        "Tax-efficient investment strategies.",
        "Long-term growth and wealth preservation.",
      ],
    },
    {
      title: "Investment Advisory",
      desc: "Get expert advice and insights to make confident decisions, whether for personal investments or business growth.",
      points: [],
    },
  ];
  const topLocations = [
    {
      img: "https://images.unsplash.com/photo-1718975662468-83ba6a24b5d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Downtown Dubai",
      desc: "Known as the heart of Dubai, Downtown is home to iconic landmarks like Burj Khalifa and The Dubai Mall. Offers high-end residential units, commercial properties, and hospitality investments.",
    },
    {
      img: "https://media.istockphoto.com/id/827901014/photo/dubai-marina-city-skyline-in-the-united-arab-emirates.jpg?s=612x612&w=0&k=20&c=IZNEwPuR2-oAdjDEiimLvvCrntxBqCkMvDXM0uDvnRk=",
      title: "Dubai Marina",
      desc: "One of Dubai`s most popular residential and tourist locations with stunning waterfront views. Excellent for both investors looking for rental income and those seeking capital appreciation.",
    },
    {
      img: "https://blog.sothebysrealty.ae/hubfs/Imported_Blog_Media/a8e16726-b773-404e-9bef-dc26e0b13270.jpg",
      title: "Palm Jumeirah",
      desc: "The world-famous man-made island, known for its luxury villas and resorts. Offers exclusivity, high-end living, and premium investment opportunities.",
    },
    {
      img: "https://arbabhomes.com/wp-content/uploads/2023/12/Jumeirah-Beach-Residence.jpg",
      title: "Jumeirah Beach Residence (JBR)",
      desc: "A prime location for beachfront living, offering luxury apartments with direct beach access. Popular with tourists and residents looking for vibrant lifestyles and convenient amenities.",
    },
    {
      img: "https://colliers.ae/wp-content/uploads/2024/03/bb-3-1024x1024.jpg",
      title: "Business Bay",
      desc: "Known as Dubai’s central business district, offering a mix of commercial, residential, and retail properties. Excellent for long-term office space investments due to its proximity to Downtown Dubai and the Dubai Canal.",
    },
    {
      img: "https://static.propsearch.ae/dubai-locations/dubai-hills-estate_fV6VG_xl.jpg",
      title: "Dubai Hills Estate",
      desc: "A family-friendly community with vast green spaces, schools, and amenities. Located near key destinations like Downtown Dubai and Dubai Marina, offering both convenience and tranquillity.",
    },
    {
      img: "https://d3h330vgpwpjr8.cloudfront.net/x/1773x/dubai_creek_harbour_788a9f98e3.webp",
      title: "Dubai Creek Harbour",
      desc: "A massive new development project along the Dubai Creek, offering residential, retail, and hospitality opportunities. Excellent for long-term investors as the area continues to grow and mature.",
    },
    {
      img: "https://encity.co/wp-content/uploads/2022/06/Dubai-Silicon-Oasis.jpeg",
      title: "Dubai Silicon Oasis",
      desc: "A technology and innovation hub, ideal for investors in commercial and industrial real estate. Offers office spaces and technology-focused facilities in a modern, well-connected environment.",
    },
  ];

  const TableHead = ["Investor Type", "Required Documents"];
  const TableBody = [
    {
      title: "Individual Investor",
      docs: [
        "Passport Copy (Valid for at least 6 months)",
        "Resident Visa Copy (If applicable)",
        "Emirates ID Copy (For UAE residents)",
        "Proof of Address (Utility bills, bank statements, or tenancy contracts)",
        "No Objection Certificate (NOC) (From employer, if employed in the UAE)",
        "Bank Statement (Showing proof of funds and financial stability)",
        "Power of Attorney (If applicable, in case of a representative making the investment on your behalf)",
        "Income Proof (Salary slips, tax returns, or other income-related documents)",
      ],
    },
    {
      title: "Corporate Investor",
      docs: [
        "Company Trade License (Copy of the trade license)",
        "Company Memorandum & Articles of Association (In case of a limited liability company (LLC))",
        "Company Registration Certificate (Certificate of incorporation)",
        "Passport Copies (Of directors and authorized signatories)",
        "Emirates ID Copies (For UAE-based company directors and signatories)",
        "Board Resolution (Authorizing the company to invest in real estate)",
        "Power of Attorney (If applicable, for representatives acting on behalf of the company)",
        "Bank Statement (For the company to prove the financial capacity for the investment)",
      ],
    },
    {
      title: "Foreign Investor",
      docs: [
        "Passport Copy (Valid for at least 6 months)",
        "Visa Copy (If applicable, especially if staying in the UAE on a residency visa)",
        "Proof of Funds (Bank statements or other documents showing the source of investment funds)",
        "Power of Attorney (If applicable, for a representative to act on your behalf)",
        "No Objection Certificate (NOC) (If required by the UAE Government or developer for foreign investors)",
      ],
    },
    {
      title: "Non-Resident Investor",
      docs: [
        "Passport Copy (Valid for at least 6 months)",
        "Proof of Address (Documents such as utility bills, bank statements, etc.)",
        "No Objection Certificate (NOC) (If applicable for non-residents to invest in certain areas or developments)",
        "Power of Attorney (If a third party is handling the investment)",
        "Bank Statement (To prove financial capability and funds for the investment)",
      ],
    },
  ];

  return (
    <div>
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>
            <Heading>
              <span className="text-lime-500">Unlock</span> the Potential of{" "}
              <span className="text-lime-500">Property Investment</span> in UAE
            </Heading>
          </div>
          <p className="text-lg font-Satoshi mt-4">
            At Real Estate Investment Services, we provide expert guidance and
            opportunities to help you build, grow, and protect your wealth
            through property investments. Whether you`re a first-time investor
            or a professional, we offer a range of services to meet your needs.
          </p>
          <Link href={"/contact"}>
            <Button className="mt-5">Get Expert Consultation</Button>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} alt="Hero" />
        </div>
      </div>

      <div className="mt-24 py-14 bg-lime-100">
        <div className="w-full container">
          <Heading className="!text-center w-full">
            Why Invest in <span className="text-lime-700">Real Estate?</span>
          </Heading>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
            {realEstateData.map((item, index) => (
              <div key={index} className="p-3 bg-lime-200 rounded-xl">
                <div>
                  <div className="size-10 bg-lime-400 p-2 flex items-center justify-center rounded-full">
                    <img src={item.icon} className="" />
                  </div>
                </div>
                <div>
                  <h2 className="font-SplineSans text-lime-900 mt-8 text-xl font-[600]">
                    {item.title}
                  </h2>
                  <p className="font-Satoshi mt-1 font-[400]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-24 py-14 w-full ">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Types of{" "}
            <span className="text-lime-500">Real Estate Investments</span> in
            the UAE
          </Heading>
          <div className="mt-8 grid gric-cols-1 gap-1">
            {investmentsTypes.map((item, index) => (
              <div key={index} className="py-4 border-b border-lime-800">
                <h1 className="text-xl font-SplineSans font-[600]">
                  <span className="text-lime-700">
                    {index + 1} {".) "}
                  </span>{" "}
                  {item.title}
                </h1>
                <p className="mt-1">{item.desc}</p>
                {item.points
                  ? item.points.map((point, index) => (
                      <div key={index} className="flex mt-2 items-start gap-2">
                        <div className="mt-2">
                          <div className="size-2 bg-lime-700 rounded-full" />
                        </div>
                        <div>
                          <p className="font-splineSans font-[500]">
                            {point.title}
                          </p>
                          <p>{point.desc}</p>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-24 w-full">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Top <span className="text-indigo-400">Locations</span> for{" "}
            <span className="text-lime-500">Real Estate Investment</span> in UAE
          </Heading>
          <div className="mt-9 grid grid-cols-4 gap-6">
            {topLocations.map((location, id) => (
              <div key={id} className="mt-4">
                <div className="aspect-square w-full bg-lime-600">
                  <img
                    src={location.img}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-SplineSans mt-2 text-lg">
                  {location.title}
                </h2>
                <p className="font-Satoshi ">{location.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full my-24">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Our <span className="text-lime-500">Services</span>
          </Heading>
          <div className="grid mt-9 grid-cols-1 lg:grid-cols-4 gap-3">
            {services.map((service, index) => (
              <div key={index} className="p-4 bg-lime-200 rounded-lg">
                <h2 className="text-xl font-[600] font-SplineSans">
                  {service.title}
                </h2>
                <div className="mt-2">
                  <p className="font-Satoshi">{service.desc}</p>
                  {service.points ? (
                    <div className="mt-3">
                      {service.points.map((point, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="mt-3">
                            <div className="size-2 rounded-full bg-lime-700" />
                          </div>
                          <p className="mt-1 font-Satoshi font-[500]">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-24 w-full">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Documents Required for{" "}
            <span className="text-lime-500">Real Estate Investment</span>
          </Heading>
          <div className="mt-14">
            <table className="w-full border-collapse mt-10 border border-gray-300">
              <thead className="w-full  bg-lime-700 ">
                <tr className="w-full ">
                  {TableHead.map((item, index) => (
                    <th
                      key={index}
                      className="border  border-slate-950 py-2 px-5"
                    >
                      <div className="w-full text-lime-100 text-start capitalize font-SplineSans text-lg  ">
                        {item}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {TableBody.map((item, index) => (
                  <tr key={index} className="border border-slate-950 w-full">
                    <td className=" py-2 border border-gray-950 ">
                      <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                        {item.title}
                      </div>
                    </td>
                    <td className=" py-2 border border-gray-950 ">
                      {item.docs.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 font-Satoshi text-lg text-[#152b0c] justify-start px-5 "
                        >
                          <div>
                            <MdLabelImportant className="text-lime-800 mt-1" />
                          </div>
                          <div>{doc}</div>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Banner
        title={"Get Started Today!"}
        desc={
          "Ready to invest in real estate? Contact us for a free consultation and begin your journey to building wealth through property investments."
        }
      />
    </div>
  );
};
const WealthManagement = () => {
  const wealthServices = [
    {
      icon: "media/Will Formation icon/investment.png",
      title: "Personalized Investment Management",
      desc: "Diversified portfolios customized to the UAE market, global equities, and alternative investments.",
    },
    {
      icon: "media/Will Formation icon/taxPlanning.png",
      title: "Tax Planning & Optimization",
      desc: "Strategies to reduce tax liabilities, considering both UAE and international tax regulations.",
    },
    {
      icon: "media/Will Formation icon/retirement-planning.png",
      title: "Financial & Retirement Planning",
      desc: "Plans to optimize savings and investments for a comfortable and secure retirement.",
    },
    {
      icon: "media/Will Formation icon/agent.png",
      title: "Estate & Succession Planning",
      desc: "Guidance on how to pass on your wealth according to your will and minimize estate taxes.",
    },
    {
      icon: "media/Will Formation icon/risk.png",
      title: "Risk Management & Insurance Solutions",
      desc: "Insurance coverage options to protect your wealth and assets.",
    },
    {
      icon: "media/Will Formation icon/business.png",
      title: "Business Succession & Transition Planning",
      desc: "Strategic planning for business owners to ensure smooth succession and wealth transfer.",
    },
  ];

  const selfPraise = [
    {
      title: "Local Expertise",
      desc: "With a deep understanding of UAE regulations and financial opportunities, we provide insights that are directly relevant to your needs.",
    },
    {
      title: "Personalized Service",
      desc: "We work closely with you to create custom wealth management strategies that reflect your personal goals and values.",
    },
    {
      title: "Global Reach",
      desc: "Our wealth management solutions take into account global investment opportunities, ensuring that your wealth is well-positioned on the international stage.",
    },
    {
      title: "Customized Solutions",
      desc: "We offer a full range of wealth management services, including investment management, tax planning, retirement planning, and estate strategies.",
    },
    {
      title: "Confidentiality & Trust",
      desc: "Your privacy is secured. We maintain the highest standards of confidentiality and ensure that your wealth is managed with utmost care.",
    },
  ];

  const ourApproachStep = [
    {
      title: "Comprehensive Financial Planning",
      desc: "We start by evaluating your financial situation in its entirety from income and expenses to investments, taxes, and retirement plans. With this full picture, we develop a financial plan that aligns with your long-term goals.",
    },
    {
      title: "Investment Management",
      desc: "Our team of experts works closely with you to design and implement a personalized investment strategy that balances risk and opportunity. Whether you`re focused on long-term growth, income generation, or capital preservation, we provide custom investment solutions that evolve as your needs change.",
    },
    {
      title: "Retirement Planning",
      desc: "Preparing for retirement is a journey that requires thoughtful planning. We guide you through the process, helping you build and manage retirement accounts, optimize savings, and ensure you have the income needed for a comfortable retirement.",
    },
    {
      title: "Tax Optimization",
      desc: "Our wealth management services include tax planning, ensuring that you are making the most of tax-efficient investment strategies, and checking for opportunities to minimize your tax liabilities.",
    },
    {
      title: "Estate Planning",
      desc: "We help you develop a strategy to preserve and pass on your wealth according to your wishes. From wills and trusts to charitable giving and business succession, we guide you through every step of estate planning.",
    },
    {
      title: "Risk Management",
      desc: "Understanding your insurance and protection needs is crucial. Our team evaluates your current coverage and recommends strategies to mitigate potential risks, ensuring that both your assets and loved ones are protected.",
    },
  ];

  const TableHead = ["Document Type", "Details"];
  const TableBody = [
    {
      title: "Personal Identification",
      docs: [
        "Passport Copy (valid for at least 6 months)",
        "Emirates ID (for UAE residents)",
        "Visa Copy (for expatriates)",
        "Proof of Address (e.g., utility bills, rental agreement, or bank statement within the last 3 months)",
        "Passport-sized Photographs",
      ],
    },
    {
      title: "Financial Information",
      docs: [
        "Salary/Income Statements (recent payslips or income certificates)",
        "Bank Statements (typically for the last 3 to 6 months)",
        "Tax Returns or Tax Residency Certificates (if applicable)",
        "Proof of Other Income Sources (e.g., investment income, rental income, business profits)",
      ],
    },
    {
      title: "Investment Portfolio & Assets",
      docs: [
        "Investment Account Statements (e.g., stocks, bonds, mutual funds, etc.)",
        "Real Estate Documents (property ownership or rental agreements, mortgage documents)",
        "Insurance Policies (health, life, property insurance details)",
        "Pension Plans (retirement account details)",
        "Bank Account Statements (current and savings accounts)",
      ],
    },
    {
      title: "Business Ownership (If Applicable)",
      docs: [
        "Business Registration and Ownership Documents (e.g., trade license, articles of association)",
        "Financial Statements (e.g., profit and loss, balance sheets)",
        "Business Bank Statements (corporate accounts)",
      ],
    },
    {
      title: "Estate Planning & Succession",
      docs: [
        "Will or Trust Documents (if available)",
        "Power of Attorney (for financial or healthcare decisions)",
        "Beneficiary Designations (e.g., on retirement accounts, life insurance policies)",
        "Marriage and Birth Certificates (for family-related estate planning)",
      ],
    },
    {
      title: "Risk Management Documents",
      docs: [
        "Life and Health Insurance Policies (details of coverage)",
        "Other Insurance Documents (e.g., property, liability, business insurance)",
      ],
    },
    {
      title: "International Client Documents",
      docs: [
        " Tax Residency Certificate (if applicable, for tax obligations in home country)",
        "Foreign Investment Statements (for assets held outside the UAE)",
        "International Wills or Trusts (if applicable)",
      ],
    },
    {
      title: "Financial Goals & Objectives",
      docs: [
        " Short-Term and Long-Term Financial Goals (retirement, education, home purchase, etc.)",
        "Risk Tolerance (comfort level with different investment risks)",
        "Preferred Investment Preferences (ethical investing, alternative investments, etc.)",
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
    <div>
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>
            <Heading>
              Empower Your Financial Future with our{" "}
              <span className="text-lime-500">Wealth Management Services</span>
            </Heading>
          </div>
          <p className="text-lg font-Satoshi mt-4">
            We provide wealth management services customized to help
            individuals, families, and institutions achieve their financial
            goals. Our team of experienced professionals offers expert advice
            and personalized strategies that cater to your unique needs,
            ensuring your wealth is managed effectively, grows over time, and
            provides you with peace of mind.
          </p>
          <Link href={"/contact"} className="mt-5">
            <Button>Get Expert Consultation</Button>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} alt="Hero" />
        </div>
      </div>
      <div className="w-full my-24">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Why <span className="text-lime-500">Wealth Management</span> in the
            UAE?
          </Heading>
          <p className="font-Satoshi">
            The UAE offers a wealth of opportunities for those looking to grow
            and protect their assets. With a favourable tax environment, a
            dynamic economy, and access to global financial markets, it’s no
            wonder that so many individuals and families turn to wealth
            management services to help them navigate through it. <br />{" "}
            However, managing wealth in the UAE also comes with its own unique
            set of challenges, including local regulations, international tax
            considerations, and currency risks. Our wealth management services
            are designed to address these challenges and provide you with clear
            solutions to secure your financial future.
          </p>
        </div>
      </div>
      <div className="w-full my-24">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Our <span className="text-lime-500">Wealth Management</span>{" "}
            Services
          </Heading>
          <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-7">
            {wealthServices.map((elem, index) => (
              <div key={index} className="w-full  rounded-lg bg-lime-100 p-5">
                <div>
                  <div className="size-12 bg-lime-200 p-1 flex items-center justify-center rounded-full">
                    <img
                      src={elem?.icon}
                      className="w-full h-full scale-[.8]"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="font-SplineSans mt-5 font-[600] text-xl">
                    {elem.title}
                  </h2>
                  <p className="mt-1 font-Satoshi">{elem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full my-24">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Why <span className="text-lime-500">Choose</span> us?
          </Heading>
          <motion.div
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-5"
          >
            {selfPraise.map((elem, index) => (
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
                <div className="relative z-20">
                  <p className="text-lg">
                    <span className="font-SplineSans font-[600]">
                      {elem.title}
                    </span>{" "}
                    {elem.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full my-24">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Our <span className="text-lime-500">Approach</span>{" "}
          </Heading>
          <div className=" w-full ">
            <div className="mt-10 grid grid-cols-1 gap-5">
              {ourApproachStep.map((item, index) => (
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
        </div>
      </div>
      <div className="my-24 w-full">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Documents Required for{" "}
            <span className="text-lime-500">Real Estate Investment</span>
          </Heading>
          <div className="mt-14">
            <table className="w-full border-collapse mt-10 border border-gray-300">
              <thead className="w-full  bg-lime-700 ">
                <tr className="w-full ">
                  {TableHead.map((item, index) => (
                    <th
                      key={index}
                      className="border  border-slate-950 py-2 px-5"
                    >
                      <div className="w-full text-lime-100 text-start capitalize font-SplineSans text-lg  ">
                        {item}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {TableBody.map((item, index) => (
                  <tr key={index} className="border border-slate-950 w-full">
                    <td className=" py-2 border border-gray-950 ">
                      <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                        {item.title}
                      </div>
                    </td>
                    <td className=" py-2 border border-gray-950 ">
                      {item.docs.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 font-Satoshi text-lg text-[#152b0c] justify-start px-5 "
                        >
                          <div>
                            <MdLabelImportant className="text-lime-800 mt-1" />
                          </div>
                          <div>{doc}</div>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Banner
        title={"Get Started with Wealth Management in the UAE"}
        desc={
          "Are you ready to secure your financial future in the UAE? Let us guide you through the complexities of wealth management and help you achieve your financial goals. Schedule a consultation with our experts today."
        }
      />
    </div>
  );
};
const NomineeDirectory = () => {
  const whyChoose = [
    {
      icon: "/media/Will Formation icon/balance.png",
      title: "Compliance with Local Laws",
      desc: "The UAE requires that businesses, particularly foreign-owned companies, have a local director or a local partner to meet regulatory requirements.",
    },
    {
      icon: "/media/Will Formation icon/shield.png",
      title: "Privacy Protection",
      desc: "A nominee director allows foreign business owners to keep their personal information confidential while complying with local laws.",
    },
    {
      icon: "/media/Will Formation icon/check.png",
      title: "Easy Business Operations",
      desc: "You retain full control of your business and its operations, while we handle the formalities of directorship.",
    },
    {
      icon: "/media/Will Formation icon/resilience.png",
      title: "Flexibility in Ownership",
      desc: "Nominee director services ensure you can operate your business without the complexities of managing local partnerships or handling legal issues directly.",
    },
    {
      icon: "/media/Will Formation icon/governance.png",
      title: "Corporate Governance",
      desc: "Your company remains fully compliant with the UAE’s business laws, including the requirement for corporate governance, board meetings, and other mandatory filings.",
    },
  ];
  const NomineeBenefits = [
    {
      title: "Experienced Professionals",
      desc: "Our team is made up of skilled and qualified individuals with in-depth knowledge of local laws and regulations.",
    },
    {
      title: "Full Legal Compliance",
      desc: "We ensure that all your company’s corporate governance requirements are met, helping you avoid penalties or fines.",
    },
    {
      title: "No Interference in Operations",
      desc: "You retain full control over the business operations, while we manage the formalities of directorship.",
    },
    {
      title: "Privacy Assurance",
      desc: "Our nominee directors act in a formal capacity, protecting your privacy and interests.",
    },
    {
      title: "Minimal Legal Risk",
      desc: "By appointing a nominee director, you reduce personal exposure to liabilities while ensuring the business is legally structured.",
    },
    {
      title: "Full Control",
      desc: "While the nominee director holds the official position, you retain complete control over the decision-making and operations of the business.",
    },
    {
      title: "Local Representation",
      desc: "The nominee director can act as the official representative of the company in meetings, filings, and official documentation required by the UAE authorities.",
    },
  ];
  const nomineeDirectorProcess = [
    {
      title: "Consultation",
      desc: "Discuss your business requirements with us to determine if a nominee director is the right solution for your company.",
    },
    {
      title: "Selection of Nominee Director",
      desc: "We will assign an experienced UAE-based nominee director to your company, who will act in a formal capacity and comply with all legal obligations.",
    },
    {
      title: "Legal Agreement",
      desc: "A clear agreement will be signed between you and the nominee director to define the role, responsibilities, and limitations of the nominee director`s involvement.",
    },
    {
      title: "Company Setup and Compliance",
      desc: "The nominee director will be officially listed with the UAE government, while you continue to manage the company’s operations without interference.",
    },
    {
      title: "Ongoing Support",
      desc: "We offer continuous legal and administrative support to ensure your business remains in good standing with UAE authorities.",
    },
  ];
  const tableHead = ["Document", "Description"];
  const tableBody = [
    {
      title: "Passport Copy (Nominee Director)",
      docs: "A clear copy of the nominee director`s valid passport for identification.",
    },
    {
      title: "Emirates ID (Nominee Director)",
      docs: "A copy of the nominee director`s Emirates ID (if they are UAE nationals).",
    },
    {
      title: "Proof of Residence (Nominee Director)",
      docs: "A recent utility bill or tenancy contract as proof of the nominee director’s residence in the UAE.",
    },
    {
      title: "Company Incorporation Documents",
      docs: "Copy of the company’s trade license or incorporation certificate.",
    },
    {
      title: "Shareholder Information",
      docs: "Details of the company’s shareholders, including copies of passports and proof of address (for verification).",
    },
    {
      title: "Board Resolution",
      docs: "A resolution from the company’s board of directors or shareholders appointing the nominee director.",
    },
    {
      title: "Power of Attorney",
      docs: "A power of attorney granting the nominee director the authority to act on behalf of the company (if applicable).",
    },
    {
      title: "Nominee Director Agreement",
      docs: "A formal agreement between the business owner and the nominee director outlining the terms and conditions of the appointment.",
    },
    {
      title: "Company Ownership Structure",
      docs: "Information on the ownership structure of the company, including details of the actual beneficial owners.",
    },
    {
      title: "Corporate Documents (if applicable)",
      docs: "For offshore or free zone companies, include the relevant certificates, licenses, and other documents required by the specific jurisdiction.",
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
    <div>
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>
            <Heading>
              Ensure your company remains Compliant with our{" "}
              <span className="text-lime-500">Nominee Director Service</span>
            </Heading>
          </div>
          <p className="text-lg font-Satoshi mt-4">
            At Biz Growth, we offer professional Nominee Director Services
            designed to ensure your company remains compliant, secure, and
            operates smoothly. Whether you`re a foreign investor or need a
            third-party director for privacy or confidentiality, our experienced
            team provides a reliable solution.
          </p>
          <Link href={"/contact"}>
            <Button className="mt-5">Get Expert Consultation</Button>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} alt="Hero" />
        </div>
      </div>
      <div className="w-full my-24">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            What is a <span className="text-lime-500">Nominee Director?</span>
          </Heading>
          <p className="font-Satoshi mt-3 text-center">
            A Nominee Director is an individual appointed to represent a company
            on paper while the actual management and control remain with the
            beneficial owner. The nominee director serves as a formal director
            in the company`s public records but does not have any real
            decision-making power or involvement in daily operations unless
            agreed otherwise. <br /> This service allows business owners,
            particularly foreign investors, to ensure legal compliance while
            protecting their privacy and limiting their exposure. In the UAE,
            many free zones and onshore company structures require a local
            director or shareholder to meet the legal and operational
            requirements of doing business. A nominee director is often used to
            fulfil this requirement while allowing the actual business owner to
            retain full control over the company’s operations.
          </p>
        </div>
      </div>
      <div className="w-full my-24">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Our <span className="text-lime-500">Wealth Management</span>{" "}
            Services
          </Heading>
          <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-7">
            {whyChoose.map((elem, index) => (
              <div key={index} className="w-full  rounded-lg bg-lime-100 p-5">
                <div>
                  <div className="size-12 bg-lime-200 p-1 flex items-center justify-center rounded-full">
                    <img
                      src={elem?.icon}
                      className="w-full h-full scale-[.8]"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="font-SplineSans mt-5 font-[600] text-xl">
                    {elem.title}
                  </h2>
                  <p className="mt-1 font-Satoshi">{elem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full my-24">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Why Choose{" "}
            <span className="text-lime-500">Nominee Director Services</span> in
            the UAE?
          </Heading>
          <motion.div
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-5"
          >
            {NomineeBenefits.map((elem, index) => (
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
                <div className="relative z-20">
                  <p className="text-lg">
                    <span className="font-SplineSans font-[600]">
                      {elem.title}
                    </span>{" "}
                    {elem.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full my-24">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            How Our{" "}
            <span className="text-lime-500">Nominee Director Service</span>{" "}
            Works in the UAE
          </Heading>
          <div className=" w-full ">
            <div className="mt-10 grid grid-cols-1 gap-5">
              {nomineeDirectorProcess.map((item, index) => (
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
        </div>
      </div>
      <div className="my-24 w-full">
        <div className="container w-full">
          <Heading className="!text-center w-full">
            Documents Required for{" "}
            <span className="text-lime-500">Appointing Nominee Director</span>
          </Heading>
          <div className="mt-14">
            <table className="w-full border-collapse mt-10 border border-gray-300">
              <thead className="w-full  bg-lime-700 ">
                <tr className="w-full ">
                  {tableHead.map((item, index) => (
                    <th
                      key={index}
                      className="border  border-slate-950 py-2 px-5"
                    >
                      <div className="w-full text-lime-100 text-start capitalize font-SplineSans text-lg  ">
                        {item}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {tableBody.map((item, index) => (
                  <tr key={index} className="border border-slate-950 w-full">
                    <td className=" py-2 border border-gray-950 ">
                      <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                        {item.title}
                      </div>
                    </td>
                    <td className=" py-2 border border-gray-950 ">
                      <div className="flex items-start gap-2 font-Satoshi text-lg text-[#152b0c] justify-start px-5 ">
                        <div>
                          <MdLabelImportant className="text-lime-800 mt-1" />
                        </div>
                        <div>{item.docs}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Banner
        title={"Contact Us Today!"}
        desc={
          "If you need a Nominee Director for your business or have any questions, reach out to our team today. We’re here to ensure your business operates smoothly, efficiently, and securely."
        }
      />
    </div>
  );
};

export default Page;
