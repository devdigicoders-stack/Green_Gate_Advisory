import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Workflow, 
  FileText, 
  Layers, 
  BarChart3, 
  Sprout, 
  Landmark, 
  FileCheck 
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const PILLARS_DATA = [
  {
    icon: Sprout,
    title: 'Regulatory Insight',
    desc: 'In-depth understanding of EU CBAM, ETS directives, Article 6 rules, and evolving compliance obligations.'
  },
  {
    icon: Layers,
    title: 'Technical Analysis',
    desc: 'Rigorous greenhouse gas accounting, baseline modelling, additionality screening, and MRV frameworks.'
  },
  {
    icon: Landmark,
    title: 'Climate Finance Structuring',
    desc: 'Translating climate concepts into bankable funding proposals for multilateral facilities and private capital.'
  },
  {
    icon: FileCheck,
    title: 'Implementation Planning',
    desc: 'Actionable workstreams, governance frameworks, and decision-ready documentation built for execution.'
  }
];

export default function WhatWeDo() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-[#FAFCF9] border-b border-[#E5EDE7] scroll-mt-24 relative overflow-hidden">
      <span id="what-we-do" className="absolute -top-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* Two-Column Editorial Composition with Left & Right Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start overflow-hidden">
          
          {/* Left Column: Heading & Descriptive Copy (Enters from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#019935]"></span>
              <span>{t('home.whatWeDo.eyebrow', 'WHAT WE DO')}</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#16221A] tracking-tight leading-[1.18]">
              Integrated Climate & <br />
              <span className="text-[#019935]">Environmental Advisory</span>
            </h2>

            <div className="w-12 h-1 bg-[#019935] rounded-full"></div>

            <p className="text-sm sm:text-base text-[#3C4A42] leading-relaxed font-sans font-normal pt-1">
              {t('home.whatWeDo.lead', 'Climate regulation, carbon markets and sustainable finance are changing how organisations plan, invest and operate. Green Gate Advisory provides integrated climate and environmental advisory services to help clients understand their obligations, assess opportunities and develop credible pathways to implementation.')}
            </p>

            <p className="text-sm sm:text-base text-[#4E5E54] leading-relaxed font-sans font-normal">
              {t('home.whatWeDo.paragraph', 'Our work spans voluntary and compliance carbon markets, carbon project development, emissions trading systems, Carbon Border Adjustment Mechanism (CBAM) readiness, climate finance proposal development, nature-based solutions, environmental policy, greenhouse gas accounting and corporate sustainability. We combine technical analysis, regulatory understanding and project-focused thinking to help clients make informed decisions.')}
            </p>

            <div className="pt-2">
              <Link
                to={getLocalizedPath('/about-us')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#019935] hover:bg-[#02B840] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all group focus:outline-none"
              >
                <span>{t('home.whatWeDo.learnMore', 'Learn more about our team, approach & mission')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Two Strategic Structured Cards (Enters from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-6 space-y-6 sm:space-y-7"
          >
            
            {/* Card 1: PRACTICAL DELIVERY */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-none bg-white border border-[#D8E6DD] p-5 sm:p-7 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08),0_4px_14px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_48px_-8px_rgba(0,0,0,0.14),0_8px_20px_-3px_rgba(0,0,0,0.07)] transition-all duration-300 space-y-4 relative overflow-hidden group"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#019935] via-[#02B840] to-transparent opacity-90" />

              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#019935]">
                <span className="w-1.5 h-3.5 bg-[#019935] rounded-none inline-block" />
                <span>PRACTICAL DELIVERY</span>
              </div>

              <h3 className="font-display font-bold text-base sm:text-[17px] text-[#16221A] leading-snug">
                Connecting regulatory insight, technical analysis, climate finance, and implementation planning.
              </h3>

              <p className="text-xs sm:text-[13px] text-[#55695D] font-sans leading-relaxed">
                We turn ambitious climate priorities into structured, bankable, and measurable outcomes.
              </p>

              {/* 3 Mini Stage Cards: Clean Stack on Phone, 3-Columns on Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                {/* Stage 01 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 sm:p-3.5 rounded-none bg-[#F0F8F3] border border-[#D5EADB] space-y-1.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group/stage cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-none bg-[#D9EFE0] text-[#019935] flex items-center justify-center flex-shrink-0 group-hover/stage:bg-[#019935] group-hover/stage:text-white transition-colors duration-200">
                      <FileText className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#019935] tracking-wider uppercase">
                      STAGE 01
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-[13px] text-[#16221A] leading-snug group-hover/stage:text-[#019935] transition-colors">
                      Policy & Rules
                    </div>
                    <div className="text-[11px] sm:text-[10px] text-[#55695D] font-mono pt-0.5">
                      CBAM • ETS • Article 6
                    </div>
                  </div>
                </motion.div>

                {/* Stage 02 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 sm:p-3.5 rounded-none bg-[#F0F8F3] border border-[#D5EADB] space-y-1.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group/stage cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-none bg-[#D9EFE0] text-[#019935] flex items-center justify-center flex-shrink-0 group-hover/stage:bg-[#019935] group-hover/stage:text-white transition-colors duration-200">
                      <Layers className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#019935] tracking-wider uppercase">
                      STAGE 02
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-[13px] text-[#16221A] leading-snug group-hover/stage:text-[#019935] transition-colors">
                      Scientific MRV
                    </div>
                    <div className="text-[11px] sm:text-[10px] text-[#55695D] font-mono pt-0.5">
                      ISO 14064 • Yields
                    </div>
                  </div>
                </motion.div>

                {/* Stage 03 */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 sm:p-3.5 rounded-none bg-[#FFFDF0] border border-[#F5ECC4] space-y-1.5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group/stage cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-none bg-[#FEF3C7] text-[#D97706] flex items-center justify-center flex-shrink-0 group-hover/stage:bg-[#D97706] group-hover/stage:text-white transition-colors duration-200">
                      <BarChart3 className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#A88015] tracking-wider uppercase">
                      STAGE 03
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-[13px] text-[#16221A] leading-snug group-hover/stage:text-[#B45309] transition-colors">
                      Bankable Action
                    </div>
                    <div className="text-[11px] sm:text-[10px] text-[#8C6D15] font-mono pt-0.5">
                      Capital & Issuance
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2: ADVISORY DELIVERY SCHEMA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-none bg-white border border-[#D8E6DD] p-5 sm:p-7 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08),0_4px_14px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_48px_-8px_rgba(0,0,0,0.14),0_8px_20px_-3px_rgba(0,0,0,0.07)] transition-all duration-300 space-y-4 relative overflow-hidden group"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#019935] to-transparent opacity-90" />

              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 pb-2 border-b border-[#EEF4F0]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#019935] tracking-wider">
                  <Workflow className="w-4 h-4 text-[#019935] group-hover:rotate-12 transition-transform duration-300" />
                  <span>ADVISORY DELIVERY SCHEMA</span>
                </div>
                <span className="text-[10px] font-mono text-[#B45309] font-bold bg-[#FFFBEB] px-2.5 py-0.5 rounded-none border border-[#FDE68A] shadow-2xs">
                  Methodology Traceability
                </span>
              </div>

              {/* Connected Horizontal Stepper */}
              <div className="relative pt-3 pb-1">
                {/* Horizontal Dashed Connecting Line */}
                <div className="absolute top-[20px] sm:top-[22px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-[#CFDFD4] z-0 pointer-events-none" />

                <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center relative z-10">
                  {/* Step 01 */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="flex flex-col items-center space-y-1 group/step cursor-pointer"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-[#D4F2DE] text-[#019935] group-hover/step:bg-[#019935] group-hover/step:text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm border border-[#A7DBB7] transition-colors duration-200"
                    >
                      01
                    </motion.div>
                    <span className="font-bold text-[11px] sm:text-xs text-[#16221A] group-hover/step:text-[#019935] transition-colors pt-1">
                      Policy & Rules
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#55695D] font-mono leading-tight">
                      CBAM • ETS • Art. 6
                    </span>
                  </motion.div>

                  {/* Step 02 */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="flex flex-col items-center space-y-1 group/step cursor-pointer"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-[#D4F2DE] text-[#019935] group-hover/step:bg-[#019935] group-hover/step:text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm border border-[#A7DBB7] transition-colors duration-200"
                    >
                      02
                    </motion.div>
                    <span className="font-bold text-[11px] sm:text-xs text-[#16221A] group-hover/step:text-[#019935] transition-colors pt-1">
                      Scientific MRV
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#55695D] font-mono leading-tight">
                      ISO 14064 • Yields
                    </span>
                  </motion.div>

                  {/* Step 03 */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="flex flex-col items-center space-y-1 group/step cursor-pointer"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-[#FEF3C7] text-[#D97706] group-hover/step:bg-[#D97706] group-hover/step:text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm border border-[#FCD34D] transition-colors duration-200"
                    >
                      03
                    </motion.div>
                    <span className="font-bold text-[11px] sm:text-xs text-[#16221A] group-hover/step:text-[#D97706] transition-colors pt-1">
                      Bankable Action
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#8C6D15] font-mono leading-tight">
                      Capital & Issuance
                    </span>
                  </motion.div>
                </div>
              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* Four Integrated Pillars - Architectural Cards with Left & Right Entrance */}
        <div className="pt-10 sm:pt-12 border-t border-[#E5EDE7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PILLARS_DATA.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const stepNum = String(index + 1).padStart(2, '0');
            const initialMotion = 
              index === 0 
                ? { opacity: 0, x: -50 } 
                : index === 3 
                ? { opacity: 0, x: 50 } 
                : { opacity: 0, y: 35 };

            return (
              <motion.div
                key={pillar.title}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="relative rounded-none bg-white border border-[#DFEAE2] hover:border-[#019935]/50 p-6 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06),0_3px_10px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-8px_rgba(1,153,53,0.15),0_8px_20px_-3px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer overflow-hidden"
              >
                {/* Top Green Accent Indicator on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#019935] to-[#02B840] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Row: Icon + Step Index */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-none bg-[#E8F6ED] text-[#019935] flex items-center justify-center border border-[#CFE8D7] group-hover:bg-[#019935] group-hover:text-white transition-all duration-300 shadow-xs">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#8EA396] group-hover:text-[#019935] transition-colors">
                    {stepNum}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 pt-1">
                  <h3 className="font-display font-bold text-base text-[#16221A] group-hover:text-[#019935] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
