"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle2, TrendingUp, Shield, Zap, Users, Award, ArrowRight, Phone, Heart, Briefcase, GraduationCap, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

export default function ResidencySolutions() {
  const benefits = [
    { icon: Home, title: 'Long-Term Stability', description: 'Secure your future in the UAE with 10-year Golden Visas for you and your family.' },
    { icon: Shield, title: 'Total Independence', description: 'Golden Visa holders enjoy complete independence without the need for a local sponsor.' },
    { icon: Users, title: 'Family Legacy', description: 'Sponsor your spouse, children, and parents to live with you in the world\'s safest city.' },
    { icon: Briefcase, title: 'Business Freedom', description: 'Own 100% of your enterprise and work freely across all seven Emirates.' },
    { icon: Heart, title: 'Elite Lifestyle', description: 'Access top-tier healthcare, global education, and a tax-free, high-luxury environment.' },
    { icon: Award, title: 'Estate Protection', description: 'Protect your legacy with UAE-specific wills and comprehensive wealth planning.' }
  ];

  const visaTypes = [
    {
      name: 'GOLDEN VISA (10Y)',
      description: 'For investors, tech-founders, doctors, and exceptional global talents.',
      requirements: ['AED 2M+ Investment', 'Specialized Expertise', 'High-Tier Graduates'],
      icon: Star
    },
    {
      name: 'INVESTOR VISA (5Y)',
      description: 'The standard for property investors and serial business owners.',
      requirements: ['AED 750k+ Property', 'Fixed Income', 'Corporate Dividends'],
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
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-1 bg-gold rounded-full" />
                <h4 className="text-gold font-black tracking-[0.4em] uppercase text-xs font-oswald text-gradient-gold">UAE Residency Excellence</h4>
              </div>
              <h1 className="font-oswald text-6xl md:text-8xl font-black text-foreground mb-12 leading-[0.95] tracking-tighter uppercase">
                Your Future <br /><span className="text-gradient-infinity block italic font-normal tracking-tight underline-offset-8">in the UAE</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium mb-12">
                Join the world's most dynamic elite community. We handle every detail of your Golden Visa journey, from eligibility assessment to Emirates ID issuance for your entire family.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="px-12 py-6 bg-primary hover:bg-primary-dark text-white font-black rounded-[2rem] text-xl transition-all shadow-3xl flex items-center gap-3 group">
                    Check Eligibility
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] border border-foreground/10 shadow-3xl group">
                <img 
                  src="/services/residency_category.jpg"
                  alt="Dubai Lifestyle"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6s] brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                  <div>
                    <h3 className="text-4xl font-black text-white uppercase leading-none mb-4">A Modern <br />Legacy</h3>
                    <p className="text-white/60 font-medium">Join 100,000+ Golden Visa holders in the world's safest sanctuary.</p>
                  </div>
                </div>
              </div>
              {/* Floating Star */}
              <motion.div
                 animate={{ rotate: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -right-10 top-1/4 p-8 glass rounded-3xl border border-white/20 shadow-2xl backdrop-blur-3xl"
              >
                <div className="flex flex-col items-center">
                  <Star className="w-10 h-10 text-gold fill-gold mb-2" />
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Premium Status</div>
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
            <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase mb-6 tracking-tight">
              Elite <span className="text-gradient-infinity italic font-normal">Privileges</span>
            </h2>
            <p className="text-xl text-foreground/50 max-w-2xl mx-auto font-medium">
              Why the world's most successful entrepreneurs choose the UAE as their long-term home.
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
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[3rem] border border-foreground/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-sm">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{benefit.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Paths */}
      <section className="py-32 relative z-10 bg-foreground/[0.01]">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight">
              Elite <span className="text-gradient-infinity italic">Paths</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={visa.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass p-12 rounded-[4rem] border border-foreground/5 hover:border-primary/40 transition-all flex flex-col group"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                  <visa.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-foreground uppercase mb-6 tracking-tighter leading-none">{visa.name}</h3>
                <p className="text-lg text-foreground/50 mb-10 leading-relaxed font-medium">{visa.description}</p>
                <div className="space-y-4">
                  <p className="text-xs font-black text-foreground/30 uppercase tracking-[0.3em] mb-4">Core Criteria</p>
                  {visa.requirements.map(req => (
                    <div key={req} className="flex items-center gap-4">
                       <CheckCircle2 className="w-5 h-5 text-primary" />
                       <span className="text-sm font-black text-foreground/70 uppercase tracking-widest">{req}</span>
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
        <div className="absolute top-0 right-0 w-[60%] h-full bg-primary/20 blur-[150px] opacity-40 rounded-full" />
        <div className="container px-4 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-oswald text-7xl md:text-9xl font-black mb-12 uppercase leading-none tracking-tighter">
              Secure Your <span className="text-gradient-gold italic">Sanctuary</span>
            </h2>
            <p className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed">
              Start your journey today. Get a private eligibility assessment for UAE residency within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-16 py-8 bg-primary hover:bg-gold text-white font-black rounded-[2.5rem] text-xl transition-all shadow-3xl flex items-center gap-4 group mx-auto">
                  Audit Residency Path
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
