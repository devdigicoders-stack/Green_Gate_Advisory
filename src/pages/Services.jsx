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
                <p className="font-['Poppins',sans-serif] font-medium text-[16px] sm:text-[17.5px] text-[#3C3C3C] leading-[1.7]">
                  {t('services.overview.intro.p1')}
                </p>
                <p className="font-['Poppins',sans-serif] font-light text-[15px] sm:text-[16px] text-[#555555] leading-[1.75]">
                  {t('services.overview.intro.p2')}
                </p>
              </div>
            </motion.div>

            {/* Right Tenets Card — Exact GCC #f7f7f7 Callout with Teal Horizontal Dash Markers (—) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div className="rounded-[4px] bg-[#f7f7f7] border border-[#e5e7eb] border-l-[3px] border-l-[#019934] p-7 sm:p-9 space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] text-[#1A5C3B]">
                    Advisory Tenets
                  </h3>
                  <Compass className="w-7 h-7 text-[#cbd5e1] stroke-[1.35]" />
                </div>

                <ul className="space-y-4 text-[14px] sm:text-[14.5px] font-light text-[#555555] leading-[1.68]">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-4 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0" aria-hidden="true" />
                    <span>Rigorous methodology alignment with leading registries and compliance regimes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-4 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0" aria-hidden="true" />
                    <span>Project rationale directly linked to funding criteria and investment mandates.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-4 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0" aria-hidden="true" />
                    <span>Transparent disclosure frameworks free from speculative or unverified claims.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SEVEN CORE SERVICE CARDS (GCC Flat Hairline Cards with Deep Navy Hover) */}
      <section className="w-full bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
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
              {t('services.overview.grid.eyebrow', 'Core Advisory Practices')}
            </span>
            <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[34px] sm:text-[44px] lg:text-[50px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
              {t('services.overview.grid.heading', 'Seven Specialized Service Workstreams')}
            </h2>
            {t('services.overview.grid.subtitle') && (
              <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[19px] text-[#7f7f7f] leading-[1.5] max-w-3xl">
                {t('services.overview.grid.subtitle')}
              </p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {SERVICES_LIST.map((srv, idx) => {
              const Icon = ICON_MAP[srv.key] || Sparkles;

              return (
                <motion.div
                  key={srv.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: (idx % 3) * 0.08, ease: 'easeOut' }}
                  className="relative rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#1A5C3B] p-7 sm:p-9 transition-colors duration-300 flex flex-col justify-between space-y-6 group overflow-hidden"
                >
                  {/* Top Teal Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] z-20" />

                  {/* Smooth Institutional Deep Navy Hover Fill */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#1A5C3B] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
                  />

                  <div className="relative z-10 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[11.5px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 group-hover:bg-[#019934]/25 group-hover:text-[#57D182] px-3 py-0.5 transition-colors duration-300">
                          PRACTICE {srv.number}
                        </span>
                        <Icon className="w-7 h-7 text-[#cbd5e1] group-hover:text-[#57D182] stroke-[1.35] transition-colors duration-300" />
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-['Poppins',sans-serif] font-semibold text-[21px] sm:text-[23px] text-[#1A5C3B] group-hover:text-white transition-colors duration-300 leading-snug">
                          {t(`services.items.${srv.key}.shortTitle`, t(`navigation.servicesMenu.${srv.key}`))}
                        </h3>

                        <p className="font-['Poppins',sans-serif] font-light text-[14.5px] sm:text-[15px] text-[#555555] group-hover:text-white/85 leading-[1.7] transition-colors duration-300">
                          {t(`services.items.${srv.key}.lead`, '')}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#efefef] group-hover:border-white/15">
                      <Link
                        to={getLocalizedPath(`/services/${srv.slug}`)}
                        className="inline-flex items-center gap-3 group/btn focus:outline-none"
                      >
                        <span className="w-9 h-9 rounded-full bg-[#1A5C3B] group-hover:bg-[#019934] text-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                          <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover/btn:translate-x-0.5 transition-transform" />
                        </span>
                        <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#1A5C3B] group-hover:text-[#57D182] transition-colors duration-300">
                          {t('services.overview.grid.exploreService', 'Explore Service')}
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
