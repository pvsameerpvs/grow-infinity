"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, TrendingUp, ShieldCheck, PhoneCall, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HeroForm } from "./HeroForm";

const LOCATIONS = ["UAE", "Qatar", "KSA", "India"];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [locationIndex, setLocationIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setLocationIndex((prev) => (prev + 1) % LOCATIONS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen pt-[100px] lg:pt-[120px] pb-4 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] dark:bg-[#0a0a0a]">
      {/* Main Rounded Hero Card */}
      <div className="relative h-[calc(100vh-140px)] lg:h-full w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden group shadow-2xl">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            src="/hro-vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-section.jpg"
            preload="none"
            className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] ease-out group-hover:scale-105"
          />
          {/* Subtle Artistic Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 lg:from-black/80 lg:via-black/30 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 lg:from-black/50 via-black/10 to-transparent" />
        </div>

        {/* Floating Brand Label at top center */}
        {/* <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 glass-dark backdrop-blur-xl group/brand cursor-default"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45] animate-pulse" />
            <span className="text-white font-black uppercase tracking-[0.5em] text-[10px] leading-none">
              Grow Infinity
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#C49A45] animate-pulse" />
          </motion.div>
        </div> */}

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center lg:flex-row lg:justify-between p-6 sm:p-12 lg:p-20 max-w-screen-2xl mx-auto w-full">
          
          {/* Left: Dramatic Typography & Content */}
          <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 mb-10 lg:mb-0 text-center lg:text-left w-full lg:w-3/5">
            

            <div className="space-y-2 relative w-full">
              {/* Screen-reader accessible H1 */}
              <h1 className="sr-only">Grow Infinity - Business Setup in Dubai, UAE, Saudi Arabia, Qatar & India</h1>
              
              {/* Invisible placeholder to maintain consistent height */}
              <div className="font-cormorant text-[12vw] xs:text-[10vw] sm:text-[8vw] lg:text-[7.5rem] leading-[0.9] font-light tracking-tight opacity-0 pointer-events-none select-none">
                Dubai
              </div>
              
              <AnimatePresence>
                <motion.span
                  key={locationIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="font-cormorant text-[12vw] xs:text-[10vw] sm:text-[8vw] lg:text-[7.5rem] text-white leading-[0.9] font-light tracking-tight drop-shadow-2xl absolute top-0 left-0 w-full text-center lg:text-left"
                  aria-hidden="true"
                >
                  {LOCATIONS[locationIndex]}
                </motion.span>
              </AnimatePresence>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 pl-1 lg:pl-3"
              >
                <div className="hidden lg:block h-[2px] w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                <h2 className="font-sans text-white/90 uppercase tracking-[0.2em] text-sm sm:text-base lg:text-lg font-bold whitespace-nowrap">
                  Setting Up Business Made Simple
                </h2>
              </motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-white/90 text-base sm:text-lg lg:text-xl max-w-xl font-normal leading-relaxed drop-shadow-md"
            >
              Start and scale your business in the UAE, Saudi Arabia, Qatar, and India. We manage your licensing, priority banking, and corporate setup so you can focus on success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full"
            >
              <Link href="/contact" className="w-full sm:w-auto text-center bg-[#5B9EC9] text-white px-8 py-4 lg:px-10 lg:py-4 rounded-full font-bold tracking-wide hover:bg-[#4A8EB9] transition-all button-premium shadow-[0_4px_20px_rgba(91,158,201,0.4)] flex items-center justify-center group">
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Link>
              <Link href="/book" className="w-full sm:w-auto text-center bg-transparent border border-white/40 text-white px-8 py-4 lg:px-10 lg:py-4 rounded-full font-medium tracking-wide hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm group">
                Book a Consultation <PhoneCall className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Floating Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="w-full lg:w-[420px] hidden lg:block mt-10 lg:mt-0"
          >
            <HeroForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
