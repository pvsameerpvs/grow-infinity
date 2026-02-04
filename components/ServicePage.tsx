"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string[];
  advantages: string[];
  sections: {
    title: string;
    content: string | string[];
  }[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  description,
  advantages,
  sections,
}) => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* Hero Section for Service */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gold/5 blur-[100px] rounded-full" />
        
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-1 bg-gold rounded-full" />
              <h4 className="text-gold font-black tracking-[0.3em] uppercase text-xs">{subtitle}</h4>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-foreground mb-10 leading-[0.9] tracking-tighter">
              {title}
            </h1>
            <div className="space-y-6">
              {description.map((para, idx) => (
                <p key={idx} className="text-xl text-foreground/50 leading-relaxed max-w-2xl font-medium">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 border-t border-foreground/5 bg-foreground/[0.01]">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-24">
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-2 h-8 bg-primary rounded-full group-hover:scale-y-125 transition-transform" />
                    <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-6 text-foreground/60 text-lg leading-relaxed font-medium">
                    {Array.isArray(section.content) ? (
                      section.content.map((p, pIdx) => <p key={pIdx} className="pl-6 border-l-2 border-primary/10">{p}</p>)
                    ) : (
                      <p className="pl-6 border-l-2 border-primary/10">{section.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar / Advantages */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-10">
                <div className="p-10 bg-primary rounded-[3rem] text-white shadow-3xl shadow-primary/20 relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                  
                  <h3 className="text-3xl font-black mb-8 tracking-tighter uppercase italic">The Advantage</h3>
                  <div className="space-y-5 relative z-10">
                    {advantages.map((adv, idx) => (
                      <div key={idx} className="flex items-start group/adv">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover/adv:bg-gold transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-white/80 font-bold text-sm leading-snug">{adv}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-12 py-6 bg-white hover:bg-gold-light text-primary hover:text-white font-black rounded-2xl transition-all duration-300 flex items-center justify-center group/btn shadow-xl uppercase tracking-widest text-xs">
                    Apply For Setup
                    <ArrowRight className="ml-3 group-hover/btn:translate-x-1 transition-transform w-5 h-5" />
                  </button>
                </div>

                <div className="p-10 glass rounded-[3rem] border-foreground/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-black text-foreground tracking-tight">BANKING<br /><span className="text-primary italic">FIRST</span></h4>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground/50 font-medium text-sm leading-relaxed mb-8">
                    We ensure your business structure is pre-approved for top-tier banking in the UAE, avoiding weeks of delay.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['ENBD', 'ADCB', 'FAB', 'MASHREQ'].map((bank) => (
                      <div key={bank} className="px-3 py-1 bg-foreground/5 rounded-lg text-[10px] font-black text-foreground/40 border border-foreground/5">
                        {bank}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
