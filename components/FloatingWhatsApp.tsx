"use client";

import React from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      href="https://wa.me/971508663700"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed left-4 bottom-10 z-[70] group flex items-center"
    >
      <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-3xl shadow-[#25D366]/40 hover:scale-110 transition-transform cursor-pointer">
        <WhatsAppIcon className="w-7 h-7" />
      </div>
      <span className="hidden lg:block ml-3 px-4 py-2 rounded-full bg-black premium-dark-nav text-white text-xs font-bold border border-white/10 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;