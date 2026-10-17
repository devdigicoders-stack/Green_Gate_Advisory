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
import { ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import cbamVideo from '../../assets/services-CBAM.mp4';

export default function CbamAdvisory() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const serviceData = t('services.items.cbam', { returnObjects: true }) || {};
  const scopeItems = Array.isArray(serviceData.scopeItems) ? serviceData.scopeItems : [];
  const processSteps = Array.isArray(serviceData.processSteps) ? serviceData.processSteps : [];
  const faqs = Array.isArray(serviceData.faqs) ? serviceData.faqs : [];
  const sideCardData = serviceData.sideCard || {};
  const sidePoints = Array.isArray(sideCardData.points) ? sideCardData.points : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('meta.cbam.title', 'CBAM Advisory & EU Carbon Border Adjustment Mechanism Readiness'),
    "serviceType": "CBAM Advisory",
    "description": t('meta.cbam.description'),
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
        <ShieldCheck className="w-4 h-4 text-gold-dark" />
        <span>{sideCardData.title || 'EU Regulatory Scope Focus'}</span>
      </div>
      <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
        {sideCardData.desc || 'Targeting covered sectors including cement, iron & steel, aluminium, fertilisers, electricity, and hydrogen, supporting exporters across supply chains.'}
      </p>
      {sideCardData.mandateTitle && (
        <div className="p-3 rounded-xl bg-white border border-sand-border text-xs text-charcoal-muted space-y-1.5 font-sans">
          <div className="flex items-center gap-1.5 font-semibold text-forest">
            <AlertCircle className="w-3.5 h-3.5 text-gold-dark" />
            <span>{sideCardData.mandateTitle}</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            {sideCardData.mandateDesc}
          </p>
        </div>
      )}
      {sidePoints.length > 0 && (
        <div className="pt-2 flex flex-col gap-1.5 text-xs font-semibold text-deep-green">
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
        title={t('meta.cbam.title', 'CBAM Advisory & EU Carbon Border Adjustment Mechanism Readiness')}
        description={t('meta.cbam.description', 'Prepare for CBAM-related requirements with product screening, embedded emissions data, supplier engagement, reporting processes and carbon-cost risk assessment.')}
        structuredData={structuredData}
      />

      <ServiceHero
        number={serviceData.number || '03'}
        eyebrow={serviceData.eyebrow}
        title={serviceData.title}
        shortTitle={serviceData.shortTitle}
        lead={serviceData.lead}
        quickTags={serviceData.quickTags || ['EU CBAM', 'Embedded Emissions', 'HS Code Screening', 'Supplier Verification']}
        videoSrc={cbamVideo || '/services-CBAM.mp4'}
        trimDuration={null}
      />

      <ServiceIntroduction
        eyebrow={serviceData.introEyebrow || 'Mandatory EU Compliance'}
        heading={serviceData.introHeading || 'Preparing Exporters and Importers for Border Carbon Adjustments'}
        text={serviceData.intro}
        sideContent={sideCard}
      />

      <ServiceScope
        badge="Compliance Workstreams"
        title={serviceData.scopeHeading}
        subtitle={serviceData.scopeSubtitle}
        items={scopeItems}
      />

      <ServiceProcess
        badge="Readiness Pathway"
        title={serviceData.processHeading}
        subtitle={serviceData.processSubtitle}
        steps={processSteps}
      />

      <ServiceFAQ
        badge="Regulatory FAQ"
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      <RelatedServices currentKey="cbam" />

      <ServiceCTA
        heading={serviceData.ctaHeading}
        text={serviceData.ctaText}
        primaryBtnText={serviceData.ctaBtn}
        disclaimer={serviceData.disclaimer}
      />
    </>
  );
}
