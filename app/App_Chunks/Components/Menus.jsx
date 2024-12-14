// src/components/MenuData.ts
export const Menus = [
  { name: "Home", href: "/", dropdown: false },
  { name: "About us", href: "/About", dropdown: false },
  {
    name: "Business Formation",
    href: "/",
    dropdown: true,
    points: [
      {
        title: "Mainland",
        route: "mainland",
        points: [
          "Dubai Mainland",
          "Sharjah Mainland",
          "Abu Dhabi Mainland",
          "Ajman Mainland",
          "Fujairah Mainland",
        ],
      },
      {
        title: "Freezone",
        route: "freezone",
        points: [
          "IFZA",
          "DMCC",
          "ADGM",
          "DIFC",
          "Meydan",
          "SPC",
          "Jafza",
          "Rakez",
          "Ajman",
          "Strip",
          "Dafza",
        ],
      },
      {
        title: "Offshore",
        route: "offshore",
        points: [
          "Dubai Offshore",
          "Jafza Offshore",
          "Rak ICC Offshore",
          "Ajman Offshore",
        ],
      },
    ],
  },
  {
    name: "Banking Assistance",
    href: "/",
    dropdown: true,
    points: [
      "Corporate Bank Account",
      "Private Bank Account",
      "Commercial Financial Services",
      "Trade Financial Services",
      "Crypto & VARA Registration",
    ],
  },
  {
    name: "Business Solutions",
    href: "/",
    dropdown: true,
    points: [
      {
        title: "Tax & Accounting",
        route: "Accounting",
        points: [
          "VAT Consultancy",
          "Corporate Tax",
          "Accounting and Book keeping",
          "Auditing",
        ],
      },
      {
        title: "Elite Services",
        route: "elite-services",
        points: [
          "Golden Visa",
          "Will Formation",
          "Real Estate",
          "Wealth Management",
          "Nominee Director Services",
        ],
      },
      {
        title: "Other Services",
        route: "otherServices",
        points: [
          "PRO & Visa Services",
          "Attestation & Legalisation",
          "Office space solution",
          "Product Registration",
          "Corporate Structuring",
          "HR Solution",
          "Design & Marketing Services",
        ],
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    dropdown: false,
  },
];
