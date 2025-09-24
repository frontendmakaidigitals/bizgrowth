import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}
const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      className={` ${className} text-3xl w-full text-center lg:text-start lg:text-4xl font-semibold font-Satoshi`}
    >
      {children}
    </h1>
  );
};

export default Heading;
