"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Briefcase, Loader2, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-light dark:glass-dark p-8 rounded-[2rem] border border-[#5B9EC9]/20 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
      >
        <div className="w-16 h-16 rounded-full bg-[#5B9EC9]/10 flex items-center justify-center mx-auto mb-2 border border-[#5B9EC9]/20">
          <CheckCircle2 className="w-8 h-8 text-[#5B9EC9]" />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">
            Consultation Scheduled
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Our strategic advisors will reach out shortly to initiate your UAE expansion.
          </p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-[#5B9EC9] font-bold text-[10px] uppercase tracking-widest hover:underline"
        >
          New Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-light dark:glass-dark rounded-[2rem] p-8 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group/card transition-all duration-500 hover:border-[#5B9EC9]/50">
      {/* Decorative gradients */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#5B9EC9]/10 rounded-full blur-[3rem] group-hover/card:bg-[#C49A45]/20 transition-all duration-700" />
      
      <div className="relative z-10">
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <img src="/logo-black.png" alt="Grow Infinity" className="h-14 w-auto dark:hidden" />
            <img src="/logo.png" alt="Grow Infinity" className="h-14 w-auto hidden dark:block" />
          </div>
          <div className="w-16 h-px bg-[#5B9EC9]/30 mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
              <User className="w-3 h-3 text-[#5B9EC9]" />
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 rounded-xl text-sm font-medium text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B9EC9]/20 focus:border-[#5B9EC9]/30 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
              <Phone className="w-3 h-3 text-[#5B9EC9]" />
              Phone Number
            </label>
            <input
              required
              type="tel"
              placeholder="+971 -- --- ----"
              className="w-full bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 rounded-xl text-sm font-medium text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B9EC9]/20 focus:border-[#5B9EC9]/30 transition-all"
            />
          </div>

          <div className="space-y-1.5 relative">
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
              <Briefcase className="w-3 h-3 text-[#5B9EC9]" />
              Strategy
            </label>
            <div className="relative">
              <select
                required
                defaultValue=""
                className="w-full bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 rounded-xl text-sm font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5B9EC9]/20 focus:border-[#5B9EC9]/30 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="mainland">Mainland Formation</option>
                <option value="freezone">Free Zone Setup</option>
                <option value="banking">Banking Advisory</option>
                <option value="residency">Residency Solutions</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90 pointer-events-none" />
            </div>
          </div>

          <button
            disabled={isSubmitting}
            className={cn(
              "w-full py-4 mt-2 rounded-xl bg-[#5B9EC9] text-white font-black text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#5B9EC9]/20 active:scale-[0.98] hover:bg-[#4A8EB9]",
              isSubmitting && "opacity-80 cursor-not-allowed shadow-none"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Initialize Setup
                <Send className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
