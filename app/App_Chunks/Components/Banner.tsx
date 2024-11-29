import React from "react";

const Banner = ({ query }: { query: string | undefined | null }) => {
  return (
    <div className="w-full container h-60 mb-24 rounded-xl bg-[#7cb342]">
      {query}
      <p>READY TO KICKSTART YOUR BUSINESS IN FUJAIRAH? </p>
    </div>
  );
};

export default Banner;
