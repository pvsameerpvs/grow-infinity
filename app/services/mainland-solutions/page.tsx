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

  const requiredDocuments = [
    { doc: 'Passport Copies', detail: 'Valid passport copies of all shareholders and directors' },
    { doc: 'Emirates ID', detail: 'UAE residence visa or entry stamp for all partners' },
    { doc: 'Business Plan', detail: 'Detailed business plan outlining your operations and projections' },
    { doc: 'Proof of Address', detail: 'Utility bill or tenancy contract from home country' },
    { doc: 'No Objection Certificate', detail: 'NOC from current sponsor if applicable' },
    { doc: 'Bank Reference Letter', detail: 'Reference letter from your current bank' },
    { doc: 'Educational Certificates', detail: 'Attested degrees for professional licenses' },
    { doc: 'Office Tenancy Contract', detail: 'Ejari-registered office lease agreement' }
  ];

  const faqs = [
    {
      q: 'How long does mainland company setup take?',
      a: 'Typically 7-10 working days from document submission to license issuance, depending on the business activity and completeness of documentation.'
    },
    {
      q: 'Can I operate from a virtual office?',
      a: 'No, mainland companies require a physical office space with an Ejari-registered tenancy contract. However, flexi-desk solutions are available starting from AED 15,000/year.'
    },
    {
      q: 'What is the minimum capital requirement?',
      a: 'There is no minimum capital requirement for most mainland companies. However, certain activities may require specific capital as per DED regulations.'
    },
    {
      q: 'Can I change my business activities later?',
      a: 'Yes, you can add or modify business activities during license renewal or through an amendment process with additional fees.'
    },
    {
      q: 'Do I need a local partner?',
      a: 'No, 100% foreign ownership is now permitted for most business activities in Dubai mainland. Only a few strategic sectors still require UAE national partnership.'
    },
    {
      q: 'How many visas can I get?',
      a: 'Visa allocation depends on your office space size and business activity. Typically, you get 1 visa per 100 sq ft of office space, with a minimum of 3 visas.'
    }
  ];

  const comparisonData = [
    { feature: 'Ownership', mainland: '100% Foreign', freezone: '100% Foreign' },
    { feature: 'Trade in UAE', mainland: 'Unlimited', freezone: 'Requires Distributor' },
    { feature: 'Office Requirement', mainland: 'Physical Office', freezone: 'Flexi-desk Available' },
    { feature: 'Government Contracts', mainland: 'Eligible', freezone: 'Not Eligible' },
    { feature: 'Corporate Tax', mainland: '9% (from 2023)', freezone: '0% (conditions apply)' },
    { feature: 'Setup Cost', mainland: 'AED 25,000+', freezone: 'AED 15,000+' },
    { feature: 'Visa Cost', mainland: 'AED 5,000+', freezone: 'AED 3,000+' },
    { feature: 'Setup Time', mainland: '7-10 days', freezone: '2-5 days' }
  ];

  const industries = [
    {
      name: 'Trading & E-commerce',
      description: 'Import/export, wholesale, retail, and online trading',
      icon: TrendingUp,
      benefits: ['Access to UAE market', 'Multiple warehouse options', 'Easy customs clearance']
    },
    {
      name: 'Professional Services',
      description: 'Consulting, legal, accounting, and advisory services',
      icon: Award,
      benefits: ['Professional recognition', 'Client credibility', 'Flexible operations']
    },
    {
      name: 'Technology & IT',
      description: 'Software development, IT services, and digital solutions',
      icon: Zap,
      benefits: ['Tech talent pool', 'Innovation ecosystem', 'Global connectivity']
    },
    {
      name: 'Real Estate',
      description: 'Property development, brokerage, and management',
      icon: Building2,
      benefits: ['Booming market', 'High ROI potential', 'Regulatory support']
    }
  ];

  const whyChooseUs = [
    {
      title: 'Banking-First Approach',
      description: 'We structure your company to ensure smooth corporate bank account opening with UAE\'s leading banks.',
      icon: Shield
    },
    {
      title: 'End-to-End Support',
      description: 'From initial consultation to license issuance and beyond, we handle every step of your setup journey.',
      icon: Users
    },
    {
      title: 'Expert Legal Team',
      description: 'Our experienced legal advisors ensure your MOA and all documents are compliant and bank-ready.',
      icon: Award
    },
    {
      title: 'Fast-Track Processing',
      description: 'Leveraging our relationships with government entities, we expedite your application for faster approval.',
      icon: Zap
    }
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

      {/* Required Documents */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Required <span className="text-gradient-infinity">Documents</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Comprehensive documentation checklist to ensure smooth and efficient mainland company formation. Our team will guide you through each requirement and assist with document preparation, attestation, and submission to relevant authorities for faster processing and approval.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {requiredDocuments.map((item, index) => (
                <motion.div
                  key={item.doc}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass p-6 rounded-2xl border border-foreground/10 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-foreground mb-2">{item.doc}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mainland vs Free Zone Comparison */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Mainland vs <span className="text-gradient-infinity">Free Zone</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Understanding the key differences between mainland and free zone company formation is crucial for making an informed decision. Each jurisdiction offers unique advantages depending on your business model, target market, and operational requirements. Our experts will help you choose the optimal structure for your specific needs and long-term growth strategy.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto glass p-8 rounded-3xl border border-foreground/10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="text-left py-4 px-4 font-black text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-black text-primary">Mainland</th>
                  <th className="text-center py-4 px-4 font-black text-foreground/60">Free Zone</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-foreground/5 last:border-0"
                  >
                    <td className="py-4 px-4 font-bold text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-primary font-bold">{row.mainland}</td>
                    <td className="py-4 px-4 text-center text-foreground/70">{row.freezone}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industry-Specific Guidance */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Industry-Specific <span className="text-gradient-infinity">Solutions</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Every industry has unique requirements and regulatory considerations when establishing a mainland presence in Dubai. Our specialized consultants provide tailored guidance for your specific sector, ensuring compliance with industry regulations, optimal license selection, and strategic positioning for maximum market penetration and business growth opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-foreground/10 hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3">{industry.name}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{industry.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-black text-foreground/60 uppercase tracking-wider mb-3">Key Benefits:</p>
                  {industry.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Why Choose <span className="text-gradient-infinity">Grow Infinity?</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              With over a decade of experience in UAE business formation, we have successfully established thousands of mainland companies across diverse industries. Our proven track record, strategic partnerships with government entities, and comprehensive understanding of banking requirements set us apart as the premier choice for entrepreneurs seeking seamless mainland company formation with guaranteed banking access.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-foreground/10 text-center hover:border-primary/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
              Frequently Asked <span className="text-gradient-infinity">Questions</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Get answers to the most common questions about Dubai mainland company formation. Our comprehensive FAQ section addresses key concerns regarding setup timelines, costs, documentation requirements, and operational considerations to help you make informed decisions about your business establishment journey in the UAE.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass p-8 rounded-3xl border border-foreground/10"
              >
                <h3 className="text-xl font-black text-foreground mb-4 flex items-start gap-3">
                  <span className="text-primary flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-foreground/70 leading-relaxed pl-7">
                  <span className="font-black text-foreground">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Information */}
      <section className="py-24 bg-foreground/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-oswald text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
                Visa <span className="text-gradient-infinity">Information</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Comprehensive visa solutions for you, your employees, and family members with streamlined processing and expert PRO services handling all government formalities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border border-foreground/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">Investor Visa</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  As a mainland company owner, you are eligible for a 2 or 3-year investor residence visa, renewable upon license renewal. This visa allows you to sponsor family members and provides complete freedom to live and work in the UAE without employer sponsorship requirements.
                </p>
                <div className="text-sm font-bold text-primary">AED 5,000 - 7,000</div>
              </div>

              <div className="glass p-8 rounded-3xl border border-foreground/10">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">Employee Visa</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Sponsor skilled professionals and staff members with 2-year employment visas. The number of visas allocated depends on your office space size and business activity classification. We handle all labor card processing, medical examinations, Emirates ID applications, and visa stamping procedures efficiently.
                </p>
                <div className="text-sm font-bold text-primary">AED 3,000 - 5,000 per visa</div>
              </div>

              <div className="glass p-8 rounded-3xl border border-foreground/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">Family Visa</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Bring your loved ones to the UAE by sponsoring your spouse, children, and parents under your mainland company. Family visa holders can also apply for work permits if they wish to seek employment. Minimum salary requirements apply based on accommodation type and family size.
                </p>
                <div className="text-sm font-bold text-primary">AED 3,000 - 4,000 per person</div>
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
