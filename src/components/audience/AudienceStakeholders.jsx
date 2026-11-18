import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Building2,
  Factory,
  Sparkles,
  Landmark,
  Globe2,
  CheckCircle2
} from 'lucide-react';

const AUDIENCE_QUICK_CHIPS = [
  { id: 'governments', icon: Building2, label: 'Governments & Public Institutions' },
  { id: 'companies', icon: Factory, label: 'Companies, Manufacturers & Exporters' },
  { id: 'developers', icon: Sparkles, label: 'Carbon Project Developers' },
  { id: 'investors', icon: Landmark, label: 'Investors & Financial Institutions' },
  { id: 'international-ngos', icon: Globe2, label: 'International NGOs & Research' }
];

export default function AudienceStakeholders() {
  const { t } = useTranslation();

  const scrollToCategory = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Editorial Narrative Split — Exact GCC Inner Page Teal Heading + Light Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
              <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
              <span>{t('audience.intro.eyebrow', 'Client Diversity')}</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#019934] tracking-[-0.01em] leading-[1.2]">
              {t('audience.intro.heading', 'Tailored Advisory for Distinct Institutional Mandates')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#555555] leading-[1.75]">
              {t('audience.intro.p1', 'Organisations encounter climate imperatives from diverse vantage points. A sovereign government designing compliance carbon pricing requires different analytical frameworks than an exporter calculating embedded emissions for the EU CBAM, or an institutional investor assessing transition risk across an infrastructure portfolio.')}
            </p>
            <p className="font-['Poppins',sans-serif] font-medium text-[15.5px] sm:text-[17px] text-[#1A5C3B] leading-[1.7]">
              {t('audience.intro.p2', "We tailor our technical, regulatory, and finance advisory to each client's specific operational context, institutional maturity, and strategic objectives.")}
            </p>
          </motion.div>
        </div>

        {/* 5 Core Audience Anchor Cards — GCC Shared-Hairline Architectural Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-[#e5e7eb]">
          {AUDIENCE_QUICK_CHIPS.map((chip, idx) => {
            const Icon = chip.icon;

            return (
              <motion.button
                type="button"
                key={chip.id}
                onClick={() => scrollToCategory(chip.id)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.06 }}
                className="relative text-left bg-[#f9fafb] hover:bg-[#57D182]/[0.16] border-r border-b border-[#e5e7eb] p-6 transition-colors duration-200 flex flex-col justify-between space-y-5 group cursor-pointer min-h-[175px] focus:outline-none"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div className="flex items-center justify-between w-full">
                  <span className="font-['Poppins',sans-serif] font-light text-[32px] leading-none text-[#019934]">
                    0{idx + 1}
                  </span>
                  <Icon className="w-6 h-6 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.4] transition-colors duration-200" />
                </div>

                <div className="space-y-1.5">
                  <span className="inline-block text-[10.5px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 px-2 py-0.5">
                    GROUP 0{idx + 1}
                  </span>
                  <span className="font-['Poppins',sans-serif] font-medium text-[14.5px] text-[#1A5C3B] group-hover:underline decoration-[#1A5C3B] underline-offset-4 leading-snug block pt-1">
                    {chip.label}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Advisory Principle Banner — GCC .boxed-para Framed Callout */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex items-start sm:items-center gap-4 p-6 sm:p-7 rounded-[4px] bg-[#57D182]/[0.08] border border-[#019934]/50 border-l-[4px] border-l-[#019934] text-[14px] sm:text-[14.5px] font-light text-[#3C3C3C]"
        >
          <CheckCircle2 className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-[1.7]">
            {t('audience.stakeholders.notice', 'Engagement integrity: Our recommendations reflect client realities without claiming guaranteed financial access, project approvals, or regulatory exemptions.')}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
