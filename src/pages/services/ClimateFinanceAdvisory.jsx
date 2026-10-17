import { useTranslation } from 'react-i18next';
import MetaTags from '../../components/seo/MetaTags';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceIntroduction from '../../components/services/ServiceIntroduction';
import ServiceScope from '../../components/services/ServiceScope';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedServices from '../../components/services/RelatedServices';
import ServiceCTA from '../../components/services/ServiceCTA';
import { useLocale } from '../../hooks/useLocale';
import { Landmark, CheckCircle2, ShieldAlert } from 'lucide-react';
import climateFinanceVideo from '../../assets/service-climate.mp4';

export default function ClimateFinanceAdvisory() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const serviceData = t('services.items.climateFinance', { returnObjects: true }) || {};
  const scopeItems = Array.isArray(serviceData.scopeItems) ? serviceData.scopeItems : [];
  const processSteps = Array.isArray(serviceData.processSteps) ? serviceData.processSteps : [];
  const fundingPillars = Array.isArray(serviceData.fundingPillars) ? serviceData.fundingPillars : [];
  const faqs = Array.isArray(serviceData.faqs) ? serviceData.faqs : [];
  const sideCardData = serviceData.sideCard || {};
  const sidePoints = Array.isArray(sideCardData.points) ? sideCardData.points : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('meta.climateFinance.title', 'Climate Finance Advisory & Funding Proposal Development'),
    "serviceType": "Climate Finance Advisory",
    "description": t('meta.climateFinance.description'),
    "provider": {
      "@type": "ProfessionalService",
      "name": "Green Gate Advisory",
      "url": `https://greengateadvisory.com/${locale}`
    },
    "areaServed": "Global",
    "inLanguage": locale
  };

  const sideCard = (
    <>
      <div className="flex items-center gap-2 text-forest font-heading font-bold text-sm">
        <Landmark className="w-4 h-4 text-gold-dark" />
        <span>{sideCardData.title || 'Multilateral Facility Readiness'}</span>
      </div>
      <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
        {sideCardData.desc || 'Aligning project concepts with investment criteria of global climate facilities, addressing economic rates of return, concessionality levels, and transformational impact logic.'}
      </p>
      {sidePoints.length > 0 && (
        <div className="pt-2 flex flex-col gap-2 text-xs font-semibold text-deep-green">
          {sidePoints.map((pt, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );

  return (
    <>
      <MetaTags
        title={t('meta.climateFinance.title', 'Climate Finance Advisory & Funding Proposal Development')}
        description={t('meta.climateFinance.description', 'Prepare climate project concepts and funding proposals with support for climate rationale, theory of change, safeguards, budgets, monitoring and implementation planning.')}
        structuredData={structuredData}
      />

      <ServiceHero
        number={serviceData.number || '04'}
        eyebrow={serviceData.eyebrow}
        title={serviceData.title}
        shortTitle={serviceData.shortTitle}
        lead={serviceData.lead}
        quickTags={serviceData.quickTags || ['GCF & GEF', 'Adaptation Fund', 'Blended Finance', 'Theory of Change']}
        videoSrc={climateFinanceVideo || '/service-climate.mp4'}
        trimDuration={null}
      />

      <ServiceIntroduction
        eyebrow={serviceData.introEyebrow || 'Proposal Development'}
        heading={serviceData.introHeading || 'Structuring Bankable Climate Interventions for International Capital'}
        text={serviceData.intro}
        sideContent={sideCard}
      />

      {/* Funding Landscape Spotlight Section */}
      <section className="py-16 bg-white border-b border-sand-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
              Funding Windows
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest tracking-tight">
              {serviceData.fundingHeading || 'Potential Funding Landscape'}
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
              {serviceData.fundingText}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fundingPillars.map((fp, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-sage/50 border border-sand-border flex items-center gap-3 text-xs sm:text-sm font-semibold text-forest shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <span>{fp}</span>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-sage border border-sand-border text-xs text-charcoal-muted font-sans">
            <ShieldAlert className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
            <p>
              Funding access is subject to country eligibility, accreditation modalities, and funding window operational guidelines.
            </p>
          </div>
        </div>
      </section>

      <ServiceScope
        badge="Advisory Workstreams"
        title={serviceData.scopeHeading}
        subtitle={serviceData.scopeSubtitle}
        items={scopeItems}
      />

      <ServiceProcess
        badge="Proposal Cycle"
        title={serviceData.processHeading}
        subtitle={serviceData.processSubtitle}
        steps={processSteps}
      />

      <ServiceFAQ
        badge="Funding FAQ"
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      <RelatedServices currentKey="climateFinance" />

      <ServiceCTA
        heading={serviceData.ctaHeading}
        text={serviceData.ctaText}
        primaryBtnText={serviceData.ctaBtn}
        disclaimer={serviceData.disclaimer}
      />
    </>
  );
}
