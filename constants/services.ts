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
    image?: string;
  }[];
  image: string;
}

export const SERVICES: ServiceData[] = [
  // A. Mainland Business Setup
  {
    slug: 'mainland-company-formation',
    title: 'Mainland Company Formation',
    subtitle: 'Onshore Business Solutions',
    category: 'Mainland',
    description: [
      'Establishing a mainland company in the UAE offers unparalleled access to the local market and government contracts. A mainland business entity is registered with the Department of Economy and Development, allowing you to operate freely across all seven emirates without geographical restrictions or the need for local distributors.',
      'Grow Infinity provides end-to-end advisory to ensure your mainland entity is structured for maximum flexibility and banking compliance. Our comprehensive services include business activity selection, trade name reservation, initial approval processing, Memorandum of Association drafting, office space procurement, Ejari registration, license issuance, and corporate bank account opening with leading UAE financial institutions.',
      'With recent regulatory reforms allowing 100% foreign ownership in most sectors, mainland company formation has become increasingly attractive for international entrepreneurs seeking complete control over their UAE business operations while enjoying unlimited market access and the ability to participate in government tenders.'
    ],
    image: "/services/mainland_setup_service.png",
    advantages: [
      '100% Foreign Ownership in most sectors',
      'No geographical limits for trade',
      'Access to government tenders',
      'Easy employee visa processing'
    ],
    sections: [
      {
        title: 'Why Choose UAE Mainland?',
        content: 'Mainland companies are registered under the Department of Economy and Tourism (DET) and operate under UAE federal commercial law. They allow you to trade freely within the UAE and internationally without restrictions, making them ideal for businesses seeking comprehensive market penetration and direct access to government contracts.',
        image: "/services/mainland_category.jpg"
      },
      {
        title: 'Our Entry Strategy',
        content: 'We handle everything from initial consultation and business planning to trade license issuance and corporate banking setup. Our experienced team guides you through business activity selection, ensuring you choose activities that align with your business model while maximizing operational flexibility and market opportunities.',
        image: "/services/mainland_category.jpg"
      },
      {
        title: 'Banking-First Approach',
        content: 'Our banking-first approach ensures your mainland license is structured to meet the stringent requirements of UAE banks from day one. We prepare comprehensive business profiles, financial projections, and compliance documentation that significantly improve corporate bank account approval rates and reduce account opening timelines.',
        image: "/services/mainland_category.jpg"
      },
      {
        title: 'Complete Setup Process',
        content: 'Our streamlined mainland company formation process typically takes 7-10 working days from document submission to license issuance. We begin with business activity consultation and trade name selection, proceed through initial approval and Memorandum of Association preparation, secure approved office space with Ejari registration, and conclude with license issuance.',
        image: "/services/mainland_category.jpg"
      }
    ]
  },
  {
    slug: 'llc-company-formation-uae',
    title: 'LLC Company Formation',
    subtitle: 'Limited Liability Protector',
    category: 'Mainland',
    description: [
      'The Limited Liability Company (LLC) is the most common and versatile business structure in the UAE mainland, designed to provide entrepreneurs with comprehensive legal protection while maintaining operational flexibility. The LLC structure separates personal assets from business liabilities, ensuring that shareholders are only liable for the company debts up to the amount of their capital contribution.',
      'UAE LLCs can be formed with a minimum of two shareholders and a maximum of fifty shareholders, offering flexibility in ownership structure and capital distribution. The company is governed by a Memorandum of Association that clearly defines shareholder rights, profit distribution mechanisms, management responsibilities, and operational guidelines.',
      'With recent regulatory reforms, foreign investors can now own 100% of an LLC in most business sectors without requiring a UAE national partner, making this structure increasingly attractive for international entrepreneurs seeking complete control over their business operations.'
    ],
    image: "/services/llc_service.png",
    advantages: ['Limited liability protection', 'Flexible shareholding', 'Scalable operations'],
    sections: [
      {
        title: 'Structure & Compliance',
        content: 'We ensure your LLC Agreement (MOA) is legally robust and bank-compliant. Our experienced legal team drafts comprehensive Memorandums of Association that clearly define shareholder rights, profit distribution, management structure, and operational guidelines while ensuring compliance with UAE Commercial Companies Law and banking requirements.',
        image: "/services/llc_service.png"
      },
      {
        title: 'Shareholding Flexibility',
        content: 'LLCs accommodate between 2 to 50 shareholders with customizable ownership percentages and profit distribution arrangements. This flexibility allows you to bring in strategic partners, investors, or family members while maintaining clear ownership structures and defined management responsibilities through the MOA.',
        image: "/services/llc_service.png"
      },
      {
        title: 'Limited Liability Protection',
        content: 'Shareholders enjoy complete protection of personal assets from business debts and legal obligations. Your liability is strictly limited to your capital contribution in the company, ensuring that personal wealth, properties, and investments remain secure even if the business faces financial difficulties or legal challenges.',
        image: "/services/llc_service.png"
      }
    ]
  },
  {
    slug: 'professional-license-uae',
    title: 'Professional License Setup',
    subtitle: 'Expert-led Business Units',
    category: 'Mainland',
    description: [
      'Professional licenses in the UAE are specifically designed for specialists, consultants, and service providers who offer expertise-based services rather than trading in goods. This license category is ideal for professionals in fields such as legal services, accounting, engineering, architecture, medical services, educational consulting, and various other knowledge-based industries.',
      'The professional license allows qualified individuals to establish their own consultancy or service business in the UAE mainland with 100% foreign ownership. This structure provides complete autonomy over business operations, client relationships, and service delivery while maintaining professional credibility and regulatory compliance.',
      'Professional license holders benefit from simplified setup procedures, lower capital requirements compared to commercial licenses, and the ability to operate from smaller office spaces. The license is particularly attractive for experienced professionals looking to leverage their expertise in the lucrative UAE market.'
    ],
    image: "/services/llc_service.png",
    advantages: ['100% ownership', 'Professional recognition', 'Simplified setup'],
    sections: [
      {
        title: 'Service Categories',
        content: 'Professional licenses are ideal for legal services, accounting, engineering, architecture, medical services, educational consulting, and various other knowledge-based industries. This license category is specifically designed for specialists who offer expertise-based services rather than trading in goods or commercial products.',
        image: "/services/llc_service.png"
      },
      {
        title: 'Qualification Requirements',
        content: 'Professional license applicants must hold relevant educational qualifications and professional certifications in their field of expertise. We assist with degree attestation, professional accreditation verification, and documentation preparation to ensure your qualifications meet DED requirements for professional license issuance.',
        image: "/services/llc_service.png"
      },
      {
        title: 'Setup Advantages',
        content: 'Professional license holders benefit from simplified setup procedures, lower capital requirements compared to commercial licenses, and the ability to operate from smaller office spaces. The license provides complete autonomy over business operations, client relationships, and service delivery while maintaining professional credibility.',
        image: "/services/llc_service.png"
      }
    ]
  },
  {
    slug: 'branch-office-uae',
    title: 'Branch Office Setup',
    subtitle: 'Global Expansion',
    category: 'Mainland',
    description: [
      'A branch office allows established international companies to expand their operations into the UAE market while maintaining direct control and unified branding under the parent company. This structure is ideal for multinational corporations seeking to establish a physical presence in the UAE without creating a separate legal entity.',
      'Branch offices operate as an extension of the parent company, conducting the same business activities and maintaining the same corporate identity. All operations, contracts, and liabilities are directly attributable to the parent company, ensuring seamless integration with global operations and consolidated financial reporting.',
      'The branch office structure is particularly beneficial for companies with established international reputations seeking to leverage their brand recognition in the UAE market. It provides a cost-effective entry strategy while maintaining complete parent company control over operations, staffing, and strategic direction.'
    ],
    image: "/services/branch_office_service.png",
    advantages: ['Full parent company control', 'Unified branding', 'Strategic market entry'],
    sections: [
      {
        title: 'Legal Requirements',
        content: 'We manage the cross-border legalities and document attestation required for branch office establishment. This includes parent company documentation, board resolutions, certificate of incorporation, memorandum and articles of association, and financial statements, all properly attested through the embassy chain and UAE Ministry of Foreign Affairs.',
        image: "/services/branch_office_service.png"
      },
      {
        title: 'Parent Company Control',
        content: 'Branch offices operate as an extension of the parent company, conducting the same business activities and maintaining the same corporate identity. All operations, contracts, and liabilities are directly attributable to the parent company, ensuring seamless integration with global operations and consolidated financial reporting.',
        image: "/services/branch_office_service.png"
      },
      {
        title: 'Strategic Benefits',
        content: 'The branch office structure is particularly beneficial for companies with established international reputations seeking to leverage their brand recognition in the UAE market. It provides a cost-effective entry strategy while maintaining complete parent company control over operations, staffing, and strategic direction.',
        image: "/services/branch_office_service.png"
      }
    ]
  },
  {
    slug: 'representative-office-uae',
    title: 'Representative Office Setup',
    subtitle: 'Market Presence',
    category: 'Mainland',
    description: [
      'A representative office provides international companies with a strategic presence in the UAE for marketing, market research, and business development activities without engaging in direct commercial trading. This structure is ideal for companies exploring the UAE market before committing to full-scale operations.',
      'Representative offices focus on promoting the parent company brand, conducting market research, identifying business opportunities, and facilitating connections between the parent company and potential UAE clients or partners. They cannot engage in revenue-generating activities, sign commercial contracts, or conduct direct sales.',
      'This low-overhead structure allows companies to establish market presence, build relationships, and gather intelligence about the UAE business environment with minimal investment and regulatory requirements. It serves as an excellent stepping stone for companies planning eventual full commercial operations.'
    ],
    image: "/services/branch_office_service.png",
    advantages: ['Low overhead', 'Strategic networking', 'Direct market research'],
    sections: [
      {
        title: 'Operational Limits',
        content: 'Representative offices are focused on marketing and administrative support for the parent company. They cannot engage in revenue-generating activities, sign commercial contracts, or conduct direct sales. The office serves as a liaison between the parent company and potential UAE clients or partners.',
        image: "/services/branch_office_service.png"
      },
      {
        title: 'Permitted Activities',
        content: 'Representative offices can conduct market research, identify business opportunities, promote the parent company brand, facilitate connections with potential clients, and gather market intelligence. These activities help companies explore the UAE market before committing to full-scale commercial operations.',
        image: "/services/branch_office_service.png"
      },
      {
        title: 'Cost-Effective Presence',
        content: 'This low-overhead structure allows companies to establish market presence, build relationships, and gather intelligence about the UAE business environment with minimal investment and regulatory requirements. It serves as an excellent stepping stone for companies planning eventual full commercial operations.',
        image: "/services/branch_office_service.png"
      }
    ]
  },
  {
    slug: 'civil-company-formation',
    title: 'Civil Company Formation',
    subtitle: 'Professional Partnerships',
    category: 'Mainland',
    description: [
      'Civil companies are specialized business structures designed for professionals in traditional regulated fields such as medicine, dentistry, law, engineering, and accounting. This formation type allows licensed professionals to practice their profession and provide specialized services while maintaining professional standards and regulatory compliance.',
      'Civil companies are governed by specific professional regulations and require all partners to hold relevant professional qualifications and licenses. The structure ensures that professional services are delivered by qualified practitioners while providing a legal framework for partnership, profit sharing, and liability management.',
      'This formation is particularly suitable for professionals seeking to establish group practices or partnerships with other qualified practitioners. It provides the benefits of shared resources, collaborative expertise, and professional credibility while maintaining individual professional accountability and adherence to industry-specific regulations.'
    ],
    image: "/services/llc_service.png",
    advantages: ['Full ownership for professionals', 'Flexible partnership models', 'Direct professional liability'],
    sections: [
      {
        title: 'Licensing Process',
        content: 'We guide you through the professional accreditation required for civil companies. This includes verification of professional qualifications, licensing from relevant professional bodies, degree attestation, and compliance with industry-specific regulations governing professional practice in the UAE.',
        image: "/services/llc_service.png"
      },
      {
        title: 'Professional Partnerships',
        content: 'Civil companies allow licensed professionals to establish group practices or partnerships with other qualified practitioners. The structure provides the benefits of shared resources, collaborative expertise, and professional credibility while maintaining individual professional accountability and adherence to industry-specific regulations.',
        image: "/services/llc_service.png"
      },
      {
        title: 'Regulatory Compliance',
        content: 'Civil companies are governed by specific professional regulations and require all partners to hold relevant professional qualifications and licenses. The structure ensures that professional services are delivered by qualified practitioners while providing a legal framework for partnership, profit sharing, and liability management.',
        image: "/services/llc_service.png"
      }
    ]
  },

  // B. Free Zone Company Formation
  {
    slug: 'free-zone-company-setup',
    title: 'Free Zone Business Setup',
    subtitle: 'Tax-Efficient Structures',
    category: 'Free Zone',
    description: [
      'The UAE offers 40+ specialized Free Zones tailored to specific industries, each providing unique advantages for different business sectors. Free zones are designated economic areas that offer 100% foreign ownership, complete tax exemptions, and streamlined business setup procedures designed to attract international investment and foster economic growth.',
      'Free zone companies benefit from zero corporate and income tax, full repatriation of capital and profits, no currency restrictions, and exemption from import and export duties. These zones provide world-class infrastructure, modern office facilities, and strategic locations near airports, seaports, and major transportation hubs.',
      'Choosing the right free zone is crucial for your business success. Our experts analyze your business activities, budget constraints, and operational requirements to recommend the optimal free zone that aligns with your strategic objectives and provides maximum value for your investment.'
    ],
    image: "/services/freezone_category.jpg",
    advantages: ['0% Corporate & Income Tax', '100% Capital Repatriation', 'Simplified Customs'],
    sections: [
      {
        title: 'Strategic Free Zone Selection',
        content: 'We help you choose the right free zone based on your business activity, budget constraints, and operational requirements. Our experts analyze over 40 specialized free zones to recommend the optimal jurisdiction that aligns with your strategic objectives and provides maximum value for your investment.',
        image: "/services/freezone_category.jpg"
      },
      {
        title: 'Tax Benefits',
        content: 'Free zone companies benefit from zero corporate and income tax, full repatriation of capital and profits, no currency restrictions, and exemption from import and export duties. These tax advantages significantly reduce operational costs and improve profitability for international businesses.',
        image: "/services/freezone_category.jpg"
      },
      {
        title: 'Setup Process',
        content: 'Our streamlined free zone setup process includes business activity selection, company name reservation, initial approval, license issuance, office space procurement, and visa processing. We handle all government procedures and documentation to ensure efficient company formation.',
        image: "/services/freezone_category.jpg"
      }
    ]
  },
  {
    slug: 'ifza-company-formation',
    title: 'IFZA Company Formation',
    subtitle: 'International Free Zone Authority',
    category: 'Free Zone',
    description: [
      'International Free Zone Authority (IFZA) offers flexible and cost-effective business solutions in Dubai with streamlined setup procedures and competitive pricing packages. IFZA is designed for startups, SMEs, and service-based businesses seeking an affordable entry point into the UAE market with minimal bureaucracy and fast-track processing.',
      'IFZA provides modern office spaces, flexi-desk options, and virtual office solutions to accommodate businesses of all sizes and budgets. The free zone offers comprehensive business support services including visa processing, PRO services, and banking assistance to ensure smooth company formation and operational setup.',
      'Located strategically in Dubai with excellent connectivity to major business districts, IFZA is particularly popular among consultants, IT companies, marketing agencies, and professional service providers who value affordability, flexibility, and efficient business setup processes.'
    ],
    image: "/services/ifza_service.png",
    advantages: ['Fast-track setup', 'Modern office facilities', 'Competitive pricing'],
    sections: [
      {
        title: 'Why IFZA?',
        content: 'IFZA is preferred for consultancy and service-based startups seeking affordable entry into the UAE market. The free zone offers flexible office solutions, competitive pricing packages, and streamlined setup procedures designed for small and medium enterprises.',
        image: "/services/ifza_service.png"
      },
      {
        title: 'Cost-Effective Solutions',
        content: 'IFZA provides modern office spaces, flexi-desk options, and virtual office solutions to accommodate businesses of all sizes and budgets. The free zone offers comprehensive business support services including visa processing, PRO services, and banking assistance.',
        image: "/services/ifza_service.png"
      },
      {
        title: 'Fast-Track Processing',
        content: 'IFZA enables rapid company formation with minimal bureaucracy and fast-track approval procedures. The free zone is particularly popular among consultants, IT companies, marketing agencies, and professional service providers who value affordability and efficiency.',
        image: "/services/ifza_service.png"
      }
    ]
  },
  {
    slug: 'dmcc-company-formation',
    title: 'DMCC Company Formation',
    subtitle: 'Global Commodities Hub',
    category: 'Free Zone',
    description: [
      'Dubai Multi Commodities Centre (DMCC) is the world\'s leading free zone and the number one choice for commodities trading, precious metals, and diamond businesses. Located in the prestigious Jumeirah Lakes Towers (JLT) district, DMCC offers unparalleled networking opportunities, premium infrastructure, and access to a thriving business community of over 21,000 companies.',
      'DMCC has been recognized as the Global Free Zone of the Year for seven consecutive years, demonstrating its commitment to excellence, innovation, and business-friendly environment. The free zone provides state-of-the-art office towers, luxury amenities, and comprehensive business support services.',
      'DMCC is ideal for businesses in commodities trading, precious metals, diamonds, energy, financial services, and professional services sectors. The free zone offers excellent banking relationships, regulatory support, and access to global markets, making it the preferred choice for established businesses seeking premium positioning.'
    ],
    image: "/services/dmcc_service.png",
    advantages: ['Global networking', 'Prime location', 'Premium infrastructure'],
    sections: [
      {
        title: 'Trading Hub',
        content: 'DMCC is ideal for gold, diamond, and energy trading businesses. The free zone is recognized as the Global Free Zone of the Year for seven consecutive years, demonstrating its commitment to excellence and business-friendly environment.',
        image: "/services/dmcc_service.png"
      },
      {
        title: 'Premium Infrastructure',
        content: 'DMCC provides state-of-the-art office towers, luxury amenities, and comprehensive business support services in the prestigious Jumeirah Lakes Towers district. The free zone offers unparalleled networking opportunities and access to a thriving business community of over 21,000 companies.',
        image: "/services/dmcc_service.png"
      },
      {
        title: 'Global Recognition',
        content: 'DMCC offers excellent banking relationships, regulatory support, and access to global markets, making it the preferred choice for established businesses seeking premium positioning. The free zone specializes in commodities trading, precious metals, diamonds, energy, and financial services.',
        image: "/services/dmcc_service.png"
      }
    ]
  },
  {
    slug: 'meydan-free-zone',
    title: 'Meydan Free Zone Setup',
    subtitle: 'Elite Business Environment',
    category: 'Free Zone',
    description: [
      'Meydan Free Zone is a prestigious business hub located at the heart of Dubai, offering an elite business environment with world-class facilities and a digital-first approach to company formation. The free zone is strategically positioned near Dubai International Airport and major business districts, providing excellent connectivity and accessibility.',
      'Meydan Free Zone specializes in serving e-commerce businesses, digital startups, technology companies, and modern entrepreneurs who value innovation, flexibility, and cutting-edge infrastructure. The free zone offers fully digital license processing, online business management tools, and streamlined procedures that enable rapid company setup.',
      'With its prestigious address, modern amenities, and focus on digital transformation, Meydan Free Zone is the top choice for digital nomads, e-commerce entrepreneurs, and tech-savvy businesses seeking a premium business environment with minimal physical presence requirements and maximum operational flexibility.'
    ],
    image: "/services/ifza_service.png",
    advantages: ['Prestigious address', 'Digital-first setup', 'Excellent amenities'],
    sections: [
      {
        title: 'E-commerce Friendly',
        content: 'Meydan Free Zone is the top choice for digital nomads and e-commerce entrepreneurs seeking a premium business environment. The free zone offers fully digital license processing, online business management tools, and streamlined procedures that enable rapid company setup.',
        image: "/services/meydan_ecommerce.png"
      },
      {
        title: 'Digital-First Approach',
        content: 'Meydan specializes in serving e-commerce businesses, digital startups, technology companies, and modern entrepreneurs who value innovation and flexibility. The free zone provides cutting-edge infrastructure with minimal physical presence requirements and maximum operational flexibility.',
        image: "/services/ifza_service.png"
      },
      {
        title: 'Strategic Location',
        content: 'Located at the heart of Dubai near Dubai International Airport and major business districts, Meydan Free Zone provides excellent connectivity and accessibility. The prestigious address and modern amenities make it ideal for businesses seeking elite positioning.',
        image: "/services/ifza_service.png"
      }
    ]
  },
  {
    slug: 'rakez-company-formation',
    title: 'RAKEZ Company Formation',
    subtitle: 'Industrial & Academic Hub',
    category: 'Free Zone',
    description: [
      'Ras Al Khaimah Economic Zone (RAKEZ) connects businesses to global markets with cost-effective solutions, extensive industrial infrastructure, and strategic location in the northern emirate of Ras Al Khaimah. RAKEZ offers significantly lower setup and operational costs compared to Dubai-based free zones while maintaining high-quality facilities and services.',
      'RAKEZ provides diverse business park options including industrial zones, academic zones, and general business parks, accommodating manufacturing, trading, logistics, and service businesses. The free zone offers large warehouse spaces, industrial facilities, and flexible office solutions suitable for businesses of all sizes.',
      'With its proximity to major seaports, airports, and the UAE-Oman border, RAKEZ is ideal for manufacturing companies, logistics operations, and businesses requiring large-scale industrial facilities. The free zone offers excellent value for money while providing comprehensive support services and efficient business setup procedures.'
    ],
    image: "/services/rakez_service.png",
    advantages: ['Low cost', 'Extensive warehouse space', 'Simplified logistics'],
    sections: [
      {
        title: 'Manufacturing Focus',
        content: 'RAKEZ is best for industrial projects and large-scale distribution operations. The free zone provides diverse business park options including industrial zones, academic zones, and general business parks, accommodating manufacturing, trading, logistics, and service businesses.',
        image: "/services/rakez_service.png"
      },
      {
        title: 'Cost Advantages',
        content: 'RAKEZ offers significantly lower setup and operational costs compared to Dubai-based free zones while maintaining high-quality facilities and services. The free zone provides large warehouse spaces, industrial facilities, and flexible office solutions suitable for businesses of all sizes.',
        image: "/services/rakez_service.png"
      },
      {
        title: 'Strategic Access',
        content: 'With proximity to major seaports, airports, and the UAE-Oman border, RAKEZ is ideal for manufacturing companies and logistics operations. The free zone offers excellent value for money while providing comprehensive support services and efficient business setup procedures.',
        image: "/services/rakez_service.png"
      }
    ]
  },
  {
    slug: 'sharjah-publishing-city',
    title: 'SPC Free Zone Setup',
    subtitle: 'Shajah Publishing City',
    category: 'Free Zone',
    description: [
      'Sharjah Publishing City (SPC) is the world\'s first free zone dedicated to publishing, printing, and packaging industries, offering specialized infrastructure and services tailored to media and creative businesses. SPC provides the fastest license issuance in the UAE, with companies able to obtain their license in as little as 2 hours.',
      'SPC offers unique dual license options allowing businesses to operate both within the free zone and in the UAE mainland market, providing maximum flexibility and market access. The free zone supports multisite business activities, enabling companies to establish operations across different locations while maintaining a single license.',
      'With its focus on speed, flexibility, and industry-specific support, SPC is ideal for publishing houses, printing companies, packaging businesses, media agencies, and creative enterprises seeking rapid setup, competitive costs, and specialized facilities designed for their unique operational requirements.'
    ],
    image: "/services/spc_service.png",
    advantages: ['Fastest license issuance', 'Dual license options', 'Multisite business activities'],
    sections: [
      {
        title: 'Speed of Execution',
        content: 'SPC provides the fastest license issuance in the UAE, with companies able to obtain their business license in as little as 2 hours. This rapid processing makes SPC ideal for businesses requiring immediate operational capability.',
        image: "/services/spc_service.png"
      },
      {
        title: 'Dual License Options',
        content: 'SPC offers unique dual license options allowing businesses to operate both within the free zone and in the UAE mainland market, providing maximum flexibility and market access. The free zone supports multisite business activities across different locations.',
        image: "/services/spc_service.png"
      },
      {
        title: 'Industry Specialization',
        content: 'As the world\'s first free zone dedicated to publishing, printing, and packaging industries, SPC offers specialized infrastructure and services tailored to media and creative businesses. The free zone is ideal for publishing houses, printing companies, and packaging businesses.',
        image: "/services/spc_service.png"
      }
    ]
  },
  {
    slug: 'shams-free-zone',
    title: 'SHAMS Free Zone Setup',
    subtitle: 'Sharjah Media City',
    category: 'Free Zone',
    description: [
      'Sharjah Media City (SHAMS) is a creative hub designed specifically for media professionals, digital startups, content creators, and creative industries. SHAMS offers the most affordable free zone setup in the UAE with flexible flexi-desk options, no deposit requirements, and simplified visa processing procedures.',
      'SHAMS caters to designers, marketers, influencers, content creators, media production companies, and digital agencies seeking a cost-effective entry into the UAE market. The free zone provides modern co-working spaces, creative studios, and collaborative environments that foster innovation and networking.',
      'With its focus on the creative economy and affordable pricing structure, SHAMS is the perfect choice for freelancers, startups, and small creative businesses looking to establish a legal presence in the UAE without significant capital investment while benefiting from free zone advantages.'
    ],
    image: "/services/shams_service.png",
    advantages: ['Affordable flexi-desks', 'No deposit required', 'Simplified visa process'],
    sections: [
      {
        title: 'Creative Economy',
        content: 'SHAMS is tailored for designers, marketers, and influencers seeking cost-effective entry into the UAE market. The free zone caters to media professionals, digital startups, content creators, and creative industries with affordable pricing and flexible solutions.',
        image: "/services/shams_service.png"
      },
      {
        title: 'Affordable Setup',
        content: 'SHAMS offers the most affordable free zone setup in the UAE with flexible flexi-desk options and no deposit requirements. The free zone provides modern co-working spaces, creative studios, and collaborative environments that foster innovation and networking.',
        image: "/services/shams_service.png"
      },
      {
        title: 'Simplified Procedures',
        content: 'With simplified visa processing procedures and minimal capital requirements, SHAMS is perfect for freelancers and small creative businesses. The free zone enables legal presence in the UAE without significant capital investment while benefiting from free zone advantages.',
        image: "/services/shams_service.png"
      }
    ]
  },
  {
    slug: 'difc-company-formation',
    title: 'DIFC Company Formation',
    subtitle: 'Financial District',
    category: 'Free Zone',
    description: [
      'Dubai International Financial Centre (DIFC) is the leading financial hub for the Middle East, Africa, and South Asia (MEASA) region, offering a world-class regulatory framework based on English common law. DIFC provides a unique jurisdiction specifically designed for financial services, fintech companies, and professional services firms.',
      'DIFC operates under its own independent regulatory authority (DFSA) with regulations aligned with international best practices and standards. The financial center offers access to an independent judicial system, sophisticated legal framework, and comprehensive regulatory oversight that meets global compliance requirements.',
      'DIFC is ideal for banks, insurance companies, asset management firms, fintech startups, law firms, and professional services seeking to operate in a globally recognized financial center with elite networking opportunities, access to international markets, and regulatory credibility that facilitates global business operations.'
    ],
    image: "/services/difc_service.png",
    advantages: ['Common Law legal framework', 'Elite networking', 'Global financial standard'],
    sections: [
      {
        title: 'Financial Advisory',
        content: 'We assist with DFSA licensing and regulatory compliance for financial services firms. DIFC operates under its own independent regulatory authority with regulations aligned with international best practices and standards.',
        image: "/services/difc_service.png"
      },
      {
        title: 'Common Law Framework',
        content: 'DIFC provides a world-class regulatory framework based on English common law with access to an independent judicial system. The financial center offers sophisticated legal framework and comprehensive regulatory oversight that meets global compliance requirements.',
        image: "/services/difc_service.png"
      },
      {
        title: 'Elite Positioning',
        content: 'DIFC is ideal for banks, insurance companies, asset management firms, fintech startups, and professional services seeking to operate in a globally recognized financial center. The jurisdiction provides elite networking opportunities and access to international markets.',
        image: "/services/difc_service.png"
      }
    ]
  },
  {
    slug: 'dafza-company-formation',
    title: 'DAFZA Company Formation',
    subtitle: 'Dubai Airport Free Zone',
    category: 'Free Zone',
    description: [
      'Dubai Airport Free Zone (DAFZA) offers a strategic location adjacent to Dubai International Airport (DXB), providing unparalleled logistics advantages and direct air-cargo connectivity. DAFZA is specifically designed for aviation-related businesses, freight forwarding companies, electronics trading, and businesses requiring rapid international shipping capabilities.',
      'DAFZA provides superior logistics infrastructure with direct access to airport facilities, customs clearance areas, and cargo handling services. The free zone offers tax exemptions, streamlined import-export procedures, and efficient supply chain management solutions that reduce operational costs and improve delivery timelines.',
      'With its proximity to one of the world\'s busiest airports and comprehensive logistics support, DAFZA is perfect for aviation services, freight forwarding, electronics trading, pharmaceutical distribution, and businesses where speed-to-market and air connectivity are critical success factors.'
    ],
    image: "/services/jafza_service.png",
    advantages: ['Superior logistics', 'Tax exemptions', 'Direct air-cargo link'],
    sections: [
      {
        title: 'Logistics Hub',
        content: 'DAFZA is perfect for aviation, freight forwarding, and electronics trading businesses. The free zone offers strategic location adjacent to Dubai International Airport with unparalleled logistics advantages and direct air-cargo connectivity.',
        image: "/services/jafza_service.png"
      },
      {
        title: 'Superior Infrastructure',
        content: 'DAFZA provides superior logistics infrastructure with direct access to airport facilities, customs clearance areas, and cargo handling services. The free zone offers tax exemptions and streamlined import-export procedures that reduce operational costs.',
        image: "/services/jafza_service.png"
      },
      {
        title: 'Speed-to-Market',
        content: 'With proximity to one of the world\'s busiest airports, DAFZA is ideal for businesses where speed-to-market and air connectivity are critical success factors. The free zone specializes in aviation services, pharmaceutical distribution, and rapid international shipping.',
        image: "/services/jafza_service.png"
      }
    ]
  },
  {
    slug: 'jafza-company-formation',
    title: 'JAFZA Company Formation',
    subtitle: 'Jebel Ali Free Zone',
    category: 'Free Zone',
    description: [
      'Jebel Ali Free Zone (JAFZA) is the largest industrial free zone in the world, offering massive-scale infrastructure, comprehensive logistics facilities, and unparalleled sea-to-air connectivity. JAFZA is home to over 7,000 companies and provides world-class manufacturing, warehousing, and distribution facilities.',
      'JAFZA offers direct access to Jebel Ali Port, one of the largest and busiest ports globally, combined with proximity to Al Maktoum International Airport. This dual connectivity enables seamless global supply chain operations, efficient import-export procedures, and cost-effective international trade.',
      'JAFZA is ideal for large-scale manufacturing operations, global distribution centers, logistics companies, and businesses requiring extensive industrial facilities. The free zone provides comprehensive infrastructure including warehouses, factories, office spaces, and specialized facilities for diverse industries.'
    ],
    image: "/services/jafza_service.png",
    advantages: ['Sea-to-air connectivity', 'Massive scale infrastructure', 'Global supply chain'],
    sections: [
      {
        title: 'Distribution Center',
        content: 'JAFZA is best for large-scale global manufacturing and distribution operations. As the largest industrial free zone in the world, JAFZA is home to over 7,000 companies and provides world-class manufacturing, warehousing, and distribution facilities.',
        image: "/services/jafza_service.png"
      },
      {
        title: 'Sea-to-Air Connectivity',
        content: 'JAFZA offers direct access to Jebel Ali Port, one of the largest and busiest ports globally, combined with proximity to Al Maktoum International Airport. This dual connectivity enables seamless global supply chain operations and cost-effective international trade.',
        image: "/services/jafza_service.png"
      },
      {
        title: 'Massive Infrastructure',
        content: 'The free zone provides comprehensive infrastructure including warehouses, factories, office spaces, and specialized facilities for diverse industries. JAFZA is ideal for businesses requiring extensive industrial facilities and global distribution capabilities.',
        image: "/services/jafza_service.png"
      }
    ]
  },
  {
    slug: 'dubai-south-free-zone',
    title: 'Dubai South Free Zone',
    subtitle: 'The Home of Expo 2020',
    category: 'Free Zone',
    description: [
      'Dubai South Free Zone, formerly known as Dubai World Central, is a sustainability and innovation-focused hub built around Al Maktoum International Airport and the Expo 2020 site. The free zone emphasizes green business practices, smart city technologies, and sustainable development initiatives.',
      'Dubai South offers proximity to Al Maktoum International Airport, which is set to become the world\'s largest airport, providing exceptional aviation connectivity and logistics capabilities. The free zone integrates urban living with business operations, offering residential communities, retail facilities, and comprehensive amenities.',
      'Dubai South is ideal for aerospace companies, logistics operations, e-commerce businesses, and companies focused on innovation and sustainability. The free zone provides modern infrastructure, competitive pricing, and strategic positioning for businesses seeking long-term growth in a future-focused environment.'
    ],
    image: "/services/jafza_service.png",
    advantages: ['Proximity to DWC Airport', 'Urban living integration', 'Supply chain mastery'],
    sections: [
      {
        title: 'Aviation Focus',
        content: 'Dubai South is the epicenter of Dubai aerospace and logistics projects. The free zone is built around Al Maktoum International Airport and the Expo 2020 site, emphasizing green business practices and smart city technologies.',
        image: "/services/jafza_service.png"
      },
      {
        title: 'Future-Focused Development',
        content: 'Dubai South offers proximity to Al Maktoum International Airport, which is set to become the world\'s largest airport. The free zone integrates urban living with business operations, offering residential communities and comprehensive amenities.',
        image: "/services/jafza_service.png"
      },
      {
        title: 'Sustainability Hub',
        content: 'Dubai South is ideal for aerospace companies, logistics operations, e-commerce businesses, and companies focused on innovation and sustainability. The free zone provides modern infrastructure and strategic positioning for long-term growth.',
        image: "/services/jafza_service.png"
      }
    ]
  },
  {
    slug: 'ajman-free-zone',
    title: 'Ajman Free Zone Setup',
    subtitle: 'Cost-Effective Growth',
    category: 'Free Zone',
    description: [
      'Ajman Free Zone is a strategic and economical gateway for small and medium enterprises (SMEs) seeking cost-effective business setup solutions in the UAE. Ajman Free Zone offers the cheapest setup costs among UAE free zones while maintaining quality facilities and comprehensive business support services.',
      'The free zone provides strategic access to Ajman Port and excellent connectivity to Dubai and other emirates via modern highway networks. Ajman Free Zone offers quick visa processing, flexible office solutions, and simplified procedures that enable rapid business setup and operational commencement.',
      'Ajman Free Zone is highly recommended for startups, young entrepreneurs, and budget-conscious businesses seeking to establish a UAE presence without significant capital investment. The free zone provides excellent value for money while offering all standard free zone benefits including tax exemptions and full ownership.'
    ],
    image: "/services/freezone_category.jpg",
    advantages: ['Cheapest setup costs', 'Strategic port access', 'Quick visa services'],
    sections: [
      {
        title: 'Budget Friendly',
        content: 'Ajman Free Zone is highly recommended for startups and young entrepreneurs seeking cost-effective business setup. The free zone offers the cheapest setup costs among UAE free zones while maintaining quality facilities and comprehensive business support services.',
        image: "/services/freezone_category.jpg"
      },
      {
        title: 'Quick Processing',
        content: 'Ajman Free Zone provides strategic access to Ajman Port and excellent connectivity to Dubai via modern highway networks. The free zone offers quick visa processing, flexible office solutions, and simplified procedures for rapid business setup.',
        image: "/services/freezone_category.jpg"
      },
      {
        title: 'Value Proposition',
        content: 'The free zone provides excellent value for money while offering all standard free zone benefits including tax exemptions and full ownership. Ajman is ideal for budget-conscious businesses seeking UAE presence without significant capital investment.',
        image: "/services/freezone_category.jpg"
      }
    ]
  },
  {
    slug: 'fujairah-free-zone',
    title: 'Fujairah Free Zone Setup',
    subtitle: 'Eastern Gateway',
    category: 'Free Zone',
    description: [
      'Fujairah Free Zone offers strategic port access on the UAE\'s eastern coast with direct connectivity to the Indian Ocean, bypassing the congested Strait of Hormuz. This unique geographic advantage provides businesses with alternative shipping routes and enhanced supply chain resilience.',
      'Fujairah Free Zone specializes in oil and gas services, maritime operations, logistics, and energy-related businesses. The free zone offers lower operating costs compared to western UAE free zones while providing modern facilities, efficient procedures, and comprehensive support services.',
      'With its strategic location, maritime infrastructure, and focus on energy sector services, Fujairah Free Zone is ideal for shipping companies, oil and gas service providers, maritime logistics operations, and businesses requiring direct access to international waters and alternative trade routes.'
    ],
    image: "/services/jafza_service.png",
    advantages: ['Direct access to Indian Ocean', 'Lower operating costs', 'Multi-access connectivity'],
    sections: [
      {
        title: 'Energy & Trade',
        content: 'Fujairah Free Zone is ideal for maritime services and energy-related logistics. The free zone specializes in oil and gas services, maritime operations, and energy-related businesses with direct connectivity to the Indian Ocean.',
        image: "/services/jafza_service.png"
      },
      {
        title: 'Strategic Location',
        content: 'Located on the UAE\'s eastern coast, Fujairah Free Zone offers strategic port access bypassing the congested Strait of Hormuz. This unique geographic advantage provides businesses with alternative shipping routes and enhanced supply chain resilience.',
        image: "/services/jafza_service.png"
      },
      {
        title: 'Cost Efficiency',
        content: 'Fujairah Free Zone offers lower operating costs compared to western UAE free zones while providing modern facilities and efficient procedures. The free zone is ideal for shipping companies and oil and gas service providers.',
        image: "/services/jafza_service.png"
      }
    ]
  },

  // C. Offshore Company Solutions
  {
    slug: 'offshore-company-formation',
    title: 'Offshore Company Formation',
    subtitle: 'Asset Protection',
    category: 'Offshore',
    description: [
      'Protect your assets and maintain privacy with a UAE offshore entity designed for international business operations, asset holding, and wealth management. UAE offshore companies provide complete tax exemption, enhanced confidentiality, and flexible corporate structures ideal for non-resident business owners and international investors.',
      'Offshore companies in the UAE are specifically designed for conducting business outside the UAE mainland, holding international assets, managing intellectual property rights, and facilitating cross-border transactions. These entities cannot conduct business within the UAE but offer significant advantages for international operations.',
      'UAE offshore jurisdictions provide robust legal frameworks, strong privacy protections, and access to multi-currency banking facilities. Offshore companies are ideal for holding companies, international trading entities, asset protection vehicles, and businesses seeking tax-efficient structures for global operations.'
    ],
    image: "/services/offshore_service.png",
    advantages: ['100% Tax Free', 'High confidentiality', 'Multi-currency accounts'],
    sections: [
      {
        title: 'Non-Resident Strategy',
        content: 'UAE offshore companies are ideal for holding companies and international investment vehicles. These entities are specifically designed for conducting business outside the UAE mainland, holding international assets, and managing intellectual property rights.',
        image: "/services/offshore_service.png"
      },
      {
        title: 'Tax Advantages',
        content: 'Offshore companies benefit from 100% tax exemption, enhanced confidentiality, and flexible corporate structures ideal for non-resident business owners. UAE offshore jurisdictions provide robust legal frameworks and strong privacy protections.',
        image: "/services/offshore_service.png"
      },
      {
        title: 'Banking Access',
        content: 'Offshore entities provide access to multi-currency banking facilities with leading UAE and international banks. We assist with banking introductions and account opening procedures to ensure smooth financial operations for your offshore company.',
        image: "/services/offshore_service.png"
      }
    ]
  },
  {
    slug: 'rak-offshore-company',
    title: 'RAK Offshore Company',
    subtitle: 'RAK International Corporate Centre',
    category: 'Offshore',
    description: [
      'RAK Offshore Company formation through the RAK International Corporate Centre (RAK ICC) represents the gold standard for offshore jurisdictions in the UAE. RAK ICC provides a stable legal framework based on international best practices, offering comprehensive asset protection, privacy, and operational flexibility for international business owners.',
      'RAK offshore companies benefit from fast incorporation procedures, typically completed within 2-3 working days, with minimal documentation requirements and streamlined processes. The jurisdiction offers strong privacy laws protecting shareholder information while maintaining compliance with international transparency standards.',
      'RAK offshore entities are preferred for holding real estate investments, managing intellectual property portfolios, facilitating international trading operations, and protecting family wealth. The jurisdiction provides access to UAE banking facilities, multi-currency accounts, and comprehensive corporate services.'
    ],
    image: "/services/offshore_service.png",
    advantages: ['Stable legal framework', 'Fast incorporation', 'Strong privacy laws'],
    sections: [
      {
        title: 'Asset Holding',
        content: 'RAK offshore companies are preferred for real estate and intellectual property holding. The jurisdiction provides a stable legal framework based on international best practices, offering comprehensive asset protection and operational flexibility.',
        image: "/services/offshore_service.png"
      },
      {
        title: 'Fast Incorporation',
        content: 'RAK offshore companies benefit from fast incorporation procedures, typically completed within 2-3 working days with minimal documentation requirements. The jurisdiction offers strong privacy laws protecting shareholder information while maintaining compliance with international transparency standards.',
        image: "/services/offshore_service.png"
      },
      {
        title: 'Comprehensive Services',
        content: 'RAK ICC provides access to UAE banking facilities, multi-currency accounts, and comprehensive corporate services. The jurisdiction is ideal for international trading operations, asset protection vehicles, and businesses seeking tax-efficient structures for global operations.',
        image: "/services/offshore_service.png"
      }
    ]
  },
  {
    slug: 'jafza-offshore-company',
    title: 'JAFZA Offshore Company',
    subtitle: 'Dubai Offshore Advantage',
    category: 'Offshore',
    description: [
      'JAFZA Offshore Company formation provides premium offshore status within Dubai, combining the prestige of a Dubai address with comprehensive offshore benefits. JAFZA offshore entities are the only offshore companies permitted to directly own property in Dubai freehold areas, making them ideal for real estate investment and property holding.',
      'JAFZA offshore companies operate under a well-established legal framework recognized by international banks and financial institutions. The jurisdiction provides access to Dubai\'s sophisticated banking sector, facilitating corporate account opening with leading UAE and international banks operating in the emirate.',
      'This structure is particularly beneficial for international investors seeking to hold Dubai real estate, manage property portfolios, and conduct international business operations while maintaining a prestigious Dubai business address. JAFZA offshore companies combine asset protection with operational flexibility and banking accessibility.'
    ],
    image: "/services/offshore_service.png",
    advantages: ['Dubai prestige', 'Bankable jurisdiction', 'Direct real estate ownership'],
    sections: [
      {
        title: 'Property Holding',
        content: 'JAFZA offshore companies are the only offshore entities permitted to directly own property in Dubai freehold areas. This unique advantage makes JAFZA offshore ideal for real estate investment and property portfolio management.',
        image: "/services/offshore_service.png"
      },
      {
        title: 'Dubai Prestige',
        content: 'JAFZA offshore provides premium offshore status within Dubai, combining the prestige of a Dubai address with comprehensive offshore benefits. The jurisdiction operates under a well-established legal framework recognized by international banks and financial institutions.',
        image: "/services/jafza_prestige.png"
      },
      {
        title: 'Banking Accessibility',
        content: 'JAFZA offshore companies provide access to Dubai\'s sophisticated banking sector, facilitating corporate account opening with leading UAE and international banks. This structure combines asset protection with operational flexibility and banking accessibility.',
        image: "/services/offshore_service.png"
      }
    ]
  },
  {
    slug: 'ajman-offshore-company',
    title: 'Ajman Offshore Company',
    subtitle: 'Economic Asset Holding',
    category: 'Offshore',
    description: [
      'Ajman Offshore Company formation offers simplified and speedy offshore setup procedures with the most affordable costs among UAE offshore jurisdictions. Ajman offshore entities provide complete tax exemption, privacy protection, and streamlined incorporation processes ideal for small-scale international consultants and service providers.',
      'The jurisdiction offers a paperless incorporation process with minimal documentation requirements and fast-track approval procedures. Ajman offshore companies can be established within 2-3 working days with comprehensive support for banking introductions and account opening assistance.',
      'Ajman offshore entities are best suited for international trading operations, consultancy services, asset holding, and businesses seeking cost-effective offshore structures. The jurisdiction provides excellent value for money while offering all standard offshore benefits including tax exemption, privacy, and international business capabilities.'
    ],
    image: "/services/offshore_service.png",
    advantages: ['Most affordable', 'Paperless process', 'Quick bank intro'],
    sections: [
      {
        title: 'International Trade',
        content: 'Ajman offshore companies are best for small-scale international consultants and service providers. The jurisdiction offers simplified and speedy offshore setup procedures with the most affordable costs among UAE offshore jurisdictions.',
        image: "/services/offshore_service.png"
      },
      {
        title: 'Paperless Process',
        content: 'Ajman offshore provides a paperless incorporation process with minimal documentation requirements and fast-track approval procedures. Companies can be established within 2-3 working days with comprehensive support for banking introductions.',
        image: "/services/offshore_service.png"
      },
      {
        title: 'Cost-Effective Structure',
        content: 'Ajman offshore entities provide excellent value for money while offering all standard offshore benefits including tax exemption and privacy. The jurisdiction is ideal for businesses seeking cost-effective offshore structures for international operations.',
        image: "/services/offshore_service.png"
      }
    ]
  },

  // D. Banking & Financial Advisory
  {
    slug: 'corporate-bank-account-uae',
    title: 'Corporate Bank Account UAE',
    subtitle: 'Banking-First Advisory',
    category: 'Banking',
    description: [
      'In the UAE, the real challenge is not getting a business license, but opening a corporate bank account. UAE banks have stringent compliance requirements, risk assessment procedures, and documentation standards that many new businesses struggle to meet. Our banking-first advisory ensures your company is structured for banking approval from day one.',
      'We provide comprehensive pre-approval advisory services, analyzing your business model, shareholding structure, and operational plans to identify potential banking concerns before license issuance. Our team prepares detailed business profiles, financial projections, and compliance documentation that meet bank requirements and significantly improve approval rates.',
      'Our direct banker introductions leverage established relationships with leading UAE banks including Emirates NBD, Mashreq, ADCB, FAB, and international banks operating in the UAE. We facilitate meetings, guide you through the application process, and provide ongoing compliance assistance to ensure smooth account opening and operational banking.'
    ],
    image: "/service-banking.png",
    advantages: ['Pre-approval advisory', 'Direct banker intro', 'Compliance assistance'],
    sections: [
      {
        title: 'Our Methodology',
        content: 'We build your business profile to match bank risk appetites and compliance requirements. Our banking-first advisory ensures your company is structured for banking approval from day one with comprehensive business profiles and financial projections.',
        image: "/services/banking_category.jpg"
      },
      {
        title: 'Direct Banker Introductions',
        content: 'Our direct banker introductions leverage established relationships with leading UAE banks including Emirates NBD, Mashreq, ADCB, and FAB. We facilitate meetings, guide you through the application process, and provide ongoing compliance assistance.',
        image: "/services/banking_category.jpg"
      },
      {
        title: 'Pre-Approval Advisory',
        content: 'We provide comprehensive pre-approval advisory services, analyzing your business model and shareholding structure to identify potential banking concerns before license issuance. This approach significantly improves corporate bank account approval rates.',
        image: "/service-banking.png"
      }
    ]
  },
  {
    slug: 'multi-currency-bank-account',
    title: 'Multi-Currency Bank Accounts',
    subtitle: 'Global Treasury',
    category: 'Banking',
    description: [
      'Seamlessly trade in multiple currencies including AED, USD, EUR, and GBP with multi-currency bank accounts designed for international businesses. Multi-currency accounts eliminate the need for multiple banking relationships, reduce foreign exchange fees, and streamline international payment processing for businesses engaged in global trade.',
      'Our multi-currency banking solutions provide direct SWIFT and IBAN capabilities for efficient international transfers, competitive foreign exchange rates, and priority banking services. These accounts enable businesses to receive payments in various currencies, hold balances in multiple denominations, and execute currency conversions at optimal rates.',
      'We assist with trade finance configurations including Letter of Credit (LC) and Documentary Collection arrangements for international traders. Our banking experts help you structure payment terms, manage currency risks, and optimize cash flow through sophisticated multi-currency treasury management solutions.'
    ],
    image: "/services/banking_category.jpg",
    advantages: ['Low FX fees', 'Direct SWIFT/IBAN', 'Priority service'],
    sections: [
      {
        title: 'Trade Finance',
        content: 'We assist with Letter of Credit (LC) and Documentary Collection configurations for international traders. Our banking experts help you structure payment terms, manage currency risks, and optimize cash flow through sophisticated multi-currency treasury management.',
        image: "/services/banking_category.jpg"
      },
      {
        title: 'Currency Management',
        content: 'Multi-currency accounts eliminate the need for multiple banking relationships and reduce foreign exchange fees. These accounts enable businesses to receive payments in various currencies, hold balances in multiple denominations, and execute conversions at optimal rates.',
        image: "/services/banking_category.jpg"
      },
      {
        title: 'Global Banking',
        content: 'Our multi-currency solutions provide direct SWIFT and IBAN capabilities for efficient international transfers with competitive foreign exchange rates. These accounts streamline international payment processing for businesses engaged in global trade.',
        image: "/services/banking_category.jpg"
      }
    ]
  },
  {
    slug: 'banking-compliance-advisory',
    title: 'Banking Compliance Advisory',
    subtitle: 'Securing Your Flow',
    category: 'Banking',
    description: [
      'Navigate the complex Anti-Money Laundering (AML) and Know Your Customer (KYC) requirements of UAE banks with our comprehensive banking compliance advisory services. UAE banks maintain stringent compliance standards aligned with international regulations, requiring detailed documentation, transaction monitoring, and ongoing due diligence.',
      'We provide complete KYC documentation preparation services, ensuring all required documents are properly formatted, attested, and presented to meet bank standards. Our team conducts risk profile audits to identify potential compliance concerns and implement corrective measures before they impact your banking relationships.',
      'Our ongoing compliance maintenance services ensure your business continues to meet evolving bank requirements through regular documentation updates, transaction monitoring support, and proactive communication with bank compliance teams. We ensure your transactions are properly documented to satisfy bank audits and regulatory requirements.'
    ],
    image: "/services/banking_category.jpg",
    advantages: ['KYC documentation prep', 'Risk profile audit', 'Ongoing maintenance'],
    sections: [
      {
        title: 'AML Support',
        content: 'We ensure your transactions are documented to satisfy bank audits and regulatory requirements. Our team provides complete KYC documentation preparation services, ensuring all required documents are properly formatted, attested, and presented to meet bank standards.',
        image: "/services/banking_category.jpg"
      },
      {
        title: 'Risk Profile Audit',
        content: 'We conduct comprehensive risk profile audits to identify potential compliance concerns and implement corrective measures before they impact your banking relationships. Our proactive approach ensures ongoing compliance with evolving bank requirements.',
        image: "/services/banking_category.jpg"
      },
      {
        title: 'Ongoing Maintenance',
        content: 'Our ongoing compliance maintenance services include regular documentation updates, transaction monitoring support, and proactive communication with bank compliance teams. We navigate the complex AML and KYC requirements of UAE banks.',
        image: "/services/banking_category.jpg"
      }
    ]
  },

  // E. Compliance & PRO Services
  {
    slug: 'pro-services-uae',
    title: 'PRO Services UAE',
    subtitle: 'Government Liaison',
    category: 'Compliance',
    description: [
      'Expert handling of all government-related documentation and procedures through our comprehensive PRO (Public Relations Officer) services. PRO services are essential for navigating UAE government departments, immigration authorities, labor departments, and various regulatory bodies that require specialized knowledge and established relationships.',
      'Our dedicated PRO team manages visa processing, Emirates ID applications, medical examinations, labor card issuance, immigration approvals, and all government liaison activities. We handle document submissions, follow-ups, and collections, saving you valuable time and ensuring error-free filing that prevents delays and penalties.',
      'Each client is assigned a dedicated account manager who coordinates all PRO activities, provides regular updates, and ensures timely completion of government procedures. Our team maintains current knowledge of regulatory changes and procedural updates to provide efficient, compliant services.'
    ],
    image: "/services/pro_service.png",
    advantages: ['Time saving', 'Error-free filing', 'Dedicated account manager'],
    sections: [
      {
        title: 'Liaison Scope',
        content: 'Our PRO services cover visas, Emirates ID applications, medical examinations, and Labor Department approvals. We handle all government-related documentation and procedures through our comprehensive Public Relations Officer services.',
        image: "/services/pro_service.png"
      },
      {
        title: 'Dedicated Support',
        content: 'Each client is assigned a dedicated account manager who coordinates all PRO activities and provides regular updates. Our team ensures timely completion of government procedures while maintaining current knowledge of regulatory changes.',
        image: "/services/pro_service.png"
      },
      {
        title: 'Time Efficiency',
        content: 'We save you valuable time by handling document submissions, follow-ups, and collections with error-free filing that prevents delays and penalties. Our PRO team manages all interactions with UAE government departments and immigration authorities.',
        image: "/services/pro_service.png"
      }
    ]
  },
  {
    slug: 'vat-registration-uae',
    title: 'VAT Registration & Filing',
    subtitle: 'Tax Compliance',
    category: 'Compliance',
    description: [
      'Ensure your business stays compliant with Federal Tax Authority (FTA) regulations through our comprehensive VAT registration and filing services. UAE VAT compliance requires accurate record-keeping, timely filing, and proper documentation of all taxable transactions. Non-compliance can result in significant penalties and business disruptions.',
      'We manage your complete VAT compliance including initial registration, quarterly return preparation and filing, tax portal management, and refund claim processing. Our experienced tax consultants ensure accurate calculation of input and output VAT, proper documentation of exempt and zero-rated supplies, and timely submission of all required returns.',
      'Our VAT services include penalty avoidance strategies, refund optimization, and ongoing advisory to ensure your business maximizes VAT efficiency while maintaining full compliance. We provide detailed reporting, audit support, and proactive guidance on VAT implications of business transactions and structural changes.'
    ],
    image: "/services/tax_service.png",
    advantages: ['Accurate filing', 'Penalty avoidance', 'Refund management'],
    sections: [
      {
        title: 'FTA Advisory',
        content: 'We manage your tax portal and quarterly filings with the Federal Tax Authority. Our experienced tax consultants ensure accurate calculation of input and output VAT, proper documentation of exempt and zero-rated supplies, and timely submission.',
        image: "/services/tax_service.png"
      },
      {
        title: 'Compliance Management',
        content: 'We handle complete VAT compliance including initial registration, quarterly return preparation and filing, and refund claim processing. Our services include penalty avoidance strategies and refund optimization to maximize VAT efficiency.',
        image: "/services/tax_service.png"
      },
      {
        title: 'Audit Support',
        content: 'We provide detailed reporting, audit support, and proactive guidance on VAT implications of business transactions. Our VAT services ensure your business stays compliant with FTA regulations while avoiding significant penalties.',
        image: "/services/tax_service.png"
      }
    ]
  },
  {
    slug: 'corporate-tax-uae',
    title: 'Corporate Tax Advisory UAE',
    subtitle: 'Tax Optimization',
    category: 'Compliance',
    description: [
      '9% Corporate Tax is now active in the UAE. Are you ready? The introduction of corporate tax represents a significant change in the UAE business landscape, requiring careful planning, structural optimization, and comprehensive compliance procedures. Our corporate tax advisory ensures your business navigates this new tax regime efficiently.',
      'We provide structure optimization services to minimize tax liability while maintaining full compliance with UAE corporate tax law. Our advisors analyze your business structure, operations, and transactions to identify tax-efficient strategies, legitimate deductions, and optimization opportunities that reduce your effective tax rate.',
      'Our services include Pillar 2 advisory for multinational enterprises, transfer pricing documentation, tax residency planning, and comprehensive compliance support. We help you navigate the new tax landscape without overpaying, ensuring your business remains competitive while meeting all regulatory requirements.'
    ],
    image: "/services/tax_service.png",
    advantages: ['Structure optimization', 'Pillar 2 advisory', 'Documentation'],
    sections: [
      {
        title: 'Strategy',
        content: 'We help you navigate the new tax landscape without overpaying. Our corporate tax advisory ensures your business navigates the 9% corporate tax regime efficiently through careful planning, structural optimization, and comprehensive compliance procedures.',
        image: "/services/tax_service.png"
      },
      {
        title: 'Structure Optimization',
        content: 'We provide structure optimization services to minimize tax liability while maintaining full compliance with UAE corporate tax law. Our advisors analyze your business to identify tax-efficient strategies and legitimate deductions.',
        image: "/services/tax_service.png"
      },
      {
        title: 'Comprehensive Advisory',
        content: 'Our services include Pillar 2 advisory for multinational enterprises, transfer pricing documentation, and tax residency planning. We ensure your business remains competitive while meeting all regulatory requirements in the new tax landscape.',
        image: "/services/tax_service.png"
      }
    ]
  },
  {
    slug: 'accounting-bookkeeping-uae',
    title: 'Accounting & Bookkeeping',
    subtitle: 'Financial Precision',
    category: 'Compliance',
    description: [
      'Professional ledger maintenance for UAE companies using cloud-based accounting systems that provide real-time financial visibility and audit-ready reporting. Proper bookkeeping is essential for tax compliance, banking relationships, investor reporting, and strategic business decision-making.',
      'We use industry-leading platforms including Xero and QuickBooks to maintain pristine financial records with complete transparency and accessibility. Our accounting services include daily transaction recording, bank reconciliation, accounts payable and receivable management, payroll processing, and monthly financial statement preparation.',
      'Our cloud-based tracking systems provide 24/7 access to your financial data, automated reporting, and real-time insights into business performance. We deliver audit-ready reports that meet UAE accounting standards, facilitate tax compliance, and provide the financial transparency required by banks and investors.'
    ],
    image: "/services/tax_service.png",
    advantages: ['Cloud-based tracking', 'Audit-ready reports', 'Transparency'],
    sections: [
      {
        title: 'Ledger Management',
        content: 'We use Xero and QuickBooks to keep your books pristine with complete transparency and accessibility. Our cloud-based accounting systems provide real-time financial visibility and audit-ready reporting for UAE companies.',
        image: "/services/tax_service.png"
      },
      {
        title: 'Comprehensive Services',
        content: 'Our accounting services include daily transaction recording, bank reconciliation, accounts payable and receivable management, payroll processing, and monthly financial statement preparation. We maintain professional ledger maintenance using industry-leading platforms.',
        image: "/services/tax_service.png"
      },
      {
        title: 'Real-Time Access',
        content: 'Our cloud-based tracking systems provide 24/7 access to your financial data with automated reporting and real-time insights. We deliver audit-ready reports that meet UAE accounting standards and facilitate tax compliance.',
        image: "/services/tax_service.png"
      }
    ]
  },

  // F. Residency & Personal Legacy
  {
    slug: 'golden-visa-uae',
    title: 'Golden Visa UAE',
    subtitle: '10-Year Residency',
    category: 'Residency',
    description: [
      'Secure your future in the UAE with long-term residency through the prestigious Golden Visa program offering 10-year renewable residence permits. The Golden Visa provides complete independence from employer sponsorship, allowing you to live, work, and invest in the UAE with maximum flexibility and security.',
      'Golden Visa holders enjoy 100% ownership of their residency status with no sponsor requirements, the ability to sponsor family members including spouse, children, and parents, and the freedom to work for any employer or establish their own businesses. The visa is renewable every 10 years subject to meeting eligibility criteria.',
      'Eligibility extends to investors, entrepreneurs, highly skilled professionals, outstanding students, and individuals with specialized talents. We guide you through the application process, document preparation, and submission procedures to secure your Golden Visa and establish long-term residency in the UAE.'
    ],
    image: "/services/golden_visa_service.png",
    advantages: ['No sponsor needed', '100% ownership of self', 'Family sponsorship'],
    sections: [
      {
        title: 'Eligibility',
        content: 'Golden Visa eligibility extends to investors, entrepreneurs, and highly skilled talent. We guide you through the application process, document preparation, and submission procedures to secure your 10-year renewable residence permit.',
        image: "/services/golden_visa_service.png"
      },
      {
        title: 'Benefits',
        content: 'Golden Visa holders enjoy 100% ownership of their residency status with no sponsor requirements and the ability to sponsor family members. The visa provides complete independence from employer sponsorship with freedom to work or establish businesses.',
        image: "/services/golden_visa_service.png"
      },
      {
        title: 'Long-Term Security',
        content: 'The Golden Visa program offers 10-year renewable residence permits, allowing you to live, work, and invest in the UAE with maximum flexibility and security. We help you establish long-term residency in the UAE.',
        image: "/services/golden_visa_service.png"
      }
    ]
  },
  {
    slug: 'uae-wills-estate-planning',
    title: 'UAE Wills & Estate Planning',
    subtitle: 'Legacy Protection',
    category: 'Residency',
    description: [
      'Protect your assets according to your wishes, not local law defaults, through comprehensive UAE wills and estate planning services. Without a registered will, UAE inheritance laws based on Sharia principles will determine asset distribution, which may not align with your personal wishes or family circumstances.',
      'We draft and register wills for both non-Muslims and Muslims through the DIFC Wills and Probate Registry, providing legally enforceable asset distribution according to your specific instructions. DIFC Court registration ensures your will is recognized and enforced according to your wishes, protecting your family and beneficiaries.',
      'Our estate planning services include asset protection strategies, guardianship provisions for minor children, business succession planning, and comprehensive legacy protection. We ensure your assets are distributed according to your wishes while minimizing legal complications and family disputes.'
    ],
    image: "/services/residency_category.jpg",
    advantages: ['DIFC Court registration', 'Asset protection', 'Family security'],
    sections: [
      {
        title: 'Asset Distribution',
        content: 'We draft and register wills for non-Muslims and Muslims alike through the DIFC Wills and Probate Registry. Our estate planning services provide legally enforceable asset distribution according to your specific instructions.',
        image: "/services/residency_category.jpg"
      },
      {
        title: 'DIFC Registration',
        content: 'DIFC Court registration ensures your will is recognized and enforced according to your wishes, protecting your family and beneficiaries. Without a registered will, UAE inheritance laws based on Sharia principles will determine asset distribution.',
        image: "/services/residency_category.jpg"
      },
      {
        title: 'Comprehensive Planning',
        content: 'Our estate planning services include asset protection strategies, guardianship provisions for minor children, and business succession planning. We ensure your assets are distributed according to your wishes while minimizing legal complications.',
        image: "/services/residency_category.jpg"
      }
    ]
  },

  // G. Corporate Support Services
  {
    slug: 'iso-certification-uae',
    title: 'ISO Certification Services',
    subtitle: 'Quality Standards',
    category: 'Corporate Support',
    description: [
      'Gain global credibility with ISO certification demonstrating your commitment to quality standards, process excellence, and continuous improvement. ISO certification enhances your competitive positioning, facilitates international business opportunities, and demonstrates compliance with globally recognized quality management systems.',
      'We provide comprehensive ISO certification services including gap analysis, documentation preparation, process implementation, internal audits, and certification body liaison. Our experts guide you through the entire certification process, ensuring efficient implementation and successful certification.',
      'We specialize in multiple ISO standards including ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health and Safety), and various industry-specific standards. ISO certification improves process efficiency, enhances client trust, and provides global recognition for your quality commitment.'
    ],
    image: "/services/compliance_category.jpg",
    advantages: ['Global recognition', 'Process efficiency', 'Client trust'],
    sections: [
      {
        title: 'Standard Types',
        content: 'We specialize in ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health and Safety), and various industry-specific standards. ISO certification enhances your competitive positioning and facilitates international business opportunities.',
        image: "/services/compliance_category.jpg"
      },
      {
        title: 'Certification Process',
        content: 'We provide comprehensive ISO certification services including gap analysis, documentation preparation, process implementation, and internal audits. Our experts guide you through the entire certification process ensuring efficient implementation.',
        image: "/services/compliance_category.jpg"
      },
      {
        title: 'Global Credibility',
        content: 'ISO certification demonstrates your commitment to quality standards, process excellence, and continuous improvement. It improves process efficiency, enhances client trust, and provides global recognition for your quality commitment.',
        image: "/services/compliance_category.jpg"
      }
    ]
  },
  {
    slug: 'document-attestation-uae',
    title: 'Document Attestation',
    subtitle: 'MOFA & Embassy Liaison',
    category: 'Corporate Support',
    description: [
      'Get your international documents legalized for UAE use through our comprehensive document attestation services covering Ministry of Foreign Affairs (MOFA) attestation, embassy legalization, and consulate authentication. Document attestation is mandatory for using foreign documents in UAE legal, business, and government procedures.',
      'We provide worldwide document pickup services, managing the complete attestation chain from your home country through embassy attestation to final MOFA attestation in the UAE. Our verified processes ensure authentic results with fast turnaround times and complete tracking.',
      'Our attestation services cover educational certificates, marriage certificates, birth certificates, corporate documents, power of attorney, and commercial documents. We manage the complex multi-step attestation process including notarization, state authentication, embassy legalization, and MOFA attestation.'
    ],
    image: "/services/pro_service.png",
    advantages: ['Worldwide pickup', 'Verified results', 'Fast turnaround'],
    sections: [
      {
        title: 'Service Scope',
        content: 'Our attestation services cover educational certificates, marriage certificates, birth certificates, corporate documents, power of attorney, and commercial documents. Document attestation is mandatory for using foreign documents in UAE legal and government procedures.',
        image: "/services/pro_service.png"
      },
      {
        title: 'Complete Process',
        content: 'We provide worldwide document pickup services, managing the complete attestation chain from your home country through embassy attestation to final MOFA attestation. We manage the complex multi-step process including notarization and state authentication.',
        image: "/services/pro_service.png"
      },
      {
        title: 'Fast Turnaround',
        content: 'Our verified processes ensure authentic results with fast turnaround times and complete tracking. We get your international documents legalized for UAE use through comprehensive MOFA and embassy liaison services.',
        image: "/services/pro_service.png"
      }
    ]
  },
  {
    slug: 'legal-translation-uae',
    title: 'Legal Translation Services',
    subtitle: 'Certified Linguists',
    category: 'Corporate Support',
    description: [
      'Precise translation for Ministry of Justice (MOJ) and government submissions through our certified legal translation services. Legal translations require absolute accuracy, proper terminology, and official certification to be accepted by UAE courts, government departments, and regulatory authorities.',
      'Our MOJ-certified translators provide accurate translations in over 75 languages with complete confidentiality and professional handling. We specialize in legal terminology, ensuring translations maintain the precise meaning and legal implications of original documents.',
      'We translate court documents, Memorandums of Association, legal contracts, corporate agreements, government submissions, and all legal documentation requiring certified translation. Our translations are officially stamped and certified for acceptance by UAE authorities.'
    ],
    image: "/services/pro_service.png",
    advantages: ['MOJ certified', '75+ languages', 'Confidentiality'],
    sections: [
      {
        title: 'Document Types',
        content: 'We translate court documents, Memorandums of Association, and legal contracts for Ministry of Justice and government submissions. Legal translations require absolute accuracy, proper terminology, and official certification to be accepted by UAE authorities.',
        image: "/services/pro_service.png"
      },
      {
        title: 'Certified Translators',
        content: 'Our MOJ-certified translators provide accurate translations in over 75 languages with complete confidentiality and professional handling. We specialize in legal terminology, ensuring translations maintain the precise meaning and legal implications.',
        image: "/services/pro_service.png"
      },
      {
        title: 'Official Certification',
        content: 'We translate corporate agreements, government submissions, and all legal documentation requiring certified translation. Our translations are officially stamped and certified for acceptance by UAE courts, government departments, and regulatory authorities.',
        image: "/services/pro_service.png"
      }
    ]
  }
];
