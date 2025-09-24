"use client";
import React, { useEffect } from "react";
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
import { RiArrowRightUpLine } from "react-icons/ri";
const MobileMenu = ({ navRef }: { navRef: any }) => {
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

      <AnimatePresence mode="wait">
        {showMenu && <Menu navRef={navRef} setShowMenu={setShowMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;

const Menu = ({ navRef, setShowMenu }: { navRef: any; setShowMenu: any }) => {
  const [height, setHeight] = React.useState(0);
  useEffect(() => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      style={{
        top: `${height}px`,
        height: `calc(100vh - ${height}px)`,
      }}
      className="fixed left-0 w-full overflow-scroll flex flex-col justify-center items-start shadow-lg h-screen bg-[#f6f8ff] z-[2]"
    >
      <div className="container h-full justify-center flex flex-col p-4 w-full text-[#0c1700] space-y-4">
        {Menus.map((menu, index) =>
          !menu.dropdown ? (
            <Link
              key={index}
              href={menu.href}
              className="text-lg font-semibold p-2 w-full text-left"
              onClick={() => {
                setTimeout(() => setShowMenu(false), 500);
              }}
            >
              {menu.name}
            </Link>
          ) : (
            <AccordionMenu key={index} menu={menu} setShowMenu={setShowMenu} />
          )
        )}
      </div>
    </motion.div>
  );
};

// Accordion component for handling dropdown-style sections
const AccordionMenu = ({
  menu,
  setShowMenu,
}: {
  menu: any;
  setShowMenu: any;
}) => {
  return (
    <div className="w-full !font-SplineSans">
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
                    {/* Check if the point is an object or a string */}
                    {typeof point === "object" ? (
                      // Handle the case when point is an object (with nested points)
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
                                {point.points.map(
                                  (item: string, id: number) => (
                                    <Link
                                      key={id}
                                      href={{
                                        pathname: point.route,
                                        query: { name: item },
                                      }}
                                      onClick={() => {
                                        setTimeout(
                                          () => setShowMenu(false),
                                          500
                                        );
                                      }}
                                    >
                                      <li className="text-lg underline underline-offset-4 py-1 flex items-center gap-2 font-Synonym">
                                        {item}
                                        <RiArrowRightUpLine />
                                      </li>
                                    </Link>
                                  )
                                )}
                              </ul>
                            ) : null}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <div className="text-md font-medium font-Synonym px-5 py-2">
                        <Link
                          href={{
                            pathname: "Banking-Assistance",
                            query: { name: point },
                          }}
                          onClick={() => {
                            setTimeout(() => setShowMenu(false), 500);
                          }}
                          className="flex items-center gap-2"
                        >
                          {point}
                          <RiArrowRightUpLine />
                        </Link>
                      </div>
                    )}
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
