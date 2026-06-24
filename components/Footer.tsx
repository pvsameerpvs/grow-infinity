import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://www.instagram.com/growinfinity", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/growinfinity", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/growinfinity", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5B9EC9]/50 to-transparent" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#5B9EC9]/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/logo-white.png"
                alt="Grow Infinity Logo"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-110"
              />
            </Link>
            <p className="text-white/50 leading-relaxed font-medium text-sm">
              Your professional partner for business setup and corporate services. We help you succeed in the UAE and beyond with expert advice and reliable support every step of the way.
            </p>
            <div className="flex space-x-5">
              {SOCIAL_LINKS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#5B9EC9] transition-all group/icon border border-white/5"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/40 group-hover/icon:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 italic">
              Strategy
            </h4>
            <ul className="space-y-5">
              {[
                {
                  label: "Mainland Businesses",
                  path: "/services?category=Mainland",
                },
                {
                  label: "Free Zone Ventures",
                  path: "/services?category=Free%20Zone",
                },
                {
                  label: "Offshore Solutions",
                  path: "/services?category=Offshore",
                },
                {
                  label: "Banking & Financial",
                  path: "/services?category=Banking",
                },
                {
                  label: "Compliance & Tax",
                  path: "/services?category=Compliance",
                },
                {
                  label: "Corporate Support",
                  path: "/services?category=Corporate%20Support",
                },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/60 hover:text-white transition-all flex items-center text-sm font-bold group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#0047AB] mr-0 group-hover:mr-3 transition-all rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 italic">
              Operations
            </h4>
            <ul className="space-y-5">
              {[
                { label: "Cost Calculator", path: "/cost-calculator" },
                { label: "Our Advisory Team", path: "#" },
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Terms of Service", path: "/terms-of-service" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-white/60 hover:text-white transition-all flex items-center text-sm font-bold group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#5B9EC9] mr-0 group-hover:mr-3 transition-all rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 italic">
              Global Desk
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <MapPin className="w-5 h-5 text-[#7CB5D9]" />
                </div>
                <p className="text-white/40 text-sm font-medium leading-relaxed">
                  Office 1517, 15th Floor,
                  <br />
                  Burjuman Business Tower,
                  <br />
                  Shaikh Khalifa Bin Zayed Street,
                  <br />
                  Dubai, UAE
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Phone className="w-4 h-4 text-[#7CB5D9]" />
                </div>
                <p className="text-white/40 text-sm font-bold">
                  +971 50 866 3700
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Mail className="w-4 h-4 text-[#7CB5D9]" />
                </div>
                <p className="text-white/40 text-sm font-bold">
                 info@growinfinity.ae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
