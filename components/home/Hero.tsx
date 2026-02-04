"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Successful Setups', value: '5,000+' },
  { label: 'Banking Partners', value: '25+' },
  { label: 'Expert Advisors', value: '40+' },
  { label: 'Retention Rate', value: '98%' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 bg-background transition-colors duration-500">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-infinity-blue-light/20 blur-[150px] rounded-full animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.1]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">
                The Gold Standard in UAE Advisory
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-foreground mb-8 leading-[0.9] tracking-tighter">
              Architecting <br />
              <span className="text-gradient-infinity">Businesses</span>. <br />
              Securing Legacies.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 mb-12 max-w-2xl leading-relaxed font-medium">
              Elite, banking-first business setup solutions for entrepreneurs who demand precision, speed, and long-term security in the UAE.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                href="/cost-calculator"
                className="px-10 py-6 bg-primary hover:bg-primary-dark text-white font-black rounded-2xl text-lg transition-all duration-300 flex items-center group button-premium shadow-2xl shadow-primary/30"
              >
                START YOUR SETUP
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform w-5 h-5" />
              </Link>
              <Link
                href="#services"
                className="px-10 py-6 glass hover:bg-foreground/5 text-foreground font-black rounded-2xl text-lg transition-all duration-300 border-foreground/10"
              >
                EXPLORE ADVISORY
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Stat Card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-80 p-10 glass rounded-[2.5rem] border-white/10"
      >
        <div className="space-y-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-4xl font-black text-primary tracking-tighter mb-1">{stat.value}</span>
              <span className="text-[10px] text-foreground/40 font-black uppercase tracking-[0.2em]">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30"
      >
        <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
