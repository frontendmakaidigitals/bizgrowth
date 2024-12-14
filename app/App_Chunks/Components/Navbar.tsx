"use client";
import React, { useRef } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

import Link from "next/link";
import MobileMenu from "./mobileMenu";
const Navbar = () => {
  const navRef = useRef(null);
  return (
    <div ref={navRef} className=" w-full">
      <div className="container flex justify-between items-center w-full">
        <Logo className="relative z-[5]" />
        <Menu />
        <MobileMenu navRef={navRef} />
        <Link
          href={"/Cost-Calculator"}
          className="bg-gradient-to-tr hover:bg-gradient-to-br font-SplineSans font-[500] from-lime-500 to-lime-300 px-4 py-2 rounded-lg xl:text-md hidden lg:block "
        >
          Cost Calculator
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
