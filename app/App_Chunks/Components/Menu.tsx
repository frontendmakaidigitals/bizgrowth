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
            className="px-3 py-1 hover:bg-slate-100 transition-all duration-300 rounded-md"
          >
            {menu.name}
          </Link>
        ) : (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(menu.name)} // Set dropdown to open when hovered
            onMouseLeave={() => setOpenDropdown(null)} // Close dropdown when mouse leaves
          >
            <p className="px-3 py-1 cursor-default transition-all duration-300 hover:bg-slate-100 flex items-center rounded-md gap-1">
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
                  className="absolute flex flex-col  left-0 z-30  bg-white shadow-xl rounded-sm p-4 space-y-2"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {menu.points?.map((point, idx) => (
                    <Link
                      key={idx}
                      href={`/${point.toLowerCase().replace(" ", "-")}`}
                      className="cursor-pointer hover:bg-gray-100 p-2"
                    >
                      {point}
                    </Link>
                  ))}
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
