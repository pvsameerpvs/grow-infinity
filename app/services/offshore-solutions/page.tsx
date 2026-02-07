"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, CheckCircle2, TrendingUp, Globe2, Shield, Zap, Users, Award, ArrowRight, Phone, Lock, Eye, ShieldAlert, Calculator } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function OffshoreSolutions() {
  const benefits = [
    {
      icon: Lock,
      title: 'Maximum Privacy',
      description: 'Complete confidentiality with no public disclosure of shareholders or beneficial owners.'
    },
    {
      icon: Shield,
      title: 'Asset Protection',
      description: 'Safeguard your wealth with robust legal structures and international asset protection.'
    },
    {
      icon: Globe2,
      title: 'Global Business',
      description: 'Conduct international business operations without geographical restrictions.'
    },
    {
      icon: Zap,
      title: 'Tax Neutrality',
      description: 'Zero corporate tax, income tax, and capital gains tax for offshore entities.'
    },
    {
      icon: Eye,
      title: 'Confidentiality',
      description: 'Simplified compliance with no mandatory audit or annual public filing requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Wealth Holding',
      description: 'Ideal structure for holding international investments, real estate, and IP.'
    }
  ];

  const jurisdictions = [
    {
      name: 'RAK ICC',
      fullName: 'RAK International Corporate Centre',
      description: 'UAE\'s premier offshore jurisdiction offering complete privacy and tax neutrality.',
      features: ['Zero Tax', 'Full Privacy', 'Quick Setup', 'No Audit'],
      cost: 'AED 8,500',
      image: "/services/offshore_category.jpg"
    },
    {
      name: 'JAFZA',
      fullName: 'Jebel Ali Free Zone Offshore',
      description: 'Established offshore jurisdiction with strong reputation and direct banking access.',
      features: ['Tax Exempt', 'Confidential', 'Banking Suport', 'Flexible'],
      cost: 'AED 12,000',
      image: "/services/offshore_category.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full" />
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
                <div className="w-12 h-1 bg-gold rounded-full" />
                <h4 className="text-gold font-black tracking-[0.4em] uppercase text-xs font-oswald text-gradient-infinity">Global Wealth Protection</h4>
              </div>
              <h1 className="font-oswald text-6xl md:text-8xl font-black text-foreground mb-12 leading-[0.95] tracking-tighter uppercase">
                Offshore <span className="text-gradient-gold block italic">Security</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium mb-12">
                Establish high-privacy corporate structures in the UAE. Robust asset protection, zero tax, and complete confidentiality for international wealth management.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="px-12 py-6 bg-primary hover:bg-primary-dark text-white font-black rounded-[2rem] text-xl transition-all shadow-3xl flex items-center gap-3 group">
                    Confidential Entry
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
              <div className="relative rounded-[4rem] overflow-hidden aspect-[4/3] border border-foreground/10 shadow-3xl group scale-x-[-1]">
                <img 
                  src="/services/offshore_category.jpg"
                  alt="Secure Asset"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s] brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 top-1/4 p-6 glass rounded-2xl border border-white/20 shadow-2xl backdrop-blur-3xl z-20"
              >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-gold" />
                   </div>
                   <div className="text-sm font-black uppercase tracking-widest text-foreground">100% Private</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-32 relative z-10 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase mb-6">
              Elite <span className="text-gradient-infinity italic">Advantages</span>
            </h2>
            <p className="text-xl text-foreground/50 max-w-2xl mx-auto font-medium leading-relaxed">
              Designed for global asset protection, international trading, and seamless wealth holding.
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
                className="glass p-10 rounded-[3rem] border border-foreground/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{benefit.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premier Jurisdictions */}
      <section className="py-32 relative z-10 bg-foreground/[0.01]">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight">
              Premier <span className="text-gradient-infinity">Jurisdictions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {jurisdictions.map((fz, index) => (
              <motion.div
                key={fz.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass p-12 rounded-[4rem] border border-foreground/5 hover:border-primary/30 transition-all group overflow-hidden"
              >
                 <div className="flex justify-between items-start mb-10">
                   <div>
                    <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase leading-none mb-4">{fz.name}</h3>
                    <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest">{fz.fullName}</p>
                   </div>
                   <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <ShieldAlert className="w-8 h-8 text-primary group-hover:text-white" />
                   </div>
                 </div>
                 
                 <p className="text-lg text-foreground/60 font-medium mb-10 leading-relaxed">{fz.description}</p>
                 
                 <div className="space-y-4 mb-10">
                    {fz.features.map(feat => (
                      <div key={feat} className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-sm font-black text-foreground/70 uppercase tracking-widest">{feat}</span>
                      </div>
                    ))}
                 </div>

                 <div className="pt-8 border-t border-foreground/10 flex justify-between items-center">
                    <div className="text-xs font-black text-foreground/30 uppercase tracking-[0.3em]">Entry Cost</div>
                    <div className="text-3xl font-black text-primary">{fz.cost}</div>
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
              Secure Your <span className="text-gradient-gold italic">Legacy</span>
            </h2>
            <p className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-medium">
              Start your confidential offshore journey today. UAE's most robust asset protection starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-16 py-8 bg-gold hover:bg-gold-light text-white font-black rounded-[2.5rem] text-2xl transition-all shadow-3xl flex items-center gap-4 group mx-auto sm:mx-0">
                  Begin Consultancy
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
