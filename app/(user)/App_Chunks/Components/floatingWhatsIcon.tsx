"use client";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const FloatingWhatsIcon = () => {
  const phoneNumber = "+971559391238"; // Replace with the desired phone number

  return (
    <div className="fixed z-[99] bottom-10 right-14">
      <span className="absolute inset-0 rounded-full animate-ripple bg-[#25d366]/70"></span>
      <span className="absolute inset-0 rounded-full animate-ripple delay-700 bg-[#25d366]/50"></span>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative size-14 grid place-items-center rounded-full border border-gray-300 bg-white/80 backdrop-blur-lg shadow-lg"
      >
        {/* Ripple rings */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative z-10"
        >
          <IoLogoWhatsapp className="text-4xl text-[#25d366]" />
        </motion.div>
      </a>
    </div>
  );
};

export default FloatingWhatsIcon;
