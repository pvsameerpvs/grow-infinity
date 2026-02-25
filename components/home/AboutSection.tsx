"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Users,
  Globe2,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Agile Execution",
    description:
      "Rapid-response setups executed with zero-friction compliance and obsessive attention to detail.",
  },
  {
    icon: Lightbulb,
    title: "Venture-First",
    description:
      "Leveraging tech-enabled solutions and top-tier banking integrations for the modern founder.",
  },
  {
    icon: Users,
    title: "Founder-Centric",
    description:
      "Unmatched support tailored to the needs of high-growth startups and digital innovators.",
  },
  {
    icon: Globe2,
    title: "Global Scalability",
    description:
      "Seamlessly transition your business from a local startup to a global powerhouse.",
  },
];

const milestones = [
  { year: "2015", event: "Founded in Dubai" },
  { year: "2018", event: "ISO 9001:2015 Certified" },
  { year: "2020", event: "1,000+ Companies Established" },
  { year: "2024", event: "5,000+ Success Stories" },
];

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="relative py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="relative w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden group shadow-2xl bg-background border border-foreground/5">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full" />

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary/10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                About Grow Infinity
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight max-w-4xl mx-auto">
              Architecting Your UAE Success
            </h2>
            <p className="text-base text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We're not just business setup consultants—we're your strategic
              partners in building a legacy in the world's most dynamic business
              hub.
            </p>
          </motion.div>

          {/* Story Section with Images */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
            {/* Left: Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="col-span-2 relative h-[300px] lg:h-[400px] rounded-3xl overflow-hidden group border border-white/10"
                >
                  <img
                    src="/about-office.png"
                    alt="Grow Infinity Dubai Office"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-white font-black text-sm uppercase tracking-wider">
                      Dubai Office
                    </div>
                    <div className="text-white/80 text-xs">
                      Premium Business District
                    </div>
                  </div>
                </motion.div>

                {/* Two Small Images */}
                
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl border border-primary/10 shadow-2xl hidden lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground">
                      9+ Years
                    </div>
                    <div className="text-xs text-foreground/60 font-bold">
                      Industry Excellence
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl lg:text-4xl font-black text-foreground mb-6 tracking-tight">
                The New Standard for{" "}
                <span className="text-primary">UAE Venture Launch</span>
              </h3>

              <div className="space-y-4 mb-8">
                <p className="text-foreground/70 leading-relaxed">
                  Grow Infinity is the high-velocity partner for startups and
                  digital ventures entering the UAE. We've replaced traditional,
                  slow-moving consultancy with a streamlined, tech-enabled
                  deployment model that mirrors the speed of your business.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Our platform provides instant access to Mainland and Free Zone
                  ecosystems, supported by deep integrations with 25+ leading
                  banks to ensure your financial infrastructure is ready Day 1.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Success Rate", value: "100%" },
                  { label: "Avg. Setup Time", value: "7 Days" },
                  { label: "Banking Partners", value: "25+" },
                  { label: "Expert Advisors", value: "40+" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(var(--primary-rgb), 0.3)",
                    }}
                    className="glass p-4 rounded-xl border border-foreground/5 transition-colors"
                  >
                    <div className="text-2xl font-black text-primary mb-1">
                      {item.value}
                    </div>
                    <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-black rounded-xl text-sm transition-all duration-500 button-premium cursor-pointer"
                >
                  <span>Learn Our Story</span>
                  <Award className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Core Values */}
        </div>
      </div>
    </section>
  );
}
