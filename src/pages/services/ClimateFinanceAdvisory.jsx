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
      <div className="flex items-center gap-2.5 text-[#1A5C3B] font-['Poppins',sans-serif] font-semibold text-[18px]">
        <Landmark className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0" />
        <span>{sideCardData.title || 'Multilateral Facility Readiness'}</span>
      </div>
      <p className="text-[14.5px] text-[#555555] leading-[1.7] font-['Poppins',sans-serif] font-light">
        {sideCardData.desc || 'Aligning project concepts with investment criteria of global climate facilities, addressing economic rates of return, concessionality levels, and transformational impact logic.'}
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
        imageSrc="/Gemini_Generated_Image_38v2jk38v2jk38v2.png"

      />

      <ServiceIntroduction
        eyebrow={serviceData.introEyebrow || 'Proposal Development'}
        heading={serviceData.introHeading || 'Structuring Bankable Climate Interventions for International Capital'}
        text={serviceData.intro}
        sideContent={sideCard}
      />

      {/* Funding Landscape Spotlight Section — Exact GCC White Canvas + Shared Hairline Grid */}
      <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 overflow-hidden">
        <div className="w-[90%] max-w-[1680px] mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl space-y-3"
          >
            <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
              <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
              <span>Funding Windows</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] text-[#019934] tracking-[-0.01em] leading-[1.2]">
              {serviceData.fundingHeading || 'Potential Funding Landscape'}
            </h2>
            <p className="font-['Poppins',sans-serif] font-light text-[15px] sm:text-[16px] text-[#555555] leading-[1.7]">
              {serviceData.fundingText}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#e5e7eb]">
            {fundingPillars.map((fp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
                className="p-6 bg-[#f9fafb] hover:bg-[#57D182]/[0.14] border-r border-b border-[#e5e7eb] transition-colors duration-200 flex items-center gap-3.5 text-[14px] sm:text-[15px] font-medium text-[#1A5C3B]"
              >
                <span className="inline-block w-4 h-[2px] bg-[#019934] flex-shrink-0" aria-hidden="true" />
                <span>{fp}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-3.5 p-5 sm:p-6 rounded-[4px] bg-[#57D182]/[0.08] border border-[#019934]/60 text-[13.5px] font-light text-[#3C3C3C]"
          >
            <ShieldAlert className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0 mt-0.5" />
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
