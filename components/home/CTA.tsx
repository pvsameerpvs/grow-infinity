"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calculator, Globe } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="relative glass p-12 lg:p-24 rounded-[3rem] border border-primary/10 overflow-hidden text-center">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #c19b4b 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-[#C49A45]/10">
              <div className="w-2 h-2 rounded-full bg-[#C49A45] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-[#C49A45]">
                Ready to Expansion
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight max-w-4xl mx-auto">
              Level Up Your <span className="text-primary">UAE Presence</span> Today
            </h2>

            <p className="text-foreground/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Join 500+ successful founders who launched their global vision with our agile infrastructure and priority advisory.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/cost-calculator"
                className="group bg-primary hover:bg-primary-dark text-white px-8 md:px-12 py-5 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-xl shadow-primary/20 button-premium"
              >
                <Calculator className="w-5 h-5" />
                <span className="font-bold uppercase tracking-widest text-sm">
                  Instant Cost Quote
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="px-8 md:px-12 py-5 rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm hover:bg-foreground/5 transition-all duration-300 flex items-center gap-4 font-bold uppercase tracking-widest text-sm text-foreground"
              >
                <Phone className="w-5 h-5 text-primary" />
                Book Consultation
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-40">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Standards</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-foreground/20" />
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest">Priority Support 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
