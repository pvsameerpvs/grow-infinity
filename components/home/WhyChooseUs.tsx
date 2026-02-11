"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Shield, 
  Crown, 
  Briefcase, 
  Globe2, 
  TrendingUp, 
  Award,
  CheckCircle2,
  Clock,
  Users,
  Building2
} from 'lucide-react';

const mainFeatures = [
  {
    title: 'Banking-First Approach',
    desc: 'Direct partnerships with 25+ UAE banks ensure your corporate account opens seamlessly—no rejections, no delays.',
    icon: Briefcase,
    color: 'from-primary to-primary-dark',
    stats: '100% Bank Approval',
    image: '/why-banking.png',
  },
  {
    title: 'Speed & Precision',
    desc: 'Government API integrations and VIP channels deliver your complete setup in 7 days—65% faster than industry average.',
    icon: Zap,
    color: 'from-gold to-gold-dark',
    stats: '7-Day Setup',
    image: '/why-speed.png',
  },
  {
    title: 'Total Compliance',
    desc: 'ISO 9001:2015 certified processes ensure every license, visa, and document meets exact UAE regulatory standards.',
    icon: Shield,
    color: 'from-primary to-primary-light',
    stats: '100% Compliant',
    image: '/why-compliance.png',
  },
  {
    title: 'Elite Network Access',
    desc: 'Tap into our private network of sovereign wealth advisors, Tier-1 banks, and industry leaders across the UAE.',
    icon: Crown,
    color: 'from-gold-dark to-gold',
    stats: 'VIP Access',
    image: '/why-network.png',
  },
];

const benefits = [
  { icon: CheckCircle2, text: 'Zero Hidden Fees - Transparent Pricing' },
  { icon: Clock, text: 'Dedicated Account Manager 24/7' },
  { icon: Users, text: 'Multi-Language Support Team' },
  { icon: Building2, text: 'All Free Zones & Mainland Options' },
  { icon: Globe2, text: 'International Business Setup Expertise' },
  { icon: TrendingUp, text: 'Post-Setup Growth Advisory' },
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden group shadow-2xl bg-white dark:bg-black border border-foreground/5">
        {/* Background Accents */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-primary">Distinct Advantage</span>
            </div>
            
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight uppercase leading-tight">
              Why Visionaries Choose <br />
              <span className="text-gradient-infinity  px-2">Grow Infinity</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-foreground/60 font-medium leading-relaxed">
              We don't just register companies. We architect stable, bankable, and scalable corporate empires in the UAE's most dynamic business hub.
            </p>
          </motion.div>

          {/* Main Features Grid */}
        
          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="glass p-8 lg:p-12 rounded-3xl border border-foreground/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground tracking-tight">
                  Complete Business Setup Package
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors cursor-default">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
