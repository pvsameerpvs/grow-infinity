"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, TrendingUp, Globe2, Shield, Zap, Users, Award, ArrowRight, Phone, DollarSign, Building, Building2, Calculator } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function FreeZoneSolutions() {
  const benefits = [
    {
      icon: DollarSign,
      title: '0% Corporate Tax',
      description: 'Zero corporate and personal income tax for renewable periods of up to 50 years.'
    },
    {
      icon: Globe2,
      title: '100% Ownership',
      description: 'Full ownership of your enterprise without any requirement for a UAE national agent.'
    },
    {
      icon: Shield,
      title: 'Full Repatriation',
      description: 'Transfer 100% of capital and profits back to your home jurisdiction without friction.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Business setup in as little as 48 hours with our specialized digital onboarding.'
    },
    {
      icon: Users,
      title: 'Global Visas',
      description: 'Residency visas for your entire team and family based on selected infrastructure.'
    },
    {
      icon: Building,
      title: 'Elite Ecosystem',
      description: 'Access to world-class office spaces, industrial hubs, and specialized logistics.'
    }
  ];

  const popularFreeZones = [
    {
      name: 'DMCC',
      fullName: 'Dubai Multi Commodities Centre',
      icon: Award,
      specialization: 'Commodities & Trading',
      minCost: 'AED 15,000',
      features: ['Prime JLT Location', 'Banking Support', 'Elite Networking'],
      image: "/services/freezone_category.jpg"
    },
    {
      name: 'IFZA',
      fullName: 'International Free Zone Authority',
      icon: Rocket,
      specialization: 'E-commerce & Tech',
      minCost: 'AED 10,000',
      features: ['100% Remote Setup', 'Budget Excellence', 'Fast Track'],
      image: "/services/freezone_category.jpg"
    },
    {
      name: 'DIFC',
      fullName: 'Dubai FinTech Center',
      icon: TrendingUp,
      specialization: 'Financial Services',
      minCost: 'AED 35,000',
      features: ['Independent Law', 'Global Recognition', 'VC Ecosystem'],
      image: "/services/freezone_category.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 lg:pt-48 overflow-hidden border-b border-foreground/5 bg-foreground/[0.01]">
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs font-oswald text-gradient-infinity">The Global Hub</h4>
              </div>
              <h1 className="font-oswald text-6xl md:text-8xl font-black text-foreground mb-12 leading-[0.95] tracking-tighter uppercase">
                Free Zone <span className="text-gradient-infinity block italic">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium mb-12">
                Accelerate your international growth in UAE's world-renowned Free Zones. 100% ownership, 0% tax, and absolute operational freedom.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="px-12 py-6 bg-primary hover:bg-primary-dark text-white font-black rounded-[2rem] text-xl transition-all shadow-3xl flex items-center gap-3 group">
                    Quick Setup
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[4rem] overflow-hidden aspect-video border border-foreground/10 shadow-3xl group">
                <img 
                  src="/services/freezone_category.jpg"
                  alt="Dubai Tech Hub"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s] brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-white font-black text-xs uppercase tracking-widest leading-none">Instant Activation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Privileges */}
      <section className="py-32 relative z-10 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase mb-6">
              Global <span className="text-gradient-infinity italic font-normal">Privileges</span>
            </h2>
            <p className="text-xl text-foreground/50 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience a tax-neutral environment built for international trade and technological innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-[3rem] border border-foreground/5 hover:border-primary/20 transition-all group relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{benefit.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Jurisdictions */}
      <section className="py-32 relative z-10 bg-foreground/[0.01]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8 text-center lg:text-left">
            <div>
              <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase mb-4 tracking-tight leading-none">
                Popular <span className="text-gradient-infinity">Zones</span>
              </h2>
              <p className="text-xl text-foreground/50 font-medium">Global hubs tailored for your specific industry.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {popularFreeZones.map((fz, index) => (
              <motion.div
                key={fz.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col group"
              >
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] mb-8 border border-foreground/10 shadow-3xl cursor-pointer">
                  <img 
                    src={fz.image}
                    alt={fz.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 glass-dark border-t border-white/10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/80 text-sm font-black uppercase tracking-[0.2em] mb-2">Specialization</p>
                    <p className="text-white text-xl font-black leading-tight">{fz.specialization}</p>
                  </div>
                </div>
                
                <div className="px-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black text-foreground tracking-tighter uppercase leading-none">{fz.name}</h3>
                    <div className="text-primary font-black text-sm tracking-widest">{fz.minCost}</div>
                  </div>
                  <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6">{fz.fullName}</p>
                  <div className="space-y-3">
                    {fz.features.map(feat => (
                      <div key={feat} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-foreground/70 uppercase tracking-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-primary/20 blur-[150px] opacity-40 rounded-full" />
        <div className="container px-4 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-oswald text-7xl md:text-9xl font-black mb-12 uppercase leading-none tracking-tighter">
              Go <span className="text-gradient-gold italic">Global</span>
            </h2>
            <p className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed">
              Your gateway to zero tax and absolute ownership. Secure your Free Zone setup in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-16 py-8 bg-primary hover:bg-white text-white hover:text-primary font-black rounded-[2.5rem] text-2xl transition-all shadow-3xl flex items-center gap-4 group mx-auto sm:mx-0">
                  Setup Your Zone
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
