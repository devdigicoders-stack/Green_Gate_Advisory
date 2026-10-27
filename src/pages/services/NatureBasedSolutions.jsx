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
import { Trees, CheckCircle2, Waves } from 'lucide-react';
import homepageVideo from '../../assets/homepage.mp4';

export default function NatureBasedSolutions() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  const serviceData = t('services.items.natureBased', { returnObjects: true }) || {};
  const scopeItems = Array.isArray(serviceData.scopeItems) ? serviceData.scopeItems : [];
  const processSteps = Array.isArray(serviceData.processSteps) ? serviceData.processSteps : [];
  const faqs = Array.isArray(serviceData.faqs) ? serviceData.faqs : [];
  const sideCardData = serviceData.sideCard || {};
  const sidePoints = Array.isArray(sideCardData.points) ? sideCardData.points : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('meta.natureBased.title', 'Nature-Based Solutions & Blue Carbon Advisory'),
    "serviceType": "Nature-Based Solutions Advisory",
    "description": t('meta.natureBased.description'),
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
        <Trees className="w-4.5 h-4.5 text-gold-dark" />
        <span>{sideCardData.title || 'Ecosystem Integrity Focus'}</span>
      </div>
      <p className="text-sm sm:text-[14.5px] text-charcoal/85 leading-relaxed font-sans font-normal">
        {sideCardData.desc || 'Targeting terrestrial and coastal ecosystems that integrate climate mitigation, ecological adaptation, biodiversity conservation, and verified community co-benefits.'}
      </p>
      {sidePoints.length > 0 && (
        <div className="pt-2 flex flex-col gap-2.5 text-xs sm:text-[13.5px] font-semibold text-deep-green">
          {sidePoints.map((pt, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {idx === 0 ? (
                <Waves className="w-4 h-4 text-deep-green flex-shrink-0" />
              ) : (
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-deep-green" />
              )}
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
        title={t('meta.natureBased.title', 'Nature-Based Solutions & Blue Carbon Advisory')}
        description={t('meta.natureBased.description', 'Develop nature-based climate initiatives spanning ecosystem restoration, blue carbon, biodiversity, adaptation, resilience and climate finance readiness.')}
        structuredData={structuredData}
      />

      <ServiceHero
        number={serviceData.number || '05'}
        eyebrow={serviceData.eyebrow}
        title={serviceData.title}
        shortTitle={serviceData.shortTitle}
        lead={serviceData.lead}
        quickTags={serviceData.quickTags || ['Blue Carbon', 'Mangrove Restoration', 'Biodiversity Net Gain', 'Community Safeguards']}
        videoSrc={homepageVideo || '/homepage.mp4'}
        trimDuration={null}
      />

      <ServiceIntroduction
        eyebrow={serviceData.introEyebrow || 'Natural Capital & Resilience'}
        heading={serviceData.introHeading || 'Scaling Ecosystem-Based Mitigation, Adaptation & Biodiversity Outcomes'}
        text={serviceData.intro}
        sideContent={sideCard}
      />

      <ServiceScope
        badge="Ecosystem Domains"
        title={serviceData.scopeHeading}
        subtitle={serviceData.scopeSubtitle}
        items={scopeItems}
      />

      <ServiceProcess
        badge="Development Lifecycle"
        title={serviceData.processHeading}
        subtitle={serviceData.processSubtitle}
        steps={processSteps}
      />

      <ServiceFAQ
        badge="Ecosystem FAQ"
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      <RelatedServices currentKey="natureBased" />

      <ServiceCTA
        heading={serviceData.ctaHeading}
        text={serviceData.ctaText}
        primaryBtnText={serviceData.ctaBtn}
        disclaimer={serviceData.disclaimer}
      />
    </>
  );
}
