// src/components/Menu.tsx
"use client";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion"; // Import motion
import { Menus } from "./Menus"; // Import Menus
import Link from "next/link";
const Menu = () => {
  // State to handle visibility of dropdowns individually
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex justify-center items-center font-Satoshi gap-5">
      {Menus.map((menu, index) =>
        // If the menu item has no dropdown, just render a link
        !menu.dropdown ? (
          <Link
            key={index}
            href={menu.href}
            className="px-3 py-1 text-[#12250a] hover:bg-[#dcedc8] font-[600] xl:text-md transition-all duration-300 rounded-md"
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
            <p className="px-3 py-1 xl:text-md text-[#12250a] hover:bg-[#dcedc8] font-[600] cursor-default transition-all duration-300  flex items-center rounded-md gap-1">
              {menu.name}{" "}
              <IoChevronDown
                className="mt-1"
                style={{
                  rotate: openDropdown === menu.name ? "180deg" : "0deg",
                }}
              />
            </p>

            {/* Dropdown Menu with Framer Motion */}
            <AnimatePresence>
              {openDropdown === menu.name && (
                <motion.div
                  className={`absolute flex flex-col top-10 left-0 z-30 bg-[#c5e1a5] 
    ${index === 3 ? "max-w-5xl" : index === 2 ? "w-[800px]" : "w-[600px]"} 
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
                          <p className="text-xl text-[#1e3d11] font-[600]">
                            {point.title}
                          </p>
                          <ul>
                            {point.points.map(
                              (item: string, itemIndex: number) => (
                                <Link
                                  key={itemIndex}
                                  href={{
                                    pathname: "mainland",
                                    query: { name: item },
                                  }}
                                >
                                  <li className="mt-2 hover:underline flex text-[#12250a] items-center gap-2">
                                    {item}
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
                    <div>
                      {menu.points?.map((point: any, pointIndex) => (
                        <div key={pointIndex}>
                          <ul>
                            <Link href="/">
                              <li className="mt-2 hover:underline text-[#12250a] flex items-center gap-2">
                                {point}
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
