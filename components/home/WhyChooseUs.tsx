"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Crown } from 'lucide-react';

const features = [
  {
    title: 'Precision Execution',
    desc: 'No guesswork. We use pre-vetted structures that are guaranteed to meet UAE regulatory and banking standards.',
    icon: <Target className="w-8 h-8" />,
    color: 'bg-blue-500/10'
  },
  {
    title: 'Accelerated Timeline',
    desc: 'Our direct government API integrations and VIP banking channels cut setup time by up to 65%.',
    icon: <Zap className="w-8 h-8" />,
    color: 'bg-gold/10'
  },
  {
    title: 'Asset Security',
    desc: 'Advanced corporate structuring to ensure your global assets remain protected and your legacy secure.',
    icon: <Shield className="w-8 h-8" />,
    color: 'bg-primary/10'
  },
  {
    title: 'Elite Network',
    desc: 'Access our private circle of Tier-1 banks, sovereign wealth advisors, and local industry titans.',
    icon: <Crown className="w-8 h-8" />,
    color: 'bg-purple-500/10'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Distinct Advantage
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter leading-none">
            Why Visionaries Choose <br /><span className="text-primary italic">Grow Infinity</span>
          </h2>
          <p className="text-xl text-foreground/40 font-medium">
            We don't just register companies. We architect stable, bankable, and scalable corporate empires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass rounded-[3rem] border-foreground/5 relative group overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-foreground">{feature.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed font-medium">
                {feature.desc}
              </p>
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
