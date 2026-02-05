import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground dark:bg-[#020617] text-white pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-2xl shadow-xl shadow-primary/20 transition-transform group-hover:rotate-12">
                <span className="text-white font-black text-2xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none">GROW INFINITY</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-black mt-1">
                  Corporate Advisory
                </span>
              </div>
            </Link>
            <p className="text-white/40 leading-relaxed font-medium text-sm">
              Architecting Businesses. Securing Legacies. Growing Infinitely. Your elite partner for UAE business formation and banking advisory since 2018.
            </p>
            <div className="flex space-x-5">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all group/icon border border-white/5">
                  <Icon className="w-5 h-5 text-white/40 group-hover/icon:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 italic">Strategy</h4>
            <ul className="space-y-5">
              {[
                { label: 'Mainland Formation', path: '/mainland-company-formation' },
                { label: 'Free Zone Setup', path: '/free-zone-company-setup' },
                { label: 'Banking Advisory', path: '/corporate-bank-account-uae' },
                { label: 'Residency Solutions', path: '/golden-visa-uae' },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-white/60 hover:text-white transition-all flex items-center text-sm font-bold group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary mr-0 group-hover:mr-3 transition-all rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 italic">Operations</h4>
            <ul className="space-y-5">
              {[
                { label: 'Cost Calculator', path: '/cost-calculator' },
                { label: 'Our Advisory Team', path: '#' },
                { label: 'Privacy Policy', path: '#' },
                { label: 'Terms of Service', path: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-white/60 hover:text-white transition-all flex items-center text-sm font-bold group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary mr-0 group-hover:mr-3 transition-all rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 italic">Global Desk</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <p className="text-white/40 text-sm font-medium leading-relaxed">
                  The Exchange Tower,<br />Business Bay, Dubai, UAE
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <p className="text-white/40 text-sm font-bold">+971 4 584 7777</p>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <p className="text-white/40 text-sm font-bold">desk@growinfinity.ae</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
