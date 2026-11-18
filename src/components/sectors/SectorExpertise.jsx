import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Scale, Compass } from 'lucide-react';

export default function SectorExpertise() {
  const { t } = useTranslation();

  const differentiators = [
    {
      icon: Scale,
      title: t('sectors.expertise.cards.reg.title', 'Differentiated Regulations'),
      desc: t('sectors.expertise.cards.reg.desc', 'Compliance obligations such as EU CBAM, national ETS rules, and Article 6 transfers apply selectively based on industrial thresholds, trade flows, and production technologies.')
    },
    {
      icon: Layers,
      title: t('sectors.expertise.cards.decarb.title', 'Bespoke Abatement Realities'),
      desc: t('sectors.expertise.cards.decarb.desc', 'Heavy industrial sectors require deep process re-engineering, while land use, forestry, and blue carbon projects centre on biological additionality, permanency, and community safeguards.')
    },
    {
      icon: Compass,
      title: t('sectors.expertise.cards.finance.title', 'Targeted Capital & Finance'),
      desc: t('sectors.expertise.cards.finance.desc', 'Commercial debt, concessional climate funds (GCF, GEF), and voluntary carbon markets have distinct due diligence criteria, return hurdles, and monitoring protocols.')
    }
  ];

  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Editorial Introduction — Exact GCC Inner Page Teal Heading + Light Body */}
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
              <span>{t('sectors.intro.eyebrow', 'Tailored Engagement')}</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#019934] tracking-[-0.01em] leading-[1.2]">
              {t('sectors.intro.heading', 'Aligning Sector Realities with Climate Regulation & Investment')}
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
              {t('sectors.intro.p1', 'Every industry operates under distinct commercial pressures, asset life-cycles, emissions profiles, and compliance timelines. A decarbonisation strategy for heavy manufacturing requires fundamentally different technical and economic tools than an ecosystem restoration project or an international climate finance facility.')}
            </p>
            <p className="font-['Poppins',sans-serif] font-medium text-[15.5px] sm:text-[17px] text-[#1A5C3B] leading-[1.7]">
              {t('sectors.intro.p2', 'Green Gate Advisory helps organisations unpack the specific regulatory frameworks, carbon pricing mechanisms, and transition risks impacting their sector—translating overarching climate goals into practical, bankable workstreams.')}
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars of Sector Calibration — Exact GCC Block C Flat Hairline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.08 }}
                className="relative rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] p-7 sm:p-8 transition-colors duration-200 flex flex-col justify-between space-y-5 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-[#57D182]/40 px-2.5 py-0.5">
                      PILLAR 0{idx + 1}
                    </span>
                    <Icon className="w-7 h-7 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.35] transition-colors duration-200" />
                  </div>

                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[19px] sm:text-[20px] text-[#1A5C3B] leading-snug">
                    {diff.title}
                  </h3>

                  <p className="font-['Poppins',sans-serif] font-light text-[14px] sm:text-[14.5px] text-[#555555] leading-[1.7]">
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advisory Boundaries Notice — GCC .boxed-para Framed Callout */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex items-start sm:items-center gap-4 p-6 sm:p-7 rounded-[4px] bg-[#57D182]/[0.08] border border-[#019934]/50 border-l-[4px] border-l-[#019934] text-[14px] sm:text-[14.5px] font-light text-[#3C3C3C]"
        >
          <ShieldCheck className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-[1.7]">
            {t('sectors.expertise.notice', 'Scope discipline: All sectoral guidance is strictly aligned with approved methodologies, verified standards (GHG Protocol, ISO 14064, UNFCCC), and jurisdiction-specific statutory instruments.')}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
