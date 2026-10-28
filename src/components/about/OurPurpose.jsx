import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, TrendingUp, BarChart3, CheckCircle2 } from 'lucide-react';

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
    <section id="purpose-mission" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E3ECE6] scroll-mt-24 relative overflow-hidden">
      {/* Background architectural pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0199350a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-14">
        
        {/* Core Purpose Header & Statement with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-[11px] sm:text-xs font-bold tracking-widest uppercase bg-[#019935]/10 text-[#019935] border border-[#019935]/25 shadow-xs">
            <Target className="w-3.5 h-3.5 text-[#019935] flex-shrink-0" />
            <span>{t('about.purpose.eyebrow', 'Our Core Purpose')}</span>
          </div>

          {/* Statement Quote Frame */}
          <div className="relative p-6 sm:p-10 bg-[#FAFCFA] border border-[#E3ECE6] rounded-none shadow-sm">
            {/* Architectural decorative quotation marks */}
            <span className="absolute top-2 left-4 text-6xl text-[#019935]/15 font-serif select-none pointer-events-none leading-none">&ldquo;</span>
            <span className="absolute bottom-2 right-4 text-6xl text-[#019935]/15 font-serif select-none pointer-events-none leading-none">&rdquo;</span>

            <blockquote className="relative z-10 font-display font-semibold text-lg sm:text-2xl lg:text-[26px] text-[#0B2816] leading-relaxed tracking-tight max-w-3xl mx-auto">
              {t('about.purpose.text')}
            </blockquote>
          </div>
        </motion.div>

        {/* 3 Anchoring Value Pillars - Left, Bottom & Right Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const initialMotion = 
              idx === 0 
                ? { opacity: 0, x: -60 } 
                : idx === 2 
                ? { opacity: 0, x: 60 } 
                : { opacity: 0, y: 50 };

            return (
              <motion.div 
                key={pillar.num}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: idx * 0.12 }}
                className="group relative bg-[#FAFCFA] hover:bg-white border border-[#E3ECE6] hover:border-[#019935] p-6 sm:p-7 rounded-none transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                {/* Top: Icon + Number */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-none bg-white border border-[#019935]/25 text-[#019935] flex items-center justify-center flex-shrink-0 group-hover:bg-[#019935] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-[#019935]/70 bg-[#019935]/5 px-2.5 py-1 border border-[#019935]/15 rounded-none">
                      PILLAR {pillar.num}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2816] group-hover:text-[#019935] transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#019935]">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{pillar.highlight}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4E6155] leading-relaxed font-sans font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom interactive green bar */}
                <div className="pt-6 mt-6 border-t border-[#E3ECE6] flex items-center justify-between text-[11px] font-semibold text-[#5D7064] uppercase tracking-wider">
                  <span>Core Standard</span>
                  <span className="text-[#019935] font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
