import React from "react";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Logos/Acclerator.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/Logos/KSPC.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Logos/Ajman.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Logos/meydan.jpeg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Logos/fujarah-free-zone-logo.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Logos/IFZA.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Logos/DMCC.jpeg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Logos/Oasis.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Logos/RAKEZ_Logo.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Logos/RAKEZ---Channel-Partner-Service-Partner.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Logos/UAQ_freezone_Logo-1.png",
  },
];

const LogoMarquee = () => {
  return (
    <div className="mb-20">
      {" "}
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review, index) => (
          <div
            key={index}
            className=" bg-white border overflow-hidden border-gray-300  rounded-lg flex justify-center items-center"
          >
            <div className="w-[200px]">
              <img className=" w-full h-full object-cover " src={review.img} />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
