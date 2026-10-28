import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
      <div className="flex items-center gap-2 text-forest font-heading font-bold text-base">
        <Landmark className="w-4.5 h-4.5 text-gold-dark" />
        <span>{sideCardData.title || 'Multilateral Facility Readiness'}</span>
      </div>
      <p className="text-sm sm:text-[14.5px] text-charcoal/85 leading-relaxed font-sans font-normal">
        {sideCardData.desc || 'Aligning project concepts with investment criteria of global climate facilities, addressing economic rates of return, concessionality levels, and transformational impact logic.'}
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
      <ScrollProgressBar />
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
      <section className="py-16 bg-white border-b border-sand-border/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-3"
          >
            <span className="badge-editorial bg-forest/5 text-deep-green border border-forest/10">
              Funding Windows
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest tracking-tight">
              {serviceData.fundingHeading || 'Potential Funding Landscape'}
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
              {serviceData.fundingText}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fundingPillars.map((fp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] hover:shadow-[0_8px_20px_-4px_rgba(1,153,53,0.15)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 text-xs sm:text-sm font-semibold text-forest shadow-2xs group"
              >
                <div className="w-2 h-2 rounded-none bg-[#019935] flex-shrink-0 group-hover:bg-gold transition-colors" />
                <span>{fp}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-3 p-4 rounded-none bg-[#F7FAF7] border border-[#DCE8E0] text-xs text-charcoal-muted font-sans shadow-2xs"
          >
            <ShieldAlert className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
            <p>
              Funding access is subject to country eligibility, accreditation modalities, and funding window operational guidelines.
            </p>
          </motion.div>
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
      <ServiceCTA />
    </>
  );
}
