import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function ContactIntroduction() {
  const { t } = useTranslation();

  const rawAreas = t('contact.intro.areas', { returnObjects: true }) || [];
  const areas = Array.isArray(rawAreas) ? rawAreas : [];

  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Concise Consultation Scope + Compact 8-Area Chips */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
                <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
                <span>{t('contact.intro.eyebrow', 'Consultation Scope')}</span>
              </div>

              <h2 className="font-['Poppins',sans-serif] font-light text-[30px] sm:text-[38px] lg:text-[42px] text-[#1A5C3B] leading-[1.18]">
                {t('contact.intro.heading', 'Structured Discussion Across Core Climate Areas')}
              </h2>
            </div>

            {/* Compact 2-Column Discussion Topics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {areas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-[4px] bg-[#F4F8F5] border border-[#e5e7eb] hover:border-[#019934] transition-colors"
                >
                  <span className="text-[12px] font-semibold text-[#019934]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-['Poppins',sans-serif] font-medium text-[14px] text-[#1A5C3B] leading-snug">
                    {area.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Concise Scope Note */}
            <div className="flex items-start gap-3 p-4 rounded-[4px] bg-[#57D182]/12 border border-[#019934]/30 border-l-[3px] border-l-[#019934] text-[13px] text-[#3C3C3C] font-light leading-[1.6]">
              <AlertCircle className="w-4 h-4 text-[#019934] flex-shrink-0 mt-0.5" />
              <span>
                {t('contact.intro.notice', 'All initial discussions are confidential and focused on technical feasibility and regulatory scoping.')}
              </span>
            </div>
          </motion.div>

          {/* Right: Crisp Barcelona Advisory Office & Consultation Photography */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 grid grid-cols-12 gap-3.5"
          >
            <div className="col-span-12 aspect-[16/10] overflow-hidden rounded-[4px] bg-[#E4F6EA]">
              <img
                src="/images/photo-advisory-office.jpg"
                alt="Barcelona headquarters and European climate advisory district"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="col-span-6 aspect-[16/10] overflow-hidden rounded-[4px] bg-[#E4F6EA]">
              <img
                src="/images/photo-executive-training.jpg"
                alt="Executive climate consultation room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="col-span-6 aspect-[16/10] overflow-hidden rounded-[4px] bg-[#E4F6EA]">
              <img
                src="/images/photo-climate-finance.jpg"
                alt="Sustainable finance advisory consultation"
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
