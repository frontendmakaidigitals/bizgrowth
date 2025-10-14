"use client";
import Logo from "./Logo";
import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: {
    href: string | { pathname: string };
    label: string; // Add label here as it should be a part of the menu item
  }[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "1",
    title: "Site Links",
    menus: [
      { href: "/", label: "Home" },
      { href: "/About", label: "About us" },
      { href: "/contact", label: "Contact" },
      { href: "/Cost-Calculator", label: "Cost Calculator" },
      { href: "/Privacy-Policy", label: "Privacy Policy" },
    ],
  },
  {
    id: "2",
    title: "Popular Links",
    menus: [
      {
        href: {
          pathname: "/business-formation/mainland/dubai-mainland",
        },
        label: "Dubai Mainland",
      },
      {
        href: {
          pathname: "/business-formation/freezone/dmcc",
        },
        label: "DMCC",
      },
      {
        href: {
          pathname: "/business-formation/freezone/meydan",
        },
        label: "MEYDAN",
      },
      {
        href: {
          pathname: "/banking-assistance/corporate-bank-account",
        },
        label: "Corporate Bank Account",
      },
      {
        href: {
          pathname: "/business-solutions/elite-services/golden-visa",
        },
        label: "Golden Visa",
      },
      {
        href: {
          pathname: "/business-solutions/corporate-services/design-and-marketing-services",
        },
        label: "Design & Marketing",
      },
      {
        href: {
          pathname: "/business-solutions/corporate-services/pro-and-visa-services",
        },
        label: "PRO services",
      },
      {
        href: {
          pathname: "/business-solutions/accounting/vat-consultancy",
        },
        label: "VAT Consultancy",
      },
      {
        href: {
          pathname: "/business-solutions/elite-services/real-estate",
        },
        label: "Real Estate",
      },
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
        <ul className="mt-5 ml-3 list-disc space-y-4">
          {menu.menus.map((item: any, index) => (
            <li key={index} className="px-1 text-[#10220a]">
              <Link
                href={
                  typeof item.href === "string"
                    ? item.href
                    : { pathname: item.href.pathname }
                }
                className="rounded-xl py-1 text-[#10220a] hover:bg-indigo-200 px-3 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className=" relative border-t border-sky-200 bg-teal-50 overflow-hidden group py-24 dark:border-neutral-700 lg:py-28">
        <div className="w-full hidden h-full ">
          <img
            className="absolute top-0 group-hover:scale-[1.1] transition-all duration-300 left-0 z-[2] w-full h-full object-cover"
            src={"/media/Footerbg.svg"}
          />
        </div>
        <div className="container relative z-[10] grid grid-cols-1 gap-x-5 gap-y-10 sm:gap-x-8  lg:grid-cols-[.6fr_1.5fr] lg:gap-x-20">
          <div className=" flex flex-col gap-8 ">
            <div className=" ">
              <Logo className="!h-[50px] lg:!h-[65px]" />
              <p className="font-regular mt-3 text-sm text-[#10220a]">
                At Biz Growth, we are committed to providing exceptional service
                and unwavering support to our clients throughout their business
                Setup and ongoing journey.
              </p>
            </div>
            <div className=" hidden lg:flex w-full flex-col items-start ">
              <p className="mb-2 font-semibold text-[#10220a]">Our Presence</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center  gap-2">
                <Link href={'https://www.facebook.com/profile.php?id=61571182376298'}>
                  <FaSquareFacebook className="text-5xl lg:text-3xl text-[#10220a]" />{" "}
                </Link>
                <Link  href={'https://www.instagram.com/bizgrowthconsultancy?igsh=MWIxNTVtN2syZGtkZw%3D%3D&utm_source=qr'}>
                  <AiFillInstagram className="text-5xl lg:text-3xl text-[#10220a]" />
                </Link>
                <Link href={'https://www.linkedin.com/company/biz-growth-management-consultancy/?viewAsMember=true'}>
                  <BsLinkedin className="text-5xl lg:text-2xl text-[#10220a]" />
                </Link>
                <Link href={'https://www.youtube.com/channel/UClP4eQveraGLOcvVA_KCKZA'}>
                  <BsYoutube className="text-5xl lg:text-3xl text-[#10220a]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full place-items-start lg:grid-cols-[1fr_1.3fr_1.3fr]">
            {widgetMenus.map(renderWidgetMenuItem)}
            <div className="col-span-2 w-full lg:col-span-1">
              <h2 className="font-semibold text-[#10220a] font-Satoshi text-lg">
                Get in Touch
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start">
                  <i className="la la-map-marker mt-1 text-xl text-primary-400"></i>
                  <p className="text-[#10220a]">
                    Office - 3307, Churchill Towers, Business Bay, Dubai, UAE
                  </p>
                </li>
                <li className="flex items-center text-[#10220a] ">
                  <div className="flex items-center gap-1">
                    <p className="text-sm text-[#10220a]">Phone - </p>
                    <a
                      href="tel:+971585129847"
                      className="text-sm text-[#10220a]"
                    >
                      +97 15593 91238
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-1">
                  <p className="text-sm text-[#10220a]">Email - </p>
                  <p className="text-[#10220a]">
                    info@bizgrowthconsultancy.com
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className=" lg:hidden flex w-full flex-col items-start ">
            <p className="mb-2 font-semibold text-[#10220a]">Our Presence</p>
            <div className="grid grid-cols-2 lg:grid-cols-4  gap-2">
              <FaSquareFacebook className="text-5xl lg:text-3xl text-[#10220a]" />
              <AiFillInstagram className="text-5xl lg:text-3xl text-[#10220a]" />
              <BsTwitterX className="text-5xl lg:text-3xl text-[#10220a]" />
              <BsYoutube className="text-5xl lg:text-3xl text-[#10220a]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
