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
  { 
    city: 'London', 
    country: 'UK',
    address: 'Mayfair, Park Lane', 
    status: 'Strategic Advisory Hub',
    color: 'from-gold to-gold-dark',
    icon: TrendingUp,
    clients: '1,200+',
    position: { top: '30%', left: '48%' },
    description: 'European headquarters providing cross-border business structuring and international expansion services'
  },
  { 
    city: 'Singapore', 
    country: 'SG',
    address: 'Marina Bay Financial Centre', 
    status: 'Asia-Pacific Operations',
    color: 'from-primary-light to-primary',
    icon: Users,
    clients: '800+',
    position: { top: '55%', left: '75%' },
    description: 'Tech and fintech specialization hub serving the rapidly growing Asian markets'
  }
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
              <Globe2 className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Global Network</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </motion.div>
          
          <h2 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 tracking-tight uppercase leading-[0.95]">
            A Network <br />
            <span className="relative inline-block">
              <span className="text-gradient-infinity">Without Borders</span>
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
            Elite business setup requires a <span className="text-primary font-bold">global perspective</span>. Our strategically positioned offices across major financial hubs ensure seamless cross-border compliance, 24/7 support, and localized expertise for your international expansion.
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
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Connection: London to Dubai */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M 48% 30% Q 54% 35% 60% 45%"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,4"
            />
            
            {/* Connection: Dubai to Singapore */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.7 }}
              d="M 60% 45% Q 67% 48% 75% 55%"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,4"
            />
            
            {/* Connection: Singapore to London (completing the triangle) */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.9 }}
              d="M 75% 55% Q 60% 40% 48% 30%"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,4"
            />

            {/* Animated Dots traveling along paths */}
            <motion.circle
              r="4"
              fill="var(--color-primary)"
              opacity="0.9"
            >
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M 48% 30% Q 54% 35% 60% 45%"
              />
            </motion.circle>

            <motion.circle
              r="4"
              fill="var(--color-gold)"
              opacity="0.9"
            >
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M 60% 45% Q 67% 48% 75% 55%"
              />
            </motion.circle>

            <motion.circle
              r="4"
              fill="var(--color-primary)"
              opacity="0.9"
            >
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                path="M 75% 55% Q 60% 40% 48% 30%"
              />
            </motion.circle>

            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="var(--color-gold)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0.6" />
              </linearGradient>
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
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass p-8 rounded-3xl border border-foreground/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${location.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${location.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <location.icon className="w-9 h-9 text-white" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl bg-white/30"
                />
              </div>

              {/* Location Info */}
              <div className="relative mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-3xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {location.city}
                  </h3>
                  <span className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider rounded-lg">
                    {location.country}
                  </span>
                </div>
                <p className="text-sm text-foreground/60 mb-3 font-medium">
                  {location.address}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-xl">
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-gold"
                  />
                  <span className="text-xs font-black text-gold uppercase tracking-wider">
                    {location.status}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="relative flex items-center justify-between pt-4 border-t border-foreground/10">
                <div className="flex items-center gap-2 text-foreground/40 group-hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Active Office</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-foreground">{location.clients}</div>
                  <div className="text-[9px] font-bold text-foreground/40 uppercase tracking-wider">Clients</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative glass p-10 lg:p-16 rounded-[3rem] border border-foreground/10 overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(45deg, var(--color-primary) 25%, transparent 25%, transparent 75%, var(--color-gold) 75%, var(--color-gold))',
              backgroundSize: '60px 60px'
            }}
          />

          <div className="relative grid md:grid-cols-3 gap-10 lg:gap-16">
            {[
              { value: '25+', label: 'Financial Hubs', icon: Globe2, color: 'text-primary' },
              { value: '24/7', label: 'Global Support', icon: Zap, color: 'text-gold' },
              { value: '100%', label: 'Cross-Border Compliance', icon: Sparkles, color: 'text-primary' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center md:text-left group cursor-pointer"
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </motion.div>
                </div>
                <div className="text-5xl lg:text-6xl font-black text-foreground mb-2 group-hover:text-gradient-infinity transition-all">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
