import React from "react";

const Banner = ({ query }: { query: string | undefined | null }) => {
  return (
    <div className="w-full container mb-24 rounded-xl p-5 bg-[#94c958]">
      {query}
      <p className="font-Synonym text-2xl tracking-tight">
        READY TO KICKSTART YOUR BUSINESS IN FUJAIRAH?
      </p>
    </div>
  );
};

export default Banner;
