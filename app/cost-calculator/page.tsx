"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Users, 
  Building, 
  Calendar, 
  Globe, 
  Send,
  ChevronRight,
  ChevronLeft,
  Calculator,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  X,
  Sparkles,
  Mail,
  Phone as PhoneIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const STEPS = [
  { id: 'activity', title: 'Business Activity', icon: <Briefcase /> },
  { id: 'jurisdiction', title: 'Jurisdiction', icon: <MapPin /> },
  { id: 'shareholders', title: 'Shareholders', icon: <Users /> },
  { id: 'visas', title: 'Visa Requirements', icon: <BadgeCheck /> },
  { id: 'office', title: 'Office Type', icon: <Building /> },
  { id: 'nationality', title: 'Nationality', icon: <Globe /> },
  { id: 'contact', title: 'Final Step', icon: <Send /> },
];

const NATIONALITIES = [
  'United Kingdom', 'United States', 'India', 'Canada', 'Australia', 'Germany', 'France', 'China', 'Russia', 'Saudi Arabia', 'Pakistan', 'Egypt', 'Other'
];

const CostCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    businessActivity: '',
    jurisdiction: '',
    shareholders: '1',
    visas: '1',
    officeType: '',
    timeline: '',
    nationality: '',
    name: '',
    email: '',
    phone: '',
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStepComplete = () => {
    const fields = {
      0: formData.businessActivity,
      1: formData.jurisdiction,
      2: formData.shareholders,
      3: formData.visas,
      4: formData.officeType,
      5: formData.nationality,
      6: formData.name && formData.email && formData.phone,
    };
    return fields[currentStep as keyof typeof fields];
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
                <Calculator className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 tracking-tighter">
              Setup <span className="text-primary italic">Cost Calculator</span>
            </h1>
            <p className="text-xl text-foreground/40 font-medium">Get an instant, customized quote for your UAE business setup.</p>
          </div>

          {/* Progress Bar */}
          <div className="flex justify-between mb-16 relative">
            <div className="absolute top-5 left-0 w-full h-1 bg-foreground/5 -translate-y-1/2 z-0 rounded-full" />
            <div 
              className="absolute top-5 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-700 rounded-full shadow-[0_0_15px_rgba(29,111,197,0.5)]" 
              style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
            />
            {STEPS.map((step, idx) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <button 
                  onClick={() => idx < currentStep && setCurrentStep(idx)}
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border-2 font-bold text-xs shadow-lg",
                    idx < currentStep ? "bg-primary border-primary text-white scale-90" : 
                    idx === currentStep ? "bg-background border-primary text-primary scale-110 shadow-primary/20" : 
                    "bg-background border-foreground/10 text-foreground/20"
                  )}
                >
                  {idx < currentStep ? <BadgeCheck className="w-5 h-5" /> : idx + 1}
                </button>
                <span className={cn(
                  "hidden md:block text-[9px] uppercase tracking-[0.2em] mt-4 font-black transition-colors duration-500",
                  idx <= currentStep ? "text-primary" : "text-foreground/20"
                )}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="glass rounded-[3rem] p-10 md:p-16 shadow-3xl border-foreground/5 relative overflow-hidden min-h-[550px] flex flex-col">
            <div className="flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {currentStep === 0 && (
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-xs font-black text-primary uppercase tracking-widest">Step 01</span>
                        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">What is your primary <br />business activity?</h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Consultancy', 'E-commerce', 'General Trading', 'IT & Software', 'Holding Company', 'Other'].map((act) => (
                          <button
                            key={act}
                            onClick={() => handleInputChange('businessActivity', act)}
                            className={cn(
                              "p-6 rounded-[2rem] border-2 text-left transition-all duration-300 group relative overflow-hidden",
                              formData.businessActivity === act 
                                ? "border-primary bg-primary/5 text-primary shadow-xl shadow-primary/5" 
                                : "border-foreground/5 hover:border-primary/30 text-foreground/60"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-black uppercase tracking-widest text-xs">{act}</span>
                              <div className={cn(
                                "w-4 h-4 rounded-full border-2 transition-all",
                                formData.businessActivity === act ? "bg-primary border-primary scale-125" : "border-foreground/10"
                              )} />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-xs font-black text-primary uppercase tracking-widest">Step 02</span>
                        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">Preferred Jurisdiction</h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { id: 'mainland', title: 'Mainland', desc: 'Trade anywhere in UAE' },
                          { id: 'freezone', title: 'Free Zone', desc: '100% Tax Free Environment' },
                          { id: 'offshore', title: 'Offshore', desc: 'Asset Protection & Privacy' },
                        ].map((j) => (
                          <button
                            key={j.id}
                            onClick={() => handleInputChange('jurisdiction', j.id)}
                            className={cn(
                              "p-8 rounded-[2.5rem] border-2 text-left transition-all duration-300 group relative",
                              formData.jurisdiction === j.id 
                                ? "border-primary bg-primary/5 text-primary shadow-xl shadow-primary/5" 
                                : "border-foreground/5 hover:border-primary/30 text-foreground/60"
                            )}
                          >
                            <div className="font-black text-xl mb-2 tracking-tighter uppercase italic">{j.title}</div>
                            <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">{j.desc}</div>
                            {formData.jurisdiction === j.id && (
                              <motion.div layoutId="choice" className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                                <BadgeCheck className="w-5 h-5" />
                              </motion.div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-xs font-black text-primary uppercase tracking-widest">Step 03</span>
                        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">Number of Shareholders</h2>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {['1', '2', '3', '4', '5+'].map((num) => (
                          <button
                            key={num}
                            onClick={() => handleInputChange('shareholders', num)}
                            className={cn(
                              "w-24 h-24 rounded-[2rem] border-2 flex flex-col items-center justify-center transition-all duration-300",
                              formData.shareholders === num 
                                ? "border-primary bg-primary/5 text-primary shadow-xl shadow-primary/5 scale-105" 
                                : "border-foreground/5 hover:border-primary/30 text-foreground/40"
                            )}
                          >
                            <span className="text-2xl font-black">{num}</span>
                            <span className="text-[8px] font-black uppercase tracking-widest mt-1">PERSONS</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-xs font-black text-primary uppercase tracking-widest">Step 04</span>
                        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">Residency Visa Requirements</h2>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {['0', '1', '2', '3', '4', '5+'].map((num) => (
                          <button
                            key={num}
                            onClick={() => handleInputChange('visas', num)}
                            className={cn(
                              "w-24 h-24 rounded-[2rem] border-2 flex flex-col items-center justify-center transition-all duration-300",
                              formData.visas === num 
                                ? "border-primary bg-primary/5 text-primary shadow-xl shadow-primary/5 scale-105" 
                                : "border-foreground/5 hover:border-primary/30 text-foreground/40"
                            )}
                          >
                            <span className="text-2xl font-black">{num}</span>
                            <span className="text-[8px] font-black uppercase tracking-widest mt-1">VISAS</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-xs font-black text-primary uppercase tracking-widest">Step 05</span>
                        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">Office Space Facilities</h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          'Virtual Office / Flexi-Desk',
                          'Physical Office Space',
                          'Retail / Warehouse',
                          'Not Required'
                        ].map((off) => (
                          <button
                            key={off}
                            onClick={() => handleInputChange('officeType', off)}
                            className={cn(
                              "p-8 rounded-[2rem] border-2 text-left transition-all duration-300",
                              formData.officeType === off 
                                ? "border-primary bg-primary/5 text-primary shadow-xl shadow-primary/5" 
                                : "border-foreground/5 hover:border-primary/30 text-foreground/60"
                            )}
                          >
                            <span className="font-black uppercase tracking-widest text-xs">{off}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-xs font-black text-primary uppercase tracking-widest">Step 06</span>
                        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">Owner Nationality</h2>
                      </div>
                      <div className="relative">
                        <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-primary w-6 h-6" />
                        <select
                          value={formData.nationality}
                          onChange={(e) => handleInputChange('nationality', e.target.value)}
                          className="w-full pl-16 pr-6 py-6 rounded-3xl border-2 border-foreground/5 bg-foreground/[0.02] focus:border-primary outline-none transition-all text-foreground font-black uppercase tracking-widest text-sm appearance-none cursor-pointer"
                        >
                          <option value="">Select Nationality</option>
                          {NATIONALITIES.map((n) => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
                      </div>
                    </div>
                  )}

                  {currentStep === 6 && (
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="text-xs font-black text-primary uppercase tracking-widest">Final Step</span>
                        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">Contact Information</h2>
                      </div>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-6 rounded-2xl border-2 border-foreground/5 bg-foreground/[0.02] focus:border-primary outline-none text-foreground font-bold"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                          />
                        </div>
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-6 rounded-2xl border-2 border-foreground/5 bg-foreground/[0.02] focus:border-primary outline-none text-foreground font-bold"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="Phone (with country code)"
                            className="w-full p-6 rounded-2xl border-2 border-foreground/5 bg-foreground/[0.02] focus:border-primary outline-none text-foreground font-bold"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-2xl">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest leading-relaxed">
                          By submitting, you agree to receive a customized professional quote and a strategic consultation from our elite advisory team.
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="mt-16 flex justify-between items-center bg-foreground/[0.02] -mx-10 -mb-10 p-10 md:p-12 md:-mx-16 md:-mb-16 rounded-t-[3rem]">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={cn(
                  "flex items-center px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all",
                  currentStep === 0 ? "opacity-0 pointer-events-none" : "text-foreground/40 hover:text-primary hover:bg-primary/5"
                )}
              >
                <ChevronLeft className="mr-3 w-5 h-5" />
                Return
              </button>
              
              <button
                onClick={currentStep === STEPS.length - 1 ? () => setShowModal(true) : nextStep}
                disabled={!isStepComplete()}
                className={cn(
                  "flex items-center px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-2xl",
                  isStepComplete() 
                    ? "bg-primary text-white hover:bg-primary-dark shadow-primary/30 button-premium" 
                    : "bg-foreground/5 text-foreground/20 cursor-not-allowed"
                )}
              >
                {currentStep === STEPS.length - 1 ? 'GET ELITE QUOTE' : 'NEXT PHASE'}
                <ChevronRight className="ml-3 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
              onClick={() => setShowModal(false)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl z-[110]"
            >
              <div className="bg-background rounded-[3rem] p-8 md:p-12 shadow-2xl border border-foreground/10 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 blur-[80px] rounded-full" />
                
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-6 right-6 p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-foreground/60" />
                </button>

                {/* Content */}
                <div className="relative z-10">
                  {/* Success Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-3xl animate-ping" />
                      <CheckCircle2 className="w-10 h-10 text-primary relative z-10" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-black text-foreground mb-3 tracking-tight">
                      Quote Request <span className="text-primary italic">Received!</span>
                    </h3>
                    <p className="text-foreground/50 font-medium text-sm">
                      Our elite advisory team will contact you within 24 hours with a customized proposal.
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="bg-foreground/[0.02] rounded-2xl p-6 mb-6 space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Sparkles className="w-4 h-4 text-gold" />
                      <h4 className="text-xs font-black text-gold uppercase tracking-widest">Your Selection Summary</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Business Activity</div>
                        <div className="text-sm font-bold text-foreground">{formData.businessActivity || 'Not specified'}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Jurisdiction</div>
                        <div className="text-sm font-bold text-foreground capitalize">{formData.jurisdiction || 'Not specified'}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Shareholders</div>
                        <div className="text-sm font-bold text-foreground">{formData.shareholders} Person(s)</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Visas Required</div>
                        <div className="text-sm font-bold text-foreground">{formData.visas} Visa(s)</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Office Type</div>
                        <div className="text-sm font-bold text-foreground">{formData.officeType || 'Not specified'}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Nationality</div>
                        <div className="text-sm font-bold text-foreground">{formData.nationality || 'Not specified'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 space-y-3">
                    <div className="flex items-center space-x-2 mb-3">
                      <Send className="w-4 h-4 text-primary" />
                      <h4 className="text-xs font-black text-primary uppercase tracking-widest">Quote Will Be Sent To</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-foreground/40" />
                        <span className="text-sm font-bold text-foreground">{formData.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="w-4 h-4 text-foreground/40" />
                        <span className="text-sm font-bold text-foreground">{formData.phone}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-black text-sm uppercase tracking-wider shadow-xl shadow-primary/20 transition-all active:scale-95"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        setShowModal(false);
                        setCurrentStep(0);
                        setFormData({
                          businessActivity: '',
                          jurisdiction: '',
                          shareholders: '1',
                          visas: '1',
                          officeType: '',
                          timeline: '',
                          nationality: '',
                          name: '',
                          email: '',
                          phone: '',
                        });
                      }}
                      className="flex-1 bg-foreground/5 hover:bg-foreground/10 text-foreground py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all active:scale-95"
                    >
                      New Quote
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CostCalculator;
