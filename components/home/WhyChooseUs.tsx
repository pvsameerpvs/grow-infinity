"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  Gauge,
  ShieldCheck,
  Gem,
  CheckCircle2,
  Clock,
  Users,
  Building2,
  Globe2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    id: 0,
    number: "01",
    title: "Banking-First Approach",
    desc: "Direct partnerships with 25+ UAE banks ensure your corporate account opens seamlessly — no rejections, no delays, guaranteed.",
    icon: Landmark,
    stat: "100%",
    statLabel: "Bank Approval Rate",
    image: "/why-banking.png",
    accent: "#C49A45",
  },
  {
    id: 1,
    number: "02",
    title: "Speed & Precision",
    desc: "Government API integrations and VIP processing channels deliver your complete company setup in just 7 days — 65% faster than the industry average.",
    icon: Gauge,
    stat: "7 Days",
    statLabel: "Average Setup Time",
    image: "/why-speed.png",
    accent: "#C49A45",
  },
  {
    id: 2,
    number: "03",
    title: "Total Compliance",
    desc: "ISO 9001:2015 certified processes ensure every license, visa, and document meets exact UAE regulatory standards — zero risk exposure.",
    icon: ShieldCheck,
    stat: "ISO",
    statLabel: "9001:2015 Certified",
    image: "/why-compliance.png",
    accent: "#C49A45",
  },
  {
    id: 3,
    number: "04",
    title: "Elite Network Access",
    desc: "Tap into our private network of sovereign wealth advisors, Tier-1 banks, and industry leaders across the UAE ecosystem.",
    icon: Gem,
    stat: "500+",
    statLabel: "Elite Connections",
    image: "/why-network.png",
    accent: "#C49A45",
  },
];

const benefits = [
  { icon: CheckCircle2, text: "Zero Hidden Fees" },
  { icon: Clock, text: "24/7 Account Manager" },
  { icon: Users, text: "Multi-Language Support" },
  { icon: Building2, text: "All Free Zones & Mainland" },
  { icon: Globe2, text: "International Expertise" },
  { icon: TrendingUp, text: "Growth Strategy Advisory" },
];

export function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary/60" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
              Distinct Advantage
            </span>
            <div className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight leading-tight max-w-3xl mx-auto">
            Why Visionaries Choose{" "}
            <span className="text-primary">Grow Infinity</span>
          </h2>
          <p className="text-base text-foreground/55 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just register companies. We build high-performance ventures with
            priority banking and agile infrastructure.
          </p>
        </motion.div>

        {/* ── Interactive Feature Showcase ── */}
        <div className="flex flex-col lg:flex-row gap-0 mb-16  overflow-hidden min-h-[560px]">

          {/* Left — Tab Selector */}
          <div className="lg:w-[42%] bg-foreground/[0.02] flex flex-col">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isActive = active === i;
              return (
                <motion.button
                  key={f.id}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-start gap-5 p-7 lg:p-8 text-left transition-all duration-300 border-b border-foreground/5 last:border-b-0 cursor-pointer
                    ${isActive ? "bg-foreground/[0.05]" : "hover:bg-foreground/[0.03]"}`}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Active indicator bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-300
                      ${isActive ? "bg-primary scale-y-100" : "bg-transparent scale-y-0"}`}
                  />

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300
                    ${isActive ? "bg-primary text-white" : "bg-foreground/5 text-foreground/40 group-hover:bg-foreground/8 group-hover:text-foreground/60"}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-widest transition-colors
                        ${isActive ? "text-primary" : "text-foreground/25"}`}>
                        {f.number}
                      </span>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center"
                        >
                          <ArrowRight className="w-2.5 h-2.5 text-primary" />
                        </motion.div>
                      )}
                    </div>
                    <h3 className={`font-black text-base lg:text-lg tracking-tight transition-colors
                      ${isActive ? "text-foreground" : "text-foreground/50 group-hover:text-foreground/70"}`}>
                      {f.title}
                    </h3>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-foreground/55 text-sm leading-relaxed mt-2"
                      >
                        {f.desc}
                      </motion.p>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right — Image + Stat reveal */}
          <div className="lg:w-[58%] relative overflow-hidden min-h-[320px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Image */}
                <img
                  src={features[active].image}
                  alt={features[active].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                {/* Stat badge — bottom left */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-8 left-8"
                >
                  <div className="inline-flex flex-col bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
                    <span className="text-4xl font-black text-primary leading-none">
                      {features[active].stat}
                    </span>
                    <span className="text-white/50 text-xs font-bold uppercase tracking-wider mt-1.5">
                      {features[active].statLabel}
                    </span>
                  </div>
                </motion.div>

                {/* Feature title overlay — top left */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="absolute top-8 left-8"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40">
                    {features[active].number} — {features[active].title}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Benefits Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="flex flex-col items-center text-center gap-2.5 p-5 rounded-2xl glass border border-foreground/5 hover:border-primary/20 transition-all cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-bold text-foreground/60 leading-tight">
                  {b.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
