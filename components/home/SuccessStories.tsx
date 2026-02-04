"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, CheckCircle2, ArrowLeft, ArrowRight, Play } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexander Volkov',
    role: 'CEO, TechNova Solutions',
    company: 'TechNova Solutions',
    industry: 'Technology',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    quote: 'Grow Infinity didn\'t just set up my company; they fixed my banking trajectory. Their Banking-First approach is the only way to launch in the UAE.',
    rating: 5,
    verified: true,
    setupTime: '36 hours',
    location: 'Dubai, UAE'
  },
  {
    name: 'Sarah Al-Mubarak',
    role: 'Founder, Bloom Logistics',
    company: 'Bloom Logistics',
    industry: 'Logistics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    quote: 'The speed and precision were unmatched. I had my mainland license and IBAN ready while other agencies were still doing paperwork.',
    rating: 5,
    verified: true,
    setupTime: '48 hours',
    location: 'Abu Dhabi, UAE'
  },
  {
    name: 'James Chen',
    role: 'Managing Director',
    company: 'Pacific Ventures',
    industry: 'Finance',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    quote: 'Professional, efficient, and incredibly knowledgeable. They handled everything from licensing to banking with absolute precision.',
    rating: 5,
    verified: true,
    setupTime: '42 hours',
    location: 'Singapore'
  }
];

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-foreground/[0.03] to-background dark:from-[#020617] dark:via-[#0a0f1e] dark:to-[#020617] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/40 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gold/40 blur-[150px] rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-primary to-gold mb-8 rounded-full"
            />
            <h2 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase text-foreground">
              Legacy <br />
              <span className="text-gradient-gold italic">Success</span> Stories.
            </h2>
            <p className="text-xl text-foreground/70 dark:text-white/60 font-medium max-w-lg leading-relaxed">
              We empower the world's most ambitious entrepreneurs to secure their place in the UAE's economic future.
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(-1)}
              className="w-16 h-16 rounded-full glass border border-foreground/10 dark:border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
            >
              <ArrowLeft className="w-6 h-6 text-foreground/60 dark:text-white/60 group-hover:text-primary transition-colors" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(1)}
              className="w-16 h-16 rounded-full glass border border-foreground/10 dark:border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
            >
              <ArrowRight className="w-6 h-6 text-foreground/60 dark:text-white/60 group-hover:text-primary transition-colors" />
            </motion.button>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative h-[600px] lg:h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <div className="relative glass p-10 lg:p-16 rounded-[4rem] border border-foreground/10 dark:border-white/10 overflow-hidden h-full">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
                  <Quote className="w-full h-full" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5" />

                <div className="relative flex flex-col lg:flex-row gap-10 h-full">
                  {/* Left: Image & Info */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Profile Image */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative w-48 h-48 rounded-[3rem] overflow-hidden border-4 border-primary/30 shadow-2xl"
                      >
                        <img 
                          src={currentTestimonial.image} 
                          alt={currentTestimonial.name} 
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Play Button Overlay */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                        >
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Verified Badge */}
                      {currentTestimonial.verified && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4, type: "spring" }}
                          className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-xl border-4 border-background"
                        >
                          <CheckCircle2 className="w-8 h-8 text-white" />
                        </motion.div>
                      )}
                    </div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-8 space-y-3"
                    >
                      <div className="glass px-4 py-3 rounded-xl border border-foreground/10 dark:border-white/10">
                        <div className="text-xs text-foreground/60 dark:text-white/50 uppercase tracking-wider font-bold mb-1">Setup Time</div>
                        <div className="text-lg font-black text-gold">{currentTestimonial.setupTime}</div>
                      </div>
                      <div className="glass px-4 py-3 rounded-xl border border-foreground/10 dark:border-white/10">
                        <div className="text-xs text-foreground/60 dark:text-white/50 uppercase tracking-wider font-bold mb-1">Location</div>
                        <div className="text-sm font-black text-foreground dark:text-white">{currentTestimonial.location}</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {/* Rating */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-1 mb-6"
                    >
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                        >
                          <Star className="w-6 h-6 fill-gold text-gold" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Quote */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-8"
                    >
                      <Quote className="w-12 h-12 text-primary/30 mb-4" />
                      <p className="text-2xl lg:text-3xl font-medium leading-relaxed italic text-foreground dark:text-white/90">
                        "{currentTestimonial.quote}"
                      </p>
                    </motion.div>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <h4 className="text-2xl font-black tracking-tight text-foreground dark:text-white">{currentTestimonial.name}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-gold text-sm font-black uppercase tracking-wider">{currentTestimonial.role}</span>
                        <span className="w-1 h-1 rounded-full bg-foreground/30 dark:bg-white/30" />
                        <span className="text-foreground/60 dark:text-white/50 text-sm font-bold">{currentTestimonial.company}</span>
                      </div>
                      <div className="inline-block px-3 py-1.5 bg-primary/10 rounded-lg">
                        <span className="text-xs font-black text-primary uppercase tracking-wider">{currentTestimonial.industry}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-12"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-12 bg-gradient-to-r from-primary to-gold' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
