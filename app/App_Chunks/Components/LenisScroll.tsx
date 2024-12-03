"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // Function to call `lenis.raf` for continuous scroll updates
    function raf(time: number) {
      // Check if body has 'overflow: hidden' to stop Lenis scroll
      if (document.body.style.overflow === "hidden") {
        lenis.stop();
      } else {
        lenis.start();
      }
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Initialize Lenis smooth scroll
    requestAnimationFrame(raf);

    return () => {
      // Cleanup on unmount
      lenis.destroy();
    };
  }, []); // Only run once on mount

  return <></>;
};

export default LenisScroll;
