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
        points: [
          "IFZA",
          "DMCC",
          "DIFC",
          "Meydan",
          "ADGM",
          "SPC",
          "Rakez",
          "Ajman",
          "Strip",
          "Dafza",
        ],
      },
      {
        title: "Offshore",
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
      "Commercial Bank Account",
    ],
  },
  {
    name: "Business Solutions",
    href: "/",
    dropdown: true,
    points: [
      {
        title: "Tax & Accounting",
        points: [
          "VAT Consultancy",
          "Corporate Tax",
          "Accounting and Book keeping",
          "Auditing",
        ],
      },
      {
        title: "Elite Services",
        points: [
          "Golden Visa",
          "Will Formation",
          "Real Estate",
          "Wealth Management",
          "Crypto & VARA Registration",
          "Nominee Director Services",
        ],
      },
      {
        title: "Other Services",
        points: [
          "PRO & Visa Services",
          "Attestation & Legalisation",
          "Legal Services",
          "Office space solution",
          "Crypto & VARA Registration",
          "Nominee Director Services",
          "Product Registration",
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
