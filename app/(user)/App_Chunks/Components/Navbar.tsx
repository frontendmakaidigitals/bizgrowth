"use client";
import React, { useRef } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./Button";
import Link from "next/link";
import MobileMenu from "./mobileMenu";
const Navbar = () => {
  const navRef = useRef(null);
  return (
    <div ref={navRef} className=" w-full py-3">
      <div className="container flex justify-between items-center w-full">
        <Logo className="relative z-[5]" />
        <div className="flex items-center gap-5">
          <Menu />

          <Link href={"/cost-calculator"} className="hidden lg:block ">
            <Button className=" ">Cost Calculator</Button>
          </Link>
        </div>
        <MobileMenu navRef={navRef} />
      </div>
    </div>
  );
};

export default Navbar;
