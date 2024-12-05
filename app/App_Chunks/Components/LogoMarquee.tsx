import React from "react";
import Marquee from "@/components/ui/marquee";
import Heading from "./Heading";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/1.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/2.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/3.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/4.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/5.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/6.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/7.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/8.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/9.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/10.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/11.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/12.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/13.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/14.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/15.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/16.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/17.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/18.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/19.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/20.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/21.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/22.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/23.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/24.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/25.png",
  },
];

const LogoMarquee = () => {
  return (
    <div className="mb-20 bg-white py-16">
      {" "}
      <Marquee pauseOnHover className="[--duration:60s]">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-lime-300 border relative overflow-hidden border-gray-300  rounded-lg flex justify-center items-center"
          >
            <div className="absolute w-full h-full top-0 left-0">
              <img
                src={"/media/gggrain.svg"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[300px] relative z-10">
              <img className=" w-full h-full object-cover " src={review.img} />
            </div>
          </div>
        ))}
      </Marquee>
      <div className="container w-full mt-20">
        <Heading className="!text-center">
          WE HELP YOUR <span className="text-lime-500">BUSINESS</span> IDEA COME
          INTO ACTION{" "}
        </Heading>
      </div>
      <div className="w-full container mt-5 border rounded-xl border-gray-300">
        <img className="" src={"/media/process.svg"} />
      </div>
    </div>
  );
};

export default LogoMarquee;
