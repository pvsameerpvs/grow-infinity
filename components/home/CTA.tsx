"use client";

import React, { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Calculator, ArrowRight, Sparkles, Zap, Phone, ShieldCheck, Globe, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function MagneticButton({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      x.set((clientX - centerX) * 0.35);
      y.set((clientY - centerY) * 0.35);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Link href={href}>
        <div className={cn("relative z-10", className)}>
          {children}
        </div>
      </Link>
    </motion.div>
  );
}

export function CTA() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const particles = useMemo(() => 
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: (i * 13.7 + 7.3) % 100,
      top: (i * 27.1 + 13.9) % 100,
      size: 2 + (i % 4),
      duration: 5 + (i % 6),
      delay: i * 0.2
    })),
    []
  );

  return (
    <section className="relative py-24 lg:py-48 overflow-hidden bg-background">
      {/* Background with deepened shadows and richer gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(29,111,197,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(197,160,48,0.1),transparent_50%)]" />
        
        {/* Parallax Floating Orbs */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full opacity-60"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-gold/15 blur-[150px] rounded-full opacity-60"
        />

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]" 
             style={{ backgroundImage: 'radial-gradient(circle, #c19b4b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Elegant Glow Ring */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-[3rem] opacity-30 blur-[4px]" />
            
            <div className="relative bg-white/[0.03] dark:bg-black/[0.4] backdrop-blur-3xl rounded-[3rem] p-8 lg:p-24 border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
              
              <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-10"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] leading-none">Limitless Potential</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold leading-[0.95] mb-8 text-foreground tracking-tighter"
                  >
                    ARCHITECTING <br />
                    <span className="text-gradient-gold">UAE LEGACIES</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl text-muted-foreground/80 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                  >
                    Experience the pinnacle of corporate advisory. We blend strategic precision with banking excellence to launch your vision in record time.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center lg:justify-start gap-6"
                  >
                    <MagneticButton 
                      href="/cost-calculator"
                      className="group bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-xl shadow-primary/20 button-premium"
                    >
                      <Calculator className="w-6 h-6" />
                      <span className="font-black uppercase tracking-[0.1em] text-sm">Calculate Costs</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </MagneticButton>

                    <MagneticButton 
                      href="/contact"
                      className="px-10 py-5 rounded-2xl border-2 border-border bg-background/50 backdrop-blur-sm hover:bg-border transition-all duration-300 flex items-center gap-4 font-black uppercase tracking-[0.1em] text-sm text-foreground"
                    >
                      <Phone className="w-6 h-6" />
                      Book VIP Call
                    </MagneticButton>
                  </motion.div>
                </div>

                <div className="flex-1 w-full max-w-md lg:max-w-none">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: ShieldCheck, label: "Compliance", val: "100%", color: "text-blue-500", bg: "bg-blue-500/10" },
                      { icon: Globe, label: "Global Reach", val: "50+", color: "text-gold", bg: "bg-gold/10" },
                      { icon: TrendingUp, label: "Growth", val: "∞", color: "text-green-500", bg: "bg-green-500/10" },
                      { icon: Zap, label: "Setup Time", val: "48h", color: "text-primary", bg: "bg-primary/10" },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="p-8 rounded-[2rem] bg-white/[0.04] border border-white/10 hover:border-gold/30 transition-all duration-500 group relative"
                      >
                        <div className={cn("inline-flex p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-500", stat.bg)}>
                          <stat.icon className={cn("w-7 h-7", stat.color)} />
                        </div>
                        <div className="text-4xl font-bold font-oswald text-foreground mb-1 tracking-tight">{stat.val}</div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{stat.label}</div>
                        
                        {/* Internal Glow Effect */}
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 p-6 rounded-3xl glass border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-background ring-4 ring-primary/5 bg-muted overflow-hidden relative group/avatar">
                            <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" className="w-full h-full object-cover transition-transform group-hover/avatar:scale-110" />
                          </div>
                        ))}
                      </div>
                      <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
                      <div>
                        <div className="flex gap-0.5 mb-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Sparkles key={s} className="w-3.5 h-3.5 text-gold fill-gold" />
                          ))}
                        </div>
                        <p className="text-[10px] uppercase font-black tracking-[0.1em] text-muted-foreground">Elite Advisory Network</p>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-xl font-bold font-oswald text-foreground">5,000+</div>
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">Companies Formed</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-gold/10 pointer-events-none"
                  style={{
                    left: `${p.left}%`,
                    top: `${p.top}%`,
                    width: p.size,
                    height: p.size,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: p.delay,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


