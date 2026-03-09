"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Building2,
  Phone,
  Calculator,
  Compass,
  Award,
  Users2,
  Lock,
  Target,
  User,
  MessageSquare,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SERVICES } from "@/constants/services";

interface ServicePageProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  advantages: string[];
  sections: {
    title: string;
    content: string | string[];
    image?: string;
  }[];
  image: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  slug,
  title,
  subtitle,
  description,
  advantages,
  sections,
  image,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero Animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceCategory: slug,
    specialRequirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        serviceCategory: slug,
        specialRequirements: "",
      });
    }, 4000);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-background selection:bg-primary/30"
    >
      {/* Immersive Background System */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.08)_0%,transparent_50%)]" />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full animate-slow-spin" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-gold/5 blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse at center, black, transparent)",
          }}
        />
      </div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-gold to-primary z-[100] origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  HERO SECTION — Full Width, Clean, Immersive          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 overflow-hidden">
        {/* Parallax Background Cover */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: 1.15,
            y: useTransform(scrollYProgress, [0, 0.4], [0, 100]),
          }}
          className="absolute inset-0 z-0 bg-background"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover scale-110 opacity-30 dark:opacity-15"
            onError={(e) => console.log("Image failed to load:", image)}
          />
        </motion.div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-5xl">
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-4 px-5 py-2.5 rounded-xl glass-light border border-white/10 mb-10"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">
                {subtitle}
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight mb-6">
              {title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.12,
                    ease: "circOut",
                  }}
                  className="inline-block relative mr-[0.3em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-2xl mt-8 pl-5 border-l-[3px] border-primary/50"
            >
              <p className="text-sm md:text-base text-foreground/90 font-semibold leading-relaxed">
                {description[0]}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/contact" className="group">
                  <div className="relative px-6 py-2.5 bg-[#5B9EC9] rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(91,158,201,0.5)] hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.2s]" />
                    <span className="relative flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
              </Link>
              <Link href="/cost-calculator">
                <div className="px-5 py-2.5 glass border border-foreground/10 text-foreground font-black rounded-xl text-sm transition-all hover:bg-foreground/5 hover:border-primary/30 flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Calculator className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  Cost Analysis
                </div>
              </Link>
            </motion.div>

            {/* Quick Trust Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-5 md:gap-8"
            >
              {[
                { icon: Shield, label: "DET Verified", color: "primary" },
                { icon: Zap, label: "Priority Banking", color: "gold" },
                { icon: Target, label: "100% Success Rate", color: "primary" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      stat.color === "gold"
                        ? "bg-gold/15 text-gold"
                        : "bg-primary/15 text-primary",
                    )}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-foreground/70 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative py-10 md:py-12 overflow-hidden" style={{ backgroundColor: "#5B9EC9" }}>
        <div className="container px-4 mx-auto relative z-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <div className="flex items-center gap-5 font-black tracking-tighter text-sm md:text-base uppercase text-white group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/10 transition-transform group-hover:scale-110">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="leading-none">DET APPROVED</span>
          </div>
          <div className="w-px h-8 bg-white/30 hidden md:block" />
          <div className="h-px w-full max-w-[40px] bg-white/20 md:hidden ml-5" />
          <div className="flex items-center gap-5 font-black tracking-tighter text-sm md:text-base uppercase text-white group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/10 transition-transform group-hover:scale-110">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <span className="leading-none">BANKING READY</span>
          </div>
          <div className="w-px h-8 bg-white/30 hidden md:block" />
          <div className="h-px w-full max-w-[40px] bg-white/20 md:hidden ml-5" />
          <div className="flex items-center gap-5 font-black tracking-tighter text-sm md:text-base uppercase text-white group">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/10 transition-transform group-hover:scale-110">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="leading-none">0% TAX RISK</span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  MAIN CONTENT + STICKY FORM SIDEBAR                   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* ──────── LEFT: Content Column ──────── */}
          <div className="flex-1 min-w-0">
            {/* Core Advantages Grid */}
            <section className="py-20">
              <div className="mb-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-3 leading-tight uppercase">
                  Strategic{" "}
                  <span className="text-gradient-infinity">Advantages</span>
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {advantages.map((adv, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group relative p-8 glass rounded-[2rem] border border-foreground/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-[2] transition-transform duration-700" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:rotate-12 transition-transform">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-base font-bold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors">
                        {adv}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Description Paragraphs */}
            {description.length > 1 && (
              <section className="pb-20">
                <div className="space-y-6">
                  {description.slice(1).map((para, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-lg md:text-xl text-foreground/70 leading-relaxed font-medium"
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
              </section>
            )}

            {/* Immersive Feature Sections */}
            <section className="pb-20">
              <div className="space-y-24">
                {sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gold/30 font-black text-5xl">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-foreground/10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight">
                      {section.title}
                    </h3>

                    <div className="space-y-4">
                      {Array.isArray(section.content) ? (
                        section.content.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-base md:text-lg text-foreground/60 leading-relaxed font-medium"
                          >
                            {p}
                          </p>
                        ))
                      ) : (
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-medium">
                          {section.content}
                        </p>
                      )}
                    </div>

                    
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* ──────── RIGHT: Sticky Form Sidebar ──────── */}
          <div className="w-full lg:w-[380px] xl:w-[400px] flex-shrink-0">
            <div className="lg:sticky lg:top-28 pt-20 pb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-gold/10 to-primary/20 rounded-[2.5rem] blur-2xl opacity-50" />

                  <div className="relative glass rounded-[2rem] border border-foreground/10 dark:border-white/10 p-6 shadow-2xl overflow-hidden">
                    {/* Decorative Corners */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-gold/10 to-transparent rounded-tr-full" />

                    {/* Form Header */}
                    <div className="relative z-10 mb-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/30">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm font-black text-foreground uppercase tracking-tight leading-none">
                            Quick Inquiry
                          </h3>
                          <p className="text-[9px] text-foreground/40 font-bold uppercase tracking-[0.2em] mt-0.5">
                            Free Consultation
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-px bg-gradient-to-r from-primary/30 via-foreground/10 to-transparent" />
                    </div>

                    {/* Form Body */}
                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="relative z-10 py-10 text-center space-y-4"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              delay: 0.2,
                            }}
                            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold mx-auto flex items-center justify-center shadow-2xl shadow-primary/40"
                          >
                            <CheckCircle2 className="w-8 h-8 text-white" />
                          </motion.div>
                          <h4 className="text-lg font-black text-foreground uppercase tracking-tight">
                            Request Received!
                          </h4>
                          <p className="text-foreground/60 font-medium text-sm max-w-xs mx-auto">
                            Our expert team will contact you within 30 minutes.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="relative z-10 space-y-4"
                        >
                          {/* Name Field */}
                          <div>
                            <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-foreground/50 mb-1.5">
                              <User className="w-3 h-3" />
                              Full Name
                            </label>
                            <div
                              className={cn(
                                "relative rounded-xl transition-all duration-300",
                                focusedField === "name"
                                  ? "focus:ring-[#5B9EC9]/40 shadow-md shadow-[#5B9EC9]/10"
                                  : "",
                              )}
                            >
                              <input
                                type="text"
                                required
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full px-4 py-3 bg-foreground/[0.04] dark:bg-white/[0.06] rounded-xl border border-foreground/10 dark:border-white/10 text-foreground placeholder:text-foreground/30 font-semibold text-xs focus:outline-none focus:border-[#5B9EC9]/40 transition-colors"
                              />
                            </div>
                          </div>

                          {/* Phone Number */}
                          <div>
                            <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-foreground/50 mb-1.5">
                              <Phone className="w-3 h-3" />
                              Phone Number
                            </label>
                            <div
                              className={cn(
                                "relative rounded-xl transition-all duration-300",
                                focusedField === "phone"
                                  ? "focus:ring-[#5B9EC9]/40 shadow-md shadow-[#5B9EC9]/10"
                                  : "",
                              )}
                            >
                              <input
                                type="tel"
                                required
                                placeholder="+971 XX XXX XXXX"
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                  })
                                }
                                onFocus={() => setFocusedField("phone")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full px-4 py-3 bg-foreground/[0.04] dark:bg-white/[0.06] rounded-xl border border-foreground/10 dark:border-white/10 text-foreground placeholder:text-foreground/30 font-semibold text-xs focus:outline-none focus:border-[#5B9EC9]/40 transition-colors"
                              />
                            </div>
                          </div>

                          {/* Service Category Dropdown */}
                          <div>
                            <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-foreground/50 mb-1.5">
                              <Building2 className="w-3 h-3" />
                              Service Category
                            </label>
                            <div
                              className={cn(
                                "relative rounded-xl transition-all duration-300",
                                focusedField === "serviceCategory"
                                  ? "focus:ring-[#5B9EC9]/40 shadow-md shadow-[#5B9EC9]/10"
                                  : "",
                              )}
                            >
                              <select
                                value={formData.serviceCategory}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    serviceCategory: e.target.value,
                                  })
                                }
                                onFocus={() => setFocusedField("serviceCategory")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full px-4 py-3 bg-foreground/[0.04] dark:bg-white/[0.06] rounded-xl border border-foreground/10 dark:border-white/10 text-foreground font-semibold text-xs focus:outline-none focus:border-[#5B9EC9]/40 transition-colors appearance-none cursor-pointer"
                              >
                                {[
                                  "Mainland",
                                  "Free Zone",
                                  "Offshore",
                                  "Banking",
                                  "Compliance",
                                  "Residency",
                                  "Corporate Support",
                                ].map((cat) => {
                                  const catServices = SERVICES.filter(
                                    (s) => s.category === cat
                                  );
                                  if (catServices.length === 0) return null;
                                  return (
                                    <optgroup key={cat} label={cat}>
                                      {catServices.map((s) => (
                                        <option key={s.slug} value={s.slug}>
                                          {s.navTitle ?? s.title}
                                        </option>
                                      ))}
                                    </optgroup>
                                  );
                                })}
                              </select>
                              {/* Chevron icon */}
                              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Special Requirements */}
                          <div>
                            <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-foreground/50 mb-1.5">
                              <MessageSquare className="w-3 h-3" />
                              Special Requirements
                            </label>
                            <div
                              className={cn(
                                "relative rounded-xl transition-all duration-300",
                                focusedField === "requirements"
                                  ? "focus:ring-[#5B9EC9]/40 shadow-md shadow-[#5B9EC9]/10"
                                  : "",
                              )}
                            >
                              <textarea
                                placeholder="Visa needs, activity preferences..."
                                rows={2}
                                value={formData.specialRequirements}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    specialRequirements: e.target.value,
                                  })
                                }
                                onFocus={() => setFocusedField("requirements")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full px-4 py-3 bg-foreground/[0.04] dark:bg-white/[0.06] rounded-xl border border-foreground/10 dark:border-white/10 text-foreground placeholder:text-foreground/30 font-semibold text-xs focus:outline-none focus:border-[#5B9EC9]/40 transition-colors resize-none"
                              />
                            </div>
                          </div>

                          {/* Submit */}
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full relative px-6 py-3.5 bg-[#5B9EC9] text-white font-black rounded-xl text-xs uppercase tracking-[0.2em] overflow-hidden shadow-xl shadow-[#5B9EC9]/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all group hover:bg-[#4A8EB9]"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.2s]" />
                            <span className="relative flex items-center justify-center gap-2.5">
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                  Processing...
                                </>
                              ) : (
                                <>
                                  <Send className="w-4 h-4" />
                                  Get Free Consultation
                                </>
                              )}
                            </span>
                          </motion.button>

                          {/* Trust Note */}
                          <p className="text-center text-[9px] text-foreground/30 font-bold uppercase tracking-[0.15em]">
                            <Lock className="w-2.5 h-2.5 inline mr-1 -mt-0.5" />
                            100% Confidential • Reply in 30 mins
                          </p>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Quick Contact Below Form */}
                <div className="mt-5 p-4 glass rounded-2xl border border-foreground/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/40">
                      Priority Hotline
                    </p>
                    <Link
                      href="tel:+971526065777"
                      className="text-sm font-black text-foreground hover:text-primary transition-colors"
                    >
                      +971 52 606 5777
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden bg-foreground dark:bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.3)_0%,transparent_70%)] opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              The Path to{" "}
              <span className="text-gold">UAE Dominance</span>
            </h2>

            <p className="text-base text-white/50 max-w-xl mx-auto font-medium leading-relaxed">
              Don't just launch—scale with the infrastructure of tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 20px 50px -12px rgba(212,175,55,0.4)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full sm:w-auto px-8 py-3 bg-[#5B9EC9] text-white font-black rounded-xl text-sm uppercase tracking-tight shadow-xl flex items-center justify-center gap-2 group hover:bg-[#4A8EB9]"
                >
                  Launch Protocol
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="w-full sm:w-auto px-7 py-3 glass-dark border border-white/10 text-white font-black rounded-xl text-sm uppercase tracking-widest"
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-6 text-white/30 font-black uppercase text-[10px] tracking-[0.35em]">
              <span>Trusted by 5000+ Founders</span>
              <span className="hidden md:inline">•</span>
              <span>100% Success Rate</span>
              <span className="hidden md:inline">•</span>
              <span>0% Tax Liability</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Support Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-10 right-10 z-[60] lg:hidden"
      >
        <Link href="tel:+971526065777">
          <div className="w-16 h-16 rounded-full bg-[#5B9EC9] text-white flex items-center justify-center shadow-3xl hover:scale-110 transition-transform cursor-pointer group hover:bg-[#4A8EB9]">
            <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform" />
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicePage;
