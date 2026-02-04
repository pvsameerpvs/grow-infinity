"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexander Volkov',
    role: 'CEO, TechNova Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    quote: 'Grow Infinity didnt just set up my company; they fixed my banking trajectory. Their Banking-First approach is the only way to launch in the UAE.'
  },
  {
    name: 'Sarah Al-Mubarak',
    role: 'Founder, Bloom Logistics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    quote: 'The speed and precision were unmatched. I had my mainland license and IBAN ready while other agencies were still doing paperwork.'
  }
];

export function SuccessStories() {
  return (
    <section className="py-32 bg-foreground dark:bg-[#020617] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="w-12 h-1 bg-primary mb-8 rounded-full" />
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
              Legacy <br /><span className="text-gold italic">Success</span> Stories.
            </h2>
            <p className="text-xl text-white/50 font-medium max-w-lg">
              We empower the world's most ambitious entrepreneurs to secure their place in the UAE's economic future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-12 glass rounded-[4rem] border-white/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Quote className="w-32 h-32" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 relative z-10">
                <div className="w-32 h-32 rounded-[2rem] overflow-hidden flex-shrink-0 border-2 border-primary/20">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="flex-1">
                  <p className="text-2xl font-medium leading-relaxed italic mb-8 text-white/80">
                    &quot;{t.quote}&quot;
                  </p>
                  <div>
                    <h4 className="text-xl font-black tracking-tight">{t.name}</h4>
                    <span className="text-gold text-xs font-black uppercase tracking-widest">{t.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
