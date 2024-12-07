import Heading from "./Heading";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
const data = [
  {
    name: "real estate",
    heroTitle: (
      <Heading>
        Unlock the Potential of{" "}
        <span className="text-lime-500">Property Investment</span> in{" "}
        <span className="text-lime-500">UAE</span>
      </Heading>
    ),
    heroDescription:
      "At Real Estate Investment Services, we provide expert guidance and opportunities to help you build, grow, and protect your wealth through property investments. Whether you're a first-time investor or a professional, we offer a range of services to meet your needs.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Invest in <span className="text-lime-500">Real Estate?</span>{" "}
      </Heading>
    ),
    secondSubDescription: null,
    secondPoints: [
      {
        title: "Stable and Long-Term Growth",
        icon: <FaPeopleGroup />,
        desc: "Real estate is a proven, long-term investment that offers stability and consistent returns.",
      },
      {
        title: "Diversification",
        icon: <FaBusinessTime />,
        desc: "Real estate allows you to diversify your investment portfolio, reducing risks and providing new avenues for growth.",
      },
      {
        title: "Passive Income",
        icon: <MdIncompleteCircle />,
        desc: " Rental properties generate regular income, offering financial security through cash flow ",
      },
      {
        title: "Appreciation Potential",
        icon: <MdIncompleteCircle />,
        desc: " Property values increase over time, providing potential for capital gains when you sell.",
      },
      
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Types of{" "}
        <span className="text-lime-500">Real Estate Investment</span> in UAE
      </Heading>
    ),
    thirdSubDesc:
      "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Commercial License :</span>{" "}
        This license is for businesses involved in trading, buying, and selling
        goods or services. It’s one of the most common types of licenses issued
        for companies engaged in commercial activities.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License :</span> An
        industrial license is required for companies engaged in manufacturing,
        processing, or production of goods. It allows businesses to set up
        factories or production facilities.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Professional License :</span>{" "}
        This license is intended for businesses that provide services or
        professional expertise rather than selling physical goods. It is common
        for individuals and companies providing intellectual services or
        consulting.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Tourism License :</span> A
        tourism license is required for businesses related to tourism and travel
        activities. This includes businesses offering travel services, tour
        operators, hotel services, or any tourism-related services.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Agricultural License :</span>{" "}
        This license is for businesses involved in agriculture, animal
        husbandry, or related activities. It’s designed for those engaged in
        farming, livestock breeding, or agricultural products.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Contracting License :</span>{" "}
        This license is for businesses involved in construction, contracting,
        and related services. Contractors are required to have this license to
        perform civil work or infrastructure projects.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-commerce License :</span>{" "}
        An e-commerce license is for businesses that primarily operate online.
        It enables businesses to sell products or services through digital
        platforms, including online retail stores and other e-commerce ventures.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Instant License :</span> This
        license is for businesses seeking to start trading immediately without
        needing prior approvals, valid for a short period.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Branch Office License :
        </span>{" "}
        This license is suitable for foreign companies looking to open a branch
        in the Dubai mainland.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        <span className="text-lime-500">THE PROCESSES</span> - SETTING UP A
        DUBAI MAINLAND LICENSE
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose a Business Activity",
        isPoints: false,
        desc: "The first step in establishing your business in Dubai Mainland is selecting the type of activity you will engage in.",
      },
      {
        title: "Select a Legal Structure",
        isPoints: true,
        desc: "Choose the legal structure of your company based on your business requirements and objectives. The common business structures in Dubai Mainland include",
        points: [
          "Limited Liability Company (LLC)",
          "Sole Proprietorship",
          "Civil Company",
          "Branch of a Foreign Company",
        ],
      },
      {
        title: " Trade Name Reservation",
        isPoints: false,
        desc: "After finalizing the business activity and legal structure, the next step is to choose a unique and appropriate  trade name for your company. ",
      },
      {
        title: " Obtain Initial Approval",
        isPoints: true,
        desc: "The next step is to submit a set of documents to the DED for initial approval. These documents typically include:",
        points: [
          "Passport copies of the business owners",
          "Proof of residence in the UAE (if applicable)",
          "Completed application form for initial approval",
        ],
      },
      {
        title: "  Prepare the Memorandum of Association (MOA)",
        isPoints: false,
        desc: "The next step is drafting a Memorandum of Association (MOA), which outlines the relationship between shareholders and the company's operations. The MOA needs to be notarized by a public notary in Dubai.",
      },
      {
        title: " Rent Office Space and Obtain Ejari Certificate",
        isPoints: false,
        desc: "To operate in Dubai Mainland, it is mandatory to have a physical office space. Register your tenancy contract with Ejari, it’s government-approved tenancy registration system.",
      },
      {
        title: "  Obtain External Approvals (if required)",
        isPoints: false,
        desc: "If your business activity requires specific approvals from other government departments, obtain them before proceeding.",
      },
      {
        title: "   Finalize Licensing",
        isPoints: false,
        desc: " After securing office space, submit all the required documents to the DED to obtain your trade license.",
      },
      {
        title: " Apply for Visas",
        isPoints: false,
        desc: " Once you have obtained your trade license, you can apply for residence and work visas for yourself, employees, and family members.",
      },
      {
        title: "Comply with Regulatory Requirements",
        isPoints: false,
        desc: " After setting up your business, ensure that your business complies with local regulations. This includes accounting and tax requirements, maintaining proper records, and filing annual reports.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        <span className="text-lime-500">DOCUMENTS REQUIRED</span> FOR SETTING UP
        A DUBAI MAINLAND LICENSE
      </Heading>
    ),
    sixthTableHead: ["Entity Type", "Documents Required"],
    sixthTableBody: [
      {
        title: "LLC (Limited Liability Company)",
        docs: [
          "Passport copies of owners/partners",
          "Visa copies of owners/partners (if applicable)",
          "Passport-size photographs",
          "No Objection Certificate (NOC) from current employer (if applicable)",
          "Trade Name Reservation Certificate",
          "Initial Approval from DED",
          "Office Lease Agreement (Ejari)",
          "Memorandum of Association (MOA)",
          "Local Sponsor Agreement (if applicable for foreign ownership)",
          "Approval from relevant authorities (depending on activity)",
          "Shareholder Agreement (if applicable)",
          "Power of Attorney (if applicable)",
          "Bank Reference Letter (if required)",
          "Proof of Business Activity",
          "Professional Qualifications (if applicable)",
        ],
      },
      {
        title: "Sole Proprietorship",
        docs: [
          "Passport copy of the owner",
          "Visa copy of the owner (if applicable)",
          "Passport-size photographs",
          "No Objection Certificate (NOC) (if applicable)",
          "Trade Name Reservation Certificate",
          "Initial Approval from DED",
          "Office Lease Agreement (Ejari)",
          "Proof of Business Activity",
          "Professional Qualifications (if applicable)",
          "Approval from relevant authorities (if applicable)",
        ],
      },
      {
        title: "General Partnership",
        docs: [
          "Passport copies of all partners",
          "Visa copies of all partners (if applicable)",
          "Passport-size photographs",
          "Trade Name Reservation Certificate",
          "Initial Approval from DED",
          "Office Lease Agreement (Ejari)",
          "Partnership Agreement (defining terms between partners)",
          "Power of Attorney (if applicable)",
          "Approval from relevant authorities (if applicable)",
        ],
      },
      {
        title: "Private Joint Stock Company",
        docs: [
          "Passport copies of shareholders and directors",
          "Visa copies of shareholders and directors (if applicable)",
          "Passport-size photographs",
          "Trade Name Reservation Certificate",
          "Initial Approval from DED",
          "Office Lease Agreement (Ejari)",
          "Memorandum and Articles of Association (MOA)",
          "Shareholder Agreement",
          "Proof of Capital (minimum AED 1,000,000)",
          "Board Resolution for Incorporation",
          "Approval from relevant authorities (if applicable)",
        ],
      },
      {
        title: "Public Joint Stock Company",
        docs: [
          "Passport copies of shareholders and directors",
          "Visa copies of shareholders and directors (if applicable)",
          "Passport-size photographs",
          "Trade Name Reservation Certificate",
          "Initial Approval from DED",
          "Office Lease Agreement (Ejari)",
          "Memorandum and Articles of Association (MOA)",
          "Shareholder Agreement",
          "Proof of Capital (minimum AED 30,000,000)",
          "Board Resolution for Incorporation",
          "Approval from Securities and Commodities Authority (SCA)",
          "Approval from relevant authorities (if applicable)",
        ],
      },
      {
        title: "Branch of a Foreign Company",
        docs: [
          "Passport copy of the branch manager",
          "Visa copy of the branch manager (if applicable)",
          "Passport-size photographs of branch manager",
          "Trade Name Reservation Certificate",
          "Initial Approval from DED",
          "Lease Agreement for the branch office (Ejari)",
          "Parent company’s Certificate of Incorporation",
          "Parent company’s Memorandum and Articles of Association",
          "Parent company’s financial statements for the last 3 years",
          "Power of Attorney for the branch manager",
          "Approval from relevant authorities (depending on activity)",
        ],
      },
    ],

    tableFooter:
      "This table lists the primary documents required for each business entity type in Dubai Mainland. Keep in mind that additional documents may be needed based on the specific industry, business activity, or any regulatory requirements. It’s advisable to consult with BIZ Growth business setup consultant for more detailed and accurate information based on your unique business needs.",
    seventhTitle: (
      <Heading className="w-full !text-center">
        Why Choose <span className="text-lime-500">BIZGROWTH</span> for Your
        Dubai Mainland Business Setup?
      </Heading>
    ),
    seventhPoints: [
      {
        title: "Expert Knowledge",
        desc: "Our team has extensive experience in Dubai Mainland business setup procedures and understands the legal and regulatory landscape.",
      },
      {
        title: "Hassle-Free Process",
        desc: "We handle everything for you from start to finish, ensuring a smooth and timely setup process.",
      },
      {
        title: "Comprehensive Services",
        desc: "From licensing and registration to visa processing and ongoing compliance, we offer a full range of services to support your business.",
      },
      {
        title: "Local Insight",
        desc: "With our deep understanding of local regulations and requirements, we help you avoid common pitfalls and ensure your business setup is done right.",
      },
      {
        title: "Cost-Effective Solutions",
        desc: "We offer competitive pricing with transparent and upfront costs, ensuring that you get the best value for your business setup.",
      },
    ],
  },
];

export default data;
