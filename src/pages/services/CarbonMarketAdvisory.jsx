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
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import servicecarbonVideo from '../../assets/servicecarbonpage.mp4';

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
      <div className="flex items-center gap-2.5 text-[#1A5C3B] font-['Poppins',sans-serif] font-semibold text-[18px]">
        <ShieldAlert className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0" />
        <span>{sideCardData.title || 'Technical Integrity Standard'}</span>
      </div>
      <p className="text-[14.5px] text-[#555555] leading-[1.7] font-['Poppins',sans-serif] font-light">
        {sideCardData.desc || 'Advisory support connects methodology screening, baseline additionality, and PDD drafting with independent validation and verification bodies (VVBs) and recognized standards.'}
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
        videoSrc="/gemini_generated_video_4d04b602.mp4"
        fallbackVideoSrc="/hero-canopy-video.webm"
        trimDuration={null}
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
      <ServiceCTA />
    </>
  );
}
