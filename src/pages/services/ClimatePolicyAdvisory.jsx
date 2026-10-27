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
import { CheckCircle2, Globe2 } from 'lucide-react';
import sectorVideo from '../../assets/sectorpage.mp4';

export default function ClimatePolicyAdvisory() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const serviceData = t('services.items.climatePolicy', { returnObjects: true }) || {};
  const scopeItems = Array.isArray(serviceData.scopeItems) ? serviceData.scopeItems : [];
  const processSteps = Array.isArray(serviceData.processSteps) ? serviceData.processSteps : [];
  const faqs = Array.isArray(serviceData.faqs) ? serviceData.faqs : [];
  const sideCardData = serviceData.sideCard || {};
  const sidePoints = Array.isArray(sideCardData.points) ? sideCardData.points : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('meta.climatePolicy.title', 'Environmental & Climate Policy Advisory | Green Gate Advisory'),
    "serviceType": "Climate Policy Advisory",
    "description": t('meta.climatePolicy.description'),
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
      <div className="flex items-center gap-2 text-forest font-heading font-bold text-base">
        <Globe2 className="w-4.5 h-4.5 text-gold-dark" />
        <span>{sideCardData.title || 'Paris Agreement Architecture'}</span>
      </div>
      <p className="text-sm sm:text-[14.5px] text-charcoal/85 leading-relaxed font-sans font-normal">
        {sideCardData.desc || 'Assisting national ministries and international development partners in designing robust policy instruments, updating NDCs, and building institutional transparency systems.'}
      </p>
      {sidePoints.length > 0 && (
        <div className="pt-2 flex flex-col gap-2.5 text-xs sm:text-[13.5px] font-semibold text-deep-green">
          {sidePoints.map((pt, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-deep-green" />
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
        title={t('meta.climatePolicy.title', 'Environmental & Climate Policy Advisory | Green Gate Advisory')}
        description={t('meta.climatePolicy.description', 'Policy and technical support for NDCs, National Adaptation Plans, climate governance, carbon pricing, MRV and Paris Agreement transparency frameworks.')}
        structuredData={structuredData}
      />

      <ServiceHero
        number={serviceData.number || '06'}
        eyebrow={serviceData.eyebrow}
        title={serviceData.title}
        shortTitle={serviceData.shortTitle}
        lead={serviceData.lead}
        quickTags={serviceData.quickTags || ['NDC & NAP Advisory', 'Paris Agreement ETF', 'MRV Systems', 'Institutional Governance']}
        videoSrc={sectorVideo || '/sectorpage.mp4'}
        trimDuration={null}
      />

      <ServiceIntroduction
        eyebrow={serviceData.introEyebrow || 'Policy Design & Governance'}
        heading={serviceData.introHeading || 'Connecting Multilateral Climate Commitments to Domestic Implementation'}
        text={serviceData.intro}
        sideContent={sideCard}
      />

      <ServiceScope
        badge="Policy Workstreams"
        title={serviceData.scopeHeading}
        subtitle={serviceData.scopeSubtitle}
        items={scopeItems}
      />

      <ServiceProcess
        badge="Formulation Framework"
        title={serviceData.processHeading}
        subtitle={serviceData.processSubtitle}
        steps={processSteps}
      />

      <ServiceFAQ
        badge="Policy FAQ"
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      <RelatedServices currentKey="climatePolicy" />

      <ServiceCTA
        heading={serviceData.ctaHeading}
        text={serviceData.ctaText}
        primaryBtnText={serviceData.ctaBtn}
        disclaimer={serviceData.disclaimer}
      />
    </>
  );
}
