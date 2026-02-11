"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:h-screen pt-[120px] pb-12 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] dark:bg-[#0a0a0a]">
      {/* Main Rounded Hero Card */}
      <div className="relative h-full w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden group shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-section.jpg" 
            alt="Dubai Luxury Business Environment" 
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out"
          />
          {/* Subtle Artistic Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col lg:flex-row items-end lg:items-center justify-between p-8 sm:p-12 lg:p-20">
          
          {/* Left: Dramatic Typography */}
          <div className="flex flex-col space-y-2 mb-12 lg:mb-0">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant text-[15vw] sm:text-[12vw] lg:text-[10rem] text-white leading-none italic font-light tracking-tight drop-shadow-2xl"
            >
              Dubai
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center space-x-4 pl-2"
            >
              <div className="h-[1px] w-12 bg-white/40" />
              <p className="font-sans text-white/90 uppercase tracking-[0.4em] text-[10px] sm:text-sm font-bold">
                Elite Corporate Legacy
              </p>
            </motion.div>
          </div>

          {/* Right: Floating Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md bg-white/10 dark:bg-black/20 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden group/card"
          >
            {/* Card Header */}
            <h2 className="font-plus-jakarta text-2xl sm:text-3xl text-white font-bold mb-6 tracking-tight">
              Strategic Advisory
            </h2>

            {/* Content Body - User's Content preserved */}
            <div className="space-y-6 mb-10">
              <div className="flex flex-col space-y-4">
                <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed font-medium">
                  Elite, banking-first business setup solutions for global visionaries demanding absolute precision, speed, and UAE market access.
                </p>
                
                <div className="pt-4 space-y-3.5">
                  <div className="flex items-center space-x-3 text-white/60">
                    <MapPin className="w-4 h-4 text-white/40" />
                    <span className="text-[13px]">DIFC, Infinity Plaza, Dubai</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/60">
                    <Phone className="w-4 h-4 text-white/40" />
                    <span className="text-[13px]">+971 4 XXX XXXX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pill CTA Button */}
            <Link 
              href="/cost-calculator" 
              className="w-full bg-primary text-white py-4.5 rounded-full flex items-center justify-center font-bold text-[15px] group/btn hover:bg-primary-dark transition-all duration-500 shadow-xl shadow-primary/20 button-premium"
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
