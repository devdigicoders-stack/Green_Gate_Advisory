import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Compass, Eye, ShieldCheck, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function MissionVision() {
  const { t } = useTranslation();

  const missionDisciplines = [
    { title: 'Technical Due Diligence & MRV', desc: 'Audit-ready carbon project baselines, registries, and additionality testing.' },
    { title: 'Bankable Capital Structuring', desc: 'Structuring climate finance facilities and private green capital mobilization.' },
    { title: 'Regulatory Compliance Navigation', desc: 'Pre-emptive compliance strategies for EU CBAM, national ETS, and Article 6.' }
  ];

  const visionTargets = [
    { title: 'Global Decarbonization Leadership', desc: 'Scaling high-integrity nature-based solutions and industrial carbon abatement.' },
    { title: 'De-Risking Emerging Market Assets', desc: 'Unlocking commercial climate capital where transition needs are most critical.' },
    { title: 'Enduring Socioeconomic Value', desc: 'Delivering verified, biodiversity-positive returns and climate resilience for 2030+.' }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAF9] border-b border-[#E3ECE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 overflow-hidden">
          
          {/* Mission Card (Enters from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative rounded-none bg-white border border-[#DCE7DF] p-7 sm:p-9 lg:p-10 shadow-sm hover:shadow-2xl hover:border-[#019935] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between space-y-7 group"
          >
            {/* Top Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-none bg-[#F4FAF5] border border-[#019935]/20 flex items-center justify-center text-[#019935] group-hover:bg-[#019935] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Compass className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500" />
                </div>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#019935] bg-[#019935]/10 px-3 py-1 border border-[#019935]/20 rounded-none">
                  {t('about.missionVision.missionEyebrow', 'Our Driving Mandate')}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0B2816] tracking-tight group-hover:text-[#019935] transition-colors">
                  {t('about.missionVision.missionTitle', 'Our Mission')}
                </h3>
                <p className="text-sm sm:text-base text-[#3A4D42] leading-relaxed font-sans font-normal">
                  {t('about.missionVision.missionText')}
                </p>
              </div>

              {/* Added Rich Data: 3 Execution Disciplines */}
              <div className="pt-2 space-y-2.5">
                <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#019935]">
                  CORE OPERATIONAL DISCIPLINES
                </h4>
                <div className="space-y-2">
                  {missionDisciplines.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-[#F9FBFA] border border-[#E8EFEA] rounded-none group-hover:border-[#019935]/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#019935] flex-shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-[#0B2816] block">{item.title}</span>
                        <span className="text-[11px] text-[#5D7064] leading-relaxed block">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-5 border-t border-[#E8EFEA] flex items-center justify-between text-xs font-semibold text-[#019935]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#019935]" />
                <span>{t('about.missionVision.missionFooter', 'Rigorous design, preparation, finance, and reporting')}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#019935] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>

          {/* Vision Card (Enters from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative rounded-none bg-white border border-[#DCE7DF] p-7 sm:p-9 lg:p-10 shadow-sm hover:shadow-2xl hover:border-[#019935] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between space-y-7 group"
          >
            {/* Top Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-none bg-[#F4FAF5] border border-[#019935]/20 flex items-center justify-center text-[#019935] group-hover:bg-[#019935] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Eye className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#019935] bg-[#019935]/10 px-3 py-1 border border-[#019935]/20 rounded-none">
                  {t('about.missionVision.visionEyebrow', 'Our Long-Term Horizon')}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0B2816] tracking-tight group-hover:text-[#019935] transition-colors">
                  {t('about.missionVision.visionTitle', 'Our Vision')}
                </h3>
                <p className="text-sm sm:text-base text-[#3A4D42] leading-relaxed font-sans font-normal">
                  {t('about.missionVision.visionText')}
                </p>
              </div>

              {/* Added Rich Data: 3 Strategic Horizon Targets */}
              <div className="pt-2 space-y-2.5">
                <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#019935]">
                  STRATEGIC HORIZON TARGETS
                </h4>
                <div className="space-y-2">
                  {visionTargets.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-[#F9FBFA] border border-[#E8EFEA] rounded-none group-hover:border-[#019935]/30 transition-colors">
                      <Sparkles className="w-4 h-4 text-[#019935] flex-shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-[#0B2816] block">{item.title}</span>
                        <span className="text-[11px] text-[#5D7064] leading-relaxed block">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-5 border-t border-[#E8EFEA] flex items-center justify-between text-xs font-semibold text-[#019935]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#019935]" />
                <span>{t('about.missionVision.visionFooter', 'Unlocking opportunities and bankable sustainable projects')}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#019935] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
