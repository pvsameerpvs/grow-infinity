"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Building2, Users, CheckCircle2, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Building2, value: '5,000+', label: 'Companies Established', color: 'text-primary' },
  { icon: Users, value: '98%', label: 'Client Retention', color: 'text-gold' },
  { icon: TrendingUp, value: '25+', label: 'Banking Partners', color: 'text-primary' },
  { icon: CheckCircle2, value: '100%', label: 'Success Rate', color: 'text-gold' },
];

const certifications = [
  { name: 'ISO 9001:2015', subtitle: 'Quality Management' },
  { name: 'DMCC Approved', subtitle: 'Corporate Service Provider' },
  { name: 'DED Licensed', subtitle: 'Business Setup Authority' },
];

const partners = [
  'DED', 'IFZA', 'DMCC', 'RAKEZ', 'MEYDAN', 'JAFZA', 'ADGM', 'DIFC'
];

export function TrustBadges() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-foreground/5 bg-gradient-to-b from-background via-foreground/[0.01] to-background overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-foreground/5 hover:border-primary/20 transition-all duration-500 group"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-foreground mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/20" />
            <p className="text-center text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] mx-4">
              Certifications & Accreditations
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-500 text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div className="text-sm font-black text-foreground mb-1">
                  {cert.name}
                </div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-foreground/40">
                  {cert.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/20" />
            <p className="text-center text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] mx-4">
              Directly Licensed by & Partnered with
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <span className="text-2xl lg:text-3xl font-black text-foreground/30 group-hover:text-primary transition-all duration-500 tracking-tighter">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full border border-primary/10">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-foreground/60">
              Trusted by Fortune 500 companies and global entrepreneurs
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
