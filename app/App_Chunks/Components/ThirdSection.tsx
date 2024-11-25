import React from "react";
import Button from "./Button";

const ThirdSection = () => {
  return (
    <div className="container grid grid-cols-1 items-center lg:grid-cols-2 gap-14 mb-20">
      <div className="h-[300px] relative lg:h-[500px] rounded-xl">
        <img
          className="w-full h-full object-cover relative z-[10] rounded-xl"
          src={
            "https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <div className="shadow-xl absolute -top-3 left-3 xxl:-top-10 xl:-top-5 xl:left-5 xxl:left-10 rounded-xl w-full bg-[#81D4FA] h-full" />
      </div>
      <div className="">
        <h1 className="text-2xl lg:text-4xl font-Satoshi font-[600]">
          ACCELERATE YOUR BUSINESS GROWTH WITH US
        </h1>
        <p className="text-xl font-Satoshi mt-5">
          BIZ Growth Consultancy, your trusted partner in setting up and growing
          your business in the UAE. We simplify the complexities of company
          formation, ensuring a seamless and efficient processWe specialize in
          providing comprehensive business setup services that streamline the
          process of establishing a company in one of the world’s most dynamic
          and business-friendly environments.
        </p>
        <Button className="mt-5">Contact us</Button>
      </div>
    </div>
  );
};

export default ThirdSection;
