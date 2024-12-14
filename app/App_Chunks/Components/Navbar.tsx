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
    <div ref={navRef} className=" w-full">
      <div className="container flex justify-between items-center w-full">
        <Logo className="relative z-[5]" />
        <Menu />
        <MobileMenu navRef={navRef} />
        <Link href={"/Cost-Calculator"} className="hidden lg:block ">
          <Button className="xl:text-md ">Cost Calculator</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
