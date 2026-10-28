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

// Staggered reveal on scroll
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function OurServices() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section 
      id="services" 
      aria-label="Our Core Advisory Services"
      className="py-16 sm:py-24 bg-[#F4F8F5] relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#019935]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#019935]/10 text-[#019935] border border-[#019935]/25 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 bg-[#019935] animate-pulse"></span>
            <span>{t('home.coreServices.eyebrow', 'OUR ADVISORY PRACTICES')}</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1E2522] tracking-tight leading-snug">
            {t('home.coreServices.heading', 'Comprehensive Climate & Carbon Services')}
          </h2>

          <p className="text-sm sm:text-base text-[#4A5550] font-sans leading-relaxed">
            {t('home.coreServices.subtitle', 'Connecting deep technical rigor, regulatory foresight, and institutional capital to accelerate measurable climate action.')}
          </p>
        </motion.div>

        {/* 7 Services Grid with 180° Flip Card Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {SERVICES_DATA.map((srv) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.slug}
                variants={cardVariants}
                className="flip-card min-h-[360px] sm:min-h-[375px] w-full"
              >
                <div className="flip-card-inner shadow-[0_8px_25px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.16)]">
                  
                  {/* FRONT FACE (White, Sharp, Clean) */}
                  <div className="flip-card-front bg-white border border-[#D5E1D8] p-5 sm:p-6 flex flex-col justify-between rounded-none overflow-hidden relative">
                    {/* Top Green Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935]" />

                    <div className="space-y-4">
                      {/* Number Badge + Icon */}
                      <div className="flex items-center justify-between">
                        <span className="w-7 h-7 bg-[#E8F5ED] text-[#019935] font-mono text-xs font-bold flex items-center justify-center rounded-none">
                          {srv.number}
                        </span>

                        <div className="w-10 h-10 bg-[#F0F6F2] text-[#019935] flex items-center justify-center rounded-none border border-[#D5E4D9]">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                      </div>

                      {/* Badge & Title */}
                      <div className="space-y-1.5">
                        <span className="text-[10.5px] font-mono font-bold tracking-wider uppercase text-[#019935]">
                          {srv.badge}
                        </span>
                        <h3 className="font-display font-bold text-lg sm:text-[19px] text-[#1E2522] leading-snug">
                          {srv.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[13px] text-[#4E5C54] leading-relaxed font-sans font-normal">
                        {srv.description}
                      </p>

                      {/* Key Capabilities Pills */}
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {srv.features.map((feature) => (
                          <span 
                            key={feature}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2C3831] bg-[#F3F8F4] px-2 py-0.5 rounded-none border border-[#DFEAE2]"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-[#019935] flex-shrink-0" />
                            <span>{feature}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Front Footer Action Link */}
                    <div className="pt-4 mt-4 border-t border-[#E8EFEA] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#019935]">
                      <span>EXPLORE PRACTICE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* BACK FACE (Rotated 180deg: Deep Forest Green Scope View) */}
                  <div className="flip-card-back absolute inset-0 bg-[#0C1F16] text-white border-2 border-[#019935] p-5 sm:p-6 flex flex-col justify-between rounded-none shadow-2xl">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                        <span className="font-mono text-xs font-bold text-[#02B840]">
                          PRACTICE {srv.number}
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70 bg-white/10 px-2 py-0.5">
                          ADVISORY SCOPE
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-lg text-white">
                        {srv.title}
                      </h4>

                      <div className="space-y-2 pt-1">
                        <p className="text-xs text-white/80 leading-relaxed font-sans">
                          Core institutional engagement deliverables:
                        </p>
                        <ul className="space-y-1.5 text-xs text-white/95 font-sans">
                          {srv.features.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#02B840] flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3">
                      <Link
                        to={getLocalizedPath(`/services/${srv.slug}`)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#019935] hover:bg-[#02B840] text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-none shadow-md"
                      >
                        <span>Open Full Practice</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

          {/* Special 8th Feature Card: Executive Training & Masterclasses */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -6, 
              transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } 
            }}
            className="md:col-span-2 lg:col-span-2 group relative rounded-none bg-gradient-to-br from-[#019935] via-[#01842E] to-[#016A25] text-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-[0_8px_25px_rgba(1,153,53,0.22)] hover:shadow-[0_16px_35px_rgba(1,153,53,0.3)] overflow-hidden border border-white/20"
          >
            <div className="relative z-10 space-y-2.5 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider uppercase bg-white/15 text-white border border-white/25 rounded-none">
                <GraduationCap className="w-3.5 h-3.5 text-white" />
                <span>CAPACITY BUILDING & TRAINING</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                Executive Climate & Carbon Masterclasses
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
                Tailored workshops and technical training for corporate leadership, ministry officials, and institutional teams navigating global climate regulations.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <Link
                to={getLocalizedPath('/training')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-white text-[#019935] hover:bg-neutral-100 font-bold text-xs tracking-wide uppercase transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none"
              >
                <span>View Programs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#019935]" />
              </Link>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
