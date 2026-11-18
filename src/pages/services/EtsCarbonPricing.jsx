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
import { Scale, CheckCircle2 } from 'lucide-react';
import serviceEtsVideo from '../../assets/service-ets.mp4';

export default function EtsCarbonPricing() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const serviceData = t('services.items.ets', { returnObjects: true }) || {};
  const scopeItems = Array.isArray(serviceData.scopeItems) ? serviceData.scopeItems : [];
  const processSteps = Array.isArray(serviceData.processSteps) ? serviceData.processSteps : [];
  const faqs = Array.isArray(serviceData.faqs) ? serviceData.faqs : [];
  const sideCardData = serviceData.sideCard || {};
  const sidePoints = Array.isArray(sideCardData.points) ? sideCardData.points : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('meta.ets.title', 'ETS & Carbon Pricing Advisory | Green Gate Advisory'),
    "serviceType": "Emissions Trading & Carbon Pricing Advisory",
    "description": t('meta.ets.description'),
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
        <Scale className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0" />
        <span>{sideCardData.title || 'Market Compliance Dynamics'}</span>
      </div>
      <p className="text-[14.5px] text-[#555555] leading-[1.7] font-['Poppins',sans-serif] font-light">
        {sideCardData.desc || 'Compliance carbon markets require rigorous alignment with allowance allocation caps, surrender timelines, price stability mechanisms, and cross-border adjustments.'}
      </p>
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
        title={t('meta.ets.title', 'ETS & Carbon Pricing Advisory | Green Gate Advisory')}
        description={t('meta.ets.description', 'Explore emissions trading system readiness, carbon pricing policy, compliance analysis and Article 6 advisory for public and private sector organisations.')}
        structuredData={structuredData}
      />

      <ServiceHero
        number={serviceData.number || '02'}
        eyebrow={serviceData.eyebrow}
        title={serviceData.title}
        shortTitle={serviceData.shortTitle}
        lead={serviceData.lead}
        quickTags={serviceData.quickTags || ['Emissions Trading Systems', 'Carbon Pricing', 'Article 6 ITMO', 'Allowance Allocation']}
        videoSrc="/gemini_generated_video_a6711606.mp4"
        fallbackVideoSrc={serviceEtsVideo || '/service-ets.mp4'}
        trimDuration={null}
      />

      <ServiceIntroduction
        eyebrow={serviceData.introEyebrow || 'Regulatory Architecture'}
        heading={serviceData.introHeading || 'Structuring Robust Compliance Frameworks & Carbon Pricing Strategies'}
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
        badge="Architecture Pathway"
        title={serviceData.processHeading}
        subtitle={serviceData.processSubtitle}
        steps={processSteps}
      />

      <ServiceFAQ
        badge="Technical FAQ"
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      <RelatedServices currentKey="etsCarbonPricing" />
      <ServiceCTA />
    </>
  );
}
