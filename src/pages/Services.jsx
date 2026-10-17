import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  Landmark, 
  Trees, 
  FileText, 
  BarChart3,
  CheckCircle2,
  Layers,
  Compass
} from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import SectionHeader from '../components/common/SectionHeader';
import { useLocale } from '../hooks/useLocale';
import { SERVICES_LIST } from '../data/servicesList';

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
      <MetaTags
        title={t('meta.services.title', 'Climate Advisory Services | Green Gate Advisory')}
        description={t('meta.services.description', 'Explore carbon market advisory, CBAM and ETS support, climate finance, nature-based solutions, climate policy and corporate climate services.')}
        structuredData={structuredData}
      />

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-forest-dark text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sustainable-industry.jpg"
            alt="Sustainable clean industrial technologies and solar installations"
            className="w-full h-full object-cover object-right sm:object-center opacity-85 scale-102"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/75 via-50% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans text-sand-surface/75">
            <Link 
              to={getLocalizedPath('/')}
              className="hover:text-gold transition-colors focus:outline-none focus:underline"
            >
              {t('services.overview.hero.breadcrumbHome', 'Home')}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sand-surface/40" />
            <span className="text-gold font-medium" aria-current="page">
              {t('services.overview.hero.breadcrumbCurrent', 'Services')}
            </span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-gold-light border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>{t('services.overview.hero.eyebrow', 'Climate & Environmental Advisory')}</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
              {t('services.overview.hero.title', 'Our Climate & Environmental Advisory Services')}
            </h1>

            <p className="text-base sm:text-xl text-sand-surface/90 leading-relaxed font-sans font-light">
              {t('services.overview.hero.lead', 'Green Gate Advisory provides specialized advisory support across carbon markets, compliance mechanisms, climate finance, nature-based solutions and corporate sustainability—helping turn climate priorities into practical, measurable action.')}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-sand-surface/70 font-sans">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Seven core advisory workstreams</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>Connecting policy, science, finance and delivery</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>Zero speculative outcomes or guaranteed credit issuances</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICES INTRODUCTION */}
      <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-forest/5 text-deep-green border border-forest/10">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>{t('services.overview.intro.eyebrow', 'Integrated Capability')}</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest tracking-tight leading-[1.12]">
                {t('services.overview.intro.heading', 'Navigating Climate Complexity with Technical & Strategic Rigour')}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-charcoal leading-relaxed font-sans font-light">
                <p className="font-medium text-forest-dark/90">
                  {t('services.overview.intro.p1')}
                </p>
                <p className="text-charcoal-muted">
                  {t('services.overview.intro.p2')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-sage/50 border border-sand-border p-8 shadow-subtle space-y-5">
                <div className="flex items-center gap-3 text-forest font-display font-bold text-lg">
                  <Compass className="w-5 h-5 text-gold-dark" />
                  <span>Advisory Tenets</span>
                </div>
                
                <ul className="space-y-3 text-xs sm:text-sm text-charcoal-muted font-sans font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0 mt-0.5" />
                    <span>Rigorous methodology alignment with leading registries and compliance regimes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0 mt-0.5" />
                    <span>Project rationale directly linked to funding criteria and investment mandates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0 mt-0.5" />
                    <span>Transparent disclosure frameworks free from speculative or unverified claims.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — SEVEN CORE SERVICE CARDS */}
      <section className="py-14 sm:py-20 bg-sage/40 border-b border-sand-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <SectionHeader
            badge={t('services.overview.grid.eyebrow', 'Core Advisory Practices')}
            title={t('services.overview.grid.heading', 'Seven Specialized Service Workstreams')}
            subtitle={t('services.overview.grid.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((srv) => {
              const Icon = ICON_MAP[srv.key] || Sparkles;
              return (
                <div
                  key={srv.key}
                  className="rounded-3xl bg-white border border-sand-border/90 p-8 shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-deep-green bg-sage px-3 py-1 rounded-full border border-forest/5">
                        PRACTICE {srv.number}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                        {t(`services.items.${srv.key}.shortTitle`, t(`navigation.servicesMenu.${srv.key}`))}
                      </h3>

                      <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light line-clamp-4">
                        {t(`services.items.${srv.key}.lead`, '')}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-sand-border/50">
                    <Link
                      to={getLocalizedPath(`/services/${srv.slug}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green hover:text-forest transition-colors group/btn"
                    >
                      <span>{t('services.overview.grid.exploreService', 'Explore Service')}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4 — INTEGRATED ADVISORY APPROACH */}
      <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <SectionHeader
            badge={t('services.overview.approach.eyebrow', 'Integrated Perspective')}
            title={t('services.overview.approach.heading', 'Connecting Strategy, Regulation, Finance & Delivery')}
            subtitle={t('services.overview.approach.p1')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pil, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-sage/30 border border-sand-border hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-widest text-deep-green bg-sage px-2.5 py-0.5 rounded-full border border-forest/5">
                      PILLAR {pil.number || `0${idx + 1}`}
                    </span>
                    <Layers className="w-4 h-4 text-forest/40 group-hover:text-deep-green transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-base text-forest group-hover:text-deep-green transition-colors">
                    {pil.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light">
                    {pil.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — CONSULTATION CTA */}
      <section className="py-14 sm:py-20 bg-forest-dark text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-deep-green/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-80 h-80 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-gold-light border border-white/15 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>{t('services.overview.cta.eyebrow', 'Strategic Consultation')}</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
            {t('services.overview.cta.heading', "Let's Discuss Your Climate Priorities")}
          </h2>

          <p className="text-base sm:text-lg text-sand-surface/90 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            {t('services.overview.cta.description')}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={getLocalizedPath('/contact')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-forest-dark font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold w-full sm:w-auto"
            >
              <span>{t('services.overview.cta.primaryBtn', 'Request a Consultation')}</span>
              <ArrowRight className="w-4 h-4 ml-1 text-forest-dark" />
            </Link>

            <Link
              to={getLocalizedPath('/contact')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide uppercase border border-white/25 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto"
            >
              <span>{t('services.overview.cta.secondaryBtn', 'Contact Our Team')}</span>
            </Link>
          </div>

          <p className="text-xs text-sand-surface/60 font-sans max-w-2xl mx-auto leading-relaxed pt-4 border-t border-white/10">
            {t('services.overview.cta.disclaimer')}
          </p>
        </div>
      </section>
    </>
  );
}
