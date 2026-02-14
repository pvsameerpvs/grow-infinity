"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen lg:h-screen pt-[100px] lg:pt-[120px] pb-12 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] dark:bg-[#0a0a0a]">
      {/* Main Rounded Hero Card */}
      <div className="relative h-[calc(100vh-140px)] lg:h-full w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden group shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-section.jpg" 
            alt="Dubai Luxury Business Environment" 
            className="w-full h-full object-cover scale-110 lg:scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out"
          />
          {/* Subtle Artistic Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 lg:from-black/60 lg:via-black/20 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 lg:from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between p-6 sm:p-12 lg:p-20">
          
          {/* Left: Dramatic Typography */}
          <div className="flex flex-col items-center lg:items-start space-y-2 mb-10 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant text-[20vw] xs:text-[18vw] sm:text-[15vw] lg:text-[10rem] text-white leading-none italic font-light tracking-tight drop-shadow-2xl"
            >
              Dubai
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-4 pl-2"
            >
              <div className="h-[1px] w-8 sm:w-12 bg-white/40" />
              <p className="font-sans text-white/90 uppercase tracking-[0.4em] text-[8px] sm:text-xs font-bold whitespace-nowrap">
                Elite Corporate Legacy
              </p>
            </motion.div>
          </div>

          {/* Right: Floating Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[340px] sm:max-w-md bg-white/5 lg:bg-white/10 dark:bg-black/40 lg:dark:bg-black/20 backdrop-blur-2xl lg:backdrop-blur-3xl border border-white/10 lg:border-white/20 rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden group/card"
          >
            {/* Card Header */}
            <h2 className="font-plus-jakarta text-xl sm:text-3xl text-white font-bold mb-4 lg:mb-6 tracking-tight">
              Strategic Advisory
            </h2>

            {/* Content Body - User's Content preserved */}
            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-10 text-center lg:text-left">
              <p className="text-white/80 text-[14px] sm:text-[16px] leading-relaxed font-medium">
                Elite, banking-first business setup solutions for global visionaries demanding absolute precision, speed, and UAE market access.
              </p>
              
              <div className="pt-2 lg:pt-4 space-y-2 lg:space-y-3.5 flex flex-col items-center lg:items-start text-white/60">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-3.5 h-3.5 text-white/40" />
                  <span className="text-[12px] sm:text-[13px]">DIFC, Infinity Plaza, Dubai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-3.5 h-3.5 text-white/40" />
                  <span className="text-[12px] sm:text-[13px]">+971 4 XXX XXXX</span>
                </div>
              </div>
            </div>

            {/* Pill CTA Button */}
            <Link 
              href="/cost-calculator" 
              className="w-full bg-primary text-white py-4 rounded-full flex items-center justify-center font-bold text-[14px] sm:text-[15px] group/btn hover:bg-primary-dark transition-all duration-500 shadow-xl shadow-primary/20 button-premium"
            >
              Start Your Setup
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
            </Link>

            {/* Subtle card glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full group-hover/card:bg-white/10 transition-colors" />
          </motion.div>

        </div>

        {/* Hero Section Labels (User's Branding preserved in decorative way) */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center space-x-12 hidden lg:flex">
          {["Architecting", "Businesses", "Legacies"].map((label, idx) => (
            <motion.span
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.5 + (idx * 0.2) }}
              className="text-primary text-[10px] uppercase tracking-[0.6em] font-black"
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

