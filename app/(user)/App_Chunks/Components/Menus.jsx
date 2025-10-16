// src/components/MenuData.ts
export const Menus = [
  { name: "Home", href: "/", dropdown: false },
  { name: "About us", href: "/About", dropdown: false },
  {
    name: "Business Formation",
    href: "/",
    route:'business-formation',
    dropdown: true,
    points: [
      {
        title: "Mainland",
        route: "mainland",
        points: [
          { name: "Dubai Mainland", route: "dubai-mainland" },
          { name: "Sharjah Mainland", route: "sharjah-mainland" },
          { name: "Abu Dhabi Mainland", route: "abu-dhabi-mainland" },
          { name: "Ajman Mainland", route: "ajman-mainland" },
          { name: "Fujairah Mainland", route: "fujairah-mainland" },
        ],
      },
      {
        title: "Freezone",
        route: "freezone",
        points: [
          { name: "IFZA", route: "ifza" },
          { name: "DMCC", route: "dmcc" },
          { name: "ADGM", route: "adgm" },
          { name: "DIFC", route: "difc" },
          { name: "MEYDAN", route: "meydan" },
          { name: "SPC", route: "spc" },
          { name: "JAFZA", route: "jafza" },
          { name: "RAKEZ", route: "rakez" },
          { name: "Ajman", route: "ajman" },
          { name: "SRTI", route: "srti" },
          { name: "DAFZA", route: "dafza" },
        ],
      },
      {
        title: "Offshore",
        route: "offshore",
        points: [
          { name: "Dubai Offshore", route: "dubai-offshore" },
          { name: "Jafza Offshore", route: "jafza-offshore" },
          { name: "Rak ICC Offshore", route: "rak-icc-offshore" },
          { name: "Ajman Offshore", route: "ajman-offshore" },
        ],
      },
    ],
  },
  {
    name: "Banking Assistance",
    href: "/",
     route:'banking-assistance',
    dropdown: true,
    points: [
      { name: "Corporate Bank Account", route: "corporate-bank-account" },
      { name: "Private Bank Account", route: "private-bank-account" },
      {
        name: "Commercial Financial Services",
        route: "commercial financial services",
      },
      { name: "Trade Financial Services", route: "trade-financial-services" },
      {
        name: "Crypto & VARA Registration",
        route: "crypto-and-vara-registration",
      },
    ],
  },
  {
    name: "Business Solutions",
    href: "/",
    route:'business-solutions',
    dropdown: true,
    points: [
      {
        title: "Tax & Accounting",
        route: "Accounting",
        points: [
          { name: "VAT Consultancy", route: "vat-consultancy" },
          { name: "Corporate Tax", route: "corporate-tax" },
          {
            name: "Accounting & Bookkeeping",
            route: "accounting-and-bookkeeping",
          },
          { name: "Auditing", route: "auditing" },
        ],
      },
      {
        title: "Elite Services",
        route: "elite-services",
        points: [
          { name: "Golden Visa", route: "golden-visa" },
          { name: "Will Formation", route: "will-formation" },
          { name: "Real Estate", route: "real-estate" },
          { name: "Wealth Management", route: "wealth-management" },
          {
            name: "Nominee Director Services",
            route: "nominee-director-services",
          },
        ],
      },
      {
        title: "Corporate Services",
        route: "corporate-services",
        points: [
          { name: "PRO & Visa Services", route: "pro-and-visa-services" },
          {
            name: "Attestation & Legalisation",
            route: "attestation-and-legalisation",
          },
          { name: "Office space solution", route: "office-space-solution" },
          { name: "Product Registration", route: "product-registration" },
          { name: "Corporate Structuring", route: "corporate-structuring" },
          { name: "HR Solution", route: "hr-solution" },
          {
            name: "Design & Marketing Services",
            route: "design-and-marketing-services",
          },
        ],
      },
    ],
  },
  {
    name: "Blogs",
    href: "/blogs",
    dropdown: false,
  },
  {
    name: "Contact",
    href: "/contact",
    dropdown: false,
  },
];
