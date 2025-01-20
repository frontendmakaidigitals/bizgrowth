"use client";
import React, { useEffect, useState, useRef } from "react";
import Heading from "../App_Chunks/Components/Heading";
import FourthSection from "../App_Chunks/Components/FourthSection";
import type { ConfettiRef } from "@/components/ui/confetti";
import Confetti from "@/components/ui/confetti";

const Page = () => {
  const confettiRef = useRef<ConfettiRef>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    // Start the confetti animation on mount
    setShowConfetti(true);

    // Trigger confetti firing when the component mounts
    if (confettiRef.current) {
      confettiRef.current?.fire({ particleCount: 100 });
    }

    // Set a timeout to hide the confetti after animation duration
    const confettiDuration = 3000; // Duration of the animation (in ms)
    const timer = setTimeout(() => {
      setShowConfetti(false); // Hide confetti after duration
    }, confettiDuration);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Conditionally render Confetti when showConfetti is true */}
      {showConfetti && (
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
        />
      )}

      <div className="py-14 text-slate-950 border border-lime-100 overflow-hidden font-Satoshi font-semibold flex flex-col justify-center items-center relative">
        <div className="absolute w-full h-full -z-10">
          <img
            src="/media/gggrain.svg"
            className="w-full h-full opacity-[.6] object-cover"
          />
        </div>
        <div className="flex justify-center">
          <Heading className="!text-center w-full lg:w-2/3">
            Thank You for reaching out to{" "}
            <span className="text-indigo-500">Biz</span>{" "}
            <span className="text-lime-500">Growth</span> Business Consultancy.
          </Heading>
        </div>
      </div>

      <div className="mt-14">
        <FourthSection />
      </div>
    </div>
  );
};

export default Page;
