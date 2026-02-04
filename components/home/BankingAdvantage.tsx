"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, TrendingUp, Users, Building2, Zap, Award, Lock } from 'lucide-react';

const advantages = [
  {
    icon: Shield,
    title: 'Banking-First Approach',
    desc: 'Pre-approved banking partnerships before license issuance',
    color: 'from-primary to-primary-dark'
  },
  {
    icon: TrendingUp,
    title: 'Risk Assessment',
    desc: 'Complete risk appetite analysis with partner banks',
    color: 'from-gold to-gold-dark'
  },
  {
    icon: Users,
    title: 'Profile Mapping',
    desc: 'Executive background verification and compliance',
    color: 'from-primary-light to-primary'
  },
  {
    icon: Building2,
    title: 'Activity Audit',
    desc: 'Business activity suitability check with 25+ banks',
    color: 'from-gold-light to-gold'
  }
];

const bankingStats = [
  { label: 'Banking Partners', value: '25+', icon: Building2 },
  { label: 'Approval Rate', value: '94%', icon: Award },
  { label: 'Avg. Processing', value: '3 Days', icon: Zap },
  { label: 'Compliance Score', value: '100%', icon: Lock }
];

const processSteps = [
  { label: 'Banking Eligibility Check', status: 'Pre-Approval', progress: 100 },
  { label: 'Document Verification', status: 'Automated', progress: 100 },
  { label: 'Bank Introduction', status: 'VIP Channel', progress: 95 },
  { label: 'IBAN Activation', status: '94% Success', progress: 94 }
];

export function BankingAdvantage() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-foreground/[0.02] to-background overflow-hidden">
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
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/10">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">Banking Excellence</span>
          </div>
          
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight uppercase leading-tight max-w-4xl mx-auto">
            Any Firm Can Get You A License. <br />
            <span className="text-gradient-infinity px-2">We Ensure You Can Bank</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            In the UAE, a business license is only as good as the bank account attached to it. Our unique "Banking-First" methodology begins with your banking eligibility.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left - Advantages Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 tracking-tight">
                The Banking-First Philosophy
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We pre-vet your business activity with our network of banking partners before we even file for your name reservation. This saves you weeks of frustration and ensures operational cash flow from day one.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group glass p-6 rounded-2xl border border-foreground/5 hover:border-primary/20 transition-all duration-500 hover:shadow-xl"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-black text-foreground mb-2 uppercase tracking-wider">
                    {advantage.title}
                  </h4>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    {advantage.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Process Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass p-8 lg:p-10 rounded-3xl border border-foreground/5 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-foreground/5">
                <div>
                  <h3 className="text-2xl font-black text-foreground tracking-tight mb-1">
                    Operational Excellence
                  </h3>
                  <p className="text-sm text-foreground/60">Real-time processing metrics</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-gold flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-6 mb-8">
                {processSteps.map((step, index) => (
                  <div key={step.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-foreground/70">
                        {step.label}
                      </span>
                      <span className="text-xs font-black text-primary">
                        {step.status}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${step.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-gold rounded-full relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Badge */}
              <div className="pt-6 border-t border-foreground/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-foreground/40">
                      Certified Process
                    </div>
                    <div className="text-xs font-black text-foreground">
                      ISO 9001:2015
                    </div>
                  </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-foreground/40">
                  Standardized
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Banking Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {bankingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-foreground/5 text-center hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass p-6 lg:p-8 rounded-2xl border border-foreground/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-foreground mb-1">
                  Ready for Banking Success?
                </div>
                <div className="text-sm text-foreground/60">
                  Get pre-approved with our banking partners
                </div>
              </div>
            </div>
            <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-black rounded-xl text-sm uppercase tracking-wider transition-all duration-500 button-premium whitespace-nowrap">
              Start Banking Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
