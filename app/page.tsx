"use client";

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustBadges } from '@/components/home/TrustBadges';
import { CoreServices } from '@/components/home/CoreServices';
import { BankingAdvantage } from '@/components/home/BankingAdvantage';
import { Stats } from '@/components/home/Stats';
import { CTA } from '@/components/home/CTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustBadges />
      <CoreServices />
      <BankingAdvantage />
      <Stats />
      <CTA />
    </div>
  );
}
