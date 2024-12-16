import React from "react";
import CalculatorPage from "./CalculatorPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Get an Estimate Cost in setting up your Business ",
  description:
    "We will provide an instant quote and give you the option to schedule a meeting with one of our setup specialists if you require further assistance.",
};
const page = () => {
  return (
    <>
      <CalculatorPage />
    </>
  );
};

export default page;
