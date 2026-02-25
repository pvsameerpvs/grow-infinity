"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Landmark,
  Calculator,
  ShieldCheck,
  Users2,
  Globe,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/constants/services";
import { cn } from "@/lib/utils";

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
    badge: service.badge || "Featured",
    advantages: service.advantages || [],
  };
}).filter(Boolean) as any[];

const AUTO_PLAY_DURATION = 8000; // 8 seconds per service

export function CoreServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, AUTO_PLAY_DURATION);
  };

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[100px] rounded-full opacity-40 -translate-x-1/4 translate-y-1/4" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              Core Expertise
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Everything you need to <span className="text-primary italic">accelerate</span> your venture in the UAE
          </h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto font-medium">
            From seamless company formation to elite banking and compliance, we provide the ultimate infrastructure for global visionaries.
          </p>
        </motion.div>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">
          
          {/* Left Sidebar Navigation - Desktop */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              const Icon = service.icon;
              
              return (
                <button
                  key={service.slug}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPaused(true); // Pause auto-play when user manually selects
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className={cn(
                    "relative group flex items-start gap-5 p-6 rounded-3xl transition-all duration-500 text-left border overflow-hidden",
                    isActive 
                      ? "bg-white dark:bg-white/5 border-primary/20 shadow-xl shadow-primary/5" 
                      : "bg-transparent border-transparent hover:bg-foreground/[0.02] hover:border-foreground/5"
                  )}
                >
                  {/* Progress Line */}
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-primary z-20"
                      initial={{ width: 0 }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{ 
                        duration: isPaused ? 0 : AUTO_PLAY_DURATION / 1000, 
                        ease: "linear" 
                      }}
                    />
                  )}

                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                    isActive 
                      ? "bg-primary text-white scale-110 shadow-lg shadow-primary/30" 
                      : "bg-foreground/5 text-foreground/40 group-hover:bg-primary/10 group-hover:text-primary"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className={cn(
                      "text-base font-black tracking-tight transition-colors duration-300",
                      isActive ? "text-foreground" : "text-foreground/50 group-hover:text-foreground/80"
                    )}>
                      {service.title}
                    </span>
                    <span className={cn(
                      "text-xs font-medium transition-colors duration-300 line-clamp-1",
                      isActive ? "text-foreground/60" : "text-foreground/30"
                    )}>
                      {service.subtitle || "Enterprise Solution"}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div 
                      layoutId="active-nav-glow"
                      className="absolute inset-0 bg-primary/5 dark:bg-primary/10 -z-10"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Tabs */}
          <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 no-scrollbar -mx-4 px-4 mb-8">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={`mobile-${service.slug}`}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "flex-shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap border",
                    isActive
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                      : "bg-foreground/5 text-foreground/60 border-transparent"
                  )}
                >
                  {service.title}
                </button>
              );
            })}
          </div>

          {/* Right Panel: Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden h-full border-foreground/5"
              >
                {/* Decorative Elements inside Card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row gap-12 items-center h-full">
                  {/* Text Section */}
                  <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-px bg-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{activeService.category}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
                        {activeService.title}
                      </h3>
                      <p className="text-base text-foreground/70 leading-relaxed">
                        {activeService.desc}
                      </p>
                    </div>

                    {/* Key Strategic Advantages */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeService.advantages.slice(0, 4).map((adv: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-foreground/5 hover:border-primary/20 transition-colors group/adv">
                          <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-bold text-foreground/80">{adv}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/${activeService.slug}`}
                        className="button-premium inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest group"
                      >
                        Explore Solution
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="w-full lg:w-[320px] xl:w-[400px] flex-shrink-0">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0, rotate: 2 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative group/img"
                    >
                      {/* Premium Image Frame */}
                      <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-40 group-hover/img:opacity-70 transition-opacity" />
                      
                      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-white/20 shadow-2xl">
                        <img
                          src={activeService.image}
                          alt={activeService.title}
                          className="w-full h-full object-cover transform scale-105 group-hover/img:scale-110 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        
                        {/* Floating Badge on Image */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border-white/20 translate-y-2 group-hover/img:translate-y-0 opacity-0 group-hover/img:opacity-100 transition-all duration-500">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                              <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs font-black text-white uppercase tracking-widest">Premium Service</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
