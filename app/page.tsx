"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2, Landmark, Users2, ChevronRight, Calculator, Globe } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SERVICES } from '@/constants/services';

const stats = [
  { label: 'Successful Setups', value: '5,000+' },
  { label: 'Banking Partners', value: '25+' },
  { label: 'Expert Advisors', value: '40+' },
  { label: 'Retention Rate', value: '98%' },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 bg-background transition-colors duration-500">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-infinity-blue-light/20 blur-[150px] rounded-full animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.1]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl pt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-px w-12 bg-primary" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">
                  The Gold Standard in UAE Advisory
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-foreground mb-8 leading-[0.9] tracking-tighter">
                Architecting <br />
                <span className="text-gradient-infinity">Businesses</span>. <br />
                Securing Legacies.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 mb-12 max-w-2xl leading-relaxed font-medium">
                Elite, banking-first business setup solutions for entrepreneurs who demand precision, speed, and long-term security in the UAE.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link
                  href="/cost-calculator"
                  className="px-10 py-6 bg-primary hover:bg-primary-dark text-white font-black rounded-2xl text-lg transition-all duration-300 flex items-center group button-premium shadow-2xl shadow-primary/30"
                >
                  START YOUR SETUP
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform w-5 h-5" />
                </Link>
                <Link
                  href="#services"
                  className="px-10 py-6 glass hover:bg-foreground/5 text-foreground font-black rounded-2xl text-lg transition-all duration-300 border-foreground/10"
                >
                  EXPLORE ADVISORY
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stat Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-80 p-10 glass rounded-[2.5rem] border-white/10"
        >
          <div className="space-y-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-4xl font-black text-primary tracking-tighter mb-1">{stat.value}</span>
                <span className="text-[10px] text-foreground/40 font-black uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30"
        >
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 border-y border-foreground/5 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <p className="text-center text-[10px] font-black text-foreground/40 uppercase tracking-[0.5em] mb-12">
            Directly Licensed by & Partnered with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['DED', 'IFZA', 'DMCC', 'RAKEZ', 'MEYDAN'].map((brand) => (
              <span key={brand} className="text-3xl font-black text-foreground tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="w-12 h-1.5 bg-gold mb-6 rounded-full" />
              <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter leading-none">
                Specialized Solutions for <span className="text-primary underline decoration-gold/30">Infinite</span> Growth
              </h2>
              <p className="text-xl text-foreground/50 font-medium leading-relaxed">
                From mainland formation to complex banking compliance, we provide the foundation for your Middle Eastern legacy.
              </p>
            </div>
            <Link href="/mainland-company-formation" className="px-8 py-4 glass hover:bg-foreground/5 text-foreground font-black rounded-xl transition-all flex items-center group text-sm uppercase tracking-widest">
              View All Services
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Mainland Setup', icon: <Building2 />, slug: 'mainland-company-formation', desc: 'Full access to UAE local markets with 100% ownership.' },
              { title: 'Free Zone Setup', icon: <Landmark />, slug: 'free-zone-company-setup', desc: '100% tax-free environments for specialized industries.' },
              { title: 'Banking Advisory', icon: <Calculator />, slug: 'corporate-bank-account-uae', desc: 'Pre-approved corporate accounts with top-tier UAE banks.' },
              { title: 'Golden Visa', icon: <ShieldCheck />, slug: 'golden-visa-uae', desc: 'Secure your 10-year residency and long-term security.' },
              { title: 'Corporate Tax', icon: <Users2 />, slug: 'corporate-tax-uae', desc: 'Strategic compliance with the UAE\'s new 9% tax regime.' },
              { title: 'PRO Services', icon: <Globe />, slug: 'pro-services-uae', desc: 'Hands-off government liaison for all your legal paperwork.' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group p-10 rounded-[3rem] border border-foreground/5 bg-foreground/[0.02] hover:bg-primary transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-white/10 transition-colors" />
                
                <div className="w-16 h-16 rounded-[2rem] bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:scale-110">
                  {React.isValidElement(service.icon) && React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-primary group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors tracking-tight">{service.title}</h3>
                <p className="text-foreground/50 group-hover:text-white/70 mb-10 leading-relaxed font-medium text-sm">
                  {service.desc}
                </p>
                <Link href={`/${service.slug}`} className="inline-flex items-center font-black text-xs uppercase tracking-[0.2em] text-primary group-hover:text-white transition-colors pb-1 border-b-2 border-primary group-hover:border-white">
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking-First Advantage Section */}
      <section className="py-32 bg-foreground dark:bg-[#020617] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-1 bg-gold rounded-full" />
                <h4 className="text-gold font-black uppercase tracking-[0.3em] text-sm">The Banking-First Philosophy</h4>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                Any firm can get <br />you a license. <br />
                <span className="text-primary">We ensure you can bank.</span>
              </h2>
              <div className="space-y-8 text-white/60 text-lg leading-relaxed font-medium">
                <p>
                  In the UAE, a business license is only as good as the bank account attached to it. Our unique &quot;Banking-First&quot; methodology begins with your banking eligibility.
                </p>
                <p>
                  We pre-vet your business activity with our network of banking partners before we even file for your name reservation. This saves you weeks of frustration and ensures a operational cash flow from day one.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'IBAN Delivery Focus',
                  'Risk Appetite Pre-Check',
                  'Activity Suitability Audit',
                  'Executive Profile Mapping'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 glass rounded-2xl border-white/5">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-white w-5 h-5" />
                    </div>
                    <span className="font-black text-xs uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative p-12 glass rounded-[3.5rem] border-white/10 shadow-3xl">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-2xl font-black tracking-tight">OPERATIONAL<br /><span className="text-gold">EXCELLENCE</span></h3>
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-10">
                  {[
                    { label: 'Document Verification', progress: '100%' },
                    { label: 'Bank Introduction', progress: 'Fast-Track' },
                    { label: 'Visa Approval', progress: 'Guaranteed*' },
                    { label: 'IBAN Activation', progress: '94% Success' },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="flex justify-between mb-4">
                        <span className="text-xs font-black uppercase tracking-widest text-white/50">{item.label}</span>
                        <span className="text-xs font-black text-gold">{item.progress}</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          className="h-full bg-primary rounded-full relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/30">
                  <span>Standardized Processing</span>
                  <span>ISO 9001:2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '48H', label: 'License Issuance' },
              { value: '100%', label: 'Foreign Ownership' },
              { value: '0%', label: 'Income Tax' },
              { value: '25+', label: 'Global Offices' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-5xl md:text-7xl font-black text-foreground mb-4 tracking-tighter group-hover:text-primary transition-colors"
                >
                  {stat.value}
                </motion.div>
                <div className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden group shadow-3xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 blur-[150px] rounded-full -mr-[400px] -mt-[400px] group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 blur-[120px] rounded-full -ml-[300px] -mb-[300px]" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none">
                Ready to <br /><span className="text-gold">Grow Infinitely?</span>
              </h2>
              <p className="text-2xl text-white/70 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                Get a comprehensive breakdown of your business setup costs in less than 2 minutes with our precision calculator.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <Link
                  href="/cost-calculator"
                  className="px-12 py-7 bg-white text-primary hover:bg-gold-light hover:text-white font-black rounded-[2rem] text-xl transition-all flex items-center justify-center group/btn shadow-2xl"
                >
                  <Calculator className="mr-3 w-6 h-6" />
                  USE COST CALCULATOR
                  <ArrowRight className="ml-3 group-hover/btn:translate-x-1 transition-transform w-5 h-5" />
                </Link>
                <button className="px-12 py-7 bg-black/20 hover:bg-black/40 text-white font-black rounded-[2rem] text-xl transition-all border border-white/10 backdrop-blur-md">
                  BOOK VIP CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
