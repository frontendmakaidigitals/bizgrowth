import React from "react";
import Button from "./Button";
const Banner = ({ query }: { query: string | undefined | null }) => {
  return (
    <div className="w-full container mb-24 rounded-xl p-7 bg-[url('/media/gggrain.svg')]">
      <div>
        <p className="font-Synonym font-[600] text-lime-950 text-2xl tracking-tight">
          READY TO KICKSTART YOUR BUSINESS IN FUJAIRAH?
        </p>
        <p className="text-lg font-Satoshi">
          Starting a business in {query} is an exciting opportunity, and with
          our expert guidance, you can easily navigate the setup process.
          Contact us today to discuss your business goals, and let us help you
          take the first step toward success in the UAE.
        </p>
        <div className="mt-3">
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
