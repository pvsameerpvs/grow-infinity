"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { PartnerSection } from "@/components/contact/PartnerSection";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { Sparkles, Globe2, ShieldCheck, Zap, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden">
      {/* Contact Hero */}
      <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] via-transparent to-background dark:from-primary/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border border-primary/20 shadow-xl"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Dubai&apos;s Elite Advisory Portal
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight"
            >
              Strategic Consultation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm lg:text-base text-foreground/70 leading-relaxed max-w-xl mx-auto"
            >
              Direct access to the architects of UAE business success. Inquire
              today for enterprise-grade solutions and banking first-priority
              execution.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-4 pt-3 opacity-50"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  DED Compliant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Global Markets
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Express Setup
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blue Trust Bar — matches ServicePage */}
      <div className="relative py-10 md:py-12 overflow-hidden" style={{ backgroundColor: "#5B9EC9" }}>
        <div className="container px-4 mx-auto relative z-10 flex flex-col md:flex-row justify-center items-start md:items-center gap-10 md:gap-20">
          <div className="flex items-center gap-5 font-black tracking-tighter text-sm md:text-base uppercase text-white group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/10 transition-transform group-hover:scale-110">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="leading-none">Priority Response</span>
          </div>
          <div className="w-px h-8 bg-white/30 hidden md:block" />
          <div className="h-px w-full max-w-[40px] bg-white/20 md:hidden ml-5" />
          <div className="flex items-center gap-5 font-black tracking-tighter text-sm md:text-base uppercase text-white group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/10 transition-transform group-hover:scale-110">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="leading-none">Free Consultation</span>
          </div>
          <div className="w-px h-8 bg-white/30 hidden md:block" />
          <div className="h-px w-full max-w-[40px] bg-white/20 md:hidden ml-5" />
          <div className="flex items-center gap-5 font-black tracking-tighter text-sm md:text-base uppercase text-white group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/10 transition-transform group-hover:scale-110">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <span className="leading-none">Reply in 30 Mins</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-10 bg-background relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="w-full lg:w-1/2">
              <ContactInfo />
            </div>
            <div className="w-full lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Integration */}
      <GlobalPresence />

      {/* Real Estate Partner Section */}
      <PartnerSection />

      {/* Bottom CTA for Calculator */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-dark p-8 sm:p-12 rounded-3xl text-center space-y-6 border border-white/10 shadow-[0_40px_100px_-20px_rgba(29,111,197,0.3)] bg-foreground"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Ready to calculate your{" "}
              <span className="text-gold">Infrastructure Cost?</span>
            </h2>
            <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed">
              Use our proprietary algorithm to receive a detailed breakdown of
              your business setup investment in seconds.
            </p>
            <div className="flex justify-center">
              <a
                href="/cost-calculator"
                className="px-8 py-3 bg-white text-foreground rounded-xl font-black text-sm uppercase tracking-[0.15em] hover:bg-white/90 transition-all shadow-xl group shadow-white/5 inline-flex items-center gap-2"
              >
                Launch Calculator
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #1D6FC5 1px, transparent 1px), linear-gradient(to bottom, #1D6FC5 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </section>
    </div>
  );
}
