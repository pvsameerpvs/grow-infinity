"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, CheckCircle2, TrendingUp, Globe2, Shield, Zap, CreditCard, Award, ArrowRight, Phone, DollarSign, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function BankingSolutions() {
  const benefits = [
    { icon: Landmark, title: 'Multi-Currency Accounts', description: 'Open accounts in AED, USD, EUR, GBP and 20+ other currencies for global transactions.' },
    { icon: Shield, title: 'Secure Banking', description: 'UAE banks offer world-class security with advanced fraud protection and encryption.' },
    { icon: Globe2, title: 'International Transfers', description: 'Swift and seamless international wire transfers with competitive exchange rates.' },
    { icon: CreditCard, title: 'Corporate Cards', description: 'Get corporate debit and credit cards for business expenses and team members.' },
    { icon: Zap, title: 'Online Banking', description: 'Advanced digital banking platforms with 24/7 access to your accounts.' },
    { icon: TrendingUp, title: 'Business Loans', description: 'Access to business financing, trade finance, and credit facilities.' }
  ];

  const banks = [
    { name: 'Emirates NBD', type: 'Local Bank', features: ['Best for Mainland', 'Quick Processing', 'Digital Banking'], minDeposit: 'AED 25,000' },
    { name: 'Mashreq Bank', type: 'Local Bank', features: ['SME Focused', 'Trade Finance', 'Competitive Fees'], minDeposit: 'AED 20,000' },
    { name: 'ADCB', type: 'Local Bank', features: ['Premium Service', 'Multi-Currency', 'Global Network'], minDeposit: 'AED 30,000' },
    { name: 'RAK Bank', type: 'Local Bank', features: ['Fast Approval', 'Flexible Terms', 'Business Support'], minDeposit: 'AED 15,000' },
    { name: 'HSBC UAE', type: 'International', features: ['Global Presence', 'Premium Banking', 'Trade Solutions'], minDeposit: 'AED 50,000' },
    { name: 'Citibank UAE', type: 'International', features: ['Corporate Banking', 'Treasury Services', 'Global Network'], minDeposit: 'AED 100,000' }
  ];

  const requirements = [
    'Valid UAE Business License',
    'Memorandum of Association (MOA)',
    'Share Certificate',
    'Passport Copies of Shareholders & Directors',
    'UAE Residence Visa (for signatories)',
    'Business Plan & Financial Projections',
    'Proof of Business Address (Ejari/Tenancy)',
    'Board Resolution for Account Opening'
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
              <Landmark className="w-5 h-5 text-gold" />
              <span className="text-sm font-black uppercase tracking-wider text-white">Corporate Banking Services</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-tight">
              UAE Corporate <br /><span className="text-gradient-gold">Banking Solutions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed font-medium">
              Open corporate bank accounts with UAE's leading banks. We leverage our <span className="text-gold font-black">banking partnerships</span> to ensure smooth account opening and ongoing support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl flex items-center gap-2"><Phone className="w-5 h-5" />Start Banking Application<ArrowRight className="w-5 h-5" /></motion.button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Banking <span className="text-gradient-infinity">Benefits</span></h2>
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
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Partner <span className="text-gradient-infinity">Banks</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {banks.map((bank, index) => (
              <motion.div key={bank.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-foreground mb-1">{bank.name}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 rounded-lg text-xs font-black text-primary uppercase">{bank.type}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {bank.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/80">{feature}</span></div>
                  ))}
                </div>
                <div className="pt-6 border-t border-foreground/10">
                  <div className="flex justify-between"><span className="text-sm text-foreground/60">Min. Deposit</span><span className="text-lg font-black text-primary">{bank.minDeposit}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Required <span className="text-gradient-infinity">Documents</span></h2>
            </motion.div>
            <div className="glass p-10 rounded-3xl border border-foreground/10">
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <motion.div key={req} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-white mb-6 uppercase">Open Your <span className="text-gold">Corporate Account</span></h2>
            <p className="text-xl text-white/80 mb-10">Let our banking specialists guide you through the account opening process</p>
            <Link href="/contact"><motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl">Contact Banking Team</motion.button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
