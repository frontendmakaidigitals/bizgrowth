"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Link from "next/link"; // For navigation
import { Menus } from "./Menus"; // Import Menus
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const MobileMenu = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="lg:hidden block">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-3xl absolute top-5 right-5 z-20"
      >
        {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>

      <AnimatePresence mode="wait">{showMenu && <Menu />}</AnimatePresence>
    </div>
  );
};

export default MobileMenu;

const Menu = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-0 left-0 w-full flex flex-col justify-center items-start h-screen bg-green-200 z-[1]"
    >
      <div className="container flex flex-col p-4 w-full space-y-4">
        {/* Map through Menus and create links */}
        {Menus.map((menu, index) =>
          !menu.dropdown ? (
            <Link
              key={index}
              href={menu.href}
              className="text-lg  font-semibold  p-2 w-full text-left"
              onClick={() => (window.location.href = menu.href)} // Close menu on item click
            >
              {menu.name}
            </Link>
          ) : (
            <AccordionMenu key={index} menu={menu} />
          )
        )}
      </div>
    </motion.div>
  );
};

// Accordion component for handling dropdown-style sections
const AccordionMenu = ({
  menu,
}: {
  menu: { name: string; points?: string[]; href: string; dropdown: boolean };
}) => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={menu.name} className="border-b border-0">
          <AccordionTrigger className="text-lg font-semibold   p-2 w-full text-left">
            {menu.name}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {menu.points?.map((point: string, idx: number) => (
                <Link
                  key={idx}
                  href={`/${point.toLowerCase().replace(" ", "-")}`}
                  className="block text-sm font-medium text-left p-2 "
                >
                  {point}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
