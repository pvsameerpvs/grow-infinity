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
 <video
 src="/hero.mp4"
 autoPlay
 loop
 muted
 playsInline
 className="w-full h-full object-cover"
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
 

 </div>

 {/* Hero Section Labels (User's Branding preserved in decorative way) */}
 <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center space-x-12 hidden lg:flex">
 {["Grow", "Infinity"].map((label, idx) => (
 <motion.span
 key={label}
 initial={{ opacity: 0 }}
 animate={{ opacity: 0.9 }}
 transition={{ delay: 1.5 + (idx * 0.2) }}
 className="text-[#C49A45] text-4xl xl:text-4xl uppercase tracking-[0.4em] font-black"
 >
 {label}
 </motion.span>
 ))}
 </div>
 </div>
 </section>
 );
}

