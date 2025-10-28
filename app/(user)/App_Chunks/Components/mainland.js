import Heading from "./Heading";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
const data = [
  {
    bannerTitle: "READY TO LAUNCH YOUR BUSINESS IN DUBAI?",
    bannerDesc:
      "Starting your business in Dubai has never been easier. Let Biz Growth be your trusted partner in navigating the Dubai Mainland business setup process. Contact us today for a free consultation and let’s take the first step toward turning your business dreams into reality!",
    name: "dubai-mainland",
    heroTitle: (
      <Heading>
        Welcome to{" "}
        <span className="text-lime-600 font-SplineSans">BIZ GROWTH</span> - Your
        Trusted Partner for Dubai Mainland Business Setup
      </Heading>
    ),
    heroDescription:
      "Are you looking to start a business in Dubai`s thriving marketplace? At Biz Growth, we specialize in providing comprehensive business formation services for entrepreneurs, startups, and established businesses looking to expand to Dubai Mainland. With our expertise, we ensure that your business setup process is seamless, fast, and fully compliant with UAE regulations.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">Dubai Mainland</span>{" "}
        Business Setup?
      </Heading>
    ),
    secondSubDescription:
      "Dubai Mainland offers numerous advantages to businesses, including:",
    secondPoints: [
      {
        title: "Access to a vast customer base",
        icon: <FaPeopleGroup />,
        desc: "Operate anywhere in the UAE and trade freely in the local market.",
      },
      {
        title: "Broader business activities",
        icon: <FaBusinessTime />,
        desc: "Flexibility to choose from a wide range of activities.",
      },
      {
        title: "Complete ownership",
        icon: <MdIncompleteCircle />,
        desc: " A Dubai Mainland license allows businesses to be owned.",
      },
      {
        title: "No limitation on office space or staff",
        icon: <MdIncompleteCircle />,
        desc: " Unlike free zones, there are no restrictions on office size or number of employees.",
      },
      {
        title: "Unlimited potential for growth and expansion",
        icon: <MdIncompleteCircle />,
        desc: " Dubai Mainland provides businesses with the opportunity to expand regionally and globally.",
      },
      {
        title: "Strategic location",
        icon: <MdIncompleteCircle />,
        desc: "Dubai’s strategic location as a global business hub provides easy access to markets in the Middle East, Africa and Asia.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        The Different Types of{" "}
        <span className="text-lime-500">DUBAI Mainland License</span>
      </Heading>
    ),
    dubaiComplianceTitle: (
      <Heading>
        Compliance with{" "}
        <span className="text-lime-500">Government Policies</span> for Running a
        Business
      </Heading>
    ),
    dubaiComplianceSubTitle:
      "Starting a business in Dubai’s Mainland offers exciting opportunities for entrepreneurs and companies looking to establish themselves in a dynamic market. However, to ensure a smooth and legally compliant setup process, it`s essential to be aware of the key points for complying with the Dubai government’s regulations. Here’s a checklist to help you navigate the requirements:",
    dubaiComplianceChecks: [
      {
        title:
          "Compliance with Dubai Municipality and Other Regulatory Authorities",
        desc: "Depending on your business activity, you may need additional approvals from other government entities, such as",
        points: [
          "Dubai Municipality for construction, food, and healthcare-related businesses",
          "Dubai Health Authority (DHA) for healthcare services.",
          "Dubai Civil Aviation Authority (DCAA) for aviation-related businesses.",
        ],
        extraDesc:
          "Be sure to check with the DED to identify any industry-specific requirements.",
      },
      {
        title: "Visa and Employment Compliance",
        desc: "As a mainland business, you are required to adhere to labor laws and immigration regulations",
        points: [
          "Labor Cards and Work Visas: You must ensure that your employees are legally employed, registered with the Ministry of Human Resources and Emiratisation (MOHRE), and have valid work visas.",
          "Emiratisation: Companies in the UAE are required to meet Emiratisation quotas, hiring UAE nationals within their workforce.",
        ],
      },
      {
        title: "Tax and Financial Compliance",
        desc: "While Dubai offers a tax-friendly environment, your business must adhere to certain financial reporting standards, such as",
        points: [
          "VAT Registration (if your turnover exceeds the threshold).",
          "Keeping proper financial records and bookkeeping.",
          "Paying any applicable fees for licensing and renewal.",
        ],
      },
      {
        title: "Business License Renewal",
        desc: "Dubai Mainland licenses are typically valid for one year. To remain compliant, you must renew your business license before it expires. Ensure that your business continues to meet all regulatory requirements, including office space, ownership structure, and any industry-specific regulations",
      },
      {
        title: "Adherence to Business Activity Regulations",
        desc: "Ensure that your business is operating within the scope of the licensed activities. The DED specifies the range of activities that can be conducted under a particular license type. If your business expands into new activities, you will need to update your license accordingly.",
      },
    ],
    thirdSubDesc:
      "In Dubai, businesses that operate on the mainland need to obtain a Dubai Mainland License from the Department of Economic Development (DED). The type of license depends on the nature of the business activity. Below are the main types of Dubai Mainland licenses:",
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
          "Complete application form for initial approval",
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
      "This table lists the primary documents required for each business entity type in Dubai Mainland. Keep in mind that additional documents may be needed based on the specific industry, business activity, or any regulatory requirements. It’s advisable to consult with Biz Growth business setup consultant for more detailed and accurate information based on your unique business needs.",
    seventhTitle: (
      <Heading className="w-full !text-center">
        Why Choose <span className="text-lime-500">BIZ GROWTH</span> for Your
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
  {
    bannerTitle: "Get Started Today!",
    bannerDesc:
      "Ready to register your business? Let Biz Growth Consultants guide you through the process of obtaining your Sharjah Mainland License with all the necessary documentation.",
    name: "sharjah-mainland",
    heroTitle: (
      <Heading>
        <span className="text-lime-600 font-SplineSans"> Sharjah Mainland</span>{" "}
        - Your License: Your Gateway to Business Success in the UAE
      </Heading>
    ),
    heroDescription:
      "Welcome to the leading platform for obtaining a Sharjah Mainland Business License. Whether you're looking to start a new business or expand your operations, our professional services ensure a seamless and efficient process for securing your Mainland license in Sharjah. Let us help you navigate the regulatory landscape and start your business journey today in Sharjah. Sharjah is a dynamic emirate in the UAE offering a thriving business environment with numerous opportunities for entrepreneurs. A Sharjah mainland license is the ideal choice for business seeking to operate within the UAE and engage directly with local and international clients.",
    heroImg: "/media/mainland/sharjah.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">Sharjah Mainland</span>{" "}
        Business Setup?
      </Heading>
    ),
    secondSubDescription:
      "Sharjah is one of the most economically dynamic regions of the UAE, offering a strategic location, strong infrastructure, and competitive business environment. The benefits of establishing a business in Sharjah include:",
    secondPoints: [
      {
        title: "Strategic Location",
        icon: <FaPeopleGroup />,
        desc: " Sharjah is just minutes away from Dubai, offering easy access to one of the world’s largest business hubs.",
      },
      {
        title: "Affordability",
        icon: <FaBusinessTime />,
        desc: " Compared to other Emirates, Sharjah offers cost-effective office spaces and lower operational costs.",
      },
      {
        title: "Government Contracts",
        icon: <MdIncompleteCircle />,
        desc: "Eligibility to participate in government tenders.",
      },
      {
        title: "Skilled Workforce",
        icon: <MdIncompleteCircle />,
        desc: " With a high standard of education and technical expertise, Sharjah offers a highly skilled labor force.",
      },
      {
        title: "Tax Benefits",
        icon: <MdIncompleteCircle />,
        desc: "Enjoy tax exemptions and incentives offered to companies in the UAE.",
      },
      {
        title: "Access to Local Market",
        icon: <MdIncompleteCircle />,
        desc: " Directly engage with local customers and suppliers.",
      },
      {
        title: "Ease of Currency Regulations",
        icon: <MdIncompleteCircle />,
        desc: "Sharjah does not impose restrictions on use of foreign currency.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        The Different Types of{" "}
        <span className="text-lime-500">SHARJAH Mainland License</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Commercial License :</span> A
        Commercial License is issued to businesses involved in trading, retail,
        and distribution of goods. It allows companies to engage in various
        commercial activities such as buying, selling, and importing/exporting
        products.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License :</span> An
        Industrial License is granted to businesses involved in the
        manufacturing, production, or industrial processing of goods. Companies
        with this license can operate in factories, assembly plants, or
        warehouses.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Professional License :</span>{" "}
        A Professional License is for businesses that offer specialized services
        rather than physical products. This license is typically granted to
        professionals, consultants, and service providers.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Tourism License :</span> A
        Tourism License is for businesses involved in travel and tourism-related
        activities. This license enables companies to provide services related
        to tourism, including travel agencies, tour operators, and hospitality
        services.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Agricultural License :</span>{" "}
        An Agricultural License is issued to businesses operating in
        agriculture, horticulture, and other farming activities. This includes
        companies that deal with the cultivation, processing, and export of
        agricultural products.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Healthcare License :</span> A
        Healthcare License is granted to medical and health-related businesses.
        These include healthcare providers, pharmacies, and medical clinics.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Educational License :</span>{" "}
        An Educational License is issued for businesses involved in educational
        and training services. This includes schools, training centers, language
        institutions, and educational consultancy services.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Construction License :</span>{" "}
        A Construction License is for businesses engaged in construction and
        related services. This includes contractors, developers, and
        construction material suppliers.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        <span className="text-lime-500">THE PROCESSES</span> - SETTING UP A
        SHARJAH MAINLAND LICENSE
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Decide on Your Business Activity",
        isPoints: false,
        desc: "The first step is to clearly define the type of business you want to operate. Sharjah offers a wide range of licenses based on the nature of your business.",
      },
      {
        title: " Choose Your Business Structure and Name",
        isPoints: true,
        desc: "The next step is deciding on the legal structure of your business.",
        points: [
          "Limited Liability Company (LLC)",
          "Sole Proprietorship",
          "Civil Company",
        ],
      },
      {
        title: " Secure a Local Sponsor",
        isPoints: false,
        desc: "For certain business activities, you may require a local sponsor who acts as a representative for the business and does not have to be included in the business management. ",
      },
      {
        title: " Lease Office Space",
        isPoints: false,
        desc: "In Sharjah, having a physical office is a requirement for most businesses. This can be a traditional office, a co-working space, or even a warehouse, depending on your business activity.",
      },
      {
        title: " Prepare Necessary Documents",
        isPoints: false,
        desc: "Gather essential documents such as passport copies, visa copies, and proof of address.",
      },
      {
        title: " Submit Application to SEDD",
        isPoints: false,
        desc: "Submit your application to Sharjah Economic Development Department. Pay the required fee and complete the formalities.",
      },
      {
        title: "Obtain Initial Approval",
        isPoints: false,
        desc: " Upon successful application review, you will receive initial approval from SEDD.",
      },
      {
        title: "Draft and Notarize the Memorandum of Association (MoA)",
        isPoints: false,
        desc: "Memorandum of Association (MoA) is an outline of the company’s legal structure and this document must be notarized by the Sharjah Courts.",
      },
      {
        title: "Obtain Approvals from Other Authorities (if required) ",
        isPoints: false,
        desc: "Depending on your business activity, you may need additional approvals from specific authorities.",
      },
      {
        title: "Collect your license ",
        isPoints: false,
        desc: "Once all approvals are obtained, you can collect your final license from SEDD.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        <span className="text-lime-500">DOCUMENTS REQUIRED</span> FOR SETTING UP
        SHARJAH MAINLAND LICENSE
      </Heading>
    ),
    sixthTableHead: [
      "Document",
      "Limited Liability Company (LLC)",
      "Sole Proprietorship",
      "Branch Office",
    ],
    sixthTableBody: [
      {
        title: "Passport Copies",
        doc1: "All shareholders and partners",
        doc2: "Sole proprietor or business owner",
        doc3: "Branch manager and directors",
      },
      {
        title: "Visa Copies",
        doc1: "Foreign partners (if applicable)",
        doc2: "UAE residence visa for sole proprietor (if applicable)",
        doc3: "Branch office manager and employees (if applicable)",
      },
      {
        title: "No Objection Certificate (NOC)",
        doc1: "From current sponsor (if applicable)",
        doc2: "From current sponsor (if applicable)",
        doc3: "Not required unless specified by parent company",
      },
      {
        title: "Trade Name Reservation",
        doc1: "Approval from Sharjah Economic Development Department (SEDD)",
        doc2: "Approval from SEDD",
        doc3: "Approval from SEDD",
      },
      {
        title: "Memorandum of Association (MOA)",
        doc1: "Required for LLC agreement and distribution of shares",
        doc2: "Not required",
        doc3: "Not required",
      },
      {
        title: "Local Sponsor Agreement",
        doc1: "Agreement with UAE national sponsor (for foreign partners)",
        doc2: "Not applicable",
        doc3: "Not applicable",
      },
      {
        title: "Office Lease Agreement",
        doc1: "Signed rental agreement for physical office space",
        doc2: "Signed rental agreement for office space",
        doc3: "Signed rental agreement for branch office",
      },
      {
        title: "Proof of Address",
        doc1: "Recent utility bill or lease contract (for business location)",
        doc2: "Recent utility bill or lease agreement",
        doc3: "Recent utility bill or lease contract",
      },
      {
        title: "Business Activity Description",
        doc1: "Detailed description of business activities",
        doc2: "Detailed description of business activities",
        doc3: "Detailed description or business plan for the branch",
      },
      {
        title: "Bank Reference Letter",
        doc1: "(Optional) A letter confirming financial standing",
        doc2: "Not required",
        doc3: "(Optional) A letter confirming financial standing",
      },
      {
        title: "Professional Qualification Documents",
        doc1: "Required for certain business activities (e.g., consulting, healthcare)",
        doc2: "Required for service-based businesses (e.g., consultants, lawyers)",
        doc3: "Required if branch is engaged in professional services",
      },
      {
        title: "Parent Company Documents",
        doc1: "Not applicable",
        doc2: "Not applicable",
        doc3: "Certificate of Incorporation, MOA, Financial Statements",
      },
      {
        title: "Power of Attorney",
        doc1: "Not applicable",
        doc2: "Not applicable",
        doc3: "Required to authorize representative to act on behalf of parent company",
      },
    ],

    tableFooter: "",
    keyPoints: [
      {
        title: "Arabic Translation",
        desc: " Some documents may need to be translated into Arabic, particularly contracts and legal forms.",
      },
      {
        title: "Attestation",
        desc: " Certain documents, especially from foreign companies, may need to be attested by the relevant authorities or the UAE embassy.",
      },
      {
        title: "Consultation Services",
        desc: "We recommend working with Biz Growth business setup experts to ensure all documents are correctly prepared and submitted for a smooth approval process.",
      },
    ],
  },
  {
    bannerTitle:
      "GET STARTED WITH OPENING YOUR ABU DHABI MAINLAND LICENSE WITH Biz Growth",
    bannerDesc:
      "Starting a business in Abu Dhabi Mainland opens doors to endless possibilities. Let us be your trusted partner in navigating the business setup process and obtaining your Mainland license with ease. Reach out today, and take the first step toward realizing your business goals in one of the most vibrant economies in the world.",
    name: "abu-dhabi-mainland",
    heroTitle: (
      <Heading>
        Welcome to{" "}
        <span className="text-lime-600 font-SplineSans">BIZ GROWTH</span> - Your
        Gateway for Business Success in Abu Dhabi Mainland
      </Heading>
    ),
    heroDescription:
      "Starting a business in Abu Dhabi can open doors to numerous opportunities, and obtaining a Mainland Business License is the first step to tapping into this thriving market. A mainland license in Abu Dhabi is ideal for businesses seeking to operate within the UAE and engage directly with local and international clients. Our company is here to simplify the process of obtaining an Abu Dhabi Mainland License, ensuring that you comply with all local regulations while setting up your business seamlessly.",
    heroImg: "/media/mainland/dhabi.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">Abu Dhabi Mainland</span>{" "}
        Business Setup?
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Access to the Local Market",
        icon: <FaPeopleGroup />,
        desc: "A Mainland license allows you to operate in the local Abu Dhabi market and expand your business freely within the UAE.",
      },
      {
        title: "No Restrictions on Nationality",
        icon: <FaBusinessTime />,
        desc: "Unlike free zones, where there may be restrictions on ownership, a Mainland business license allows you to operate 100% of your business with local or foreign ownership.",
      },
      {
        title: "Wide Range of Business Activities",
        icon: <MdIncompleteCircle />,
        desc: " Whether you're interested in retail, consulting, IT services, or manufacturing, the Abu Dhabi Mainland offers a wide variety of licensing options across industries.",
      },
      {
        title: "Room for Expansion",
        icon: <MdIncompleteCircle />,
        desc: "Operating on the Mainland offers more growth potential, with the opportunity to scale your business and extend your reach throughout the Emirates and beyond.",
      },
      {
        title: "Full Ownership",
        icon: <MdIncompleteCircle />,
        desc: "Enjoy 100% ownership of your business.",
      },
      {
        title: "Strategic Location",
        icon: <MdIncompleteCircle />,
        desc: "Benefit from Abu Dhabi’s strategic location and world-class infrastructure.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        The Different Types of{" "}
        <span className="text-lime-500"> Abu Dhabi Mainland License</span>
      </Heading>
    ),
    thirdSubDesc:
      "In Abu Dhabi, businesses that operate on the mainland need to obtain a Abu Dubai Mainland License from the Department of Economic Development (DED). The type of license depends on the nature of the business activity. Below are the main types of Abu Dubai Mainland licenses:",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Commercial License :</span> A
        Commercial License is issued for businesses involved in trading
        activities. This type of license allows companies to import, export, and
        distribute goods in Abu Dhabi and across the UAE.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License : </span>{" "}
        An Industrial License is granted to businesses engaged in manufacturing,
        processing, or production activities. Companies with this license are
        permitted to establish factories or manufacturing units in Abu Dhabi.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Professional License :</span>{" "}
        A Professional License is issued for businesses that provide services
        based on professional expertise. This includes businesses that rely on
        individual skill and knowledge to deliver services to clients.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Tourism License :</span> A
        Tourism License is granted to businesses involved in the tourism sector,
        including those that offer travel services, tourism-related activities,
        or hospitality services.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Agricultural License :</span>{" "}
        An Agricultural License is for businesses involved in agriculture,
        including the cultivation, production, and distribution of agricultural
        products.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Contracting License :</span>{" "}
        A Contracting License is issued to businesses that work in the
        construction industry. It is often required for companies involved in
        building or infrastructure projects.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Franchise License :</span> A
        Franchise License is issued for businesses operating under a franchise
        model. If you want to open a branch of an existing brand or franchise in
        Abu Dhabi, you would need this license.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-commerce License :</span>{" "}
        An E-commerce License is for businesses operating online, allowing them
        to conduct retail or wholesale trade via digital platforms.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Import/Export License :</span>{" "}
        The Import/Export License allows businesses to engage in the importation
        and exportation of goods, either from or to other countries. This
        license can be part of a Commercial License or issued independently.
      </p>,
      <p key={9} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Foreign Branch License :
        </span>{" "}
        A Foreign Branch License is given to foreign companies that wish to
        establish a branch office in Abu Dhabi. This type of license enables
        foreign businesses to operate directly in the UAE Mainland.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        <span className="text-lime-500"> THE STEPS</span> TO START AN ABU DHABI
        MAINLAND LICENSE
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Decide on Your Business Activity",
        isPoints: false,
        desc: "Before applying for a Mainland license, determine the nature of your business and the specific activity you will be engaged in.",
      },
      {
        title: " Choose a Company Name",
        isPoints: false,
        desc: "Select a unique name for your business that complies with the UAE’s naming regulations.",
      },
      {
        title: " Determine the Legal Structure of Your Business",
        isPoints: true,
        desc: "Decide on the legal structure of your company. For Mainland businesses in Abu Dhabi, the most common types are. ",
        points: [
          "Sole Proprietorship",
          "Limited Liability Company (LLC)",
          "Branch Office",
          "Representative Office",
        ],
      },
      {
        title: "Choose a Local Sponsor or Partner (If Required)",
        isPoints: false,
        desc: "For most Mainland businesses (except for certain professional services), a local sponsor (UAE national) is required to hold a 51% share in the company.",
      },
      {
        title: "Rent an Office Space",
        isPoints: false,
        desc: "To obtain a Mainland license, you must have a physical office space in Abu Dhabi. The DED requires proof of a valid tenancy contract to issue your license.",
      },
      {
        title: " Prepare the Required Documents",
        isPoints: false,
        desc: "Once you’ve determined your business activity, legal structure, and local sponsor (if needed), gather all the necessary documents for the application.",
      },
      {
        title:
          "Submit the Application to the Department of Economic Development (DED)",
        isPoints: false,
        desc: "With all your documents ready, submit your application to the Department of Economic Development (DED) in Abu Dhabi. The DED will review your application, approve the trade name, and ensure that your business activity is in line with local regulations.",
      },
      {
        title:
          " Obtain Approvals from Other Relevant Authorities (If Required)",
        isPoints: false,
        desc: " Certain business activities may require additional approvals from other government authorities.",
      },
      {
        title: " Pay the License Fees",
        isPoints: false,
        desc: "After receiving approval from the DED and other relevant authorities, pay the license fees.",
      },
      {
        title: "  Receive Your Abu Dhabi Mainland License",
        isPoints: false,
        desc: "Once all fees are paid and the approvals are granted, you will receive your Abu Dhabi Mainland Business License.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        DOCUMENTS REQUIRED FOR SETTING UP{" "}
        <span className="text-lime-500">ABU DHABI MAINLAND LICENSE</span>
      </Heading>
    ),
    sixthTableHead: ["Business Structure", "Required Documents"],
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
        ],
      },
      {
        title: "Sole Proprietorship",
        docs: [
          "Passport copy of the owner",
          " Copy of UAE residency visa (if applicable)",
          " Proof of residential address (e.g., utility bill)",
          "Tenancy contract for office space",
          "Trade name reservation certificate",
          "No Objection Certificate (NOC) from the current sponsor (if applicable)",
          "Application form from the Department of Economic Development (DED)",
        ],
      },
      {
        title: "General Partnership",
        docs: [
          "Passport copies of all partners",
          "Proof of UAE residency visa (if applicable)",
          "Proof of residential address (e.g., utility bill)",
          "Tenancy contract for office space",
          "No Objection Certificate (NOC) from current sponsor (if applicable)",
          "Partnership agreement (signed by all partners)",
          "Trade name reservation certificate",
          "Application form from the Department of Economic Development (DED)",
        ],
      },
      {
        title: "Branch Office",
        docs: [
          "Passport copies of the parent company’s shareholders and directors",
          "Parent company’s Certificate of Incorporation",
          "Parent company’s Memorandum of Association",
          "UAE residence visa of the appointed manager (if applicable)",
          "No Objection Certificate (NOC) from the parent company",
          "Tenancy contract for office space",
          "Trade name reservation certificate",
          "Application form from the Department of Economic Development (DED)",
        ],
      },
    ],
    keyPoints: [
      {
        title: "Proofs",
        desc: "Passport copies and proof of residency are required for all business types.",
      },
      {
        title: "Contracts",
        desc: "Tenancy contracts for office space is mandatory for all businesses.",
      },
      {
        title: "Consultation Services",
        desc: "For an LLC or General Partnership, you will need agreements such as the Local Sponsor Agreement (for LLC) and Partnership Agreement (for General Partnership).",
      },
      {
        title: "Trade Name",
        desc: "Trade name reservation and NOC (if applicable) are common requirements across all structures.",
      },
      {
        title: "Branch Office Docs",
        desc: "Branch offices also require documents from the parent company, such as the Certificate of Incorporation and Memorandum of Association.",
      },
    ],
    tableFooter:
      "These documents may vary slightly depending on the specific requirements of the Department of Economic Development (DED) and any industry-specific regulations. Always consult with a business setup advisor for precise details.",
    seventhTitle: (
      <Heading className="w-full !text-center">
        Why Choose <span className="text-indigo-500">BIZ GROWTH</span> for Your{" "}
        <span className="text-lime-500">ABU DHABI MAINLAND</span> Business
        Setup?
      </Heading>
    ),
    seventhPoints: [
      {
        title: "Expert Guidance",
        desc: "Our consultants are well-versed in Abu Dhabi’s business regulations and can help you navigate the complexities of the licensing process.",
      },
      {
        title: "Time-Saving",
        desc: " With our efficient services, we help you save time and focus on growing your business rather than dealing with paperwork and administrative hurdles.",
      },
      {
        title: "Cost-Efficiency",
        desc: "We offer competitive pricing packages tailored to meet your needs without compromising on quality service.",
      },
      {
        title: "Comprehensive Services",
        desc: "From licensing to office space, visas, and more, we offer a one-stop solution for all your business setup needs in Abu Dhabi.",
      },
    ],
  },
  {
    bannerTitle: "GET STARTED TO YOUR DREAM BUSINESS IDEA IN AJMAN MAINLAND",
    bannerDesc:
      "Ajman is an ideal location for setting up a Mainland business, offering a dynamic environment, low operational costs, and easy access to the UAE market. Whether you’re looking to launch a new startup or expand your operations, we are here to assist you at every step of the way. Contact us today to begin your business journey in Ajman Mainland and unlock endless opportunities for growth and success!",
    name: "ajman-mainland",
    heroTitle: (
      <Heading>
        Your
        <span className="text-lime-600 font-SplineSans">
          {" "}
          BUSINESS SET UP PARTNER{" "}
        </span>
        to Thriving Business Opportunities IN AJMAN MAINLAND
      </Heading>
    ),
    heroDescription:
      "Are you ready to expand your business or set up a new company in one of the UAE’s most dynamic and affordable markets? Ajman offers an attractive business environment for entrepreneurs and companies looking to tap into the potential of the UAE Mainland. Whether you’re starting a small business or setting up a large-scale operation, our professional team is here to guide you through every step of the Ajman Mainland business setup process.",
    heroImg: "/media/mainland/ajman.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500"> Ajman</span> for Your
        Mainland Business Setup?
      </Heading>
    ),
    secondSubDescription:
      "Ajman is quickly becoming one of the most sought-after locations for Mainland business setups. Thanks to its strategic location, competitive costs, and growing economic opportunities. Here’s why setting up your business in Ajman Mainland is a smart choice.",
    secondPoints: [
      {
        title: "Cost-Effective",
        icon: <FaPeopleGroup />,
        desc: " The cost of setting up a business in Ajman is lower compared to other Emirates, making it attractive for both small and large-scale operations.",
      },
      {
        title: "Unlimited Growth Potential",
        icon: <FaBusinessTime />,
        desc: " A Mainland business license allows you to trade directly with the UAE local market, expand freely, and have access to government contracts.",
      },
      {
        title: "No Restrictions on Market Access",
        icon: <MdIncompleteCircle />,
        desc: "Mainland businesses in Ajman can conduct activities in all areas of the UAE without restrictions, including government contracts, and can establish branches anywhere in the country.",
      },
      {
        title: "Affordable Office Spaces",
        icon: <MdIncompleteCircle />,
        desc: "Ajman offers a range of affordable office spaces, including commercial, industrial, and retail units, which helps businesses keep overheads low.",
      },
      {
        title: "100% Foreign Ownership",
        icon: <MdIncompleteCircle />,
        desc: "Enjoy full control over your business.",
      },
      {
        title: "Strategic Location",
        icon: <MdIncompleteCircle />,
        desc: "Benefit from Ajman's prime location within the UAE.",
      },
      {
        title: "Simplified Procedures",
        icon: <MdIncompleteCircle />,
        desc: "Streamlined processes for efficient business setup.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        The Different Types of{" "}
        <span className="text-lime-500">AJMAN MAINLAND License</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Commercial License :</span> A
        Commercial License is for businesses involved in trading activities. It
        allows companies to engage in buying, selling, and distribution of
        goods. This license is ideal for businesses operating in wholesale and
        retail sectors.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Professional License :</span>{" "}
        A Professional License is granted to individuals or companies providing
        professional services. This license is typically issued to businesses
        based on individual expertise, skill, or knowledge, and it can cover a
        wide range of service-oriented sectors.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License :</span> A
        Professional License is issued for businesses that provide services
        based on professional expertise. This includes businesses that rely on
        individual skill and knowledge to deliver services to clients.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Tourism License :</span> A
        Tourism License is specifically for businesses in the tourism and
        hospitality sector. It allows companies to operate in the travel,
        tourism, and hospitality industries, including both services for
        tourists and leisure activities.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Agricultural License :</span>{" "}
        An Agriculture License is for businesses involved in the agricultural
        industry. This license covers activities related to farming, production
        of agricultural goods, and any services related to agriculture.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Transport and Logistics License :
        </span>{" "}
        A Transport and Logistics License is for businesses involved in the
        transportation and logistics sectors, including freight forwarding,
        delivery services, and moving companies.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Franchise License :</span> A
        Franchise License is for businesses operating under a franchise model.
        It allows businesses to open and operate a franchise branch in Ajman.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-commerce License :</span>{" "}
        An E-commerce License is for businesses operating online platforms to
        sell products or services. This license allows businesses to engage in
        retail or wholesale trade through digital platforms.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Consultancy License :</span> A
        Consultancy License is for individuals or companies offering consultancy
        services. This type of license is granted for businesses providing
        expert advice in various fields.
      </p>,
      <p key={9} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Media License :</span> A
        Media License is for businesses involved in media production, marketing,
        or broadcasting activities. This license is for companies working in
        advertising, content creation, or publishing.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Setting up <span className="text-lime-500">Ajman Mainland License</span>{" "}
        The Process
      </Heading>
    ),
    fourthPoints: [
      {
        title: " Choose Your Business Activity",
        isPoints: false,
        desc: "The first step in setting up a business in Ajman is to determine the type of business activity you will be engaged in.",
      },
      {
        title: "Select the Business Structure",
        isPoints: true,
        desc: "Decide on the legal structure of your business. Ajman offers several options for business formation, including.",
        points: [
          "Sole Proprietorship",
          "Limited Liability Company (LLC)",
          "General Partnership",
          "Branch Office",
          "Representative Office",
        ],
      },
      {
        title: "Register Your Trade Name",
        isPoints: false,
        desc: "Your company name must comply with Ajman’s naming regulations. ",
      },
      {
        title: "Secure Local Sponsor or Partner (If Applicable)",
        isPoints: false,
        desc: "For certain business structures, such as LLCs, a local sponsor (UAE national) is required to hold a 51% share in the company, while the foreign investor holds 49%.",
      },
      {
        title: " Choose a Business Location",
        isPoints: false,
        desc: "You must secure a physical office space to operate your business in Ajman.",
      },
      {
        title: " Prepare the Required Documents",
        isPoints: false,
        desc: "Collect all the necessary documents required to apply for your business license.",
      },
      {
        title: " Submit the Application to the DED",
        isPoints: false,
        desc: "Once you have all the required documents, submit the application to the Department of Economic Development (DED) in Ajman for approval.",
      },
      {
        title: "Obtain Approvals from Other Relevant Authorities (If Required",
        isPoints: false,
        desc: "Certain business activities require approvals from additional government authorities in Ajman or the UAE.",
      },
      {
        title: "Pay the License Fees",
        isPoints: false,
        desc: "After your business is approved, you will need to pay the necessary business license fees to the DED.",
      },
      {
        title: " Receive Your Ajman Mainland License",
        isPoints: false,
        desc: "Once your application is processed and the fees are paid, you will receive your Ajman Mainland Business License",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents required for Setting up{" "}
        <span className="text-lime-500">Ajman Mainland License</span>
      </Heading>
    ),
    sixthTableHead: ["Business Structure", "Required Documents"],
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
        ],
      },
      {
        title: "Sole Proprietorship",
        docs: [
          "Passport copy of the owner",
          "UAE residency visa copy (if applicable)",
          "Proof of residential address (e.g., utility bill)",
          "Trade name reservation certificate",
          "Tenancy contract for office space",
          "No Objection Certificate (NOC) from the current sponsor (if applicable)",
          "Application form from the Department of Economic Development (DED)",
        ],
      },
      {
        title: "Branch Office",
        docs: [
          "Passport copies of the parent company’s shareholders and directors",
          "Parent company’s Certificate of Incorporation",
          "Parent company’s Memorandum of Association (MOA)",
          "UAE residency visa of the appointed manager (if applicable)",
          "No Objection Certificate (NOC) from the parent company",
          "Tenancy contract for office space",
          "Trade name reservation certificate",
          "Application form from the Department of Economic Development (DED)",
        ],
      },
    ],

    tableFooter: "",
    seventhTitle: "",

    ajmanKeypoints: [
      <p key={0}>
        <span>Passport copies</span> and <span>proof of residency</span> are
        required for all business structures.
      </p>,
      <p key={1}>
        A <span>tenancy contract</span> for an office is mandatory for all
        businesses in Ajman Mainland.
      </p>,
      <p key={2}>
        For an <span>LLC, a local sponsor agreement</span> is necessary for
        compliance with the UAE&apos;s 51% local ownership requirement.
      </p>,
      <p key={3}>
        <span>Trade name reservation and NOC</span> (if applicable) are common
        across all structures.
      </p>,
      <p key={4}>
        For <span> Branch Offices, </span> documents from the parent company
        (like the <span>Certificate of Incorporation and MOA</span>) are needed.
      </p>,
    ],
  },
  {
    bannerTitle: "READY TO KICKSTART YOUR BUSINESS IN FUJAIRAH?",
    bannerDesc:
      "Starting a business in Fujairah Mainland is an exciting opportunity, and with our expert guidance, you can easily navigate the setup process. Contact us today to discuss your business goals, and let us help you take the first step toward success in the UAE.",

    name: "fujairah-mainland",
    heroTitle: (
      <Heading>
        WELCOME TO{" "}
        <span className="text-lime-600 font-SplineSans">BIZ GROWTH</span> - YOUR
        BUSINESS SET UP PARTNER IN FUJAIRAH! BUSINESS SET UP PARTNER IN
        FUJAIRAH!
      </Heading>
    ),
    heroDescription:
      "Welcome to Biz Growth, your trusted partner for business setup and company registration in Fujairah Mainland. Whether you’re an aspiring entrepreneur or an established business looking to expand in the UAE, we provide tailored solutions to help you establish and grow your business in Fujairah.",
    heroImg: "/media/mainland/Fujairah.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500"> Fujairah Mainland?</span>
      </Heading>
    ),
    secondSubDescription:
      "Fujairah is an ideal destination for businesses looking to expand in the UAE, offering several benefits including",
    secondPoints: [
      {
        title: "Strategic Location",
        icon: <FaPeopleGroup />,
        desc: "Fujairah’s proximity to international ports and its location on the east coast of the UAE makes it a key gateway for trade.",
      },
      {
        title: "Competitive Costs",
        icon: <FaBusinessTime />,
        desc: " Fujairah offers more affordable licensing and operational costs compared to other emirates, making it a cost-effective choice for entrepreneurs.",
      },
      {
        title: "Access to Local Market",
        icon: <MdIncompleteCircle />,
        desc: "A mainland license in Fujairah allows you to operate throughout the UAE and directly trade with the local market without any restrictions.",
      },
      {
        title: "Full Ownership",
        icon: <MdIncompleteCircle />,
        desc: " Foreign investors can enjoy 100% ownership of their business in Fujairah Mainland without the need for a local sponsor.",
      },
      {
        title: "Simple and Quick Process",
        icon: <MdIncompleteCircle />,
        desc: "Our experts ensure that your Fujairah mainland company registration is hassle-free and completed within the shortest time.",
      },
      {
        title: "No Minimum Capital Requirement",
        icon: <MdIncompleteCircle />,
        desc: "Except for specific business types, Fujairah does not have a minimum capital requirement for company formation.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        DIFFERENT TYPES OF LICENSE AVAILABLE IN
        <span className="text-lime-500"> FUJAIRAH MAINLAND </span> License
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Commercial License :</span> A
        Commercial License is issued to businesses involved in trading
        activities. This includes companies that import, export, distribute, or
        sell goods within the UAE or internationally. The license is suitable
        for a wide range of businesses, from retail to wholesale.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Professional License :</span>{" "}
        A Professional License is issued to individuals or companies offering
        services or expertise in various fields. This includes consultants,
        contractors, freelancers, and other service-oriented businesses.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License :</span> An
        Industrial License is issued for businesses involved in manufacturing or
        industrial production. This license is ideal for companies engaged in
        creating, processing, or assembling goods.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Tourism License :</span> A
        Tourism License is intended for businesses in the hospitality and
        tourism sector. This includes travel agencies, tour operators, hotel
        management companies, and other businesses catering to tourism.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          General Trading License :
        </span>{" "}
        A General Trading License is a type of commercial license that allows
        businesses to trade in a broad range of products. This license allows
        businesses to engage in multiple trading activities without the need to
        obtain separate licenses for each product category.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">E-Commerce License :</span> An
        E-Commerce License is specifically for businesses that operate online
        and engage in electronic trading, such as e-commerce platforms, online
        stores, and digital services.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        THE STEPS TO SET UP A{" "}
        <span className="text-lime-500">FUJAIRAH MAINLAND </span>LICENSE
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Determine Your Business Activity",
        isPoints: false,
        desc: "The first step is to clearly define your business activity. The type of activity will determine the kind of license you need .",
      },
      {
        title: "Choose a Company Structure",
        isPoints: true,
        desc: "You need to decide on the structure of your company. The most common options are.",
        points: [
          "Sole Proprietorship",
          "Limited Liability Company (LLC)",
          "Branch of a Foreign Company",
        ],
      },
      {
        title: " Choose a Trade Name",
        isPoints: false,
        desc: "Select a name for your business that reflects your activities and complies with the UAE's naming regulations. ",
      },
      {
        title: "Submit Your Application for Initial Approval",
        isPoints: false,
        desc: "After selecting your trade name, submit an Initial Approval Application to the Fujairah Economic Department (FED).",
      },
      {
        title: "Secure Office Space",
        isPoints: false,
        desc: "To operate in Fujairah Mainland, you need to have a physical office space. Depending on the size and nature of your business, office space requirements will vary.",
      },
      {
        title: " Apply for the Business License",
        isPoints: false,
        desc: "Once your trade name is approved and the office space is secured, you can apply for the business license from the Fujairah Economic Department (FED).",
      },
      {
        title: " Register with the Chamber of Commerce",
        isPoints: false,
        desc: "Once you have the business license, register your company with the Fujairah Chamber of Commerce and Industry.",
      },
      {
        title: "Open a Corporate Bank Account",
        isPoints: false,
        desc: "After obtaining your business license, you will need to open a corporate bank account in a UAE bank.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for Setting up{" "}
        <span className="text-lime-500">Fujairah Mainland License</span>
      </Heading>
    ),
    sixthTableHead: ["Entity Type", "Documents Required"],
    sixthTableBody: [
      {
        title: "Sole Proprietorship",
        docs: [
          "Passport copy of the owner",
          "UAE Residence Visa (if applicable)",
          "Trade name approval from the Fujairah Economic Department (FED)",
          "Initial approval from the Fujairah Economic Department (FED)",
          "Tenancy agreement (proof of office space)",
          "No Objection Certificate (NOC) from employer (if applicable)",
          "Professional qualifications (if required for specific business activities, e.g., consultancy, medical services)",
          "Passport-sized photos of the owner (usually 2-4)",
        ],
      },
      {
        title: "Limited Liability Company (LLC)",
        docs: [
          "Passport copies of all partners/shareholders",
          "UAE Residence Visa (for foreign partners, if applicable)",
          "Trade name approval from the Fujairah Economic Department (FED)",
          "Initial approval from the Fujairah Economic Department (FED)",
          "Memorandum of Association (MOA) between the partners",
          "Tenancy agreement (proof of office space)",
          "Local partner/sponsor agreement (if applicable, for certain activities requiring a local sponsor)",
          "No Objection Certificate (NOC) from employer (if applicable)",
          "Company structure details (ownership percentages, roles, etc.)",
          "Board resolution (if any partner is a corporate entity)",
          "Passport-sized photos of all partners (usually 2-4)",
        ],
      },
      {
        title: "Branch of a Foreign Company",
        docs: [
          "Certificate of incorporation of the parent company",
          "Memorandum and Articles of Association (MOA & AOA) of the parent company",
          "Board resolution from the parent company authorizing the establishment of the branch",
          "Passport copies of the branch manager (or appointed representative)",
          "UAE Residence Visa for the branch manager (if applicable)",
          "Power of Attorney for the branch manager (if applicable)",
          "Trade name approval from the Fujairah Economic Department (FED)",
          "Initial approval from the Fujairah Economic Department (FED)",
          "Tenancy agreement (proof of office space)",
          "Parent company's audited financial statements (usually for the last 2 years)",
          "Parent company’s tax registration certificate from the home country",
          "Proof of parent company’s active business operations",
          "No Objection Certificate (NOC) from employer (if applicable)",
          "Passport-sized photos of the branch manager",
        ],
      },
    ],

    tableFooter: "",
    seventhTitle: "",

    fujairahKeypoints: [
      <p key={0} className="font-Satoshi text-sm">
        <span className="font-bold font-Synonym">Annual license renewal:</span>{" "}
        Ensure timely renewal of your business license and visas
      </p>,
      <p key={1} className="text-sm">
        <span className="font-bold font-Synonym">
          PRO (Public Relations) Services:
        </span>{" "}
        Keep track of business financials for tax and regulatory purposes.
      </p>,
      <p key={2} className="font-Satoshi text-sm">
        <span className="font-bold font-Synonym">
          PRO (Public Relations) Services:{" "}
        </span>
        You may require assistance for visa renewals, document attestation, and
        other government-related services.
      </p>,
    ],
  },
];

export default data;
