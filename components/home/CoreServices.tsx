"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Calculator, ShieldCheck, Users2, Globe, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const services = [
  { 
    title: 'Mainland Setup', 
    icon: Building2, 
    slug: 'mainland-company-formation', 
    desc: 'Full access to UAE local markets with 100% ownership and unlimited business activities.',
    image: '/service-mainland.png',
    badge: 'Most Popular'
  },
  { 
    title: 'Free Zone Setup', 
    icon: Landmark, 
    slug: 'free-zone-company-setup', 
    desc: '100% tax-free environments for specialized industries with complete foreign ownership.',
    image: '/service-freezone.png',
    badge: '0% Tax'
  },
  { 
    title: 'Banking Advisory', 
    icon: Calculator, 
    slug: 'corporate-bank-account-uae', 
    desc: 'Pre-approved corporate accounts with top-tier UAE banks and seamless onboarding.',
    image: '/service-banking.png',
    badge: 'Fast Track'
  },
  { 
    title: 'Golden Visa', 
    icon: ShieldCheck, 
    slug: 'golden-visa-uae', 
    desc: 'Secure your 10-year residency and long-term security for you and your family.',
    image: '/service-visa.png',
    badge: '10 Years'
  },
  { 
    title: 'Corporate Tax', 
    icon: Users2, 
    slug: 'corporate-tax-uae', 
    desc: 'Strategic compliance with the UAE\'s new 9% tax regime and expert advisory.',
    image: '/service-tax.png',
    badge: 'Compliance'
  },
  { 
    title: 'PRO Services', 
    icon: Globe, 
    slug: 'pro-services-uae', 
    desc: 'Hands-off government liaison for all your legal paperwork and documentation.',
    image: '/service-pro.png',
    badge: 'Full Support'
  },
];

export function CoreServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-foreground/[0.01] to-background overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">Our Services</span>
          </div>
          
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight uppercase leading-tight">
            Specialized Solutions for <br />
            <span className="text-gradient-infinity px-2">Infinite Growth</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            From mainland formation to complex banking compliance, we provide the foundation for your Middle Eastern legacy.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/70 group-hover:from-primary/90 group-hover:via-primary/80 group-hover:to-primary-dark/90 transition-all duration-500" />
              </div>

              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col min-h-[400px]">
                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-[10px] font-black uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-500"
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-black mb-4 text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                {/* CTA */}
                <Link 
                  href={`/${service.slug}`} 
                  className="inline-flex items-center gap-2 text-white font-black text-sm uppercase tracking-wider group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Decorative Glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/30 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-black rounded-xl text-sm uppercase tracking-wider transition-all duration-500 button-premium group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

