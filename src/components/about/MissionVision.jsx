import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Compass, Eye, ShieldCheck, Sparkles } from 'lucide-react';

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
    <section className="w-full bg-[#f7f7f7] border-y border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24">
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10">
          {/* Mission Card — Exact GCC Block C Document Card Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="group bg-white border border-[#e5e7eb] hover:border-[#019934] rounded-[4px] p-8 sm:p-10 transition-colors duration-200 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              {/* Header Row: Navy Title Left, Thin Muted Grey Line Icon Right */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-block text-[12px] font-medium tracking-[0.18em] uppercase text-[#019934]">
                    {t('about.missionVision.missionEyebrow', 'Our Driving Mandate')}
                  </span>
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[24px] sm:text-[28px] text-[#1A5C3B] leading-snug">
                    {t('about.missionVision.missionTitle', 'Our Mission')}
                  </h3>
                </div>
                <Compass className="w-9 h-9 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.25] flex-shrink-0 transition-colors duration-200" />
              </div>

              <p className="font-['Poppins',sans-serif] font-light text-[15px] sm:text-[16px] text-[#555555] leading-[1.72]">
                {t('about.missionVision.missionText')}
              </p>

              {/* Sub-section with GCC Short Teal Dash Markers (—) */}
              <div className="pt-2 space-y-4">
                <h4 className="text-[12px] font-medium tracking-[0.18em] uppercase text-[#019934]">
                  CORE OPERATIONAL DISCIPLINES
                </h4>
                <div className="space-y-3.5">
                  {missionDisciplines.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="inline-block w-4 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="text-[14.5px] font-medium text-[#1A5C3B] block leading-snug">
                          {item.title}
                        </span>
                        <span className="text-[13.5px] font-light text-[#666666] leading-[1.6] block mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle GCC Soft-Grey Bottom Bar */}
            <div className="bg-[#f5f5f5] px-5 py-3.5 rounded-[3px] flex items-center gap-2.5 text-[13px] font-normal text-[#1A5C3B]">
              <ShieldCheck className="w-4 h-4 text-[#019934] flex-shrink-0 stroke-[1.75]" />
              <span>{t('about.missionVision.missionFooter', 'Rigorous design, preparation, finance, and reporting')}</span>
            </div>
          </motion.div>

          {/* Vision Card — Exact GCC Block C Document Card Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="group bg-white border border-[#e5e7eb] hover:border-[#019934] rounded-[4px] p-8 sm:p-10 transition-colors duration-200 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              {/* Header Row: Navy Title Left, Thin Muted Grey Line Icon Right */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-block text-[12px] font-medium tracking-[0.18em] uppercase text-[#019934]">
                    {t('about.missionVision.visionEyebrow', 'Our Long-Term Horizon')}
                  </span>
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-[24px] sm:text-[28px] text-[#1A5C3B] leading-snug">
                    {t('about.missionVision.visionTitle', 'Our Vision')}
                  </h3>
                </div>
                <Eye className="w-9 h-9 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.25] flex-shrink-0 transition-colors duration-200" />
              </div>

              <p className="font-['Poppins',sans-serif] font-light text-[15px] sm:text-[16px] text-[#555555] leading-[1.72]">
                {t('about.missionVision.visionText')}
              </p>

              {/* Sub-section with GCC Short Teal Dash Markers (—) */}
              <div className="pt-2 space-y-4">
                <h4 className="text-[12px] font-medium tracking-[0.18em] uppercase text-[#019934]">
                  STRATEGIC HORIZON TARGETS
                </h4>
                <div className="space-y-3.5">
                  {visionTargets.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="inline-block w-4 h-[2px] bg-[#019934] mt-2.5 flex-shrink-0" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="text-[14.5px] font-medium text-[#1A5C3B] block leading-snug">
                          {item.title}
                        </span>
                        <span className="text-[13.5px] font-light text-[#666666] leading-[1.6] block mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle GCC Soft-Grey Bottom Bar */}
            <div className="bg-[#f5f5f5] px-5 py-3.5 rounded-[3px] flex items-center gap-2.5 text-[13px] font-normal text-[#1A5C3B]">
              <Sparkles className="w-4 h-4 text-[#019934] flex-shrink-0 stroke-[1.75]" />
              <span>{t('about.missionVision.visionFooter', 'Unlocking opportunities and bankable sustainable projects')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
