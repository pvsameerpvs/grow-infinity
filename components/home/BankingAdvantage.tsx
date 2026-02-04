"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export function BankingAdvantage() {
  return (
    <section className="py-32 bg-foreground dark:bg-[#020617] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-gold rounded-full" />
              <h4 className="text-gold font-black uppercase tracking-[0.3em] text-sm">The Banking-First Philosophy</h4>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
              Any firm can get <br />you a license. <br />
              <span className="text-primary">We ensure you can bank.</span>
            </h2>
            <div className="space-y-8 text-white/60 text-lg leading-relaxed font-medium">
              <p>
                In the UAE, a business license is only as good as the bank account attached to it. Our unique &quot;Banking-First&quot; methodology begins with your banking eligibility.
              </p>
              <p>
                We pre-vet your business activity with our network of banking partners before we even file for your name reservation. This saves you weeks of frustration and ensures a operational cash flow from day one.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'IBAN Delivery Focus',
                'Risk Appetite Pre-Check',
                'Activity Suitability Audit',
                'Executive Profile Mapping'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 glass rounded-2xl border-white/5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-white w-5 h-5" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative p-12 glass rounded-[3.5rem] border-white/10 shadow-3xl">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-black tracking-tight">OPERATIONAL<br /><span className="text-gold">EXCELLENCE</span></h3>
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="space-y-10">
                {[
                  { label: 'Document Verification', progress: '100%' },
                  { label: 'Bank Introduction', progress: 'Fast-Track' },
                  { label: 'Visa Approval', progress: 'Guaranteed*' },
                  { label: 'IBAN Activation', progress: '94% Success' },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between mb-4">
                      <span className="text-xs font-black uppercase tracking-widest text-white/50">{item.label}</span>
                      <span className="text-xs font-black text-gold">{item.progress}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className="h-full bg-primary rounded-full relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/30">
                <span>Standardized Processing</span>
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
