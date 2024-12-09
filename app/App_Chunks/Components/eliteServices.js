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
];

export default data;
