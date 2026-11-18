import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function SectorExpertise() {
  const { t } = useTranslation();

  const differentiators = [
    {
      image: '/images/photo-cbam-industry.jpg',
      title: t('sectors.expertise.cards.reg.title', 'Differentiated Regulations'),
      desc: 'EU CBAM, national ETS, and Article 6 rules tailored to sector thresholds.'
    },
    {
      image: '/images/forestry.jpg',
      title: t('sectors.expertise.cards.decarb.title', 'Bespoke Abatement Realities'),
      desc: 'From industrial process engineering to forestry and blue carbon sinks.'
    },
    {
      image: '/images/photo-climate-finance.jpg',
      title: t('sectors.expertise.cards.finance.title', 'Targeted Capital & Finance'),
      desc: 'Aligning projects with GCF, GEF, blended debt, and voluntary carbon markets.'
    }
  ];

  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12">
        {/* Concise Editorial Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
              <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
              <span>{t('sectors.intro.eyebrow', 'Tailored Engagement')}</span>
            </div>
            <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#019934] leading-[1.2]">
              {t('sectors.intro.heading', 'Aligning Sector Realities with Regulation & Investment')}
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#555555] leading-[1.7]">
              {t('sectors.intro.p2', 'Green Gate Advisory unpacks sector-specific carbon pricing, compliance frameworks, and transition risks into bankable workstreams.')}
            </p>
          </div>
        </div>

        {/* 3 Photo-Topped Sector Calibration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {differentiators.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.06 }}
              className="rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] overflow-hidden transition-colors duration-200 flex flex-col group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#E4F6EA]">
                <img
                  src={diff.image}
                  alt={diff.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-medium tracking-[0.14em] uppercase text-[#1A5C3B] bg-white/92 px-2.5 py-0.5">
                  0{idx + 1}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-[#1A5C3B] leading-snug">
                  {diff.title}
                </h3>
                <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.6]">
                  {diff.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
