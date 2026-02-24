"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/constants/services";
import { ThemeToggle } from "./ThemeToggle";

const NAVIGATION = [
  {
    name: "Business Set Up",
    items: [
      {
        title: "India",
        isSubMenu: true,
        children: [
          { title: "India Company Formation", slug: "india-company-formation" },
          { title: "Market Entry Strategy", slug: "market-entry-strategy" },
          {
            title: "Company Incorporation",
            slug: "company-incorporation-and-registration",
          },
        ],
      },
      {
        title: "Saudi Arabia",
        isSubMenu: true,
        children: [
          { title: "Saudi Company Formation", slug: "saudi-company-formation" },
          { title: "Market Entry Strategy", slug: "market-entry-strategy" },
        ],
      },
      {
        title: "Qatar",
        isSubMenu: true,
        children: [
          { title: "Qatar Company Formation", slug: "qatar-company-formation" },
          { title: "Market Entry Strategy", slug: "market-entry-strategy" },
        ],
      },
      {
        title: "Mainland",
        isSubMenu: true,
        children: [
          {
            title: "Mainland Company Formation",
            slug: "mainland-company-formation",
          },
          { title: "LLC Company Formation", slug: "llc-company-formation-uae" },
          { title: "Professional License", slug: "professional-license-uae" },
          { title: "Branch Office", slug: "branch-office-uae" },
          { title: "Representative Office", slug: "representative-office-uae" },
          { title: "Civil Company", slug: "civil-company-formation" },
        ],
      },
      {
        title: "Freezone",
        isSubMenu: true,
        children: [
          {
            title: "Free Zone Setup (General)",
            slug: "free-zone-company-setup",
          },
          { title: "IFZA Dubai", slug: "ifza-company-formation" },
          { title: "DMCC Dubai", slug: "dmcc-company-formation" },
          { title: "Meydan Free Zone", slug: "meydan-free-zone" },
          { title: "RAKEZ (Ras Al Khaimah)", slug: "rakez-company-formation" },
          { title: "SPC Sharjah", slug: "sharjah-publishing-city" },
          { title: "SHAMS Sharjah", slug: "shams-free-zone" },
          { title: "DIFC (Finance)", slug: "difc-company-formation" },
          { title: "DAFZA (Airport)", slug: "dafza-company-formation" },
          { title: "JAFZA (Jebel Ali)", slug: "jafza-company-formation" },
          { title: "Dubai South", slug: "dubai-south-free-zone" },
          { title: "Ajman Free Zone", slug: "ajman-free-zone" },
          { title: "Fujairah Free Zone", slug: "fujairah-free-zone" },
        ],
      },
      {
        title: "Offshore",
        isSubMenu: true,
        children: [
          {
            title: "Offshore Formation (General)",
            slug: "offshore-company-formation",
          },
          { title: "RAK Offshore", slug: "rak-offshore-company" },
          { title: "JAFZA Offshore", slug: "jafza-offshore-company" },
          { title: "Ajman Offshore", slug: "ajman-offshore-company" },
        ],
      },
      {
        title: "Corporate & Regulatory Compliance",
        slug: "corporate-and-regulatory-compliance",
      },
      {
        title: "Tax Advisory & Compliance",
        slug: "tax-advisory-and-compliance",
      },
      { title: "Financial Advisory", slug: "financial-advisory" },
      {
        title: "Accounting and Bookkeeping",
        slug: "accounting-bookkeeping-uae",
      },
      { title: "HR and Payroll Services", slug: "hr-and-payroll-services" },
      { title: "Legal Services", slug: "legal-services" },
      { title: "Other Services", slug: "other-services" },
    ],
  },
  {
    name: "Tax and Accounting",
    items: [
      { title: "Accounting", slug: "accounting" },
      { title: "Auditing", slug: "auditing" },
      { title: "TAX Services", slug: "tax-services" },
      { title: "VAT Registration", slug: "vat-registration-uae" },
      { title: "Corporate Tax", slug: "corporate-tax-uae" },
      { title: "Other Services", slug: "other-services-tax" },
    ],
  },
  {
    name: "Business Support",
    items: [
      { title: "Compliance & Banking", slug: "compliance-banking" },
      { title: "Corporate Bank Account", slug: "corporate-bank-account-uae" },
      { title: "Multi-Currency Accounts", slug: "multi-currency-bank-account" },
      { title: "Banking Compliance", slug: "banking-compliance-advisory" },
      { title: "PRO Services", slug: "pro-services-uae" },
      { title: "ISO Certification", slug: "iso-certification-uae" },
      { title: "Document Attestation", slug: "document-attestation-uae" },
      { title: "Legal Translation", slug: "legal-translation-uae" },
      { title: "Golden Visa", slug: "golden-visa-uae" },
      { title: "Wills & Estate", slug: "uae-wills-estate-planning" },
    ],
  },
  {
    name: "Contact Us",
    items: [
      { title: "About Us", slug: "about" },
      { title: "Contact Us", slug: "contact" },
      { title: "Cost Calculator", slug: "cost-calculator" },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(
    null,
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5 transition-all duration-300 pointer-events-auto">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-[72px]">
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center h-full">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center mr-8 lg:mr-10 xl:mr-12 shrink-0"
            >
              <div className="relative h-8 sm:h-10 lg:h-12 w-auto transition-all duration-300">
                <img
                  src="/logo-black.png"
                  alt="Grow Infinity"
                  className="h-full w-auto object-contain hidden"
                />
                <img
                  src="/logo-white.png"
                  alt="Grow Infinity"
                  className="h-full w-auto object-contain block"
                />
              </div>
            </Link>

            {/* Desktop Navigation Group */}
            <div className="hidden lg:flex items-center space-x-6 h-full">
              {NAVIGATION.map((group) => (
                <div
                  key={group.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setActiveMenu(group.name)}
                  onMouseLeave={() => {
                    setActiveMenu(null);
                    setActiveSubMenu(null);
                  }}
                >
                  {group.items ? (
                    <button
                      className={cn(
                        "flex items-center text-[13px] font-medium tracking-tight transition-all outline-none",
                        activeMenu === group.name
                          ? "text-white"
                          : "text-white/80 hover:text-white",
                      )}
                    >
                      <span
                        className={cn(
                          activeMenu === group.name ? "text-white" : "",
                        )}
                      >
                        {group.name}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 ml-1 transition-transform duration-300 opacity-50",
                          activeMenu === group.name ? "rotate-180" : "",
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={"slug" in group ? (group as any).slug : "#"}
                      className={cn(
                        "flex items-center text-[13px] font-medium tracking-tight transition-all",
                        "text-white/80 hover:text-white",
                      )}
                    >
                      {group.name}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {activeMenu === group.name && group.items && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute left-0 top-full pt-2 w-[280px]"
                      >
                        <div className="bg-black premium-dark-nav rounded-3xl shadow-xl p-4 border border-white/10 overflow-visible backdrop-blur-xl">
                          <div className="grid gap-y-1">
                            {group.items.map((item: any) => (
                              <div
                                key={item.title}
                                className="relative group/item"
                              >
                                {item.isSubMenu ? (
                                  <div
                                    onMouseEnter={() =>
                                      setActiveSubMenu(item.title)
                                    }
                                    onMouseLeave={() => setActiveSubMenu(null)}
                                    className="relative"
                                  >
                                    <button
                                      className={cn(
                                        "w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all",
                                        activeSubMenu === item.title
                                          ? "bg-white/10 text-white"
                                          : "text-white/60 hover:bg-white/10 hover:text-white",
                                      )}
                                    >
                                      <span className="text-[13px] font-medium">
                                        {item.title}
                                      </span>
                                      <ChevronDown
                                        className={cn(
                                          "w-3.5 h-3.5 -rotate-90 transition-transform duration-300",
                                          activeSubMenu === item.title
                                            ? "rotate-0"
                                            : "",
                                        )}
                                      />
                                    </button>

                                    {/* Sub-dropdown */}
                                    <AnimatePresence>
                                      {activeSubMenu === item.title && (
                                        <motion.div
                                          initial={{ opacity: 0, x: 10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          exit={{ opacity: 0, x: 10 }}
                                          className="absolute left-full top-0 ml-2 w-[220px]"
                                        >
                                          <div className="bg-black premium-dark-nav rounded-2xl shadow-xl p-3 border border-white/10 backdrop-blur-xl">
                                            <div className="grid gap-y-1">
                                              {item.children.map(
                                                (child: any) => (
                                                  <Link
                                                    key={child.slug}
                                                    href={`/${child.slug}`}
                                                    onClick={() => {
                                                      setActiveMenu(null);
                                                      setActiveSubMenu(null);
                                                    }}
                                                    className="block px-4 py-2 rounded-xl text-[12px] text-white/60 hover:bg-white/10 hover:text-white transition-all"
                                                  >
                                                    {child.title}
                                                  </Link>
                                                ),
                                              )}
                                            </div>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ) : (
                                  <Link
                                    href={`/${item.slug}`}
                                    onClick={() => setActiveMenu(null)}
                                    className="group/link flex items-center px-4 py-3 rounded-2xl hover:bg-white/5 transition-all"
                                  >
                                    <div className="text-[13px] text-white/60 group-hover/link:text-white font-medium transition-colors">
                                      {item.title}
                                    </div>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Actions Group */}
          <div className="flex items-center space-x-3 sm:space-x-5 h-full">
            {/* Desktop Only Actions */}
            <div className="hidden lg:flex items-center space-x-5">
              <ThemeToggle />

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <Link
                  href="/contact"
                  className="px-4 py-2 text-[13px] font-medium text-white bg-[#C49A45] rounded-md hover:bg-[#B38A36] transition-all shadow-sm"
                >
                  Get started
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center lg:hidden space-x-3">
              <ThemeToggle />
              <button
                className="text-white p-2 rounded-full hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="w-5 h-5 transition-transform active:scale-90" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-4 top-4 bottom-4 w-[calc(100%-2rem)] max-w-sm z-[110] bg-black premium-dark-nav rounded-3xl shadow-2xl p-6 overflow-y-auto border border-white/10 backdrop-blur-xl pointer-events-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">
                  Navigation
                </span>
                <button
                  className="p-2 rounded-full bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="space-y-4">
                {NAVIGATION.map((group) => (
                  <div
                    key={group.name}
                    className="border-b border-white/5 pb-2"
                  >
                    <button
                      onClick={() =>
                        setMobileExpandedGroup(
                          mobileExpandedGroup === group.name
                            ? null
                            : group.name,
                        )
                      }
                      className="w-full flex items-center justify-between py-3 text-left"
                    >
                      <span
                        className={cn(
                          "text-[15px] font-bold tracking-tight transition-colors",
                          mobileExpandedGroup === group.name
                            ? "text-white"
                            : "text-white/70",
                        )}
                      >
                        {group.name}
                      </span>
                      {group.items && (
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            mobileExpandedGroup === group.name
                              ? "rotate-180"
                              : "",
                          )}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {mobileExpandedGroup === group.name && group.items && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-white/[0.02] rounded-2xl px-4"
                        >
                          <div className="py-2 space-y-4">
                            {group.items.map((item: any) => (
                              <div key={item.title} className="space-y-2">
                                {item.isSubMenu ? (
                                  <>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 pt-2 px-1">
                                      {item.title}
                                    </div>
                                    <div className="grid gap-1 pl-2 border-l border-white/10">
                                      {item.children.map((child: any) => (
                                        <Link
                                          key={child.slug}
                                          href={`/${child.slug}`}
                                          className="block py-2 text-[13px] font-medium text-white/60 hover:text-white"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          {child.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </>
                                ) : (
                                  <Link
                                    href={`/${item.slug}`}
                                    className="block py-2 text-[13px] font-bold text-white/70 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {item.title}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {!group.items && (
                      <Link
                        href={"slug" in group ? (group as any).slug : "#"}
                        className="absolute inset-0 z-0 pointer-events-auto"
                        onClick={() => setIsOpen(false)}
                      />
                    )}
                  </div>
                ))}

                <div className="pt-8 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/cost-calculator"
                      className="flex flex-col items-center justify-center bg-white/5 p-4 rounded-2xl shadow-sm border border-white/5 active:scale-95 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">
                        Tools
                      </span>
                      <span className="text-xs font-bold text-white">
                        Calculator
                      </span>
                    </Link>
                    <Link
                      href="/contact"
                      className="flex flex-col items-center justify-center bg-[#C49A45] text-white p-4 rounded-2xl shadow-lg shadow-[#C49A45]/20 active:scale-95 transition-all hover:bg-[#B38A36]"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1">
                        Fast Track
                      </span>
                      <span className="text-xs font-bold">Get Started</span>
                    </Link>
                  </div>

                  <div className="bg-white/[0.03] rounded-3xl p-5 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.404 2.503 1.091 3.491l-.717 2.624 2.684-.704c.954.521 2.046.82 3.208.821 3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.866-5.832zm3.39 8.163c-.147.414-.851.762-1.18 0-.33-.762-1.921-2.029-2.583-2.691-.497-.497-.101-1.001.21-1.312.312-.311.623-.623.935-.935.311-.311.104-.623-.207-.623h-.623c-.311 0-.623.104-.83.311s-.414.518-.414.726c0 1.243.621 2.486 1.657 3.522 1.036 1.036 2.279 1.657 3.522 1.657.207 0 .518-.207.726-.414s.518-.518.726-.83.003-.623-.309-.623h-.623c-.311 0-.622.312-.935.623l-.159.189zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">
                          WhatsApp Support
                        </p>
                        <p className="text-sm font-bold text-white">
                          +971 50 866 3700
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
