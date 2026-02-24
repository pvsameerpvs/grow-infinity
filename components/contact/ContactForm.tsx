"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, Briefcase, ChevronRight, Loader2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContactForm() {
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSuccess, setIsSuccess] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setIsSubmitting(true);
 
 // Simulate API call
 await new Promise(resolve => setTimeout(resolve, 2000));
 
 setIsSubmitting(false);
 setIsSuccess(true);
 };

 if (isSuccess) {
 return (
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 className="glass p-12 rounded-[2.5rem] border border-primary/20 text-center space-y-8 shadow-2xl relative overflow-hidden"
 >
 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-primary" />
 <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
 <CheckCircle2 className="w-12 h-12 text-primary" />
 </div>
 <div className="space-y-4">
 <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">Transmission Received</h3>
 <p className="text-foreground/60 font-medium text-lg leading-relaxed max-w-sm mx-auto">
 Your inquiry has been encrypted and routed to our executive advisory team. Expect a response within 4 production hours.
 </p>
 </div>
 <button 
 onClick={() => setIsSuccess(false)}
 className="text-primary font-black text-xs uppercase tracking-widest hover:underline"
 >
 Send Another Inquiry
 </button>
 </motion.div>
 );
 }

 return (
 <div className="relative group" id="contact-form">
 {/* Form Container */}
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="glass p-8 sm:p-12 rounded-[2.5rem] border border-foreground/10 shadow-2xl relative overflow-hidden h-full"
 >
 {/* Decorative Elements */}
 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32" />
 <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-[100px] -ml-32 -mb-32" />

 <div className="relative z-10">
 <div className="space-y-4 mb-12">
 <h3 className="text-3xl font-black text-foreground uppercase tracking-tight leading-none group-hover:text-primary transition-colors duration-500">
 Elite Consult <span className="text-gold">Request</span>
 </h3>
 <p className="text-foreground/50 text-sm font-medium leading-relaxed max-w-md">
 Fill out the parameters below to initiate a strategic consultation with our UAE market architects.
 </p>
 </div>

 <form onSubmit={handleSubmit} className="space-y-8">
 <div className="grid sm:grid-cols-2 gap-8">
 {/* Full Name */}
 <div className="space-y-2 group/input">
 <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
 <User className="w-3 h-3 text-primary" />
 Full Name
 </label>
 <input
 required
 type="text"
 placeholder="Lex Luthor"
 className="w-full bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/10 px-6 py-4 rounded-2xl text-sm font-bold text-foreground placeholder:text-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
 />
 </div>

 {/* Email Address */}
 <div className="space-y-2 group/input">
 <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
 <Mail className="w-3 h-3 text-primary" />
 Corporate Email
 </label>
 <input
 required
 type="email"
 placeholder="lex@lexcorp.com"
 className="w-full bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/10 px-6 py-4 rounded-2xl text-sm font-bold text-foreground placeholder:text-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
 />
 </div>
 </div>

 <div className="grid sm:grid-cols-2 gap-8">
 {/* Phone Number */}
 <div className="space-y-2 group/input">
 <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
 <Phone className="w-3 h-3 text-primary" />
 Contact Number
 </label>
 <input
 required
 type="tel"
 placeholder="+971 -- --- ----"
 className="w-full bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/10 px-6 py-4 rounded-2xl text-sm font-bold text-foreground placeholder:text-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
 />
 </div>

 {/* Service Interest */}
 <div className="space-y-2 group/input relative">
 <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
 <Briefcase className="w-3 h-3 text-primary" />
 Service Category
 </label>
 <select
 required
 className="w-full bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/10 px-6 py-4 rounded-2xl text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all appearance-none cursor-pointer"
 >
 <option value="" disabled selected>Select Strategy</option>
 <option value="mainland">Mainland Formation</option>
 <option value="freezone">Free Zone Setup</option>
 <option value="offshore">Offshore Formation</option>
 <option value="banking">Banking Advisory</option>
 <option value="compliance">Corporate Compliance</option>
 <option value="residency">Residency Solutions</option>
 <option value="partner">Property Partnership</option>
 </select>
 <ChevronRight className="absolute right-6 bottom-4.5 w-4 h-4 text-foreground/20 rotate-90 pointer-events-none" />
 </div>
 </div>

 {/* Message */}
 <div className="space-y-2 group/input">
 <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
 <MessageSquare className="w-3 h-3 text-primary" />
 Strategic Requirements
 </label>
 <textarea
 required
 rows={5}
 placeholder="Detail your operational requirements..."
 className="w-full bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/10 px-6 py-4 rounded-2xl text-sm font-bold text-foreground placeholder:text-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
 />
 </div>

 <button
 disabled={isSubmitting}
 className={cn(
 "w-full py-5 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 button-premium shadow-2xl shadow-primary/30 group/btn active:scale-[0.98]",
 isSubmitting && "opacity-80 cursor-not-allowed translate-y-0 shadow-none"
 )}
 >
 {isSubmitting ? (
 <>
 <Loader2 className="w-5 h-5 animate-spin" />
 Processing...
 </>
 ) : (
 <>
 Deploy Inquiry
 <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
 </>
 )}
 </button>
 </form>
 </div>
 </motion.div>
 </div>
 );
}
