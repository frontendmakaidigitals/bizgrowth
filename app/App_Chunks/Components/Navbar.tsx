import React from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import Button from "./Button";
const Navbar = () => {
  return (
    <div className=" w-full bg-yellow-200 ">
      <div className=" py-4  container  flex justify-between items-center w-full">
        <Logo className="relative z-[5]" />
        <Menu />

        <MobileMenu />
        <div className="hidden lg:flex items-center gap-4 ">
          <button className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full">
            <div className="size-10 p-1 bg-slate-200 rounded-full">
              <img
                className="w-full h-full object-cover"
                src={"https://www.cdnlogo.com/logos/w/29/whatsapp-icon.svg"}
              />
            </div>
            +91 12345 67890
          </button>
          <div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;