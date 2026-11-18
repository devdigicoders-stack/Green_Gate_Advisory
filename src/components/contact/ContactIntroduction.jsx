import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Scale,
  Landmark,
  Trees,
  FileText,
  BarChart3,
  GraduationCap,
  AlertCircle
} from 'lucide-react';

const AREA_ICONS = [
  Sparkles,
  ShieldCheck,
  Scale,
  Landmark,
  Trees,
  FileText,
  BarChart3,
  GraduationCap
];

export default function ContactIntroduction() {
  const { t } = useTranslation();

  const rawAreas = t('contact.intro.areas', { returnObjects: true }) || [];
  const areas = Array.isArray(rawAreas) ? rawAreas : [];

  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
        {/* Centered GCC Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />

          <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
            {t('contact.intro.eyebrow', 'Consultation Scope')}
          </span>

          <h2 className="mt-3 font-['Poppins',sans-serif] font-light text-[32px] sm:text-[42px] lg:text-[48px] text-[#1A5C3B] leading-[1.16] tracking-[-0.01em]">
            {t('contact.intro.heading', 'Structured Discussion Across Eight Specialized Areas')}
          </h2>

          <p className="mt-4 font-['Poppins',sans-serif] font-light text-[16px] sm:text-[18.5px] text-[#7f7f7f] leading-[1.55] max-w-3xl">
            {t('contact.intro.lead', 'Every advisory engagement begins with clarifying your operating context, statutory obligations, data availability, and strategic milestones.')}
          </p>
        </motion.div>

        {/* 8 Discussion Areas Grid — GCC Flat White Hairline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {areas.map((area, idx) => {
            const Icon = AREA_ICONS[idx] || Sparkles;
            const num = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 4) * 0.06 }}
                className="relative p-6 sm:p-7 rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] transition-colors duration-200 flex flex-col justify-start space-y-4 group overflow-hidden"
              >
                {/* Signature 2px GCC Teal Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

                <div className="flex items-center justify-between">
                  <span className="font-['Poppins',sans-serif] font-light text-[28px] leading-none text-[#019934]">
                    {num}
                  </span>
                  <Icon className="w-6 h-6 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.4] transition-colors duration-200" />
                </div>

                <h3 className="font-['Poppins',sans-serif] font-semibold text-[17px] sm:text-[18px] text-[#1A5C3B] leading-snug">
                  {area.title}
                </h3>

                <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#555555] leading-[1.68]">
                  {area.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Consultation Scope Discipline Notice — GCC Pale Mint Architectural Callout */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 p-5 sm:p-6 rounded-[4px] bg-[#57D182]/12 border border-[#019934]/30 border-l-[3px] border-l-[#019934] text-[13.5px] sm:text-[14px] text-[#3C3C3C] font-['Poppins',sans-serif] font-light max-w-5xl mx-auto"
        >
          <AlertCircle className="w-5 h-5 text-[#019934] flex-shrink-0 mt-0.5 sm:mt-0 stroke-[1.8]" />
          <span className="leading-[1.7]">
            {t('contact.intro.notice', 'Consultation discipline: All discussions are strictly preliminary and focused on scoping technical feasibility and regulatory requirements. We do not make speculative funding promises or guaranteed outcomes.')}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
