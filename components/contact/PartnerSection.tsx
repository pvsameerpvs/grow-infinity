"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Handshake, TrendingUp, ArrowRight, CheckCircle2, Coins, Key } from 'lucide-react';
import Link from 'next/link';

export function PartnerSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Guaranteed Occupancy",
      description: "Our high-net-worth clients from around the globe are constantly seeking premium office spaces to establish their UAE presence."
    },
    {
      icon: Coins,
      title: "Premium Rental Yields",
      description: "Access a stream of corporate tenants prepared to pay premium rates for compliant, high-spec business environments."
    },
    {
      icon: Handshake,
      title: "Zero-Hassle Management",
      description: "We handle the client vetting and documentation, ensuring only legitimate, verified businesses occupy your properties."
    },
    {
      icon: Key,
      title: "Strategic Partnership",
      description: "Join our exclusive network of property partners and gain first-mover advantage on corporate relocation projects."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary/[0.02] dark:bg-primary/[0.05]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8">
              <Building2 className="w-3.5 h-3.5" />
              Real Estate Partners
            </div>
            
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 uppercase leading-[1.1]">
              List Your Property with <span className="text-gradient-infinity">Grow Infinity</span>
            </h2>
            
            <p className="text-lg text-foreground/60 mb-12 leading-relaxed font-medium">
              We connect world-class office spaces with international visionaries. If you own premium commercial property in the UAE, partner with us to secure high-tier corporate tenants and maximize your investment value.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 shadow-xl border border-primary/5 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-sm font-black text-foreground uppercase tracking-wider">{benefit.title}</h4>
                  <p className="text-xs text-foreground/50 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contact-form"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-primary-dark transition-all button-premium shadow-xl shadow-primary/20"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Commercial Property"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-black text-lg uppercase tracking-tight">Verified Assets</div>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Premium Inventory</div>
                  </div>
                </div>
                <div className="h-px w-full bg-white/10 mb-4" />
                <div className="flex justify-between items-center">
                  <div className="text-white/80 text-xs font-medium italic">Join 500+ Luxury Property Partners</div>
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-foreground/20 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Partner" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
