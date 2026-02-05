export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Mainland' | 'Free Zone' | 'Offshore' | 'Banking' | 'Compliance' | 'Residency' | 'Corporate Support';
  description: string[];
  advantages: string[];
  sections: {
    title: string;
    content: string | string[];
  }[];
}

export const SERVICES: ServiceData[] = [
  // A. Mainland Business Setup
  {
    slug: 'mainland-company-formation',
    title: 'Mainland Company Formation',
    subtitle: 'Onshore Business Solutions',
    category: 'Mainland',
    description: [
      'Establishing a mainland company in the UAE offers unparalleled access to the local market and government contracts.',
      'Grow Infinity provides end-to-end advisory to ensure your mainland entity is structured for maximum flexibility and banking compliance.'
    ],
    advantages: [
      '100% Foreign Ownership in most sectors',
      'No geographical limits for trade',
      'Access to government tenders',
      'Easy employee visa processing'
    ],
    sections: [
      {
        title: 'Why Choose UAE Mainland?',
        content: 'Mainland companies are registered under the Department of Economy and Tourism (DET). They allow you to trade freely within the UAE and internationally without restrictions.'
      },
      {
        title: 'Our Entry Strategy',
        content: [
          'We handle everything from initial approval to trade license issuance.',
          'Our banking-first approach ensures your mainland license is eligible for corporate accounts from day one.'
        ]
      }
    ]
  },
  {
    slug: 'llc-company-formation-uae',
    title: 'LLC Company Formation',
    subtitle: 'Limited Liability Protector',
    category: 'Mainland',
    description: ['The Limited Liability Company (LLC) is the most common form of business in the UAE mainland.'],
    advantages: ['Limited liability protection', 'Flexible shareholding', 'Scalable operations'],
    sections: [{ title: 'Structure & Compliance', content: 'We ensure your LLC Agreement (MOA) is legally robust and bank-compliant.' }]
  },
  {
    slug: 'professional-license-uae',
    title: 'Professional License Setup',
    subtitle: 'Expert-led Business Units',
    category: 'Mainland',
    description: ['For specialists, consultants, and service providers.'],
    advantages: ['100% ownership', 'Professional recognition', 'Simplified setup'],
    sections: [{ title: 'Service Categories', content: 'Ideal for legal, accounting, and engineering consultancies.' }]
  },
  {
    slug: 'branch-office-uae',
    title: 'Branch Office Setup',
    subtitle: 'Global Expansion',
    category: 'Mainland',
    description: ['Expand your international firm into the UAE.'],
    advantages: ['Full parent company control', 'Unified branding', 'Strategic market entry'],
    sections: [{ title: 'Legal Requirements', content: 'We manage the cross-border legalities and document attestation.' }]
  },
  {
    slug: 'representative-office-uae',
    title: 'Representative Office Setup',
    subtitle: 'Market Presence',
    category: 'Mainland',
    description: ['Promote your brand without commercial trading.'],
    advantages: ['Low overhead', 'Strategic networking', 'Direct market research'],
    sections: [{ title: 'Operational Limits', content: 'Focused on marketing and administrative support for the parent company.' }]
  },
  {
    slug: 'civil-company-formation',
    title: 'Civil Company Formation',
    subtitle: 'Professional Partnerships',
    category: 'Mainland',
    description: ['For professionals in traditional fields like medicine or law.'],
    advantages: ['Full ownership for professionals', 'Flexible partnership models', 'Direct professional liability'],
    sections: [{ title: 'Licensing Process', content: 'We guide you through the professional accreditation required for civil companies.' }]
  },

  // B. Free Zone Company Formation
  {
    slug: 'free-zone-company-setup',
    title: 'Free Zone Business Setup',
    subtitle: 'Tax-Efficient Structures',
    category: 'Free Zone',
    description: ['The UAE offers 40+ specialized Free Zones tailored to specific industries.'],
    advantages: ['0% Corporate & Income Tax', '100% Capital Repatriation', 'Simplified Customs'],
    sections: [{ title: 'Strategic Free Zone Selection', content: 'We help you choose the right zone based on your activity and budget.' }]
  },
  {
    slug: 'ifza-company-formation',
    title: 'IFZA Company Formation',
    subtitle: 'International Free Zone Authority',
    category: 'Free Zone',
    description: ['Flexible and cost-effective solutions in Dubai.'],
    advantages: ['Fast-track setup', 'Modern office facilities', 'Competitive pricing'],
    sections: [{ title: 'Why IFZA?', content: 'Preferred for consultancy and service-based startups.' }]
  },
  {
    slug: 'dmcc-company-formation',
    title: 'DMCC Company Formation',
    subtitle: 'Global Commodities Hub',
    category: 'Free Zone',
    description: ['Located in JLT, DMCC is the world\'s leading free zone.'],
    advantages: ['Global networking', 'Prime location', 'Premium infrastructure'],
    sections: [{ title: 'Trading Hub', content: 'Ideal for gold, diamond, and energy trading.' }]
  },
  {
    slug: 'meydan-free-zone',
    title: 'Meydan Free Zone Setup',
    subtitle: 'Elite Business Environment',
    category: 'Free Zone',
    description: ['A prestigious hub located at the heart of Dubai.'],
    advantages: ['Prestigious address', 'Digital-first setup', 'Excellent amenities'],
    sections: [{ title: 'E-commerce Friendly', content: 'Top choice for digital nomads and e-commerce entrepreneurs.' }]
  },
  {
    slug: 'rakez-company-formation',
    title: 'RAKEZ Company Formation',
    subtitle: 'Industrial & Academic Hub',
    category: 'Free Zone',
    description: ['Connecting businesses to global markets in Ras Al Khaimah.'],
    advantages: ['Low cost', 'Extensive warehouse space', 'Simplified logistics'],
    sections: [{ title: 'Manufacturing Focus', content: 'Best for industrial projects and large-scale distribution.' }]
  },
  {
    slug: 'sharjah-publishing-city',
    title: 'SPC Free Zone Setup',
    subtitle: 'Shajah Publishing City',
    category: 'Free Zone',
    description: ['Worlds first publishing and printing free zone.'],
    advantages: ['Fastest license issuance', 'Dual license options', 'Multisite business activities'],
    sections: [{ title: 'Speed of Execution', content: 'Get your business license in as little as 2 hours.' }]
  },
  {
    slug: 'shams-free-zone',
    title: 'SHAMS Free Zone Setup',
    subtitle: 'Sharjah Media City',
    category: 'Free Zone',
    description: ['A creative hub for media and digital start-ups.'],
    advantages: ['Affordable flexi-desks', 'No deposit required', 'Simplified visa process'],
    sections: [{ title: 'Creative Economy', content: 'Tailored for designers, marketers, and influencers.' }]
  },
  {
    slug: 'difc-company-formation',
    title: 'DIFC Company Formation',
    subtitle: 'Financial District',
    category: 'Free Zone',
    description: ['The leading financial center for MEASA region.'],
    advantages: ['Common Law legal framework', 'Elite networking', 'Global financial standard'],
    sections: [{ title: 'Financial Advisory', content: 'We assist with DFSA licensing and regulatory compliance.' }]
  },
  {
    slug: 'dafza-company-formation',
    title: 'DAFZA Company Formation',
    subtitle: 'Dubai Airport Free Zone',
    category: 'Free Zone',
    description: ['Strategic location adjacent to DXB international airport.'],
    advantages: ['Superior logistics', 'Tax exemptions', 'Direct air-cargo link'],
    sections: [{ title: 'Logistics Hub', content: 'Perfect for aviation, freight, and electronic trading.' }]
  },
  {
    slug: 'jafza-company-formation',
    title: 'JAFZA Company Formation',
    subtitle: 'Jebel Ali Free Zone',
    category: 'Free Zone',
    description: ['The largest industrial free zone in the world.'],
    advantages: ['Sea-to-air connectivity', 'Massive scale infrastructure', 'Global supply chain'],
    sections: [{ title: 'Distribution Center', content: 'Best for large scale global manufacturing and distribution.' }]
  },
  {
    slug: 'dubai-south-free-zone',
    title: 'Dubai South Free Zone',
    subtitle: 'The Home of Expo 2020',
    category: 'Free Zone',
    description: ['Sustainability and innovation focused hub.'],
    advantages: ['Proximity to DWC Airport', 'Urban living integration', 'Supply chain mastery'],
    sections: [{ title: 'Aviation Focus', content: 'The epicenter of Dubai aerospace and logistics projects.' }]
  },
  {
    slug: 'ajman-free-zone',
    title: 'Ajman Free Zone Setup',
    subtitle: 'Cost-Effective Growth',
    category: 'Free Zone',
    description: ['Strategic and economical gateway for SME\'s.'],
    advantages: ['Cheapest setup costs', 'Strategic port access', 'Quick visa services'],
    sections: [{ title: 'Budget Friendly', content: 'Highly recommended for startups and young entrepreneurs.' }]
  },
  {
    slug: 'fujairah-free-zone',
    title: 'Fujairah Free Zone Setup',
    subtitle: 'Eastern Gateway',
    category: 'Free Zone',
    description: ['Strategic port access on the UAE eastern coast.'],
    advantages: ['Direct access to Indian Ocean', 'Lower operating costs', 'Multi-access connectivity'],
    sections: [{ title: 'Energy & Trade', content: 'Ideal for maritime services and energy-related logistics.' }]
  },

  // C. Offshore Company Solutions
  {
    slug: 'offshore-company-formation',
    title: 'Offshore Company Formation',
    subtitle: 'Asset Protection',
    category: 'Offshore',
    description: ['Protect your assets and maintain privacy with a UAE offshore entity.'],
    advantages: ['100% Tax Free', 'High confidentiality', 'Multi-currency accounts'],
    sections: [{ title: 'Non-Resident Strategy', content: 'Ideal for holding companies and international investment.' }]
  },
  {
    slug: 'rak-offshore-company',
    title: 'RAK Offshore Company',
    subtitle: 'RAK International Corporate Centre',
    category: 'Offshore',
    description: ['The gold standard for offshore jurisdictions in UAE.'],
    advantages: ['Stable legal framework', 'Fast incorporation', 'Strong privacy laws'],
    sections: [{ title: 'Asset Holding', content: 'Preferred for real estate and intellectual property holding.' }]
  },
  {
    slug: 'jafza-offshore-company',
    title: 'JAFZA Offshore Company',
    subtitle: 'Dubai Offshore Advantage',
    category: 'Offshore',
    description: ['Premium offshore status within Dubai.'],
    advantages: ['Dubai prestige', 'Bankable jurisdiction', 'Direct real estate ownership'],
    sections: [{ title: 'Property Holding', content: 'The only offshore entity permitted to own property in Dubai freeholds.' }]
  },
  {
    slug: 'ajman-offshore-company',
    title: 'Ajman Offshore Company',
    subtitle: 'Economic Asset Holding',
    category: 'Offshore',
    description: ['Simplified and speedy offshore setup.'],
    advantages: ['Most affordable', 'Paperless process', 'Quick bank intro'],
    sections: [{ title: 'International Trade', content: 'Best for small-scale international consultants.' }]
  },

  // D. Banking & Financial Advisory
  {
    slug: 'corporate-bank-account-uae',
    title: 'Corporate Bank Account UAE',
    subtitle: 'Banking-First Advisory',
    category: 'Banking',
    description: ['In the UAE, the real challenge is not getting a license, but opening a bank account.'],
    advantages: ['Pre-approval advisory', 'Direct banker intro', 'Compliance assistance'],
    sections: [{ title: 'Our Methodology', content: 'We build your business profile to match bank risk appetites.' }]
  },
  {
    slug: 'multi-currency-bank-account',
    title: 'Multi-Currency Bank Accounts',
    subtitle: 'Global Treasury',
    category: 'Banking',
    description: ['Seamlessly trade in AED, USD, EUR, and GBP.'],
    advantages: ['Low FX fees', 'Direct SWIFT/IBAN', 'Priority service'],
    sections: [{ title: 'Trade Finance', content: 'We assist with LC/LC configurations for international traders.' }]
  },
  {
    slug: 'banking-compliance-advisory',
    title: 'Banking Compliance Advisory',
    subtitle: 'Securing Your Flow',
    category: 'Banking',
    description: ['Navigate the complex AML/KYC requirements of UAE banks.'],
    advantages: ['KYC documentation prep', 'Risk profile audit', 'Ongoing maintenance'],
    sections: [{ title: 'AML Support', content: 'We ensure your transactions are documented to satisfy bank audits.' }]
  },

  // E. Compliance & PRO Services
  {
    slug: 'pro-services-uae',
    title: 'PRO Services UAE',
    subtitle: 'Government Liaison',
    category: 'Compliance',
    description: ['Expert handling of all government-related documentation.'],
    advantages: ['Time saving', 'Error-free filing', 'Dedicated account manager'],
    sections: [{ title: 'Liaison Scope', content: 'Visas, Emirates ID, Medical, and Labor Department approvals.' }]
  },
  {
    slug: 'vat-registration-uae',
    title: 'VAT Registration & Filing',
    subtitle: 'Tax Compliance',
    category: 'Compliance',
    description: ['Ensure your business stays compliant with FTA regulations.'],
    advantages: ['Accurate filing', 'Penalty avoidance', 'Refund management'],
    sections: [{ title: 'FTA Advisory', content: 'We manage your tax portal and quarterly filings.' }]
  },
  {
    slug: 'corporate-tax-uae',
    title: 'Corporate Tax Advisory UAE',
    subtitle: 'Tax Optimization',
    category: 'Compliance',
    description: ['9% Corporate Tax is now active in the UAE. Are you ready?'],
    advantages: ['Structure optimization', 'Pillar 2 advisory', 'Documentation'],
    sections: [{ title: 'Strategy', content: 'We help you navigate the new tax landscape without overpaying.' }]
  },
  {
    slug: 'accounting-bookkeeping-uae',
    title: 'Accounting & Bookkeeping',
    subtitle: 'Financial Precision',
    category: 'Compliance',
    description: ['Professional ledger maintenance for UAE companies.'],
    advantages: ['Cloud-based tracking', 'Audit-ready reports', 'Transparency'],
    sections: [{ title: 'Ledger Management', content: 'We use Xero and QuickBooks to keep your books pristine.' }]
  },

  // F. Residency & Personal Legacy
  {
    slug: 'golden-visa-uae',
    title: 'Golden Visa UAE',
    subtitle: '10-Year Residency',
    category: 'Residency',
    description: ['Secure your future in the UAE with long-term residency.'],
    advantages: ['No sponsor needed', '100% ownership of self', 'Family sponsorship'],
    sections: [{ title: 'Eligibility', content: 'Investors, entrepreneurs, and highly skilled talent.' }]
  },
  {
    slug: 'uae-wills-estate-planning',
    title: 'UAE Wills & Estate Planning',
    subtitle: 'Legacy Protection',
    category: 'Residency',
    description: ['Protect your assets according to your wishes, not local law defaults.'],
    advantages: ['DIFC Court registration', 'Asset protection', 'Family security'],
    sections: [{ title: 'Asset Distribution', content: 'We draft and register wills for non-muslims and muslims alike.' }]
  },

  // G. Corporate Support Services
  {
    slug: 'iso-certification-uae',
    title: 'ISO Certification Services',
    subtitle: 'Quality Standards',
    category: 'Corporate Support',
    description: ['Gain global credibility with ISO standards.'],
    advantages: ['Global recognition', 'Process efficiency', 'Client trust'],
    sections: [{ title: 'Standard Types', content: 'ISO 9001, 14001, 45001 and more.' }]
  },
  {
    slug: 'document-attestation-uae',
    title: 'Document Attestation',
    subtitle: 'MOFA & Embassy Liaison',
    category: 'Corporate Support',
    description: ['Get your international documents legalized for UAE use.'],
    advantages: ['Worldwide pickup', 'Verified results', 'Fast turnaround'],
    sections: [{ title: 'Service Scope', content: 'Educational, Marriage, and Corporate certificates.' }]
  },
  {
    slug: 'legal-translation-uae',
    title: 'Legal Translation Services',
    subtitle: 'Certified Linguists',
    category: 'Corporate Support',
    description: ['Precise translation for MOJ and government submissions.'],
    advantages: ['MOJ certified', '75+ languages', 'Confidentiality'],
    sections: [{ title: 'Document Types', content: 'Court documents, MOAs, and legal contracts.' }]
  }
];
