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
import { BarChart3, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CorporateClimateEsg() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const serviceData = t('services.items.corporateClimate', { returnObjects: true }) || {};
  const scopeItems = Array.isArray(serviceData.scopeItems) ? serviceData.scopeItems : [];
  const processSteps = Array.isArray(serviceData.processSteps) ? serviceData.processSteps : [];
  const faqs = Array.isArray(serviceData.faqs) ? serviceData.faqs : [];
  const sideCardData = serviceData.sideCard || {};
  const sidePoints = Array.isArray(sideCardData.points) ? sideCardData.points : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('meta.corporateClimate.title', 'Corporate Climate Advisory, GHG Accounting & ESG'),
    "serviceType": "Corporate Sustainability & GHG Accounting Advisory",
    "description": t('meta.corporateClimate.description'),
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
        <BarChart3 className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0" />
        <span>{sideCardData.title || 'Enterprise Decarbonisation Focus'}</span>
      </div>
      <p className="text-[14.5px] text-[#555555] leading-[1.7] font-['Poppins',sans-serif] font-light">
        {sideCardData.desc || 'Enabling businesses to quantify emissions accurately, identify material climate risks, model capital-efficient abatement measures, and satisfy emerging disclosure standards.'}
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
        title={t('meta.corporateClimate.title', 'Corporate Climate Advisory, GHG Accounting & ESG')}
        description={t('meta.corporateClimate.description', 'Understand corporate emissions and climate risks with support for Scope 1, 2 and 3 inventories, decarbonisation roadmaps, transition planning and ESG reporting readiness.')}
        structuredData={structuredData}
      />

      <ServiceHero
        number={serviceData.number || '07'}
        eyebrow={serviceData.eyebrow}
        title={serviceData.title}
        shortTitle={serviceData.shortTitle}
        lead={serviceData.lead}
        quickTags={serviceData.quickTags || ['Scope 1, 2 & 3', 'Decarbonisation Roadmap', 'ESG Reporting', 'TCFD & ISSB']}
        imageSrc="/images/sustainable-industry.jpg"
      />

      <ServiceIntroduction
        eyebrow={serviceData.introEyebrow || 'Corporate Sustainability & Decarbonisation'}
        heading={serviceData.introHeading || 'Transforming Emissions Accounting into Data-Backed Climate Strategy'}
        text={serviceData.intro}
        sideContent={sideCard}
      />

      <ServiceScope
        badge="Corporate Workstreams"
        title={serviceData.scopeHeading}
        subtitle={serviceData.scopeSubtitle}
        items={scopeItems}
      />

      <ServiceProcess
        badge="Decarbonisation Pathway"
        title={serviceData.processHeading}
        subtitle={serviceData.processSubtitle}
        steps={processSteps}
      />

      <ServiceFAQ
        badge="Corporate FAQ"
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      <RelatedServices currentKey="corporateClimate" />
      <ServiceCTA />
    </>
  );
}
