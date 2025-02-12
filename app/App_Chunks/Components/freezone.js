import Heading from "./Heading";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
const data = [
  {
    bannerTitle: "Start Your Business in Dubai Today with IFZA!",
    bannerDesc:
      "Take advantage of Dubai’s business-friendly environment, world-class infrastructure, and tax advantages. With IFZA, establishing and growing your business has never been easier. Get expert consultation from Biz GROWTH to decide on which freezone to choose from according to your business activity.",
    name: "ifza",
    heroTitle: (
      <Heading>
        Register Your Company in{" "}
        <span className="text-lime-600 font-SplineSans">IFZA</span> -
        International Free Zone Authority
      </Heading>
    ),
    heroDescription:
      "At IFZA, we offer a dynamic and cost-effective environment to help your business thrive in the heart of Dubai, UAE. As a premier free zone in Dubai, IFZA provides companies with world-class infrastructure, tax benefits, and full ownership options, enabling entrepreneurs to establish and grow their businesses with ease.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">IFZA?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Strategic Location",
        icon: <FaPeopleGroup />,
        desc: "Located within the Dubai Silicon Oasis, IFZA offers a central position that provides businesses with quick access to major transport hubs, including airports, ports, and key highways. This makes IFZA an ideal hub for regional and international trade.",
      },
      {
        title: "Affordable Setup Costs",
        icon: <FaBusinessTime />,
        desc: "IFZA offers competitive pricing for business licenses, office spaces, and operational costs, making it an ideal destination for startups, SMEs, and established enterprises.",
      },
      {
        title: "Simple Company Formation Process",
        icon: <MdIncompleteCircle />,
        desc: " Setting up your business at IFZA is fast and easy. With streamlined processes, we ensure minimal bureaucracy and quick approval for your business setup. Our expert team is here to assist you every step of the way.",
      },
      {
        title: "Flexible Office Solutions",
        icon: <MdIncompleteCircle />,
        desc: "Whether you need a virtual office, a shared workspace, or a private office, IFZA offers flexible options to suit your business needs. From small startups to large enterprises, we have the right space for you.",
      },
      {
        title: "Visa & Immigration Services",
        icon: <MdIncompleteCircle />,
        desc: "We offer an efficient visa process for business owners, employees, and their families, with the option to apply for multiple residence visas based on your office size and business activities.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Different Types of License Available in{" "}
        <span className="text-lime-500">IFZA</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Trading License</span> A
        Trading License is ideal for businesses involved in the import, export,
        or distribution of goods. This license allows businesses to engage in
        the buying and selling of physical products both locally and
        internationally.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Service License</span> A
        Service License is designed for businesses providing services rather
        than tangible products. This is a versatile license and is suitable for
        a wide range of professional and consultancy businesses.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-commerce License</span> The
        E-commerce License is perfect for businesses that operate online,
        selling products or services via a digital platform. It allows
        businesses to trade on a global scale, especially in retail and digital
        services.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License</span> An
        Industrial License is for businesses engaged in manufacturing,
        processing, or industrial activities. This license allows companies to
        establish operations within the free zone for pr.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Freelance License</span> The
        Freelance License is designed for individuals offering professional
        services as independent contractors or consultants. It is ideal for
        those wishing to work as self-employed professionals in a specific
        field.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Consultancy License</span> A
        Consultancy License is designed for businesses or individuals offering
        expert advice or consultancy services in specialized fields such as
        finance, technology, legal services, and business management
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Holding License</span> The
        Holding License allows investors to set up a holding company in IFZA.
        This license is for businesses looking to own and manage shares of other
        companies in the UAE or globally.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Educational License</span> An
        Educational License is for businesses focused on offering educational or
        training services, including both academic and professional courses.
        This is a popular choice for those in the education and training sector.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Media License</span> The Media
        License is tailored for businesses in the creative and media industries.
        It allows for activities in publishing, content creation, media
        production, and digital marketing.
      </p>,
      <p key={9} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Tech and IT License</span> The
        Tech and IT License is a specialized license for businesses operating in
        technology, software, and innovation. It allows businesses to develop,
        manufacture, and sell tech products and services.
      </p>,
      <p key={10} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Creative Industry License
        </span>{" "}
        The Creative Industry License is for businesses focused on the arts,
        design, fashion, and entertainment. This license supports creative
        entrepreneurs looking to set up their own unique business in the UAE.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Quick & Easy{" "}
        <span className="text-lime-500"> Business Setup Process</span> AT{" "}
        <span className="text-lime-500">IFZA</span>
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose Your License",
        isPoints: false,
        desc: "Select from a variety of business licenses, including trading, service, e-commerce, and industrial.",
      },
      {
        title: " Complete Your Registration",
        isPoints: false,
        desc: " Submit your documents online or in-person, and our team will guide you through every step.",
      },
      {
        title: "Set Up Your Office",
        isPoints: false,
        desc: "Choose from a range of office solutions, from virtual offices to fully serviced spaces.",
      },
      {
        title: "  Obtain Your Visa",
        isPoints: false,
        desc: " Apply for your UAE residence visa, along with visas for your employees and family.",
      },
      {
        title: " Start Operating",
        isPoints: false,
        desc: "With your business setup complete, you’re ready to operate and begin trading in the UAE.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        DOCUMENTS REQUIRED FOR{" "}
        <span className="text-lime-500">IFZA FREEZONE LICENSE</span>
      </Heading>
    ),
    sixthTableHead: ["Document Type", "Details"],
    sixthTableBody: [
      {
        title: "Passport Copy (for all shareholders & directors)",
        doc1: "Clear copy of the passport with at least 6 months validity.",
      },
      {
        title: "Visa Copy (for UAE residents, if applicable)",
        doc1: "Copy of valid UAE residency visa (if the shareholder/director is a UAE resident).",
      },
      {
        title: "Proof of Address",
        doc1: "A recent utility bill or bank statement (not older than 3 months).",
      },
      {
        title: "Curriculum Vitae (CV)",
        doc1: "A professional CV or resume detailing experience and qualifications.",
      },
      {
        title: "Business Plan (for certain activities)",
        doc1: "A brief business plan outlining the nature of the business and its activities.",
      },
      {
        title: "No Objection Certificate (NOC)",
        doc1: "If employed in the UAE, a NOC from the current employer is required.",
      },
      {
        title: "Corporate Documents (for corporate shareholders)",
        doc1: "Certificate of Incorporation, Memorandum & Articles of Association, Board Resolution appointing the authorized signatory.",
      },
      {
        title: "Passport-Size Photo",
        doc1: "Recent passport-sized photographs (typically 2-3).",
      },
      {
        title: "Shareholder Agreement",
        doc1: "If applicable, the agreement between shareholders regarding company ownership and operation.",
      },
      {
        title: "Trade Name Reservation",
        doc1: "Proof of approved trade name from IFZA.",
      },
      {
        title: "License Application Form",
        doc1: "Completed application form for the specific business license required (Trading, Service, E-commerce, etc.).",
      },
      {
        title: "Director’s Resolution",
        doc1: "A resolution passed by the directors (if applicable) regarding the company setup.",
      },
      {
        title: "Tenant Agreement (for office space)",
        doc1: "Lease agreement or virtual office agreement, depending on the nature of the business setup.",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle: "Get Started Today AT DMCC FREEZONE LICENSE - WITH Biz Growth.",
    bannerDesc:
      "Starting your business in Dubai with DMCC is easier than you think. Let our experts guide you through the process and help you set up your company in one of the world’s most vibrant Freezones. Contact us today to learn more about how DMCC can help your business succeed.",
    name: "dmcc",
    heroTitle: (
      <Heading>
        Start Your Business in Dubai with{" "}
        <span className="text-lime-600 font-SplineSans">DMCC Freezone</span>{" "}
        Company Setup
      </Heading>
    ),
    heroDescription:
      "The Dubai Multi Commodities Centre (DMCC), the leading Freezone in Dubai for business setup. Whether you're an entrepreneur, a small business, or an international corporation, DMCC provides the ideal environment for your company’s growth. With world-class infrastructure, tax advantages, and an international network of businesses, DMCC offers everything you need to establish and expand your business in Dubai and beyond.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">DMCC?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Strategic Location",
        icon: <FaPeopleGroup />,
        desc: "Situated in the heart of Dubai, DMCC is a hub for international trade and commerce, easily accessible to the global markets.",
      },
      {
        title: "Tax Benefits",
        icon: <FaBusinessTime />,
        desc: "Enjoy 100% foreign ownership, 0% corporate tax for up to 50 years, and no personal income tax, making it a cost-effective choice for entrepreneurs.",
      },
      {
        title: "Business-Friendly Environment",
        icon: <MdIncompleteCircle />,
        desc: "DMCC provides a business-friendly regulatory framework, access to cutting-edge infrastructure, and a community of more than 19,000 companies.",
      },
      {
        title: "Global Connectivity",
        icon: <MdIncompleteCircle />,
        desc: " As one of the world’s most connected Freezones, DMCC offers unparalleled access to a global network of markets and industries.",
      },
      {
        title: "Tailored Solutions",
        icon: <MdIncompleteCircle />,
        desc: "DMCC offers customizable company setup packages that meet the specific needs of your business, from start-ups to large corporations.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Different Types of License Available in{" "}
        <span className="text-lime-500">DMCC</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Trading License</span> A
        Trading License is for businesses involved in the import, export,
        distribution, or sale of goods and commodities.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Service License</span> A
        Service License allows businesses to provide services within the UAE or
        internationally.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Industrial License</span> An
        Industrial License is for businesses engaged in manufacturing,
        processing, and industrial activities.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Holding License</span> A
        Holding License is intended for businesses that only hold shares in
        other companies, without engaging in active trading or services.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-Commerce License</span>{" "}
        This license is specifically for businesses that conduct online trading
        and digital commerce.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Innovation License</span> This
        license is designed for businesses involved in innovative and emerging
        technologies or research and development.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Media License</span> A Media
        License is for companies involved in the production, distribution, and
        promotion of media content.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Freelance License</span> A
        Freelance License is tailored for individuals who wish to operate as
        freelancers or sole proprietors
      </p>,

      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Cryptocurrency & Digital Assets License
        </span>{" "}
        A specialized license for businesses involved in the trading,
        development, or management of cryptocurrencies and digital assets.
      </p>,
      <p key={9} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Professional License</span>{" "}
        This license is for businesses that provide specialized professional
        services.
      </p>,
      <p key={10} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Non-Profit License</span> The
        Non-Profit License is designed for organizations that aim to operate
        without profit motives and focus on social, charitable, and
        community-driven activities.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Step-by-Step Guide to Setting Up Your{" "}
        <span className="text-lime-500"> DMCC Freezone</span> Company
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose Your Business Activity",
        isPoints: false,
        desc: "Select from a wide range of business activities and license types to determine the structure that best fits your needs.",
      },
      {
        title: "Apply for Your License",
        isPoints: false,
        desc: " Submit your application through the DMCC online portal, providing necessary documents like your passport copy and business plan.",
      },
      {
        title: " Office Space Selection",
        isPoints: false,
        desc: "Choose from a range of office spaces that suit your business requirements and budget.",
      },
      {
        title: "Get Your Business License & Visa",
        isPoints: false,
        desc: "Upon approval, receive your DMCC license and residency visa. You can also apply for work visas for your team.",
      },
      {
        title: " Start Operating Your Business",
        isPoints: false,
        desc: "Once all formalities are completed, start your business operations in the UAE and benefit from the robust infrastructure, regulatory support, and network provided by DMCC.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        DOCUMENTS REQUIRED FOR{" "}
        <span className="text-lime-500">DMCC FREEZONE LICENSE</span>
      </Heading>
    ),
    sixthTableHead: ["Category", "Document"],
    sixthTableBody: [
      {
        title: "For Individual Applicants",
        docs: [
          "Passport copy (for all shareholders, directors, and managers)",
          "UAE residency visa copy (if applicable)",
          "Passport-sized photograph (recent, white background)",
          "Proof of address (utility bill/bank statement within the last 3 months)",
          "CV/Resume of the shareholder(s) or manager(s)",
          "Personal reference letter (from a bank, employer, or business associate)",
          "No Objection Certificate (NOC) from UAE sponsor (for UAE resident visa holders)",
        ],
      },
      {
        title: "For Corporate Applicants",
        docs: [
          "Company registration certificate (for the parent company)",
          "Memorandum and Articles of Association (MOA/AOA)",
          "Board resolution from the parent company to form the subsidiary or branch in DMCC",
          "Shareholder information (list of shareholders and their shareholding percentages)",
          "Power of Attorney (POA) for authorized persons acting on behalf of the parent company",
        ],
      },
      {
        title: "For Company Name Reservation",
        docs: [
          "Proposed company name for approval (compliant with DMCC naming conventions)",
          "Trade name reservation form (available via DMCC portal)",
        ],
      },
      {
        title: "For Business Activity & License",
        docs: [
          "Detailed business plan (outlining business model and objectives)",
          "Activity selection form (detailing specific business activities from DMCC categories)",
        ],
      },
      {
        title: "For Office Space",
        docs: [
          "Office space lease agreement or reservation (flexi-desk, private office, or warehouse)",
          "Office layout/floor plan (if applicable)",
        ],
      },
      {
        title: "Additional Documents (if applicable)",
        docs: [
          "E-commerce License: Proof of online presence (e.g., website or app)",
          "Consultancy License: Relevant qualifications or certificates",
          "Professional License: Degree or professional certification (if applicable)",
          "Crypto/Blockchain License: Additional regulatory documents (if applying for crypto-related licenses)",
          "No Objection Certificate (NOC) for applicants on UAE residency visas",
          "Proof of shareholding (for corporate entities if applicable)",
        ],
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle:
      "Join a Thriving Business Community in ADGM- We’ll Help you get Started!",
    bannerDesc:
      "Ready to take the next step and establish your business in ADGM? Contact Biz Growth Consultants who are a dedicated team to learn more about how we can help you secure your ADGM Free Zone License and start your journey towards success in one of the world’s most dynamic economic regions.",

    name: "adgm",
    heroTitle: (
      <Heading>
        Unlock Business Opportunities in Abu Dhabi with Freezone:
        <span className="text-lime-600 font-SplineSans">
          ADGM (Abu Dhabi Global Market)
        </span>{" "}
      </Heading>
    ),
    heroDescription:
      "Abu Dhabi Global Market (ADGM) offers a world-class international financial center and free zone that offers businesses several benefits. ADGM provides a dynamic environment that fosters innovation, growth, and prosperity. Biz Growth will help you elevate your business to new heights with ADGM Freezone License.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">ADGM?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Strategic Location",
        icon: <FaPeopleGroup />,
        desc: "ADGM is ideally located in the heart of Abu Dhabi which is a major business hub: offering access to global markets, world-class infrastructure, and a strong economic ecosystem.",
      },
      {
        title: "100% Foreign Ownership",
        icon: <FaBusinessTime />,
        desc: "ADGM allows 100% foreign ownership, enabling international investors to establish and manage their businesses with complete control.",
      },
      {
        title: "Tax-Free Operations",
        icon: <MdIncompleteCircle />,
        desc: "Enjoy a tax-free environment with zero corporate and personal income tax. This ensures businesses benefit from cost-effective operations.",
      },
      {
        title: "Flexible Business Structure",
        icon: <MdIncompleteCircle />,
        desc: "ADGM provides a variety of structures for companies to choose from, including LLC, partnerships and branches.",
      },
      {
        title: "World-class Technology and Infrastructure",
        icon: <MdIncompleteCircle />,
        desc: "With state-of-the-art facilities, flexible office spaces, and world-class technological support, ADGM ensures that your business is equipped to compete on a global stage.",
      },
      {
        title: "Strong Regulatory Authority",
        icon: <MdIncompleteCircle />,
        desc: "ADGM is governed by a strong legal and regulatory framework that ensures full compliance with international standards, providing a secure and stable environment for businesses.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Different Types of License Available in{" "}
        <span className="text-lime-500">ADGM</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Commercial License</span> This
        license is for businesses engaging in trading activities, including
        import/export, retail, wholesale, distribution, and more.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Financial License</span>{" "}
        Financial Licenses is for financial institutions and businesses offering
        financial services, including banking, insurance, investment management,
        and other financial operations.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Consultancy License</span>{" "}
        Consultancy license is for businesses that provide professional
        consulting services to clients in various sectors.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Technology and Innovation License
        </span>{" "}
        Technology & Innovation License is for businesses focused on research,
        development, innovation, and technological services.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Holding Company License</span>{" "}
        Holding Company License is for companies that want to set up a holding
        structure for managing investments or owning other businesses and
        assets.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Retail License</span> Retail
        license is for businesses engaging in retail sales and e-commerce
        operations.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Media License</span> Media
        License is for companies involved in media-related activities, including
        content creation, digital media, publishing, and broadcasting.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Real Estate License</span>{" "}
        Real Estate License is for businesses in the real estate sector,
        including property management, development, and real estate investment
        activities.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Manufacturing License</span>{" "}
        Manufacturing license is for companies that engage in the manufacturing
        or assembly of products.
      </p>,
      <p key={9} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Education License</span>{" "}
        Education license is For institutions offering educational programs,
        training, and academic services.
      </p>,
      <p key={10} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Health and Wellness License
        </span>{" "}
        Health and Wealth License is for businesses providing health-related
        services, products, or wellness programs.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        The steps to set up your <span className="text-lime-500"> ADGM </span>{" "}
        License
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose Your Business Activity and License Type",
        isPoints: false,
        desc: "Determine the nature of your business (e.g., commercial, financial, technology, consultancy, etc.) to choose the appropriate license.",
      },
      {
        title: "Choose a Business Name",
        isPoints: false,
        desc: "Choose a unique business name that aligns with ADGM’s naming conventions.",
      },
      {
        title: " Register Your Business with ADGM",
        isPoints: false,
        desc: "Complete and submit the registration application form. You will need to provide information about your business structure, activities, shareholders, and directors.",
      },
      {
        title: "Select Your Office Location",
        isPoints: false,
        desc: "ADGM offers various office space options, including flexible office spaces, shared workspaces, or dedicated office facilities.",
      },
      {
        title: "Complete the License Processing ",
        isPoints: false,
        desc: " Once the registration process is complete and your office location is chosen, you can proceed to apply for your ADGM license.",
      },
      {
        title: "Open a Corporate Bank Account",
        isPoints: false,
        desc: "Once you have your ADGM business license, you can open a corporate bank account in Abu Dhabi.",
      },
      {
        title: "Comply with ADGM’s Ongoing Regulatory Requirements",
        isPoints: false,
        desc: "Depending on your business activity, you will need to comply with ADGM’s ongoing regulatory requirements.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for Setting up{" "}
        <span className="text-lime-500"> ADGM License</span>
      </Heading>
    ),
    sixthTableHead: ["Document Type", "Description"],
    sixthTableBody: [
      {
        title: "Passport Copy",
        doc1: "A clear copy of the passport of the shareholder(s), director(s), and other key individuals.",
      },
      {
        title: "Proof of Address",
        doc1: "Recent utility bills or bank statements (within the last 3 months) to verify the residential address of the shareholder(s), director(s), or authorized signatories.",
      },
      {
        title: "Business Plan",
        doc1: "A detailed business plan (for certain licenses, especially in regulated sectors like financial services).",
      },
      {
        title: "Memorandum & Articles of Association (MOA & AOA)",
        doc1: "A copy of the company’s MOA and AOA outlining the legal structure and governance of the company.",
      },
      {
        title: "Shareholder and Director Details",
        doc1: "Information about the shareholders and directors, including their personal and professional background.",
      },
      {
        title: "Office Lease Agreement",
        doc1: "A copy of the lease agreement or proof of office space in ADGM (if required, based on license type).",
      },
      {
        title: "Trade Name Reservation Certificate",
        doc1: "Approval for the business name from ADGM’s Registration Authority.",
      },
      {
        title: "Legal Structure Details",
        doc1: "For partnerships or companies, the details of the business structure (e.g., LLC, partnership, etc.).",
      },
      {
        title: "Financial Statements",
        doc1: "For established businesses, previous financial statements may be requested for review.",
      },
      {
        title: "Authorization Letter",
        doc1: "For companies with multiple shareholders or directors, a letter of authorization for representatives to sign documents on behalf of the company.",
      },
      {
        title: "Directors' Resolution",
        doc1: "A formal resolution from the board of directors authorizing the establishment of the business and appointing the necessary officers.",
      },
      {
        title: "Proof of Professional Qualification",
        doc1: "For certain professional services (e.g., legal or consultancy firms), proof of qualifications or certifications may be required.",
      },
      {
        title: "Regulatory Approvals (if applicable)",
        doc1: "Additional licenses or permits for businesses in regulated industries (e.g., financial services, healthcare).",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle: "Start Your DIFC Journey Today with BIZ Growth!",
    bannerDesc:
      "Are you ready to take your business to the next level in one of the world’s leading financial hubs? Contact our business consultants today for a consultation and learn how a DIFC license can empower your business.",

    name: "difc",
    heroTitle: (
      <Heading>
        Launch Your Business Idea with
        <span className="text-lime-600 font-SplineSans">
          {" "}
          DIFC - Dubai International Financial Center
        </span>{" "}
      </Heading>
    ),
    heroDescription:
      "DIFC (Dubai International Financial Center) is a leading financial hub in the Middle East. It provides businesses the platform to expand their operations, and choose from a variety of company structures. It is a thriving financial center, attracting a diverse range of businesses, including investment firms, insurance companies and tech startups.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">DIFC?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Prime location in Dubai",
        icon: <FaPeopleGroup />,
        desc: "It is in the premier location of the global and logistic hub of Dubai, offering easy access to markets in the Middle East, Africa and South Asia region. The proximity to Dubai's major airports, seaports, and infrastructure makes it a gateway to emerging markets with immense growth and potential.",
      },
      {
        title: "100% Foreign Ownership",
        icon: <FaBusinessTime />,
        desc: "Foreign companies can enjoy full control of their businesses in DIFC, providing them to operate without a local sponsor or partner.",
      },
      {
        title: "World-class Infrastructure",
        icon: <MdIncompleteCircle />,
        desc: "DIFC has one of the supportive eco-systems available in Dubai for businesses. It has excellent office spaces, commercial buildings, and residential areas.",
      },
      {
        title: "Independent Regulatory Body",
        icon: <MdIncompleteCircle />,
        desc: "DIFC operates under a legal framework based on common law by  Dubai Financial Services Authority. The DFSA  offers world-class legal and regulatory services to ensure a secure and stable business environment.",
      },
      {
        title: " Access to a Global Talent Pool",
        icon: <MdIncompleteCircle />,
        desc: "DIFC attracts some of the brightest and most talented professionals from around the world. With its international reach and dynamic ecosystem, DIFC is a hub for professionals across a range of industries.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Types of Licenses Available in{" "}
        <span className="text-lime-500">DIFC</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Financial Services License
        </span>{" "}
        The Financial Services License is tailored for companies engaged in
        financial activities. This license is suitable for businesses offering a
        wide range of financial products and services.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Non-Financial Services License
        </span>{" "}
        The Non-Financial Services License covers a wide range of businesses
        operating outside of the financial sector.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Retail License</span> The
        Retail License is designed for businesses involved in the retail trade
        within the DIFC district. This type of license is ideal for companies
        looking to operate within DIFC’s commercial spaces.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Innovation License</span> The
        Innovation License is specifically created for businesses involved in
        cutting-edge sectors such as technology, fintech, blockchain, artificial
        intelligence, and other innovative industries.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Family Office License</span>{" "}
        The Family Office License is tailored for private wealth management
        companies. It is ideal for individuals or families looking to manage and
        grow their wealth, and for firms offering services such as Asset
        Management and Investment Services.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Special Purpose Vehicle (SPV) License
        </span>{" "}
        A Special Purpose Vehicle (SPV) license is used by companies established
        for specific business purposes, such as holding assets, managing
        investments, or isolating financial risks.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Branch Office License</span>{" "}
        A Branch Office License is for companies wishing to establish a presence
        in the DIFC without setting up a separate legal entity. This license
        allows companies to operate a branch office that is an extension of
        their parent company.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Partnership License</span> The
        Partnership License is intended for firms that want to operate under a
        partnership model. This license allows for collaboration between
        individuals or corporate entities.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Steps Involved in Getting <span className="text-lime-500"> DIFC </span>{" "}
        License
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose Your Business Activity and License Type",
        isPoints: false,
        desc: "Identify the specific type of business activity and determine the appropriate license type based on your business activity. ",
      },
      {
        title: " Prepare and Secure Required Documents",
        isPoints: false,
        desc: "Gather all necessary documents like Passport Copies, NOC, Bank references, etc.",
      },
      {
        title: " Select and Secure Office Space",
        isPoints: false,
        desc: "Choose a suitable office space within DIFC.",
      },
      {
        title: " Obtain DFSA Approval (For Financial Firms)",
        isPoints: false,
        desc: "If your business is a financial institution, you need to obtain approval from DFSA.",
      },
      {
        title: "Complete the License Processing ",
        isPoints: false,
        desc: " Once the registration process is complete and your office location is chosen, you can proceed to apply for your ADGM license.",
      },
      {
        title: " Pay License and Registration Fee",
        isPoints: false,
        desc: "Pay the required fees for the license and other associated costs. ",
      },
      {
        title: " Receive your DIFC License",
        isPoints: false,
        desc: "Once your application is approved and all requirements are met. You will receive your DIFC License.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for Setting up{" "}
        <span className="text-lime-500"> DIFC License</span>
      </Heading>
    ),
    sixthTableHead: ["Document Type", "Description"],
    sixthTableBody: [
      {
        title: "Completed Application Form",
        docs: [
          "The official DIFC Business License application form, specifying the business activities and license type.",
        ],
      },
      {
        title: "Proof of Identity",
        docs: [
          "Passports of shareholders, directors, and key management.",
          "Emirates ID for UAE residents (if applicable).",
          "Proof of address (utility bills or bank statements not older than 3 months).",
        ],
      },
      {
        title: "Business Plan",
        docs: [
          "A comprehensive business plan covering:",
          "Company overview, business model, and market analysis.",
          "Financial projections and compliance framework.",
          "Risk management approach (particularly for financial services).",
        ],
      },
      {
        title: "Legal Entity & Incorporation Documents",
        docs: [
          "Certificate of Incorporation from the parent company (for branches/subsidiaries).",
          "Memorandum and Articles of Association for corporate entities.",
          "Shareholder agreements (if applicable).",
        ],
      },
      {
        title: "Office Lease Agreement",
        docs: [
          "A copy of the signed office lease agreement within DIFC, confirming office space for the business.",
        ],
      },
      {
        title: "Bank Account Opening Documents",
        docs: [
          "Bank reference letter from the intended bank.",
          "Proof of company registration.",
          "List of authorized signatories for the corporate account.",
        ],
      },
      {
        title: "Regulatory Compliance Documents",
        docs: [
          "AML/KYC policies (for financial services companies).",
          "Risk management and governance frameworks (for regulated businesses).",
        ],
      },
      {
        title: "Director & Shareholder Details",
        docs: [
          "CVs of directors/shareholders outlining professional background and qualifications.",
          "Personal profile for key management.",
        ],
      },
      {
        title: "Visa & Residency Documents (if applicable)",
        docs: [
          "Employment contracts for foreign employees.",
          "Passport copies and residence visa copies (for non-UAE residents).",
        ],
      },
      {
        title: "Additional Documents (if applicable)",
        docs: [
          "For financial institutions: additional capital, financial history, and management structure.",
          "For Special Purpose Vehicles (SPVs): details of the entity’s purpose and financial statements.",
        ],
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle: "Launch your Business in MEYDAN Free Zone",
    bannerDesc:
      "Meydan offers a unique blend of luxury, convenience, connectivity, and a business-friendly environment, making it a top choice for entrepreneurs and businesses looking to establish themselves in Dubai. Whether you're launching a startup or expanding an existing business, consult BIZ Growth Consultants to get custom consultation related to your business activity.",
    name: "meydan",
    heroTitle: (
      <Heading>
        Set Up your business in a
        <span className="text-lime-600 font-SplineSans">
          {" "}
          Dynamic Economic Freezone- MEYDAN
        </span>{" "}
      </Heading>
    ),
    heroDescription:
      "Meydan is a dynamic economic free zone located in the heart of Dubai, which is a prominent city in UAE and provides high-end infrastructure with  proximity to major transport hubs, including Dubai's famous racecourse, shopping malls, hotels, and business centers.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">Meydan?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Strategic Location",
        icon: <FaPeopleGroup />,
        desc: "Situated close to Dubai’s major landmarks and transportation hubs, providing easy access to global markets. Meydan is well connected to major highways, making is easier for clients and employees to access the workplace of your business.",
      },
      {
        title: "100% Foreign Ownership",
        icon: <FaBusinessTime />,
        desc: "Business can be wholly owned by foreign investors and can be owned by them without a local sponsor.",
      },
      {
        title: "Diverse Business Activities",
        icon: <MdIncompleteCircle />,
        desc: "Meydan Freezone offers a wide range of industries including trade, logistics, technology and more.",
      },
      {
        title: "Networking Opportunities",
        icon: <MdIncompleteCircle />,
        desc: "Meydan regularly hosts large-scale events, including the Dubai World Cup (one of the world’s richest horse races), and other high-profile international events. These create networking opportunities and exposure for businesses",
      },
      {
        title: "Prestige and High-Profile Environment",
        icon: <MdIncompleteCircle />,
        desc: "Located in a district known for its luxury racecourse, hotels, and upscale lifestyle, setting up your business in Meydan gives you the opportunity to align with high-end clientele and establish your brand as part of a prestigious environment.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Types of Licenses Available in{" "}
        <span className="text-lime-500">Meydan</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Commercial License</span>{" "}
        This license is intended for businesses involved in trading goods and
        services. It allows you to import, export, distribute, and store
        products.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Professional License</span>{" "}
        This license is for businesses offering professional services that do
        not involve trading goods. It is typically issued for service-based
        businesses, including consultancy, design, and educational services.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Industrial License</span> The
        industrial license is for businesses engaged in manufacturing,
        processing, and industrial production. If your business involves
        assembling, manufacturing, or any form of production, this is the
        appropriate license.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-commerce License</span>{" "}
        This license is specifically for businesses involved in online trading,
        whether selling physical goods or digital products. It allows businesses
        to operate solely through online platforms without the need for a
        physical store.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Media License</span> This is
        for businesses in the media and entertainment industry. Companies
        involved in publishing, advertising, broadcasting, or content creation
        would require this license.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> IT/Technology License</span>{" "}
        Businesses that focus on information technology (IT) and
        technology-related services can apply for an IT license. This includes
        software development, network management, cloud services, and more.
      </p>,

      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Consultancy License</span> For
        businesses providing specialized consultancy services in various fields.
        This license allows professional advice and strategic services in areas
        such as management, HR, finance, IT, and more.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Tourism License</span> For
        businesses providing services in the travel, tourism, and hospitality
        sectors. This includes travel agencies, tour operators, and hospitality
        services such as hotels and restaurants.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Branch of a Foreign Company License
        </span>{" "}
        If you are a foreign company looking to expand your operations in Dubai
        and Meydan, you can establish a branch office. This license allows you
        to operate in Dubai as a branch of an existing company outside the UAE.
      </p>,
      <p key={9} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Freelancer License</span> This
        license is for individuals who want to work as independent professionals
        or freelancers. It allows one person to operate a business under their
        name in various sectors, such as media, technology, design, etc.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Steps Involved in Getting{" "}
        <span className="text-lime-500"> Meydan Freezone </span> License
      </Heading>
    ),
    fourthPoints: [
      {
        title: " Determine the Business Activity and License",
        isPoints: false,
        desc: "Determine the primary and secondary activities your company will undertake. Also if these activities are permissible within the freezone regulations. ",
      },
      {
        title: " Choose the legal Structure",
        isPoints: false,
        desc: "Determine the most suitable legal structure, typically a free zone LLC. ",
      },
      {
        title: "Select a company name and prepare the necessary documents ",
        isPoints: false,
        desc: "Gather required documents that you’ll need to submit including passport copies, visa copies, bank reference letter, etc. ",
      },
      {
        title: "Submit Application to Meydan",
        isPoints: false,
        desc: "Submit the completed application form and supporting documents to Meydan Free Zone     authority for approval. ",
      },
      {
        title: "Sign the Agreement and Receive the License",
        isPoints: false,
        desc: "Once your application is approved, you will be asked to sign a Lease Agreement (if renting office space) and a Business License Agreement.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for Setting up{" "}
        <span className="text-lime-500"> Meydan License</span>
      </Heading>
    ),
    sixthTableHead: ["Document Type", "Description"],
    sixthTableBody: [
      {
        title: "Passport Copies",
        doc1: "A copy of the passport of all shareholders and directors of the company.",
      },
      {
        title: "Proof of Address",
        doc1: "A utility bill (e.g., electricity or water bill), bank statement, or tenancy contract to prove the address of the shareholders or directors.",
      },
      {
        title: "Business Plan",
        doc1: "A detailed business plan outlining the business activity, financial projections, and objectives.",
      },
      {
        title: "No Objection Certificate (NOC)",
        doc1: "Required if the applicant is already employed in the UAE.",
      },
      {
        title: "Application Form",
        doc1: "Completed application form for company registration with all necessary details.",
      },
      {
        title: "Company Memorandum of Association (MOA)",
        doc1: "A document outlining the company's structure, ownership, and activities. Required for LLCs.",
      },
      {
        title: "Visa Copies (if applicable)",
        doc1: "Copies of residency or employment visas (for the company owners or employees).",
      },
      {
        title: "Trade License / Existing Company Documents",
        doc1: "If setting up a branch of a foreign company, include documents from the parent company (such as registration and trade license).",
      },
      {
        title: "Bank Reference Letter",
        doc1: "A reference letter from your bank, confirming your financial standing.",
      },
      {
        title: "Shareholder Agreement (if applicable)",
        doc1: "If the business has multiple shareholders, a shareholder agreement may be required.",
      },
      {
        title: "Lease Agreement (if applicable)",
        doc1: "If renting office space within Meydan Free Zone, submit a copy of the lease agreement.",
      },
      {
        title: "Power of Attorney (if applicable)",
        doc1: "If an authorized representative is handling the setup, a notarized Power of Attorney may be required.",
      },
      {
        title: "Legalized Documents (if applicable)",
        doc1: "Documents from outside the UAE may need to be attested or legalized depending on the business type.",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle: "Experience the future of your Business with SPC Freezone!",
    bannerDesc:
      "SPC Freezone offers a strong commitment to customer satisfaction, regulatory discipline and sustainable development. From tax benefits to full foreign ownership, SPC Free Zone offers a range of benefits to help you establish your business in a dynamic environment.",
    name: "SPC",
    heroTitle: (
      <Heading>
        Empower your Business with
        <span className="text-lime-600 font-SplineSans">
          {" "}
          SPC Free zone ( Sharjah Publishing City )
        </span>{" "}
      </Heading>
    ),
    heroDescription:
      "SPC Free Zone is a prime hub for businesses looking to expand into new markets with ease. Located in a prime area, SPC offers a range of services that helps businesses to set up and operate. SPC Freezone offers world-class schools and hospitals, a vibrant cultural scene and beautiful natural surroundings.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">SPC?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "100% Foreign Ownership",
        icon: <FaPeopleGroup />,
        desc: "At SPC Free Zone, you can retain full control of your business. As a foreign investor, you are free to own 100% of your company without needing a local partner.",
      },
      {
        title: "Zero Taxes",
        icon: <FaBusinessTime />,
        desc: "SPC offers corporate tax exemptions, VAT exemptions, and no import or export duties. SPC is perfect for companies looking to optimize their tax liabilities.",
      },
      {
        title: "Streamlined Procedures",
        icon: <MdIncompleteCircle />,
        desc: "Process of company registration, licensing, and operations is streamlined. With minimal paperwork, your business can be up and running in no time.",
      },
      {
        title: "Ease of Access",
        icon: <MdIncompleteCircle />,
        desc: "SPC Free Zone is located to give your business access to major international markets, with transport links to highways and proximity to shipping ports.",
      },
      {
        title: "World-class Infrastructure",
        icon: <MdIncompleteCircle />,
        desc: "From modern office spaces to advanced warehouses SPC offers world-class infrastructures to meet the needs of businesses in various sectors.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Different Types of Licenses in{" "}
        <span className="text-lime-500">SPC Free zone</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Trading License</span> A
        Trading License allows businesses to import, export, distribute, and
        store products. This license is ideal for companies involved in
        wholesale or retail trading activities.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License</span> An
        Industrial License is for businesses involved in manufacturing,
        processing, assembling, or producing goods. This license supports
        companies with production operations.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Service License</span> A
        Service License is designed for businesses that provide services rather
        than physical products. This license is for companies offering
        consultancy, IT, marketing, and other professional services.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-commerce License</span> An
        E-Commerce License is for businesses that operate entirely online,
        facilitating the buying and selling of products or services via the
        internet.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Consultancy License</span> A
        Consultancy License is for businesses offering professional consulting
        services in various fields such as finance, HR,management, and more.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Educational License</span> An
        Educational License is issued to businesses offering educational and
        training services, whether academic or professional.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Media License</span> A Media
        License is for businesses involved in media, broadcasting, film
        production, advertising, and public relations. This license allows you
        to engage in content creation, distribution, and media services.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Research and Development (R&D) License
        </span>{" "}
        A Research and Development (R&D) License is ideal for businesses
        focusing on innovation, technology, and product development.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Logistics License</span> A
        Logistics License is for companies involved in the transportation,
        storage, and distribution of goods.
      </p>,
      <p key={9} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Branch of a Foreign Company License
        </span>{" "}
        A Branch Office License allows foreign companies to establish a branch in the SPC Free Zone to conduct business activities that are in line with the parent company`s scope.
      </p>,
      <p key={10} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Freelance License</span> A
        Freelance License allows individuals to operate as independent
        professionals or consultants within SPC Free Zone.
      </p>,
      <p key={11} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Virtual Office License</span>{" "}
        A Virtual Office License allows businesses to operate without the need
        for a physical office. This license is designed for companies that need
        a registered address but work remotely.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Steps Involved in Getting{" "}
        <span className="text-lime-500"> SPC Freezone </span> License
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose Your Business Activity",
        isPoints: false,
        desc: "The first step is to decide on the nature of your business activity. SPC Free Zone offers various licenses based on the business type, such as trading, manufacturing, consulting, e-commerce, and more. ",
      },
      {
        title: "Select Your Legal Structure",
        isPoints: false,
        desc: "Choose the appropriate legal structure for your business. ",
      },
      {
        title: " Choose a Business Name",
        isPoints: false,
        desc: "The business name must comply with naming standards of SPC Free zone and not conflict with existing businesses. ",
      },
      {
        title: " Submit the Application and Documents",
        isPoints: false,
        desc: "Once you have chosen your business activity, legal structure, and business name, you need to submit an application to the SPC Free Zone authority along with required documents.",
      },
      {
        title: " Pay the License Fee",
        isPoints: false,
        desc: "Once your application and supporting documents are approved, you will need to pay the relevant fees for your business license.",
      },
      {
        title: " Finalize your Business Setup ",
        isPoints: false,
        desc: "With the license and visas approved, you can complete the final steps of your business setup.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for Setting up{" "}
        <span className="text-lime-500"> SPC Freezone License</span>
      </Heading>
    ),
    sixthTableHead: ["Document Type", "Description"],
    sixthTableBody: [
      {
        title: "Completed Application Form",
        doc1: "The official form provided by SPC Free Zone, filled with company details.",
      },
      {
        title: "Passport Copy",
        doc1: "A copy of the passport of the business owner(s), partners, and/or investors.",
      },
      {
        title: "Passport-sized Photographs",
        doc1: "Recent passport-sized photos of the business owner(s) and key management.",
      },
      {
        title: "Proof of Address",
        doc1: "A recent utility bill or government-issued document verifying the address of the business owner(s).",
      },
      {
        title: "Business Plan",
        doc1: "A business plan outlining the scope of the business, goals, and operational strategy (may be required for certain licenses).",
      },
      {
        title: "No Objection Certificate (NOC)",
        doc1: "A letter from the current employer (if applicable), allowing the applicant to start a business (for employees of other companies).",
      },
      {
        title: "Educational Qualifications",
        doc1: "Copies of academic certificates (may be required for specific business activities).",
      },
      {
        title: "Lease Agreement / Proof of Office Space",
        doc1: "A signed lease agreement for office space, or proof of the virtual office package selected.",
      },
      {
        title: "Legal Structure Documents",
        doc1: "Documents specifying the type of company (LLC, branch, sole proprietorship, etc.).",
      },
      {
        title: "Copy of Trade Name Reservation",
        doc1: "Proof of approval for your chosen business name, as required by SPC Free Zone.",
      },
      {
        title: "Visa Application Forms",
        doc1: "Forms for visa processing for the owner(s), employees, and their dependents (if applicable).",
      },
      {
        title: "Bank Reference Letter",
        doc1: "A reference letter from the business owner's bank (may be required for certain business types).",
      },
      {
        title: "Additional Approvals or Permits",
        doc1: "Any specific permits or approvals depending on the business activity (e.g., health, safety, environmental).",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle: "Ready to Launch Your Business in JAFZA?",
    bannerDesc:
      "Ready to grow your business with JAFZA? Get in touch with us today, and our team of experts will help you take the next step toward establishing your business in one of the world’s leading free zones.",
    name: "JAFZA",
    heroTitle: (
      <Heading>
        Your Gateway to <span className="text-indigo-600">Business Global</span>{" "}
        with <span className="text-lime-500">JAFZA (Jebel Ali Free Zone)</span>
      </Heading>
    ),
    heroDescription:
      "Jebel Ali Free Zone (JAFZA) is one of the world’s leading business hubs located in one of the prime locations in Dubai.  Offering businesses easy access to international markets and excellent infrastructure, JAFZA is the ultimate destination for companies looking to grow, innovate, and expand.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">JAFZA?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Prime Location",
        icon: <FaPeopleGroup />,
        desc: " Located next to the Jebel Ali Port, one of the world’s busiest ports, JAFZA offers easy connectivity to global markets via sea, air, and land.",
      },
      {
        title: "World-Class Infrastructure",
        icon: <FaBusinessTime />,
        desc: "JAFZA offers excellent office spaces, warehouses, land plots, and industrial facilities, all designed to meet the unique needs of every business.",
      },
      {
        title: "Tax-Free Environment",
        icon: <MdIncompleteCircle />,
        desc: "JAFZA offers many benefits, including 100% foreign ownership, zero taxes on income and profits.",
      },
      {
        title: "Ease of Doing Business",
        icon: <MdIncompleteCircle />,
        desc: "Setting up a company in JAFZA is quick and easy, with a streamlined process that ensures your business is up and running without delays",
      },
      {
        title: "Access to Talent",
        icon: <MdIncompleteCircle />,
        desc: "Dubai is home to a highly skilled and diverse workforce. JAFZA provides companies with access to this talent pool, allowing businesses to recruit skilled professionals.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Different Types of Licenses in{" "}
        <span className="text-lime-500">JAFZA</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Trading License</span> A
        Trading License is ideal for businesses engaged in the import, export,
        and distribution of goods.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License</span> An
        Industrial License is issued to businesses involved in manufacturing,
        assembling, or processing products.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Service License</span> A
        Service License is designed for companies offering services and
        consultancy.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-commerce License</span> An
        E-Commerce License allows companies to operate fully online and engage
        in the buying and selling of goods or services through digital
        platforms.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Branch Office License</span>{" "}
        A Branch Office License is for foreign companies wishing to open a
        branch in JAFZA. The branch operates as an extension of the parent
        company but is legally considered a separate entity.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Holding License</span> A
        Holding License is intended for businesses that wish to hold and manage
        shares in other companies.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          National Industrial License
        </span>{" "}
        A National Industrial License is a special license for UAE national
        entrepreneurs who want to set up manufacturing operations.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Innovation License</span> An
        Innovation License is designed for businesses engaged in research,
        development, or innovation-driven sectors.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Steps Involved in Getting{" "}
        <span className="text-lime-500">JAFZA License</span>{" "}
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose Your License Type",
        isPoints: false,
        desc: "Whether you need a trading, industrial, or service license, we offer a wide range of options to match your business needs",
      },
      {
        title: "Register Your Company",
        isPoints: false,
        desc: " Submit the necessary documents and complete the registration process to get your business established. ",
      },
      {
        title: "Secure Your Space",
        isPoints: false,
        desc: "Choose from a variety of office spaces, warehouses, or land plots in JAFZA’s facilities. ",
      },
      {
        title: "Hire Employees",
        isPoints: false,
        desc: "Tap into Dubai’s diverse talent pool by hiring skilled professionals to support your business growth.",
      },
      {
        title: "Start Operating",
        isPoints: false,
        desc: "With your company set up, you can begin operations and take advantage of JAFZA’s location.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for Setting up{" "}
        <span className="text-lime-500">JAFZA</span>
      </Heading>
    ),
    sixthTableHead: ["Document", "Description"],
    sixthTableBody: [
      {
        title: "Completed Application Form",
        doc1: "Official form filled out with all required details about the business and its activities.",
      },
      {
        title: "Passport Copy of Shareholders/Directors",
        doc1: "Clear copy of the passport for all shareholders and directors of the company.",
      },
      {
        title: "UAE Resident Visa Copies",
        doc1: "If applicable, for shareholders or directors residing in the UAE.",
      },
      {
        title: "Proof of Address",
        doc1: "A utility bill or bank statement showing the address of the shareholder or director (usually within the last 3 months).",
      },
      {
        title: "No Objection Certificate (NOC)",
        doc1: "Required if the shareholder or director is an employee in the UAE.",
      },
      {
        title: "Business Plan (For Certain Licenses)",
        doc1: "A detailed business plan outlining company activities, target market, and financial projections.",
      },
      {
        title: "Memorandum of Association (MOA)",
        doc1: "The document that outlines the company’s objectives, shareholding structure, and other operational details (required for LLC or branch structures).",
      },
      {
        title: "Articles of Association (AOA)",
        doc1: "For companies requiring detailed operational and governance structures (applicable for some types of businesses).",
      },
      {
        title: "Bank Reference Letter",
        doc1: "A letter from the bank where the shareholder or company has an account, confirming the account details.",
      },
      {
        title: "Legalized Documents (For Foreign Investors)",
        doc1: "Documents such as the passport copies or corporate documents for foreign shareholders may need to be legalized or attested by relevant authorities.",
      },
      {
        title: "Trade Name Reservation",
        doc1: "A copy of the trade name reservation from the JAFZA’s approved list of business names.",
      },
      {
        title: "Lease Agreement (If Applicable)",
        doc1: "If a physical office or warehouse space is required, a signed lease agreement or property rental contract must be provided.",
      },
      {
        title: "License Type Declaration",
        doc1: "A declaration specifying the type of license (trading, industrial, service, etc.) required for your business.",
      },
      {
        title: "Power of Attorney (If Applicable)",
        doc1: "If an agent or representative is applying on behalf of the company, a notarized Power of Attorney must be provided.",
      },
      {
        title: "Shareholder’s/Director’s CV (For Certain Licenses)",
        doc1: "A curriculum vitae of each shareholder or director, highlighting their professional background and expertise (required for certain businesses like consultancy).",
      },
      {
        title: "Financial Statements",
        doc1: "For existing businesses, the last 2-3 years of audited financial statements may be required.",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle: "Start Your Business Journey Today!",
    bannerDesc:
      "Ready to take the next step? Start your business with RAKEZ and enjoy a seamless, efficient setup process. BIZ Growth Consultants are here to guide you through every step for setting up your business in RAKEZ.",
    name: "Rakez",
    heroTitle: (
      <Heading>
        Kickstart your business with{" "}
        <span className="text-lime-600">RAKEZ (Ras Al Khaimah Free Zone)</span>
      </Heading>
    ),
    heroDescription:
      "Ras Al Khaimah Economic Zone (RAKEZ) is a hub for businesses of all sizes. Whether you're a startup, SME, or multinational corporation, RAKEZ offers world-class facilities in a prime location, and customized solutions to help you grow.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">RAKEZ?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Strategic  Location",
        icon: <FaPeopleGroup />,
        desc: "Situated in the UAE, with direct access to key markets in the Middle East, Africa, and Asia.",
      },
      {
        title: "Ease of Setup",
        icon: <FaBusinessTime />,
        desc: "Simple business setup process with quick licensing and registration.",
      },
      {
        title: "Flexibility",
        icon: <MdIncompleteCircle />,
        desc: "Various types of facilities ranging from offices and warehouses to manufacturing units and land for lease.",
      },
      {
        title: "Cost-Effective",
        icon: <MdIncompleteCircle />,
        desc: "Competitive pricing and low operational costs with a range of cost-saving incentives",
      },
      {
        title: "Tax Benefits",
        icon: <MdIncompleteCircle />,
        desc: " Enjoy 100% foreign ownership, zero personal income tax, and 100% repatriation of profits and capital.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Different Types of Licenses in{" "}
        <span className="text-lime-500">RAKEZ</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Trading License</span> Trading
        License is for businesses engaged in import, export, distribution, and
        re-export of goods.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License</span>{" "}
        Industrial License is for businesses involved in manufacturing or
        industrial activities.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Service License</span>{" "}
        Service license is for businesses offering professional services or
        consultancy.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-commerce License</span>{" "}
        E-commerce license is for businesses conducting online retail or
        e-commerce activities.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Freelancer License</span>{" "}
        Freelancer license is for individuals who wish to operate as
        self-employed professionals.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Educational License</span> A
        Education license is for businesses engaged in providing educational or
        training services.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Media License</span> Media
        license is for businesses in the media, broadcasting, and content
        creation sectors.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Technology License</span>{" "}
        Technology license is for companies in the technology sector, including
        IT, software development, and digital solutions.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Tourism License</span>{" "}
        Tourism license is for businesses involved in the tourism and
        hospitality sector.
      </p>,
      <p key={9} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Branch Office License</span>{" "}
        Branch office license is for foreign companies wishing to set up a
        branch office in the UAE.
      </p>,
      <p key={10} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          {" "}
          Holding Company License
        </span>{" "}
        Holding company license is for companies intending to hold and manage
        assets or shares in other companies.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Steps Involved in Getting{" "}
        <span className="text-lime-500">RAKEZ License</span>{" "}
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose Your License",
        isPoints: false,
        desc: "Select from our diverse license types based on your business needs.",
      },
      {
        title: "Submit Your Documents",
        isPoints: false,
        desc: "Provide the necessary documents and information to kick-start your application.",
      },
      {
        title: " Company Incorporation",
        isPoints: false,
        desc: "Our team will process your application quickly, ensuring a hassle-free incorporation process.",
      },
      {
        title: "Facility Selection",
        isPoints: false,
        desc: "Choose from a range of office spaces, warehouses, and industrial facilities.",
      },
      {
        title: "Get Your Visa",
        isPoints: false,
        desc: "We offer visa processing services for entrepreneurs, employees, and investors.",
      },
      {
        title: "Start Operating",
        isPoints: false,
        desc: "With your business set up, you can begin operations immediately and start taking advantage of RAKEZ's facilities and support services.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for Setting up{" "}
        <span className="text-lime-500">RAKEZ License</span>
      </Heading>
    ),
    sixthTableHead: ["Business Setup Type", "Documents Required"],
    sixthTableBody: [
      {
        title: "Application Form",
        docs: ["Completed business setup application form."],
      },
      {
        title: "Passport Copies",
        docs: [
          "Passport copy of all shareholders, directors, and manager(s) (valid for at least 6 months).",
        ],
      },
      {
        title: "Visa Copies",
        docs: [
          "Copy of valid UAE visa (if applicable) for shareholders and directors.",
        ],
      },
      {
        title: "Proof of Address",
        docs: [
          "Proof of residential address for shareholders and directors (e.g., utility bill or bank statement).",
        ],
      },
      {
        title: "Photographs",
        docs: ["Passport-sized photographs of shareholders and directors."],
      },
      {
        title: "Business Plan",
        docs: [
          "A brief business plan detailing the nature of the business, operations, and activities (if required for specific licenses).",
        ],
      },
      {
        title: "No Objection Certificate (NOC)",
        docs: [
          "For employees or individuals transferring from other UAE employers (if applicable).",
        ],
      },
      {
        title: "Trade Name Reservation",
        docs: [
          "RAKEZ trade name approval for your business name (optional if already reserved).",
        ],
      },
      {
        title: "Company's Articles of Association",
        docs: [
          "Required for companies with more than one shareholder; outlines the company's internal governance.",
        ],
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle: "Launch Your Business Idea with Ajman Free Zone license!",
    bannerDesc:
      "For personalized advice on selecting the right license for your business, get in touch with our team. Ajman Free Zone is here to help your business thrive.",
    name: "ajman",
    heroTitle: (
      <Heading>
        Empower Your Business at{" "}
        <span className="text-lime-500">Ajman Free Zone</span>
      </Heading>
    ),
    heroDescription:
      "Ajman Free Zone (AFZ) is a thriving hub for entrepreneurs, startups, and established businesses alike. Strategically located in the UAE, AFZ offers world-class facilities, an easy business setup process, and a great platform for growth and expansion.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">Ajman Free Zone?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Prime Location",
        icon: <FaPeopleGroup />,
        desc: "Positioned near key trade routes and just 25 minutes from Dubai International Airport.",
      },
      {
        title: "Cost-Effective Solutions",
        icon: <FaBusinessTime />,
        desc: "It has affordable business packages customized to your needs.",
      },
      {
        title: "Diverse Business Opportunities",
        icon: <MdIncompleteCircle />,
        desc: "Home to over 9,000 businesses across various industries.",
      },
      {
        title: "Ease of Business Setup",
        icon: <MdIncompleteCircle />,
        desc: " 100% foreign ownership, zero income tax, and quick licensing processes",
      },
      {
        title: "Comprehensive Services",
        icon: <MdIncompleteCircle />,
        desc: "From visa processing to state-of-the-art facilities, we provide end-to-end support.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Types of Licenses Available in{" "}
        <span className="text-lime-500">Ajman Free Zone</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Trading License</span> This
        license is ideal for businesses involved in importing, exporting, or
        distributing goods within the UAE or internationally.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License</span>{" "}
        Designed for companies engaged in manufacturing, production, or
        industrial activities. The license allows manufacturing and assembly
        operations.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> E-Commerce License</span> It
        is perfect for businesses operating in the online space, including
        e-retailers and digital services. It enables online trade and services.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Professional Services License
        </span>{" "}
        Suited for consultants, freelancers, and service-oriented businesses. It
        Includes consultancy, IT, design, and more.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Freelance License</span>{" "}
        Designed for individual professionals looking to work independently. It
        covers sectors like media, education, IT, and design.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">General Trading License</span>{" "}
        Ideal for businesses dealing with a wide variety of goods without
        limitations on the type of products.It enables trading across multiple
        product categories.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Offshore License</span> Allows
        businesses to establish a legal entity in the UAE without a physical
        presence in the country. It gives 100% ownership with tax exemptions.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]"> Warehousing License</span>{" "}
        Perfect for businesses needing storage solutions for goods and
        products.It is suitable for businesses in logistics and distribution.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Business Setup Process in <span className="text-lime-500">Ajman Freezone</span>
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Choose Your Business Activity",
        isPoints: false,
        desc: "Identify the type of business activity you plan to undertake. Ajman Free Zone allows for a range of activities, including trading, manufacturing, consulting, freelancing, and e-commerce.",
      },
      {
        title: "Select Your Business License",
        isPoints: false,
        desc: "Choose the appropriate license type based on your business activity. The common licenses include trading license, industrial license.",
      },
      {
        title: " Decide on a Business Structure",
        isPoints: true,
        desc: "Select a legal entity type for your business, such as",
        points: [
          "Free Zone Establishment (FZE) – Single shareholder.",
          "Free Zone Company (FZC) – Multiple shareholders.",
          "Branch of an existing company.",
        ],
      },
      {
        title: "Reserve Your Trade Name",
        isPoints: false,
        desc: "Choose a unique trade name for your business and reserve it with the relevant authorities in Ajman Free Zone. Ensure the name adheres to UAE naming guidelines.",
      },
      {
        title: "Submit Required Documents",
        isPoints: false,
        desc: "Prepare and submit the necessary documents for registration. Common requirements include Passport copies of shareholders and managers, Recent photographs of shareholders, etc.",
      },
      {
        title: "Lease an Office or Facility",
        isPoints: false,
        desc: "Choose a suitable office space or warehouse based on your business needs. Ajman Free Zone offers flexible options.",
      },
      {
        title: "Pay Fees and Obtain Licenses",
        isPoints: false,
        desc: "Pay the required setup fees for your chosen license and facility. Once approved, you'll receive your trade license and other supporting documents, such as a Memorandum of Association (MOA).",
      },
      {
        title: "Apply for Visas",
        isPoints: false,
        desc: "Apply for visas for yourself, employees, and dependents, if applicable.",
      },
      {
        title: "Start Operations",
        isPoints: false,
        desc: "Once all approvals are complete, you can begin your business activities. Use the free zone's services and digital platforms to manage your operations efficiently.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for{" "}
        <span className="text-lime-500">Ajman Free Zone License</span>
      </Heading>
    ),
    sixthTableHead: ["Document", "Details"],
    sixthTableBody: [
      {
        title: "Passport Copy",
        docs: ["Clear copy of the passport for all shareholders and managers."],
      },
      {
        title: "Passport-Sized Photograph",
        docs: ["Recent color photographs with a white background."],
      },
      {
        title: "Visa Copy (if applicable)",
        docs: [
          "A valid UAE residence visa copy (if already residing in the UAE).",
        ],
      },
      {
        title: "Entry Stamp or Visit Visa Copy",
        docs: [
          "If not on a UAE residence visa, provide a copy of the entry stamp or visit visa.",
        ],
      },
      {
        title: "Emirates ID Copy (if applicable)",
        docs: ["Copy of Emirates ID for UAE residents."],
      },
      {
        title: "Proof of Address",
        docs: [
          "Utility bill or tenancy contract from the past three months (for international shareholders).",
        ],
      },
      {
        title: "Business Plan (for certain activities)",
        docs: [
          "A comprehensive outline of your business objectives and operational strategy.",
        ],
      },
      {
        title: "Trade Name Reservation Certificate",
        docs: ["Proof of approved trade name reservation."],
      },
      {
        title: "Memorandum of Association (MOA)",
        docs: ["Drafted MOA specifying the company structure and roles."],
      },
      {
        title: "No Objection Certificate (NOC)",
        docs: [
          "A letter from the current UAE employer permitting the individual to start a business (if employed).",
        ],
      },
      {
        title: "Power of Attorney (if applicable)",
        docs: [
          "Authorizing another individual to act on behalf of the business owner.",
        ],
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle: "Launch Your Business with SRTI Freezone License",
    bannerDesc:
      "Ready to take your business to the next level? Get in touch with our team today to learn more about SRTI Freezone license services and how we can help you set up your business for success.",
    name: "SRTI",
    heroTitle: (
      <Heading>
        Start Your Business with{" "}
        <span className="text-lime-500">SRTI Freezone</span> License
      </Heading>
    ),
    heroDescription:
      "Unlock the full potential of your business with a SRTI Freezone license. Whether you're a startup, SME, or multinational, we provide all the services to help you navigate the Freezone licensing process, ensuring that your business is set up for success in one of the most dynamic environments.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">SRTI Free Zone?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "100% Foreign Ownership",
        icon: <FaPeopleGroup />,
        desc: "Own and operate your business fully, with no need for a local partner.",
      },
      {
        title: "Tax Incentives",
        icon: <FaBusinessTime />,
        desc: "Enjoy tax-free operations for a fixed period, with an option for renewal.",
      },
      {
        title: "Flexible Business Structures",
        icon: <MdIncompleteCircle />,
        desc: "Choose from a variety of business license types, whether you're setting up as a sole proprietor, partnership, or corporation.",
      },
      {
        title: "Simple Setup Process",
        icon: <MdIncompleteCircle />,
        desc: " Our expert team handles all paperwork and formalities, ensuring a smooth, hassle-free process.",
      },
      {
        title: "Global Connectivity ",
        icon: <MdIncompleteCircle />,
        desc: "Located in one of the world’s most connected regions, SRTI Freezone provides easy access to international markets.",
      },
      {
        title: "Business-Friendly Regulations",
        icon: <MdIncompleteCircle />,
        desc: "SRTI Freezone’s regulations are designed to help businesses grow, with quick approval timelines.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Different Types of Licenses Available in{" "}
        <span className="text-lime-500">SRTI Free Zone</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Commercial License</span> This
        license is ideal for companies involved in trading activities such as
        buying, selling, and distributing goods and services. Businesses in
        e-commerce, retail, or general trading can benefit from this license.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Service License</span> A
        Service License in the SRTI Freezone is for businesses offering
        specialized services rather than physical products. It is for
        service-oriented sectors, including IT services, legal and financial
        advisory, marketing, engineering, logistics, and more.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Trading License</span> A
        Trading License in the SRTI Freezone is designed for businesses engaged
        in buying, selling, and distributing goods and services. Businesses can
        trade in a variety of goods, including electronics, consumer products,
        machinery, and more.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">E-commerce License</span> An
        E-Commerce License in the SRTI Freezone is designed for businesses
        operating online, including those selling products or services through
        digital platforms. This license allows companies to set up an online
        store, and engage in digital marketing.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Consultancy License</span> A
        Consultancy License in the SRTI Freezone is designed for businesses
        that provide expert advice and services across various industries. You
        can offer management consulting, IT consulting, financial advisory, or
        any other form of consultancy.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Business Setup Process for{" "}
        <span className="text-lime-500">SRTI Free Zone</span>
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Select the Type of License",
        isPoints: false,
        desc: "SRTI Park Freezone provides a range of licenses, including Commercial, Trading, Services, E-Commerce, and Consultancy, to support a diverse array of business activities.",
      },
      {
        title: "Choose the Business Structure",
        isPoints: false,
        desc: "Decide on the legal structure of your business (e.g., sole proprietorship, partnership, limited liability company (LLC), etc.).",
      },
      {
        title: "Submit the Application",
        isPoints: false,
        desc: "Submit the application to SRTI Freezone authorities. Documents like Passport copies of shareholders and directors, Proof of address (residential or office) are required.",
      },
      {
        title: "Business Name Reservation",
        isPoints: false,
        desc: "Submit a name reservation request for your business. The name must comply with SRTI Freezone's naming regulations and be unique within the freezone.",
      },
      {
        title: "Sign the License Agreement",
        isPoints: false,
        desc: "Once the application and name reservation are approved, you will be asked to sign the license agreement with SRTI Freezone. This formalizes your registration within the free zone.",
      },
      {
        title: "Office Space & Facility Setup",
        isPoints: true,
        desc: "Lease Office Space, If required, you will need to lease office space or coworking facilities within the SRTI Freezone. SRTI offers flexible office spaces, from small offices to large-scale facilities.",
      },
      {
        title: "Obtain the License",
        isPoints: false,
        desc: "After completing all formalities, submitting the necessary documentation, and paying the required fees, SRTI will issue your business license.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for{" "}
        <span className="text-lime-500">SRTI Free Zone License</span>
      </Heading>
    ),
    sixthTableHead: ["Document", "Description"],
    sixthTableBody: [
      {
        title: "Passport Copies",
        docs: [
          "Clear copies of the passports of shareholders, directors, and partners.",
        ],
      },
      {
        title: "Proof of Address",
        docs: [
          "Recent utility bills or bank statements showing the residential address of the shareholders or directors.",
        ],
      },
      {
        title: "Business Plan",
        docs: [
          "A detailed business plan outlining the nature of the business, target market, and objectives (especially for tech or R&D-focused businesses).",
        ],
      },
      {
        title: "Completed Application Form",
        docs: [
          "The official application form provided by SRTI Freezone, filled with company details.",
        ],
      },
      {
        title: "Company Name Reservation",
        docs: [
          "The proposed company name, ensuring it complies with SRTI's naming regulations.",
        ],
      },
      {
        title: "No Objection Certificate (NOC)",
        docs: [
          "A NOC from a sponsor if the applicant is a UAE resident and holds a current UAE visa.",
        ],
      },
      {
        title: "Shareholders Agreement (if applicable)",
        docs: [
          "A signed agreement among the business partners or shareholders, if applicable.",
        ],
      },
      {
        title: "Lease Agreement (if applicable)",
        docs: [
          "Signed lease agreement for office space or virtual office services within SRTI Freezone.",
        ],
      },
      {
        title: "Bank Reference Letter",
        docs: [
          "A letter from your bank, confirming your financial standing (if required).",
        ],
      },
      {
        title: "Personal CVs of Shareholders/Directors",
        docs: [
          "Curriculum Vitae for key persons involved in the business (shareholders, directors).",
        ],
      },
      {
        title: "Trade License (if applicable)",
        docs: [
          "For businesses transferring from other free zones, a copy of the current trade license might be required.",
        ],
      },
      {
        title: "Certificate of Incorporation (if applicable)",
        docs: [
          "For businesses that are part of a larger group or already incorporated elsewhere.",
        ],
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
  {
    bannerTitle: "Ready to establish your business in DAFZA? ",
    bannerDesc:
      "Our team of experts is here to assist you every step of the way. Get in touch with us today to learn more about our DAFZA Freezone license services and how we can help your business thrive in Dubai.",
    name: "dafza",
    heroTitle: (
      <Heading>
        Set up your business in the{" "}
        <span className="text-lime-500">DAFZA Freezone License</span>
      </Heading>
    ),
    heroDescription:
      "Set up your business in one of the most prestigious and strategically located free zones in the UAE with our DAFZA Freezone license services. Dubai Airport Freezone Authority (DAFZA) offers unmatched benefits for international and regional businesses, making it an ideal choice for companies seeking global connectivity and top-tier facilities.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why Choose <span className="text-lime-500">DAFZA Free Zone?</span>{" "}
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Strategic Location",
        icon: <FaPeopleGroup />,
        desc: "Located next to Dubai International Airport, DAFZA offers exceptional connectivity, facilitating fast and efficient trade and logistics for businesses involved in import/export and international operations.",
      },
      {
        title: "100% Foreign Ownership",
        icon: <FaBusinessTime />,
        desc: "DAFZA allows 100% foreign ownership of businesses, giving you full control and independence.",
      },
      {
        title: "Tax-Free Environment",
        icon: <MdIncompleteCircle />,
        desc: "Enjoy a tax-free setup with zero corporate tax and personal income tax for a renewable period of up to 50 years.",
      },
      {
        title: "Fully Integrated Infrastructure",
        icon: <MdIncompleteCircle />,
        desc: "With world-class office spaces, advanced IT infrastructure, and good logistics support, DAFZA provides an ideal ecosystem for companies to thrive.",
      },
      {
        title: "Easy Access to Markets",
        icon: <MdIncompleteCircle />,
        desc: "With proximity to global airports and sea ports, DAFZA offers great access to international markets, enhancing the potential for global trade.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Types of Licenses Available in{" "}
        <span className="text-lime-500">DAFZA Free Zone</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Commercial License</span>{" "}
        Ideal for businesses engaged in the import, export, and distribution of
        goods. This license allows companies to trade in a range of products and
        goods within the free zone or internationally.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Service License</span>{" "}
        Suitable for businesses providing professional or consulting services in
        sectors like IT, marketing, legal, finance, or engineering.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Industrial License</span> This
        license is for companies that engage in manufacturing, assembly, or
        processing operations within DAFZA.
      </p>,
      <p key={3} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">E-Commerce License</span> A
        specialized license designed for companies operating in e-commerce,
        including those running online stores or providing online services.
      </p>,
      <p key={4} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Freelancer License</span> This
        license is designed for individuals who wish to operate as freelancers
        within various professional sectors. It is suitable for consultants,
        writers, designers, developers, etc.
      </p>,
      <p key={5} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Technology License</span>{" "}
        Specifically tailored for businesses in the technology and IT sector,
        such as software development, research and development (R&D), and
        tech-related services.
      </p>,
      <p key={6} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Holding Company License</span>{" "}
        This license allows businesses to hold shares, assets, and investments
        in other companies. Holding companies can manage and control
        subsidiaries or assets within the UAE or abroad.
      </p>,
      <p key={7} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Creative Media License</span>{" "}
        A specialized license designed for businesses in the media, advertising,
        and entertainment industries.
      </p>,
      <p key={8} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Consultancy License</span>{" "}
        This license is designed for businesses offering advisory and
        consultancy services in sectors like management, finance, marketing, HR,
        or logistics.
      </p>,
      <p key={9} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Logistics License</span> This
        license caters to businesses engaged in logistics, supply chain
        management, and transportation services. It includes warehousing,
        packaging, and transportation operations.
      </p>,
      <p key={10} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">Retail License</span> This
        license is designed for retail businesses, allowing them to sell
        products within the UAE or internationally. It includes the right to set
        up a retail shop, online store, or operate from a kiosk within DAFZA.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Business Setup Process for{" "}
        <span className="text-lime-500">DAFZA Free Zone License</span>{" "}
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Initial Consultation",
        isPoints: false,
        desc: "Understand your business requirements, determine the most suitable license type, and discuss your specific needs (office space, visa requirements, etc.).",
      },
      {
        title: "Choose Your License Type",
        isPoints: false,
        desc: "Select the appropriate license for your business activity (commercial, service, industrial, etc.).",
      },
      {
        title: "Prepare and Submit Documentation",
        isPoints: false,
        desc: "Complete the necessary paperwork and provide supporting documents for company registration.",
      },
      {
        title: "Approval and Payment of Fees",
        isPoints: false,
        desc: "Obtain official approval from DAFZA and pay the required fees. Once DAFZA reviews the submitted documents, they will issue an approval in principle. You will then need to pay the setup and license fees.",
      },
      {
        title: "Sign Agreements",
        isPoints: false,
        desc: "Finalize agreements for office space, leasing, and services. Sign the lease agreement for your office or warehouse space (if applicable) within DAFZA.",
      },
      {
        title: "Activate Business Operations",
        isPoints: false,
        desc: "After completing all the necessary formalities, your business will be officially set up and ready to operate. You can now begin trading, offering services, or conducting manufacturing operations based on your business type.",
      },
    ],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for{" "}
        <span className="text-lime-500">DAFZA Free Zone License</span>
      </Heading>
    ),
    sixthTableHead: ["Document", "Description"],
    sixthTableBody: [
      {
        title: "Passport Copy",
        docs: [
          "Clear copy of the passport of all shareholders, directors, and managers.",
        ],
      },
      {
        title: "Visa Copies",
        docs: ["For residents, a copy of valid UAE visas (if applicable)."],
      },
      {
        title: "Proof of Address",
        docs: [
          "Utility bill, bank statement, or tenancy contract to verify the residential address of shareholders.",
        ],
      },
      {
        title: "Business Plan",
        docs: [
          "A brief business plan outlining your company’s activities, operations, and goals.",
        ],
      },
      {
        title: "No Objection Certificate (NOC)",
        docs: [
          "A letter of no objection from the current sponsor (if applicable).",
        ],
      },
      {
        title: "Legal Entity Documents",
        docs: [
          "Company’s Memorandum and Articles of Association, if applicable (for partnerships or corporations).",
        ],
      },
      {
        title: "Shareholder/Director Details",
        docs: [
          "List of shareholder(s) and director(s), including their roles, responsibilities, and ownership details.",
        ],
      },
      {
        title: "Company Name Reservation",
        docs: ["Approval from DAFZA for the proposed company name."],
      },
      {
        title: "Initial Approval from DAFZA",
        docs: ["DAFZA's initial approval for business registration."],
      },
      {
        title: "Lease Agreement",
        docs: [
          "Signed lease or rental agreement for office space within DAFZA (for businesses requiring physical offices).",
        ],
      },
      {
        title: "Visa Application Forms",
        docs: [
          "Completed visa application forms for employees, directors, and dependents.",
        ],
      },
      {
        title: "Bank Reference Letter",
        docs: [
          "A bank reference letter or financial statement showing the financial background of the shareholder.",
        ],
      },
      {
        title: "Authorization Letter",
        docs: [
          "An official letter of authorization to the representative handling the company setup.",
        ],
      },
      {
        title: "Memorandum of Understanding (MOU)",
        docs: [
          "For companies intending to establish joint ventures or partnership agreements.",
        ],
      },
      {
        title: "Activity Approval",
        docs: [
          "Approval for specific business activities if required (e.g., healthcare, education, etc.).",
        ],
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
];

export default data;
