"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Phone,
  Calculator,
  CheckCircle2,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";

const guarantees = [
  { icon: Zap, text: "Setup in 7 Days" },
  { icon: Shield, text: "100% Compliance" },
  { icon: CheckCircle2, text: "Priority Banking" },
];

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/8 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-foreground/8"
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-foreground/[0.02]" />

          {/* Top gold accent bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative z-10 px-8 sm:px-14 lg:px-20 py-16 lg:py-24 text-center">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-7"
            >
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                Ready to Launch
              </span>
              <div className="h-px w-8 bg-primary/60" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight max-w-3xl mx-auto mb-6"
            >
              Level Up Your{" "}
              <span className="text-primary">UAE Presence</span> Today
            </motion.h2>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-foreground/50 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Join 500+ founders who launched their global vision with our
              agile infrastructure and priority advisory.
            </motion.p>

            {/* Guarantees row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-12"
            >
              {guarantees.map((g, i) => {
                const Icon = g.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                      {g.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.55 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Primary */}
              <Link href="/cost-calculator">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-lg shadow-primary/25 cursor-pointer button-premium"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Get Instant Quote</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.div>
              </Link>

              {/* Secondary */}
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 px-8 py-4 rounded-2xl border border-foreground/10 hover:border-foreground/20 bg-foreground/[0.02] hover:bg-foreground/[0.05] font-black uppercase tracking-widest text-sm text-foreground transition-all duration-300 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Book Consultation</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Fine print */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/20"
            >
              No commitment required · Free initial consultation · Results in 7 days
            </motion.p>

          </div>

          {/* Bottom gold accent bar */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
