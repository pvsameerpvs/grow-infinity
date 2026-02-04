"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Building2, Users, CheckCircle2, TrendingUp, Sparkles, Trophy } from 'lucide-react';

const stats = [
  { icon: Building2, value: '5,000+', label: 'Companies Established', color: 'text-primary', gradient: 'from-primary to-primary-dark' },
  { icon: Users, value: '98%', label: 'Client Retention', color: 'text-gold', gradient: 'from-gold to-gold-dark' },
  { icon: TrendingUp, value: '25+', label: 'Banking Partners', color: 'text-primary', gradient: 'from-primary-light to-primary' },
  { icon: CheckCircle2, value: '100%', label: 'Success Rate', color: 'text-gold', gradient: 'from-gold-dark to-gold' },
];

const certifications = [
  { 
    name: 'ISO 9001:2015', 
    subtitle: 'Quality Management',
    description: 'Internationally recognized quality standards',
    icon: Trophy
  },
  { 
    name: 'DMCC Approved', 
    subtitle: 'Corporate Service Provider',
    description: 'Official DMCC certification',
    icon: Award
  },
  { 
    name: 'DED Licensed', 
    subtitle: 'Business Setup Authority',
    description: 'Dubai Economic Department licensed',
    icon: Shield
  },
];

const partners = [
  { name: 'DED', fullName: 'Dubai Economic Department' },
  { name: 'IFZA', fullName: 'International Free Zone Authority' },
  { name: 'DMCC', fullName: 'Dubai Multi Commodities Centre' },
  { name: 'RAKEZ', fullName: 'Ras Al Khaimah Economic Zone' },
  { name: 'MEYDAN', fullName: 'Meydan Free Zone' },
  { name: 'JAFZA', fullName: 'Jebel Ali Free Zone' },
  { name: 'ADGM', fullName: 'Abu Dhabi Global Market' },
  { name: 'DIFC', fullName: 'Dubai International Financial Centre' },
];

export function TrustBadges() {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32 border-y border-foreground/10 bg-gradient-to-b from-background via-foreground/[0.02] to-background overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Background Accents */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/20 blur-[120px] rounded-full"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full mb-8 border border-primary/20 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Trust & Excellence</span>
          </motion.div>
          
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight uppercase">
            Trusted by <span className="text-gradient-infinity">Thousands</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our certifications, accreditations, and strategic partnerships with UAE's leading free zones and regulatory bodies speak to our unwavering commitment to excellence, compliance, and client success.
          </p>
        </motion.div>

        {/* Stats Grid - Enhanced */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              <div className="glass p-8 rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <stat.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Value */}
                  <div className="text-4xl lg:text-5xl font-black text-foreground mb-2 tracking-tight group-hover:text-gradient-infinity transition-all">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 blur-2xl -z-10 transition-opacity duration-500 rounded-3xl`} />
            </motion.div>
          ))}
        </div>

        {/* Certifications - Enhanced with Flip Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <p className="text-center text-xs font-black text-foreground/70 uppercase tracking-[0.3em] mx-6">
              Certifications & Accreditations
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                onHoverStart={() => setHoveredCert(index)}
                onHoverEnd={() => setHoveredCert(null)}
                className="group relative"
              >
                <div className="glass p-8 rounded-3xl border border-gold/10 hover:border-gold/30 transition-all duration-500 text-center relative overflow-hidden h-full">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredCert === index ? 1.1 : 1,
                      rotate: hoveredCert === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mx-auto mb-6 shadow-xl"
                  >
                    <cert.icon className="w-10 h-10 text-white" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-white/30"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <div className="text-lg font-black text-foreground mb-2">
                      {cert.name}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-3">
                      {cert.subtitle}
                    </div>
                    
                    {/* Description - Shows on Hover */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredCert === index ? 1 : 0,
                        height: hoveredCert === index ? 'auto' : 0,
                      }}
                      className="text-sm text-foreground/80 overflow-hidden font-medium"
                    >
                      {cert.description}
                    </motion.div>
                  </div>

                  {/* Checkmark Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-dark opacity-0 group-hover:opacity-20 blur-2xl -z-10 transition-opacity duration-500 rounded-3xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners - Animated Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <p className="text-center text-xs font-black text-foreground/70 uppercase tracking-[0.3em] mx-6">
              Directly Licensed by & Partnered with
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-12 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="group cursor-pointer relative"
              >
                <div className="text-center">
                  <span className="text-3xl lg:text-4xl font-black text-foreground/40 group-hover:text-gradient-infinity transition-all duration-500 tracking-tighter">
                    {partner.name}
                  </span>
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 glass px-3 py-2 rounded-lg border border-primary/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                  >
                    <div className="text-xs font-bold text-foreground">{partner.fullName}</div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full border border-primary/20 shadow-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-bold text-foreground">
              Trusted by <span className="text-primary font-black">Fortune 500</span> companies and global entrepreneurs
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
