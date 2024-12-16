import React from "react";
import AboutPage from "./AboutPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Company Formation and Business Management | Dubai, UAE",
  description:
    "Your trusted partner in setting up and growing your business in the UAE. We simplify the complexities of company formation, ensuring a quick and efficient process",
};
const page = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default page;
