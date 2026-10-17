import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Landmark 
} from 'lucide-react';
import MetaTags from '../components/seo/MetaTags';
import SectionHeader from '../components/common/SectionHeader';
import PathwayVisualizer from '../components/sections/PathwayVisualizer';
import FAQAccordion from '../components/sections/FAQAccordion';
import ClosingCTA from '../components/sections/ClosingCTA';
import NotFoundPage from './NotFoundPage';
import { useLocale } from '../hooks/useLocale';
import { SERVICES_LIST } from '../data/servicesList';

// FAQ index mapping per service for contextual FAQ display
const SERVICE_FAQ_MAP = {
  'carbon-market-advisory': [0, 3, 5],
  'ets-carbon-pricing-article-6': [0, 2],
  'cbam-advisory': [0, 1],
  'climate-finance-advisory': [0, 4, 5],
  'nature-based-solutions': [0, 3, 5],
  'climate-policy-advisory': [0, 2],
  'corporate-climate-esg': [0, 1, 2]
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const serviceItem = SERVICES_LIST.find((s) => s.slug === slug);

  if (!serviceItem) {
    return <NotFoundPage />;
  }

  const sKey = serviceItem.key;
  const serviceData = t(`services.${sKey}`, { returnObjects: true }) || {};
  const metaData = t(`meta.${sKey}`, { returnObjects: true }) || {};

  const supportPoints = Array.isArray(serviceData.supportPoints) ? serviceData.supportPoints : [];
  const pathwaySteps = Array.isArray(serviceData.pathway) ? serviceData.pathway : [];
  const fundsList = Array.isArray(serviceData.funds) ? serviceData.funds : [];
  const faqIndices = SERVICE_FAQ_MAP[slug] || [0];

  return (
    <div className="space-y-12 sm:space-y-16 py-12 sm:py-16">
      <MetaTags 
        title={metaData.title || serviceData.title}
        description={metaData.description || serviceData.intro}
      />

      {/* 1. BREADCRUMBS & HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-muted mb-8" aria-label="Breadcrumbs">
          <Link to={getLocalizedPath('/')} className="hover:text-forest transition-colors">
            {t('nav.home', 'Home')}
          </Link>
          <span>/</span>
          <Link to={getLocalizedPath('/services')} className="hover:text-forest transition-colors">
            {t('nav.services', 'Services')}
          </Link>
          <span>/</span>
          <span className="text-forest font-semibold truncate max-w-xs sm:max-w-md">
            {serviceData.title || serviceItem.slug}
          </span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-sand-border shadow-subtle space-y-8">
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-gold-dark bg-gold/15 px-2.5 py-1 rounded-md">
                ADVISORY PRACTICE {serviceItem.number}
              </span>
              <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
                {serviceData.tagline || 'Institutional Advisory'}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-tight">
              {serviceData.title}
            </h1>

            <p className="text-base sm:text-xl text-charcoal-muted leading-relaxed font-sans pt-2">
              {serviceData.intro}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link to={getLocalizedPath('/contact')} className="btn-primary">
                <span>{serviceData.cta || t('common.requestConsultation')}</span>
                <ArrowRight className="w-4 h-4 text-gold-light" />
              </Link>
              <Link to={getLocalizedPath('/contact')} className="btn-secondary">
                <span>{t('common.contactOurTeam')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW WE CAN SUPPORT / SCOPE OF WORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <SectionHeader 
            badge="Scope of Advisory"
            title={serviceData.howWeSupportTitle || "How We Can Support"}
            subtitle="Tailored technical deliverables, analysis, and implementation frameworks."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportPoints.map((point, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-sand-border shadow-subtle flex items-start gap-3.5 hover:border-deep-green/30 transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-deep-green/10 text-deep-green flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm text-charcoal font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONDITIONAL PATHWAY OR FUNDING SECTION */}
      {/* Carbon Market Pathway */}
      {slug === 'carbon-market-advisory' && pathwaySteps.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage rounded-3xl p-8 sm:p-14 border border-sand-border space-y-10">
            <PathwayVisualizer
              steps={pathwaySteps}
              title={serviceData.pathwayTitle || "Typical Project Pathway"}
              badge="Carbon Development Cycle"
            />
          </div>
        </section>
      )}

      {/* CBAM Readiness Pathway + Editorial Note */}
      {slug === 'cbam-advisory' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {pathwaySteps.length > 0 && (
            <div className="bg-sage rounded-3xl p-8 sm:p-14 border border-sand-border">
              <PathwayVisualizer
                steps={pathwaySteps}
                title={serviceData.pathwayTitle || "CBAM Readiness Pathway"}
                badge="Compliance & Reporting Roadmap"
              />
            </div>
          )}

          {serviceData.editorialNote && (
            <div className="flex items-start gap-3 p-5 rounded-2xl bg-gold/10 border border-gold/30 text-xs sm:text-sm text-forest font-sans leading-relaxed">
              <ShieldAlert className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
              <p>{serviceData.editorialNote}</p>
            </div>
          )}
        </section>
      )}

      {/* Climate Finance Funding Landscape */}
      {slug === 'climate-finance-advisory' && fundsList.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest text-white rounded-3xl p-8 sm:p-14 shadow-elevated space-y-8">
            <SectionHeader 
              badge="Multilateral Facilities"
              title={serviceData.pathwayTitle || "Potential Funding Pathways"}
              subtitle={serviceData.pathwaysIntro}
              light={true}
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {fundsList.map((fund, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-sand-surface font-medium">
                  <Landmark className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{fund}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. CONTEXTUAL FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion filterIndices={faqIndices} />
      </section>

      {/* 5. CLOSING CTA */}
      <ClosingCTA 
        headline={serviceData.cta || t('home.closingCta.headline')}
        description={serviceData.intro}
        primaryBtnText={serviceData.cta || t('common.requestConsultation')}
      />
    </div>
  );
}
