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
      className={`px-3 py-2 bg-blue-500 text-slate-100 font-Satoshi rounded-lg hover:bg-blue-400 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
