"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Globe2,
  Instagram,
} from "lucide-react";
import WhatsAppIcon from "../WhatsAppIcon";

const CONTACT_METHODS = [
  {
    icon: MapPin,
    label: "Global Headquarters",
    value:
      "Office 1517, 15th Floor, Burjuman Business Tower, Shaikh Khalifa Bin Zayed Street, Dubai, UAE",
    path: "https://maps.app.goo.gl/xxx",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: WhatsAppIcon,
    label: "Strategic Hotline",
    value: "+971 50 866 3700",
    path: "tel:+971508663700",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Mail,
    label: "Direct Email",
    value: "info@growinfinity.ae",
    path: "mailto:info@growinfinity.ae",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Clock,
    label: "Operational Hours",
    value: "Mon - Fri: 09:00 - 18:00 (GST)",
    path: null,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const SOCIALS = [
  { icon: Instagram, name: "Instagram", path: "https://www.instagram.com/grow.infinity_?igsh=MW50eWtmOXhzMG1peQ==" },
];

export function ContactInfo() {
  return (
    <div className="space-y-8 w-full overflow-hidden">
      {/* Header Info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4 w-full"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-1 rounded-full" style={{ backgroundColor: "#5B9EC9" }} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: "#5B9EC9" }}>
            Communication Core
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-tight leading-tight break-words w-full">
          Let&apos;s Architect Your{" "}
          <span className="text-gradient-infinity">Global Legacy</span>
        </h2>
        <p className="text-foreground/50 text-sm font-medium leading-relaxed max-w-lg break-words">
          Connect with our specialized advisors for absolute precision in UAE
          business formation and banking operations.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid gap-4">
        {CONTACT_METHODS.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {method.path ? (
              <a
                href={method.path}
                target={method.icon === MapPin ? "_blank" : undefined}
                rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 glass p-4 rounded-2xl border border-foreground/5 hover:border-primary/20 transition-all duration-500"
              >
                <div
                  className={`w-10 h-10 flex-shrink-0 rounded-xl ${method.bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <method.icon className={`w-5 h-5 ${method.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] mb-1">
                    {method.label}
                  </div>
                  <div className="text-sm font-bold text-foreground break-words leading-snug">
                    {method.value}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-foreground/[0.03] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
              </a>
            ) : (
              <div className="flex items-start gap-4 glass p-4 rounded-2xl border border-foreground/5">
                <div
                  className={`w-10 h-10 flex-shrink-0 rounded-xl ${method.bg} flex items-center justify-center`}
                >
                  <method.icon className={`w-5 h-5 ${method.color}`} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] mb-1">
                    {method.label}
                  </div>
                  <div className="text-sm font-bold text-foreground break-words leading-snug">
                    {method.value}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Socials & Connectivity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass p-6 rounded-2xl border border-foreground/5 space-y-5"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h4 className="text-sm font-black text-foreground uppercase tracking-widest">
              Connect Digitally
            </h4>
            <p className="text-xs text-foreground/50 font-medium italic">
              Join our executive networking circles
            </p>
          </div>
          <div className="flex gap-3">
            {SOCIALS.map((social, i) => (
              <a
                key={i}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-foreground/10 flex items-center justify-center hover:bg-primary group transition-all duration-300"
                title={social.name}
              >
                <social.icon className="w-5 h-5 text-foreground/40 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-foreground/5" />

        <div className="flex items-center gap-4 text-xs font-bold">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Advisors Online
          </div>
          <div className="text-foreground/40">
            Average Response Time: <span className="text-primary">4m</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
