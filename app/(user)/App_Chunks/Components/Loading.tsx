"use client";
import React, { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Loading = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Loader />
    </Suspense>
  );
};

export default Loading;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("name");

  useEffect(() => {
    // Log when the loading state is updated
    console.log(isLoading, "rendered");

    setIsLoading(true); // Set loading to true when path or query changes
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 1 second
    }, 1000);
  }, [pathname, query]); // Re-run the effect when the pathname or query changes

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5 }}
          className="top-0 left-0 flex items-center justify-center h-screen w-screen fixed shadown-lg bg-indigo-50 z-[9999]"
        >
          <svg
            className="LoaderContainer"
            viewBox="0 0 40 40"
            height="40"
            width="40"
          >
            <circle
              className="track"
              cx="20"
              cy="20"
              r="17.5"
              pathLength="100"
              strokeWidth="2px"
              fill="none"
            />
            <circle
              className="car"
              cx="20"
              cy="20"
              r="17.5"
              pathLength="100"
              strokeWidth="2px"
              fill="none"
            />
          </svg>

          <style>
            {`.LoaderContainer {
    --uib-size: 80px;
    --uib-color: black;
    --uib-speed: .8s;
    --uib-bg-opacity: 0.1;
    height: var(--uib-size);
    width: var(--uib-size);
    transform-origin: center;
    animation: rotate var(--uib-speed) linear infinite;
    will-change: transform;
    overflow: visible;
  }

  .car {
    fill: none;
    stroke: var(--uib-color);
    stroke-dasharray: 25, 75;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    transition: stroke 0.5s ease;
  }

  .track {
    fill: none;
    stroke: var(--uib-color);
    opacity: var(--uib-bg-opacity);
    transition: stroke 0.5s ease;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }`}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
