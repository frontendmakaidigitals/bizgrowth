import Heading from "./Heading";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
const data = [
  {
    name: "golden visa",
    heroTitle: (
      <Heading>
        Your <span className="text-amber-400">Trusted Partner</span> for
        Long-Term Residency in the UAE
      </Heading>
    ),
    heroDescription:
      "Dubai invites you to secure your future with the prestigious Golden Visa. Whether you're an investor, entrepreneur, professional, or outstanding student, we are here to make your Golden Visa application journey easy.",
    heroImg: "/media/mainland/dubai.svg",
    goldenVisaTitle: (
      <Heading className="!text-center w-full">
        What is the UAE <span className="text-amber-400">Golden Visa?</span>
      </Heading>
    ),
    goldenVisaDesc:
      "The Dubai Golden Visa is a long-term residency visa designed to attract talent, innovation, and investment to the UAE. The 10-year residency visa provides a great opportunity for qualified individuals and their families. The scheme was introduced in 2019 and it gives a great opportunity for ‘skilled talents’ to settle in the UAE. ",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why choose the UAE <span className="text-amber-400">Golden Visa?</span>
      </Heading>
    ),
    secondSubDescription: null,
    secondPoints: [
      {
        title: "Long-Term Residency",
        icon: <FaPeopleGroup />,
        desc: "Stay in UAE for up to 10 years with automatic renewal options.",
      },
      {
        title: "No Sponsor Requirement",
        icon: <FaBusinessTime />,
        desc: "Freedom to live, work, or study without the need for a local sponsor.",
      },
      {
        title: "Family Benefits",
        icon: <MdIncompleteCircle />,
        desc: "Include your spouse, children, and even domestic staff under your visa.",
      },
      {
        title: "Business Opportunities",
        icon: <MdIncompleteCircle />,
        desc: "Enjoy 100% ownership of your business in Dubai’s investment market.",
      },
      {
        title: "Exclusive Lifestyle",
        icon: <MdIncompleteCircle />,
        desc: "Access Dubai's world-class healthcare, education, and lifestyle opportunities.",
      },
    ],
    goldenVisaEligibility: (
      <Heading className="!text-center w-full">
        Who is <span className="text-amber-400">Eligible?</span>
      </Heading>
    ),
    goldenVisaEligibilityDesc:
      "The Golden Visa caters to a wide range of individuals",
    goldenVisaEligibilityPoints: [
      {
        title: "Investors",
        desc: " Real estate, business, or public investments.",
      },
      {
        title: "Entrepreneurs",
        desc: " Founders of innovative or scalable ventures.",
      },
      {
        title: "Professionals",
        desc: "Specialists in healthcare, technology, education, or culture.",
      },
      {
        title: "Scientists & Researchers",
        desc: " Accredited by UAE-recognized institutions.",
      },
      {
        title: "Outstanding Students",
        desc: " Top achievers in UAE or global institutions.",
      },
      {
        title: "Humanitarian Pioneers",
        desc: "Contributors to philanthropy or community welfare.",
      },
    ],
    goldenVisaServices: (
      <Heading className="!text-center w-full">
        Our <span className="text-amber-400">Golden Visa</span> services
      </Heading>
    ),
    goldenVisaServicesPoints: [
      {
        title: "Personalized Consultation",
        desc: "Assess your eligibility and guide you through the application requirements.",
      },
      {
        title: "Documentation Assistance",
        desc: "Compile, verify, and submit your documents accurately",
      },
      {
        title: "End-to-End Support",
        desc: "From medical tests to Emirates ID, we manage every step",
      },
      {
        title: "Fast-Track Application",
        desc: "Get your visa approval with expert handling",
      },
      {
        title: "Post-Visa Services",
        desc: " Assistance with family sponsorship, renewals, and more.",
      },
    ],
    thirdTitle: "",
    thirdSubDesc: "",
    thirdPoints: [],
    fourthTitle: "",
    fourthPoints: [],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for{" "}
        <span className="text-amber-400">Golden Visa</span> Services
      </Heading>
    ),
    sixthTableHead: ["Category", "Requirements", "Visa Duration"],
    sixthTableBody: [
      {
        title: "Investors (Business)",
        docs: [
          "Minimum investment of AED 2 million in a company or startup.",
          "Proof of company registration and ownership.",
          "Company should contribute to UAE's economy.",
          "Official audit report showing financial health (if applicable).",
        ],
        duration: "10 years",
      },
      {
        title: "Salaried Professionals)",
        docs: [
          "Monthly salary of at least AED 30,000.",
          "Bachelor’s degree or higher in specialized fields (e.g., healthcare, IT, education).",
          "Employment contract valid in the UAE.",
          "Professional experience and role should align with UAE's priority sectors.",
        ],
        duration: "10 years",
      },
      {
        title: "Real Estate Investors",
        docs: [
          " Property investment worth AED 2 million or more (must not be mortgaged beyond AED 2 million).",
          "Property must be retained for at least 3 years.",
          "Investment in approved real estate projects only.",
          "Official property valuation and purchase agreement required.",
        ],
        duration: "10 years",
      },
    ],
    goldenUpdatesTitle: "Golden Visa Updates for 2024",
    goldenVisaPoints: [
      {
        title: "For Professionals",
        desc: "The basic salary requirement for salaried professionals has been standardized at AED 30,000 per month. This eliminates the ambiguity  between basic pay and allowances",
      },
      {
        title: "For Real Estate Investors",
        pointDesc: "Investment Thresholds",
        points: [
          {
            title: "10-year Visa",
            desc: "Minimum property investment of AED 2 million (can include under-construction properties)",
          },
          {
            title: "5-year Visa",
            desc: "Minimum property investment of AED 1 million (completed properties only)",
          },
          {
            title: "2-year Visa",
            desc: "Minimum property investment of AED 750,000 (completed properties only)",
          },
        ],
      },
      {
        title: " For Cultural and Creative Industries",
        desc: "Artists, filmmakers, and other creatives have been given easier access to obtain the visa, reflecting the UAE's focus on cultural and artistic innovation.",
      },
    ],
    bannerTitle: "Start your journey to a long-term future in Dubai.",
    bannerDesc:
      "Let us handle the complexities while you focus on building your life",
  },
  {
    bannerTitle: "Secure Your Future Today",
    bannerDesc:
      "Take control of your legacy and protect your loved ones. Contact us to begin your Will formation proces. Don’t wait—planning ahead ensures peace of mind for you and your family.",
    name: "will formation",
    heroTitle: (
      <Heading>
        Secure Your Legacy with Ease -{" "}
        <span className="text-lime-500">Will Formation</span> Services
      </Heading>
    ),
    heroDescription:
      "Creating a will in the UAE is an essential step in ensuring your assets are protected, and your loved ones are provided for according to your wishes. Our expert Will formation service simplifies this process, offering peace of mind.",
    heroImg: "/media/mainland/sharjah.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why a <span className="text-lime-500">Will is Essential</span> in the
        UAE?
      </Heading>
    ),
    secondSubDescription: null,
    secondPoints: [
      {
        title: "Compliance with UAE Law",
        icon: <FaPeopleGroup />,
        desc: "Without a registered Will, UAE courts distribute assets according to Sharia law. A Will ensures your intentions are honored, giving you full control over your asset.",
      },
      {
        title: "Protection for Expats",
        icon: <FaBusinessTime />,
        desc: "Expatriates in the UAE can specify asset distribution by their home country laws, safeguarding their global and local assets.",
      },
      {
        title: "Guardianship of Minor Children",
        icon: <MdIncompleteCircle />,
        desc: "Appoint guardians for your children in your Will to avoid legal uncertainties.",
      },
    ],
    thirdTitle: (
      <Heading className="w-full !text-center">
        Our <span className="text-lime-500">Expertise</span>
      </Heading>
    ),
    thirdSubDesc: "",
    thirdPoints: [
      <p key={0} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Dubai International Financial Centre (DIFC) Wills :
        </span>{" "}
        DIFC Wills are recognized as legally binding under common law and are
        ideal for non-Muslim residents with assets in Dubai and other Emirates.
      </p>,
      <p key={1} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Sharjah, Abu Dhabi, and UAE-wide Wills :
        </span>
        Whether you own property, businesses, or bank accounts across the
        Emirates, we’ll draft a comprehensive Will covering all your assets.
      </p>,
      <p key={2} className="font-Satoshi text-lg">
        <span className="font-Synonym font-[600]">
          Specialized Services for Muslims :
        </span>{" "}
        Ensure your Will complies with Sharia principles while meeting your
        personal needs and preferences.
      </p>,
    ],
    fourthTitle: (
      <Heading className="w-full !text-center ">
        Advantages of <span className="text-lime-500">Will Formation</span> in
        the UAE
      </Heading>
    ),
    fourthPoints: [
      {
        title: "Initial Consultation",
        isPoints: false,
        desc: "Meet with a legal expert to discuss your asset planning goals. Determine whether you need a Sharia-compliant Will or a DIFC/non-Muslim Will.",
      },
      {
        title: "Asset Inventory and Documentation",
        isPoints: false,
        desc: "Prepare a comprehensive list of your assets, including Property (real estate in the UAE or abroad), Investments, Business shares or valuables.",
      },
      {
        title: "Drafting the Will",
        isPoints: false,
        desc: "Your lawyer will draft a Will tailored to your requirements, ensuring compliance with UAE laws.",
      },
      {
        title: "Review and Approval",
        isPoints: false,
        desc: "Review the draft carefully with your legal advisor to ensure accuracy and completeness.",
      },
      {
        title: " Legal Translation (if required)",
        isPoints: false,
        desc: "In some cases, the Will may need to be translated into Arabic, the official language of the UAE, for court submissions.",
      },
      {
        title: "Will Registration",
        isPoints: false,
        desc: "The next step depends on the type of Will and your specific circumstances.",
      },
      {
        title: " Finalization and Storage",
        isPoints: false,
        desc: "Once registered, the Will becomes legally binding and enforceable. Store a copy in a secure location and inform your executor of its existence.",
      },
      {
        title: " Periodic Updates",
        isPoints: false,
        desc: "Life circumstances change—marriage, children, or acquiring new assets may require updates to your Will.",
      },
      {
        title: "Timeline for Will Formation",
        isPoints: false,
        desc: "The entire process typically takes 1-3 weeks, depending on the complexity of your asset and the chosen registration authority.",
      },
    ],

    willDifferenceHeading: (
      <Heading>
        Differences Between <span className="text-lime-500">Muslim</span> and{" "}
        <span className="text-lime-500">Non-Muslim</span> Wills
      </Heading>
    ),
    willDifference: [
      {
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
      },
      {
        title: "Muslim Wills in the UAE ",
        desc: "Muslims in the UAE can create Wills to ensure their asset distribution and other provisions is aligned with Islamic principles. Sharia law provides detailed guidelines for inheritance, and a Muslim Will allows for personalization within these boundaries.",
        points: [
          {
            title: "Sharia-Compliant Distribution",
            desc: "Ensure your assets are distributed as per Islamic inheritance rules, which allocate shares to specific heirs.",
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
      },
    ],
    willTableHeader: ["Feature", "Non-Muslim wills", "Muslim Wills"],
    willTableBody: [
      {
        title: "Asset Distribution",
        nonMuslim: "Full Freedom to distribute assets as desired.",
        muslim: "Must comply with Sharia inheritance rules",
      },
      {
        title: "Guardianship",
        nonMuslim: "Can appoint guardians freely.",
        muslim: "Must comply with Sharia and UAE laws",
      },
      {
        title: "Registration Options",
        nonMuslim: "DIFC or local courts.",
        muslim: "Local courts for Sharia compliance",
      },
      {
        title: "Charitable Bequests",
        nonMuslim: "Unlimited",
        muslim: "Limited to 1/3 of the estate",
      },
    ],
    willAdvantageHeading: (
      <Heading className="w-full !text-center">
        Advantages of <span className="text-lime-500">Will Formation</span> in
        the UAE
      </Heading>
    ),
    willAdvantagePoints: [
      {
        title: " Clarity and Control Over Asset Distribution",
        isPoints: false,
        desc: "Without a Will, your assets in the UAE will be distributed according to Sharia law, which may not align with your personal preferences.",
      },
      {
        title: "Guardianship for Minor Children",
        isPoints: false,
        desc: "For parents, a Will is essential to appoint guardians for minor children. This ensures your children’s future care is decided by you and not by the courts.",
      },
      {
        title: "Peace of Mind for Expats",
        isPoints: false,
        desc: "The UAE has a diverse population with expatriates from around the world. A Will allows expats to distribute their assets according to the laws of their home country.",
      },
      {
        title: " Avoiding Lengthy Legal Processes",
        isPoints: false,
        desc: "Without a Will, your family may face prolonged legal proceedings to access your assets.",
      },
      {
        title: " Flexibility and Customization",
        isPoints: false,
        desc: "A Will allows you to customize your asset plan to meet your unique needs.",
      },
      {
        title: "Sharia-Compliant Options for Muslims",
        isPoints: false,
        desc: "For Muslims, a Will provides a structured way to ensure asset distribution aligns with Islamic inheritance laws.",
      },
      {
        title: "  Legal Validity and Recognition",
        isPoints: false,
        desc: "A registered Will ensures your intentions are legally binding and enforceable in the UAE courts.",
      },
      {
        title: " Simplifying Multi-Jurisdictional Inheritance",
        isPoints: false,
        desc: "For individuals with assets in multiple countries, a Will helps navigate different legal systems effectively.",
      },
      {
        title: "Protection for Business Owners",
        isPoints: false,
        desc: "If you own a business in the UAE, a Will can ensure a smooth transfer of ownership or succession planning.",
      },
      {
        title: " Ease of Updates",
        isPoints: false,
        desc: "A Will is not set in stone. You can revise it to reflect changes in family circumstances, such as marriages, births, or divorces.",
      },
    ],
    sixthTitle: "",
    sixthTableHead: [],
    sixthTableBody: [],
  },
  {
    bannerTitle: "Get Started Today!",
    bannerDesc:
      "Ready to invest in real estate? Contact us for a free consultation and begin your journey to building wealth through property investments.",
    name: "real estate investments",
    heroTitle: (
      <Heading>
        <span className="text-lime-500">Unlock</span> the Potential of{" "}
        <span className="text-lime-500">Property Investment</span> in UAE
      </Heading>
    ),
    heroDescription:
      "At Real Estate Investment Services, we provide expert guidance and opportunities to help you build, grow, and protect your wealth through property investments. Whether you're a first-time investor or a professional, we offer a range of services to meet your needs.",
    heroImg: "/media/mainland/dubai.svg",
    secondTitle: (
      <Heading className="!text-center w-full">
        Why <span className="text-lime-500">Invest</span> in{" "}
        <span className="text-lime-500">Real Estate? </span>
      </Heading>
    ),
    secondSubDescription: "",
    secondPoints: [
      {
        title: "Stable and Long-Term Growth",
        icon: <FaPeopleGroup />,
        desc: "Real estate is a proven, long-term investment that offers stability and consistent returns.",
      },
      {
        title: "Diversification",
        icon: <FaBusinessTime />,
        desc: "Real estate allows you to diversify your investment portfolio, reducing risks and providing new avenues for growth..",
      },
      {
        title: "Passive Income",
        icon: <MdIncompleteCircle />,
        desc: "Rental properties generate regular income, offering financial security through cash flow.",
      },
      {
        title: "Appreciation Potential",
        icon: <MdIncompleteCircle />,
        desc: "Property values increase over time, providing potential for capital gains when you sell.",
      },
    ],
    typesRealEstate: (
      <Heading className="w-full !text-center">
        Types of Real Estate Investments in the UAE
      </Heading>
    ),
    typeRealEstatePoints: [
      {
        title: " Residential Properties",
        desc: "Residential real estate remains one of the most bought investment types in the UAE. Investors can choose from a variety of property types, such as",
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
        desc: "Commercial real estate provides opportunities for higher returns, with properties that can cater to businesses and corporate clients:",
        points: [
          {
            title: "Office Spaces",
            desc: "Prime office buildings in business hubs like Dubai’s Business Bay, DIFC, and Abu Dhabi’s CBD offer long-term rental income and attract corporate tenants",
          },
          {
            title: "Retail Spaces",
            desc: "Shopping malls, showrooms, and retail stores gives foot traffic giving a steady rental income.",
          },
          {
            title: "Industrial Properties",
            desc: "Warehouses, logistics centers, and manufacturing units are ideal for businesses looking to set up operations.",
          },
        ],
      },
      {
        title: " Real Estate Investment Trusts (REITs)",
        desc: "For investors who prefer to invest in real estate without the hassle of property management, REITs are an attractive option:",
      },
      {
        title: "  Off-Plan Developments (Pre-Construction Projects)",
        desc: "Investing in off-plan properties allows you to purchase real estate before it is built, typically at lower prices than completed properties:",
      },
      {
        title: " Vacation and Holiday Homes",
        desc: "With tourism being a significant part of the UAE’s economy, vacation homes are a profitable investment option:",
      },
      {
        title: "Land Investments",
        desc: "Investing in land is an option for those looking for long-term capital appreciation",
      },
      {
        title: "Hotel Investments",
        desc: "The UAE's thriving hospitality sector provides opportunities for investors in hotels and resorts.",
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
        <span className="font-Synonym font-[600]"> Trading License</span>A
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
    fourthPoints: [],
    sixthTitle: (
      <Heading className="w-full !text-center">
        Documents Required for Real Estate Investment
      </Heading>
    ),
    sixthTableHead: ["Investor Type", "Required Documents"],
    sixthTableBody: [
      {
        title: "Individual Investor",
        docs: "Official form filled out with all required details about the business and its activities.",
      },
    ],

    tableFooter: "",
    seventhTitle: "",
    seventhPoints: [],
  },
];

export default data;
