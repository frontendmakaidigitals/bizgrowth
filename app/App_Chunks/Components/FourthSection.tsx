import React from "react";

const FourthSection = () => {
  const services = [
    {
      title: "Company Formation",
      image: "image_of_company_formation.jpg",
    },
    {
      title: "Company Incorporation",
      image: "image_of_company_incorporation.jpg",
    },
    {
      title: "Bank Account Assistance",
      image: "image_of_bank_account_assistance.jpg",
    },
    {
      title: "Visa Processing",
      image: "image_of_visa_processing.jpg",
    },
    {
      title: "PRO Services",
      image: "image_of_pro_services.jpg",
    },
    {
      title: "Office Space Solutions",
      image: "image_of_office_space_solutions.jpg",
    },
    {
      title: "Legal and Advisory Services",
      image: "image_of_legal_advisory_services.jpg",
    },
    {
      title: "VAT Services",
      image: "image_of_vat_services.jpg",
    },
    {
      title: "Accounting & Bookkeeping",
      image: "image_of_accounting_bookkeeping.jpg",
    },
    {
      title: "Business Sponsorship and Local Partner Services",
      image: "image_of_business_sponsorship_local_partner.jpg",
    },
    {
      title: "Corporate Banking Assistance",
      image: "image_of_corporate_banking_assistance.jpg",
    },
    {
      title: "Business Consultation & Market Research",
      image: "image_of_business_consultation_market_research.jpg",
    },
    {
      title: "Design & Marketing Services",
      image: "image_of_design_marketing_services.jpg",
    },
    {
      title: "Government Permit & Approval",
      image: "image_of_government_permit_approval.jpg",
    },
    {
      title: "Design & Marketing Services",
      image: "image_of_design_marketing_services.jpg",
    },
  ];

  return (
    <div className="container mb-20">
      <h1 className="text-2xl lg:text-4xl font-Satoshi font-[600] ">
        YOUR ONE-STOP SHOP FOR BUSINESS SOLUTIONS!
      </h1>
      <div className="mt-10 ">
        <div className=" w-[300px] flex justify-between flex-col h-[200px] bg-slate-200 p-3 rounded-xl">
          <div className="size-12 rounded-full bg-red-400"></div>
          <p className="text-right">Visa Processing</p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
