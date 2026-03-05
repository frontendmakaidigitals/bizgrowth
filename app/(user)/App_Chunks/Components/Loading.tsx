"use client";
import React, { useState, useEffect, Suspense, useTransition } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Loading = () => {
  return (
    <Suspense fallback={null}>
      <Loader />
    </Suspense>
  );
};

export default Loading;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader immediately when navigation starts
    setIsLoading(true);

    // Hide loader once the new page has fully painted
    const frame = requestAnimationFrame(() => {
      // Wait for the browser to commit the new page to the DOM
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 0); // 0ms — yields to the browser paint cycle, no artificial delay

      return () => clearTimeout(timeout);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, searchParams]); // Fires only on real navigation

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="top-0 left-0 flex items-center justify-center h-screen w-screen fixed bg-indigo-50 z-[9999]"
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

          <style>{`
            .LoaderContainer {
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
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
