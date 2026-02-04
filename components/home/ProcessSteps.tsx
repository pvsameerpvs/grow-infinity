"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Deep dive into your business model and banking needs to determine the optimal jurisdiction.'
  },
  {
    num: '02',
    title: 'Pre-Approval',
    desc: 'Verify eligibility with selected UAE authorities and banking partners before formal filing.'
  },
  {
    num: '03',
    title: 'Documentation',
    desc: 'Comprehensive drafting and legalization of all corporate instruments by our legal experts.'
  },
  {
    num: '04',
    title: 'Setup & Bank',
    desc: 'Concurrent company issuance and corporate account activation via our VIP channels.'
  }
];

export function ProcessSteps() {
  return (
    <section className="py-32 bg-foreground dark:bg-[#020617] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-1 bg-gold mb-8 rounded-full" />
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
              Your Roadmap <br /><span className="text-primary italic">To Excellence.</span>
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-lg leading-relaxed font-medium">
              We streamline the complexities of UAE regulation into a precise four-stage deployment.
            </p>
            <div className="inline-block px-8 py-5 border border-white/10 rounded-2xl glass font-black text-xs uppercase tracking-[0.3em] hover:bg-white/5 transition-colors cursor-pointer">
              Download Process PDF
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start space-x-8 p-10 glass rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all"
              >
                <span className="text-4xl font-black text-primary italic opacity-30 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-2xl font-black mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
