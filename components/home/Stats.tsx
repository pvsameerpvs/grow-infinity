"use client";

import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Zap, TrendingUp, Shield, Globe2 } from 'lucide-react';

const stats = [
  { 
    value: 48, 
    suffix: 'H', 
    label: 'License Issuance',
    icon: Zap,
    color: 'from-primary to-primary-dark',
    description: 'Express Setup'
  },
  { 
    value: 100, 
    suffix: '%', 
    label: 'Foreign Ownership',
    icon: Globe2,
    color: 'from-gold to-gold-dark',
    description: 'Full Control'
  },
  { 
    value: 0, 
    suffix: '%', 
    label: 'Income Tax',
    icon: TrendingUp,
    color: 'from-primary-light to-primary',
    description: 'Tax Benefits'
  },
  { 
    value: 25, 
    suffix: '+', 
    label: 'Global Offices',
    icon: Shield,
    color: 'from-gold-dark to-gold',
    description: 'Worldwide'
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-foreground via-foreground to-background dark:from-[#020617] dark:via-[#0f172a] dark:to-background overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/30 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/2 right-1/4 w-[600px] h-[600px] bg-gold/30 blur-[150px] rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Numbers That <span className="text-gradient-gold">Speak Volumes</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our proven track record of excellence in UAE business setup, corporate services, and banking solutions. These aren't just numbers—they're success stories of entrepreneurs who trusted us with their vision.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative glass p-8 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-white/30"
                  />
                </motion.div>

                {/* Value */}
                <div className="relative mb-3">
                  <div className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/10 rounded-lg mb-3">
                    <span className="text-xs font-black text-white/80 uppercase tracking-wider">
                      {stat.description}
                    </span>
                  </div>
                </div>

                {/* Label */}
                <div className="text-xs font-black text-white/50 uppercase tracking-[0.3em] leading-tight">
                  {stat.label}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-5">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${stat.color}`} />
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl -z-10 transition-opacity duration-500 rounded-[2rem]`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}
