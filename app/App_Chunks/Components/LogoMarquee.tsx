"use client";
import React, { useState } from "react";

const logos = [
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
];

const LogoMarquee = () => {
  
 
 

  return (
    <>
      {/* Inline style for animation */}
      <style jsx>{`
        @keyframes marqueeAnimation {
          0% {
            transform: translateY(100%); /* Start from bottom */
          }
          100% {
            transform: translateY(-100%); /* Move to top */
          }
        }

        .animate-marquee {
          position: absolute;
          width: 100%;
          height: 100%;
          animation: marqueeAnimation 2s linear infinite;
        }

        /* Stagger delay for each logo */
        .animate-marquee:nth-child(1) {
          animation-delay: 0s;
        }
        .animate-marquee:nth-child(2) {
          animation-delay: 0.5s;
        }
        .animate-marquee:nth-child(3) {
          animation-delay: 1s;
        }
        .animate-marquee:nth-child(4) {
          animation-delay: 1.5s;
        }
        .animate-marquee:nth-child(5) {
          animation-delay: 2s;
        }
        .animate-marquee:nth-child(6) {
          animation-delay: 2.5s;
        }
        .animate-marquee:nth-child(7) {
          animation-delay: 3s;
        }
        .animate-marquee:nth-child(8) {
          animation-delay: 3.5s;
        }
      `}</style>

      <div className="mb-20 grid grid-cols-2 lg:grid-cols-4 gap-14 place-items-center container">
        {logos.slice(0, 8).map((review, index) => (
          <div
            key={index}
            className="w-full h-32 flex items-center justify-center border border-slate-300 rounded-sm overflow-hidden relative"
          >
            <div className="relative w-full h-full">
              <img
                src={review.img}
                alt={`Logo for ${review.name}`}
                className="animate-marquee w-full h-full object-contain absolute"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LogoMarquee;
