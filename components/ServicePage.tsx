"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight, Globe, Zap, Shield, TrendingUp, Building2, Phone, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string[];
  advantages: string[];
  sections: {
    title: string;
    content: string | string[];
    image?: string;
  }[];
  image: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  description,
  advantages,
  sections,
  image,
}) => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 lg:pt-48 overflow-hidden border-b border-foreground/5 bg-foreground/[0.01]">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container px-4 mx-auto relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-3 mb-8"
              >
                <div className="w-12 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full" />
                <h4 className="text-gold font-black tracking-[0.4em] uppercase text-xs">
                  {subtitle}
                </h4>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-oswald text-6xl md:text-8xl font-black text-foreground mb-12 leading-[0.95] tracking-tighter uppercase"
              >
                {title.split(' ').map((word, i) => (
                  <span key={i} className={cn(i === 1 ? "text-gradient-infinity block" : "block")}>
                    {word}
                  </span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {description.map((para, idx) => (
                  <p key={idx} className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium">
                    {para}
                  </p>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <button className="px-10 py-5 bg-primary hover:bg-primary-dark text-white font-black rounded-2xl text-lg transition-all shadow-2xl flex items-center gap-3 group">
                    Start Setup Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/cost-calculator">
                  <button className="px-10 py-5 glass border-2 border-foreground/10 text-foreground font-black rounded-2xl text-lg transition-all flex items-center gap-3">
                    <Calculator className="w-6 h-6" />
                    Calculate Costs
                  </button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] border border-foreground/10 shadow-3xl group">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-3xl border border-white/20">
                  <div className="flex items-center gap-4 mb-3">
                    <Zap className="w-10 h-10 text-gold" />
                    <div>
                      <h4 className="text-white font-black uppercase text-sm tracking-widest">Premium Setup</h4>
                      <p className="text-white/70 text-xs">Standardized for Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 glass p-6 rounded-3xl border border-foreground/10 shadow-2xl backdrop-blur-xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground leading-none">100%</div>
                    <div className="text-[10px] uppercase font-bold text-foreground/50 tracking-widest">Ownership</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-32 relative z-10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-32">
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="group"
                >
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="w-2 h-16 bg-gradient-to-b from-primary to-primary-dark rounded-full group-hover:scale-y-110 transition-transform duration-500 shadow-lg shadow-primary/20" />
                    <h3 className="font-oswald text-4xl md:text-5xl font-black text-foreground tracking-tight uppercase">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="relative pl-8 space-y-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-foreground/[0.03] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="w-full bg-primary/20"
                      />
                    </div>
                    
                    <div className="space-y-8 text-foreground/70 text-xl leading-relaxed font-medium">
                      {Array.isArray(section.content) ? (
                        section.content.map((p, pIdx) => (
                          <p key={pIdx} className="relative group/p">
                            {p}
                          </p>
                        ))
                      ) : (
                        <p className="relative group/p">{section.content}</p>
                      )}
                    </div>
                  </div>
                  
                  {section.image && (
                    <motion.div 
                      initial={{ opacity: 0, y: 40, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="mt-20 relative rounded-[4rem] overflow-hidden border border-foreground/5 shadow-3xl aspect-[16/10] group"
                    >
                      <img 
                        src={section.image} 
                        alt={section.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s] brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-[4rem]" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 lg:pl-10">
              <div className="sticky top-32 space-y-12">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-12 bg-primary rounded-[4rem] text-white shadow-3xl shadow-primary/30 relative overflow-hidden group border border-white/10"
                >
                  <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-10 border border-white/20">
                      <Shield className="w-10 h-10 text-gold" />
                    </div>
                    
                    <h3 className="font-oswald text-4xl font-black mb-10 tracking-tighter uppercase italic leading-none">
                      The <br />Infinity <br /><span className="text-gold">Advantage</span>
                    </h3>
                    
                    <div className="space-y-6">
                      {advantages.map((adv, idx) => (
                        <div key={idx} className="flex items-start gap-4 group/adv">
                          <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/adv:bg-gold transition-colors duration-300">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white/90 font-bold text-sm leading-snug group-hover/adv:text-white transition-colors uppercase tracking-tight">
                            {adv}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact" className="block mt-16">
                      <motion.button 
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-6 bg-white text-primary font-black rounded-[2rem] transition-all duration-300 flex items-center justify-center group/btn shadow-2xl uppercase tracking-widest text-sm"
                      >
                        Launch Now
                        <ArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>

                {/* Banking Section Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-12 glass rounded-[4rem] border-foreground/10 relative overflow-hidden group border shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h4 className="font-oswald text-3xl font-black text-foreground tracking-tight leading-none uppercase">Banking</h4>
                      <div className="text-primary italic font-black text-lg tracking-widest mt-1">PRIORITY</div>
                    </div>
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <p className="text-foreground/60 font-medium text-lg leading-relaxed mb-10">
                    We structure your entity for <span className="text-foreground font-black">immediate approval</span> at the region's elite banks.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {['ENBD', 'ADCB', 'FAB', 'MASHREQ'].map((bank) => (
                      <div key={bank} className="px-4 py-3 bg-foreground/5 rounded-2xl text-[10px] font-black text-foreground/40 border border-foreground/5 text-center uppercase tracking-widest hover:border-primary/20 hover:bg-primary/5 transition-all">
                        {bank}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Trust Card */}
                <div className="p-8 rounded-[3rem] bg-gradient-to-br from-foreground to-foreground/90 text-white border border-white/5 flex items-center justify-between shadow-3xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-black uppercase tracking-widest">Global HQ</div>
                      <div className="text-[10px] text-white/50">Burj Khalifa Tower, Dubai</div>
                    </div>
                  </div>
                  <Phone className="w-6 h-6 text-white/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Wave Divider or similar can be added here if needed */}
      
      {/* Bottom CTA */}
      <section className="py-40 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/20 blur-[150px] rounded-full opacity-30" />
        <div className="container px-4 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-oswald text-6xl md:text-8xl font-black mb-12 uppercase leading-[0.9] tracking-tighter">
              Ready to <span className="text-gradient-gold">Innovate?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/60 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
              Join the elite founders who chose Grow Infinity for their Dubai expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-12 py-6 bg-gold hover:bg-gold-light text-white font-black rounded-[2rem] text-xl transition-all shadow-3xl flex items-center gap-4 group mx-auto sm:mx-0">
                  Secure Your Setup
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
