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
            {/* Main Heading with Bullet Shoot Effect */}
            <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground mb-6 sm:mb-8 lg:mb-10 leading-[1.1] tracking-tight uppercase">
              {/* First Line: Architecting Businesses */}
              <motion.span 
                className="block mb-2"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block relative">
                  Architecting
                  {/* Speed lines effect */}
                  <motion.span
                    className="absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-0.5 bg-primary"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  />
                  <motion.span
                    className="absolute -left-16 top-1/3 -translate-y-1/2 w-12 h-0.5 bg-primary/60"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  />
                </span>{' '}
                
                <motion.span 
                  className="text-gradient-infinity italic normal-case inline-block relative px-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  Businesses
                  {/* Circular impact effect */}
                  <motion.span
                    className="absolute inset-0 border-2 border-primary rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [0.8, 1.2, 1.5], opacity: [0.6, 0.3, 0] }}
                    transition={{ duration: 1, delay: 0.4, repeat: Infinity, repeatDelay: 2 }}
                  />
                </motion.span>.
              </motion.span>
              
              {/* Second Line: Securing Legacies */}
              <motion.span 
                className="block"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="relative inline-block">
                  Securing
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute -bottom-1 sm:-bottom-2 left-0 h-2 sm:h-3 bg-gold/20 -z-10" 
                  />
                  {/* Speed lines from right */}
                  <motion.span
                    className="absolute -right-20 top-1/2 -translate-y-1/2 w-16 h-0.5 bg-gold"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  />
                  <motion.span
                    className="absolute -right-16 top-2/3 -translate-y-1/2 w-12 h-0.5 bg-gold/60"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.4, delay: 0.65 }}
                  />
                </span>{' '}
                
                <motion.span
                  className="inline-block relative"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  Legacies
                  {/* Bullet impact dots */}
                  <motion.span
                    className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <motion.span
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-gold rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                </motion.span>.
              </motion.span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-foreground/60 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed font-semibold px-4">
              Elite, banking-first business setup solutions for global visionaries demanding absolute precision, speed, and UAE market access.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
              <Link
                href="/cost-calculator"
                className="w-full sm:w-auto px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 bg-primary hover:bg-primary-dark text-white font-black rounded-lg lg:rounded-xl text-xs sm:text-sm lg:text-base transition-all duration-500 flex items-center justify-center group button-premium shadow-xl hover:shadow-2xl hover:shadow-primary/30"
              >
                START YOUR SETUP
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 glass hover:bg-foreground/5 text-foreground font-black rounded-lg lg:rounded-xl text-xs sm:text-sm lg:text-base transition-all duration-500 border border-foreground/10 flex items-center justify-center group"
              >
                OUR SOLUTIONS
                <div className="ml-2 w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
