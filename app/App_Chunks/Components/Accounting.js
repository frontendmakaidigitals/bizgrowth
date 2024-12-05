import Heading from "./Heading";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
const data = [
  {
    name: "VAT Consultancy",
    heroTitle: (
      <Heading>
        Expert <span className="text-lime-500">VAT Consultancy</span> Services
        for Your Business
      </Heading>
    ),
    heroDescription:
      "At BizGrowth, we specialize in providing expert VAT consulting services for businesses of all sizes. With years of experience and a deep understanding of VAT laws and regulations, we offer tailored services to ensure your business remains compliant and efficient, helping you minimize tax liabilities and maximize opportunities for growth.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Services we provide as{" "}
        <span className="text-lime-500">VAT Consultants</span>
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "VAT Registration & Deregistration",
        icon: <FaPeopleGroup />,
        desc: " We assist businesses in registering for VAT, ensuring all necessary documentation is submitted, and guiding you through the deregistration process if needed.",
      },
      {
        title: "VAT Compliance & Returns",
        icon: <FaBusinessTime />,
        desc: "Our experts help you navigate complex VAT rules, ensuring your business remains compliant with all VAT regulations. We also handle the preparation and submission of VAT returns on your behalf.",
      },
      {
        title: "VAT Planning & Strategy",
        icon: <MdIncompleteCircle />,
        desc: " We analyze your current VAT position and advise on tax-efficient strategies to optimize your VAT processes, minimize liabilities, and take advantage of VAT exemptions and deductions.",
      },
      {
        title: "Cross-Border VAT Advice",
        icon: <MdIncompleteCircle />,
        desc: " For businesses engaged in international trade, we offer expert advice on VAT issues related to imports, exports, and cross-border transactions to ensure you're compliant across different jurisdictions.",
      },
      {
        title: "VAT Audits & Investigations",
        icon: <MdIncompleteCircle />,
        desc: " We provide support during VAT audits or investigations, representing your business with tax authorities and ensuring that you comply with all requirements.",
      },
      {
        title: "VAT Refunds & Reclaims",
        icon: <MdIncompleteCircle />,
        desc: " If you’ve overpaid VAT, our team can help you recover VAT that’s owed to your business, guiding you through the refund process and maximizing your potential claim.",
      },
      {
        title: "Tax Registration Number (TRN) Certificate",
        icon: <MdIncompleteCircle />,
        desc: "Assistance in acquiring and certifying TRN, ensuring adherence to legal requirements.",
      },
    ],
    thirdTitle: "",
    thirdSubDesc: "",
    thirdPoints: [],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        <span className="text-lime-500 ">VAT Procedures</span> in UAE
      </Heading>
    ),
    fourthPoints: [
      {
        title: "VAT Registration",
        isPoints: true,
        desc: "Businesses in the UAE must register for VAT if their taxable supplies and imports exceed the mandatory registration threshold. The thresholds are as follows.",
        points: [
          "Mandatory Registration: AED 375,000 in annual taxable supplies",
          "Voluntary Registration: AED 187,500 in annual taxable supplies",
        ],
      },
      {
        title: "Issuing VAT-Inclusive Invoices",
        isPoints: false,
        desc: "Once registered for VAT, businesses are required to issue invoices that reflect VAT at the rate of 5% (standard rate) on taxable goods and services.",
      },
      {
        title: "Filing VAT Returns",
        isPoints: false,
        desc: "Businesses must submit VAT returns to the Federal Tax Authority (FTA) on a quarterly or monthly basis, depending on their turnover. The VAT return must detail the VAT collected on sales and the VAT paid on purchases (input tax), with the difference being payable or refundable.",
      },
      {
        title: " Paying VAT",
        isPoints: false,
        desc: "All VAT-registered businesses must maintain detailed records of their VAT transactions, including invoices, receipts, and records of sales and purchases, for a period of 5 years. These records must be available for inspection by the FTA upon request.",
      },
      {
        title: " Maintaining VAT Records",
        isPoints: false,
        desc: "Carefully review the bank’s terms and conditions, including fees, transaction limits, and any additional services provided.",
      },
      {
        title: " VAT Refunds",
        isPoints: false,
        desc: "If a business has paid more VAT on purchases (input VAT) than it has collected on sales (output VAT), it may be eligible for a refund of the excess VAT.",
      },
      {
        title: "VAT Audit and Inspections",
        isPoints: false,
        desc: "The FTA can perform audits and inspections of VAT records to ensure compliance. Businesses must be prepared for such audits by keeping their records up to date and following all VAT laws.",
      },
      {
        title: "Penalties for Non-Compliance",
        isPoints: true,
        desc: "The FTA imposes penalties for failing to comply with VAT procedures. Some common penalties include.",
        points: [
          "Late Registration: AED 1,000 for first-time violations, AED 2,000 for repeated violations",
          "Late VAT Return Submission: AED 1,000 for the first violation, AED 2,000 for subsequent violations.",
          "Failure to Maintain Records: AED 10,000 for failing to maintain records for 5 years",
          "Late Payment of VAT: Penalties are imposed for late payment, which can increase over time",
        ],
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        DOCUMENTS REQUIRED FOR <span className="text-lime-500">VAT</span>
      </Heading>
    ),
    sixthTableHead: ["Document", "Description"],
    sixthTableBody: [
      {
        title: "Trade License",
        doc1: "A copy of the valid trade license issued by the relevant UAE authority confirming your business activity and legal status.",
      },
      {
        title: "Emirates ID",
        doc1: "A copy of the Emirates ID of the owner or authorized signatory of the business.",
      },
      {
        title: "Passport Copy (for Foreign Nationals)",
        doc1: "A copy of the passport for foreign nationals acting as the business owner or authorized signatory. Must be valid and clearly visible.",
      },
      {
        title: "Proof of Business Address",
        doc1: "Document showing the official business address (e.g., tenancy contract or utility bill). Must be recent (within the last 3 months)..",
      },
      {
        title: "Bank Account Details",
        doc1: "A copy of the bank account statement or a letter from your bank confirming your business’s active bank account details.",
      },
      {
        title: "VAT Declaration (if applicable)",
        doc1: "A declaration stating the taxable supplies and turnover of the business in the last 12 months or expected turnover for the next 30 days, confirming VAT registration eligibility.",
      },
      {
        title: "Authorized Signatory Details",
        doc1: "A copy of the Emirates ID or passport for the authorized signatory (if someone other than the business owner is acting as the signatory)..",
      },
      {
        title: "Memorandum of Association (for LLCs and Partnerships)",
        doc1: "A copy of the Memorandum of Association (MOA) outlining the business structure and purpose for LLCs or partnerships.",
      },
      {
        title: "Detailed Description of Business Activities",
        doc1: "Clear description of the business activities or products/services offered to help the FTA assess VAT categories applicable to your business.",
      },
      {
        title: "Tax Group Details (if applicable)",
        doc1: "If registering as part of a tax group, provide the details of the tax group structure.",
      },
      {
        title: "Commercial Registration Certificate (if applicable)",
        doc1: "Some free zones or business types may require an additional commercial registration certificate.",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
    vatTitle: (
      <Heading>
        <span className="text-lime-500">Industries</span> We Serve
      </Heading>
    ),
    vatDisc:
      "Our VAT consultancy services cater to a wide range of industries, including",
    vatPoints: [
      "E-commerce & Retail",
      "Manufacturing & Wholesale",
      "Hospitality & Tourism",
      "Construction & Real Estate",
      "import & export",
      "Financial Services",
      "Healthcare",
    ],
    vatFooter:
      "No matter the industry, we offer specialized VAT advice tailored to your business`s unique challenges and opportunities.",
  },

  {
    name: "Auditing",
    heroTitle: (
      <Heading>
        <span className="text-lime-500">Audit Solutions</span> for Your Business
        Success
      </Heading>
    ),
    heroDescription:
      "At BizGrowth, we understand the importance of ensuring your financial records are accurate, transparent, and compliant with regulatory standards. Our professional auditing services offer businesses of all sizes the assurance they need to operate confidently and efficiently. We provide expert guidance that empowers your business to make informed decisions.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Our <span className="text-lime-500 ">Auditing</span> Services
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: " Financial Statement Audits",
        icon: <FaPeopleGroup />,
        desc: " We perform detailed audits of your financial statements to ensure they reflect an accurate and fair representation of your company’s financial position.",
      },
      {
        title: " Internal Audits",
        icon: <FaBusinessTime />,
        desc: "Our team evaluates the effectiveness of your systems, identifies risks, and provides solutions to improve operational efficiency and reduce financial risks.",
      },
      {
        title: "Compliance Audits",
        icon: <MdIncompleteCircle />,
        desc: " Our compliance audits ensure that your company adheres to applicable laws, industry standards, and regulatory requirements, minimizing potential risks and penalties.",
      },
      {
        title: " Tax Audits",
        icon: <MdIncompleteCircle />,
        desc: "We conduct in-depth reviews of your tax records, identify errors, and offer solutions to resolve potential issues before they become problems.",
      },
      {
        title: " IT Audits",
        icon: <MdIncompleteCircle />,
        desc: " As technology continues to play a critical role in business operations, our IT audits assess the security, functionality, and efficiency of your IT infrastructure.",
      },
      {
        title: " Operational Audits",
        icon: <MdIncompleteCircle />,
        desc: " We evaluate your business processes to identify inefficiencies, recommend improvements, and help you optimize resources, increasing productivity and profitability.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Why Your <span className="text-lime-500">Business</span> Needs{" "}
        <span className="text-lime-500">Auditing</span> Services?
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Regulatory Compliance</span>{" "}
        The UAE has a strict regulatory framework that businesses must adhere
        to, including the Federal Tax Authority (FTA) regulations. Regular
        audits ensure that your business complies with local laws, including VAT
        requirements, financial reporting standards, and labor regulations,
        helping to avoid potential penalties.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Fraud Detection and Prevention
        </span>{" "}
        Audits play a critical role in detecting and preventing fraud.
        Independent auditors examine your business’s financial records, internal
        controls, and operations for irregularities, errors, or fraudulent
        activity
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Improved Decision-Making
        </span>{" "}
        Audits provide valuable insights that go beyond financial accuracy. By
        identifying inefficiencies, operational risks, and areas of improvement,
        auditing helps you make informed, data-driven decisions.
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
        <span className="text-lime-500 ">VAT Procedures</span> in UAE
      </Heading>
    ),
    fourthPoints: [
      {
        title: "VAT Registration",
        isPoints: true,
        desc: "Businesses in the UAE must register for VAT if their taxable supplies and imports exceed the mandatory registration threshold. The thresholds are as follows.",
        points: [
          "Mandatory Registration: AED 375,000 in annual taxable supplies",
          "Voluntary Registration: AED 187,500 in annual taxable supplies",
        ],
      },
      {
        title: "Issuing VAT-Inclusive Invoices",
        isPoints: false,
        desc: "Once registered for VAT, businesses are required to issue invoices that reflect VAT at the rate of 5% (standard rate) on taxable goods and services.",
      },
      {
        title: "Filing VAT Returns",
        isPoints: false,
        desc: "Businesses must submit VAT returns to the Federal Tax Authority (FTA) on a quarterly or monthly basis, depending on their turnover. The VAT return must detail the VAT collected on sales and the VAT paid on purchases (input tax), with the difference being payable or refundable.",
      },
      {
        title: " Paying VAT",
        isPoints: false,
        desc: "All VAT-registered businesses must maintain detailed records of their VAT transactions, including invoices, receipts, and records of sales and purchases, for a period of 5 years. These records must be available for inspection by the FTA upon request.",
      },
      {
        title: " Maintaining VAT Records",
        isPoints: false,
        desc: "Carefully review the bank’s terms and conditions, including fees, transaction limits, and any additional services provided.",
      },
      {
        title: " VAT Refunds",
        isPoints: false,
        desc: "If a business has paid more VAT on purchases (input VAT) than it has collected on sales (output VAT), it may be eligible for a refund of the excess VAT.",
      },
      {
        title: "VAT Audit and Inspections",
        isPoints: false,
        desc: "The FTA can perform audits and inspections of VAT records to ensure compliance. Businesses must be prepared for such audits by keeping their records up to date and following all VAT laws.",
      },
      {
        title: "Penalties for Non-Compliance",
        isPoints: true,
        desc: "The FTA imposes penalties for failing to comply with VAT procedures. Some common penalties include.",
        points: [
          "Late Registration: AED 1,000 for first-time violations, AED 2,000 for repeated violations",
          "Late VAT Return Submission: AED 1,000 for the first violation, AED 2,000 for subsequent violations.",
          "Failure to Maintain Records: AED 10,000 for failing to maintain records for 5 years",
          "Late Payment of VAT: Penalties are imposed for late payment, which can increase over time",
        ],
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        DOCUMENTS REQUIRED FOR <span className="text-lime-500">VAT</span>
      </Heading>
    ),
    sixthTableHead: ["Document", "Description"],
    sixthTableBody: [
      {
        title: "Trade License",
        doc1: "A copy of the valid trade license issued by the relevant UAE authority confirming your business activity and legal status.",
      },
      {
        title: "Emirates ID",
        doc1: "A copy of the Emirates ID of the owner or authorized signatory of the business.",
      },
      {
        title: "Passport Copy (for Foreign Nationals)",
        doc1: "A copy of the passport for foreign nationals acting as the business owner or authorized signatory. Must be valid and clearly visible.",
      },
      {
        title: "Proof of Business Address",
        doc1: "Document showing the official business address (e.g., tenancy contract or utility bill). Must be recent (within the last 3 months)..",
      },
      {
        title: "Bank Account Details",
        doc1: "A copy of the bank account statement or a letter from your bank confirming your business’s active bank account details.",
      },
      {
        title: "VAT Declaration (if applicable)",
        doc1: "A declaration stating the taxable supplies and turnover of the business in the last 12 months or expected turnover for the next 30 days, confirming VAT registration eligibility.",
      },
      {
        title: "Authorized Signatory Details",
        doc1: "A copy of the Emirates ID or passport for the authorized signatory (if someone other than the business owner is acting as the signatory)..",
      },
      {
        title: "Memorandum of Association (for LLCs and Partnerships)",
        doc1: "A copy of the Memorandum of Association (MOA) outlining the business structure and purpose for LLCs or partnerships.",
      },
      {
        title: "Detailed Description of Business Activities",
        doc1: "Clear description of the business activities or products/services offered to help the FTA assess VAT categories applicable to your business.",
      },
      {
        title: "Tax Group Details (if applicable)",
        doc1: "If registering as part of a tax group, provide the details of the tax group structure.",
      },
      {
        title: "Commercial Registration Certificate (if applicable)",
        doc1: "Some free zones or business types may require an additional commercial registration certificate.",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
];

export default data;
