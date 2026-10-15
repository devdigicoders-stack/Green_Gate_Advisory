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
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function CarbonMarketAdvisory() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const serviceData = t('services.items.carbonMarket', { returnObjects: true }) || {};
  const scopeItems = Array.isArray(serviceData.scopeItems) ? serviceData.scopeItems : [];
  const processSteps = Array.isArray(serviceData.processSteps) ? serviceData.processSteps : [];
  const faqs = Array.isArray(serviceData.faqs) ? serviceData.faqs : [];
  const sideCardData = serviceData.sideCard || {};
  const sidePoints = Array.isArray(sideCardData.points) ? sideCardData.points : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('meta.carbonMarket.title', 'Carbon Market Advisory & Carbon Credit Project Development'),
    "serviceType": "Carbon Market Advisory",
    "description": t('meta.carbonMarket.description'),
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
        <ShieldAlert className="w-4 h-4 text-gold-dark" />
        <span>{sideCardData.title || 'Technical Integrity Standard'}</span>
      </div>
      <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
        {sideCardData.desc || 'Advisory support connects methodology screening, baseline additionality, and PDD drafting with independent validation and verification bodies (VVBs) and recognized standards.'}
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
        title={t('meta.carbonMarket.title', 'Carbon Market Advisory & Carbon Credit Project Development')}
        description={t('meta.carbonMarket.description', 'Assess carbon project opportunities and navigate feasibility, methodology selection, project documentation, MRV, validation, registration and carbon credit commercialisation.')}
        structuredData={structuredData}
      />

      <ServiceHero
        number={serviceData.number || '01'}
        eyebrow={serviceData.eyebrow}
        title={serviceData.title}
        shortTitle={serviceData.shortTitle}
        lead={serviceData.lead}
        quickTags={serviceData.quickTags || ['Voluntary Carbon Market', 'Article 6', 'MRV Systems', 'Registry Guidance']}
      />

      <ServiceIntroduction
        eyebrow={serviceData.introEyebrow || 'Market Overview'}
        heading={serviceData.introHeading || 'Navigating Carbon Project Development from Feasibility to Commercialisation'}
        text={serviceData.intro}
        sideContent={sideCard}
      />

      <ServiceScope
        badge="Technical Workstreams"
        title={serviceData.scopeHeading}
        subtitle={serviceData.scopeSubtitle}
        items={scopeItems}
      />

      <ServiceProcess
        badge="Project Pathway"
        title={serviceData.processHeading}
        subtitle={serviceData.processSubtitle}
        steps={processSteps}
      />

      <ServiceFAQ
        badge="Advisory FAQ"
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      <RelatedServices currentKey="carbonMarket" />

      <ServiceCTA
        heading={serviceData.ctaHeading}
        text={serviceData.ctaText}
        primaryBtnText={serviceData.ctaBtn}
        disclaimer={serviceData.disclaimer}
      />
    </>
  );
}
