"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SERVICES } from '@/constants/services';
import { ThemeToggle } from './ThemeToggle';

const NAVIGATION = [
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
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Disable top bar as it's not in the target design
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="container mx-auto max-w-7xl pointer-events-auto">
        <nav className="relative flex items-center justify-between bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-full px-4 py-2 shadow-sm border border-foreground/5 transition-all duration-300">
          {/* Left: Navigation Group */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAVIGATION.map((group) => (
              <div
                key={group.name}
                className="relative group"
                onMouseEnter={() => setActiveMenu(group.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={cn(
                    "flex items-center text-[13px] font-medium tracking-tight transition-all py-2",
                    activeMenu === group.name ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {group.name}
                  <ChevronDown className={cn(
                    "w-3.5 h-3.5 ml-1 transition-transform duration-300 opacity-50",
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
                      className="absolute left-0 top-full pt-4 w-[280px]"
                    >
                      <div className="bg-background rounded-3xl shadow-xl p-4 border border-foreground/10 overflow-hidden">
                        <div className="grid gap-y-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.slug}
                              href={`/${item.slug}`}
                              onClick={() => setActiveMenu(null)}
                              className="group/link flex items-center px-4 py-3 rounded-2xl hover:bg-foreground/[0.03] transition-all"
                            >
                              <div className="text-[13px] text-foreground/60 group-hover/link:text-primary font-medium transition-colors">
                                {item.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Center: Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center group">
            <div className="relative h-8 w-auto">
              <img 
                src="/logo-black.png" 
                alt="Grow Infinity" 
                className="h-full w-auto object-contain dark:hidden"
              />
              <img 
                src="/logo-white.png" 
                alt="Grow Infinity" 
                className="h-full w-auto object-contain hidden dark:block"
              />
            </div>
          </Link>

          {/* Right: Actions Group */}
          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-1 pr-2">
              <ThemeToggle />
            </div>
            
           
            
            <Link
              href="/cost-calculator"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-[13px] font-bold tracking-tight transition-all active:scale-95 shadow-lg shadow-primary/20 button-premium"
            >
              Cost Calculator
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground p-2 rounded-full hover:bg-foreground/5 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-4 top-4 bottom-4 w-[calc(100%-2rem)] max-w-sm z-[110] bg-background rounded-3xl shadow-2xl p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Navigation</span>
                <button
                  className="p-2 rounded-full bg-foreground/5"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {NAVIGATION.map((group) => (
                  <div key={group.name} className="space-y-3">
                    <h4 className="text-[11px] font-black text-foreground/20 uppercase tracking-[0.2em]">{group.name}</h4>
                    <div className="grid gap-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${item.slug}`}
                          className="flex items-center text-sm font-semibold text-foreground/70 hover:text-primary py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-6 border-t border-foreground/5 space-y-3">
                  <Link
                    href="/cost-calculator"
                    className="flex items-center justify-center bg-foreground/5 text-foreground py-4 rounded-2xl font-bold text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Cost Calculator
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-bold text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
