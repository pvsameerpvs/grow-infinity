"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Zap,
  Shield,
  Crown,
  Briefcase,
  Globe2,
  TrendingUp,
  Award,
  CheckCircle2,
  Clock,
  Users,
  Building2,
} from "lucide-react";

const mainFeatures = [
  {
    title: "Banking-First Approach",
    desc: "Direct partnerships with 25+ UAE banks ensure your corporate account opens seamlessly—no rejections, no delays.",
    icon: Briefcase,
    color: "from-primary to-primary-dark",
    stats: "100% Bank Approval",
    image: "/why-banking.png",
  },
  {
    title: "Speed & Precision",
    desc: "Government API integrations and VIP channels deliver your complete setup in 7 days—65% faster than industry average.",
    icon: Zap,
    color: "from-gold to-gold-dark",
    stats: "7-Day Setup",
    image: "/why-speed.png",
  },
  {
    title: "Total Compliance",
    desc: "ISO 9001:2015 certified processes ensure every license, visa, and document meets exact UAE regulatory standards.",
    icon: Shield,
    color: "from-primary to-primary-light",
    stats: "100% Compliant",
    image: "/why-compliance.png",
  },
  {
    title: "Elite Network Access",
    desc: "Tap into our private network of sovereign wealth advisors, Tier-1 banks, and industry leaders across the UAE.",
    icon: Crown,
    color: "from-gold-dark to-gold",
    stats: "VIP Access",
    image: "/why-network.png",
  },
];

const benefits = [
  { icon: CheckCircle2, text: "Zero Hidden Fees - Transparent Pricing" },
  { icon: Clock, text: "Dedicated Account Manager 24/7" },
  { icon: Users, text: "Multi-Language Support Team" },
  { icon: Building2, text: "All Free Zones & Mainland Options" },
  { icon: Globe2, text: "International Business Setup Expertise" },
  { icon: TrendingUp, text: "High-Growth Strategy Advisory" },
];

export function WhyChooseUs() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="relative w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden group shadow-2xl bg-background border border-foreground/5">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full opacity-50" />
          
          {/* Subtle Animated Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }} />
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Distinct Advantage
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight max-w-4xl mx-auto">
              Why Visionaries Choose Grow Infinity
            </h2>

            <p className="text-base text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              We don't just register companies. We build high-performance
              ventures with priority banking and agile infrastructure for the
              next generation of global founders.
            </p>
          </motion.div>

          {/* Main Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
          >
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                style={{ 
                  perspective: 1000,
                }}
                whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, rotateX: 2 }}
                className="group relative overflow-hidden rounded-[2.5rem] h-[400px]"
              >
                {/* Background Image with Deep Parallax */}
                <div className="absolute inset-0 z-0 scale-110 group-hover:scale-125 transition-transform duration-[1.5s] ease-out">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Multi-layered Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                </div>

                <div className="relative h-full p-8 lg:p-12 flex flex-col justify-end z-10">
                  {/* Content Container with Glassmorphism */}
                  <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6 -mt-14">
                      <div className={`w-12 h-[2px] bg-gradient-to-r ${feature.color}`} />
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">0{index + 1}</span>
                    </div>



                    <h3 className="text-2xl lg:text-3xl font-black mb-3 tracking-tight text-white group-hover:text-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </div>

                {/* Animated Inner Glow */}
                <div className="absolute inset-0 border-[1px] border-white/0 group-hover:border-white/20 rounded-[2.5rem] transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative group/package">
              {/* Premium Card Border Animation */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-gold to-primary rounded-[2.5rem] lg:rounded-[3.5rem] opacity-0 group-hover/package:opacity-30 blur-md transition-opacity duration-1000" />
              
              <div className="glass p-8 lg:p-14 rounded-[2.5rem] lg:rounded-[3.5rem] border border-foreground/5 relative overflow-hidden backdrop-blur-3xl bg-background/40">
                {/* Background Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
                    <div className="flex items-center gap-5">
                      <div className="w-2 h-16 bg-gradient-to-b from-primary to-primary-dark rounded-full group-hover/package:scale-y-110 transition-transform duration-500" />
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-1">
                          Enterprise Launch Protocol
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">Global Status: Priority</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden lg:block h-12 w-px bg-foreground/10" />
                    
                    <div className="flex flex-col items-end">
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">Exclusive Membership</p>
                      <div className="text-3xl font-black text-foreground tracking-tighter">PLATINUM <span className="text-gold">ACCESS</span></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.text}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center gap-4 p-5 rounded-2xl bg-foreground/[0.03] border border-foreground/5 hover:border-primary/20 hover:bg-white dark:hover:bg-black transition-all group/benefit cursor-default shadow-sm hover:shadow-2xl hover:shadow-primary/5"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors leading-tight">
                            {benefit.text}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
