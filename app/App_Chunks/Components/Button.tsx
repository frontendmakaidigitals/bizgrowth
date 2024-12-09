"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
// Define the types for the props
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // onClick is a function that handles the mouse click event
  className?: string; // className is optional and is a string
  children: ReactNode; // children can be any valid React node
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1, ease: "easeIn" }}
      className={`px-3 py-2 bg-gradient-to-tr hover:bg-gradient-to-br transition-all duration-300 from-lime-300 text-green-950  to-lime-500 font-[600] font-Satoshi rounded-lg ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
