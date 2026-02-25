"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  Calculator,
  ShieldCheck,
  Users2,
  Globe,
  ArrowRight,
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
  "corporate-bank-account-uae": Calculator,
  "golden-visa-uae": ShieldCheck,
  "corporate-tax-uae": Users2,
  "pro-services-uae": Globe,
};

const services = CORE_SLUGS.map((slug) => {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    ...service,
    icon: iconMap[slug] || Building2,
    desc: service.description[0],
  };
}).filter(Boolean) as any[];

export function CoreServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-[#C49A45]/10"
          >
            <div className="w-2 h-2 rounded-full bg-[#C49A45] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-[#C49A45]">
              Core Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Strategic Solutions for Global Visionaries
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/50 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We provide the critical infrastructure, priority banking, and agile licensing frameworks that tech-forward founders demand for rapid UAE expansion.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="group relative"
              >
                <Link href={`/${service.slug}`} className="block h-full">
                  <div className="h-full glass-light dark:glass-dark p-8 rounded-[2rem] border border-foreground/5 hover:border-[#C49A45]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C49A45]/5 flex flex-col items-start text-left">
                    <div className="w-14 h-14 rounded-2xl bg-[#C49A45]/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#C49A45] transition-all duration-500">
                      <Icon className="w-6 h-6 text-[#C49A45] group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#C49A45] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-foreground/50 leading-relaxed font-medium mb-8">
                      {service.desc}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#C49A45] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                      Explore Service <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link href="/services" className="inline-flex items-center gap-3 text-foreground/40 hover:text-[#C49A45] transition-colors font-bold uppercase tracking-[0.3em] text-[10px]">
            View All Specialized Solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
