"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Building2, Clock, Users2, Star } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Businesses Launched", icon: Building2 },
  { value: "7 Days", label: "Avg. Setup Time", icon: Clock },
  { value: "25+", label: "Banking Partners", icon: Users2 },
  { value: "100%", label: "Success Rate", icon: Star },
];

const highlights = [
  "Mainland & Free Zone setup in 7 days",
  "Direct integration with 25+ UAE banks",
  "100% compliance guaranteed",
  "Dedicated advisor throughout the process",
  "Golden Visa & PRO services in-house",
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-background overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      {/* ── Centered Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4 mb-16 lg:mb-20"
      >
       
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
          About <span className="text-primary">Grow Infinity</span>
        </h2>
       
      </motion.div>

      {/* ── Split Layout ── */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[620px] max-w-[1600px] mx-auto gap-0">

        {/* LEFT — Full-bleed image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative lg:w-1/2 min-h-[340px] lg:min-h-0 rounded-2xl overflow-hidden"
        >
          {/* Image fills entire left half */}
          <div className="absolute inset-0 overflow-hidden group rounded-2xl">
            <img
              src="/about-office.png"
              alt="Grow Infinity Dubai Office"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Overlay gradients */}
            
          </div>

          {/* Top-left: section tag */}
          <div className="absolute top-7 left-7 z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40">
              Our Office
            </span>
          </div>

          {/* Top-right: floating stat badge */}
          

          {/* Bottom-left: location info */}
          <div className="absolute bottom-7 left-7 z-10">
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1.5">
              Our Home Base
            </div>
            <div className="text-white text-xl font-black tracking-tight">Dubai, UAE</div>
            <div className="text-white/50 text-xs mt-0.5">Business Bay · Downtown · DIFC</div>
          </div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-14 py-10 lg:py-0"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
              Our Story
            </span>
          </div>

          {/* Sub-heading */}
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
            Your Trusted Partner for{" "}
            <span className="text-[#5B9EC9]">Global Expansion</span>
          </h3>
  
          {/* Body copy */}
          <p className="text-foreground/60 leading-relaxed mb-8 text-base max-w-md">
            Grow Infinity helps entrepreneurs and businesses expand to new markets with ease. We provide professional advice, handle your paperwork, and ensure your business is set up for long-term success.
          </p>

          {/* Checklist */}
          <ul className="space-y-2.5 mb-9">
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex items-center gap-3 text-foreground/75 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 mb-9">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -3, borderColor: "rgba(var(--primary-rgb), 0.25)" }}
                  className="glass border border-foreground/5 rounded-2xl p-4 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary mb-2 opacity-80" />
                  <div className="text-2xl font-black text-foreground">{stat.value}</div>
                  <div className="text-[10px] text-foreground/45 font-bold uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <Link href="/about">
            <motion.div
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-primary font-black text-sm uppercase tracking-wider cursor-pointer group"
            >
              <span>Learn Our Full Story</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
