import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  Landmark, 
  Trees, 
  FileText, 
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import SectionHeader from '../components/common/SectionHeader';
import PathwayVisualizer from '../components/sections/PathwayVisualizer';
import FAQAccordion from '../components/sections/FAQAccordion';
import ClosingCTA from '../components/sections/ClosingCTA';
import { useLocale } from '../hooks/useLocale';
import { SERVICES_LIST } from '../data/servicesList';

const SERVICE_ICONS = {
  Sparkles,
  Scale,
  ShieldCheck,
  Landmark,
  Trees,
  FileText,
  BarChart3
};

export default function HomePage() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  // Structured Data for Organization / ProfessionalService
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Green Gate Advisory",
    "url": "https://greengateadvisory.com",
    "description": t('meta.home.description'),
    "knowsAbout": [
      "Carbon Markets",
      "EU Carbon Border Adjustment Mechanism (CBAM)",
      "Emissions Trading Systems (ETS)",
      "Climate Finance Advisory",
      "Nature-Based Solutions",
      "Environmental Policy",
      "Greenhouse Gas Accounting"
    ],
    "serviceType": "Climate & Environmental Advisory"
  };

  const rawSteps = t('home.carbonSupport.steps', { returnObjects: true }) || [];
  const carbonSteps = Array.isArray(rawSteps) ? rawSteps : [];

  const rawFunds = t('home.climateFinance.funds', { returnObjects: true }) || [];
  const fundsList = Array.isArray(rawFunds) ? rawFunds : [];

  const rawPillars = t('home.whyUs.pillars', { returnObjects: true }) || [];
  const pillarsList = Array.isArray(rawPillars) ? rawPillars : [];

  const rawFeatured = t('home.featuredSolutions.items', { returnObjects: true }) || [];
  const featuredList = Array.isArray(rawFeatured) ? rawFeatured : [];

  return (
    <div className="space-y-24 sm:space-y-32">
      <MetaTags
        title={t('meta.home.title', 'Green Gate Advisory | Carbon Markets, CBAM & Climate Finance')}
        description={t('meta.home.description', 'Expert climate and environmental advisory across carbon markets, CBAM, ETS, climate finance, nature-based solutions and corporate sustainability.')}
        structuredData={structuredData}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-white via-sage to-transparent -z-10" />
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-deep-green/5 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-forest/5 text-deep-green border border-forest/10">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span>{t('home.hero.badge', 'Climate, Carbon Markets & Sustainable Finance')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-forest tracking-tight leading-[1.12]">
              {t('home.hero.headline', 'Turning Climate Complexity into Strategic Opportunity')}
            </h1>

            {/* Subheadline directly from PDF */}
            <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed max-w-3xl mx-auto font-sans">
              {t('home.hero.subheadline', 'Green Gate Advisory supports governments, companies, exporters and project developers with carbon market strategy, CBAM and ETS readiness, climate finance, nature-based solutions and environmental policy—helping turn climate priorities into practical, measurable action.')}
            </p>

            {/* Primary Calls to Action directly from PDF */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link to={getLocalizedPath('/services')} className="btn-primary">
                <span>{t('common.exploreServices', 'Explore Our Services')}</span>
                <ArrowRight className="w-4 h-4 text-gold-light" />
              </Link>
              <Link to={getLocalizedPath('/contact')} className="btn-secondary">
                <span>{t('common.requestConsultation', 'Request a Consultation')}</span>
              </Link>
              <Link to={getLocalizedPath('/services/cbam-advisory')} className="btn-secondary">
                <span>{t('common.discussCbam', 'Discuss Your CBAM Exposure')}</span>
              </Link>
              <Link to={getLocalizedPath('/services/carbon-market-advisory')} className="btn-secondary">
                <span>{t('common.developCarbonProject', 'Develop a Carbon Project')}</span>
              </Link>
            </div>

            {/* Compliance Guarantee Disclaimer Badge */}
            <div className="pt-2">
              <p className="text-xs text-charcoal-muted/80 max-w-2xl mx-auto">
                Independent technical, regulatory and project advisory. Non-guaranteed funding and issuance disclaimer applies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION: WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-sand-border shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="badge-editorial bg-deep-green/10 text-deep-green border border-deep-green/20">
              {t('home.whatWeDo.badge', 'Introduction')}
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-forest tracking-tight leading-tight">
              {t('home.whatWeDo.title', 'What We Do')}
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full"></div>
            <p className="text-sm sm:text-base text-forest font-medium leading-relaxed pt-2">
              {t('home.whatWeDo.lead')}
            </p>
          </div>

          <div className="lg:col-span-7 bg-sage p-6 sm:p-8 rounded-2xl border border-sand-border/80 text-charcoal-muted text-sm sm:text-base leading-relaxed space-y-4 font-sans">
            <p>{t('home.whatWeDo.body')}</p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-deep-green">
              <span className="px-3 py-1 bg-white rounded-lg border border-sand-border">Voluntary & Compliance Markets</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-sand-border">EU CBAM & ETS Readiness</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-sand-border">Climate Finance Documentation</span>
              <span className="px-3 py-1 bg-white rounded-lg border border-sand-border">Article 6 & MRV Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ADVISORY SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge={t('home.coreServices.badge', 'Capabilities')}
          title={t('home.coreServices.title', 'Our Core Advisory Services')}
          subtitle={t('home.coreServices.subtitle', 'Integrated technical, financial, and regulatory expertise spanning global compliance and project mechanisms.')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((srv) => {
            const IconComponent = SERVICE_ICONS[srv.iconName] || Sparkles;
            return (
              <div 
                key={srv.key}
                className="bg-white rounded-3xl p-7 flex flex-col justify-between group shadow-premium hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-100" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-forest text-gold flex items-center justify-center shadow-xs transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                      {srv.number}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {t(`services.${srv.key}.title`, srv.slug)}
                  </h3>

                  <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-3">
                    {t(`services.${srv.key}.intro`, '')}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-sand-border/70">
                  <Link
                    to={getLocalizedPath(`/services/${srv.slug}`)}
                    className="link-editorial text-sm flex items-center justify-between w-full"
                  >
                    <span>{t('common.viewDetails', 'View Details')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. END-TO-END CARBON MARKET SUPPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-sand-border shadow-subtle space-y-10">
          <SectionHeader
            badge={t('home.carbonSupport.badge', 'Project Lifecycle')}
            title={t('home.carbonSupport.title', 'End-to-End Carbon Market Support')}
            lead={t('home.carbonSupport.description')}
            align="center"
          />

          <PathwayVisualizer
            steps={carbonSteps}
            title={t('home.carbonSupport.pathwayTitle', 'Our Typical Project Pathway')}
            badge="Methodology to Commercialisation"
          />

          <div className="text-center pt-4">
            <Link to={getLocalizedPath('/services/carbon-market-advisory')} className="btn-primary">
              <span>{t('common.developCarbonProject', 'Develop a Carbon Project')}</span>
              <ArrowRight className="w-4 h-4 text-gold-light" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CLIMATE FINANCE: FROM CONCEPT TO FUNDABLE PROPOSAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest rounded-3xl p-8 sm:p-14 text-white shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-editorial bg-white/10 text-gold-light border border-white/15">
                {t('home.climateFinance.badge', 'Capital & Proposals')}
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                {t('home.climateFinance.title', 'Climate Finance: From Concept to Fundable Proposal')}
              </h2>
              <p className="text-sand-surface/90 text-sm sm:text-base leading-relaxed font-sans">
                {t('home.climateFinance.description')}
              </p>

              <div className="pt-2">
                <Link to={getLocalizedPath('/services/climate-finance-advisory')} className="btn-gold">
                  <span>{t('common.discussClimateFunding', 'Discuss Climate Project Funding')}</span>
                  <ArrowRight className="w-4 h-4 text-forest-dark" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-forest-dark/80 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gold-light flex items-center gap-2">
                <Landmark className="w-4 h-4 text-gold" />
                <span>{t('home.climateFinance.landscapeTitle', 'Potential Funding Landscape')}</span>
              </h3>
              <p className="text-xs text-sand-surface/70">
                {t('home.climateFinance.landscapeDesc', 'Assessed according to project eligibility and programme rules:')}
              </p>
              <ul className="space-y-2.5 text-sm text-sand-surface">
                {fundsList.map((fund, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{fund}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge={t('home.whoWeServe.badge', 'Client Segments')}
          title={t('home.whoWeServe.title', 'Who We Serve')}
          subtitle={t('home.whoWeServe.subtitle', 'Tailored advisory for governments, exporters, companies, project developers, investors and institutions.')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-sand-border shadow-subtle space-y-3">
            <h3 className="font-heading font-bold text-base text-forest">Governments and Public Institutions</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Support for climate policy, carbon pricing, Article 6 readiness, MRV systems, adaptation planning and climate finance.
            </p>
          </div>
          <div className="p-7 rounded-2xl bg-white border border-sand-border shadow-subtle space-y-3">
            <h3 className="font-heading font-bold text-base text-forest">Companies and Exporters</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Assessing CBAM, ETS, carbon pricing, emissions data, supply chain engagement, and sustainability requirements.
            </p>
          </div>
          <div className="p-7 rounded-2xl bg-white border border-sand-border shadow-subtle space-y-3">
            <h3 className="font-heading font-bold text-base text-forest">Carbon Project Developers</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Feasibility support, methodology screening, PDD drafting, MRV design and carbon credit commercialisation.
            </p>
          </div>
          <div className="p-7 rounded-2xl bg-white border border-sand-border shadow-subtle space-y-3">
            <h3 className="font-heading font-bold text-base text-forest">Investors and Financial Institutions</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Evaluating climate-related investment opportunities, due diligence, and reviewing bankable project pipelines.
            </p>
          </div>
          <div className="p-7 rounded-2xl bg-white border border-sand-border shadow-subtle space-y-3 md:col-span-2 lg:col-span-2">
            <h3 className="font-heading font-bold text-base text-forest">International Organisations, NGOs & Research</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Technical advisory for programme design, multilateral proposal development, policy evaluation, and capacity building.
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link to={getLocalizedPath('/who-we-serve')} className="link-editorial">
            <span>Explore all client segment details</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* 7. WHY GREEN GATE ADVISORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage rounded-3xl p-8 sm:p-14 border border-sand-border space-y-12">
          <SectionHeader
            badge={t('home.whyUs.badge', 'Our Differentiation')}
            title={t('home.whyUs.title', 'Why Green Gate Advisory')}
            subtitle={t('home.whyUs.subtitle', 'Connecting policy insight, technical analysis, finance preparation, and on-the-ground delivery.')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillarsList.map((pillar, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-sand-border/80 shadow-subtle space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-deep-green/10 text-deep-green flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-base text-forest">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURED SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader
          badge={t('home.featuredSolutions.badge', 'Structured Packages')}
          title={t('home.featuredSolutions.title', 'Featured Solutions')}
          subtitle={t('home.featuredSolutions.subtitle', 'High-priority advisory workstreams addressing immediate regulatory deadlines and project readiness.')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredList.map((solution, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-white border border-sand-border flex items-center gap-3.5 hover:border-deep-green/30 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold-dark flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="font-heading font-semibold text-sm text-forest leading-snug">
                {solution}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </section>

      {/* 10. CLOSING CONSULTATION CTA */}
      <ClosingCTA />

    </div>
  );
}
