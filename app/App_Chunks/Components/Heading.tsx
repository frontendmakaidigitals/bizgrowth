import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}
const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className=" text-3xl text-center lg:text-start lg:text-5xl font-semibold font-Satoshi">
      {children}
    </h1>
  );
};

export default Heading;
