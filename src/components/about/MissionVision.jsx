import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function MissionVision() {
  const { t } = useTranslation();

  const missionPoints = [
    'Technical Due Diligence & MRV',
    'Bankable Capital Structuring',
    'EU CBAM, ETS & Article 6 Readiness'
  ];

  const visionPoints = [
    'High-Integrity Carbon & Nature Solutions',
    'De-Risking Emerging Market Climate Assets',
    'Enduring Environmental & Economic Value'
  ];

  return (
    <section className="w-full bg-[#f7f7f7] border-y border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20">
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10">
          {/* Mission Card with Editorial Photo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group bg-white border border-[#e5e7eb] hover:border-[#019934] rounded-[4px] overflow-hidden transition-colors duration-200 flex flex-col"
          >
            <div className="aspect-[16/8] w-full overflow-hidden bg-[#E4F6EA]">
              <img
                src="/images/photo-carbon-markets.jpg"
                alt="Our Mission — Clean energy and carbon market solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            <div className="p-7 sm:p-9 space-y-5 flex-1">
              <div className="space-y-1.5">
                <span className="inline-block text-[12px] font-medium tracking-[0.18em] uppercase text-[#019934]">
                  {t('about.missionVision.missionEyebrow', 'Our Driving Mandate')}
                </span>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[24px] sm:text-[26px] text-[#1A5C3B] leading-snug">
                  {t('about.missionVision.missionTitle', 'Our Mission')}
                </h3>
              </div>

              <p className="font-['Poppins',sans-serif] font-light text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.7]">
                {t('about.missionVision.missionText')}
              </p>

              <ul className="pt-2 space-y-2.5 border-t border-[#efefef]">
                {missionPoints.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-[14px] font-medium text-[#1A5C3B]">
                    <span className="inline-block w-4 h-[2px] bg-[#019934] flex-shrink-0" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision Card with Editorial Photo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="group bg-white border border-[#e5e7eb] hover:border-[#019934] rounded-[4px] overflow-hidden transition-colors duration-200 flex flex-col"
          >
            <div className="aspect-[16/8] w-full overflow-hidden bg-[#E4F6EA]">
              <img
                src="/images/blue-carbon.jpg"
                alt="Our Vision — Resilient ecosystems and sustainable future"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            <div className="p-7 sm:p-9 space-y-5 flex-1">
              <div className="space-y-1.5">
                <span className="inline-block text-[12px] font-medium tracking-[0.18em] uppercase text-[#019934]">
                  {t('about.missionVision.visionEyebrow', 'Our Long-Term Horizon')}
                </span>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[24px] sm:text-[26px] text-[#1A5C3B] leading-snug">
                  {t('about.missionVision.visionTitle', 'Our Vision')}
                </h3>
              </div>

              <p className="font-['Poppins',sans-serif] font-light text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.7]">
                {t('about.missionVision.visionText')}
              </p>

              <ul className="pt-2 space-y-2.5 border-t border-[#efefef]">
                {visionPoints.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-[14px] font-medium text-[#1A5C3B]">
                    <span className="inline-block w-4 h-[2px] bg-[#019934] flex-shrink-0" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
