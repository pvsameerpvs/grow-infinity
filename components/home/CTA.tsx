"use client";

import React from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden group shadow-3xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 blur-[150px] rounded-full -mr-[400px] -mt-[400px] group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 blur-[120px] rounded-full -ml-[300px] -mb-[300px]" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none">
              Ready to <br /><span className="text-gold">Grow Infinitely?</span>
            </h2>
            <p className="text-2xl text-white/70 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Get a comprehensive breakdown of your business setup costs in less than 2 minutes with our precision calculator.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <Link
                href="/cost-calculator"
                className="px-12 py-7 bg-white text-primary hover:bg-gold-light hover:text-white font-black rounded-[2rem] text-xl transition-all flex items-center justify-center group/btn shadow-2xl"
              >
                <Calculator className="mr-3 w-6 h-6" />
                USE COST CALCULATOR
                <ArrowRight className="ml-3 group-hover/btn:translate-x-1 transition-transform w-5 h-5" />
              </Link>
              <button className="px-12 py-7 bg-black/20 hover:bg-black/40 text-white font-black rounded-[2rem] text-xl transition-all border border-white/10 backdrop-blur-md">
                BOOK VIP CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
