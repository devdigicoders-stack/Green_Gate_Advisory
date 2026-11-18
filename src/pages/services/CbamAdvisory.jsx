import { useTranslation } from 'react-i18next';
import MetaTags from '../../components/seo/MetaTags';
import ScrollProgressBar from '../../components/common/ScrollProgressBar';
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
      <div className="flex items-center gap-2.5 text-[#1A5C3B] font-['Poppins',sans-serif] font-semibold text-[18px]">
        <ShieldCheck className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0" />
        <span>{sideCardData.title || 'EU Regulatory Scope Focus'}</span>
      </div>
      <p className="text-[14.5px] text-[#555555] leading-[1.7] font-['Poppins',sans-serif] font-light">
        {sideCardData.desc || 'Targeting covered sectors including cement, iron & steel, aluminium, fertilisers, electricity, and hydrogen, supporting exporters across supply chains.'}
      </p>
      {sideCardData.mandateTitle && (
        <div className="p-4 rounded-[3px] bg-white border border-[#e5e7eb] border-l-[2px] border-l-[#019934] text-[13px] space-y-1.5 font-['Poppins',sans-serif]">
          <div className="flex items-center gap-2 font-medium text-[#1A5C3B] text-[13.5px]">
            <AlertCircle className="w-4 h-4 text-[#019934] stroke-[1.75]" />
            <span>{sideCardData.mandateTitle}</span>
          </div>
          <p className="text-[13px] font-light text-[#666666] leading-[1.65]">
            {sideCardData.mandateDesc}
          </p>
        </div>
      )}
      {sidePoints.length > 0 && (
        <div className="pt-2 flex flex-col gap-3 text-[13.5px] font-normal text-[#1A5C3B]">
          {sidePoints.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="inline-block w-4 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0" aria-hidden="true" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );

  return (
    <>
      <ScrollProgressBar />
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
        videoSrc="/gemini_generated_video_88760edf.mp4"
        fallbackVideoSrc={cbamVideo || '/services-CBAM.mp4'}
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
      <ServiceCTA />
    </>
  );
}
