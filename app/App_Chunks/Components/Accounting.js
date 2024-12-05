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
        <span className="font-Synonym font-[600]">Tax Management</span> Auditing
        helps businesses ensure their tax filings are accurate and compliant.
        Ensures that taxes are calculated correctly and minimizes the risk of
        disputes with the UAE Federal Tax Authority.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Local and International Recognition
        </span>{" "}
        The UAE is a key global business hub, and its regulatory framework
        aligns with international financial standards, including IFRS
        (International Financial Reporting Standards).
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Improved Decision-Making
        </span>{" "}
        Audits provide valuable insights that go beyond financial accuracy. By
        identifying areas of improvement, auditing helps you make informed,
        data-driven decisions.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        The <span className="text-lime-500">Audit Process</span> We Follow:
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Initial Consultation",
        isPoints: false,
        desc: " We begin by understanding your business, its structure, and the specific needs for your audit.",
      },
      {
        title: "Planning & Risk Assessment",
        isPoints: false,
        desc: "We develop an audit plan, identify potential risks, and outline the audit scope.",
      },
      {
        title: "Filing VAT Returns",
        isPoints: false,
        desc: "Businesses must submit VAT returns to the Federal Tax Authority (FTA) on a quarterly or monthly basis, depending on their turnover. The VAT return must detail the VAT collected on sales and the VAT paid on purchases (input tax), with the difference being payable or refundable.",
      },
      {
        title: " Execution",
        isPoints: false,
        desc: " Our audit team conducts fieldwork, gathers data, and analyzes financial statements, internal processes, and controls.",
      },
      {
        title: "Reporting",
        isPoints: false,
        desc: ": We present our findings in a clear, concise report, outlining any discrepancies, risks, and recommendations for improvement.",
      },
      {
        title: " Follow-Up",
        isPoints: false,
        desc: "We provide ongoing support and guidance to help you implement audit recommendations and stay compliant.",
      },
    ],
    sixthTitle: "",
    sixthTableHead: "",
    sixthTableBody: [""],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },

  {
    name: "Corporate Tax",
    heroTitle: (
      <Heading>
        Welcome to{" "}
        <span className="text-lime-500">
          BizGrowth Corporate Tax Consultancy
        </span>{" "}
        Services
      </Heading>
    ),
    heroDescription:
      "In the UAE, businesses are evolving and facing new challenges, especially with the introduction of corporate tax laws. At BizGrowth, we are here to help you navigate the complexities of corporate taxation, ensuring compliance while optimizing your tax strategy for maximum benefit.",
    heroImg: "/media/mainland/dubai.svg",
    corpTaxTitle: " Corporate Tax in the UAE",
    corpTaxDesc: (
      <p>
        The UAE government has introduced a new corporate tax regime on June 1,
        2023 that is set to impact businesses operating in the country.
        Corporate tax applies to the profits of businesses. The corporate tax
        law aims to support economic diversification and ensure fairness in the
        taxation system.
        <br /> The UAE corporate tax rate is set at 9% for businesses earning
        profits above AED 375,000, with businesses below this threshold
        generally exempt from tax. However, tax laws are complex, and each
        business may have different considerations depending on its structure
        and activities.
      </p>
    ),
    corpTaxImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        <span className="text-lime-500">Corporate Tax</span> Rates in the UAE
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Standard Corporate Tax Rate",
        icon: <FaPeopleGroup />,
        desc: " 9% on taxable profits exceeding AED 375,000. This rate applies to businesses making profits above this threshold.",
      },
      {
        title: "Exemption for Small Businesses",
        icon: <FaBusinessTime />,
        desc: "0% tax rate on taxable profits up to AED 375,000. This exemption is designed to support smaller businesses, helping them grow without the burden of taxation.",
      },
      {
        title: "Special Tax Rates for Specific Industries",
        icon: <MdIncompleteCircle />,
        desc: "Certain sectors, such as petroleum and natural gas companies, may be subject to different tax rates, which could be higher, depending on agreements with the government.",
      },
      {
        title: "Free zone entities",
        icon: <MdIncompleteCircle />,
        desc: "Businesses operating within designated free zones may be eligible for specific tax exemptions or reduced rates, depending on the free zone's regulations and the nature of the business.",
      },
    ],
    corpTitle: (
      <Heading className="">
        Difference between <span>VAT</span> and{" "}
        <span className="text-lime-500">Corporate Tax</span>
      </Heading>
    ),
    corpTableHead: ["Aspect", "Corporate Tax", "VAT"],
    corpTableBody: [
      {
        title: "Type of Tax",
        desc1: "Direct Tax (on Profits)",
        desc2: "Indirect Tax (on Consumption)",
      },
      {
        title: "Taxpayer",
        desc1: "Paid by the business on profits",
        desc2: "Collected by the business, paid by the consumer",
      },
      {
        title: "Calculation Basis",
        desc1: "Based on net profits",
        desc2: "Based on sale price of goods/services",
      },
      {
        title: "Tax Rate",
        desc1: "Fixed percentage of profits (e.g., 9% in UAE)",
        desc2: "Fixed percentage of sales price (e.g., 5% in UAE)",
      },
      {
        title: "Filing Frequency",
        desc1: "Annual tax returnQuarterly/Biannually",
        desc2: "Quarterly/Biannually",
      },
      {
        title: "Who Pays the Tax?",
        desc1: "Business",
        desc2: "End consumer",
      },
      {
        title: "Exemptions",
        desc1: "Exempt for profits below AED 375,000 in UAE",
        desc2: "Certain goods/services are exempt or zero-rated",
      },
    ],
    thirdTitle: (
      <Heading>
        Our <span className="text-lime-500">Corporate Tax</span> Services
      </Heading>
    ),
    thirdSubDesc:
      "At BizGrowth, our expert team of tax professionals offers a range of services to ensure your business complies with UAE corporate tax laws while optimizing your tax position",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Tax Compliance and Filing
        </span>{" "}
        We ensure that your business complies with all relevant tax laws and
        filing requirements, including corporate tax returns.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Corporate Tax Advisory</span>{" "}
        Our experienced tax advisors provide strategic guidance customized to
        your business model and sector.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Tax Structure Optimization
        </span>{" "}
        Our experts analyze your business structure to ensure the most
        tax-efficient setup, considering various options like free zones,
        partnerships, or corporate entities.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          International Tax Planning
        </span>{" "}
        For businesses with cross-border operations, we offer international tax
        planning to minimize double taxation and optimize tax treaties.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Transfer Pricing</span>{" "}
        Transfer pricing regulations are an important aspect of corporate tax
        compliance. We provide advice on arm`s length pricing for intercompany
        transactions and ensure proper documentation to avoid tax risks.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Audit Support</span> We offer
        audit support to ensure your business is prepared in the event of a tax
        audit by the authorities.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Steps for <span className="text-lime-500">Corporate Tax</span>{" "}
        Procedures in the UAE
      </Heading>
    ),
    fourthPoints: [
      {
        title: " Determine Your Taxable Status",
        isPoints: false,
        desc: "Not all businesses will be subject to corporate tax in the UAE. If your business's taxable profits exceed AED 375,000, you will need to pay the standard corporate tax rate of 9%.If you are operating in a UAE Free Zone, you might be eligible for specific exemptions.",
      },
      {
        title: " Register with the Federal Tax Authority (FTA)",
        isPoints: false,
        desc: "Businesses need to register for corporate tax with the UAE Federal Tax Authority (FTA) to obtain a Tax Registration Number (TRN).",
      },
      {
        title: "Assess Your Taxable Income",
        isPoints: false,
        desc: " Businesses are required to calculate their taxable profits, which are based on their financial statements (profit and loss, balance sheet).",
      },
      {
        title: " Prepare Financial Statements",
        isPoints: false,
        desc: "Businesses must file an annual corporate tax return with the FTA, which includes details of income, deductions, and tax liability.",
      },
      {
        title: "  Make Tax Payments",
        isPoints: false,
        desc: " Even after filing, ensure that all relevant tax records and financial statements are kept for a minimum of 5 years as per UAE tax law. These may be required for future audits or reviews.",
      },
      {
        title: " Tax Planning and Optimization",
        isPoints: false,
        desc: "Consider how your business structure can impact your tax liability, especially if you operate in multiple jurisdictions or in a Free Zone.",
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
        title: "Commercial Trade License",
        doc1: "A copy of the business’s commercial trade license issued by the relevant authority (e.g., Department of Economic Development).",
      },
      {
        title: "Certificate of Incorporation",
        doc1: "A copy of the company’s certificate of incorporation or registration with the relevant authorities.",
      },
      {
        title: "Shareholder Information",
        doc1: "Details of shareholders or owners, including personal identification documents (e.g., passport copy, Emirates ID).",
      },
      {
        title: "Memorandum of Association (MOA)",
        doc1: "A copy of the company's Memorandum of Association outlining the company’s structure, ownership, and operations.",
      },
      {
        title: "Company’s Financial Statements",
        doc1: "Most recent audited or unaudited financial statements, including profit and loss, balance sheet, and cash flow statements.",
      },
      {
        title: "Tax Registration Number (TRN)",
        doc1: "If applicable, provide the business’s previous TRN for VAT registration (if already registered).",
      },
      {
        title: "Contact Details",
        doc1: "Contact information, including the company’s physical address, phone number, and email address.",
      },
      {
        title: "Business Activities Description",
        doc1: "A copy of the Memorandum of Association (MOA) outlining the business structure and purpose for LLCs or partnerships.",
      },
      {
        title: "Free Zone Status (if applicable)",
        doc1: "If the company operates in a Free Zone, provide Free Zone registration documents and any tax exemptions or benefits it may be entitled to.",
      },
      {
        title: "Board Resolution (if applicable)",
        doc1: "A resolution from the board of directors authorizing the tax registration for the company (if required).",
      },
      {
        title: "Proof of Identity for Signatories",
        doc1: "Passport or Emirates ID copies of the individuals who will sign the corporate tax registration application.",
      },
      {
        title: "Financial Year End Date",
        doc1: "The company’s financial year-end date, which will be used for tax filing purposes.",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    name: "Accounting and Book keeping",
    heroTitle: (
      <Heading>
        Simplify Your Finances with{" "}
        <span className="text-lime-500">
          BizGrowth’s Expert Accounting & Bookkeeping
        </span>
        Services
      </Heading>
    ),
    heroDescription:
      "At BizGrowth, we specialize in providing professional accounting and bookkeeping services designed to simplify your business operations. Whether you’re a small business owner, or part of a large corporation, we offer solutions to help you stay organized, save time, and make informed financial decisions.",
    heroImg: "/media/mainland/dubai.svg",

    secondTitle: (
      <Heading className="!text-center w-full">
        Our <span className="text-lime-500">Accounting</span> and{" "}
        <span className="text-lime-500">Bookkeeping Services</span>
      </Heading>
    ),
    AccBookPoints: [
      {
        title: "BookKeeping Services",
        points: [
          {
            title: "Accounts Payable & Receivable",
            desc: "We manage your bills and invoices, ensuring timely payments and receipts for smooth cash flow",
          },
          {
            title: "General Ledger Maintenance",
            desc: "We keep track of all your transactions and categorize them to provide accurate financial reporting",
          },
          {
            title: "Bank Reconciliation",
            desc: "We reconcile your bank statements to ensure that your books align with your financial statements",
          },
          {
            title: "Payroll Management",
            desc: "We handle all aspects of payroll, including deductions, taxes, and employee compensation, ensuring compliance with local laws",
          },
        ],
      },
      {
        title: "Accounting Services",
        points: [
          {
            title: "Financial Statement Preparation",
            desc: " Our team prepares balance sheets, income statements, and cash flow statements to provide a clear picture of your financial health.",
          },
          {
            title: "Tax Preparation & Filing",
            desc: "We ensure accurate and timely filing of your tax returns, helping you maximize deductions and minimize liabilities.",
          },
          {
            title: "Management Reports",
            desc: "Receive detailed reports and insights to help you make strategic business decisions.",
          },
          {
            title: "Budgeting & Forecasting",
            desc: "We assist with financial planning, ensuring that your business stays on track and meets its financial objectives.",
          },
        ],
      },
      {
        title: " Tax Services",
        points: [
          {
            title: "Tax Planning & Strategy",
            desc: "We provide proactive tax strategies to reduce your tax burden and keep your business compliant.",
          },
          {
            title: "Tax Filing for Individuals & Businesses",
            desc: "We handle tax filings for individuals, small businesses, and corporations.",
          },
          {
            title: "Management Reports",
            desc: "f you’re ever audited, we’ll be by your side to ensure a smooth process.",
          },
        ],
      },
    ],

    thirdTitle: (
      <Heading>
        Our <span className="text-lime-500">Corporate Tax</span> Services
      </Heading>
    ),
    thirdSubDesc:
      "At BizGrowth, our expert team of tax professionals offers a range of services to ensure your business complies with UAE corporate tax laws while optimizing your tax position",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Cost Savings</span> By
        outsourcing, businesses can save on the costs of hiring full-time
        employees, providing benefits, and investing in expensive accounting
        software or training.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Access to Expertise</span>{" "}
        Outsourced services are managed by experts who specialize in areas such
        as tax planning, financial reporting, payroll management, and auditing.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Increased Focus on Core Business Activities
        </span>{" "}
        By outsourcing accounting and bookkeeping, you can free up valuable time
        and resources to focus on growing your business.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Improved Accuracy and Compliance
        </span>{" "}
        Outsourcing firms use advanced software and professionals which can
        reduce the risk of errors, ensuring that your financial records are
        accurate and up-to-date.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Better Financial Decision-Making
        </span>{" "}
        With outsourcing, you gain access to detailed and real-time financial
        reports that can help you make informed decisions about your business.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Time Saving</span> With
        professional accountants handling your books, reports and financial
        statements are prepared more quickly and efficiently.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Risk Mitigation</span>
        Professional accounting firms have internal controls in place to reduce
        the risk of fraud or financial mismanagement.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Scalability and Flexibility
        </span>
        Outsourcing firms can easily scale their services based on the changing
        needs of your business.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Our <span className="text-lime-500">Accounting</span> and{" "}
        <span className="text-lime-500">Bookkeeping Procedures</span>
      </Heading>
    ),
    fourthPoints: [
      {
        title: " Data Collection",
        isPoints: false,
        desc: "The first step in accounting and bookkeeping is collecting all the source documents for transactions. This includes receipts, invoices, bank statements, credit card statements, and any other paperwork that verifies a financial transaction.",
      },
      {
        title: "  Transaction Categorization",
        isPoints: false,
        desc: "Once all documents are collected, the next step is categorizing each transaction. This involves classifying expenses and revenues into appropriate accounts (e.g., assets, liabilities, equity, revenue, and expenses).",
      },
      {
        title: " Journal Entries",
        isPoints: false,
        desc: "All business transactions are initially recorded as journal entries. A journal entry includes details of the transaction, such as the date, the accounts affected, and the amounts debited and credited.",
      },
      {
        title: "  Posting to the General Ledger",
        isPoints: false,
        desc: "After the journal entries are recorded, they are transferred (posted) to the general ledger. The general ledger contains all accounts, such as assets, liabilities, equity, income, and expenses, and is used to prepare financial statements.",
      },
      {
        title: " Trial Balance Preparation",
        isPoints: false,
        desc: "Once all entries are posted to the general ledger, a trial balance is prepared to ensure that the total debits equal the total credits. This helps in identifying any errors in the recording or posting process.",
      },
      {
        title: " Adjusting Entries",
        isPoints: false,
        desc: "Adjusting entries are made to account for any expenses or revenues that have been incurred but not yet recorded. These adjustments ensure that the financial statements are accurate and reflect the true financial position of the business.",
      },
      {
        title: "Preparing Financial Statements",
        isPoints: true,
        desc: null,
        points: [
          "Income Statement (Profit & Loss Statement): The income statement summarizes the company's revenues, expenses, and profits or losses over a specific period",
          "Balance Sheet: The balance sheet provides a snapshot of the company’s assets, liabilities, and equity at a given point in time.",
          "Cash Flow Statement: The cash flow statement tracks the movement of cash into and out of the business, categorized by operating, investing, and financing activities.",
        ],
      },
      {
        title: " Closing the Books",
        isPoints: false,
        desc: "At the end of an accounting period, temporary accounts (such as revenue and expense accounts) are closed to prepare for the next period. The balances in these accounts are transferred .",
      },
      {
        title: "Reconciliation",
        isPoints: false,
        desc: "Reconciliation involves comparing the company’s accounting records (e.g., cash or bank accounts) with external records (such as bank statements) to identify and resolve discrepancies.",
      },
      {
        title: "Financial Reporting and Analysis",
        isPoints: false,
        desc: "After preparing the financial statements, accountants analyze the data to evaluate the financial health of the business. This can include profitability analysis, cash flow analysis, and financial ratios.",
      },
      {
        title: "Tax Filing and Compliance",
        isPoints: false,
        desc: " Based on the financial data, accountants prepare and file taxes for the business, ensuring compliance with local, state, and federal tax laws. This may include corporate taxes, payroll taxes, sales tax, etc.",
      },
      {
        title: "Archiving and Storing Records",
        isPoints: false,
        desc: "Properly storing and archiving accounting and bookkeeping records is essential for future reference and audits. Businesses typically retain financial records for several years, depending on local regulations.",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
];

export default data;
