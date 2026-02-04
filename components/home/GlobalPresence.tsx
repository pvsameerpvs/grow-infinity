"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MapPin } from 'lucide-react';

export function GlobalPresence() {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full" />
            <div className="relative rounded-[4rem] overflow-hidden shadow-3xl border border-foreground/5 bg-foreground/5 aspect-[4/5] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Global Corporate Presence" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass p-8 rounded-3xl border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Globe2 className="text-white w-8 h-8" />
                    <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Global Strategic Desk</span>
                  </div>
                  <p className="text-white font-bold text-lg leading-tight">
                    Operating across 25+ global financial hubs to bridge the gap between your home market and the UAE.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-gold rounded-full" />
              <h3 className="text-gold font-black uppercase tracking-[0.3em] text-xs">Unmatched Connectivity</h3>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-10 leading-[0.9] tracking-tighter">
              A Network <br /><span className="text-primary italic">Without Borders.</span>
            </h2>
            <p className="text-xl text-foreground/50 mb-12 max-w-lg leading-relaxed font-medium">
              Elite business setup requires a global perspective. Our presence in London, Singapore, New York, and Riyadh ensures seamless cross-border compliance.
            </p>
            
            <div className="space-y-10">
              {[
                { city: 'Dubai Headquarters', address: 'The Exchange Tower, Business Bay', status: 'Core Operations' },
                { city: 'London Desk', address: 'Park Lane, Mayfair', status: 'Strategic Advisory' },
                { city: 'Singapore Hub', address: 'Marina Bay Financial Centre', status: 'Tech & Fintech' },
              ].map((location, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="text-xl font-black text-foreground tracking-tight">{location.city}</h4>
                      <span className="px-2 py-0.5 bg-gold/10 text-gold text-[8px] font-black uppercase tracking-widest rounded">{location.status}</span>
                    </div>
                    <p className="text-foreground/40 text-sm font-medium">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
