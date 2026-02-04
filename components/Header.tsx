"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SERVICES } from '@/constants/services';
import { ThemeToggle } from './ThemeToggle';

const NAVIGATION = [
  // ... existing navigation remains same
  {
    name: 'Mainland',
    category: 'Mainland',
    items: SERVICES.filter(s => s.category === 'Mainland')
  },
  {
    name: 'Free Zone',
    category: 'Free Zone',
    items: SERVICES.filter(s => s.category === 'Free Zone')
  },
  {
    name: 'Offshore',
    category: 'Offshore',
    items: SERVICES.filter(s => s.category === 'Offshore')
  },
  {
    name: 'Banking',
    category: 'Banking',
    items: SERVICES.filter(s => s.category === 'Banking')
  },
  {
    name: 'Compliance',
    category: 'Compliance',
    items: SERVICES.filter(s => s.category === 'Compliance')
  },
  {
    name: 'Residency',
    category: 'Residency',
    items: SERVICES.filter(s => s.category === 'Residency')
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-white py-2.5 text-[11px] font-bold tracking-wider uppercase border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span className="flex items-center">
              <Phone className="w-3.5 h-3.5 mr-2 text-gold-light" />
              +971 4 XXX XXXX
            </span>
            <span className="flex items-center">
              <Mail className="w-3.5 h-3.5 mr-2 text-gold-light" />
              info@growinfinity.ae
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <span className="flex items-center">
              <Globe className="w-3.5 h-3.5 mr-2 text-gold-light" />
              Dubai International Financial Centre
            </span>
            <Link href="/cost-calculator" className="text-gold-light hover:text-white transition-colors flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-light mr-2 animate-pulse" />
              Cost Calculator
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled 
            ? "bg-background/80 backdrop-blur-xl shadow-2xl shadow-primary/5 py-3 border-b border-primary/5" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 bg-primary flex items-center justify-center rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-black text-2xl italic tracking-tighter">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-tight text-foreground leading-none">
                  GROW<span className="text-primary">INFINITY</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-bold mt-0.5">
                  Elite Corporate Advisory
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-7">
              {NAVIGATION.map((group) => (
                <div
                  key={group.name}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(group.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={cn(
                      "flex items-center text-xs font-black uppercase tracking-[0.1em] transition-all py-2",
                      activeMenu === group.name ? "text-primary" : "text-foreground/70 hover:text-primary"
                    )}
                  >
                    {group.name}
                    <ChevronDown className={cn(
                      "w-3.5 h-3.5 ml-1.5 transition-transform duration-300",
                      activeMenu === group.name ? "rotate-180" : ""
                    )} />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {activeMenu === group.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[650px]"
                      >
                        <div className="glass rounded-[2rem] shadow-2xl p-8 grid grid-cols-2 gap-8 border border-white/10 overflow-hidden relative">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 blur-2xl rounded-full" />
                          
                          <div className="col-span-1 space-y-6 relative z-10">
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-6 bg-primary rounded-full" />
                              <h4 className="text-sm font-black text-foreground uppercase tracking-widest">
                                {group.name} Solutions
                              </h4>
                            </div>
                            <div className="grid gap-y-3">
                              {group.items.map((item) => (
                                <Link
                                  key={item.slug}
                                  href={`/${item.slug}`}
                                  className="group/link flex items-center text-[13px] text-foreground/60 hover:text-primary transition-all font-bold"
                                >
                                  <div className="w-2 h-2 rounded-full border border-primary/20 group-hover/link:bg-primary group-hover/link:scale-125 mr-3 transition-all" />
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="col-span-1 bg-primary/[0.03] dark:bg-primary/[0.08] rounded-3xl p-7 flex flex-col justify-between border border-primary/5 relative z-10">
                            <div>
                              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                <Globe className="w-5 h-5 text-primary" />
                              </div>
                              <h5 className="text-foreground font-black mb-3 uppercase text-[11px] tracking-widest">Strategic Advisory</h5>
                              <p className="text-[12px] text-foreground/50 leading-relaxed font-medium">
                                Our banking-first methodology ensures your {group.name.toLowerCase()} entity is operational with a corporate IBAN in record time.
                              </p>
                            </div>
                            <Link 
                              href="/cost-calculator" 
                              className="inline-flex items-center text-xs font-black text-primary hover:text-primary-dark transition-all mt-6 group/btn"
                            >
                              START COST CALCULATION
                              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="flex items-center space-x-4 pl-4 border-l border-foreground/10">
                <ThemeToggle />
                <Link
                  href="/cost-calculator"
                  className="bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-xl text-xs font-black uppercase tracking-widest button-premium shadow-xl shadow-primary/20 transition-all active:scale-95"
                >
                  Get A Quote
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button + Toggle */}
            <div className="flex items-center space-x-3 lg:hidden">
              <ThemeToggle />
              <button
                className="text-foreground p-2 rounded-xl bg-primary/5"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[60] lg:hidden bg-background"
            >
              <div className="flex flex-col h-full pt-24 px-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-xl font-black tracking-tight">MENU</span>
                  <button
                    className="text-foreground p-3 rounded-full bg-primary/5"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col space-y-8 pb-20">
                  {NAVIGATION.map((group) => (
                    <div key={group.name} className="space-y-5">
                      <div className="flex items-center space-x-3">
                        <div className="w-1 h-4 bg-gold rounded-full" />
                        <h4 className="text-xs font-black text-gold uppercase tracking-[0.2em]">{group.name}</h4>
                      </div>
                      <div className="flex flex-col space-y-4 pl-4 border-l-2 border-primary/5">
                        {group.items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/${item.slug}`}
                            className="text-lg text-foreground/70 font-bold hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-6 space-y-4">
                    <Link
                      href="/cost-calculator"
                      className="w-full bg-primary text-white py-5 rounded-2xl flex items-center justify-center font-black text-lg shadow-2xl shadow-primary/20"
                      onClick={() => setIsOpen(false)}
                    >
                      FREE CONSULTATION
                    </Link>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 glass rounded-xl flex flex-col items-center">
                        <Phone className="w-5 h-5 text-primary mb-2" />
                        <span className="text-[10px] font-bold opacity-50">CALL US</span>
                      </div>
                      <div className="p-4 glass rounded-xl flex flex-col items-center">
                        <Mail className="w-5 h-5 text-primary mb-2" />
                        <span className="text-[10px] font-bold opacity-50">EMAIL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
