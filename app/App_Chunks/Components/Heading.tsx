import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}
const Heading = ({ children }: HeadingProps) => {
  return <h1 className=" text-4xl font-semibold my-5">{children}</h1>;
};

export default Heading;
