"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, CheckCircle2, Globe2, Shield, Zap, CreditCard, ArrowRight, Phone, TrendingUp, Building2, Calculator, DollarSign } from 'lucide-react';
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
    { name: 'Emirates NBD', type: 'Local Giant', features: ['Best for Mainland', 'Digital Leader', 'Premier Support'], minDeposit: 'AED 25k', image: "https://images.unsplash.com/photo-1526304640581-d33a699a9a38?auto=format&fit=crop&q=80&w=1200" },
    { name: 'Mashreq Bank', type: 'SME Leader', features: ['Trade Intensive', 'Quick Approvals', 'Vibrant Tech'], minDeposit: 'AED 20k', image: "https://images.unsplash.com/photo-1550565118-3d14293b9f33?auto=format&fit=crop&q=80&w=1200" },
    { name: 'ADCB', type: 'Premium Choice', features: ['Corporate Focus', 'Multi-Currency', 'Global Reach'], minDeposit: 'AED 50k', image: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=1200" }
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
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full" />
                <h4 className="text-primary font-black tracking-[0.4em] uppercase text-xs font-oswald">Elite Financial Partnerships</h4>
              </div>
              <h1 className="font-oswald text-6xl md:text-8xl font-black text-foreground mb-12 leading-[0.95] tracking-tighter uppercase">
                Corporate <span className="text-gradient-infinity block italic font-normal">Banking</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium mb-12">
                Unlock instant access to the region's elite banking network. We fast-track your multi-currency corporate account setups with guaranteed pre-approval support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="px-12 py-6 bg-primary hover:bg-primary-dark text-white font-black rounded-[2rem] text-xl transition-all shadow-3xl flex items-center gap-3 group">
                    Start Banking Application
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[4rem] overflow-hidden aspect-square border border-foreground/10 shadow-3xl group">
                <img 
                  src="https://images.unsplash.com/photo-1550565118-3d14293b9f33?auto=format&fit=crop&q=80&w=1200"
                  alt="Banking District"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s] brightness-110 saturate-[1.1] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              {/* Floating Money Icon */}
              <motion.div
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute -left-10 top-1/4 p-8 glass rounded-[2.5rem] border border-white/20 shadow-2xl backdrop-blur-3xl z-20"
              >
                <DollarSign className="w-12 h-12 text-gold mb-2" />
                <div className="text-[10px] font-black uppercase tracking-widest text-primary">Pre-Approved</div>
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
              Banking <span className="text-gradient-infinity italic">Privileges</span>
            </h2>
            <p className="text-xl text-foreground/50 max-w-2xl mx-auto font-medium">
              World-class financial infrastructure standardized for global commerce.
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
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{benefit.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Bank Network */}
      <section className="py-32 relative z-10 bg-foreground/[0.01]">
        <div className="container px-4 mx-auto">
           <div className="text-center mb-24">
             <h2 className="font-oswald text-4xl md:text-6xl font-black text-foreground uppercase">
               Elite <span className="text-gradient-infinity">Network</span>
             </h2>
           </div>

           <div className="grid lg:grid-cols-3 gap-12">
             {banks.map((bank, index) => (
               <motion.div
                 key={bank.name}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.15 }}
                 className="flex flex-col group"
               >
                 <div className="relative rounded-[3rem] overflow-hidden aspect-[16/10] mb-8 border border-foreground/10 shadow-3xl">
                    <img 
                      src={bank.image}
                      alt={bank.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                       <div>
                         <div className="text-gold font-black text-[10px] uppercase tracking-widest mb-2">{bank.type}</div>
                         <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{bank.name}</h3>
                       </div>
                    </div>
                 </div>
                 
                 <div className="px-6 space-y-6">
                    <div className="flex flex-wrap gap-2">
                       {bank.features.map(f => (
                         <span key={f} className="px-3 py-1 bg-primary/10 rounded-lg text-[10px] font-bold text-primary uppercase tracking-widest">{f}</span>
                       ))}
                    </div>
                    <div className="pt-6 border-t border-foreground/10 flex justify-between items-center">
                       <span className="text-xs font-black text-foreground/30 uppercase tracking-[0.2em]">Priority Deposit</span>
                       <span className="text-2xl font-black text-primary">{bank.minDeposit}</span>
                    </div>
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
              Bank <span className="text-gradient-gold italic">Elite</span>
            </h2>
            <p className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed">
              Skip the rejection cycles. Get your corporate bank account pre-approved by the region's top financial institutions.
            </p>
            <Link href="/contact">
              <button className="px-16 py-8 bg-gold hover:bg-gold-light text-white font-black rounded-[2.5rem] text-2xl transition-all shadow-3xl flex items-center gap-4 group mx-auto">
                Secure Priority Banking
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
