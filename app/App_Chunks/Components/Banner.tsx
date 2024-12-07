import React from "react";
import Button from "./Button";
const Banner = ({
  title,
  desc,
}: {
  title: string | undefined | null;
  desc: string | undefined | null;
}) => {
  return (
    <div className="w-full container  mb-24 ">
      <div className="bg-[url('/media/gggrain.svg')] border border-slate-200 rounded-xl p-7 ">
        <p className="font-Synonym mb-3 font-[600] text-lime-950 text-2xl tracking-tight">
         
        </p>
        <p className="text-lg font-Satoshi">{desc}</p>
        <div className="mt-3">
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
