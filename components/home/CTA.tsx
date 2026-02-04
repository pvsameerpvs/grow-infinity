"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Sparkles, Zap, Phone } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-foreground">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/30 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/20 blur-[150px] rounded-full"
        />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full mb-10 border border-white/20 shadow-2xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-gold" />
              </motion.div>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-white/90">Start Your Journey</span>
              <Zap className="w-5 h-5 text-gold" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-oswald text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase"
            >
              Ready to <br />
              <span className="relative inline-block">
                <span className="text-gradient-gold">Grow Infinitely?</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-gold via-white to-gold rounded-full"
                />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/80 mb-16 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              Get a comprehensive breakdown of your business setup costs in less than{' '}
              <span className="text-gold font-black">2 minutes</span> with our precision calculator.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row justify-center gap-6 items-center"
            >
              {/* Primary CTA */}
              <Link href="/cost-calculator">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative px-10 lg:px-14 py-6 lg:py-7 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-white font-black rounded-[2rem] text-base lg:text-xl transition-all flex items-center justify-center gap-3 shadow-2xl overflow-hidden">
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <Calculator className="w-6 h-6 relative z-10" />
                    <span className="relative z-10 uppercase tracking-wider">Use Cost Calculator</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>

              {/* Secondary CTA */}
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative px-10 lg:px-14 py-6 lg:py-7 glass hover:bg-white/20 text-white font-black rounded-[2rem] text-base lg:text-xl transition-all border-2 border-white/30 hover:border-white/50 flex items-center justify-center gap-3 backdrop-blur-md">
                    <Phone className="w-6 h-6" />
                    <span className="uppercase tracking-wider">Book VIP Consultation</span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-12"
            >
              {[
                { icon: Zap, text: '48H Setup', color: 'text-gold' },
                { icon: Sparkles, text: '100% Success Rate', color: 'text-white' },
                { icon: Calculator, text: 'Free Consultation', color: 'text-gold' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-bold text-white/80 uppercase tracking-wider">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 lg:gap-12 glass p-8 lg:p-12 rounded-[3rem] border border-white/20"
          >
            {[
              { value: '5,000+', label: 'Companies Launched' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Expert Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
