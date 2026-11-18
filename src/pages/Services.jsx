import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Scale,
  ShieldCheck,
  Landmark,
  Trees,
  FileText,
  BarChart3,
  Compass
} from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import ScrollProgressBar from '../components/common/ScrollProgressBar';
import { useLocale } from '../hooks/useLocale';
import { SERVICES_LIST } from '../data/servicesList';
import ServiceCTA from '../components/services/ServiceCTA';
import sectorVideo from '../assets/sectorpage.mp4';

const SERVICE_IMAGES = {
  carbonMarket: '/images/photo-carbon-markets.jpg',
  etsCarbonPricing: '/images/photo-ets-pricing.jpg',
  cbam: '/images/photo-cbam-industry.jpg',
  climateFinance: '/images/photo-climate-finance.jpg',
  natureBased: '/images/forestry.jpg',
  climatePolicy: '/images/photo-climate-policy.jpg',
  corporateClimate: '/images/photo-corporate-esg.jpg'
};

const ICON_MAP = {
  carbonMarket: Sparkles,
  etsCarbonPricing: Scale,
  cbam: ShieldCheck,
  climateFinance: Landmark,
  natureBased: Trees,
  climatePolicy: FileText,
  corporateClimate: BarChart3
};

export default function Services() {
  const { t } = useTranslation();
  const { getLocalizedPath, locale } = useLocale();

  // Structured Data (JSON-LD) for Services Overview
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t('meta.services.title', 'Climate Advisory Services | Green Gate Advisory'),
    "description": t('meta.services.description', 'Explore carbon market advisory, CBAM and ETS support, climate finance, nature-based solutions, climate policy and corporate climate services.'),
    "url": `https://greengateadvisory.com/${locale}/services`,
    "itemListElement": SERVICES_LIST.map((srv, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": t(`services.items.${srv.key}.title`, srv.slug),
      "url": `https://greengateadvisory.com/${locale}/services/${srv.slug}`
    }))
  };

  const rawPillars = t('services.overview.approach.pillars', { returnObjects: true }) || [];
  const pillars = Array.isArray(rawPillars) ? rawPillars : [];

  return (
    <>
      <ScrollProgressBar />

      <MetaTags
        title={t('meta.services.title', 'Climate Advisory Services | Green Gate Advisory')}
        description={t('meta.services.description', 'Explore carbon market advisory, CBAM and ETS support, climate finance, nature-based solutions, climate policy and corporate climate services.')}
        structuredData={structuredData}
      />

      {/* SECTION 1 — INNER PAGE HERO BANNER (Exact GCC .content-header Architecture) */}
      <section className="relative w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[395px] flex flex-col justify-between items-center overflow-hidden bg-[#1A5C3B] text-white font-['Poppins',sans-serif] text-center select-none">
        {/* Preserved Background Photography & Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center opacity-80 scale-102"
          >
            <source src={sectorVideo} type="video/mp4" />
            <source src="/videos/services-hero.webm" type="video/webm" />
          </video>
          <img
            src="/images/sustainable-industry.jpg"
            alt="Sustainable clean industrial technologies and solar installations"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80 scale-102 -z-10"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#1A5C3B]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/60 pointer-events-none" />
        </div>

        {/* Signature GCC Bottom-Left Concentric Thin White Rings Watermark */}
        <svg
          aria-hidden="true"
          viewBox="0 0 480 480"
          fill="none"
          className="pointer-events-none absolute -left-24 -bottom-28 w-[280px] sm:w-[360px] lg:w-[440px] h-auto z-[1] opacity-30"
        >
          {Array.from({ length: 16 }).map((_, idx) => (
            <circle
              key={idx}
              cx="170"
              cy="310"
              r={45 + idx * 17}
              stroke="#ffffff"
              strokeWidth="1.15"
              strokeOpacity={Math.max(0.18, 0.55 - idx * 0.02)}
            />
          ))}
        </svg>

        <div className="h-6 sm:h-8" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 w-[90%] max-w-4xl mx-auto py-8 sm:py-10 flex flex-col items-center justify-center"
        >
          <span className="inline-block w-[64px] h-[3px] bg-white mb-5" aria-hidden="true" />

          <span className="text-[11.5px] sm:text-[12.5px] font-normal tracking-[0.2em] uppercase text-[#57D182] mb-2">
            Climate &amp; Environmental Advisory Practices
          </span>

          <h1 className="font-['Poppins',sans-serif] font-medium text-[30px] sm:text-[38px] lg:text-[44px] text-white tracking-[-0.01em] leading-[1.2] max-w-3xl mx-auto">
            {t('services.overview.hero.title', 'Our Advisory Practices')}
          </h1>

          <p className="mt-3 text-[14px] sm:text-[15.5px] text-white/85 leading-relaxed font-['Poppins',sans-serif] font-light max-w-2xl mx-auto">
            Specialized advisory support across carbon markets, compliance mechanisms, climate finance, and policy.
          </p>

          <div className="flex mt-5 pt-4 border-t border-white/15 flex-wrap items-center justify-center gap-4 sm:gap-8 text-[12px] sm:text-[13px] text-white/85 font-light">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#57D182] stroke-[1.6] flex-shrink-0" />
              <span>Seven core advisory workstreams</span>
            </div>
            <span className="hidden sm:inline text-white/30">|</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#57D182] stroke-[1.6] flex-shrink-0" />
              <span>Connecting policy, science, finance and delivery</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Centered GCC Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="relative z-10 pb-5 sm:pb-6 flex items-center justify-center gap-2 text-[13px] font-['Poppins',sans-serif] font-normal"
        >
          <Link
            to={getLocalizedPath('/')}
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            {t('navigation.home', 'Home')}
          </Link>
          <span className="text-white/75" aria-hidden="true">&rarr;</span>
          <span className="text-white">
            {t('navigation.ourServices', 'Our services')}
          </span>
        </nav>
      </section>

      {/* SECTION 2 — SERVICES INTRODUCTION (GCC Pure White Editorial Split + Teal Dash List) */}
      <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="w-[90%] max-w-[1680px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-5"
            >
              <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
                <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
                <span>{t('services.overview.intro.eyebrow', 'Integrated Capability')}</span>
              </div>

              <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#019934] tracking-[-0.01em] leading-[1.2]">
                {t('services.overview.intro.heading', 'Navigating Climate Complexity with Technical & Strategic Rigour')}
              </h2>

              <div className="space-y-4">
                <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[17px] text-[#3C3C3C] leading-[1.72]">
                  {t('services.overview.intro.p1')}
                </p>
              </div>
            </motion.div>

            {/* Right Editorial Photo + Compact Tenets */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div className="rounded-[4px] bg-[#f7f7f7] border border-[#e5e7eb] overflow-hidden">
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#E4F6EA]">
                  <img
                    src="/images/photo-advisory-office.jpg"
                    alt="Green Gate Advisory climate and environmental consulting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-7 space-y-3 border-t-2 border-t-[#019934]">
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#1A5C3B]">
                    Advisory Tenets
                  </h3>
                  <ul className="space-y-2.5 text-[13.5px] font-light text-[#555555] leading-[1.6]">
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-3.5 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0" aria-hidden="true" />
                      <span>Methodology alignment with leading registries and compliance regimes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-3.5 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0" aria-hidden="true" />
                      <span>Bankable project structuring linked to global climate funds.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-3.5 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0" aria-hidden="true" />
                      <span>Transparent, audit-ready disclosures with zero speculative claims.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SEVEN CORE SERVICE CARDS WITH BESPOKE COVER PHOTOS */}
      <section className="w-full bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 overflow-hidden">
        <div className="w-[90%] max-w-[1680px] mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
            <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {t('services.overview.grid.eyebrow', 'Core Advisory Practices')}
            </span>
            <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] text-[#1A5C3B] leading-[1.16]">
              {t('services.overview.grid.heading', 'Seven Specialized Service Workstreams')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {SERVICES_LIST.map((srv, idx) => {
              const photo = SERVICE_IMAGES[srv.key] || '/images/photo-carbon-markets.jpg';

              return (
                <motion.div
                  key={srv.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.06, ease: 'easeOut' }}
                  className="rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] transition-colors duration-200 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E4F6EA]">
                      <img
                        src={photo}
                        alt={t(`services.items.${srv.key}.shortTitle`, srv.key)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <span className="absolute top-3.5 left-3.5 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92 px-2.5 py-0.5">
                        PRACTICE {srv.number}
                      </span>
                    </div>

                    <div className="p-6 sm:p-7 space-y-2.5">
                      <h3 className="font-['Poppins',sans-serif] font-semibold text-[19px] sm:text-[21px] text-[#1A5C3B] group-hover:text-[#019934] transition-colors leading-snug">
                        {t(`services.items.${srv.key}.shortTitle`, t(`navigation.servicesMenu.${srv.key}`))}
                      </h3>

                      <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.65] line-clamp-2">
                        {t(`services.items.${srv.key}.lead`, '')}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 pb-6">
                    <div className="pt-4 border-t border-[#efefef]">
                      <Link
                        to={getLocalizedPath(`/services/${srv.slug}`)}
                        className="inline-flex items-center justify-between w-full group/btn focus:outline-none"
                      >
                        <span className="text-[12.5px] font-medium uppercase tracking-[0.12em] text-[#1A5C3B] group-hover/btn:text-[#019934] transition-colors">
                          {t('services.overview.grid.exploreService', 'Explore Service')}
                        </span>
                        <span className="w-9 h-9 rounded-full bg-[#1A5C3B] group-hover/btn:bg-[#019934] text-white flex items-center justify-center transition-colors duration-200">
                          <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover/btn:translate-x-0.5 transition-transform" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — INTEGRATED ADVISORY APPROACH (GCC Pure White Architectural 4-Column Row) */}
      <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="w-[90%] max-w-[1680px] mx-auto space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
            <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {t('services.overview.approach.eyebrow', 'Integrated Perspective')}
            </span>
            <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
              {t('services.overview.approach.heading', 'Connecting Strategy, Regulation, Finance & Delivery')}
            </h2>
            {t('services.overview.approach.p1') && (
              <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
                {t('services.overview.approach.p1')}
              </p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#e5e7eb]">
            {pillars.map((pil, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
                className="bg-white hover:bg-[#57D182]/[0.12] border-r border-b border-[#e5e7eb] p-7 sm:p-8 space-y-4 transition-colors duration-200"
              >
                <div className="font-['Poppins',sans-serif] font-light text-[38px] leading-none text-[#019934]">
                  {pil.number || `0${idx + 1}`}
                </div>

                <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 px-2.5 py-0.5">
                  Pillar {pil.number || `0${idx + 1}`}
                </span>

                <h3 className="font-['Poppins',sans-serif] font-medium text-[18px] sm:text-[19px] text-[#1A5C3B] leading-snug">
                  {pil.title}
                </h3>

                <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.68]">
                  {pil.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — GCC ADVISORY ENGAGEMENT CTA */}
      <ServiceCTA />
    </>
  );
}
