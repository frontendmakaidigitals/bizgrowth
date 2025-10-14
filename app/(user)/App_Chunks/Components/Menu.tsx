// src/components/Menu.tsx
"use client";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion"; // Import motion
import { Menus } from "./Menus"; // Import Menus
import Link from "next/link";
const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex justify-center items-center font-Satoshi gap-3">
      {Menus.map((menu, index) =>
        // If the menu item has no dropdown, just render a link
        !menu.dropdown ? (
          <Link
            key={index}
            href={menu.href.toLowerCase()}
            className="px-3 py-1 text-[#12250a] hover:bg-[#dcedc8] font-[600] text-[.9rem] xl:text-[.88rem] xxl:text-md transition-all duration-300 rounded-md"
          >
            {menu.name}
          </Link>
        ) : (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setOpenDropdown(menu.name)} // Set dropdown to open when hovered
            onMouseLeave={() => setOpenDropdown(null)} // Close dropdown when mouse leaves
          >
            <p className="px-3 py-1 text-[.9rem] xl:text-[.88rem] xxl:text-[1.03rem] text-[#12250a] hover:bg-[#dcedc8] font-[600] cursor-default transition-all duration-300  flex items-center rounded-md gap-1">
              {menu.name}{" "}
              <IoChevronDown
                className="mt-0"
                style={{
                  rotate: openDropdown === menu.name ? "180deg" : "0deg",
                }}
              />
            </p>

            {/* Dropdown Menu with Framer Motion */}
            <AnimatePresence>
              {openDropdown === menu.name && (
                <motion.div
                  className={`absolute flex flex-col top-10 ${index !== 3 && "-left-full"} z-30 bg-[#c5e1a5] 
    ${index === 3 ? "max-w-5xl" : index === 2 ? "w-[900px]" : "w-[600px]"} 
    shadow-xl rounded-sm p-6`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {index !== 3 ? (
                    <div
                      className={`grid  ${
                        index == 2 ? "grid-cols-4" : "grid-cols-3"
                      } gap-5`}
                    >
                      {menu.points?.map((point: any, pointIndex) => (
                        <div key={pointIndex}>
                          <p className="text-[.9rem] xl:text-[.88rem] xxl:text-[1.03rem] text-[#1e3d11] font-[600]">
                            {point.title}
                          </p>
                          <ul>
                            {point.points.map(
                              (item: any, itemIndex: number) => (
                                <Link
                                  key={itemIndex}
                                 
                                  href={`/${menu.route.toLowerCase()}/${point.route.toLowerCase()}/${
                                    item.route.toLowerCase()
                                  }`}
                                >
                                  <li className="mt-2 hover:underline flex text-[#12250a] items-center gap-2">
                                    {item.name}
                                  </li>
                                </Link>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                      {index == 2 && (
                        <div className="w-full h-full bg-slate-200">
                          <img
                            className="w-full h-full object-cover"
                            src={"/media/menu.jpg"}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="">
                      {menu.points?.map((point: any, pointIndex) => (
                        <div key={pointIndex}>
                          <ul>
                            <Link
                              href={`/${point.route}/${encodeURIComponent(
                                point.route.toLowerCase()
                              )}`}
                            >
                              <li className="mt-2 font-[500] hover:underline text-[#12250a] flex items-start gap-2">
                                {point.name}
                              </li>
                            </Link>
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      )}
    </div>
  );
};

export default Menu;
