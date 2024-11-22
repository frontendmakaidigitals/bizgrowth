// src/components/MenuData.ts
export const Menus = [
  { name: "Home", href: "/", dropdown: false },
  { name: "About", href: "/", dropdown: false },
  {
    name: "Business Formation",
    href: "/",
    dropdown: true,
    points: ["Mainland", "Freezone", "Off-Shore"],
  },
  { name: "Core Solutions", href: "/", dropdown: false },
  {
    name: "Business Solutions",
    href: "/",
    dropdown: true,
    points: ["SEO Services"],
  },
];
