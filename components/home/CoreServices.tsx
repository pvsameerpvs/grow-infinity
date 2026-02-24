"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Landmark,
  Calculator,
  ShieldCheck,
  Users2,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/constants/services";
import { cn } from "@/lib/utils";

const CORE_SLUGS = [
  "mainland-company-formation",
  "free-zone-company-setup",
  "corporate-bank-account-uae",
  "golden-visa-uae",
  "corporate-tax-uae",
  "pro-services-uae",
];

const iconMap: Record<string, any> = {
  "mainland-company-formation": Building2,
  "free-zone-company-setup": Landmark,
  "corporate-bank-account-uae": Calculator,
  "golden-visa-uae": ShieldCheck,
  "corporate-tax-uae": Users2,
  "pro-services-uae": Globe,
};

const services = CORE_SLUGS.map((slug) => {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    ...service,
    icon: iconMap[slug] || Building2,
    desc: service.description[0],
    badge: service.badge || "Featured",
  };
}).filter(Boolean) as any[];

export function CoreServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play timer for sliding tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 5000); // changes every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Clean Centered Header like Pemo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight max-w-4xl mx-auto">
            Everything you need to efficiently{" "}
            <br className="hidden md:block" />
            set up your business in the UAE
          </h2>
        </motion.div>

        {/* Minimalist Tabs Above Content */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={service.slug}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300",
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-foreground/5 text-foreground/70 hover:bg-primary/10 hover:text-primary",
                )}
              >
                {service.title.split(" ")[0]}{" "}
                {/* Abbreviate tab names slightly for neatness */}
              </button>
            );
          })}
        </div>

        {/* Clean 2-Column Feature Content matching Screenshot */}
        <div className="relative min-h-[400px] lg:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between w-full"
            >
              {/* Left Side: Clean Text Details */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground tracking-tight">
                  {activeService.title}
                </h3>

                <p className="text-base text-foreground/70 leading-relaxed mb-6">
                  {activeService.desc}
                </p>

                <div className="text-sm font-medium text-foreground/60 mb-8 border-t border-foreground/5 pt-6">
                  Expert guidance, documentation support, and end-to-end
                  processing for a seamless UAE business setup experience.
                </div>

                <Link
                  href={`/${activeService.slug}`}
                  className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary-dark transition-all group"
                >
                  Learn more about {activeService.title}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Side: Floating Image in Soft Rounded Container */}
              <div className="w-full lg:w-[50%]">
                <div className="w-full aspect-[4/3] bg-primary/5 dark:bg-primary/10 rounded-[2rem] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden border border-primary/10">
                  <motion.img
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover rounded-xl shadow-2xl z-10 block"
                  />
                  {/* Soft decorative shadow behind image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
