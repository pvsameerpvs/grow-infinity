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
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-foreground/[0.01] to-background overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/50 transition-all duration-500" />
                {/* Gradient Accent Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>

              <div className="glass-dark p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 h-full relative z-10 backdrop-blur-sm">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-2xl transition-all duration-500`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  {/* Stats Badge */}
                  <div className="absolute -top-2 -right-2 glass px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                    <span className="text-[10px] font-black text-white uppercase tracking-wider">
                      {feature.stats}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-black mb-4 tracking-tight text-white group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed font-medium">
                  {feature.desc}
                </p>

                {/* Decorative Glow */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

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
    </section>
  );
}

