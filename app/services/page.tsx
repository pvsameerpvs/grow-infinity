"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, ServiceData } from '@/constants/services';
import { Building2, Landmark, Calculator, ShieldCheck, Globe, Rocket, Users2, ArrowRight, Sparkles, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'All', icon: Sparkles },
  { name: 'Mainland', icon: Building2 },
  { name: 'Free Zone', icon: Landmark },
  { name: 'Offshore', icon: ShieldCheck },
  { name: 'Banking', icon: Calculator },
  { name: 'Compliance', icon: Rocket },
  { name: 'Residency', icon: Users2 }
];

export default function ServicesListing() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter(s => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         s.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 pt-32 pb-40">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full mb-8 border border-primary/10">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-black uppercase tracking-[0.3em] text-primary">Service Catalog</span>
            </div>
            <h1 className="font-oswald text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
              Elite <span className="text-gradient-infinity">Solutions</span>
            </h1>
            <p className="text-xl text-foreground/50 max-w-2xl mx-auto font-medium leading-relaxed">
              Explore our comprehensive range of specialized business services, curated for the modern global entrepreneur in the UAE.
            </p>
          </motion.div>
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="max-w-6xl mx-auto mb-20 space-y-12">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-foreground/30" />
            </div>
            <input 
              type="text"
              placeholder="Search for a specific setup, license, or support service..."
              className="w-full bg-foreground/[0.03] border-2 border-foreground/5 rounded-[2.5rem] py-8 pl-20 pr-8 text-xl font-bold text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary/30 transition-all shadow-xl backdrop-blur-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          {/* Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 border-2",
                  activeCategory === cat.name 
                    ? "bg-primary border-primary text-white shadow-2xl scale-105" 
                    : "bg-foreground/[0.03] border-foreground/5 text-foreground/40 hover:bg-foreground/[0.05] hover:text-foreground"
                )}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                key={service.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/${service.slug}`} className="block group h-full">
                  <div className="glass p-10 rounded-[3rem] border border-foreground/5 h-full flex flex-col hover:border-primary/40 transition-all duration-500 hover:shadow-3xl bg-white/40 group-hover:-translate-y-2">
                    <div className="mb-8 flex justify-between items-start">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                        <Building2 className="w-8 h-8 text-primary group-hover:text-white" />
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-foreground/30 bg-foreground/5 px-3 py-1 rounded-lg">
                        {service.category}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6">
                      {service.subtitle}
                    </p>
                    <p className="text-foreground/60 font-medium leading-relaxed line-clamp-3 mb-10 flex-grow">
                      {service.description[0]}
                    </p>

                    <div className="pt-8 border-t border-foreground/5 flex items-center justify-between text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                       <span>View Details</span>
                       <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40"
          >
            <div className="w-24 h-24 bg-foreground/5 rounded-full flex items-center justify-center mx-auto mb-8">
              <Filter className="w-10 h-10 text-foreground/20" />
            </div>
            <h3 className="text-3xl font-black text-foreground uppercase tracking-tight mb-4">No Services Found</h3>
            <p className="text-foreground/40 font-medium max-w-sm mx-auto">
              We couldn't find any services matching your criteria. Please try a different category or search term.
            </p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-12 text-primary font-black uppercase tracking-widest text-sm underline decoration-2 underline-offset-8"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Bottom CTA */}
      <section className="mt-40 py-40 bg-foreground text-white relative overflow-hidden rounded-[4rem]">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/20 blur-[150px] opacity-30" />
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h2 className="font-oswald text-5xl md:text-7xl font-black mb-12 uppercase leading-none tracking-tighter">
            Can't Find Your <br /><span className="text-gradient-gold italic">Industry?</span>
          </h2>
          <p className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-medium">
            We specialize in bespoke setups. Contact our advisors for a customized solution tailored to your specific goals.
          </p>
          <Link href="/contact">
            <button className="px-12 py-6 bg-gold hover:bg-gold-light text-white font-black rounded-[2rem] text-xl transition-all shadow-3xl flex items-center gap-4 mx-auto group">
              Consult an Advisor
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
