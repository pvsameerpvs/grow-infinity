"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  ShieldCheck,
  Building2,
  Users,
  Clock,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";



const certifications = [
  {
    name: "ISO 9001:2015",
    subtitle: "Quality Management",
    icon: Trophy,
  },
  {
    name: "DMCC Approved",
    subtitle: "Corporate Service Provider",
    icon: Award,
  },
  {
    name: "DED Licensed",
    subtitle: "Business Setup Authority",
    icon: ShieldCheck,
  },
];

const partners = [
  { name: "DED", fullName: "Dubai Economic Department" },
  { name: "IFZA", fullName: "International Free Zone Authority" },
  { name: "DMCC", fullName: "Dubai Multi Commodities Centre" },
  { name: "RAKEZ", fullName: "Ras Al Khaimah Economic Zone" },
  { name: "MEYDAN", fullName: "Meydan Free Zone" },
  { name: "JAFZA", fullName: "Jebel Ali Free Zone" },
  { name: "ADGM", fullName: "Abu Dhabi Global Market" },
  { name: "DIFC", fullName: "Dubai International Financial Centre" },
];

export function TrustBadges() {
  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/5 blur-[160px] rounded-full pointer-events-none" />

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
              Trust & Excellence
            </span>
            <div className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight leading-tight max-w-3xl mx-auto">
            The Modern Way to{" "}
            <span className="text-primary">Launch in UAE</span>
          </h2>
          <p className="text-base text-foreground/55 max-w-2xl mx-auto leading-relaxed">
            We&apos;ve redesigned the business setup experience for modern entrepreneurs —
            agile, transparent, and built for speed.
          </p>
        </motion.div>



        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          {/* Label */}
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-px flex-1 max-w-[80px] bg-foreground/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/35">
              Certifications & Accreditations
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-foreground/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group relative flex flex-col items-center text-center p-8 rounded-3xl glass border border-foreground/5 hover:border-primary/20 transition-all overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Check badge */}
                  <div className="absolute top-5 right-5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>

                  <div className="font-black text-base text-foreground mb-1 relative">{cert.name}</div>
                  <div className="text-xs text-foreground/40 font-bold uppercase tracking-wider relative">{cert.subtitle}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Partners Marquee ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-px flex-1 max-w-[80px] bg-foreground/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/35">
              Directly Licensed By & Partnered With
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-foreground/10" />
          </div>

          <div className="relative flex w-full overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex items-center gap-14 lg:gap-20 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
            >
              {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
                <div key={`${partner.name}-${i}`} className="group flex-shrink-0 text-center cursor-default">
                  <span className="text-2xl lg:text-3xl font-black text-foreground/20 group-hover:text-foreground/60 transition-colors duration-300 tracking-tighter whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
