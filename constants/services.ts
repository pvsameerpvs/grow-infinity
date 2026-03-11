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
  badge?: string;
  navTitle?: string;
}

export const SERVICES: ServiceData[] = [
  // A. Mainland Business Setup
  {
    slug: 'mainland-company-formation',
    title: 'Mainland Company Formation',
    subtitle: 'Onshore Business Solutions',
    category: 'Mainland',
    description: [
      'Setting up a mainland company in the UAE gives you full access to the local market and government opportunities across all seven emirates. With over 10 years of experience, our team of lawyers, accountants, and business consultants guides businesses of all sizes through every step—making the process smooth, clear, and stress-free so you can focus on growth.'
    ],
    image: "/services/mainland_setup_service.png",
    badge: 'Most Popular',
    advantages: [
      '100% Foreign Ownership in most sectors',
      'No geographical limits for trade',
      'Access to government tenders',
      'Easy employee visa processing'
    ],
    sections: [
      {
        title: 'Why Choose UAE Mainland?',
        content: 'Mainland companies, registered with the Department of Economy and Tourism (DET) and governed by UAE federal commercial law, let you trade freely across the UAE and internationally. They\'re perfect for businesses aiming for full market access and direct opportunities with government contracts.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Our Entry Strategy',
        content: 'We take care of everything—from your first consultation and business planning to getting your approvals and setting up your business accounts. Our team helps you choose the right activities to fit your model while maximizing flexibility and market opportunities.',
        image: "/services/mainland_category.jpg",
      },
      {
        title: 'Banking-First Approach',
        content: 'Our banking-first approach sets up your mainland license to meet UAE banks\' requirements from day one. We prepare detailed business profiles, financial projections, and compliance documents to boost your corporate account approval chances and speed up the account opening process.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Complete Setup Process',
        content: 'Our streamlined company setup usually takes 7–10 working days from document submission to getting your license. We guide you through every step—from choosing your business activities and name to preparing documents, securing office space, and finalizing your license.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'llc-company-formation-uae',
    title: 'LLC Company Formation',
    subtitle: 'Limited Liability Protector',
    category: 'Mainland',
    description: [
      'The Limited Liability Company (LLC) is the most popular and flexible business structure on the UAE mainland. It protects personal assets by limiting shareholder liability to their capital contribution, while giving businesses the freedom to operate and grow with confidence.'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
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
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Limited Liability Protection',
        content: 'Shareholders enjoy complete protection of personal assets from business debts and legal obligations. Your liability is strictly limited to your capital contribution in the company, ensuring that personal wealth, properties, and investments remain secure even if the business faces financial difficulties or legal challenges.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'professional-license-uae',
    title: 'Professional License Setup',
    subtitle: 'Expert-led Business Units',
    category: 'Mainland',
    navTitle: 'Professional License',
    description: [
      'Professional licenses in the UAE are for experts and service providers, like consultants, engineers, accountants, and medical professionals, who offer knowledge-based services rather than goods. We guide you through the process—from preparing your business plan to submitting your license application. Our team handles all the paperwork, making it simple and stress-free to start your professional business in the UAE.'
    ],
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000',
    advantages: ['100% ownership', 'Professional recognition', 'Simplified setup'],
    sections: [
      {
        title: 'Service Categories',
        content: 'Professional licenses are perfect for specialists in fields like legal services, accounting, engineering, architecture, medical services, education, and other knowledge-based industries. They\'re designed for experts who provide professional services, rather than trading in goods or products, making it easier to focus on what you do best.',
        image: "/services/llc_service.png",
      },
      {
        title: 'Qualification Requirements',
        content: 'To get a professional license, you need the right qualifications and certifications. We make this easy by handling document verification, attesting your degrees, and preparing all the necessary paperwork so you\'re ready to start.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Setup Advantages',
        content: 'Professional licenses offer a simpler setup, lower capital requirements than commercial licenses, and the flexibility to operate from smaller office spaces. They give you full control over your business operations, client relationships, and service delivery—while maintaining your professional credibility.',
        image: "/services/llc_service.png",
      }
    ]
  },
  {
    slug: 'branch-office-uae',
    title: 'Branch Office Setup',
    subtitle: 'Global Expansion',
    category: 'Mainland',
    navTitle: 'Branch Office',
    description: [
      'A branch office lets established international companies expand into the UAE while staying fully connected to their parent company. It\'s perfect for multinationals that want a physical presence in the UAE without setting up a separate legal entity, keeping control and branding unified.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Full parent company control', 'Unified branding', 'Strategic market entry'],
    sections: [
      {
        title: 'Legal Requirements',
        content: 'We handle all the cross-border documents needed to set up your branch office. From parent company papers and board resolutions to financial statements and company agreements, we make sure everything is properly verified—making the process smooth and hassle-free.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Parent Company Control',
        content: 'Branch offices function as a direct extension of the parent company, carrying out the same business activities and keeping the same corporate identity. All operations, contracts, and liabilities remain with the parent company, allowing seamless integration with global operations and simplified financial reporting.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Strategic Benefits',
        content: 'The branch office structure is particularly beneficial for companies with established international reputations seeking to leverage their brand recognition in the UAE market. It provides a cost-effective entry strategy while maintaining complete parent company control over operations, staffing, and strategic direction.',
        image: "/services/branch_office_service.png",
      }
    ]
  },
  {
    slug: 'representative-office-uae',
    title: 'Representative Office Setup',
    subtitle: 'Market Presence',
    category: 'Mainland',
    navTitle: 'Representative Office',
    description: [
      'A representative office gives international companies a strategic foothold in the UAE to focus on marketing, market research, and business development—without engaging in direct sales. It\'s ideal for businesses looking to explore the UAE market before making a full-scale investment.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Low overhead', 'Strategic networking', 'Direct market research'],
    sections: [
      {
        title: 'Operational Limits',
        content: 'Representative offices are focused on marketing and administrative support for the parent company. They cannot engage in revenue-generating activities, sign commercial contracts, or conduct direct sales. The office serves as a liaison between the parent company and potential UAE clients or partners.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Permitted Activities',
        content: 'Representative offices can conduct market research, identify business opportunities, promote the parent company brand, facilitate connections with potential clients, and gather market intelligence. These activities help companies explore the UAE market before committing to full-scale commercial operations.',
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Cost-Effective Presence',
        content: 'This low-overhead structure allows companies to establish market presence, build relationships, and gather intelligence about the UAE business environment with minimal investment and regulatory requirements. It serves as an excellent stepping stone for companies planning eventual full commercial operations.',
            image: "/services/branch_office_service.png",
      }
    ]
  },
  {
    slug: 'civil-company-formation',
    title: 'Civil Company Formation',
    subtitle: 'Professional Partnerships',
    category: 'Mainland',
    navTitle: 'Civil Company',
    description: [
      'Civil companies are tailored for professionals in regulated fields like medicine, dentistry, law, engineering, and accounting. They allow licensed experts to offer their specialized services while ensuring compliance with professional standards and regulations.'
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Full ownership for professionals', 'Flexible partnership models', 'Direct professional liability'],
    sections: [
      {
        title: 'Licensing Process',
        content: 'We help you navigate the professional accreditation process for civil companies. From verifying your qualifications and obtaining licenses from relevant professional bodies to degree attestation and meeting industry-specific regulations, we make sure you\'re fully compliant to practice in the UAE.',
        image: "/services/llc_service.png"
      },
      {
        title: 'Professional Partnerships',
        content: 'Civil companies allow licensed professionals form group practices or partnerships with other qualified experts. This setup allows you to share resources, collaborate on expertise, and build professional credibility, while still keeping individual accountability and staying fully compliant with industry regulations.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Regulatory Compliance',
        content: 'Civil companies operate under professional regulations and require all partners to have the necessary qualifications and licenses. This structure ensures that services are provided by qualified experts, while also offering a clear legal framework for partnerships, profit sharing, and managing liabilities.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },

  // B. Free Zone Company Formation
  {
    slug: 'free-zone-company-setup',
    title: 'Free Zone Business Setup',
    subtitle: 'Tax-Efficient Structures',
    category: 'Free Zone',
    navTitle: 'Free Zone Setup (General)',
    description: [
      'The UAE has over 40 specialized Free Zones, each designed to support specific industries. These zones offer 100% foreign ownership, full tax exemptions, and simplified setup processes making them an attractive choice for international businesses looking to invest and grow in the UAE.'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
    badge: '0% Tax',
    advantages: ['0% Corporate & Income Tax', '100% Capital Repatriation', 'Simplified Customs'],
    sections: [
      {
        title: 'Strategic Free Zone Selection',
        content: 'We help you pick the right free zone based on your business activity, budget, and operational needs. Our team reviews all 40+ specialized free zones to recommend the one that best fits your goals and delivers the most value for your investment.',
        image: "/services/freezone_category.jpg",
      },
      {
        title: 'Tax Benefits',
        content: 'Free zone companies enjoy zero corporate and income taxes, full repatriation of profits, no currency restrictions, and exemptions from import and export duties. These benefits help reduce costs and boost profitability for international businesses operating in the UAE.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Setup Process',
        content: 'Our streamlined free zone setup makes starting your business simple. From choosing your business activity and reserving a company name to securing approvals, obtaining your license, arranging office space, and processing visas, we handle all the government paperwork so you can focus on growing your business.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'ifza-company-formation',
    title: 'IFZA Company Formation',
    subtitle: 'International Free Zone Authority',
    category: 'Free Zone',
    navTitle: 'IFZA Dubai',
    description: [
      'IFZA Dubai offers a prime location near Dubai International Airport and Downtown, providing a flexible, cost-effective, and fast-track setup for startups, SMEs, and service businesses. Dubai is a global business hub with a strong, diversified economy, world-class connectivity, and a highly skilled expatriate population. Ranked top in the Middle East for business ease and innovation, the city—together with IFZA\'s innovation-focused ecosystem—makes it an ideal destination to establish and grow your business in the UAE.'
    ],
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000',
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
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Fast-Track Processing',
        content: 'IFZA enables rapid company formation with minimal bureaucracy and fast-track approval procedures. The free zone is particularly popular among consultants, IT companies, marketing agencies, and professional service providers who value affordability and efficiency.',
        image: "/services/freezone_category.jpg",
      }
    ]
  },
  {
    slug: 'dmcc-company-formation',
    title: 'DMCC Company Formation',
    subtitle: 'Global Commodities Hub',
    category: 'Free Zone',
    navTitle: 'DMCC Dubai',
    description: [
      'DMCC, located in Jumeirah Lakes Towers, is the \'Global Free Zone of the Year\' and a leading hub for commodities, diamonds, and precious metals. With iconic towers like Almas Tower, free zone benefits, premium offices, and a vibrant business community of 21,000+ companies, DMCC offers unmatched infrastructure and networking opportunities. We specialize in DMCC business setup and licensing, guiding you every step of the way.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Global networking', 'Prime location', 'Premium infrastructure'],
    sections: [
      {
        title: 'Trading Hub',
        content: 'DMCC is ideal for gold, diamond, and energy trading businesses. The free zone is recognized as the Global Free Zone of the Year for seven consecutive years, demonstrating its commitment to excellence and business-friendly environment.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Premium Infrastructure',
        content: 'DMCC provides state-of-the-art office towers, luxury amenities, and comprehensive business support services in the prestigious Jumeirah Lakes Towers district. The free zone offers unparalleled networking opportunities and access to a thriving business community of over 21,000 companies.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
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
      'Meydan Free Zone is a premier business hub in the heart of Dubai, offering top-notch facilities and a modern, digital-first approach to setting up your company. Strategically located near Dubai International Airport and key business districts, it provides easy access and excellent connectivity for your business.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Prestigious address', 'Digital-first setup', 'Excellent amenities'],
    sections: [
      {
        title: 'E-commerce Friendly',
        content: 'Meydan Free Zone is the top choice for digital nomads and e-commerce entrepreneurs seeking a premium business environment. The free zone offers fully digital license processing, online business management tools, and streamlined procedures that enable rapid company setup.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Digital-First Approach',
        content: 'Meydan specializes in serving e-commerce businesses, digital startups, technology companies, and modern entrepreneurs who value innovation and flexibility. The free zone provides cutting-edge infrastructure with minimal physical presence requirements and maximum operational flexibility.',
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000'
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
    navTitle: 'RAKEZ (Ras Al Khaimah)',
    description: [
      'Ras Al Khaimah Economic Zone (RAKEZ) is a leading free zone in the northern emirate, offering cost-effective solutions, modern facilities, and a strategic location that connects businesses to global markets. Covering over 33 million square meters and hosting more than 13,000 companies across 50+ industries, RAKEZ provides world-class infrastructure and customized packages for investors. Established to consolidate RAKIA and RAK FTZ, RAKEZ supports businesses with flexible setups, competitive costs, and a business-friendly environment—making it an ideal choice for companies looking to grow efficiently in the UAE.'
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
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
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Strategic Access',
        content: 'With proximity to major seaports, airports, and the UAE-Oman border, RAKEZ is ideal for manufacturing companies and logistics operations. The free zone offers excellent value for money while providing comprehensive support services and efficient business setup procedures.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'sharjah-publishing-city',
    title: 'SPC Free Zone Setup',
    subtitle: 'Sharjah Publishing City',
    category: 'Free Zone',
    navTitle: 'SPC Sharjah',
    description: [
      'Sharjah Publishing City Free Zone, located just minutes from Sharjah and Dubai airports, is the world\'s first free zone dedicated to the publishing, printing, and packaging industries. Established in 2017, it offers state-of-the-art offices, co-working spaces, retail outlets, and storage facilities, allowing media and creative businesses to write, design, print, and distribute from a single hub. With fast license issuance—sometimes in as little as 2 hours—SPC provides the ideal environment for your publishing business to thrive.'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Fastest license issuance', 'Dual license options', 'Multisite business activities'],
    sections: [
      {
        title: 'Speed of Execution',
        content: 'SPC provides the fastest license issuance in the UAE, with companies able to obtain their business license in as little as 2 hours. This rapid processing makes SPC ideal for businesses requiring immediate operational capability.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Dual License Options',
        content: 'SPC offers unique dual license options allowing businesses to operate both within the free zone and in the UAE mainland market, providing maximum flexibility and market access. The free zone supports multisite business activities across different locations.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Industry Specialization',
        content: 'As the world\'s first free zone dedicated to publishing, printing, and packaging industries, SPC offers specialized infrastructure and services tailored to media and creative businesses. The free zone is ideal for publishing houses, printing companies, and packaging businesses.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'shams-free-zone',
    title: 'SHAMS Free Zone Setup',
    subtitle: 'Sharjah Media City',
    category: 'Free Zone',
    navTitle: 'SHAMS Sharjah',
    description: [
      'Sharjah Media City (SHAMS) is a creative hub for media professionals, digital startups, and content creators. Launched in 2017, it offers affordable setups, flexible workspaces, fast visa processing, and specialized facilities for creative businesses. Located in Sharjah, it provides a vibrant ecosystem for innovation, collaboration, and growth, with legal independence over licensing and media regulations—making it the perfect place to start and scale your creative venture.'
    ],
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Affordable flexi-desks', 'No deposit required', 'Simplified visa process'],
    sections: [
      {
        title: 'Creative Economy',
        content: 'SHAMS is tailored for designers, marketers, and influencers seeking cost-effective entry into the UAE market. The free zone caters to media professionals, digital startups, content creators, and creative industries with affordable pricing and flexible solutions.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Affordable Setup',
        content: 'SHAMS offers the most affordable free zone setup in the UAE with flexible flexi-desk options and no deposit requirements. The free zone provides modern co-working spaces, creative studios, and collaborative environments that foster innovation and networking.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Simplified Procedures',
        content: 'With simplified visa processing procedures and minimal capital requirements, SHAMS is perfect for freelancers and small creative businesses. The free zone enables legal presence in the UAE without significant capital investment while benefiting from free zone advantages.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'difc-company-formation',
    title: 'DIFC Company Formation',
    subtitle: 'Financial District',
    category: 'Free Zone',
    navTitle: 'DIFC (Finance)',
    description: [
      'Dubai International Financial Centre (DIFC) is the top financial hub for the Middle East, Africa, and South Asia, offering a world-class regulatory framework based on English common law. It\'s an ideal jurisdiction for financial services, fintech companies, and professional service firms. In some cases, a manager must be appointed and hold a resident visa sponsored by the free zone. To keep the visa valid, the manager needs to visit the UAE at least once every six months.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Common Law legal framework', 'Elite networking', 'Global financial standard'],
    sections: [
      {
        title: 'Financial Advisory',
        content: 'We assist with DFSA licensing and regulatory compliance for financial services firms. DIFC operates under its own independent regulatory authority with regulations aligned with international best practices and standards.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Common Law Framework',
        content: 'DIFC provides a world-class regulatory framework based on English common law with access to an independent judicial system. The financial center offers sophisticated legal framework and comprehensive regulatory oversight that meets global compliance requirements.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Elite Positioning',
        content: 'DIFC is ideal for banks, insurance companies, asset management firms, fintech startups, and professional services seeking to operate in a globally recognized financial center. The jurisdiction provides elite networking opportunities and access to international markets.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'dafza-company-formation',
    title: 'DAFZA Company Formation',
    subtitle: 'Dubai Airport Free Zone',
    category: 'Free Zone',
    navTitle: 'DAFZA (Airport)',
    description: [
      'Dubai Airport Free Zone (DAFZA) is perfectly located next to Dubai International Airport, offering unmatched logistics advantages and direct air cargo access. It\'s ideal for aviation businesses, freight forwarders, electronics trading, and any company that needs fast and reliable international shipping.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Superior logistics', 'Tax exemptions', 'Direct air-cargo link'],
    sections: [
      {
        title: 'Logistics Hub',
        content: 'DAFZA is perfect for aviation, freight forwarding, and electronics trading businesses. The free zone offers strategic location adjacent to Dubai International Airport with unparalleled logistics advantages and direct air-cargo connectivity.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Superior Infrastructure',
        content: 'DAFZA provides superior logistics infrastructure with direct access to airport facilities, customs clearance areas, and cargo handling services. The free zone offers tax exemptions and streamlined import-export procedures that reduce operational costs.',
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Speed-to-Market',
        content: 'With proximity to one of the world\'s busiest airports, DAFZA is ideal for businesses where speed-to-market and air connectivity are critical success factors. The free zone specializes in aviation services, pharmaceutical distribution, and rapid international shipping.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'jafza-company-formation',
    title: 'JAFZA Company Formation',
    subtitle: 'Jebel Ali Free Zone',
    category: 'Free Zone',
    navTitle: 'JAFZA (Jebel Ali)',
    description: [
      'Jebel Ali Free Zone (JAFZA) is the world\'s largest industrial free zone, offering massive infrastructure, advanced logistics, and seamless sea-to-air connectivity. Home to over 7,000 companies, it provides world-class facilities for manufacturing, warehousing, and distribution. JAFZA also supports offshore company setup, with approved service providers to help with office registration, licensing, and business incorporation. As experts in JAFZA company formation, we can guide you through every step of setting up and running your business in Dubai.'
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Sea-to-air connectivity', 'Massive scale infrastructure', 'Global supply chain'],
    sections: [
      {
        title: 'Distribution Center',
        content: 'JAFZA is best for large-scale global manufacturing and distribution operations. As the largest industrial free zone in the world, JAFZA is home to over 7,000 companies and provides world-class manufacturing, warehousing, and distribution facilities.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Sea-to-Air Connectivity',
        content: 'JAFZA offers direct access to Jebel Ali Port, one of the largest and busiest ports globally, combined with proximity to Al Maktoum International Airport. This dual connectivity enables seamless global supply chain operations and cost-effective international trade.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Massive Infrastructure',
        content: 'The free zone provides comprehensive infrastructure including warehouses, factories, office spaces, and specialized facilities for diverse industries. JAFZA is ideal for businesses requiring extensive industrial facilities and global distribution capabilities.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'dubai-south-free-zone',
    title: 'Dubai South Free Zone',
    subtitle: 'The Home of Expo 2020',
    category: 'Free Zone',
    description: [
      'Dubai South Free Zone, formerly Dubai World Central, is a hub for innovation and sustainability, centered around Al Maktoum International Airport and the Expo 2020 site. The free zone focuses on green business practices, smart city technologies, and sustainable development, creating a forward-thinking environment for modern businesses.'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Proximity to DWC Airport', 'Urban living integration', 'Supply chain mastery'],
    sections: [
      {
        title: 'Aviation Focus',
        content: 'Dubai South is the epicenter of Dubai aerospace and logistics projects. The free zone is built around Al Maktoum International Airport and the Expo 2020 site, emphasizing green business practices and smart city technologies.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Future-Focused Development',
        content: 'Dubai South offers proximity to Al Maktoum International Airport, which is set to become the world\'s largest airport. The free zone integrates urban living with business operations, offering residential communities and comprehensive amenities.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Sustainability Hub',
        content: 'Dubai South is ideal for aerospace companies, logistics operations, e-commerce businesses, and companies focused on innovation and sustainability. The free zone provides modern infrastructure and strategic positioning for long-term growth.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'ajman-free-zone',
    title: 'Ajman Free Zone Setup',
    subtitle: 'Cost-Effective Growth',
    category: 'Free Zone',
    description: [
      'Ajman Free Zone is a cost-effective gateway for SMEs looking to set up in the UAE. It offers some of the lowest setup costs among UAE free zones while still providing quality facilities and strong business support, established in 2018, is a growing hub for media and creative businesses. Designed to attract global talent and media companies, it offers an affordable and supportive environment where creative ventures can start, grow, and thrive.'
    ],
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Cheapest setup costs', 'Strategic port access', 'Quick visa services'],
    sections: [
      {
        title: 'Budget Friendly',
        content: 'Ajman Free Zone is highly recommended for startups and young entrepreneurs seeking cost-effective business setup. The free zone offers the cheapest setup costs among UAE free zones while maintaining quality facilities and comprehensive business support services.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Quick Processing',
        content: 'Ajman Free Zone provides strategic access to Ajman Port and excellent connectivity to Dubai via modern highway networks. The free zone offers quick visa processing, flexible office solutions, and simplified procedures for rapid business setup.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Value Proposition',
        content: 'The free zone provides excellent value for money while offering all standard free zone benefits including tax exemptions and full ownership. Ajman is ideal for budget-conscious businesses seeking UAE presence without significant capital investment.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'fujairah-free-zone',
    title: 'Fujairah Free Zone Setup',
    subtitle: 'Eastern Gateway',
    category: 'Free Zone',
    description: [
      'Fujairah Free Zone offers direct access to the Indian Ocean, helping businesses avoid the busy Strait of Hormuz and ensuring smoother, more reliable shipping and it is a budget-friendly media hub ideal for startups, freelancers, and creative businesses. It offers flexible licenses, easy setup, visa support, and virtual office options making it a smart, low-cost choice for businesses looking to grow.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Direct access to Indian Ocean', 'Lower operating costs', 'Multi-access connectivity'],
    sections: [
      {
        title: 'Energy & Trade',
        content: 'Fujairah Free Zone is ideal for maritime services and energy-related logistics. The free zone specializes in oil and gas services, maritime operations, and energy-related businesses with direct connectivity to the Indian Ocean.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Strategic Location',
        content: 'Located on the UAE\'s eastern coast, Fujairah Free Zone offers strategic port access bypassing the congested Strait of Hormuz. This unique geographic advantage provides businesses with alternative shipping routes and enhanced supply chain resilience.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Cost Efficiency',
        content: 'Fujairah Free Zone offers lower operating costs compared to western UAE free zones while providing modern facilities and efficient procedures. The free zone is ideal for shipping companies and oil and gas service providers.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
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
      'Set up a UAE offshore company to protect your assets and maintain privacy while running international business operations, holding investments, or managing wealth. Offshore companies in the UAE offer full tax exemption, strong confidentiality, and flexible structures—perfect for non-resident business owners and global investors.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['100% Tax Free', 'High confidentiality', 'Multi-currency accounts'],
    sections: [
      {
        title: 'Non-Resident Strategy',
        content: 'UAE offshore companies are ideal for holding companies and international investment vehicles. These entities are specifically designed for conducting business outside the UAE mainland, holding international assets, and managing intellectual property rights.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Tax Advantages',
        content: 'Offshore companies benefit from 100% tax exemption, enhanced confidentiality, and flexible corporate structures ideal for non-resident business owners. UAE offshore jurisdictions provide robust legal frameworks and strong privacy protections.',
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Banking Access',
        content: 'Offshore entities provide access to multi-currency banking facilities with leading UAE and international banks. We assist with banking introductions and account opening procedures to ensure smooth financial operations for your offshore company.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'rak-offshore-company',
    title: 'RAK Offshore Company',
    subtitle: 'RAK International Corporate Centre',
    category: 'Offshore',
    description: [
      'Setting up a RAK Offshore company through RAK ICC is a popular choice for international business owners. It provides strong asset protection, privacy, and operational flexibility. We guide you through registration, office setup, and ongoing requirements, making the process smooth and hassle-free.'
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Stable legal framework', 'Fast incorporation', 'Strong privacy laws'],
    sections: [
      {
        title: 'Asset Holding',
        content: 'RAK offshore companies are preferred for real estate and intellectual property holding. The jurisdiction provides a stable legal framework based on international best practices, offering comprehensive asset protection and operational flexibility.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Fast Incorporation',
        content: 'RAK offshore companies benefit from fast incorporation procedures, typically completed within 2-3 working days with minimal documentation requirements. The jurisdiction offers strong privacy laws protecting shareholder information while maintaining compliance with international transparency standards.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Comprehensive Services',
        content: 'RAK ICC provides access to UAE banking facilities, multi-currency accounts, and comprehensive corporate services. The jurisdiction is ideal for international trading operations, asset protection vehicles, and businesses seeking tax-efficient structures for global operations.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'jafza-offshore-company',
    title: 'JAFZA Offshore Company',
    subtitle: 'Dubai Offshore Advantage',
    category: 'Offshore',
    description: [
      'JAFZA Offshore Company gives you a Dubai address with full offshore benefits. It\'s the only offshore option that can directly own property in Dubai freehold areas, making it perfect for real estate investment and property holding.'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Dubai prestige', 'Bankable jurisdiction', 'Direct real estate ownership'],
    sections: [
      {
        title: 'Property Holding',
        content: 'JAFZA offshore companies are the only offshore entities permitted to directly own property in Dubai freehold areas. This unique advantage makes JAFZA offshore ideal for real estate investment and property portfolio management.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Dubai Prestige',
        content: 'JAFZA offshore provides premium offshore status within Dubai, combining the prestige of a Dubai address with comprehensive offshore benefits. The jurisdiction operates under a well-established legal framework recognized by international banks and financial institutions.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Banking Accessibility',
        content: 'JAFZA offshore companies provide access to Dubai\'s sophisticated banking sector, facilitating corporate account opening with leading UAE and international banks. This structure combines asset protection with operational flexibility and banking accessibility.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'ajman-offshore-company',
    title: 'Ajman Offshore Company',
    subtitle: 'Economic Asset Holding',
    category: 'Offshore',
    description: [
      'Ajman Offshore Company setup is quick, simple, and one of the most affordable in the UAE. It offers full tax exemption, strong privacy, and easy incorporation—perfect for small international consultants and service-based businesses.'
    ],
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Most affordable', 'Paperless process', 'Quick bank intro'],
    sections: [
      {
        title: 'International Trade',
        content: 'Ajman offshore companies are best for small-scale international consultants and service providers. The jurisdiction offers simplified and speedy offshore setup procedures with the most affordable costs among UAE offshore jurisdictions.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Paperless Process',
        content: 'Ajman offshore provides a paperless incorporation process with minimal documentation requirements and fast-track approval procedures. Companies can be established within 2-3 working days with comprehensive support for banking introductions.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Cost-Effective Structure',
        content: 'Ajman offshore entities provide excellent value for money while offering all standard offshore benefits including tax exemption and privacy. The jurisdiction is ideal for businesses seeking cost-effective offshore structures for international operations.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },

  // D. Banking & Financial Advisory
  {
    slug: 'corporate-bank-account-uae',
    title: 'Corporate Bank Account UAE',
    subtitle: 'Banking-First Advisory',
    category: 'Banking',
    navTitle: 'Corporate Bank Account',
    description: [
      'In the UAE, the real challenge is not getting a business license, but opening a corporate bank account. UAE banks have stringent compliance requirements, risk assessment procedures, and documentation standards that many new businesses struggle to meet. Our banking-first advisory ensures your company is structured for banking approval from day one.',
      'We provide comprehensive pre-approval advisory services, analyzing your business model, shareholding structure, and operational plans to identify potential banking concerns before license issuance. Our team prepares detailed business profiles, financial projections, and compliance documentation that meet bank requirements and significantly improve approval rates.',
      'Our direct banker introductions leverage established relationships with leading UAE banks including Emirates NBD, Mashreq, ADCB, FAB, and international banks operating in the UAE. We facilitate meetings, guide you through the application process, and provide ongoing compliance assistance to ensure smooth account opening and operational banking.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    badge: 'Fast Track',
    advantages: ['Pre-approval advisory', 'Direct banker intro', 'Compliance assistance'],
    sections: [
      {
        title: 'Our Methodology',
        content: 'We build your business profile to match bank risk appetites and compliance requirements. Our banking-first advisory ensures your company is structured for banking approval from day one with comprehensive business profiles and financial projections.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Direct Banker Introductions',
        content: 'Our direct banker introductions leverage established relationships with leading UAE banks including Emirates NBD, Mashreq, ADCB, and FAB. We facilitate meetings, guide you through the application process, and provide ongoing compliance assistance.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Pre-Approval Advisory',
        content: 'We provide comprehensive pre-approval advisory services, analyzing your business model and shareholding structure to identify potential banking concerns before license issuance. This approach significantly improves corporate bank account approval rates.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'multi-currency-bank-account',
    title: 'Multi-Currency Bank Accounts',
    subtitle: 'Global Treasury',
    category: 'Banking',
    navTitle: 'Multi-Currency Accounts',
    description: [
      'Seamlessly trade in multiple currencies including AED, USD, EUR, and GBP with multi-currency bank accounts designed for international businesses. Multi-currency accounts eliminate the need for multiple banking relationships, reduce foreign exchange fees, and streamline international payment processing for businesses engaged in global trade.',
      'Our multi-currency banking solutions provide direct SWIFT and IBAN capabilities for efficient international transfers, competitive foreign exchange rates, and priority banking services. These accounts enable businesses to receive payments in various currencies, hold balances in multiple denominations, and execute currency conversions at optimal rates.',
      'We assist with trade finance configurations including Letter of Credit (LC) and Documentary Collection arrangements for international traders. Our banking experts help you structure payment terms, manage currency risks, and optimize cash flow through sophisticated multi-currency treasury management solutions.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Low FX fees', 'Direct SWIFT/IBAN', 'Priority service'],
    sections: [
      {
        title: 'Trade Finance',
        content: 'We assist with Letter of Credit (LC) and Documentary Collection configurations for international traders. Our banking experts help you structure payment terms, manage currency risks, and optimize cash flow through sophisticated multi-currency treasury management.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Currency Management',
        content: 'Multi-currency accounts eliminate the need for multiple banking relationships and reduce foreign exchange fees. These accounts enable businesses to receive payments in various currencies, hold balances in multiple denominations, and execute conversions at optimal rates.',
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Global Banking',
        content: 'Our multi-currency solutions provide direct SWIFT and IBAN capabilities for efficient international transfers with competitive foreign exchange rates. These accounts streamline international payment processing for businesses engaged in global trade.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'banking-compliance-advisory',
    title: 'Banking Compliance Advisory',
    subtitle: 'Securing Your Flow',
    category: 'Banking',
    navTitle: 'Banking Compliance',
    description: [
      'Navigate the complex Anti-Money Laundering (AML) and Know Your Customer (KYC) requirements of UAE banks with our comprehensive banking compliance advisory services. UAE banks maintain stringent compliance standards aligned with international regulations, requiring detailed documentation, transaction monitoring, and ongoing due diligence.',
      'We provide complete KYC documentation preparation services, ensuring all required documents are properly formatted, attested, and presented to meet bank standards. Our team conducts risk profile audits to identify potential compliance concerns and implement corrective measures before they impact your banking relationships.',
      'Our ongoing compliance maintenance services ensure your business continues to meet evolving bank requirements through regular documentation updates, transaction monitoring support, and proactive communication with bank compliance teams. We ensure your transactions are properly documented to satisfy bank audits and regulatory requirements.'
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['KYC documentation prep', 'Risk profile audit', 'Ongoing maintenance'],
    sections: [
      {
        title: 'AML Support',
        content: 'We ensure your transactions are documented to satisfy bank audits and regulatory requirements. Our team provides complete KYC documentation preparation services, ensuring all required documents are properly formatted, attested, and presented to meet bank standards.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Risk Profile Audit',
        content: 'We conduct comprehensive risk profile audits to identify potential compliance concerns and implement corrective measures before they impact your banking relationships. Our proactive approach ensures ongoing compliance with evolving bank requirements.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Ongoing Maintenance',
        content: 'Our ongoing compliance maintenance services include regular documentation updates, transaction monitoring support, and proactive communication with bank compliance teams. We navigate the complex AML and KYC requirements of UAE banks.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },

  // E. Compliance & PRO Services
  {
    slug: 'pro-services-uae',
    title: 'PRO Services UAE',
    subtitle: 'Government Liaison',
    category: 'Compliance',
    navTitle: 'PRO Services',
    description: [
      'Expert handling of all government-related documentation and procedures through our comprehensive PRO (Public Relations Officer) services. PRO services are essential for navigating UAE government departments, immigration authorities, labor departments, and various regulatory bodies that require specialized knowledge and established relationships.',
      'Our dedicated PRO team manages visa processing, Emirates ID applications, medical examinations, labor card issuance, immigration approvals, and all government liaison activities. We handle document submissions, follow-ups, and collections, saving you valuable time and ensuring error-free filing that prevents delays and penalties.',
      'Each client is assigned a dedicated account manager who coordinates all PRO activities, provides regular updates, and ensures timely completion of government procedures. Our team maintains current knowledge of regulatory changes and procedural updates to provide efficient, compliant services.'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
    badge: 'Full Support',
    advantages: ['Time saving', 'Error-free filing', 'Dedicated account manager'],
    sections: [
      {
        title: 'Liaison Scope',
        content: 'Our PRO services cover visas, Emirates ID applications, medical examinations, and Labor Department approvals. We handle all government-related documentation and procedures through our comprehensive Public Relations Officer services.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Dedicated Support',
        content: 'Each client is assigned a dedicated account manager who coordinates all PRO activities and provides regular updates. Our team ensures timely completion of government procedures while maintaining current knowledge of regulatory changes.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Time Efficiency',
        content: 'We save you valuable time by handling document submissions, follow-ups, and collections with error-free filing that prevents delays and penalties. Our PRO team manages all interactions with UAE government departments and immigration authorities.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'vat-registration-uae',
    title: 'VAT Registration & Filing',
    subtitle: 'Tax Compliance',
    category: 'Compliance',
    navTitle: 'VAT Registration',
    description: [
      'Ensure your business stays compliant with Federal Tax Authority (FTA) regulations through our comprehensive VAT registration and filing services. UAE VAT compliance requires accurate record-keeping, timely filing, and proper documentation of all taxable transactions. Non-compliance can result in significant penalties and business disruptions.',
      'We manage your complete VAT compliance including initial registration, quarterly return preparation and filing, tax portal management, and refund claim processing. Our experienced tax consultants ensure accurate calculation of input and output VAT, proper documentation of exempt and zero-rated supplies, and timely submission of all required returns.',
      'Our VAT services include penalty avoidance strategies, refund optimization, and ongoing advisory to ensure your business maximizes VAT efficiency while maintaining full compliance. We provide detailed reporting, audit support, and proactive guidance on VAT implications of business transactions and structural changes.'
    ],
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Accurate filing', 'Penalty avoidance', 'Refund management'],
    sections: [
      {
        title: 'FTA Advisory',
        content: 'We manage your tax portal and quarterly filings with the Federal Tax Authority. Our experienced tax consultants ensure accurate calculation of input and output VAT, proper documentation of exempt and zero-rated supplies, and timely submission.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Compliance Management',
        content: 'We handle complete VAT compliance including initial registration, quarterly return preparation and filing, and refund claim processing. Our services include penalty avoidance strategies and refund optimization to maximize VAT efficiency.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Audit Support',
        content: 'We provide detailed reporting, audit support, and proactive guidance on VAT implications of business transactions. Our VAT services ensure your business stays compliant with FTA regulations while avoiding significant penalties.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
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
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    badge: 'Compliance',
    advantages: ['Structure optimization', 'Pillar 2 advisory', 'Documentation'],
    sections: [
      {
        title: 'Strategy',
        content: 'We help you navigate the new tax landscape without overpaying. Our corporate tax advisory ensures your business navigates the 9% corporate tax regime efficiently through careful planning, structural optimization, and comprehensive compliance procedures.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Structure Optimization',
        content: 'We provide structure optimization services to minimize tax liability while maintaining full compliance with UAE corporate tax law. Our advisors analyze your business to identify tax-efficient strategies and legitimate deductions.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Comprehensive Advisory',
        content: 'Our services include Pillar 2 advisory for multinational enterprises, transfer pricing documentation, and tax residency planning. We ensure your business remains competitive while meeting all regulatory requirements in the new tax landscape.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'accounting-bookkeeping-uae',
    title: 'Accounting & Bookkeeping',
    subtitle: 'Financial Precision',
    category: 'Compliance',
    navTitle: 'Accounting and Bookkeeping',
    description: [
      'Professional ledger maintenance for UAE companies using cloud-based accounting systems that provide real-time financial visibility and audit-ready reporting. Proper bookkeeping is essential for tax compliance, banking relationships, investor reporting, and strategic business decision-making.',
      'We use industry-leading platforms including Xero and QuickBooks to maintain pristine financial records with complete transparency and accessibility. Our accounting services include daily transaction recording, bank reconciliation, accounts payable and receivable management, payroll processing, and monthly financial statement preparation.',
      'Our cloud-based tracking systems provide 24/7 access to your financial data, automated reporting, and real-time insights into business performance. We deliver audit-ready reports that meet UAE accounting standards, facilitate tax compliance, and provide the financial transparency required by banks and investors.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Cloud-based tracking', 'Audit-ready reports', 'Transparency'],
    sections: [
      {
        title: 'Ledger Management',
        content: 'We use Xero and QuickBooks to keep your books pristine with complete transparency and accessibility. Our cloud-based accounting systems provide real-time financial visibility and audit-ready reporting for UAE companies.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Comprehensive Services',
        content: 'Our accounting services include daily transaction recording, bank reconciliation, accounts payable and receivable management, payroll processing, and monthly financial statement preparation. We maintain professional ledger maintenance using industry-leading platforms.',
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Real-Time Access',
        content: 'Our cloud-based tracking systems provide 24/7 access to your financial data with automated reporting and real-time insights. We deliver audit-ready reports that meet UAE accounting standards and facilitate tax compliance.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },

  // F. Residency & Personal Legacy
  {
    slug: 'golden-visa-uae',
    title: 'Golden Visa UAE',
    subtitle: '10-Year Residency',
    category: 'Residency',
    navTitle: 'Golden Visa',
    description: [
      'Secure your future in the UAE with long-term residency through the prestigious Golden Visa program offering 10-year renewable residence permits. The Golden Visa provides complete independence from employer sponsorship, allowing you to live, work, and invest in the UAE with maximum flexibility and security.',
      'Golden Visa holders enjoy 100% ownership of their residency status with no sponsor requirements, the ability to sponsor family members including spouse, children, and parents, and the freedom to work for any employer or establish their own businesses. The visa is renewable every 10 years subject to meeting eligibility criteria.',
      'Eligibility extends to investors, entrepreneurs, highly skilled professionals, outstanding students, and individuals with specialized talents. We guide you through the application process, document preparation, and submission procedures to secure your Golden Visa and establish long-term residency in the UAE.'
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
    badge: '10 Years',
    advantages: ['No sponsor needed', '100% ownership of self', 'Family sponsorship'],
    sections: [
      {
        title: 'Eligibility',
        content: 'Golden Visa eligibility extends to investors, entrepreneurs, and highly skilled talent. We guide you through the application process, document preparation, and submission procedures to secure your 10-year renewable residence permit.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Benefits',
        content: 'Golden Visa holders enjoy 100% ownership of their residency status with no sponsor requirements and the ability to sponsor family members. The visa provides complete independence from employer sponsorship with freedom to work or establish businesses.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Long-Term Security',
        content: 'The Golden Visa program offers 10-year renewable residence permits, allowing you to live, work, and invest in the UAE with maximum flexibility and security. We help you establish long-term residency in the UAE.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'uae-wills-estate-planning',
    title: 'UAE Wills & Estate Planning',
    subtitle: 'Legacy Protection',
    category: 'Residency',
    navTitle: 'Wills & Estate',
    description: [
      'Protect your assets according to your wishes, not local law defaults, through comprehensive UAE wills and estate planning services. Without a registered will, UAE inheritance laws based on Sharia principles will determine asset distribution, which may not align with your personal wishes or family circumstances.',
      'We draft and register wills for both non-Muslims and Muslims through the DIFC Wills and Probate Registry, providing legally enforceable asset distribution according to your specific instructions. DIFC Court registration ensures your will is recognized and enforced according to your wishes, protecting your family and beneficiaries.',
      'Our estate planning services include asset protection strategies, guardianship provisions for minor children, business succession planning, and comprehensive legacy protection. We ensure your assets are distributed according to your wishes while minimizing legal complications and family disputes.'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
    advantages: ['DIFC Court registration', 'Asset protection', 'Family security'],
    sections: [
      {
        title: 'Asset Distribution',
        content: 'We draft and register wills for non-Muslims and Muslims alike through the DIFC Wills and Probate Registry. Our estate planning services provide legally enforceable asset distribution according to your specific instructions.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'DIFC Registration',
        content: 'DIFC Court registration ensures your will is recognized and enforced according to your wishes, protecting your family and beneficiaries. Without a registered will, UAE inheritance laws based on Sharia principles will determine asset distribution.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Comprehensive Planning',
        content: 'Our estate planning services include asset protection strategies, guardianship provisions for minor children, and business succession planning. We ensure your assets are distributed according to your wishes while minimizing legal complications.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },

  // G. Corporate Support Services
  {
    slug: 'iso-certification-uae',
    title: 'ISO Certification Services',
    subtitle: 'Quality Standards',
    category: 'Corporate Support',
    navTitle: 'ISO Certification',
    description: [
      'Gain global credibility with ISO certification demonstrating your commitment to quality standards, process excellence, and continuous improvement. ISO certification enhances your competitive positioning, facilitates international business opportunities, and demonstrates compliance with globally recognized quality management systems.',
      'We provide comprehensive ISO certification services including gap analysis, documentation preparation, process implementation, internal audits, and certification body liaison. Our experts guide you through the entire certification process, ensuring efficient implementation and successful certification.',
      'We specialize in multiple ISO standards including ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health and Safety), and various industry-specific standards. ISO certification improves process efficiency, enhances client trust, and provides global recognition for your quality commitment.'
    ],
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Global recognition', 'Process efficiency', 'Client trust'],
    sections: [
      {
        title: 'Standard Types',
        content: 'We specialize in ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health and Safety), and various industry-specific standards. ISO certification enhances your competitive positioning and facilitates international business opportunities.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Certification Process',
        content: 'We provide comprehensive ISO certification services including gap analysis, documentation preparation, process implementation, and internal audits. Our experts guide you through the entire certification process ensuring efficient implementation.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Global Credibility',
        content: 'ISO certification demonstrates your commitment to quality standards, process excellence, and continuous improvement. It improves process efficiency, enhances client trust, and provides global recognition for your quality commitment.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'document-attestation-uae',
    title: 'Document Attestation',
    subtitle: 'MOFA & Embassy Liaison',
    category: 'Corporate Support',
    navTitle: 'Document Attestation',
    description: [
      'Get your international documents legalized for UAE use through our comprehensive document attestation services covering Ministry of Foreign Affairs (MOFA) attestation, embassy legalization, and consulate authentication. Document attestation is mandatory for using foreign documents in UAE legal, business, and government procedures.',
      'We provide worldwide document pickup services, managing the complete attestation chain from your home country through embassy attestation to final MOFA attestation in the UAE. Our verified processes ensure authentic results with fast turnaround times and complete tracking.',
      'Our attestation services cover educational certificates, marriage certificates, birth certificates, corporate documents, power of attorney, and commercial documents. We manage the complex multi-step attestation process including notarization, state authentication, embassy legalization, and MOFA attestation.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Worldwide pickup', 'Verified results', 'Fast turnaround'],
    sections: [
      {
        title: 'Service Scope',
        content: 'Our attestation services cover educational certificates, marriage certificates, birth certificates, corporate documents, power of attorney, and commercial documents. Document attestation is mandatory for using foreign documents in UAE legal and government procedures.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Complete Process',
        content: 'We provide worldwide document pickup services, managing the complete attestation chain from your home country through embassy attestation to final MOFA attestation. We manage the complex multi-step process including notarization and state authentication.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Fast Turnaround',
        content: 'Our verified processes ensure authentic results with fast turnaround times and complete tracking. We get your international documents legalized for UAE use through comprehensive MOFA and embassy liaison services.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'legal-translation-uae',
    title: 'Legal Translation Services',
    subtitle: 'Certified Linguists',
    category: 'Corporate Support',
    navTitle: 'Legal Translation',
    description: [
      'Precise translation for Ministry of Justice (MOJ) and government submissions through our certified legal translation services. Legal translations require absolute accuracy, proper terminology, and official certification to be accepted by UAE courts, government departments, and regulatory authorities.',
      'Our MOJ-certified translators provide accurate translations in over 75 languages with complete confidentiality and professional handling. We specialize in legal terminology, ensuring translations maintain the precise meaning and legal implications of original documents.',
      'We translate court documents, Memorandums of Association, legal contracts, corporate agreements, government submissions, and all legal documentation requiring certified translation. Our translations are officially stamped and certified for acceptance by UAE authorities.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['MOJ certified', '75+ languages', 'Confidentiality'],
    sections: [
      {
        title: 'Document Types',
        content: 'We translate court documents, Memorandums of Association, and legal contracts for Ministry of Justice and government submissions. Legal translations require absolute accuracy, proper terminology, and official certification to be accepted by UAE authorities.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Certified Translators',
        content: 'Our MOJ-certified translators provide accurate translations in over 75 languages with complete confidentiality and professional handling. We specialize in legal terminology, ensuring translations maintain the precise meaning and legal implications.',
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Official Certification',
        content: 'We translate corporate agreements, government submissions, and all legal documentation requiring certified translation. Our translations are officially stamped and certified for acceptance by UAE courts, government departments, and regulatory authorities.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'india-company-formation',
    title: 'India Company Formation',
    subtitle: 'Cross-Border Expansion',
    category: 'Corporate Support',
    description: [
      'Expanding into India is full of opportunity, but the regulations and state-specific requirements can feel overwhelming. We make the process simple and stress-free. Our India company formation services guide you at every step—so you can confidently establish your business and tap into India\'s growing market.',
      'Establishing a presence in the Indian market requires navigating complex regulatory frameworks, state-specific requirements, and diverse business landscapes. Our India company formation services provide a seamless entry for international businesses seeking to leverage India\'s growing economic potential.',
      'We handle everything from Digital Signature Certificate (DSC) and Director Identification Number (DIN) procurement to Name Approval and Incorporation with the Registrar of Companies (ROC). Our experts ensure compliance with the Companies Act, 2013 and assist with PAN/TAN registration and Goods and Services Tax (GST) setup.',
      'Whether you are looking to set up a Private Limited Company, a Limited Liability Partnership (LLP), or a Branch/Liaison Office, we provide tailored advisory to ensure your Indian entity is structured for operational efficiency and regulatory compliance from day one.'
    ],
    image: 'https://images.unsplash.com/photo-1524492718561-e27a1f01ef7c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['100% foreign ownership in many sectors', 'Access to India\'s massive consumer market', 'Competitive operational costs', 'Expert cross-border guidance from UAE'],
    sections: [
      {
        title: 'Complete Setup Process',
        content: 'Starting your company in India shouldn\'t feel complicated. That\'s why we handle the entire incorporation process for you—from drafting essential company documents to managing official filings and securing your Certificate of Incorporation. You won\'t have to worry about paperwork or technical details. Our team ensures every document is accurately prepared and fully compliant with the required approvals and legal formalities, so your company is set up smoothly and correctly from day one.',
        image: 'https://images.unsplash.com/photo-1532375811450-5d6e6fe4d38c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Entity Options & Structuring',
        content: [
          'Choosing the right business structure is key to getting your documents in order. We help you pick the best option—whether it\'s a private company, partnership, or branch—based on your goals. Choosing the right structure in India is a strategic decision that impacts taxation, fundraising, liability, and day-to-day operations.',
          'We also set up ownership, management, and processes to ensure smooth banking, vendor setup, and business operations. We align director/shareholder composition, authorized capital, and governance mechanics with practical needs like banking, vendor onboarding, and cross-border remittances.'
        ],
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Tax & Operational Readiness',
        content: [
          'Setting up your company is just the beginning—we also help you get fully ready to operate. From attested documents and other essential registrations to organizing your compliance records, we handle everything so banking and vendor approvals move faster.',
          'If you\'re expanding from the UAE, we\'ll also guide you on cross-border documentation and transaction flows, helping you reduce friction and keep reporting aligned smoothly across both jurisdictions.'
        ],
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Ongoing Compliance Support',
        content: 'Our support doesn\'t stop after your company is set up—we stay with you as your business grows. We take care of ongoing compliance, record keeping, and important procedures so you never miss a deadline. If there are changes like adding a new partner, updating ownership, or transferring shares, we guide you smoothly. Our goal is simple: to keep your company organized, compliant, and ready for any review at every stage.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'market-entry-strategy',
    title: 'Market Entry Strategy',
    subtitle: 'Strategic Expansion',
    category: 'Corporate Support',
    description: [
      'Entering a new market takes more than just paperwork—it requires understanding the local business environment, competition, and culture. Our market entry services give you a clear, practical roadmap to confidently start or grow your business in the UAE, India, Saudi Arabia, and Qatar.',
      'Successfully entering a new market requires more than just a business license; it requires a deep understanding of local dynamics, competition, and regulatory nuances. Our market entry strategy services provide a comprehensive roadmap for international businesses seeking to establish or expand their presence across dynamic markets.',
      'We conduct thorough market research, competitor analysis, and feasibility studies to identify opportunities and mitigate risks. Our team assists with business model optimization, pricing strategy, and distribution channel selection to ensure your market entry is both efficient and sustainable.',
      'With a focus on long-term growth, we help you navigate the cultural and business etiquette differences, ensuring your brand resonates with local stakeholders and achieves its strategic objectives in the new territory.'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Risk mitigation through real data', 'Clear 30/60/90-day roadmap', 'Regulatory and cultural alignment', 'Partner & channel enablement'],
    sections: [
      {
        title: 'Research & Analysis',
        content: 'Our strategy starts with understanding the bigger picture through real data and meaningful insights. We carefully study market trends, customer behavior, and regulatory changes to truly understand where your business stands. This helps us identify real opportunities, anticipate challenges, and guide you with clarity and confidence in your target market.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Go-to-Market Blueprint',
        content: [
          'We don\'t just stop at research—we turn insights into a clear, actionable plan. From defining your market, finding the right audience, setting the best pricing, to choosing the most effective sales channels, we map everything with purpose.',
          'You\'ll get a simple 30/60/90-day roadmap that makes the process easy to follow. From setting up operations and building your team to starting revenue streams, we outline clear milestones so you always know what\'s next.'
        ],
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Regulatory Pathway',
        content: 'We help you pick the best location and approach for your business. From choosing the right activities and ownership setup to meeting operational needs, we guide you through every step. By getting it right from the start, you avoid costly changes later and make sure your business is ready for smooth banking and vendor processes.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Partner & Channel Enablement',
        content: 'When partnerships play a key role in your growth, we help you find the right partners and set the foundation properly. From shortlisting the right fit and defining fair commercial terms to preparing contracts and onboarding documents, we make sure everything is clear and structured. Our goal is simple: to help you launch with confidence, clear KPIs, and defined responsibilities.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'company-incorporation-and-registration',
    title: 'Company Incorporation & Registration',
    subtitle: 'Legal Entity Setup',
    category: 'Corporate Support',
    navTitle: 'Company Incorporation',
    description: [
      'Every successful business starts with a solid foundation. We guide you through the entire setup process, making it simple and stress-free. From picking the right structure to handling all the paperwork, we make sure everything is done correctly so you can focus on growing your business with confidence.',
      'The foundation of any successful business is its legal structure. Our company incorporation and registration services provide end-to-end support for establishing your business entity across various jurisdictions, ensuring full compliance with local laws and regulations.',
      'We guide you through the selection of the most appropriate legal form—be it a limited liability company, a joint-stock company, or a partnership—based on your business goals, ownership structure, and liability requirements.',
      'Our team manages all aspects of the registration process, including document preparation, government liaison, fee payments, and securing necessary approvals, allowing you to focus on building your core business operations.'
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Tailored legal structuring', 'Streamlined registration process', 'Full regulatory compliance', 'Post-incorporation activation support'],
    sections: [
      {
        title: 'Seamless Registration',
        content: 'We handle all the paperwork and processes so you don\'t have to worry. From reserving your company name to getting your final approvals, our team manages every step. Our goal is to make the setup process smooth and stress-free, so you can focus on launching and growing your business.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Entity Selection Workshop',
        content: [
          'We start by understanding your vision and designing your company setup to match how you plan to operate—from ownership to future growth goals. This helps you avoid common issues, like setups that are hard to scale or manage.',
          'We make sure your foundation supports your growth, not holds it back. This prevents mismatches like choosing a structure that is difficult to bank, hard to scale, or misaligned with your planned activities.'
        ],
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Documentation & Approvals',
        content: 'We carefully prepare and review all the essential documents your business needs—from constitutional documents and shareholder or director resolutions to any regulated supporting paperwork. Our team then manages the entire submission process, including follow-ups and approvals with the relevant authorities, so everything moves forward smoothly and your timelines stay clear and predictable.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Post-Incorporation Activation',
        content: 'Once your company is registered, we help you get it ready for real operations. From setting up corporate banking and accounting systems to establishing a compliance calendar and onboarding key vendors, we make sure you can start transacting and scaling smoothly without unnecessary delays.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'corporate-and-regulatory-compliance',
    title: 'Corporate & Regulatory Compliance',
    subtitle: 'Maintaining Standards',
    category: 'Compliance',
    description: [
      'In today\'s complex global business environment, maintaining compliance with ever-evolving laws and regulations is critical. Our corporate and regulatory compliance services ensure your business operations remain within legal boundaries, protecting you from penalties and reputational damage.',
      'We provide comprehensive audits, monitoring, and advisory across various domains, including anti-money laundering (AML), data protection, labor laws, and industry-specific regulations. Our team helps you implement robust compliance frameworks and internal controls.',
      'Our proactive approach identifies potential compliance risks before they become issues, ensuring your business maintains its license to operate and its reputation for integrity across all its markets.'
    ],
    image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Penalty avoidance', 'Reputational protection', 'Robust internal controls'],
    sections: [
      {
        title: 'Audit & Monitoring',
        content: 'We conduct regular compliance audits and monitor regulatory changes to ensure your business stays ahead of its legal obligations. Our experts provide clear, actionable advice on all compliance matters.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'AML, KYC & Governance',
        content: [
          'Banks, regulators, and counterparties expect a defensible compliance posture. We help you implement practical AML/KYC processes, governance practices, and documentation standards that stand up to due diligence.',
          'Where needed, we support UBO mapping, risk scoring, and evidence packs that reduce friction with banking and enterprise clients.'
        ],
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Policies, Controls & Training',
        content: 'We draft and operationalize compliance policies and internal controls that fit your size and sector. We also support staff training and simple playbooks so compliance is consistently executed, not just documented.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Remediation & Regulator Readiness',
        content: 'If issues are identified, we design remediation plans, strengthen records, and prepare your business for audits, inspections, and bank reviews. The goal is continuity: fewer disruptions, fewer escalations, and better operational resilience.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'tax-advisory-and-compliance',
    title: 'Tax Advisory & Compliance',
    subtitle: 'Strategic Tax Management',
    category: 'Compliance',
    description: [
      'Effective tax management is essential for optimizing financial performance and ensuring long-term sustainability. Our tax advisory and compliance services provide expert guidance on direct and indirect taxes across multiple jurisdictions, including the UAE, India, Saudi Arabia, and Qatar.',
      'We assist with tax planning, structure optimization, and compliance with local tax laws, including VAT, corporate tax, and income tax. Our goal is to minimize your tax liability while ensuring full transparency and compliance with all regulatory requirements.',
      'Our team stays abreast of the latest tax reforms and international tax standards, providing you with the insights needed to navigate the changing tax landscape and make informed financial decisions.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Tax liability optimization', 'Full compliance with local laws', 'Expert tax planning'],
    sections: [
      {
        title: 'Tax Optimization',
        content: 'We analyze your business operations to identify legal tax-saving opportunities and structure your transactions for maximum tax efficiency. Our advisors provide comprehensive support for tax filings and audits.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Planning & Structuring',
        content: [
          'We review your operating model, contract flows, and intercompany arrangements to structure tax outcomes legally and predictably.',
          'For cross-border businesses, we help align substance, governance, and reporting so your structure remains defensible and bank-friendly.'
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Compliance Calendar & Controls',
        content: 'We create a compliance calendar, define filing responsibilities, and implement controls so deadlines are met and filings are consistent with your accounting records. This reduces penalties and reduces audit risk.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Audit Support & Representation',
        content: 'If you face a tax review or audit, we help you prepare reconciliations, evidence packs, and responses. Our approach is structured and documented so you can resolve queries quickly and protect business continuity.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'financial-advisory',
    title: 'Financial Advisory',
    subtitle: 'Strategic Wealth Management',
    category: 'Banking',
    description: [
      'Make informed financial decisions with our expert financial advisory services. We provide comprehensive guidance on capital structuring, investment strategies, risk management, and financial planning to help your business achieve its long-term financial goals.',
      'Our team of financial experts analyzes your financial performance, market conditions, and growth objectives to provide tailored advice. We assist with fundraising, mergers and acquisitions, and treasury management to optimize your capital deployment.',
      'Whether you are a startup seeking venture capital or an established enterprise looking to restructure, we provide the insights and expertise needed to navigate complex financial landscapes and drive sustainable growth.'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Data-driven financial insights', 'Optimized capital structure', 'Strategic risk management'],
    sections: [
      {
        title: 'Capital Structuring',
        content: 'We help you optimize your debt-to-equity ratio and select the best financing options for your business needs. Our advisors provide expert support for financial modeling and valuation.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Cash Flow & Treasury',
        content: 'We build cash flow forecasts and treasury practices that support growth: receivables strategy, working capital planning, and payment rails for multi-currency operations. The goal is control and predictability, not just reporting.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Fundraising Readiness',
        content: 'For founders raising capital, we support investor-ready financial models, KPI dashboards, and data rooms. We help you translate strategy into numbers and present the story clearly to lenders or investors.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'M&A & Restructuring Support',
        content: 'When you acquire, divest, or restructure, we support valuation, due diligence preparation, and integration planning. We focus on risk identification, documentation, and execution clarity so decisions are informed and timelines are realistic.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'hr-and-payroll-services',
    title: 'HR & Payroll Services',
    subtitle: 'People & Performance',
    category: 'Corporate Support',
    description: [
      'Manage your workforce efficiently with our comprehensive HR and payroll services. From talent acquisition and onboarding to payroll processing and employee benefits management, we provide a full suite of services designed to optimize your human capital management.',
      'We ensure compliance with local labor laws, social security requirements, and wage protection systems. Our team handles employee record maintenance, leave management, and termination procedures, allowing you to focus on employee engagement and performance.',
      'Our outsourced payroll solutions ensure accurate and timely salary payments, while our HR advisory provides expert guidance on organizational structure, performance management, and employee relations.'
    ],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Full labor law compliance', 'Accurate payroll processing', 'Reduced administrative burden'],
    sections: [
      {
        title: 'Payroll Management',
        content: 'Our automated payroll systems ensure accurate calculations, timely payments, and full compliance with Wage Protection Systems (WPS). We handle all aspects of employee compensation and benefits.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Payroll & WPS Compliance',
        content: 'We prepare WPS bank files, reconcile salary transfers, manage MOL/Immigration submissions, and document every change so inspections are straightforward. Our team keeps payroll calendars, approvals, and variance reports organized to eliminate penalties or payment delays.',
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'HR Operations & Records',
        content: 'We manage employee files, onboarding/offboarding checklists, leave and attendance coordination, and standard HR processes so your team stays organized, compliant, and audit-ready.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Policies, Contracts & Advisory',
        content: [
          'We help you standardize employment contracts, HR policies, and internal processes aligned with local labor law and practical business needs.',
          'As your team grows, we advise on role design, org structure, performance frameworks, and documentation that reduces risk in disputes or inspections.'
        ],
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Founder-Friendly HR Setup',
        content: 'For new entities, we implement lightweight systems that scale: payroll cadence, approvals, standard templates, and a compliance calendar. You get the essentials without building an oversized HR function too early.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'legal-services',
    title: 'Legal Services',
    subtitle: 'Expert Legal Support',
    category: 'Corporate Support',
    description: [
      'Navigate the complexities of business law with our comprehensive legal services. We provide expert advice and support on a wide range of legal matters, including contract drafting, dispute resolution, intellectual property protection, and corporate governance.',
      'Our team of experienced legal professionals works closely with you to understand your legal needs and provide tailored solutions. We ensure your business interests are protected through legally robust agreements and proactive risk management.',
      'Whether you are dealing with local regulations or international commercial law, our legal experts provide the guidance needed to ensure your business remains compliant and legally secure across all its operations.'
    ],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Legally robust contracts', 'Expert dispute resolution', 'Proactive risk management'],
    sections: [
      {
        title: 'Contract Drafting',
        content: 'We draft and review all types of commercial contracts to ensure your business interests are fully protected. Our legal experts provide clear, actionable advice on all legal matters.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Corporate Governance',
        content: 'We support governance essentials: shareholder agreements, board resolutions, delegated authorities, and document standards that reduce ambiguity and protect founders. This is especially important for banking, investors, and cross-border structures.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Dispute Strategy & Resolution',
        content: 'When disputes arise, we help you assess risk, preserve evidence, and choose the right pathway (negotiation, settlement, or formal proceedings). The goal is to protect operations, reputation, and commercial leverage.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'IP & Commercial Protection',
        content: 'We advise on protecting brand assets and commercial rights through practical contract clauses and IP strategy. This includes licensing, confidentiality, and safeguarding key business relationships.',
        image: 'https://images.unsplash.com/photo-1523240715637-1425e799298e?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'other-services',
    title: 'Other Corporate Services',
    subtitle: 'Comprehensive Support',
    category: 'Corporate Support',
    description: [
      'Beyond company formation and core compliance, we provide a wide range of additional corporate services designed to support your business at every stage of its growth. Our goal is to be your single point of contact for all your business support needs.',
      'Our extended services include office space procurement, brand registration, trademark protection, market research, and business development support. We tailor our services to meet your specific requirements, providing flexible and responsive support.',
      'With our deep local knowledge and extensive network of partners, we provide the solutions needed to overcome operational challenges and drive business success in your target markets.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Single point of contact', 'Tailored support solutions', 'Deep local market knowledge'],
    sections: [
      {
        title: 'Bespoke Solutions',
        content: 'We understand that every business is unique. Our team provides customized support services tailored to your specific operational needs and growth objectives.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Operational Enablement',
        content: 'We help you solve practical operational blockers: office space coordination, vendor onboarding documentation, government liaison processes, and administrative setup that keeps execution moving.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Brand & IP Support',
        content: 'Where required, we support trademark and brand protection workflows, documentation preparation, and coordination with specialist partners. The focus is clarity and speed, not endless back-and-forth.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Partner Network Access',
        content: 'We connect you to trusted partners for specialized needs (real estate, banking introductions, legal translation, attestation, and sector-specific support). You keep one accountable point of coordination while accessing best-fit providers.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Business Support Series',
        content: 'We package admin, finance, and PRO assistance into modular sprints so you can bolt on the exact support you need—whether it is board deck prep, data-room cleanups, or regulatory follow-ups. Each series has defined deliverables, owners, and timelines so progress is visible and momentum never stalls.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'auditing',
    title: 'Auditing Services',
    subtitle: 'Financial Verification',
    category: 'Compliance',
    description: [
      'Ensure the accuracy and integrity of your financial statements with our professional auditing services. We provide comprehensive statutory and internal audits that meet local regulatory requirements and international auditing standards.',
      'Our team of experienced auditors conducts thorough examinations of your financial records, internal controls, and accounting procedures. We provide independent verification of your financial performance, enhancing the trust of banks, investors, and other stakeholders.',
      'Beyond compliance, our audits provide valuable insights into your business operations, identifying areas for improvement and helping you enhance your financial management and internal controls.'
    ],
    image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Statutory compliance', 'Enhanced stakeholder trust', 'Actionable financial insights'],
    sections: [
      {
        title: 'Statutory Audits',
        content: 'We conduct mandatory statutory audits for UAE, Indian, and other international companies as per local laws. Our reports are recognized by government authorities and financial institutions.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Internal Controls Review',
        content: 'We assess internal controls and financial processes to identify gaps that create risk or inefficiency. You get practical recommendations that improve reliability and reduce future audit friction.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Banking & Investor Confidence',
        content: 'Audit-ready financials make a difference in banking and fundraising. We help you present clean statements and supporting schedules that strengthen credibility with banks, investors, and key counterparties.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Insights Beyond the Report',
        content: 'Our audits are not just a checkbox. We highlight operational patterns, cost issues, and process improvements so the audit becomes a tool for better decision-making, not only compliance.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'accounting',
    title: 'Accounting Services',
    subtitle: 'Financial Record Keeping',
    category: 'Compliance',
    description: [
      'Maintain accurate and up-to-date financial records with our professional accounting services. We provide comprehensive bookkeeping, financial statement preparation, and management reporting services designed to give you a clear picture of your business performance.',
      'We use modern cloud-based accounting software to ensure your financial data is accessible and secure. Our team handles all daily accounting tasks, including transaction recording, bank reconciliations, and accounts management.',
      'Our accounting services ensure compliance with local accounting standards and provide the financial information needed for informed decision-making, tax filing, and audit preparation.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Real-time financial visibility', 'Full compliance with standards', 'Informed decision making'],
    sections: [
      {
        title: 'Bookkeeping',
        content: 'We manage your daily financial transactions and maintain accurate ledgers using industry-leading software. Our team ensures your records are always audit-ready.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Management Reporting',
        content: 'We provide clear management reports (P&L, balance sheet, cash flow, and KPI views) so you can make decisions quickly. Reporting is structured to match how founders and finance teams actually operate.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Financial Statement Preparation & Reporting',
        content: 'We compile quarterly and annual financial statements that reconcile to your trial balance, include supporting schedules, and align with IFRS/UAE reporting standards. Board-ready packs highlight key ratios, covenant checks, and commentary so investors, banks, and auditors get a complete, consistent view.',
        image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'VAT-Ready Accounting',
        content: 'We keep your books aligned with VAT and corporate tax expectations by maintaining proper invoice discipline, reconciliations, and documentation. This reduces risk in filings and makes audits significantly smoother.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Systems & Process Setup',
        content: 'If you are early-stage, we help set up the right accounting stack and processes: chart of accounts, approval flows, and monthly close checklists. You get structure without heavy overhead.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'tax-services',
    title: 'Tax Services',
    subtitle: 'Comprehensive Tax Solutions',
    category: 'Compliance',
    description: [
      'Navigate the complexities of taxation with our comprehensive tax services. We provide expert guidance and support on a wide range of tax matters, including registration, filing, planning, and dispute resolution.',
      'Our services cover direct and indirect taxes, including VAT, corporate tax, income tax, and withholding tax. We ensure your business remains compliant with all local tax laws while optimizing your tax position.',
      'With our deep understanding of international tax treaties and local regulations, we provide the insights needed to manage cross-border tax issues and ensure multi-jurisdictional compliance.'
    ],
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Full multi-tax compliance', 'Strategic tax planning', 'Expert audit support'],
    sections: [
      {
        title: 'VAT & Corporate Tax',
        content: 'We manage all aspects of your VAT and corporate tax compliance, from registration to return filing and audit support. Our experts ensure accurate and timely submissions.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Registration & Filings',
        content: 'We handle registrations, periodic filings, reconciliations, and supporting schedules so submissions match accounting records. This reduces follow-up queries and keeps you penalty-safe.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Tax Residency & Substance',
        content: 'For cross-border founders, we advise on residency planning, documentation, and practical substance signals that matter in banking and compliance. The focus is alignment between how you operate and how you report.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Dispute & Audit Support',
        content: 'If you receive tax queries or face an audit, we prepare the evidence pack and help you respond in a structured way. We focus on fast resolution while protecting your commercial position.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'compliance-banking',
    title: 'Compliance & Banking Support',
    subtitle: 'Facilitating Financial Flow',
    category: 'Banking',
    description: [
      'Ensure seamless financial operations with our integrated compliance and banking support services. We bridge the gap between regulatory requirements and banking operational needs, helping your business maintain healthy financial relationships.',
      'We assist with corporate bank account opening, multi-currency account management, and ongoing banking compliance. Our team prepares all necessary documentation, including business profiles and KYC files, to meet stringent bank requirements.',
      'Our proactive compliance support ensures your transactions and operations remain within banking guidelines, reducing the risk of account freezes or transactional delays.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Streamlined bank account opening', 'Full banking KYC compliance', 'Proactive transactional support'],
    sections: [
      {
        title: 'Banking Liaison',
        content: 'We maintain direct relationships with leading banks to facilitate smooth account opening and operational banking. Our team handles all communication and documentation requirements.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'KYC File Build',
        content: 'We prepare a complete KYC and compliance file including business profile, shareholder background, source of funds narrative, and operational evidence. This improves approval quality and reduces repeated bank queries.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Transaction Hygiene',
        content: 'We help you keep transactions clean and explainable: invoice discipline, contract alignment, clear payment trails, and documentation standards that match banking expectations.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Ongoing Reviews & Maintenance',
        content: 'As your volume grows, compliance expectations grow too. We help you maintain updated documents, respond to bank reviews, and avoid operational interruptions caused by missing evidence or unclear activity patterns.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'saudi-company-formation',
    title: 'Saudi Arabia Company Formation',
    subtitle: 'KSA Market Entry',
    category: 'Corporate Support',
    description: [
      'Saudi Arabia offers exciting opportunities for international investors, but starting a business there can be challenging. From understanding the local market to setting up operations, new entrants often face hurdles. We guide you every step of the way—helping you choose the right structure, stay on top of requirements, and get your business running smoothly.',
      'The Saudi Arabian market offers immense opportunities under the Vision 2030 initiative. Our KSA company formation services provide end-to-end support for international investors seeking to establish a presence in the Kingdom.',
      'We assist with MISA (Ministry of Investment) license procurement, Articles of Association drafting, and registration with the Ministry of Commerce. Our team ensures compliance with Saudization requirements and local labor laws.',
      'With our support, entering the Saudi market becomes easier, faster, and aligned with your goals. From 100% foreign-owned entities to joint ventures, we provide the expertise needed to navigate the Saudi regulatory landscape and achieve successful market entry.'
    ],
    image: 'https://images.unsplash.com/photo-1586724230411-44b20743b38c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Access to the largest GCC economy', 'Vision 2030 growth opportunities', 'Streamlined MISA licensing', 'Saudization compliance support'],
    sections: [
      {
        title: 'MISA Licensing',
        content: 'We manage the entire MISA licensing process for you, making sure your investment plan meets Saudi regulations and supports the country\'s economic goals. Our team handles all the documentation, communication, and follow-ups so your license is secured smoothly and efficiently.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Entity Types & Ownership',
        content: 'We help you choose the right legal structure for your KSA expansion, ensuring ownership, governance, and business activities align with licensing rules and day-to-day operational needs. Our advisory covers the full range of entities—from wholly owned foreign companies to joint ventures—so your setup fits your goals.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Regulatory & Labor Alignment',
        content: 'We help you plan compliance from the start—covering Saudization, operational policies, and reporting requirements so you can avoid surprises after incorporation and scale your business sustainably. Getting it right early saves time, cost, and disruption later.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Operational Launch Support',
        content: 'After setup, we help get your business running smoothly—preparing key documents, aligning accounting and compliance, and coordinating banking and vendor onboarding so you can start transacting without delays.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'qatar-company-formation',
    title: 'Qatar Company Formation',
    subtitle: 'Doha Business Hub',
    category: 'Corporate Support',
    description: [
      'Qatar is a vibrant business hub, thriving on infrastructure growth and economic diversification. We make it easy for you to set up your business in this resilient and fast-growing economy, guiding you every step of the way.',
      'Qatar is a dynamic business hub with a strong focus on infrastructure development and economic diversification. Our Qatar company formation services help you establish your business in one of the world\'s most resilient economies.',
      'We guide you through the registration process with the Ministry of Commerce and Industry (MOCI) and assist with Qatar Financial Centre (QFC) setup where applicable. Our experts ensure full compliance with Qatar\'s commercial laws and tax regulations.',
      'Whether you are setting up an LLC or a branch office, we provide tailored solutions that leverage Qatar\'s strategic location and advanced infrastructure.'
    ],
    image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&q=80&w=2000',
    advantages: ['High per capita income market', 'Advanced infrastructure and logistics', 'QFC or Mainland pathway options', 'Tax & compliance readiness from day one'],
    sections: [
      {
        title: 'Market Entry Strategy',
        content: 'We offer full market entry support for Qatar, guiding you to choose the right legal structure and the ideal location for your business to thrive. Our advisory covers everything from entity selection and activity alignment to identifying the best jurisdiction for your goals.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'QFC vs Mainland Pathway',
        content: 'We help you determine whether Qatar Financial Centre (QFC) or mainland registration is the best fit—considering your business activities, ownership structure, and target clients—ensuring a simple, compliant setup that supports real operations.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Registration & Documentation',
        content: 'We handle all the paperwork and follow-ups with the authorities—from preparing governance documents and securing approvals to completing the practical steps needed to get your business ready for contracts and invoicing.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Tax & Compliance Readiness',
        content: 'We set up your accounting and compliance from the start, ensuring reporting, filings, and operational records are accurate and consistent. This makes banking easier and helps avoid regulatory issues down the line.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'about',
    title: 'About Grow Infinity',
    subtitle: 'Your Growth Partner',
    category: 'Corporate Support',
    description: [
      'Grow Infinity is a trusted corporate services provider focused on helping businesses grow and expand across the UAE, India, Saudi Arabia, and Qatar. We work closely with entrepreneurs and companies to support their growth and help them navigate new opportunities in these dynamic markets.',
      'With our strong industry experience and extensive network, we provide practical guidance and tailored solutions that help businesses move forward with confidence and achieve long-term success.',
      'Our team is built on strong values of integrity, attention to detail, and a client-first approach. We focus on building long-term relationships with our clients, supporting them as they grow and helping them reach their business goals with confidence.',
      'From business setup support to tax guidance and ongoing corporate assistance, we provide a wide range of services designed to make things easier for you—so you can focus on what matters most: growing and running your business successfully.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Trusted partner across UAE, India, KSA & Qatar', 'Client-first approach with integrity', 'Banking-first philosophy', 'End-to-end support from setup to scale'],
    sections: [
      {
        title: 'Our Vision',
        content: 'To be the most trusted partner for businesses expanding and operating across the MEASA region, providing seamless solutions that drive sustainable value.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'What We Do',
        content: [
          'We support founders and businesses as they set up and grow with confidence. Our team provides guidance and practical support across key areas of business operations, helping ensure everything is organized and running smoothly.',
          'Our services focus on creating clear processes, well-prepared documentation, and reliable follow-through, making day-to-day business operations easier and more efficient so you can focus on growing your business.'
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'How We Work',
        content: 'We combine expert guidance with hands-on support. You\'ll receive a clear plan, realistic timelines, and a dedicated team that helps manage the entire process smoothly from start to finish. Our team takes care of the coordination, documentation, and follow-ups, so you don\'t have to deal with multiple service providers.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Banking-First Philosophy',
        content: 'Many businesses can get started quickly, but managing financial processes smoothly can sometimes be challenging. We help structure your business and organize documentation in a way that supports smoother financial operations and day-to-day activities. Our goal is to help you avoid unnecessary delays and disruptions, so your business can operate more efficiently and with greater confidence.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  },
  {
    slug: 'other-services-tax',
    title: 'Other Tax & Accounting Services',
    subtitle: 'Specialized Financial Support',
    category: 'Compliance',
    description: [
      'We offer a wide range of specialized tax and accounting services tailored to your unique business needs. Our goal is to provide comprehensive financial support that ensures compliance and optimizes performance.',
      'Our services include tax residency planning, transfer pricing documentation, excise tax advisory, and specialized financial reporting. We work closely with you to identify and address specific financial challenges.',
      'With our expertise in both local and international tax standards, we ensure your business remains compliant and tax-efficient across all its operations.'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000',
    advantages: ['Bespoke financial solutions', 'Expert tax optimization', 'Comprehensive compliance focus'],
    sections: [
      {
        title: 'Specialized Advisory',
        content: 'Our team provides expert guidance on complex tax matters and specialized financial reporting requirements. We ensure your business is well-prepared for any regulatory scrutiny.',
        image: 'https://images.unsplash.com/photo-1454165833767-0275080057d6?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Transfer Pricing & Documentation',
        content: 'For businesses with cross-border related-party transactions, we support transfer pricing documentation and practical policy alignment. The objective is clarity, defensibility, and consistency across contracts, invoices, and reporting.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Excise & Specialized Taxes',
        content: 'Where applicable, we advise on excise tax exposure, registrations, and reporting. We also support specialized regulatory filings and sector-specific reporting expectations that affect financial compliance.',
        image: 'https://images.unsplash.com/photo-1507679722338-9571897e7436?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Tax & Accounting Health Checks',
        content: 'We perform focused reviews of your books and filings to identify weak points early: reconciliation gaps, documentation weaknesses, or process issues that increase audit risk. You get a prioritized fix plan and support to implement it.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Financial Statement Preparation & Reporting',
        content: 'We consolidate ledgers into quarterly and annual financial statements, build supporting schedules, and package narrative reporting that aligns with IFRS/UAE standards so lenders, investors, and auditors receive a consistent, reconciled view.',
        image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80&w=2000'
      },
      {
        title: 'Payroll & WPS Compliance',
        content: 'Our specialists run payroll cycles end-to-end, generate WPS files, manage leave liabilities, and keep supporting documentation aligned with MOL and tax requirements so every salary disbursement clears without compliance issues.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      }
    ]
  }
];
