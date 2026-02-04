"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Calculator, ShieldCheck, Users2, Globe, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function CoreServices() {
  return (
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
  );
}
