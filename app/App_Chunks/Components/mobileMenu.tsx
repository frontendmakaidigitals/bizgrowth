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
} from "@/components/ui/accordion"; // Make sure this path is correct

const MobileMenu = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  React.useEffect(() => {
    if (showMenu) {
      // When menu is open, set body overflow to hidden
      document.body.style.overflow = "hidden";
    } else {
      // When menu is closed, reset body overflow to default (auto)
      document.body.style.overflow = "auto";
    }

    // Cleanup: Reset overflow when the component is unmounted or when showMenu changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);
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
      className="fixed top-0 left-0 w-full flex flex-col justify-center items-start h-screen bg-lime-100 z-[1]"
    >
      <div className="container  h-full justify-center flex flex-col p-4 w-full text-[#0c1700] space-y-4">
        {/* Map through Menus and create links */}
        {Menus.map((menu, index) =>
          !menu.dropdown ? (
            <Link
              key={index}
              href={menu.href}
              className="text-lg font-semibold p-2 w-full text-left"
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
  menu: any;
}) => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={menu.name} className="border-b border-0">
          <AccordionTrigger className="text-lg font-semibold p-2 w-full text-left">
            {menu.name}
          </AccordionTrigger>
          {menu.dropdown && menu.points ? (
            <AccordionContent>
              <div className="space-y-2">
                {menu.points.map((point: any, idx: number) => (
                  <div key={idx}>
                    {/* Each point may have its own accordion for nested items */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value={point.title}
                        className="border-b border-0 pl-2"
                      >
                        <AccordionTrigger className="text-lg font-Satoshi font-[500] p-2 w-full text-left">
                          {point.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          {point.points && point.points.length > 0 ? (
                            <ul className="space-y-1 px-5">
                              {point.points.map((item: string, id: number) => (
                                <li
                                  key={id}
                                  className="text-md font-medium font-Synonym"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </AccordionContent>
          ) : null}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
