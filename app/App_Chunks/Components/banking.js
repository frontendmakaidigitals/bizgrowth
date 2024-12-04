import Heading from "./Heading";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
const data = [
  {
    name: "ifza",
    heroTitle: (
      <Heading>
        Need Corporate Service in Dubai{" "}
        <span className="text-lime-600 font-SplineSans">
          Bank Account Opening Assistance
        </span>{" "}
      </Heading>
    ),
    heroDescription:
      "At BizGrowth, we offer Corporate Bank Account Opening Assistance to streamline the process for businesses of all sizes, so you can focus on what matters most — growing your business. A dedicated corporate bank ensures your business transactions are separated from your personal finances, and establishes your company’s credibility.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        The Necessity for a{" "}
        <span className="text-lime-500">corporate bank account?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Separate Personal and Business Finances",
        icon: <FaPeopleGroup />,
        desc: " Keep your personal and business finances separate to maintain clear financial records.",
      },
      {
        title: "Professionalism and Trust",
        icon: <FaBusinessTime />,
        desc: "IFZA offers competitive pricing for business licenses, office spaces, and operational costs, making it an ideal destination for startups, SMEs, and established enterprises.",
      },
      {
        title: "Access to Business Banking Features",
        icon: <MdIncompleteCircle />,
        desc: " Business accounts offer features like business loans, merchant services, and higher transaction limits that are unavailable with personal accounts",
      },
      {
        title: "Simple Company Formation Process",
        icon: <MdIncompleteCircle />,
        desc: " Setting up your business at IFZA is fast and easy. With streamlined processes, we ensure minimal bureaucracy and quick approval for your business setup. Our expert team is here to assist you every step of the way.",
      },
      {
        title: "Tax and Legal Compliance",
        icon: <MdIncompleteCircle />,
        desc: "A corporate bank account is crucial for maintaining accurate financial records, which is essential for tax filing and regulatory compliance.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Advantages of{" "}
        <span className="text-lime-500">Corporate Bank Account</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Separation of Personal and Business Finances
        </span>{" "}
        A corporate account keeps your business and personal finances distinct
        and you reduce the risk of legal issues or disputes.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Professionalism and Credibility
        </span>{" "}
        A corporate account helps establish your company’s credibility with
        clients, suppliers, and investors. Clients and vendors are more likely
        to trust a business that operates with a corporate bank account
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Loans and Credit Facilities
        </span>{" "}
        Having a corporate bank account enables your business to access business
        loans, credit lines, and other financial services.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Enhanced Financial Management
        </span>{" "}
        With a corporate account, managing cash flow, expenses, and business
        revenue becomes easier.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Building Business Credit
        </span>{" "}
        Opening and maintaining a corporate bank account helps you establish a
        credit history for your business, which can be crucial when seeking
        business loans in the future.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Simplified Payment and Receipt Management
        </span>{" "}
        Corporate accounts make it easier to issue checks, transfer funds, and
        pay for services or products from your business account rather than from
        your personal funds.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Holding License</span>{" "}
        Corporate bank accounts often come with enhanced security measures, such
        as two-factor authentication, secure online banking access, and fraud
        protection services.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Enhanced Security</span> An
        Educational License is for businesses focused on offering educational or
        training services, including both academic and professional courses.
        This is a popular choice for those in the education and training sector.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Tax Deductions and Savings
        </span>{" "}
        You can easily track and document business-related expenses, making it
        simpler to claim tax deductions. This can lead to potential savings
        during tax filing.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Steps to Open a
        <span className="text-lime-500">Corporate Bank Account </span>
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose the Right Bank",
        isPoints: false,
        desc: "Start by comparing various banks to find one that best suits your business needs. Look for factors like fees, account features, online banking capabilities, customer service, and available credit options.",
      },
      {
        title: " Prepare the Required Documentation",
        isPoints: false,
        desc: "Banks require specific documents to open a corporate account. Make sure you have all the necessary paperwork ready before starting the process",
      },
      {
        title: "Complete the Bank’s Application Form",
        isPoints: false,
        desc: " Many banks offer the option to apply online, while others may require you to visit a branch. Ensure you carefully fill out the application with accurate details about your business.",
      },
      {
        title: "Deposit the Required Initial Deposit",
        isPoints: false,
        desc: "Most banks require an initial deposit to open a corporate account. The amount varies depending on the bank and the type of account you’re opening",
      },
      {
        title: " Review Account Terms and Sign Agreement",
        isPoints: false,
        desc: "Carefully review the bank’s terms and conditions, including fees, transaction limits, and any additional services provided.",
      },
      {
        title: "Wait for Account Approval",
        isPoints: false,
        desc: "After submitting your application and necessary documents, the bank will review your application.",
      },
      {
        title: "Receive Your Corporate Bank Account Details",
        isPoints: false,
        desc: "Once your account is approved, you will receive your new account number, debit or credit cards, and access to online banking services.",
      },
      {
        title: "Set Up Online Banking and Payment Systems",
        isPoints: false,
        desc: "Set up your online banking account for easy access to your business account, allowing you to check balances, transfer funds, and manage transactions.",
      },
      {
        title: " Keep Your Records Updated",
        isPoints: false,
        desc: "Regularly monitor your account and ensure all financial records are up to date. It’s essential for accurate bookkeeping, tax filings, and compliance with business regulations.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        DOCUMENTS REQUIRED FOR{" "}
        <span className="text-lime-500">IFZA FREEZONE LICENSE</span>
      </Heading>
    ),
    sixthTableHead: ["Document Type", "Description"],
    sixthTableBody: [
      {
        title: "Company Registration Documents",
        doc1: "Includes business registration certificate, articles of incorporation, certificate of formation, or partnership agreement (depending on business structure).",
      },
      {
        title:
          "Tax Identification Number (TIN) / Employer Identification Number (EIN)",
        doc1: "A unique identification number assigned by the tax authority for tax purposes.",
      },
      {
        title: "Proof of Business Address",
        doc1: "A recent utility bill, lease agreement, or other official document showing the business’s physical address.",
      },
      {
        title: "Personal Identification",
        doc1: "Government-issued ID (passport, driver’s license) for business owners, directors, and authorized signatories.",
      },
      {
        title: "Ownership and Management Structure",
        doc1: "Details of the company’s ownership, including names and personal details of directors, beneficial owners, and authorized signatories.",
      },
      {
        title: "No Objection Certificate (NOC)",
        doc1: "If employed in the UAE, a NOC from the current employer is required.",
      },
      {
        title: "Business License",
        doc1: "Required for certain industries such as healthcare, finance, or other regulated sectors.",
      },
      {
        title: "Operating Agreement",
        doc1: "Required for partnerships; outlines the roles and responsibilities of each partner.",
      },
      {
        title: "Financial Statements",
        doc1: "Some banks may request recent financial statements (e.g., balance sheet, profit & loss) to assess your business’s financial health.",
      },
      {
        title: "Additional Supporting Documents",
        doc1: "Some banks may require other documents such as a business plan or proof of trading activity (e.g., contracts, invoices) depending on the nature of the business",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
];

export default data;
