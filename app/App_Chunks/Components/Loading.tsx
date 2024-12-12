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
          <div className="spinner"></div>
          <style>
            {`.spinner {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: radial-gradient(farthest-side,#c0ca33 94%,#0000) top/9px 9px no-repeat,
                conic-gradient(#0000 30%,#c0ca33);
                -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
                animation: spinner-c7wet2 1s infinite linear;
              }

              @keyframes spinner-c7wet2 {
                100% {
                  transform: rotate(1turn);
                }
              }`}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
