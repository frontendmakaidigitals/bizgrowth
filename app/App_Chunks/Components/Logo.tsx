import React from "react";
import Link from "next/link";
const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <p className={`text-3xl relative font-Satoshi font-[600] ${className}`}>
        Logo
      </p>
    </Link>
  );
};

export default Logo;
