"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { PartnerSection } from '@/components/contact/PartnerSection';
import { GlobalPresence } from '@/components/home/GlobalPresence';
import { Sparkles, Globe2, ShieldCheck, Zap } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Contact Hero - Subdued & Elite */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] via-transparent to-background dark:from-primary/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full border border-primary/20 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Dubai&apos;s Elite Advisory Portal</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-oswald text-5xl sm:text-7xl lg:text-8xl font-black text-foreground uppercase tracking-tight leading-[0.95]"
            >
              Strategic <span className="text-gradient-infinity">Consultation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-foreground/50 font-medium leading-relaxed max-w-2xl mx-auto"
            >
              Direct access to the architects of UAE business success. Inquire today for enterprise-grade solutions and banking first-priority execution.
            </motion.p>

            {/* Trust Badges Simple */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-8 pt-6 opacity-40 grayscale"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">DED Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Markets</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">Express Setup</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Global Presence Integration */}
      <GlobalPresence />

      {/* Real Estate Partner Section */}
      <PartnerSection />

      {/* Bottom CTA for Calculator */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-dark p-12 sm:p-20 rounded-[4rem] text-center space-y-10 border border-white/10 shadow-[0_40px_100px_-20px_rgba(29,111,197,0.3)] bg-foreground"
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none italic">
              Ready to calculate your <br />
              <span className="text-gradient-infinity not-italic">Infrastructure Cost?</span>
            </h2>
            <p className="text-white/50 text-lg font-medium max-w-xl mx-auto leading-relaxed">
              Use our proprietary algorithm to receive a detailed breakdown of your business setup investment in seconds.
            </p>
            <div className="flex justify-center">
              <a 
                href="/cost-calculator" 
                className="px-12 py-5 bg-white text-foreground rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/90 transition-all button-premium shadow-2xl group shadow-white/5"
              >
                Launch Calculator
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
          backgroundImage: `linear-gradient(to right, #1D6FC5 1px, transparent 1px), linear-gradient(to bottom, #1D6FC5 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </section>
    </div>
  );
}
