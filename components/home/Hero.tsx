"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-129px)] flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hro-vid.mp4" type="video/mp4" />
        </video>
        
        {/* Light Themed Overlays */}
        <div className="absolute inset-0 bg-background/30 dark:bg-black/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent dark:from-background dark:via-background/60" />
      </div>

      {/* Main Content - Centered */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Heading */}
            <h1 className="font-oswald text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground mb-6 sm:mb-8 lg:mb-10 leading-[0.9] tracking-tight uppercase">
              Architecting{' '}
              <span className="text-gradient-infinity italic normal-case pr-2">Businesses</span>.{' '}
              <span className="relative inline-block">
                Securing
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-2 sm:h-3 bg-gold/20 -z-10" 
                />
              </span>{' '}
              Legacies.
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-foreground/60 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed font-semibold px-4">
              Elite, banking-first business setup solutions for global visionaries demanding absolute precision, speed, and UAE market access.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link
                href="/cost-calculator"
                className="w-full sm:w-auto px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-primary hover:bg-primary-dark text-white font-black rounded-xl lg:rounded-2xl text-sm sm:text-base lg:text-lg transition-all duration-500 flex items-center justify-center group button-premium shadow-xl hover:shadow-2xl hover:shadow-primary/30"
              >
                START YOUR SETUP
                <ArrowRight className="ml-2 lg:ml-3 group-hover:translate-x-2 transition-transform w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto px-8 lg:px-10 py-4 sm:py-5 lg:py-6 glass hover:bg-foreground/5 text-foreground font-black rounded-xl lg:rounded-2xl text-sm sm:text-base lg:text-lg transition-all duration-500 border border-foreground/10 flex items-center justify-center group"
              >
                OUR SOLUTIONS
                <div className="ml-2 lg:ml-3 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold group-hover:scale-150 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
