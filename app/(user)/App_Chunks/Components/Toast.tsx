"use client";
import { motion } from "framer-motion";
const Toast = ({
  title,
  desc,
  type = "default",
}: {
  title: string;
  desc: string;
  type?: "success" | "error" | "default";
}) => {
  // Define the color based on the type
  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-gray-50"; // Default color for 'default'

  return (
    <div className="fixed bottom-5 right-5 z-[999]">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: [0.08, 0.82, 0.17, 1], duration: 0.3 }}
        className={`w-[400px] p-7 ${bgColor} rounded-lg`}
      >
        <h2 className="text-white font-bold font-SplineSans text-xl">
          {title}
        </h2>
        <p className="text-white font-Satoshi">{desc}</p>
      </motion.div>
    </div>
  );
};

export default Toast;
