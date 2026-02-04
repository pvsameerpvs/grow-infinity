"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, TrendingUp, Globe2, Shield, Zap, Users, Award, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function MainlandSolutions() {
  const benefits = [
    {
      icon: Globe2,
      title: '100% Foreign Ownership',
      description: 'Own your business completely without the need for a local sponsor or partner in most business activities.'
    },
    {
      icon: Building2,
      title: 'Unlimited Business Scope',
      description: 'Conduct business anywhere in the UAE and internationally with no geographical restrictions.'
    },
    {
      icon: TrendingUp,
      title: 'Direct Government Contracts',
      description: 'Eligible to bid for and secure lucrative government tenders and contracts across the UAE.'
    },
    {
      icon: Shield,
      title: 'Full Legal Protection',
      description: 'Complete protection under UAE commercial law with access to local courts and legal recourse.'
    },
    {
      icon: Users,
      title: 'Flexible Visa Options',
      description: 'Sponsor unlimited employees and family members with various visa categories available.'
    },
    {
      icon: Zap,
      title: 'Instant Market Access',
      description: 'Immediate access to the UAE\'s thriving domestic market of over 10 million residents.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Business Activity Selection',
      description: 'Choose from 2,000+ approved business activities. Our experts help you select the perfect activities aligned with your business goals.',
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Trade Name Approval',
      description: 'Reserve your unique trade name with the Department of Economic Development (DED). We ensure compliance with naming conventions.',
      duration: '1 day'
    },
    {
      step: '03',
      title: 'Initial Approval & MOA',
      description: 'Obtain initial approval and draft your Memorandum of Association with our legal team ensuring all requirements are met.',
      duration: '2-3 days'
    },
    {
      step: '04',
      title: 'Office Space & Ejari',
      description: 'Secure approved office space and complete Ejari registration. We have partnerships with premium business centers across Dubai.',
      duration: '1-2 days'
    },
    {
      step: '05',
      title: 'License Issuance',
      description: 'Receive your official DED commercial license. We handle all documentation and government liaison on your behalf.',
      duration: '1-2 days'
    },
    {
      step: '06',
      title: 'Corporate Banking',
      description: 'Open corporate bank accounts with UAE\'s leading banks. Our banking relationships ensure smooth account opening.',
      duration: '5-10 days'
    }
  ];

  const licenseTypes = [
    {
      type: 'Commercial License',
      description: 'For trading, import/export, and general commercial activities',
      activities: ['General Trading', 'Import/Export', 'E-commerce', 'Wholesale/Retail'],
      icon: Building2
    },
    {
      type: 'Professional License',
      description: 'For service-based businesses and professional consultancies',
      activities: ['Consulting', 'Legal Services', 'Accounting', 'Marketing'],
      icon: Award
    },
    {
      type: 'Industrial License',
      description: 'For manufacturing and industrial production activities',
      activities: ['Manufacturing', 'Production', 'Assembly', 'Processing'],
      icon: TrendingUp
    }
  ];

  const costs = [
    { item: 'DED License Fee', range: 'AED 10,000 - 15,000' },
    { item: 'Office Space (Annual)', range: 'AED 15,000 - 50,000+' },
    { item: 'Visa Processing', range: 'AED 3,000 - 5,000 per visa' },
    { item: 'Government Fees', range: 'AED 5,000 - 10,000' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-br from-primary via-primary-dark to-foreground overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/30 blur-[150px] rounded-full"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 border border-white/20">
              <Building2 className="w-5 h-5 text-gold" />
              <span className="text-sm font-black uppercase tracking-wider text-white">Mainland Company Formation</span>
            </div>

            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-tight">
              Dubai Mainland <br />
              <span className="text-gradient-gold">Business Setup</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed font-medium">
              Establish your business in Dubai's mainland with <span className="text-gold font-black">100% foreign ownership</span>, unlimited market access, and the ability to trade anywhere in the UAE and globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cost-calculator">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Calculate Setup Cost
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 glass border-2 border-white/30 text-white font-black rounded-2xl text-lg transition-all flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Book Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Why Choose <span className="text-gradient-infinity">Mainland?</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Dubai Mainland offers unparalleled advantages for businesses looking to establish a strong presence in the UAE market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* License Types */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              License <span className="text-gradient-infinity">Types</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Choose the right license type based on your business activities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {licenseTypes.map((license, index) => (
              <motion.div
                key={license.type}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-6 mx-auto">
                  <license.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3 text-center">{license.type}</h3>
                <p className="text-foreground/70 mb-6 text-center">{license.description}</p>
                <div className="space-y-2">
                  {license.activities.map((activity) => (
                    <div key={activity} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Setup <span className="text-gradient-infinity">Process</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Our streamlined 6-step process ensures your mainland company is operational in as little as 7-10 days
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                      <span className="text-3xl font-black text-white">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-black text-foreground">{item.title}</h3>
                      <span className="px-4 py-1 bg-gold/10 text-gold text-sm font-black rounded-full whitespace-nowrap ml-4">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
                Investment <span className="text-gradient-infinity">Overview</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Transparent pricing with no hidden fees
              </p>
            </div>

            <div className="glass p-10 rounded-3xl border border-foreground/10">
              <div className="space-y-6">
                {costs.map((cost, index) => (
                  <motion.div
                    key={cost.item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center pb-6 border-b border-foreground/10 last:border-0"
                  >
                    <span className="text-lg font-bold text-foreground">{cost.item}</span>
                    <span className="text-xl font-black text-primary">{cost.range}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-2xl">
                <p className="text-sm text-foreground/70 text-center">
                  <strong className="text-foreground">Note:</strong> Costs vary based on business activity, office location, and number of visas. 
                  Use our cost calculator for a precise quote tailored to your needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-white mb-6 uppercase">
              Ready to Start Your <span className="text-gold">Mainland Journey?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Get your free consultation and personalized setup plan today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cost-calculator">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-5 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl"
                >
                  Calculate Your Costs
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-5 bg-white/20 hover:bg-white/30 text-white font-black rounded-2xl text-lg transition-all border-2 border-white/30"
                >
                  Speak to an Expert
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
