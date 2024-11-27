import React from "react";
import Link from "next/link";
const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className="py-2">
      <div className={`h-[60px] ${className}`}>
        <img className="w-auto h-full" src={"/PrimaryLogo/Logo.png"} />
      </div>
    </Link>
  );
};

export default Logo;
