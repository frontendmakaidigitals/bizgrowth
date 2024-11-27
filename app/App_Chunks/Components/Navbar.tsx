import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./Button";
const Navbar = () => {
  return (
    <div className=" w-full">
      <div className="container flex justify-between items-center w-full">
        <Logo className="relative z-[5]" />
        <Menu />

        
        <div className="hidden lg:block ">
          <Button className="xl:text-md bg-gradient-to-tr from-lime-300 text-green-950  to-lime-500 font-[600]">
            Cost Calculator
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
