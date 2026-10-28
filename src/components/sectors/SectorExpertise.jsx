import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Scale, Compass } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

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
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5EDE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* Editorial Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-3.5"
          >
            <span className="inline-block px-3 py-1 rounded-none text-xs font-mono font-bold tracking-widest uppercase bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5]">
              {t('sectors.intro.eyebrow', 'Tailored Engagement')}
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16221A] tracking-tight leading-snug">
              {t('sectors.intro.heading', 'Aligning Sector Realities with Climate Regulation & Investment')}
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4 text-[#4E5E54] font-sans text-sm sm:text-base leading-relaxed"
          >
            <p>
              {t('sectors.intro.p1', 'Every industry operates under distinct commercial pressures, asset life-cycles, emissions profiles, and compliance timelines. A decarbonisation strategy for heavy manufacturing requires fundamentally different technical and economic tools than an ecosystem restoration project or an international climate finance facility.')}
            </p>
            <p className="text-[#16221A] font-medium">
              {t('sectors.intro.p2', 'Green Gate Advisory helps organisations unpack the specific regulatory frameworks, carbon pricing mechanisms, and transition risks impacting their sector—translating overarching climate goals into practical, bankable workstreams.')}
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars of Sector Calibration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 pt-2">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            const initialMotion = 
              idx === 0 ? { opacity: 0, x: -45 } :
              idx === 1 ? { opacity: 0, y: 35 } :
              { opacity: 0, x: 45 };

            return (
              <motion.div
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-6 sm:p-7 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(1,153,53,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer overflow-hidden min-h-[220px]"
              >
                {/* Top Green Accent Bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-[#019935] group-hover:text-white group-hover:border-[#019935]">
                      <Icon className="w-5 h-5 transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#019935] uppercase tracking-wider bg-[#E8F6ED] px-2 py-0.5 rounded-none border border-[#CDE8D5]">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#16221A] group-hover:text-[#019935] transition-colors leading-snug">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advisory Boundaries Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-start sm:items-center gap-3 p-5 sm:p-6 rounded-none bg-white border border-[#DCE8E0] border-l-4 border-l-[#019935] text-xs sm:text-sm text-[#4E5E54] font-sans shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)]"
        >
          <ShieldCheck className="w-5 h-5 text-[#019935] flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-relaxed">
            {t('sectors.expertise.notice', 'Scope discipline: All sectoral guidance is strictly aligned with approved methodologies, verified standards (GHG Protocol, ISO 14064, UNFCCC), and jurisdiction-specific statutory instruments.')}
          </span>
        </motion.div>

      </div>
    </section>
  );
}
