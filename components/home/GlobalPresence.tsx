"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, MapPin, Building2, Users, TrendingUp, Sparkles, Zap, Network } from 'lucide-react';

const locations = [
  { 
    city: 'Dubai', 
    country: 'UAE',
    address: 'Business Bay, Downtown Dubai', 
    status: 'Global Headquarters',
    color: 'from-primary to-primary-dark',
    icon: Building2,
    clients: '2,500+',
    position: { top: '45%', left: '60%' },
    description: 'Our flagship office serving the entire MENA region with comprehensive business setup solutions'
  },
  
];

export function GlobalPresence() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-background via-foreground/[0.02] to-background overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gold/20 blur-[150px] rounded-full" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full mb-8 border border-primary/20 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <MapPin className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Strategic Presence</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </motion.div>
          
          <h2 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 tracking-tight uppercase leading-[0.95]">
            Strategic Hub <br />
            <span className="relative inline-block">
              <span className="text-gradient-infinity">In Dubai</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-gold to-primary rounded-full"
              />
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-medium">
            Our flagship headquarters in Dubai serves as a premier <span className="text-primary font-bold">global financial gateway</span>. Strategically positioned at the crossroads of East and West, we provide seamless business setup solutions and localized expertise for your international growth.
          </p>
        </motion.div>

        {/* Interactive World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 h-[500px] glass rounded-[3rem] border border-foreground/10 overflow-hidden"
        >
          {/* Real World Map Image Background */}
          <div className="absolute inset-0 opacity-[0.15]">
            <img 
              src="/world-map.png" 
              alt="World Map"
              className="w-full h-full object-cover object-center"
              style={{ filter: 'grayscale(100%) contrast(1.2)' }}
            />
          </div>

          {/* Network Grid Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Animated Network Connections */}
          {/* Animated Glow on Hub */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.circle
              cx="60%"
              cy="45%"
              r="100"
              fill="url(#hubGlow)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
            />
            
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          {/* Location Pins */}
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                position: 'absolute',
                top: location.position.top,
                left: location.position.left,
                transform: 'translate(-50%, -50%)'
              }}
              className="relative z-10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Outer Pulsing Ring */}
              <motion.div
                animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className={`absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br ${location.color} -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`}
              />
              
              {/* Secondary Ring */}
              <motion.div
                animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                className={`absolute inset-0 w-24 h-24 rounded-full border-2 border-primary -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`}
              />
              
              {/* Main Pin */}
              <motion.div
                whileHover={{ scale: 1.3, rotate: 5 }}
                className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${location.color} flex items-center justify-center cursor-pointer shadow-2xl border-4 border-background z-10`}
              >
                <location.icon className="w-10 h-10 text-white" />
                
                {/* Inner glow */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-2 rounded-full bg-white/20"
                />
              </motion.div>

              {/* Enhanced Tooltip on Hover */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="absolute top-full mt-6 left-1/2 -translate-x-1/2 glass px-6 py-5 rounded-2xl border border-primary/30 whitespace-nowrap shadow-2xl z-20 min-w-[250px]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${location.color} flex items-center justify-center`}>
                        <location.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-base font-black text-foreground">{location.city}, {location.country}</div>
                        <div className="text-xs text-primary font-bold">{location.status}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-foreground/10">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="text-xs font-bold text-foreground/60">{location.clients} Active Clients</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Locations Grid */}
        

        {/* Bottom Stats - Enhanced */}
        
      </div>
    </section>
  );
}
