"use client";

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustBadges } from '@/components/home/TrustBadges';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CoreServices } from '@/components/home/CoreServices';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { BankingAdvantage } from '@/components/home/BankingAdvantage';
import { GlobalPresence } from '@/components/home/GlobalPresence';
import { SuccessStories } from '@/components/home/SuccessStories';
import { Stats } from '@/components/home/Stats';
import { CTA } from '@/components/home/CTA';
import { AboutSection } from '@/components/home/AboutSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutSection/>
      <WhyChooseUs />
      <CoreServices />
      <ProcessSteps />
      <CTA />
    </div>
  );
}
