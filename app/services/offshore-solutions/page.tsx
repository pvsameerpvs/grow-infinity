"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, CheckCircle2, TrendingUp, Globe2, Shield, Zap, Users, Award, ArrowRight, Phone, Lock, Eye } from 'lucide-react';
import Link from 'next/link';

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
      title: 'Tax Optimization',
      description: 'Zero corporate tax, income tax, and capital gains tax for offshore companies.'
    },
    {
      icon: Eye,
      title: 'No Audit Requirements',
      description: 'Simplified compliance with no mandatory audit or annual filing requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Investment Holding',
      description: 'Ideal structure for holding international investments, real estate, and intellectual property.'
    }
  ];

  const jurisdictions = [
    {
      name: 'RAK ICC',
      fullName: 'RAK International Corporate Centre',
      description: 'UAE\'s premier offshore jurisdiction offering complete privacy and tax exemption',
      features: ['Zero Tax', 'Full Privacy', 'Quick Setup', 'No Audit'],
      cost: 'AED 8,500',
      setupTime: '2-3 days'
    },
    {
      name: 'Jebel Ali',
      fullName: 'Jebel Ali Free Zone Offshore',
      description: 'Established offshore jurisdiction with strong reputation and banking access',
      features: ['Tax Exempt', 'Confidential', 'Banking Support', 'Flexible Structure'],
      cost: 'AED 12,000',
      setupTime: '3-5 days'
    },
    {
      name: 'AJMAN Offshore',
      fullName: 'Ajman Free Zone Offshore',
      description: 'Cost-effective offshore solution with simplified registration process',
      features: ['Budget-Friendly', 'Fast Processing', 'Privacy', 'No Reporting'],
      cost: 'AED 7,500',
      setupTime: '2-3 days'
    }
  ];

  const useCases = [
    {
      title: 'International Trading',
      description: 'Conduct cross-border trade and import/export operations with tax efficiency',
      icon: Globe2
    },
    {
      title: 'Investment Holding',
      description: 'Hold shares, bonds, and other financial instruments in a tax-neutral structure',
      icon: TrendingUp
    },
    {
      title: 'Intellectual Property',
      description: 'Protect and monetize patents, trademarks, and copyrights internationally',
      icon: Award
    },
    {
      title: 'Real Estate Holding',
      description: 'Own international property portfolios through a protected corporate structure',
      icon: Shield
    },
    {
      title: 'Asset Protection',
      description: 'Shield personal and business assets from legal claims and creditors',
      icon: Lock
    },
    {
      title: 'Estate Planning',
      description: 'Structure wealth transfer and succession planning for future generations',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-br from-primary via-primary-dark to-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 border border-white/20">
              <Anchor className="w-5 h-5 text-gold" />
              <span className="text-sm font-black uppercase tracking-wider text-white">Offshore Company Formation</span>
            </div>

            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-tight">
              UAE Offshore <br />
              <span className="text-gradient-gold">Company Setup</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed font-medium">
              Establish your offshore company in the UAE with <span className="text-gold font-black">complete privacy</span>, zero taxation, and robust asset protection for international business operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cost-calculator">
                <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 glass border-2 border-white/30 text-white font-black rounded-2xl text-lg transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Confidential Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Offshore <span className="text-gradient-infinity">Benefits</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Leverage the advantages of UAE offshore structures for international business and wealth management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              UAE Offshore <span className="text-gradient-infinity">Jurisdictions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {jurisdictions.map((jurisdiction, index) => (
              <motion.div
                key={jurisdiction.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all"
              >
                <h3 className="text-2xl font-black text-foreground mb-2">{jurisdiction.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{jurisdiction.fullName}</p>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{jurisdiction.description}</p>
                
                <div className="space-y-2 mb-6">
                  {jurisdiction.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-foreground/10 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/60">Starting from</span>
                    <span className="text-lg font-black text-primary">{jurisdiction.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/60">Setup time</span>
                    <span className="text-sm font-bold text-foreground">{jurisdiction.setupTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Ideal <span className="text-gradient-infinity">Use Cases</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-foreground/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-6">
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">{useCase.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-white mb-6 uppercase">
              Protect Your <span className="text-gold">Wealth Today</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Schedule a confidential consultation with our offshore specialists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cost-calculator">
                <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl">
                  Get Quote
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-white/20 hover:bg-white/30 text-white font-black rounded-2xl text-lg transition-all border-2 border-white/30">
                  Private Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
