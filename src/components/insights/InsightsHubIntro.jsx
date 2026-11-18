import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const PILLAR_TAGS = [
  'Regulatory Clarity',
  'Carbon Market Architecture',
  'Climate Finance Readiness',
  'Environmental Policy & NDCs',
  'Project Design & MRV',
  'Corporate GHG Accounting'
];

export default function InsightsHubIntro() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Concise Editorial Narrative + 6 Clean Topic Chips */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
              <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
              <span>{t('insights.hubIntro.eyebrow', 'Editorial Foundation')}</span>
            </div>

            <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#1A5C3B] tracking-[-0.01em] leading-[1.2]">
              {t('insights.hubIntro.heading', 'Navigating Climate Complexity Through Practical Analysis')}
            </h2>

            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#555555] leading-[1.72]">
              {t('insights.hubIntro.p1', 'Practical briefings, regulatory intelligence, and technical checklists spanning the Paris Agreement, EU CBAM, ETS, and climate finance.')}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {PILLAR_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[4px] bg-[#F4F8F5] border border-[#e5e7eb] text-[13px] font-medium text-[#1A5C3B]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#019934]" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Editorial Research Photography */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 grid grid-cols-12 gap-3.5"
          >
            <div className="col-span-12 aspect-[16/9] overflow-hidden rounded-[4px] bg-[#E4F6EA]">
              <img
                src="/images/photo-climate-policy.jpg"
                alt="Climate policy research and regulatory intelligence"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="col-span-6 aspect-[16/10] overflow-hidden rounded-[4px] bg-[#E4F6EA]">
              <img
                src="/images/photo-ets-pricing.jpg"
                alt="Emissions trading and renewable energy analytics"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="col-span-6 aspect-[16/10] overflow-hidden rounded-[4px] bg-[#E4F6EA]">
              <img
                src="/images/photo-climate-finance.jpg"
                alt="Sustainable finance frameworks and capital readiness"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
