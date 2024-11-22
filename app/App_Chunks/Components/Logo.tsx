import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <p className={`text-3xl relative font-Satoshi font-[600] ${className}`}>Logo</p>
  );
};

export default Logo;
