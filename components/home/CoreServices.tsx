"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  CreditCard,
  Star,
  Receipt,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/constants/services";

const CORE_SLUGS = [
  "mainland-company-formation",
  "free-zone-company-setup",
  "corporate-bank-account-uae",
  "golden-visa-uae",
  "corporate-tax-uae",
  "pro-services-uae",
];

const iconMap: Record<string, any> = {
  "mainland-company-formation": Building2,
  "free-zone-company-setup": Landmark,
  "corporate-bank-account-uae": CreditCard,
  "golden-visa-uae": Star,
  "corporate-tax-uae": Receipt,
  "pro-services-uae": Briefcase,
};

const colorMap: Record<string, string> = {
  "mainland-company-formation": "from-blue-500/20 to-blue-600/5",
  "free-zone-company-setup": "from-emerald-500/20 to-emerald-600/5",
  "corporate-bank-account-uae": "from-[#5B9EC9]/20 to-[#5B9EC9]/5",
  "golden-visa-uae": "from-yellow-500/20 to-yellow-600/5",
  "corporate-tax-uae": "from-purple-500/20 to-purple-600/5",
  "pro-services-uae": "from-rose-500/20 to-rose-600/5",
};

const iconColorMap: Record<string, string> = {
  "mainland-company-formation": "text-[#5B9EC9]",
  "free-zone-company-setup": "text-emerald-500",
  "corporate-bank-account-uae": "text-[#4A8EB9]",
  "golden-visa-uae": "text-[#5B9EC9]",
  "corporate-tax-uae": "text-purple-600",
  "pro-services-uae": "text-[#5B9EC9]",
};

const badgeColorMap: Record<string, string> = {
  "mainland-company-formation": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "free-zone-company-setup": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "corporate-bank-account-uae": "bg-[#5B9EC9]/10 text-[#5B9EC9] border-[#5B9EC9]/20",
  "golden-visa-uae": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "corporate-tax-uae": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "pro-services-uae": "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

const services = CORE_SLUGS.map((slug, i) => {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    ...service,
    icon: iconMap[slug] || Building2,
    desc: service.description[0]?.slice(0, 120) + "...",
    gradient: colorMap[slug],
    iconColor: iconColorMap[slug],
    badgeColor: badgeColorMap[slug],
    number: String(i + 1).padStart(2, "0"),
  };
}).filter(Boolean) as any[];

export function CoreServices() {
  return (
    <section id="services" className="relative py-2 lg:py-4 bg-background overflow-hidden">
      {/* Background ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#5B9EC9]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-gold">
              Core Expertise
            </span>
            <div className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight leading-tight max-w-3xl mx-auto">
            Our <span className="text-gold">Key Services</span>
          </h2>
          <p className="text-foreground/60 text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to set up and grow your business in the UAE, simplified and handled by experts.
          </p>
        </motion.div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
              >
                <Link href={`/${service.slug}`} className="block h-full group">
                  <div className="relative h-full flex flex-col p-7 rounded-3xl border border-foreground/5 hover:border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-400 overflow-hidden">

                    {/* Gradient glow top-right */}
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${service.gradient} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    {/* Top row: icon + number */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-foreground/5 group-hover:bg-foreground/8 flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                        <Icon className={`w-5 h-5 ${service.iconColor}`} strokeWidth={1.8} />
                      </div>
                      <span className="text-[10px] font-black text-foreground/15 tracking-widest">
                        {service.number}
                      </span>
                    </div>

                    {/* Badge */}
                    {service.badge && (
                      <div className={`inline-flex self-start mb-3 px-2.5 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest ${service.badgeColor}`}>
                        {service.badge}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-black text-foreground mb-3 leading-snug tracking-tight group-hover:text-foreground transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-foreground/45 leading-relaxed flex-1 mb-6">
                      {service.desc}
                    </p>

                    {/* CTA arrow */}
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-foreground/25 group-hover:text-primary transition-all duration-300">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    {/* Bottom border line that animates */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#5B9EC9] to-transparent transition-all duration-500 rounded-b-3xl" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-foreground/35 hover:text-[#5B9EC9] transition-colors font-black uppercase tracking-[0.3em] text-[10px] group"
          >
            View All Specialized Solutions
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
