"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, CheckCircle2, TrendingUp, Shield, Zap, Calculator, BookOpen, Award, ArrowRight, Phone, FileText, Scale } from 'lucide-react';
import Link from 'next/link';

export default function ComplianceSolutions() {
  const benefits = [
    { icon: Shield, title: 'Full Regulatory Compliance', description: 'Stay compliant with UAE Federal Tax Authority, Ministry of Economy, and all regulatory bodies.' },
    { icon: FileCheck, title: 'Expert PRO Services', description: 'Government liaison for visas, Emirates ID, labor approvals, and all official documentation.' },
    { icon: Calculator, title: 'VAT & Tax Management', description: 'Accurate VAT registration, filing, and corporate tax advisory to minimize liabilities.' },
    { icon: BookOpen, title: 'Professional Bookkeeping', description: 'Cloud-based accounting with audit-ready reports using Xero and QuickBooks.' },
    { icon: Scale, title: 'Legal Compliance', description: 'Ensure your business operations meet all UAE commercial and labor law requirements.' },
    { icon: Award, title: 'Ongoing Support', description: '24/7 compliance monitoring and proactive updates on regulatory changes.' }
  ];

  const services = [
    { name: 'PRO Services', description: 'Complete government liaison for visas, permits, and approvals', icon: FileText, link: '/pro-services-uae' },
    { name: 'VAT Registration & Filing', description: 'FTA compliance, quarterly returns, and refund management', icon: Calculator, link: '/vat-registration-uae' },
    { name: 'Corporate Tax Advisory', description: '9% corporate tax optimization and strategic planning', icon: TrendingUp, link: '/corporate-tax-uae' },
    { name: 'Accounting & Bookkeeping', description: 'Professional ledger maintenance and financial reporting', icon: BookOpen, link: '/accounting-bookkeeping-uae' },
    { name: 'Audit Support', description: 'Audit preparation and liaison with external auditors', icon: FileCheck, link: '/contact' },
    { name: 'Labor Law Compliance', description: 'Employment contracts, WPS, and labor card management', icon: Shield, link: '/contact' }
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
              <FileCheck className="w-5 h-5 text-gold" />
              <span className="text-sm font-black uppercase tracking-wider text-white">Compliance & PRO Services</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-tight">
              UAE Compliance <br /><span className="text-gradient-gold">Solutions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed font-medium">
              Navigate UAE's regulatory landscape with confidence. From <span className="text-gold font-black">VAT compliance</span> to PRO services, we ensure your business stays fully compliant and penalty-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl flex items-center gap-2"><Phone className="w-5 h-5" />Get Compliance Audit<ArrowRight className="w-5 h-5" /></motion.button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Compliance <span className="text-gradient-infinity">Benefits</span></h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">Comprehensive compliance management to protect your business from penalties and legal issues</p>
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
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Our <span className="text-gradient-infinity">Services</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-6"><service.icon className="w-7 h-7 text-white" /></div>
                <h3 className="text-xl font-black text-foreground mb-3">{service.name}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center text-sm font-black text-primary hover:text-primary-dark transition-all group-hover:translate-x-1">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-white mb-6 uppercase">Stay <span className="text-gold">Compliant</span></h2>
            <p className="text-xl text-white/80 mb-10">Get a free compliance audit and ensure your business meets all UAE regulatory requirements</p>
            <Link href="/contact"><motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl">Schedule Compliance Audit</motion.button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
