"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import Button from "@/app/App_Chunks/Components/Button";
import { useSearchParams } from "next/navigation";
import Banner from "../App_Chunks/Components/Banner";
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
  switch (query) {
    case "PRO & Visa Services":
      return <VisaPro />;
    case "Attestation & Legalisation":
      return <Attestation />;
    case "Office space solution":
      return <OfficeSpace />;
    case "Product Registration":
      return <ProductRegistration />;
    case "Design & Marketing Services":
      return <DesignMarketing />;
    case "HR Solution":
      return <HrSolutions />;
    case "Corporate Structuring":
      return <CorporateStructuring />;
    default:
      return <div>No Data found</div>;
  }
};

const VisaPro = () => {
  const benefits = [
    {
      title: "Save Time and Focus on Your Business",
      description:
        "We handle time-consuming administrative tasks, allowing you to concentrate on your core business activities and strategies.",
    },
    {
      title: "Cost-Effective Solution",
      description:
        "Outsourcing PRO services eliminates the need for a full-time in-house team, saving you on recruitment, training, and overhead costs.",
    },
    {
      title: "Hassle-Free Compliance",
      description:
        "Stay compliant with UAE’s ever-evolving regulations. Our experts ensure your business meets all legal requirements without delays or penalties.",
    },
    {
      title: "Professional Expertise",
      description:
        "You can utilize our deep knowledge of UAE government processes and protocols to ensure your documentation and applications are handled accurately.",
    },
    {
      title: "Streamlined Processes",
      description:
        "Our established network with government authorities enables faster processing of approvals, visas, and licenses, minimizing processing time.",
    },
    {
      title: "Customized Support",
      description:
        "We provide solutions tailored to your business needs, whether you're a startup, SME, or multinational corporation.",
    },
    {
      title: "Confidentiality and Security",
      description:
        "Your business information is handled with utmost privacy, ensuring confidentiality and secure management of sensitive documents.",
    },
  ];
  const visaServices = [
    {
      title: "Employee Visas",
      docs: [
        "Processing and issuance of work visas for employees across all sectors.",
        "Visa extensions, cancellations, and transfers.",
      ],
    },
    {
      title: "Investor Visas",
      docs: [
        "Guidance and application assistance for investors and business owners.",
        "Long-term residency options for entrepreneurs.",
      ],
    },
    {
      title: "Family and Dependent Visas",
      docs: [
        "Sponsorship and visa applications for family members and dependents of employees or investors.",
        "Visa renewals and extensions for dependents.",
      ],
    },
    {
      title: "Visit and Tourist Visas",
      docs: [
        "Assistance with short-term visitor visas for tourists, business visits, and relatives.",
        "Processing entry permits and visa extensions.",
      ],
    },
    {
      title: "Residence Permits",
      docs: [
        "Issuance of UAE residency permits for employees, investors, and family members.",
        "Full management of the process from entry to final approval.",
      ],
    },
  ];
  const proServices = [
    {
      title: "Government Liaison",
      docs: [
        "We represent your business in dealings with government departments such as the Ministry of Labor, Immigration, and the Dubai Municipality.",
        "Handling all types of documentation required for business operations.",
      ],
    },
    {
      title: "Business Licensing and Renewal",
      docs: [
        "Assistance with the issuance, renewal, and amendment of trade licenses.",
        "Expert guidance on license modifications based on changing business activities.",
      ],
    },
    {
      title: "Document Attestation and Notarization",
      docs: [
        "Ensuring documents are legally recognized through attestation and notarization processes.",
        "Translation and certification of official documents for business use.",
      ],
    },
    {
      title: "Labor and Immigration Approvals",
      docs: [
        "Managing the process of obtaining labor cards, work permits, and immigration approvals.",
        "Timely renewals and cancellations of employee labor cards and residency permits.",
      ],
    },
    {
      title: "Corporate Formation and Setup",
      docs: [
        "Providing full support for business setup in mainland, free zones, and offshore locations.",
        "Consultation and guidance on all necessary documentation and legal requirements for new businesses.",
      ],
    },
    {
      title: "Document Submission and Collection",
      docs: [
        "Submitting required documents to government authorities on behalf of your business.",
        "Collecting completed documents and ensuring timely delivery to the client.",
      ],
    },
  ];

  const processSteps = [
    {
      step: "Initial Consultation",
      description:
        "We start by understanding your business requirements and specific needs. Whether you’re setting up a new business, handling employee visas, or ensuring compliance, we’ll discuss your objectives and tailor our services accordingly.",
    },
    {
      step: "Document Collection and Verification",
      description:
        "Once we know your needs, we’ll assist you in collecting all the necessary documents. This can include:",
      details: [
        "Business registration details",
        "Passport copies",
        "Proof of residence",
        "Trade license documents (for business-related services)",
      ],
    },
    {
      step: "Submission to Relevant Authorities",
      description:
        "After gathering all the necessary documentation, we’ll handle the submission process to the appropriate government departments such as the Ministry of Labor, Immigration Department, and others.",
    },
    {
      step: "Follow-up and Tracking",
      description:
        "We continuously track the status of your applications and proactively follow up with the authorities. Our close relationships with government bodies ensure quicker responses and approvals.",
    },
    {
      step: "Document Delivery and Final Approvals",
      description:
        "Once the necessary approvals and documents are obtained, we will collect them on your behalf and deliver them to you in a timely manner. This includes trade licenses, visas, labor cards, residency permits, and any other government-issued documents.",
    },
    {
      step: "Renewal and Ongoing Support",
      description:
        "Our service doesn’t end once the paperwork is completed. We offer ongoing support, including document renewal reminders and timely renewals for visas, trade licenses, and other government-related services.",
    },
    {
      step: "Additional Services and Customization",
      description:
        "We understand that every business is unique. As your business evolves, we can offer customized services tailored to any new requirements, such as adding new activities to your license, changes in ownership, or handling changes in employee status.",
    },
  ];

  const ourServices = [
    {
      icon: "media/Will Formation icon/shield.png",
      title: "Reliability",
      description:
        "We handle your business requirements with confidentiality and professionalism.",
    },
    {
      icon: "media/Will Formation icon/clear.png",
      title: "Clear and Transparent",
      description:
        "From the initial consultation to document collection and final approvals, we ensure that every step is clear and transparent.",
    },
    {
      icon: "media/Will Formation icon/fast.png",
      title: "Efficient and Fast",
      description:
        "Our team’s expertise ensures your documents are processed quickly, without unnecessary delays.",
    },
    {
      icon: "media/Will Formation icon/insurance.png",
      title: "Complete Compliance",
      description:
        "We guarantee that all documentation and procedures meet the legal standards of the UAE.",
    },
    {
      icon: "media/Will Formation icon/support.png",
      title: "Dedicated Support",
      description:
        "From the start to the end, our team is here to support you and provide you with the best advice and service.",
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
              Your <span className="text-lime-500">Trusted PRO Service</span>{" "}
              Consultant:{" "}
              <span className="text-indigo-400">
                Biz<span className="text-lime-400">Growth</span>
              </span>
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            Simplify your business operations and focus on growth while we
            handle your administrative needs with utmost efficiency. We deliver
            expert solutions to streamline your business operations and ensure
            compliance with local regulations.
          </p>
          <Button className="mt-5">Get Expert Consultation</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>

      <div className="mt-16">
        <Heading className="!text-center ">
          What Are <span className="text-lime-500 ">PRO Services?</span>
        </Heading>
        <p className="font-Satoshi container text-lg text-center mt-3">
          In the UAE, PRO (Public Relations Officer) services are essential for
          businesses to comply with government regulations. These services
          include handling legal documentation, liaising with government
          authorities, and ensuring timely completion of visa, labor, and trade
          license-related tasks.
        </p>
      </div>
      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          How Our <span className="text-lime-500">PRO Services</span> Will
          Benefit Your Business
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10">
          {benefits.map((beneift, index) => (
            <div
              key={index}
              className="w-full flex items-start gap-3 rounded-lg bg-lime-100 p-5"
            >
              <div>
                <div className="size-6  mt-[1px] rounded-full">
                  <img src={"media/mainland/checked.png"} />
                </div>
              </div>
              <div>
                <h2 className="font-SplineSans  font-[600] text-xl">
                  {beneift.title}
                </h2>
                <p className="mt-1 font-Satoshi">{beneift.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          Our <span className="text-lime-500">Visa</span> Services
        </Heading>
        <p className="font-Satoshi text-center mt-2">
          We offer a comprehensive range of visa services to meet the needs of
          companies and individuals in the UAE:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10">
          {visaServices.map((visa, index) => (
            <div key={index} className="w-full rounded-lg bg-indigo-100 p-5">
              <div>
                <h2 className="font-SplineSans  font-[600] text-xl">
                  {visa.title}
                </h2>
                <div className="mt-4">
                  {visa.docs.map((doc, index) => (
                    <div
                      key={index}
                      className="flex mt-2 font-Satoshi font-[500] items-start gap-2"
                    >
                      <div>
                        <div className="size-2 bg-indigo-700 rounded-full mt-2" />
                      </div>
                      <div className="">{doc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          Our <span className="text-lime-500">PRO</span> Services
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10">
          {proServices.map((pro, index) => (
            <div key={index} className="w-full rounded-lg bg-indigo-100 p-5">
              <div>
                <h2 className="font-SplineSans  font-[600] text-xl">
                  {pro.title}
                </h2>
                <div className="mt-4">
                  {pro.docs.map((doc, index) => (
                    <div
                      key={index}
                      className="flex mt-2 font-Satoshi font-[500] items-start gap-2"
                    >
                      <div>
                        <div className="size-2 bg-indigo-700 rounded-full mt-2" />
                      </div>
                      <div>{doc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                <span className="text-lime-500">PRO Services</span> Steps We
                Follow
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5">
              {processSteps.map((item, index) => (
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
                  <p className="font-SplineSans font-[500] text-xl mt-5">
                    {item.step}
                  </p>
                  <p className="font-Satoshi text-lg">{item.description}</p>
                  {item.details && (
                    <div>
                      {item.details.map((detail, index) => (
                        <div
                          key={index}
                          className="flex mt-2 font-Satoshi font-[500] items-start gap-2"
                        >
                          <div>
                            <div className="size-2 bg-lime-700 rounded-full mt-2" />
                          </div>
                          <div>{detail}</div>
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

      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          Why Choose Our <span className="text-lime-500">PRO</span> Services?
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10">
          {ourServices.map((service, index) => (
            <div key={index} className="w-full rounded-lg bg-lime-200 p-5">
              <div>
                <div className="size-14 p-3 overflow-hidden bg-lime-400 rounded-full">
                  <img src={service?.icon} />
                </div>
              </div>
              <div>
                <h2 className="font-SplineSans mt-6 font-[600] text-xl">
                  {service.title}
                </h2>
                <p className="mt-1 font-Satoshi">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Banner
        title={"Get in Touch with Us Today!"}
        desc={
          "Simplify your visa and PRO processes with the help of our experienced team. Whether you’re expanding your business or managing employee visas, we are here to support you every step of the way."
        }
      />
    </div>
  );
};
const Attestation = () => {
  const attestationServices = [
    {
      title: "Educational Document Attestation",
      description:
        "We assist in attesting academic documents for employment, higher education, or migration purposes.",
      documents: [
        "Degree certificates",
        "Diplomas and transcripts",
        "Transfer certificates",
        "Training certificates",
      ],
    },
    {
      title: "Personal Document Attestation",
      description:
        "For personal matters such as family sponsorship, marriage registration, or inheritance.",
      documents: [
        "Birth certificates",
        "Marriage certificates",
        "Divorce certificates",
        "Death certificates",
        "Police clearance certificates",
      ],
    },
    {
      title: "Commercial Document Attestation",
      description:
        "Critical for businesses expanding internationally or working with foreign partners.",
      documents: [
        "Trade licenses",
        "Memorandum of Association (MOA)",
        "Articles of Association (AOA)",
        "Power of Attorney (POA)",
        "Commercial invoices",
        "Certificate of incorporation",
      ],
    },
    {
      title: "Embassy and Consulate Legalization",
      description:
        "We manage the legalization process at embassies or consulates to ensure your documents are officially recognized in the destination country.",
    },
  ];

  const attestationProcessSteps = [
    {
      title: "Document Review",
      description:
        "We evaluate your documents and confirm the specific attestation and legalization requirements for your purpose.",
    },
    {
      title: "Collection and Preparation",
      description:
        "We assist in collecting the necessary documents and ensure they are ready for processing.",
    },
    {
      title: "Attestation by Authorities",
      description:
        "We manage attestation by local government departments, such as the Ministry of Foreign Affairs, and notary public offices.",
    },
    {
      title: "Embassy/Consulate Legalization",
      description:
        "For international use, we handle the legalization process at the relevant embassy or consulate.",
    },
    {
      title: "Final Delivery",
      description:
        "Once attestation and legalization are complete, we securely deliver your authenticated documents to you.",
    },
  ];

  const attestationQualities = [
    {
      icon: "media/Will Formation icon/team.png",
      title: "Experienced Team",
      description:
        "Years of expertise in handling attestation and legalization for various countries.",
    },
    {
      icon: "media/Will Formation icon/process.png",
      title: "Hassle-Free Process",
      description: "We manage the entire process from start to finish.",
    },
    {
      icon: "media/Will Formation icon/fast.png",
      title: "Fast Turnaround Time",
      description: "Swift processing to meet urgent deadlines.",
    },
    {
      icon: "media/Will Formation icon/earth.png",
      title: "Country-Specific Expertise",
      description:
        "Knowledge of the unique requirements of different countries.",
    },
    {
      icon: "media/Will Formation icon/shield.png",
      title: "Secure Handling",
      description:
        "Your documents are managed with utmost care and confidentiality.",
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
              <span className="text-lime-500">Attestation</span> and{" "}
              <span className="text-lime-500">Legalization</span> Services in
              the UAE
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            Welcome to BizGrowth, your trusted partner for professional
            attestation and legalization services. We make the complex process
            of authenticating your documents simple, fast, and hassle-free.
          </p>
          <Button className="mt-5">Contact us</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>
      <div className="container w-full mt-16">
        <div className="w-full">
          <div>
            <Heading className="!text-center">
              What is Document{" "}
              <span className="text-lime-500 ">Attestation</span> and
              <span className="text-lime-500">Legalization</span>
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            Document attestation and legalization involve verifying the
            authenticity of documents for official use in another country. These
            processes ensure that your documents are legally recognized by the
            relevant authorities, both locally and internationally.
          </p>
          <div className="mt-5 grid grid-cols-1 font-[600] text-lime-950 gap-6  font-SplineSans lg:grid-cols-2 ">
            <div className="bg-lime-300 p-3 rounded-lg">
              Attestation: Verification of a document by government authorities,
              notaries, and embassies.
            </div>
            <div className="bg-lime-300 p-3 rounded-lg">
              Legalization: Certifying documents through the embassy or
              consulate for use abroad.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                Our Services Include
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              {attestationServices.map((item, index) => (
                <div key={index} className="p-5 bg-lime-200 rounded-xl">
                  <h1 className="text-xl font-SplineSans text-lime-950 font-[600]">
                    {item.title}
                  </h1>
                  <p className="text-lg mt-3 font-Satoshi">
                    {item.description}
                  </p>
                  <div className="mt-3">
                    {item.documents &&
                      item.documents.map((item, index) => (
                        <div
                          key={index}
                          className="flex mt-2 font-Satoshi font-[500] items-start gap-2"
                        >
                          <div>
                            <div className="size-2 bg-lime-800 rounded-full mt-2" />
                          </div>
                          <div className="">{item}</div>
                        </div>
                      ))}
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
                Our <span className="text-lime-500">Process</span>
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5">
              {attestationProcessSteps.map((item, index) => (
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
                  <p className="font-Satoshi text-lg mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full my-24">
        <Heading className="!text-center w-full">
          Why Choose Our <span className="text-lime-500">PRO</span> Services?
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10">
          {attestationQualities.map((service, index) => (
            <div key={index} className="w-full rounded-lg bg-lime-200 p-5">
              <div>
                <div className="size-14 p-3 overflow-hidden bg-lime-400 rounded-full">
                  <img src={service?.icon} />
                </div>
              </div>
              <div>
                <h2 className="font-SplineSans mt-6 font-[600] text-xl">
                  {service.title}
                </h2>
                <p className="mt-1 font-Satoshi">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Banner
        title={"Contact Us for Attestation and Legalization Services"}
        desc={
          "Let us simplify the process for you. Contact us today to get started!."
        }
      />
    </div>
  );
};
const OfficeSpace = () => {
  const uaeBusinessAdvantages = [
    {
      icon: "media/Will Formation icon/location-pin.png",
      title: "Prime Location",
      description:
        "Situated at the crossroads of Europe, Asia, and Africa, the UAE provides unmatched access to international markets.",
    },
    {
      icon: "media/Will Formation icon/business.png",
      title: "Business-Friendly Environment",
      description:
        "The UAE offers tax advantages, free zones, and robust infrastructure, making it an attractive choice for entrepreneurs and corporations alike.",
    },
    {
      icon: "media/Will Formation icon/profit.png",
      title: "Diverse Economy",
      description:
        "Beyond oil, industries such as finance, tourism, technology, and trade thrive in the UAE, offering many opportunities.",
    },
    {
      icon: "media/Will Formation icon/welfare.png",
      title: "State-of-the-Art Facilities",
      description:
        "Modern skyscrapers, smart buildings, and advanced technology ensure your business can operate efficiently.",
    },
    {
      icon: "media/Will Formation icon/fitness.png",
      title: "Cultural and Lifestyle Appeal",
      description:
        "The UAE provides a high standard of living, a diverse culture, and safety, making it appealing to business owners and employees.",
    },
  ];

  const officeServices = [
    {
      title: "Work Space Search & Office Leasing",
      description:
        "Whether you need a small private office, a shared co-working environment, or a spacious corporate suite, we offer a wide range of leasing options tailored to your business.",
    },
    {
      title: "Workspace Design & Custom Buildouts",
      description:
        "Looking to create a workspace that reflects your brand and culture? Our team works with you to design and deliver custom office solutions that fit your vision.",
    },
    {
      title: "Flexible Terms",
      description:
        "We understand that businesses evolve. That’s why we offer flexible lease terms to accommodate your growth and changes.",
    },
    {
      title: "Virtual Offices",
      description:
        "Need a professional address without the physical office? We provide virtual office packages with mail handling, phone answering, and meeting room access.",
    },
    {
      title: "Facility Management",
      description:
        "We provide day-to-day management of office operations. Maintenance, cleaning, and security services are provided.",
    },
  ];

  const workspaceBenefits = [
    {
      title: "Boosts Productivity",
      description:
        "A well-designed workspace enhances focus and efficiency, allowing your team to perform at their best.",
    },
    {
      title: "Reflects Brand Identity",
      description:
        "Your office speaks volumes about your company culture and values, leaving a lasting impression on clients and employees.",
    },
    {
      title: "Enhances Collaboration",
      description:
        "The right layout encourages teamwork and innovation, essential for staying competitive in today’s market.",
    },
    {
      title: "Supports Employee Well-being",
      description:
        "The furniture, natural light, and thoughtful design contribute to a healthier, happier workforce.",
    },
    {
      title: "Enables Scalability",
      description:
        "Flexible office solutions allow your business to grow and adapt without unnecessary disruptions.",
    },
  ];

  const tableHeader = ["Document", "purpose"];
  const tableBody = [
    {
      document: "Trade License",
      purpose: "Permits the business to operate legally.",
    },
    {
      document: "Memorandum of Association (MOA)",
      purpose: "Outlines the company’s structure and activities.",
    },
    {
      document: "Tenancy Contract",
      purpose: "Proof of office space leasing.",
    },
    {
      document: "Ejari Certificate",
      purpose: "Confirms tenancy registration in the UAE.",
    },
    {
      document: "Passport Copies of Owners/Partners",
      purpose: "Identification of business stakeholders.",
    },
    {
      document: "Visa Copies",
      purpose: "Proof of legal residency in the UAE.",
    },
    {
      document: "Emirates ID",
      purpose: "Official identification for UAE residents.",
    },
    {
      document: "NOC from Sponsor (if applicable)",
      purpose: "Approval to start the business.",
    },
    {
      document: "Bank Reference Letter",
      purpose: "Verifies financial credibility.",
    },
    {
      document: "Power of Attorney (if applicable)",
      purpose: "Grants legal authority to a representative.",
    },
  ];

  return (
    <div className="w-full">
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>
            <Heading>
              BizGrowth Office Space Solutions – Your Partner in Workspace
              Success
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            At Office Space Solutions, we understand that your workspace is more
            than just a place to work – it’s where ideas thrive, businesses
            grow, and connections are made. We’re committed to helping you find
            the perfect office space to meet your needs.
          </p>
          <Button className="mt-5">Get Expert Consultation</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>
      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                Why Choose Office Space in the UAE?
              </Heading>
              <p className="text-center font-Satoshi">
                The UAE is a global hub for innovation, commerce, and
                connectivity, making it an ideal location for businesses of all
                sizes.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {uaeBusinessAdvantages.map((item, index) => (
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
                    <p className="mt-1 font-Satoshi">{item.description}</p>
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
              <Heading className="!text-center w-full">Our Services</Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {officeServices.map((item, index) => (
                <div key={index} className="p-5 bg-lime-200 rounded-xl">
                  <h1 className="text-xl font-SplineSans text-lime-950 font-[600]">
                    {item.title}
                  </h1>
                  <p className="text-lg mt-3 font-Satoshi">
                    {item.description}
                  </p>
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
                Why Office Space Matters in the UAE?
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {workspaceBenefits.map((item, index) => (
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
                    <p className="mt-1 font-Satoshi">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container w-full my-24">
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
                    {item.document}
                  </div>
                </td>
                <td className=" py-2 border border-gray-300 ">
                  <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                    {item.purpose}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Banner
        title={"Get Started Today"}
        desc={
          "Transform your office experience with Office Space Solutions. Contact us for a free consultation and explore how we can support your business’s growth."
        }
      />
    </div>
  );
};
const ProductRegistration = () => {
  const uaeProductRegistrationBenefits = [
    {
      benefit: "Compliance with UAE Regulations",
      description:
        "Product registration is mandatory in the UAE for all consumer products, including food, cosmetics, pharmaceuticals, and more. It ensures compliance with government standards and guarantees that only safe and high-quality products are sold in the market.",
    },
    {
      benefit: "Access to the UAE Market",
      description:
        "Without proper registration, your products cannot be legally imported, distributed, or sold in the UAE. Registering your product opens the door to one of the most dynamic markets in the world.",
    },
    {
      benefit: "Consumer Trust and Safety",
      description:
        "Product registration involves rigorous testing and evaluation by government authorities. This process helps protect consumers from counterfeit, harmful, or substandard products, giving trust and confidence in your brand.",
    },
    {
      benefit: "Brand Credibility and Reputation",
      description:
        "A registered product demonstrates your commitment to quality and adherence to international standards. It enhances your brand’s reputation and credibility, giving you a competitive edge in the UAE market.",
    },
    {
      benefit: "Legal Protection",
      description:
        "Registered products are protected under UAE law. This safeguards your brand from counterfeiters and unauthorized sales, ensuring that your intellectual property is secure.",
    },
    {
      benefit: "Simplifies Customs Clearance",
      description:
        "Product registration simplifies the customs clearance process for imports. With the necessary approvals, your shipments will move more efficiently through UAE ports and borders, reducing delays and additional costs.",
    },
    {
      benefit: "Eligibility for Government Tenders",
      description:
        "Many government tenders and contracts in the UAE require registered products. Registration ensures that your business is eligible to participate in opportunities within the public sector.",
    },
    {
      benefit: "Stay Ahead of Market Trends",
      description:
        "The UAE regulatory system often aligns with global standards. By registering your products, you position your business to adapt to evolving international and regional trends, ensuring long-term success.",
    },
  ];

  const productCategories = [
    "Food and Beverages",
    "Cosmetics and Personal Care Products",
    "Pharmaceuticals and Medical Products",
    "Health Supplements",
    "Detergents and Disinfectants",
    "Electronics and Electrical Appliances",
    "Chemicals and Hazardous Substances",
    "Children’s Products",
    "Tobacco Products",
    "Industrial and Construction Materials",
    "Fashion Items (Restricted Categories)",
    "Veterinary Products",
  ];
  const productComplianceServices = [
    {
      service: "Product Compliance Assessment",
      description:
        "Evaluate your product against applicable regulations to identify gaps and required adjustments.",
    },
    {
      service: "Documentation Preparation",
      description:
        "Prepare and manage all necessary documents, ensuring accuracy and compliance with regulatory standards.",
    },
    {
      service: "Regulatory Submission",
      description:
        "Submit your application to the appropriate authorities, managing the process from start to finish.",
    },
    {
      service: "Labeling & Packaging Compliance",
      description:
        "Ensure your product labels and packaging meet all market-specific regulations.",
    },
    {
      service: "Post-Market Support",
      description:
        "Provide ongoing support to maintain compliance, including updates on regulatory changes and renewal assistance.",
    },
  ];

  const productRegistrationProcess = [
    {
      step: "Initial Consultation and Product Assessment",
      description:
        "Understand the product and determine its registration requirements. You’ll receive an initial compliance assessment based on the type of product and the regulatory framework that applies.",
    },
    {
      step: "Preparation of Documentation",
      description:
        "Gather all required documents and certifications needed for registration. Prepare and compile the necessary documents, including product details, Certificates of analysis or testing reports, ISO certifications, etc.",
    },
    {
      step: "Product Testing and Compliance Check (if applicable)",
      description:
        "Ensure the product meets local standards and regulations. Depending on the product category (e.g., food, pharmaceuticals, electronics), submit the product for required testing.",
    },
    {
      step: "Product Registration Submission",
      description:
        "Submit the product and documentation to relevant regulatory authorities. Ministry of Health and Prevention (MOHAP) for medical and pharmaceutical products, Dubai Municipality (DM) for food and cosmetics, etc.",
    },
    {
      step: "Review and Approval Process",
      description:
        "Authorities will review your submitted application, product testing reports, and other documents. Authorities may request additional information or modifications to the documentation.",
    },
    {
      step: "Product Registration and Certification",
      description:
        "Once approved, you will receive a product registration certificate. This serves as proof that your product has met all regulatory requirements and can be legally marketed in the UAE.",
    },
    {
      step: "Labeling and Packaging Compliance",
      description:
        "Verify that your product’s packaging and labels meet the requirements for language (Arabic and English), content accuracy, and other market-specific needs.",
    },
    {
      step: "Customs Clearance and Market Entry",
      description:
        "Submit your product to UAE Customs for clearance. This step ensures that your product meets all import regulations, including taxes, tariffs, and compliance with the UAE’s environmental and safety standards.",
    },
    {
      step: "Post-Registration Support and Renewals",
      description:
        "Once your product is registered, keep track of any expiration dates or renewal requirements. Our team can assist with renewals and modifications to ensure ongoing compliance.",
    },
    {
      step: "Distribution and Marketing",
      description:
        "Begin marketing and distributing your product across the UAE. With official registration, your product can now be sold in retail stores, online platforms, and through distributors.",
    },
  ];

  const tableBody = [
    {
      documentType: "Product Details and Description",
      description:
        "Detailed product description, specifications, and features.",
      applicableProducts: "All products",
    },
    {
      documentType: "Certificate of Free Sale (CFS)",
      description:
        "Issued by the home country’s regulatory authority to confirm the product is approved for sale.",
      applicableProducts: "Medical devices, pharmaceuticals, food, cosmetics",
    },
    {
      documentType: "Certificate of Analysis (COA)",
      description: "Lab report confirming product quality and safety.",
      applicableProducts:
        "Food, beverages, cosmetics, medical devices, pharmaceuticals",
    },
    {
      documentType: "Manufacturing & Quality Docs",
      description:
        "GMP (Good Manufacturing Practice) certificate, ISO certification, or manufacturing license.",
      applicableProducts: "Pharmaceuticals, food, cosmetics, medical devices",
    },
    {
      documentType: "Halal Certificate (if applicable)",
      description: "Proof that the product meets halal standards.",
      applicableProducts: "Food, beverages, cosmetics, pharmaceuticals",
    },
    {
      documentType: "Product Labeling Information",
      description:
        "Labels in Arabic and English with product name, ingredients, manufacturing date, warnings, etc.",
      applicableProducts:
        "Food, beverages, cosmetics, pharmaceuticals, consumer goods",
    },
    {
      documentType: "Regulatory Approval (Other Countries)",
      description:
        "Regulatory approval or market authorization from the country of origin or recognized authority.",
      applicableProducts:
        "Pharmaceuticals, medical devices, regulated health products",
    },
    {
      documentType: "Importer/Distributor Authorization",
      description:
        "Letter of authorization from a registered distributor or importer in the UAE.",
      applicableProducts: "All imported products",
    },
    {
      documentType: "Product Registration Application Form",
      description:
        "Completed application form as provided by the relevant UAE authority.",
      applicableProducts: "All products",
    },
    {
      documentType: "Payment Proof",
      description: "Receipt of payment for the registration fees.",
      applicableProducts: "All products",
    },
    {
      documentType: "Environmental Compliance Certificates",
      description:
        "Certifications for environmental impact, such as RoHS or WEEE compliance.",
      applicableProducts: "Electronics, chemicals, industrial products",
    },
    {
      documentType: "Marketing/Advertising Approvals",
      description:
        "Approval for marketing claims or advertisements related to the product.",
      applicableProducts:
        "Pharmaceuticals, health-related products, food supplements",
    },
    {
      documentType: "Safety Data Sheets (SDS)",
      description:
        "Document detailing the composition, hazards, and handling precautions.",
      applicableProducts: "Chemicals, cleaning products, industrial products",
    },
    {
      documentType: "Proof of Identity of Representatives",
      description:
        "Copies of passports or Emirates ID for the company representatives handling registration.",
      applicableProducts: "All products",
    },
    {
      documentType: "Product Samples (if required)",
      description:
        "Physical samples of the product for testing or evaluation by authorities.",
      applicableProducts: "Food, cosmetics, medical devices, chemicals",
    },
  ];

  const tableHeader = ["Document Type", "Description", "Applicable Products"];

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
              Simplify Your{" "}
              <span className="text-lime-500">Product Registration</span>{" "}
              Process
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            We specialize in providing seamless product registration services to
            help businesses ensure compliance, and launch their products.
            Whether you`re entering new markets or introducing innovative
            products, we are here to handle the complexities for you.
          </p>
          <Button className="mt-5">Contact us</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>
      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                Why is{" "}
                <span className="text-lime-500">Product Registration</span>{" "}
                Important in the UAE?
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              {uaeProductRegistrationBenefits.map((item, index) => (
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
                      {item.benefit}
                    </h2>
                    <p className="mt-1 font-Satoshi">{item.description}</p>
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
                Types of <span className="text-lime-500">Products</span> That
                Require Registration
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {productCategories.map((item, index) => (
                <div key={index} className="p-5 bg-lime-200 rounded-xl">
                  <h1 className="text-xl font-SplineSans text-lime-950 font-[600]">
                    {item}
                  </h1>
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
                Our <span className="text-lime-500">Product Registration</span>{" "}
                Services
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {productComplianceServices.map((item, index) => (
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
                      {item.service}
                    </h2>
                    <p className="mt-1 font-Satoshi">{item.description}</p>
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
              {productRegistrationProcess.map((item, index) => (
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
                  <p className="font-Satoshi text-lg mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container w-full my-24">
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
                    {item.documentType}
                  </div>
                </td>
                <td className=" py-2 border border-gray-300 ">
                  <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                    {item.description}
                  </div>
                </td>
                <td className=" py-2 border border-gray-300 ">
                  <div className="font-[500] text-lg text-[#152b0c] font-SplineSans px-5 ">
                    {item.applicableProducts}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Banner
        title={"Ready to Register Your Product?"}
        desc={
          "Don’t let complex regulations slow you down. Partner with Milestone Homes to simplify your product registration process and bring your products to market quickly and efficiently."
        }
      />
    </div>
  );
};
const DesignMarketing = () => {
  const benefits = [
    {
      title: "Access to Expertise",
      description:
        "Gain access to a team of expert professionals with diverse skills.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Save on the expenses of hiring and training an in-house team.",
    },
    {
      title: "Scalability",
      description:
        "Easily scale your marketing efforts based on your business needs.",
    },
    {
      title: "Focus on Core Activities",
      description:
        "Free up your resources to focus on your core business operations.",
    },
    {
      title: "Fresh Perspectives",
      description:
        "Benefit from creative insights and strategies tailored to current market trends.",
    },
  ];

  const services = [
    {
      category: "Branding & Identity",
      description:
        "Your brand is more than a logo; it’s an experience. We help define and design your brand’s identity with:",
      offerings: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity Development",
        "Naming and Tagline Creation",
      ],
    },
    {
      category: "Graphic Design",
      description:
        "From stunning visuals to user-friendly layouts, we create designs that captivate and convert. Our services include:",
      offerings: [
        "Marketing Collateral (brochures, flyers, posters)",
        "Packaging Design",
        "Infographics",
        "Custom Illustrations",
      ],
    },
    {
      category: "Web Design & Development",
      description:
        "Your website is your digital storefront. We ensure it’s both functional and visually appealing with:",
      offerings: [
        "Responsive Website Design",
        "E-commerce Solutions",
        "UI/UX Design",
        "SEO Optimization",
      ],
    },
    {
      category: "Digital Marketing",
      description:
        "In today’s digital landscape, a strong online presence is essential. We offer:",
      offerings: [
        "Social Media Marketing",
        "Pay-Per-Click (PPC) Advertising",
        "Email Marketing Campaigns",
        "Content Creation & Strategy",
      ],
    },
    {
      category: "Marketing Strategy & Consulting",
      description:
        "Aligning your goals with effective strategies is our priority. We provide:",
      offerings: [
        "Market Analysis",
        "Campaign Planning",
        "Performance Analytics",
        "Brand Positioning",
      ],
    },
    {
      category: "Creative Services",
      description:
        "Creative Services are the lifeblood of modern marketing. They involve conceptualization, design, and production of innovative ideas and materials to capture attention.",
      offerings: [
        "Copy Writing",
        "Art Direction",
        "Photography and Videography",
        "Digital Content Creation",
      ],
    },
  ];

  const coreValues = [
    {
      value: "Creative Expertise",
      description:
        "A team of designers and marketers passionate about delivering excellence.",
    },
    {
      value: "Tailored Solutions",
      description:
        "Customized strategies to meet your specific goals and audience.",
    },
    {
      value: "Proven Results",
      description:
        "A track record of successful campaigns and satisfied clients.",
    },
    {
      value: "End-to-End Services",
      description:
        "From concept to execution, we’re with you every step of the way.",
    },
  ];

  return (
    <div className="w-full">
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>
            <Heading>
              Your <span className="text-lime-500">Creative Design</span> and{" "}
              <span className="text-lime-500">Marketing</span> Partner-
              BizGrowth
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            At BizGrowth, we bring ideas to life with innovative design and
            marketing solutions custom to your unique brand. Whether you’re a
            startup looking to make a mark or an established business aiming to
            elevate your presence, our team is here to craft impactful
            strategies and visuals.
          </p>
          <Button className="mt-5">Contact us</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>

      <div className="w-full container my-24">
        <div>
          <Heading className="!text-center w-full">
            Why Outsource Marketing Services?
          </Heading>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
          {benefits.map((item, index) => (
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
                <p className="mt-1 font-Satoshi">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="bg-indigo-50 py-14 my-24">
          <div className="w-full container  ">
            <div>
              <Heading className="!text-center w-full">
                <span className="text-lime-500">Key</span> Components of{" "}
                <span className="text-indigo-600">Corporate</span> Structuring
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-1 gap-7">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="w-full border-b border-indigo-800/30 p-5"
                >
                  <div className="">
                    <h2 className="font-SplineSans  font-[600] text-xl">
                      <span className="text-indigo-900">
                        {index + 1} {".)"}
                      </span>{" "}
                      &nbsp;
                      {item.category}
                    </h2>
                    <div className={'ml-7'}>
                      <p className="font-Satoshi mt-1">{item.description}</p>
                      {item.offerings ? (
                        <div className="mt-3">
                          {item.offerings.map((point, id) => (
                            <div key={id} className="flex items-start gap-3">
                              <div className=" mt-2">
                                <div className="size-2 bg-indigo-700 rounded-full" />
                              </div>
                              <div>
                                <h3 className="text-lg font-Synonym font-[500]">
                                  {point}
                                </h3>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full container my-24">
        <div>
          <Heading className="!text-center w-full">
            Why <span className="text-lime-500">Outsource Marketing</span>{" "}
            Services?{" "}
          </Heading>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
          {coreValues.map((item, index) => (
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
                <h2 className="font-SplineSans font-[600] text-xl">
                  {item.value}
                </h2>
                <p className="mt-1 font-Satoshi">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Banner
        title={"Let’s Collaborate"}
        desc={
          "Ready to transform your vision into reality? Let’s start a conversation. Reach out to us or fill out our online inquiry form to discuss your next project. Together, we’ll design success!"
        }
      />
    </div>
  );
};
const HrSolutions = () => {
  const hrSolutions = [
    {
      service: "Standard Recruitment Processes",
      description:
        "Attract and retain top talent with a structured hiring strategy.",
    },
    {
      service: "Compliance Assurance",
      description:
        "Stay ahead of labor laws and regulations to avoid penalties and maintain operational integrity.",
    },
    {
      service: "Improved Employee Engagement",
      description:
        "Get a motivated and productive workforce through effective management.",
    },
    {
      service: "Time and Cost Savings",
      description:
        "Let our experts handle HR complexities so you can focus on growing your business.",
    },
  ];
  const hrServices = [
    {
      service: "Recruitment and Talent Acquisition",
      icon: "/media/Will Formation icon/training.png",
      description:
        "Find the right talent with our data-driven recruitment strategies and thorough screening processes.",
    },
    {
      service: "Onboarding and Training",
      icon: "/media/Will Formation icon/onboarding.png",
      description:
        "Create a good onboarding experience and provide training programs to help new hires succeed.",
    },
    {
      service: "Payroll and Benefits Administration",
      icon: "/media/Will Formation icon/payroll.png",
      description:
        "Simplify payroll processes and design competitive benefits packages to attract and retain employees.",
    },
    {
      service: "HR Compliance and Risk Management",
      icon: "/media/Will Formation icon/warning.png",
      description:
        "Ensure your business complies with labor laws, industry standards, and workplace regulations.",
    },
    {
      service: "Performance Management",
      icon: "/media/Will Formation icon/growth.png",
      description:
        "Develop systems to monitor, evaluate, and improve employee performance effectively.",
    },
    {
      service: "Employee Engagement and Retention Strategies",
      icon: "/media/Will Formation icon/retention.png",
      description:
        "Build a positive workplace culture with initiatives that increase employee satisfaction and loyalty.",
    },
    {
      service: "HR Technology Integration",
      icon: "/media/Will Formation icon/hr.png",
      description:
        "Streamline operations with the latest HR software and tools for efficient workforce management.",
    },
  ];

  const services = [
    {
      title: "Technology and IT",
      img: "media/images/tech.jpg",
    },
    {
      title: "Healthcare and Life Sciences",
      img: "media/images/health.jpg",
    },
    {
      title: "Retail and Hospitality",
      img: "media/images/retail.jpg",
    },
    {
      title: "Manufacturing and Logistics",
      img: "media/images/logistic.jpg",
    },
    {
      title: "Finance and Professional Services",
      img: "media/images/finance.jpg",
    },
  ];
  return (
    <div className="w-full">
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>
            <Heading>
              <span className="text-lime-500">HR Solutions</span> for Your
              Business
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            Human Resources (HR) management is vital for business growth,
            enhancing productivity, and building a thriving workplace culture.
            Our HR solutions are designed to support your business at every
            stage, ensuring your workforce remains your most valuable asset.
          </p>
          <Button className="mt-5">Contact us</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>
      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                Why Invest in Professional HR Solutions?
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {hrSolutions.map((item, index) => (
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
                      {item.service}
                    </h2>
                    <p className="mt-1 font-Satoshi">{item.description}</p>
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
                Our <span className="text-lime-500">Product Registration</span>{" "}
                Services
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {hrServices.map((item, index) => (
                <div key={index} className="w-full rounded-lg bg-lime-200 p-5">
                  <div>
                    <div className="size-14 p-3 overflow-hidden bg-lime-400 rounded-full">
                      <img src={item?.icon} />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-SplineSans mt-6 font-[600] text-xl">
                      {item.service}
                    </h2>
                    <p className="mt-1 font-Satoshi">{item.description}</p>
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
                <span className="text-lime-500">Industries</span> We Serve:
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {services.map((item, index) => (
                <div key={index} className="w-full rounded-lg bg-lime-100">
                  <div>
                    <div>
                      <div className={"aspect-[4/31] w-full"}>
                        <img
                          className="w-full h-full object-cover"
                          src={item.img}
                        />
                      </div>
                    </div>
                    <h2 className="font-SplineSans font-[600] p-6  text-xl">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Banner
        title={"Ready to Register Your Product?"}
        desc={
          "Don’t let complex regulations slow you down. Partner with Milestone Homes to simplify your product registration process and bring your products to market quickly and efficiently."
        }
      />
    </div>
  );
};
const CorporateStructuring = () => {
  const corporateStructuringBenefits = [
    {
      benefit: "Navigating Legal and Regulatory Frameworks",
      icon: "media/Will Formation icon/directions.png",
      description:
        "Corporate structuring ensures your business complies with the specific legal requirements in the UAE business environment, whether you are seeking to operate in the local market or internationally.",
    },
    {
      benefit: "Tax Efficiency",
      icon: "media/Will Formation icon/tax.png",
      description:
        "One of the major advantages of doing business in the UAE is its tax benefits. With no federal corporate tax on most businesses and only a recently introduced tax on specific sectors, structuring your company correctly can ensure that you are fully capitalizing on these benefits.",
    },
    {
      benefit: "Asset Protection and Risk Management",
      icon: "media/Will Formation icon/shield.png",
      description:
        "In the UAE, businesses can benefit from liability protection, but it’s important to set up the correct structure to shield assets and mitigate risks. Whether you are setting up a limited liability company (LLC), a joint venture, or a free zone company, structuring your business properly helps protect your assets.",
    },
    {
      benefit: "Flexibility and Scalability",
      icon: "media/Will Formation icon/growth.png",
      description:
        "As the UAE is a hub for international trade and investment, having a flexible corporate structure can facilitate easier expansion into global markets. Depending on the nature of your business, structuring it for scalability can help you take advantage of the growing opportunities within the region.",
    },
    {
      benefit: "Enhanced Credibility and Business Relationships",
      icon: "media/Will Formation icon/magic-wand.png",
      description:
        "Proper structuring can also boost your business’s credibility in the eyes of investors, customers, and partners. The UAE is known for its strong governance standards, and having a well-thought-out structure signals professionalism.",
    },
    {
      benefit: "Compliance with Local and International Standards",
      icon: "media/Will Formation icon/check.png",
      description:
        "The UAE is a signatory to various international agreements and conventions. With the introduction of laws such as the Economic Substance Regulations and the Common Reporting Standard (CRS), ensuring your corporate structure complies with both local and international standards is important for avoiding penalties and ensuring smooth operations.",
    },
    {
      benefit: "Succession Planning",
      icon: "media/Will Formation icon/planning.png",
      description:
        "Corporate structuring is also critical when it comes to succession planning. By choosing the right structure, businesses can ensure continuity, proper transfer of ownership, and protection for family-owned enterprises.",
    },
  ];
  const businessServices = [
    {
      service: "Business Entity Formation",
      description:
        "Choose the right legal entity (LLC, Corporation, Partnership, etc.) for your business goals.",
    },
    {
      service: "Mergers & Acquisitions",
      description:
        "Structuring transactions to ensure tax efficiency, regulatory compliance, and smooth integration.",
    },
    {
      service: "Joint Ventures & Strategic Alliances",
      description:
        "Design the right structure for collaborative efforts while protecting each party's interests.",
    },
    {
      service: "Tax Optimization",
      description:
        "Ensure your structure aligns with the most efficient tax strategy.",
    },
    {
      service: "Global Structuring",
      description:
        "Expand internationally with a structure that meets local and global requirements.",
    },
    {
      service: "Restructuring & Reorganization",
      description:
        "Restructure or reorganize your corporate structure for growth, debt management, or succession planning.",
    },
  ];

  const corporateStructure = [
    {
      title: "Ownership structure",
      points: [
        {
          title: "Shareholding:",
          desc: "One of the most essential components of corporate structuring is determining how ownership will be distributed among the company’s stakeholders. This includes deciding the allocation of Shares Voting Rights, and Profit-Sharing Agreements.",
        },
        {
          title: "Joint Ventures and Partnerships:",
          desc: "Collaborations with other businesses often require careful structuring to manage risks and align objectives. Key elements include Partner Roles and Contributions, Risk Sharing and Profit Distribution, and Exit Strategy.",
        },
      ],
    },
    {
      title: "Legal Entity Selection",
      desc: "Dubai offers a variety of legal structures for businesses, each with its own set of advantages, limitations, and regulatory requirements.",
      points: [
        {
          title: "Mailnland",
          desc: " Allows businesses to operate across the UAE and internationally but typically requires a local sponsor for foreign ownership.",
        },
        {
          title: "Free Zone",
          desc: "Ideal for companies that want to operate in a specific economic sector and require 100% foreign ownership, but usually limits business activities to within the free zone or specific regions.",
        },
        {
          title: "Offshore",
          desc: " Offers flexibility in international business operations, with the benefit of tax efficiency, but generally does not allow operations in the UAE market.",
        },
        {
          title: "LLC",
          desc: " Offers liability protection for owners and flexibility in management, ideal for businesses seeking operations in the UAE mainland.",
        },
        {
          title: "Branch Office",
          desc: "Allows foreign companies to establish a presence in Dubai without forming a new entity, but may have more restrictions.",
        },
        {
          title: "Representative Office",
          desc: " Primarily used for marketing, liaison, and research, but not for conducting business or generating income.",
        },
      ],
    },
    {
      title: "Tax Planning",
      desc: "While Dubai provides a favorable tax environment, businesses must still engage in thoughtful tax planning to optimize financial outcomes. This involves minimizing Tax Liabilities, Regulatory Compliance, VAT Compliance, VAT Registration, VAT Reporting and Compliance",
    },
    {
      title: "Organizational Chart",
      desc: "A well-defined organizational chart is essential for clear communication and operational efficiency. It includes Roles and Responsibilities, Reporting Structure, Support for Strategic Goals, Corporate Governance",
    },
    {
      title: "Financial Structuring",
      desc: "The capital structure is crucial for determining the company’s financial stability and growth potential. Ensuring the company has sufficient liquidity to meet its financial obligations and fund growth initiatives is a critical part of corporate structuring",
    },
  ];

  const corporateBenefits = [
    {
      benefit: "Liability Protection",
      description:
        "Separating personal and business assets by forming a corporation (e.g., LLC, C-corp) protects shareholders or owners from personal liability for business debts and obligations.",
    },
    {
      benefit: "Tax Optimization",
      description:
        "Corporations can take advantage of various tax benefits, including deductions, lower corporate tax rates, and opportunities to defer taxes.",
    },
    {
      benefit: "Enhanced Credibility",
      description:
        "A well-structured corporation often appears more professional and credible to investors, customers, and partners, facilitating trust and growth.",
    },
    {
      benefit: "Access to Capital",
      description:
        "Corporate entities, especially those with a solid structure, find it easier to attract investment, secure loans, or issue shares.",
    },
    {
      benefit: "Operational Efficiency",
      description:
        "Clear roles, responsibilities, and hierarchies within the corporate structure streamline decision-making and improve overall efficiency.",
    },
    {
      benefit: "Strategic Growth and Scalability",
      description:
        "Structuring facilitates mergers, acquisitions, and expansion into new markets by allowing clear integration processes and defined operational boundaries.",
    },
    {
      benefit: "Continuity and Succession Planning",
      description:
        "Corporations have perpetual existence, meaning they continue to operate independently of changes in ownership or management.",
    },
    {
      benefit: "Risk Mitigation",
      description:
        "Businesses can reduce financial and operational risks by diversifying operations across different legal entities or jurisdictions.",
    },
    {
      benefit: "Compliance with Regulations",
      description:
        "A structured corporation can better navigate and adhere to local and international laws, reducing the risk of penalties.",
    },
    {
      benefit: "Intellectual Property Protection",
      description:
        "Corporate structuring allows businesses to house intellectual property separately, safeguarding critical assets.",
    },
    {
      benefit: "Employee Attraction and Retention",
      description:
        "Offering shares or stock options within a corporate structure can help attract and retain top talent.",
    },
    {
      benefit: "Tailored Governance",
      description:
        "Structuring provides an opportunity to implement specific governance policies that align with the company’s goals, ensuring accountability and ethical practices.",
    },
  ];

  return (
    <div className="w-full">
      <div className="container w-full mt-12 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="w-full">
          <div>
            <Heading>
              Unlock the <span className={"text-lime-500"}>Full Potential</span>{" "}
              of Your Business
            </Heading>
          </div>

          <p className="text-lg font-Satoshi mt-4">
            Whether you're a startup, an expanding business, or a large
            enterprise, our Corporate Structuring Services help you design and
            implement the ideal structure to optimize operations, reduce risks,
            and maximize value.
          </p>
          <Button className="mt-5">Contact us</Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={"media/mainland/dubai.svg"} />
        </div>
      </div>
      <div>
        <div>
          <div className="w-full container my-24">
            <div>
              <Heading className="!text-center w-full">
                Why <span className="text-lime-500">Corporate Structuring</span>{" "}
                Matters
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-7">
              {corporateStructuringBenefits.map((item, index) => (
                <div
                  key={index}
                  className="w-full  rounded-lg bg-indigo-100 p-5"
                >
                  <div>
                    <div className="size-14 p-3 bg-indigo-300 flex justify-center items-center rounded-full">
                      <img src={item.icon} />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h2 className="font-SplineSans  font-[600] text-xl">
                      {item.benefit}
                    </h2>
                    <p className="mt-1 font-Satoshi">{item.description}</p>
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
                Why <span className="text-lime-500">Corporate Structuring</span>{" "}
                Matters
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              {businessServices.map((item, index) => (
                <div
                  key={index}
                  className="w-full  rounded-lg bg-indigo-100 p-5"
                >
                  <div className="">
                    <h2 className="font-SplineSans  font-[600] text-xl">
                      {item.service}
                    </h2>
                    <p className="mt-1 font-Satoshi">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-indigo-50 py-14 my-24">
          <div className="w-full container  ">
            <div>
              <Heading className="!text-center w-full">
                Key Components of Corporate Structuring
              </Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-1 gap-7">
              {corporateStructure.map((item, index) => (
                <div
                  key={index}
                  className="w-full border-b border-indigo-800/30 p-5"
                >
                  <div className="">
                    <h2 className="font-SplineSans  font-[600] text-xl">
                      {item.title}
                    </h2>
                    {item.points ? (
                      <div className="mt-3">
                        {item.points.map((point, id) => (
                          <div key={id} className="flex items-start gap-3">
                            <div className=" mt-2">
                              <div className="size-2 bg-indigo-700 rounded-full" />
                            </div>
                            <div>
                              <h3 className="text-lg font-Synonym font-[500]">
                                {point.title}
                              </h3>
                              <p>{point.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-3">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" my-24">
          <div className="w-full container  ">
            <div>
              <Heading className="!text-center w-full">
                Benefits of Corporate Structuring
              </Heading>
            </div>
            f
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-7">
              {corporateBenefits.map((item, index) => (
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
                    <h2 className="font-SplineSans font-[600] text-xl">
                      {item.benefit}
                    </h2>
                    <p className="mt-1 font-Satoshi">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Banner
        title={"Get Started Today"}
        desc={
          "Ready to structure your business for success? Contact us to schedule a consultation and learn how our corporate structuring services can unlock your company’s full potential."
        }
      />
    </div>
  );
};

export default Page;
