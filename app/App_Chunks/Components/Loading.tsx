"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
  }, [pathname]);
  return (
    isLoading && (
      <div className="top-0 left-0 flex items-center justify-center h-screen w-screen fixed bg-lime-50 z-[9999]">
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
      </div>
    )
  );
};

export default Loading;
