"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, TrendingUp, Globe2, Shield, Zap, Users, Award, ArrowRight, Phone, DollarSign, Building } from 'lucide-react';
import Link from 'next/link';

export default function FreeZoneSolutions() {
  const benefits = [
    {
      icon: DollarSign,
      title: '0% Corporate Tax',
      description: 'Enjoy complete tax exemption on corporate and personal income for 15-50 years, renewable.'
    },
    {
      icon: Globe2,
      title: '100% Foreign Ownership',
      description: 'Full ownership of your company with no requirement for a local sponsor or partner.'
    },
    {
      icon: Shield,
      title: '100% Profit Repatriation',
      description: 'Transfer 100% of your capital and profits back to your home country without restrictions.'
    },
    {
      icon: Zap,
      title: 'Fast Setup Process',
      description: 'Get your business operational in as little as 48 hours with our expedited processing.'
    },
    {
      icon: Users,
      title: 'Flexible Visa Allocation',
      description: 'Sponsor employees and dependents based on your office space and business activity.'
    },
    {
      icon: Building,
      title: 'World-Class Infrastructure',
      description: 'Access state-of-the-art facilities, modern offices, and premium business amenities.'
    }
  ];

  const popularFreeZones = [
    {
      name: 'DMCC',
      fullName: 'Dubai Multi Commodities Centre',
      icon: Award,
      specialization: 'Commodities & Trading',
      minCost: 'AED 15,000',
      features: ['Prime JLT Location', 'Banking Support', 'Networking Events'],
      description: 'World\'s #1 Free Zone for commodities trading and general business activities'
    },
    {
      name: 'IFZA',
      fullName: 'International Free Zone Authority',
      icon: Rocket,
      specialization: 'E-commerce & Tech',
      minCost: 'AED 10,000',
      features: ['100% Remote Setup', 'Lowest Costs', 'Fast Processing'],
      description: 'Most cost-effective free zone with complete remote setup capabilities'
    },
    {
      name: 'DIFC',
      fullName: 'Dubai International Financial Centre',
      icon: TrendingUp,
      specialization: 'Financial Services',
      minCost: 'AED 35,000',
      features: ['Independent Legal System', 'Premium Location', 'Global Recognition'],
      description: 'Leading financial hub with common law framework and world-class regulation'
    },
    {
      name: 'Dubai Silicon Oasis',
      fullName: 'DSO Technology Park',
      icon: Zap,
      specialization: 'Technology & Innovation',
      minCost: 'AED 12,000',
      features: ['Tech Ecosystem', 'R&D Facilities', 'Innovation Hub'],
      description: 'Integrated free zone dedicated to technology companies and innovation'
    },
    {
      name: 'RAKEZ',
      fullName: 'Ras Al Khaimah Economic Zone',
      icon: Building,
      specialization: 'Manufacturing & Industrial',
      minCost: 'AED 9,500',
      features: ['Industrial Land', 'Warehousing', 'Budget-Friendly'],
      description: 'Ideal for manufacturing and industrial businesses with competitive pricing'
    },
    {
      name: 'Meydan Free Zone',
      fullName: 'Meydan Business Park',
      icon: Globe2,
      specialization: 'Business Services',
      minCost: 'AED 11,000',
      features: ['Flexible Packages', 'Quick Setup', 'Central Location'],
      description: 'Versatile free zone offering flexible solutions for various business types'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Free Zone Selection',
      description: 'Our experts analyze your business needs and recommend the optimal free zone based on your industry, budget, and growth plans.',
      duration: '1 day'
    },
    {
      step: '02',
      title: 'License Application',
      description: 'Submit your license application with required documents. We handle all paperwork and ensure compliance with free zone regulations.',
      duration: '1-2 days'
    },
    {
      step: '03',
      title: 'Approval & Payment',
      description: 'Receive initial approval and complete payment for license fees, office space, and visa allocations.',
      duration: '1 day'
    },
    {
      step: '04',
      title: 'License Issuance',
      description: 'Your free zone license is issued, and you receive all official documentation including establishment card.',
      duration: '1-2 days'
    },
    {
      step: '05',
      title: 'Visa Processing',
      description: 'Process investor, employee, and dependent visas. We coordinate medical tests, Emirates ID, and all formalities.',
      duration: '5-7 days'
    },
    {
      step: '06',
      title: 'Bank Account Opening',
      description: 'Open corporate bank accounts with UAE banks. Our banking partnerships ensure smooth account activation.',
      duration: '7-14 days'
    }
  ];

  const comparisonTable = [
    { feature: 'Corporate Tax', mainland: '9% (from 2023)', freezone: '0% (15-50 years)' },
    { feature: 'Foreign Ownership', mainland: '100%', freezone: '100%' },
    { feature: 'Office Requirement', mainland: 'Physical office mandatory', freezone: 'Flexi-desk available' },
    { feature: 'Visa Cost', mainland: 'AED 5,000+', freezone: 'AED 3,000+' },
    { feature: 'Setup Time', mainland: '7-10 days', freezone: '2-5 days' },
    { feature: 'Trade in UAE', mainland: 'Yes', freezone: 'Requires distributor' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-br from-primary via-primary-dark to-foreground overflow-hidden">
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
              <Rocket className="w-5 h-5 text-gold" />
              <span className="text-sm font-black uppercase tracking-wider text-white">Free Zone Company Formation</span>
            </div>

            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-tight">
              UAE Free Zone <br />
              <span className="text-gradient-gold">Business Setup</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed font-medium">
              Launch your business in UAE's premier free zones with <span className="text-gold font-black">0% tax</span>, 100% ownership, and complete profit repatriation. Setup in as little as 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cost-calculator">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Compare Free Zones
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 glass border-2 border-white/30 text-white font-black rounded-2xl text-lg transition-all flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Free Consultation
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
              Free Zone <span className="text-gradient-infinity">Advantages</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Discover why over 40,000 companies choose UAE free zones for their business operations
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

      {/* Popular Free Zones */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Popular <span className="text-gradient-infinity">Free Zones</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Choose from 45+ free zones across the UAE, each offering unique advantages for different industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularFreeZones.map((zone, index) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-1">{zone.name}</h3>
                    <p className="text-sm text-foreground/60">{zone.fullName}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
                    <zone.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg mb-3">
                    <span className="text-xs font-black text-primary uppercase">{zone.specialization}</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{zone.description}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {zone.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-foreground/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">Starting from</span>
                    <span className="text-xl font-black text-primary">{zone.minCost}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
                Mainland vs <span className="text-gradient-infinity">Free Zone</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Compare key differences to make an informed decision
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-foreground/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-4 px-4 font-black text-foreground">Feature</th>
                      <th className="text-center py-4 px-4 font-black text-foreground">Mainland</th>
                      <th className="text-center py-4 px-4 font-black text-primary">Free Zone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => (
                      <motion.tr
                        key={row.feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-foreground/5 last:border-0"
                      >
                        <td className="py-4 px-4 font-bold text-foreground">{row.feature}</td>
                        <td className="py-4 px-4 text-center text-foreground/70">{row.mainland}</td>
                        <td className="py-4 px-4 text-center text-primary font-bold">{row.freezone}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-24 bg-foreground/[0.02]">
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
              Get your free zone company operational in as little as 48 hours with our streamlined process
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
              Find Your Perfect <span className="text-gold">Free Zone</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let our experts guide you to the ideal free zone for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cost-calculator">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-5 bg-gold hover:bg-gold-light text-white font-black rounded-2xl text-lg transition-all shadow-2xl"
                >
                  Compare Free Zones
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-5 bg-white/20 hover:bg-white/30 text-white font-black rounded-2xl text-lg transition-all border-2 border-white/30"
                >
                  Get Expert Advice
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
