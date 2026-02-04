"use client";

import React from 'react';

export function TrustBadges() {
  return (
    <section className="py-20 border-y border-foreground/5 bg-foreground/[0.02]">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] font-black text-foreground/40 uppercase tracking-[0.5em] mb-12">
          Directly Licensed by & Partnered with
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {['DED', 'IFZA', 'DMCC', 'RAKEZ', 'MEYDAN'].map((brand) => (
            <span key={brand} className="text-3xl font-black text-foreground tracking-tighter">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
