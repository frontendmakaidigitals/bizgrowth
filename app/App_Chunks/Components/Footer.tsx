"use client";
import Logo from "./Logo";
import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: { href: string; label: string }[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Site Links",
    menus: [
      { href: "#", label: "Our Properties" },
      { href: "#", label: "Popular Area" },
      { href: "/About-us", label: "About & Services" },
      { href: "/Contact", label: "Contact" },
      { href: "/BecomeHost", label: "Become a Host" },
      { href: "/Get-Estimate", label: "Get Quote" },
    ],
  },
  {
    id: "1",
    title: "Explore",
    menus: [
      { href: "#", label: "Help Center" },
      { href: "#", label: "FAQ" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms & Condition" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="text-lg font-semibold font-Satoshi text-[#10220a] dark:text-slate-200">
          {menu.title}
        </h2>
        <ul className="mt-5 list-disc space-y-4">
          {menu.menus.map(
            (item: { href: string; label: string }, index: number) => (
              <div key={index} className="px-4">
                <li className="text-[#10220a]">
                  <a
                    key={index}
                    className="rounded-xl  px-2 py-1 text-[#10220a] hover:bg-[#aed581] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              </div>
            )
          )}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className=" relative border-t border-neutral-200 overflow-hidden group py-24 dark:border-neutral-700 lg:py-28">
        <div className="w-full h-full ">
          <img
            className="absolute top-0 group-hover:scale-[1.1] transition-all duration-300 left-0 z-[2] w-full h-full object-cover"
            src={"/media/Footerbg.svg"}
          />
        </div>
        <div className="container relative z-[10] grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-10">
          <div className="col-span-2 grid grid-cols-4 place-items-start lg:place-items-center gap-5 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Logo className="!h-[100px]" />
              <p className="font-regular mt-3 text-sm text-[#10220a]">
                We are one of the top and recognized holiday homes company in
                Dubai. Providing premium vacation stays with immense knowledge
                and strength
              </p>
            </div>
            <div className="col-span-2 flex w-full flex-col items-start justify-between md:col-span-3">
              <p className="mb-2 font-semibold text-[#10220a]">Our Presence</p>
              <div className="grid grid-cols-2 lg:grid-cols-4  gap-2">
                <FaSquareFacebook className="text-5xl lg:text-3xl text-[#10220a]" />
                <AiFillInstagram className="text-5xl lg:text-3xl text-[#10220a]" />
                <BsTwitterX className="text-5xl lg:text-3xl text-[#10220a]" />
                <BsYoutube className="text-5xl lg:text-3xl text-[#10220a]" />
              </div>
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
          <div className="col-span-2 w-full lg:col-span-1">
            <h2 className="font-semibold text-[#10220a] font-Satoshi text-lg">
              Get in Touch
            </h2>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start">
                <i className="la la-map-marker mt-1 text-xl text-primary-400"></i>
                <p className="text-[#10220a]">
                  Office - 3307 Churchill Towers, Business Bay, Dubai - UAE
                </p>
              </li>
              <li className="flex items-center text-[#10220a] ">
                <div className="flex items-center gap-1">
                  <p className="text-sm text-[#10220a]">Phone:</p>
                  <a
                    href="tel:+971585129847"
                    className="text-sm text-[#10220a]"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </li>

              <li className="flex items-center ">
                <i className="la la-at text-xl text-primary-400"></i>
                <p className="text-[#10220a]">info@bsholidayhomes.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
