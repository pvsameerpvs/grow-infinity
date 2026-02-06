"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Globe2, TrendingUp, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Target,
    title: 'Precision & Excellence',
    description: 'Every business setup executed with meticulous attention to detail and regulatory compliance.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-First',
    description: 'Leveraging cutting-edge solutions and banking partnerships for seamless company formation.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: '98% retention rate through personalized advisory and dedicated support teams.',
  },
  {
    icon: Globe2,
    title: 'Global Expertise',
    description: 'Deep understanding of international business needs and UAE regulatory landscape.',
  },
];

const milestones = [
  { year: '2015', event: 'Founded in Dubai' },
  { year: '2018', event: 'ISO 9001:2015 Certified' },
  { year: '2020', event: '1,000+ Companies Established' },
  { year: '2024', event: '5,000+ Success Stories' },
];

export function AboutSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">About Grow Infinity</span>
          </div>
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight uppercase">
            Architecting Your <span className="text-gradient-infinity">UAE Success</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            We're not just business setup consultants—we're your strategic partners in building a legacy in the world's most dynamic business hub.
          </p>
        </motion.div>

        {/* Story Section with Images */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
          {/* Left: Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-2 relative h-[300px] lg:h-[400px] rounded-3xl overflow-hidden group border border-white/10"
              >
                <img 
                  src="/about-office.png" 
                  alt="Grow Infinity Dubai Office" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-white font-black text-sm uppercase tracking-wider">Dubai Office</div>
                  <div className="text-white/80 text-xs">Premium Business District</div>
                </div>
              </motion.div>
              
              {/* Two Small Images */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative h-[200px] rounded-2xl overflow-hidden group border border-white/10"
              >
                <img 
                  src="/about-team.png" 
                  alt="Expert Team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-black text-xs uppercase">Expert Team</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative h-[200px] rounded-2xl overflow-hidden group border border-white/10"
              >
                <img 
                  src="/about-dubai.png" 
                  alt="Dubai Skyline" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-black text-xs uppercase">UAE Hub</div>
                </div>
              </motion.div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl border border-primary/10 shadow-2xl hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-black text-foreground">9+ Years</div>
                  <div className="text-xs text-foreground/60 font-bold">Industry Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl lg:text-4xl font-black text-foreground mb-6 tracking-tight">
              Your Gateway to <span className="text-primary">UAE Business Excellence</span>
            </h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-foreground/70 leading-relaxed">
                Since 2015, Grow Infinity has been the trusted partner for entrepreneurs and corporations seeking to establish their presence in the UAE. We've transformed the complex process of business setup into a streamlined, banking-first experience.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Our expertise spans Mainland, Free Zone, and Offshore company formations, backed by strategic partnerships with 25+ leading UAE banks and all major free zones.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Success Rate', value: '100%' },
                { label: 'Avg. Setup Time', value: '7 Days' },
                { label: 'Banking Partners', value: '25+' },
                { label: 'Expert Advisors', value: '40+' },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -5, borderColor: 'rgba(var(--primary-rgb), 0.3)' }}
                  className="glass p-4 rounded-xl border border-foreground/5 transition-colors"
                >
                  <div className="text-2xl font-black text-primary mb-1">{item.value}</div>
                  <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-black rounded-xl text-sm transition-all duration-500 button-premium cursor-pointer"
              >
                <span>Learn Our Story</span>
                <Award className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-black text-center text-foreground mb-12 tracking-tight uppercase"
          >
            Our Core <span className="text-gradient-infinity">Values</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -10, borderColor: 'rgba(var(--primary-rgb), 0.2)' }}
                className="glass p-6 rounded-2xl border border-foreground/5 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-black text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline - Our Journey */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-center text-foreground mb-12 tracking-tight uppercase"
          >
            Our <span className="text-gradient-infinity">Journey</span>
          </motion.h3>
          
          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-gold to-primary -translate-x-1/2" 
              />
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center">
                      {/* Left Side */}
                      <div className="flex-1 flex justify-end pr-8">
                        {index % 2 === 0 && (
                          <div className="max-w-sm w-full">
                            <motion.div 
                              whileHover={{ scale: 1.02, x: -5 }}
                              className="glass p-6 lg:p-8 rounded-2xl border border-foreground/5 hover:border-primary/20 transition-all duration-500 group text-right"
                            >
                              <div className="flex items-center gap-4 mb-4 justify-end">
                                <div className="text-4xl lg:text-5xl font-black text-gradient-infinity">{milestone.year}</div>
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                              </div>
                              <div className="text-base lg:text-lg font-bold text-foreground">{milestone.event}</div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                      
                      {/* Center Dot */}
                      <div className="relative z-10">
                        <motion.div 
                          whileHover={{ scale: 1.5 }}
                          className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold border-4 border-background shadow-xl" 
                        />
                      </div>
                      
                      {/* Right Side */}
                      <div className="flex-1 flex justify-start pl-8">
                        {index % 2 === 1 && (
                          <div className="max-w-sm w-full">
                            <motion.div 
                              whileHover={{ scale: 1.02, x: 5 }}
                              className="glass p-6 lg:p-8 rounded-2xl border border-foreground/5 hover:border-primary/20 transition-all duration-500 group text-left"
                            >
                              <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-4xl lg:text-5xl font-black text-gradient-infinity">{milestone.year}</div>
                              </div>
                              <div className="text-base lg:text-lg font-bold text-foreground">{milestone.event}</div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative">
              {/* Vertical Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-primary" 
              />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Dot */}
                    <div className="absolute left-3 top-6 -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold border-4 border-background shadow-lg" />
                    </div>
                    
                    {/* Content Card */}
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="glass p-6 rounded-2xl border border-foreground/5 hover:border-primary/20 transition-all duration-500"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-3xl font-black text-gradient-infinity">{milestone.year}</div>
                      </div>
                      <div className="text-sm font-bold text-foreground">{milestone.event}</div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
