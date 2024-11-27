import React, { ReactNode } from "react";

// Define the types for the props
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // onClick is a function that handles the mouse click event
  className?: string; // className is optional and is a string
  children: ReactNode; // children can be any valid React node
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 bg-gradient-to-tr from-lime-300 text-green-950  to-lime-500 font-[600] font-Satoshi rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
