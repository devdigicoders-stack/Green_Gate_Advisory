import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Sparkles,
  Scale,
  ShieldCheck,
  Landmark,
  Trees,
  FileText,
  BarChart3,
  ArrowRight,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const SERVICES_DATA = [
  {
    number: '01',
    key: 'carbonMarket',
    slug: 'carbon-market-advisory',
    icon: Sparkles,
    badge: 'MARKET MECHANISMS',
    title: 'Carbon Market Advisory',
    description: 'End-to-end guidance across compliance and voluntary carbon markets, Article 6 transfers, project origination, and global registry verification.',
    features: ['Article 6.2 & 6.4 Mechanisms', 'VCM Project Origination', 'Registry Issuance & MRV']
  },
  {
    number: '02',
    key: 'etsCarbonPricing',
    slug: 'ets-carbon-pricing-article-6',
    icon: Scale,
    badge: 'COMPLIANCE SCHEMES',
    title: 'ETS, Carbon Pricing & Article 6',
    description: 'Technical structuring for compliance emissions trading systems (EU ETS, UK ETS), internal shadow carbon pricing, and sovereign quota compliance.',
    features: ['EU ETS Compliance Portfolios', 'Internal Shadow Pricing', 'Bilateral ITMO Protocols']
  },
  {
    number: '03',
    key: 'cbam',
    slug: 'cbam-advisory',
    icon: ShieldCheck,
    badge: 'TRADE & REGULATION',
    title: 'CBAM Advisory',
    description: 'Specialized risk audits and embedded emissions reporting for industries exporting steel, cement, fertilizers, aluminium, and hydrogen into the EU.',
    features: ['Embedded Carbon Calculation', 'EU Registry Submissions', 'Supply Chain Decarbonization']
  },
  {
    number: '04',
    key: 'climateFinance',
    slug: 'climate-finance-advisory',
    icon: Landmark,
    badge: 'FINANCIAL STRUCTURING',
    title: 'Climate Finance Advisory',
    description: 'Connecting bankable green assets with global climate capital, sovereign green bond frameworks, concessional facilities, and blended finance.',
    features: ['Green Bonds & Sukuk Frameworks', 'Blended Finance Vehicles', 'Project Due Diligence']
  },
  {
    number: '05',
    key: 'natureBased',
    slug: 'nature-based-solutions',
    icon: Trees,
    badge: 'NATURAL CAPITAL',
    title: 'Nature-Based Solutions',
    description: 'High-integrity biological carbon sinks, afforestation & reforestation (ARR), blue carbon mangroves, and regenerative agricultural methodologies.',
    features: ['Forestry & Blue Carbon', 'Remote Sensing Verification', 'Biodiversity Co-benefits']
  },
  {
    number: '06',
    key: 'climatePolicy',
    slug: 'climate-policy-advisory',
    icon: FileText,
    badge: 'SOVEREIGN ADVISORY',
    title: 'Environmental & Climate Policy',
    description: 'Strategic policy design assisting governments and multilateral bodies in drafting Nationally Determined Contributions (NDCs) and sectoral roadmaps.',
    features: ['NDC Alignment & Targets', 'Carbon Taxation Frameworks', 'Institutional Capacity']
  },
  {
    number: '07',
    key: 'corporateClimate',
    slug: 'corporate-climate-esg',
    icon: BarChart3,
    badge: 'ENTERPRISE ESG',
    title: 'Corporate Climate & ESG',
    description: 'Robust Scope 1, 2, and 3 GHG accounting, SBTi net-zero roadmap validation, and double-materiality CSRD/IFRS sustainability disclosures.',
    features: ['Scope 1, 2, 3 GHG Accounting', 'SBTi Net-Zero Target Setting', 'CSRD & IFRS Disclosures']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function OurServices() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();
  const [hoveredSlug, setHoveredSlug] = useState(null);

  return (
    <section
      id="services"
      aria-label="Our Core Advisory Services"
      className="relative w-full bg-white font-['Poppins',sans-serif] py-20 sm:py-24 lg:py-28 overflow-hidden scroll-mt-20"
    >
      {/* Subtle Concentric Mint Ripple Watermark (Bottom-Right GCC White Canvas Signature) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-24 -bottom-24 w-[420px] sm:w-[540px] h-auto opacity-30"
      >
        {Array.from({ length: 16 }).map((_, idx) => (
          <circle
            key={idx}
            cx="420"
            cy="420"
            r={60 + idx * 22}
            stroke="#57D182"
            strokeWidth="1"
            strokeOpacity="0.45"
          />
        ))}
      </svg>

      <div className="relative z-10 w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Section Header — Exact GCC Light-Weight Navy Display Title + Muted Grey Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
            {t('home.coreServices.eyebrow', 'OUR ADVISORY PRACTICES')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[46px] lg:text-[54px] text-[#1A5C3B] leading-[1.15] tracking-[-0.01em]">
            {t('home.coreServices.heading', 'Comprehensive Climate & Carbon Services')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] lg:text-[21px] text-[#7f7f7f] leading-[1.45] max-w-3xl">
            {t('home.coreServices.subtitle', 'Connecting deep technical rigor, regulatory foresight, and institutional capital to accelerate measurable climate action.')}
          </p>
        </motion.div>

        {/* Architectural Mosaic Grid — GCC Flush Mint-Tint Tiles + Sibling Spotlight Hover + Duotone Gradient Feature Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          onMouseLeave={() => setHoveredSlug(null)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white"
        >
          {SERVICES_DATA.map((srv, index) => {
            const Icon = srv.icon;
            const isAlternatingMint = index % 2 === 0;
            const isDimmed = hoveredSlug !== null && hoveredSlug !== srv.slug;

            return (
              <motion.div
                key={srv.slug}
                variants={cardVariants}
                onMouseEnter={() => setHoveredSlug(srv.slug)}
                className={`relative border-r border-b border-white transition-all duration-300 ${
                  isAlternatingMint ? 'bg-[#57D182]/20' : 'bg-[#F4F8F5]'
                } ${isDimmed ? 'lg:opacity-45' : 'opacity-100'}`}
              >
                <Link
                  to={getLocalizedPath(`/services/${srv.slug}`)}
                  className="group h-full flex flex-col justify-between p-7 sm:p-9 lg:p-10 min-h-[370px] sm:min-h-[395px] focus:outline-none"
                >
                  <div className="space-y-5">
                    {/* Top Row: GCC Translucent Mint Pill Badge + Crisp Teal Icon */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 bg-[#57D182]/50 text-[#1A5C3B] px-2.5 py-1 text-[12px] sm:text-[12.5px] font-medium tracking-[0.04em] uppercase leading-tight">
                        <span>{srv.number}</span>
                        <span className="opacity-50">/</span>
                        <span>{srv.badge}</span>
                      </span>

                      <Icon className="w-6 h-6 text-[#019934] stroke-[1.5] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Title — Exact GCC #1A5C3B 24px Medium with Underline on Hover */}
                    <h3 className="font-['Poppins',sans-serif] font-medium text-[21px] sm:text-[23px] lg:text-[24px] text-[#1A5C3B] leading-[1.25] group-hover:underline decoration-[#1A5C3B] decoration-[1.5px] underline-offset-4">
                      {srv.title}
                    </h3>

                    {/* Description — GCC 300-Weight Clean Body Copy */}
                    <p className="font-['Poppins',sans-serif] font-light text-[14.5px] text-[#3C3C3C] leading-[1.65]">
                      {srv.description}
                    </p>

                    {/* Key Capabilities List */}
                    <ul className="pt-1 space-y-2">
                      {srv.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-[13px] font-normal text-[#1A5C3B]/90 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#019934] stroke-[1.75] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Row — Iconic GCC Circular #1A5C3B Arrow Button */}
                  <div className="pt-7 mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-3.5">
                      <span className="w-10 h-10 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                        <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover:translate-x-0.5 transition-transform duration-200" />
                      </span>
                      <span className="text-[12.5px] font-medium uppercase tracking-[0.14em] text-[#1A5C3B] group-hover:text-[#019934] transition-colors duration-200">
                        EXPLORE PRACTICE
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Special 8th Feature Card (2 Columns): Exact GCC Deep-Navy-to-Teal Duotone Consultation Card */}
          <motion.div
            variants={cardVariants}
            onMouseEnter={() => setHoveredSlug('training-card')}
            className={`md:col-span-2 lg:col-span-2 relative border-r border-b border-white overflow-hidden transition-opacity duration-300 ${
              hoveredSlug !== null && hoveredSlug !== 'training-card'
                ? 'lg:opacity-55'
                : 'opacity-100'
            }`}
            style={{
              background: 'linear-gradient(125deg, #1A5C3B 0%, #0F7A3D 52%, #019934 100%)'
            }}
          >
            {/* Subtle White Concentric Arcs Watermark inside Duotone Card */}
            <svg
              aria-hidden="true"
              viewBox="0 0 420 420"
              fill="none"
              className="pointer-events-none absolute -right-14 -bottom-14 w-[280px] sm:w-[340px] h-auto opacity-[0.12]"
            >
              {Array.from({ length: 10 }).map((_, idx) => (
                <circle
                  key={idx}
                  cx="260"
                  cy="260"
                  r={45 + idx * 20}
                  stroke="#ffffff"
                  strokeWidth="1.25"
                />
              ))}
            </svg>

            <div className="relative z-10 h-full p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium tracking-[0.18em] uppercase text-[#57D182]">
                    <span className="inline-block w-7 h-[2px] bg-[#57D182]" aria-hidden="true" />
                    <span>CAPACITY BUILDING &amp; TRAINING</span>
                  </div>

                  <h3 className="font-['Poppins',sans-serif] font-light text-[28px] sm:text-[34px] lg:text-[38px] text-white leading-[1.2] tracking-[-0.01em]">
                    Executive Climate &amp; Carbon Masterclasses
                  </h3>

                  <p className="font-['Poppins',sans-serif] font-light text-[15px] sm:text-[16.5px] text-white/90 leading-[1.65] max-w-xl">
                    Tailored workshops and technical training for corporate leadership, ministry officials, and institutional teams navigating global climate regulations.
                  </p>
                </div>

                {/* Crisp White Line-Art Icon (Exact GCC Consultation Card Icon Placement) */}
                <div className="hidden sm:flex items-center justify-center flex-shrink-0 text-white/85 pt-2">
                  <GraduationCap className="w-16 h-16 lg:w-20 lg:h-20 stroke-[1.1]" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  to={getLocalizedPath('/training')}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-[5px] border border-white/85 bg-transparent hover:bg-white hover:text-[#1A5C3B] text-white font-['Poppins',sans-serif] font-medium text-[14px] sm:text-[15px] tracking-normal transition-all duration-200 group focus:outline-none"
                >
                  <span>View Programs</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover:translate-x-1 transition-transform" />
                </Link>

                <GraduationCap className="sm:hidden w-10 h-10 text-white/80 stroke-[1.25]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
