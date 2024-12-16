import React from "react";
import ContactPage from "./ContactPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | BizGrowth - Business Setup Consultants in Dubai",
  description:
    " We’re here to help you navigate the process of setting up your business and support services in the UAE. Whether you’re just starting or looking to expand, our team of experts is ready to provide personalized, professional support every step of the way.",
};
const page = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default page;
