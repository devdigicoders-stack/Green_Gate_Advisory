import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, BarChart3 } from 'lucide-react';

export default function OurPurpose() {
  const { t } = useTranslation();

  const pillars = [
    {
      num: '01',
      icon: ShieldCheck,
      title: t('about.purpose.pillar1', 'Technically Credible'),
      highlight: 'Audit-Grade Methodologies',
      desc: 'Grounded in validated GHG accounting, rigorous MRV standards, and strict Article 6 international compliance frameworks.'
    },
    {
      num: '02',
      icon: TrendingUp,
      title: t('about.purpose.pillar2', 'Financially Realistic'),
      highlight: 'Bankable Capital Deployment',
      desc: 'Connecting climate mitigation projects directly to commercial viability, institutional funding, and long-term economic resilience.'
    },
    {
      num: '03',
      icon: BarChart3,
      title: t('about.purpose.pillar3', 'Measurable Value'),
      highlight: 'Audited Impact Outcomes',
      desc: 'Delivering real, quantifiable emissions reductions with verified socioeconomic co-benefits and zero speculative claims.'
    }
  ];

  return (
    <section
      id="purpose-mission"
      className="w-full bg-white border-t border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 scroll-mt-24"
    >
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12 sm:space-y-14">
        {/* Core Purpose Header & GCC .boxed-para Framed Statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          <div className="flex flex-col items-center">
            <span className="inline-block w-[70px] h-[2px] bg-[#019934] mb-4" aria-hidden="true" />
            <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {t('about.purpose.eyebrow', 'Our Core Purpose')}
            </span>
          </div>

          {/* GCC Signature .boxed-para Statement Frame (#019934 border + subtle pale mint tint) */}
          <div className="relative px-6 sm:px-12 py-8 sm:py-11 bg-[#57D182]/[0.08] border border-[#019934] rounded-none">
            <blockquote className="font-['Poppins',sans-serif] font-light text-[20px] sm:text-[24px] lg:text-[28px] text-[#1A5C3B] leading-[1.5] max-w-4xl mx-auto">
              {t('about.purpose.text')}
            </blockquote>
          </div>
        </motion.div>

        {/* 3 Anchoring Value Pillars — Exact GCC Block C Flat Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
                className="group bg-white border border-[#e5e7eb] hover:border-[#019934] rounded-[4px] p-7 sm:p-9 transition-colors duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  {/* Card Header Row: Navy Title & Mint Pill Left, Thin Muted Line Icon Right */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2.5">
                      <span className="inline-block text-[11.5px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 px-2.5 py-0.5">
                        PILLAR {pillar.num}
                      </span>
                      <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] sm:text-[22px] text-[#1A5C3B] leading-snug">
                        {pillar.title}
                      </h3>
                    </div>

                    <Icon className="w-8 h-8 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.35] flex-shrink-0 transition-colors duration-200" />
                  </div>

                  {/* GCC Signature Teal Dash Marker Sub-label */}
                  <div className="flex items-center gap-2.5 text-[14px] font-medium text-[#019934]">
                    <span className="inline-block w-4 h-[2px] bg-[#019934] flex-shrink-0" aria-hidden="true" />
                    <span>{pillar.highlight}</span>
                  </div>

                  {/* Description */}
                  <p className="font-['Poppins',sans-serif] font-light text-[14.5px] text-[#666666] leading-[1.7]">
                    {pillar.desc}
                  </p>
                </div>

                {/* Subtle GCC #f5f5f5 Footer Tag */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 bg-[#f5f5f5] text-[#1A5C3B] text-[12.5px] font-normal px-4 py-2 rounded-[3px]">
                    <span>Core Standard</span>
                    <span className="text-[#019934]">&rarr;</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
