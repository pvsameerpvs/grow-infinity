"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, TrendingUp, Globe2, Shield, Zap, Users, Award, ArrowRight, Phone, Calculator, MapPin } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function MainlandSolutions() {
  const benefits = [
    {
      icon: Globe2,
      title: '100% Foreign Ownership',
      description: 'Own your business completely without the need for a local sponsor in most activities.'
    },
    {
      icon: Building2,
      title: 'Unlimited Scope',
      description: 'Conduct business anywhere in the UAE and internationally with no restrictions.'
    },
    {
      icon: TrendingUp,
      title: 'Government Projects',
      description: 'Eligible to bid for and secure lucrative government tenders and contracts.'
    },
    {
      icon: Shield,
      title: 'Legal Protection',
      description: 'Complete protection under UAE laws with full access to local courts.'
    },
    {
      icon: Users,
      title: 'Unlimited Visas',
      description: 'Sponsor unlimited employees and family members with streamlined processing.'
    },
    {
      icon: Zap,
      title: 'Market Dominance',
      description: 'Immediate access to the thriving domestic market of 10M+ residents.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Activity Selection',
      description: 'Choose from 2,000+ DED approved activities.',
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Name Approval',
      description: 'Reserve your unique trade name with DED.',
      duration: '1 day'
    },
    {
      step: '03',
      title: 'MOA Drafting',
      description: 'Initial approval & Legal MoA preparation.',
      duration: '2-3 days'
    },
    {
      step: '04',
      title: 'Office Setup',
      description: 'Secure office space and Ejari registration.',
      duration: '1-2 days'
    },
    {
      step: '05',
      title: 'License Issuance',
      description: 'Receive your official DED trade license.',
      duration: '1 day'
    }
  ];

  const licenseTypes = [
    {
      type: 'Commercial',
      description: 'For trading and general commerce',
      activities: ['Trading', 'Ecommerce', 'Retail'],
      icon: Building2
    },
    {
      type: 'Professional',
      description: 'For service-based consultancies',
      activities: ['Consulting', 'Legal', 'Marketing'],
      icon: Award
    },
    {
      type: 'Industrial',
      description: 'For manufacturing and production',
      activities: ['Factory', 'Assembly', 'Processing'],
      icon: TrendingUp
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-1 bg-gold rounded-full" />
                <h4 className="text-gold font-black tracking-[0.4em] uppercase text-xs">Mainland Solutions</h4>
              </div>
              <h1 className="font-oswald text-6xl md:text-8xl font-black text-foreground mb-12 leading-[0.95] tracking-tighter uppercase">
                UAE <span className="text-gradient-infinity block">Mainland</span> Expansion
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium mb-12">
                Dominate the local market with a Mainland license. Complete freedom to trade, scale, and secure government contracts across all seven Emirates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="px-10 py-5 bg-primary hover:bg-primary-dark text-white font-black rounded-2xl text-lg transition-all shadow-2xl flex items-center gap-3 group">
                    Apply For License
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/cost-calculator">
                  <button className="px-10 py-5 glass border-2 border-foreground/10 text-foreground font-black rounded-2xl text-lg transition-all flex items-center gap-3">
                    <Calculator className="w-6 h-6" />
                    Cost Calculator
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] border border-foreground/10 shadow-3xl group">
                <img 
                  src="/services/mainland_category.jpg"
                  alt="Dubai Mainland"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-3xl border border-white/20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase text-sm tracking-widest leading-none">Global Access</h4>
                      <p className="text-white/50 text-[10px] mt-1">International Trade Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-32 relative z-10 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase mb-6">
              Strategic <span className="text-gradient-infinity">Advantages</span>
            </h2>
            <p className="text-xl text-foreground/50 max-w-2xl mx-auto font-medium">
              Why the world's leading enterprises choose the UAE Mainland structure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[3rem] border border-foreground/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-12 transition-all duration-500">
                  <benefit.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{benefit.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Stepper */}
      <section className="py-32 relative z-10 bg-foreground/[0.01]">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase mb-12">
                Seamless <span className="text-gradient-infinity">Setup</span>
              </h2>
              <div className="space-y-12">
                {process.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl border-2 border-primary/20 flex items-center justify-center font-oswald text-2xl font-black text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground uppercase mb-2 tracking-tight flex items-center gap-3">
                        {step.title}
                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-lg tracking-widest">{step.duration}</span>
                      </h3>
                      <p className="text-foreground/60 font-medium">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden aspect-square border border-foreground/10 shadow-3xl">
                <img 
                  src="/services/mainland_hero.png"
                  alt="Modern Office"
                  className="w-full h-full object-cover brightness-110 saturate-[1.2]"
                />
              </div>
              {/* Floating Shield */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-10 bottom-1/4 glass p-8 rounded-[2rem] border border-white/20 shadow-2xl backdrop-blur-3xl"
              >
                <Shield className="w-12 h-12 text-gold mb-3" />
                <div className="text-sm font-black uppercase tracking-widest text-foreground">Fully Compliant</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* License Categories */}
      <section className="py-32 relative z-10 bg-background">
        <div className="container px-4 mx-auto text-center">
            <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase mb-24">
              License <span className="text-gradient-infinity">Specialties</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-12">
              {licenseTypes.map((type, index) => (
                <motion.div
                  key={type.type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-12 rounded-[4rem] border border-foreground/5 hover:border-primary/40 transition-all flex flex-col group items-center"
                >
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                    <type.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground uppercase mb-4 tracking-tighter">{type.type}</h3>
                  <p className="text-foreground/50 mb-8 font-medium">{type.description}</p>
                  <div className="space-y-3 w-full">
                    {type.activities.map(act => (
                      <div key={act} className="px-6 py-3 bg-foreground/5 rounded-2xl text-sm font-black text-foreground/70 border border-foreground/5 uppercase tracking-widest">
                        {act}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/20 blur-[150px] opacity-30" />
        <div className="container px-4 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-oswald text-6xl md:text-8xl font-black mb-12 uppercase leading-none tracking-tighter">
              Start Your <br /><span className="text-gradient-gold italic">Legacy</span>
            </h2>
            <p className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto">
              Join 5,000+ businesses who expanded with Grow Infinity.
            </p>
            <Link href="/contact">
              <button className="px-16 py-8 bg-gold hover:bg-gold-light text-white font-black rounded-[2.5rem] text-2xl transition-all shadow-3xl flex items-center gap-4 mx-auto group">
                Begin Setup Now
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
