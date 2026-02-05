"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle2, TrendingUp, Shield, Zap, Users, Award, ArrowRight, Phone, Heart, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function ResidencySolutions() {
  const benefits = [
    { icon: Home, title: 'Long-Term Stability', description: 'Secure your future in the UAE with 2, 5, or 10-year residency visas for you and your family.' },
    { icon: Shield, title: 'No Sponsor Required', description: 'Golden Visa holders enjoy complete independence without the need for employer or family sponsorship.' },
    { icon: Users, title: 'Family Sponsorship', description: 'Sponsor your spouse, children, and parents to live with you in the UAE.' },
    { icon: Briefcase, title: 'Business Freedom', description: 'Own 100% of your business and work freely across the UAE without restrictions.' },
    { icon: Heart, title: 'World-Class Lifestyle', description: 'Access to premium healthcare, education, and one of the world\'s safest living environments.' },
    { icon: Award, title: 'Legacy Planning', description: 'Protect your assets with UAE wills and estate planning services.' }
  ];

  const visaTypes = [
    {
      name: 'Golden Visa (10 Years)',
      description: 'For investors, entrepreneurs, specialized talents, and outstanding students',
      requirements: ['AED 2M+ property investment', 'Business ownership', 'Specialized skills', 'PhD holders'],
      icon: Award
    },
    {
      name: 'Investor Visa (5 Years)',
      description: 'For property investors and business owners',
      requirements: ['AED 750K+ property', 'Company ownership', 'Approved investments', 'Stable income'],
      icon: TrendingUp
    },
    {
      name: 'Retirement Visa',
      description: 'For retirees aged 55+ with financial stability',
      requirements: ['Age 55+', 'AED 1M savings or AED 20K/month income', 'Property ownership', 'Health insurance'],
      icon: Home
    },
    {
      name: 'Student Visa',
      description: 'For international students enrolled in UAE universities',
      requirements: ['University enrollment', 'Sponsor letter', 'Health insurance', 'Financial proof'],
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 lg:py-40 bg-gradient-to-br from-primary via-primary-dark to-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 border border-white/20">
              <Home className="w-5 h-5 text-gold" />
              <span className="text-sm font-black uppercase tracking-wider text-white">UAE Residency Services</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-tight">
              UAE Residency <br /><span className="text-gradient-gold">& Golden Visa</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed font-medium">
              Make the UAE your home with <span className="text-gold font-black">long-term residency</span>. From Golden Visas to family sponsorship, we handle every step of your residency journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl flex items-center gap-2"><Phone className="w-5 h-5" />Check Eligibility<ArrowRight className="w-5 h-5" /></motion.button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Residency <span className="text-gradient-infinity">Benefits</span></h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">Discover why thousands choose the UAE as their permanent home</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }} className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6"><benefit.icon className="w-8 h-8 text-white" /></div>
                <h3 className="text-xl font-black text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Visa <span className="text-gradient-infinity">Types</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {visaTypes.map((visa, index) => (
              <motion.div key={visa.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-6"><visa.icon className="w-7 h-7 text-white" /></div>
                <h3 className="text-2xl font-black text-foreground mb-3">{visa.name}</h3>
                <p className="text-foreground/70 mb-6">{visa.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-black text-foreground/80 uppercase tracking-wider mb-3">Requirements:</p>
                  {visa.requirements.map((req) => (
                    <div key={req} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{req}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass p-10 rounded-3xl border border-foreground/10">
            <h2 className="font-oswald text-3xl md:text-4xl font-black text-foreground mb-6 uppercase text-center">Additional <span className="text-gradient-infinity">Services</span></h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Link href="/uae-wills-estate-planning" className="p-6 bg-foreground/[0.02] rounded-2xl hover:bg-foreground/[0.05] transition-all group">
                <h3 className="text-lg font-black text-foreground mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  UAE Wills & Estate Planning
                </h3>
                <p className="text-sm text-foreground/70">Protect your assets and ensure your wishes are honored</p>
                <span className="inline-flex items-center text-xs font-black text-primary mt-3 group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </Link>
              <Link href="/contact" className="p-6 bg-foreground/[0.02] rounded-2xl hover:bg-foreground/[0.05] transition-all group">
                <h3 className="text-lg font-black text-foreground mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Family Sponsorship
                </h3>
                <p className="text-sm text-foreground/70">Bring your loved ones to live with you in the UAE</p>
                <span className="inline-flex items-center text-xs font-black text-primary mt-3 group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-white mb-6 uppercase">Start Your <span className="text-gold">UAE Journey</span></h2>
            <p className="text-xl text-white/80 mb-10">Check your eligibility for UAE residency and Golden Visa programs</p>
            <Link href="/contact"><motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl">Get Eligibility Assessment</motion.button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
