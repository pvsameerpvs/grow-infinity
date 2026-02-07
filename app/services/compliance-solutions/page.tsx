"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, CheckCircle2, TrendingUp, Shield, Zap, Calculator, BookOpen, ArrowRight, Phone, FileText, Scale, Award, Database } from 'lucide-react';
import Link from 'next/link';

export default function ComplianceSolutions() {
  const benefits = [
    { icon: Shield, title: 'Full Regulatory Shield', description: 'Stay compliant with FTA, Ministry of Economy, and all UAE federal regulatory bodies.' },
    { icon: FileCheck, title: 'Expert PRO Liaisons', description: 'Priority government liaison for visas, labor card approvals, and all official government filings.' },
    { icon: Calculator, title: 'VAT & Tax Strategy', description: 'Advanced VAT registration, precise filing, and strategic corporate tax optimization.' },
    { icon: BookOpen, title: 'Elite Bookkeeping', description: 'Cloud-based accounting with audit-ready reporting using Xero and QuickBooks ecosystems.' },
    { icon: Scale, title: 'Legal Integrity', description: 'Ensure your business operations meet high-standard UAE commercial and labor laws.' },
    { icon: Zap, title: 'Real-time Updates', description: 'Proactive monitoring of UAE regulatory changes to keep your enterprise penalty-free.' }
  ];

  const services = [
    { name: 'PRO SERVICES', description: 'Complete government liaison for all visas, permits, and labor-legal approvals.', icon: FileText, link: '/pro-services-uae' },
    { name: 'VAT COMPLIANCE', description: 'FTA registration, quarterly reporting, and strategic tax refund management.', icon: Calculator, link: '/vat-registration-uae' },
    { name: 'CORPORATE TAX', description: 'Optimization for the 9% tax regime with professional advisory and filing support.', icon: TrendingUp, link: '/corporate-tax-uae' }
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
                <div className="w-12 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full" />
                <h4 className="text-gold font-black tracking-[0.4em] uppercase text-xs font-oswald text-gradient-infinity">Operational Integrity</h4>
              </div>
              <h1 className="font-oswald text-6xl md:text-8xl font-black text-foreground mb-12 leading-[0.95] tracking-tighter uppercase">
                Regulatory <span className="text-gradient-infinity block italic font-normal tracking-tight">Compliance</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium mb-12">
                Eliminate administrative friction. Our compliance experts handle everything from VAT filing to PRO services, ensuring your enterprise operates with total legal integrity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="px-12 py-6 bg-primary hover:bg-primary-dark text-white font-black rounded-[2rem] text-xl transition-all shadow-3xl flex items-center gap-3 group">
                    Get Compliance Audit
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
              <div className="relative rounded-[4rem] overflow-hidden aspect-square border border-foreground/10 shadow-3xl group">
                <img 
                  src="/services/compliance_category.jpg"
                  alt="Legal Document"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s] brightness-105 contrast-110 saturate-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -right-10 top-1/4 p-8 glass rounded-3xl border border-white/20 shadow-2xl backdrop-blur-3xl z-20"
              >
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-primary" />
                   </div>
                   <div className="text-sm font-black uppercase tracking-widest text-foreground">Zero Penalty</div>
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
              Compliance <span className="text-gradient-infinity italic font-normal">Shield</span>
            </h2>
            <p className="text-xl text-foreground/50 max-w-2xl mx-auto font-medium leading-relaxed">
              Complete administrative peace of mind so you can focus on scaling your business legacy.
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
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 shadow-md">
                  <benefit.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{benefit.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-32 relative z-10 bg-foreground/[0.01]">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight">
              Core <span className="text-gradient-infinity italic font-normal">Solutions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-12 rounded-[4rem] border border-foreground/5 hover:border-primary/50 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">{service.name}</h3>
                <p className="text-foreground/60 mb-10 leading-relaxed font-medium flex-grow">{service.description}</p>
                <Link href={service.link} className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-xs hover:gap-6 transition-all duration-300">
                  Analyze Compliance <ArrowRight className="w-4 h-4" />
                </Link>
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
              Admin <span className="text-gradient-gold italic">Free</span>
            </h2>
            <p className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
              Join the growing list of penalty-free enterprises. Secure your full-spectrum compliance audit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-16 py-8 bg-primary hover:bg-gold text-white font-black rounded-[2.5rem] text-2xl transition-all shadow-3xl flex items-center gap-4 group mx-auto">
                  Audit My Business
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
