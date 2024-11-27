import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}
const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      className={` ${className} text-3xl text-center lg:text-start lg:text-5xl font-semibold font-Satoshi`}
    >
      {children}
    </h1>
  );
};

export default Heading;
