"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, FileCheck, FileText, Rocket, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Deep dive into your business model and banking needs to determine the optimal jurisdiction.',
    icon: MessageCircle,
    duration: '1 Day',
    details: [
      'Comprehensive business model analysis',
      'Banking requirements assessment',
      'Jurisdiction recommendation',
      'Personalized setup strategy'
    ]
  },
  {
    num: '02',
    title: 'Pre-Approval',
    desc: 'Verify eligibility with selected UAE authorities and banking partners before formal filing.',
    icon: FileCheck,
    duration: '2 Days',
    details: [
      'Eligibility verification with UAE authorities',
      'Banking partner pre-approval',
      'Document checklist preparation',
      'Compliance requirements review'
    ]
  },
  {
    num: '03',
    title: 'Documentation',
    desc: 'Comprehensive drafting and legalization of all corporate instruments by our legal experts.',
    icon: FileText,
    duration: '2 Days',
    details: [
      'Corporate documents drafting',
      'Legal instrument preparation',
      'Document legalization',
      'Shareholder agreements'
    ]
  },
  {
    num: '04',
    title: 'Setup & Bank',
    desc: 'Concurrent company issuance and corporate account activation via our VIP channels.',
    icon: Rocket,
    duration: '2 Days',
    details: [
      'Company license issuance',
      'Corporate bank account opening',
      'VIP channel activation',
      'Final compliance verification'
    ]
  }
];

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(var(--foreground-rgb)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
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
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">Our Process</span>
          </div>
          
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight uppercase leading-tight">
            Your Roadmap To <br />
            <span className="text-gradient-infinity px-2">Excellence</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed mb-8">
            We streamline the complexities of UAE regulation into a precise four-stage deployment.
          </p>

          {/* Timeline Summary */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-primary/10"
          >
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-black text-foreground">Complete Setup in Just 7 Days</span>
          </motion.div>
        </motion.div>

        {/* Stepper Tabs */}
        <div className="max-w-6xl mx-auto">
          {/* Step Indicators */}
          <div className="relative mb-8 lg:mb-12">
            {/* Progress Line */}
            <div className="absolute top-6 md:top-8 left-0 right-0 h-0.5 md:h-1 bg-foreground/10" />
            <motion.div 
              className="absolute top-6 md:top-8 left-0 h-0.5 md:h-1 bg-gradient-to-r from-primary to-gold z-10"
              initial={{ width: 0 }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* Step Buttons */}
            <div className="relative grid grid-cols-4 gap-2 md:gap-4 z-20">
              {steps.map((step, index) => (
                <motion.button
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex flex-col items-center gap-2 md:gap-3 transition-all ${
                    activeStep === index ? 'scale-105' : 'scale-100'
                  }`}
                >
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-br from-primary to-gold shadow-xl scale-110' 
                      : activeStep > index
                      ? 'bg-gradient-to-br from-primary/50 to-gold/50'
                      : 'bg-foreground/10'
                  }`}>
                    <AnimatePresence mode="wait">
                      {activeStep > index ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-white" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="icon"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <step.icon className={`w-5 h-5 md:w-8 md:h-8 ${activeStep === index ? 'text-white' : 'text-foreground/40'}`} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Step Info */}
                  <div className="text-center">
                    <div className={`text-[9px] md:text-xs font-black mb-0.5 md:mb-1 ${
                      activeStep === index ? 'text-primary' : 'text-foreground/40'
                    }`}>
                      STEP {step.num}
                    </div>
                    <div className={`text-[10px] md:text-sm font-black leading-tight ${
                      activeStep === index ? 'text-foreground' : 'text-foreground/60'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="glass p-6 md:p-8 lg:p-12 rounded-2xl lg:rounded-3xl border border-foreground/5"
            >
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
                {/* Left Side - Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0"
                    >
                      {React.createElement(steps[activeStep].icon, { className: "w-6 h-6 md:w-8 md:h-8 text-white" })}
                    </motion.div>
                    <div>
                      <div className="text-[10px] md:text-sm font-black text-primary uppercase tracking-wider mb-0.5 md:mb-1">
                        Step {steps[activeStep].num}
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground tracking-tight">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg text-foreground/70 leading-relaxed mb-4 md:mb-6">
                    {steps[activeStep].desc}
                  </p>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 md:gap-3 glass px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border border-primary/10 inline-flex"
                  >
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-xs md:text-sm font-black text-foreground">
                      Duration: {steps[activeStep].duration}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Right Side - Details */}
                <div>
                  <h4 className="text-sm md:text-base lg:text-lg font-black text-foreground mb-3 md:mb-4 uppercase tracking-wider">
                    What's Included:
                  </h4>
                  <div className="space-y-2 md:space-y-3">
                    {steps[activeStep].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                        whileHover={{ x: 10, borderColor: 'rgba(var(--primary-rgb), 0.3)' }}
                        className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl bg-foreground/[0.02] border border-foreground/5 hover:border-primary/20 transition-all cursor-default"
                      >
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-foreground/80 font-medium">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-6 md:mt-8 pt-6 md:pt-8 border-t border-foreground/5">
                <motion.button
                  whileHover={activeStep !== 0 ? { scale: 1.05 } : {}}
                  whileTap={activeStep !== 0 ? { scale: 0.95 } : {}}
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-black text-xs md:text-sm uppercase tracking-wider transition-all ${
                    activeStep === 0
                      ? 'opacity-30 cursor-not-allowed'
                      : 'glass border border-foreground/10 hover:border-primary/30'
                  }`}
                >
                  <span className="hidden sm:inline">Previous Step</span>
                  <span className="sm:hidden">Previous</span>
                </motion.button>

                <div className="text-xs md:text-sm font-bold text-foreground/60">
                  {activeStep + 1} of {steps.length}
                </div>

                <motion.button
                  whileHover={activeStep !== steps.length - 1 ? { scale: 1.05 } : {}}
                  whileTap={activeStep !== steps.length - 1 ? { scale: 0.95 } : {}}
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-black text-xs md:text-sm uppercase tracking-wider transition-all inline-flex items-center gap-1 md:gap-2 ${
                    activeStep === steps.length - 1
                      ? 'opacity-30 cursor-not-allowed'
                      : 'bg-primary hover:bg-primary-dark text-white button-premium'
                  }`}
                >
                  <span className="hidden sm:inline">Next Step</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 glass p-6 lg:p-8 rounded-2xl border border-foreground/5 shadow-lg"
          >
            <div className="text-center sm:text-left">
              <div className="text-lg font-black text-foreground mb-1">Ready to Get Started?</div>
              <div className="text-sm text-foreground/60">Schedule a free consultation with our experts</div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-black rounded-xl text-sm uppercase tracking-wider transition-all duration-500 button-premium whitespace-nowrap"
            >
              Book Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

