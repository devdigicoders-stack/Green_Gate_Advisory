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
  CheckCircle2,
  Compass
} from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import SectionHeader from '../components/common/SectionHeader';
import ScrollProgressBar from '../components/common/ScrollProgressBar';
import { useLocale } from '../hooks/useLocale';
import { SERVICES_LIST } from '../data/servicesList';
import ServiceCTA from '../components/services/ServiceCTA';

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

      {/* SECTION 1 — HERO (Centered, Premium & Compact Typography) */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-neutral-900 text-white pt-24 pb-12 sm:pt-28 sm:pb-16">
        {/* Background Photography & Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center opacity-85 scale-102"
          >
            <source src="/videos/services-hero.webm" type="video/webm" />
          </video>
          <img
            src="/images/sustainable-industry.jpg"
            alt="Sustainable clean industrial technologies and solar installations"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 scale-102 -z-10"
            loading="eager"
          />
          {/* Neutral contrast gradient overlays */}
          <div className="absolute inset-0 bg-black/65 sm:hidden pointer-events-none" />
          <div className="hidden sm:block absolute inset-0 bg-radial-[circle_at_center] from-black/50 via-black/75 to-black/90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/80 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-xs font-semibold tracking-widest uppercase bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-2xs mx-auto"
          >
            <span className="w-2 h-2 rounded-none bg-[#019935] animate-pulse" />
            <span>Climate & Environmental Advisory Practices</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-white tracking-tight leading-snug sm:leading-tight max-w-3xl mx-auto"
          >
            {t('services.overview.hero.title', 'Our Advisory Practices')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-sans font-normal max-w-2xl mx-auto"
          >
            Specialized advisory support across carbon markets, compliance mechanisms, climate finance, and policy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex pt-5 border-t border-white/15 flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-white/80 font-sans"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#019935] flex-shrink-0" />
              <span>Seven core advisory workstreams</span>
            </div>
            <span className="hidden sm:inline text-white/25">|</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>Connecting policy, science, finance and delivery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — SERVICES INTRODUCTION (Left / Right Directional Entrance) */}
      <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Narrative: Enters from Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none text-xs font-semibold tracking-wider uppercase bg-[#E8F6ED] text-[#019935] border border-[#CFE8D7]">
                <span className="w-1.5 h-1.5 rounded-none bg-[#019935]"></span>
                <span>{t('services.overview.intro.eyebrow', 'Integrated Capability')}</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-forest tracking-tight leading-[1.18]">
                {t('services.overview.intro.heading', 'Navigating Climate Complexity with Technical & Strategic Rigour')}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-charcoal leading-relaxed font-sans font-normal">
                <p className="font-medium text-forest-dark/90">
                  {t('services.overview.intro.p1')}
                </p>
                <p className="text-charcoal-muted">
                  {t('services.overview.intro.p2')}
                </p>
              </div>
            </motion.div>

            {/* Right Tenets Card: Enters from Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="rounded-none bg-[#F7FAF7] border border-[#DCE8E0] p-7 sm:p-8 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] space-y-5">
                <div className="flex items-center gap-3 text-forest font-display font-bold text-lg">
                  <Compass className="w-5 h-5 text-[#019935]" />
                  <span>Advisory Tenets</span>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-charcoal-muted font-sans font-normal">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#019935] flex-shrink-0 mt-0.5" />
                    <span>Rigorous methodology alignment with leading registries and compliance regimes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#019935] flex-shrink-0 mt-0.5" />
                    <span>Project rationale directly linked to funding criteria and investment mandates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#019935] flex-shrink-0 mt-0.5" />
                    <span>Transparent disclosure frameworks free from speculative or unverified claims.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — SEVEN CORE SERVICE CARDS (Staggered Directional Scroll Entrance) */}
      <section className="py-14 sm:py-20 bg-sage/40 border-b border-sand-border/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              badge={t('services.overview.grid.eyebrow', 'Core Advisory Practices')}
              title={t('services.overview.grid.heading', 'Seven Specialized Service Workstreams')}
              subtitle={t('services.overview.grid.subtitle')}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_LIST.map((srv, idx) => {
              const Icon = ICON_MAP[srv.key] || Sparkles;
              const col = idx % 3;
              const initialDirection = col === 0 ? { opacity: 0, x: -45 } : col === 1 ? { opacity: 0, y: 35 } : { opacity: 0, x: 45 };

              return (
                <motion.div
                  key={srv.key}
                  initial={initialDirection}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ 
                    duration: 0.65, 
                    delay: (idx % 3) * 0.12, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-7 sm:p-8 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.05),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_40px_-6px_rgba(1,153,53,0.2),0_6px_16px_-2px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between space-y-6 group cursor-pointer overflow-hidden"
                >
                  {/* Slow-motion background slide up from bottom to top */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#062A17] to-[#0D4429] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none" 
                  />

                  {/* Card Content Container */}
                  <div className="relative z-10 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CFE8D7] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-white group-hover:text-[#019935] group-hover:border-white">
                          <Icon className="w-6 h-6 transition-colors duration-300" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-mono font-bold tracking-widest text-[#019935] bg-[#E8F6ED] px-3 py-1 rounded-none border border-[#CFE8D7] transition-all duration-300 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/30 shadow-2xs">
                          PRACTICE {srv.number}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#16221A] group-hover:text-white transition-colors duration-300 leading-snug">
                          {t(`services.items.${srv.key}.shortTitle`, t(`navigation.servicesMenu.${srv.key}`))}
                        </h3>

                        <p className="text-sm sm:text-base text-[#4E5E54] group-hover:text-white/90 leading-relaxed font-sans font-normal transition-colors duration-300">
                          {t(`services.items.${srv.key}.lead`, '')}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E8EFEA] group-hover:border-white/20">
                      <Link
                        to={getLocalizedPath(`/services/${srv.slug}`)}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider text-[#019935] group-hover:text-[#4ADE80] transition-colors duration-300 group/btn"
                      >
                        <span>{t('services.overview.grid.exploreService', 'Explore Service')}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4 — INTEGRATED ADVISORY APPROACH (Editorial Columns with Motion) */}
      <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              badge={t('services.overview.approach.eyebrow', 'Integrated Perspective')}
              title={t('services.overview.approach.heading', 'Connecting Strategy, Regulation, Finance & Delivery')}
              subtitle={t('services.overview.approach.p1')}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-sand-border pt-2">
            {pillars.map((pil, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`space-y-3 ${idx !== 0 ? 'pt-6 md:pt-0 md:pl-6 lg:pl-8' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#019935] uppercase">
                    Pillar {pil.number || `0${idx + 1}`}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900 leading-snug">
                  {pil.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans font-normal">
                  {pil.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — MODERN ADVISORY ENGAGEMENT CTA */}
      <ServiceCTA />
    </>
  );
}
