"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp, 
  Building2, 
  Phone, 
  Calculator,
  Compass,
  Award,
  Users2,
  Lock,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string[];
  advantages: string[];
  sections: {
    title: string;
    content: string | string[];
    image?: string;
  }[];
  image: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  description,
  advantages,
  sections,
  image,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero Animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background selection:bg-primary/30">
      {/* Immersive Background System */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.08)_0%,transparent_50%)]" />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full animate-slow-spin" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse at center, black, transparent)'
          }} 
        />
      </div>

      {/* Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-gold to-primary z-[100] origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Immersive Hero Cover UI */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Parallax Background Cover */}
        <motion.div 
          style={{ 
            opacity: heroOpacity,
            scale: 1.15,
            y: useTransform(scrollYProgress, [0, 0.4], [0, 100])
          }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover scale-110"
            onError={(e) => console.log('Image failed to load:', image)}
          />
          {/* Advanced Mesh Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(var(--primary-rgb),0.1)_0%,transparent_60%)]" />
        </motion.div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              {/* Content Core */}
              <div className="lg:col-span-8 xl:col-span-9">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="inline-flex items-center gap-4 px-4 py-2 rounded-xl glass-light border border-white/10 mb-8"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">{subtitle}</span>
                </motion.div>

                <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tighter uppercase mb-6 max-w-4xl">
                  {title.split(' ').map((word, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "circOut" }}
                      className={cn(
                        "inline-block relative mr-[0.3em] last:mr-0",
                        i === 1 && "text-gradient-infinity"
                      )}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="max-w-xl mt-10 pl-4 border-l-2 border-primary/40"
                >
                  <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-medium">
                    {description[0]}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="mt-12 flex flex-wrap gap-6"
                >
                  <Link href="/contact" className="group">
                    <div className="relative px-10 py-5 bg-primary rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.5)] hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.2s]" />
                      <span className="relative flex items-center gap-3 text-white font-black text-lg uppercase tracking-widest">
                        Initialize
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </div>
                  </Link>
                  <Link href="/cost-calculator">
                    <div className="px-8 py-5 glass border border-foreground/10 text-foreground font-black rounded-2xl text-lg transition-all hover:bg-foreground/5 hover:border-primary/30 flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Calculator className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      Analysis
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Sidebar Stats */}
              <div className="hidden lg:col-span-4 xl:col-span-3 lg:flex flex-col gap-5">
                {[
                  { icon: Shield, label: "Registry", val: "Verified", color: "primary" },
                  { icon: Zap, label: "Banking", val: "Priority", color: "gold" },
                  { icon: Target, label: "Success", val: "100%", color: "primary" }
                ].map((stat, i) => ( stat && stat.icon && stat.label && stat.val && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                    className="p-6 glass rounded-[2rem] border border-white/5 shadow-xl group hover:-translate-x-2 transition-transform duration-500"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                        stat.color === 'gold' ? "bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                      )}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-[9px] uppercase font-black text-foreground/40 tracking-[0.2em] mb-0.5">{stat.label}</div>
                        <div className="text-lg font-black text-foreground uppercase leading-none">{stat.val}</div>
                      </div>
                    </div>
                  </motion.div>
                )))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Ticker */}
      <div className="relative py-12 overflow-hidden border-y border-foreground/5 bg-foreground/[0.02]">
        <div className="container px-4 mx-auto flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2 font-black tracking-tighter text-lg italic uppercase font-oswald text-foreground">
            <Compass className="w-5 h-5" /> DET APPROVED
          </div>
          <div className="flex items-center gap-2 font-black tracking-tighter text-lg italic uppercase font-oswald text-foreground">
            <Lock className="w-5 h-5" /> BANKING READY
          </div>
          <div className="flex items-center gap-2 font-black tracking-tighter text-lg italic uppercase font-oswald text-foreground">
            <Target className="w-5 h-5" /> 0% TAX RISK
          </div>
        </div>
      </div>

      {/* Core Advantages Grid */}
      <section className="py-24 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
              Strategic <span className="text-primary">Advantages</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 glass rounded-[2.5rem] border border-foreground/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-black text-foreground uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {adv}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Feature Sections */}
      <section className="py-20 relative z-10">
        <div className="container px-4 mx-auto">
          <div className="space-y-32">
            {sections.map((section, idx) => (
              <div key={idx} className={cn(
                "flex flex-col gap-12 lg:gap-24 items-center",
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}>
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="flex-1 space-y-8"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-gold font-black text-4xl opacity-20 font-oswald">{String(idx + 1).padStart(2, '0')}</span>
                      <div className="h-px flex-1 bg-foreground/10" />
                    </div>
                    <h3 className="font-oswald text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">
                      {section.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {Array.isArray(section.content) ? (
                      section.content.map((p, pIdx) => (
                        <p key={pIdx} className="text-base md:text-lg text-foreground/60 leading-relaxed font-medium">
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-medium">{section.content}</p>
                    )}
                  </div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm cursor-pointer group"
                  >
                    Learn Protocol
                    <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Media Content */}
                {section.image && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotate: idx % 2 === 0 ? 1 : -1 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="flex-1 w-full"
                  >
                    {/* <div className="relative group p-3 glass rounded-[3rem] border border-foreground/5 shadow-xl">
                      <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-xl group-hover:bg-primary/10 transition-colors" />
                      <div className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-inner">
                        <img 
                          src={section.image} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                        />
                      </div>
                    </div> */}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final "Infinity" CTA */}
      <section className="py-32 relative overflow-hidden bg-foreground dark:bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.3)_0%,transparent_70%)] opacity-30" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center space-y-12"
          >
            <h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter">
              The Path to <br />
              <span className="text-gradient-gold">UAE Dominance</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-medium leading-tight">
              Don't just launch—scale with the infrastructure of tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 60px -15px rgba(212,175,55,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-12 py-6 bg-gold text-white font-black rounded-2xl text-xl uppercase tracking-tighter shadow-2xl flex items-center justify-center gap-3 group"
                >
                  Launch Protocol
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/services" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="w-full sm:w-auto px-10 py-6 glass-dark border border-white/10 text-white font-black rounded-2xl text-lg uppercase tracking-widest"
                >
                  Explore Ecosystem
                </motion.button>
              </Link>
            </div>

            <div className="pt-16 flex flex-wrap justify-center gap-8 text-white/30 font-black uppercase text-xs tracking-[0.4em]">
              <span>Trusted by 5000+ Founders</span>
              <span className="hidden md:inline">•</span>
              <span>100% Success Rate</span>
              <span className="hidden md:inline">•</span>
              <span>0% Tax Liability</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Support Button - Subtle */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-10 right-10 z-[60]"
      >
        <Link href="tel:+971526065777">
          <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-3xl hover:scale-110 transition-transform cursor-pointer group">
            <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            <div className="absolute right-full mr-4 p-4 glass rounded-2xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <span className="text-foreground font-black uppercase tracking-widest text-xs">Priority Hotline</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicePage;
