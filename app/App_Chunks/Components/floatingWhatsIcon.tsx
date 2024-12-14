"use client";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const FloatingWhatsIcon = () => {
  const phoneNumber = "+971559391238"; // Replace with the desired phone number

  return (
    <div className="fixed z-[99] bottom-5 right-5">
      <a
        href={`https://wa.me/${phoneNumber}`} // WhatsApp link with phone number
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security feature
        className="size-14 grid shadow-lg grid-cols-1 place-items-center rounded-full border border-gray-300 bg-white/80 backdrop:filter backdrop-blur-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoLogoWhatsapp className="text-4xl text-[#25d366]" />
        </motion.div>
      </a>
    </div>
  );
};

export default FloatingWhatsIcon;
