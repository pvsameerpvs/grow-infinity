"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Stats() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { value: '48H', label: 'License Issuance' },
            { value: '100%', label: 'Foreign Ownership' },
            { value: '0%', label: 'Income Tax' },
            { value: '25+', label: 'Global Offices' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-5xl md:text-7xl font-black text-foreground mb-4 tracking-tighter group-hover:text-primary transition-colors"
              >
                {stat.value}
              </motion.div>
              <div className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
