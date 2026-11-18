import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function OurPurpose() {
  const { t } = useTranslation();

  const pillars = [
    {
      num: '01',
      image: '/images/photo-climate-policy.jpg',
      title: t('about.purpose.pillar1', 'Technically Credible'),
      desc: 'Grounded in validated GHG accounting, MRV standards, and Article 6 rules.'
    },
    {
      num: '02',
      image: '/images/photo-climate-finance.jpg',
      title: t('about.purpose.pillar2', 'Financially Realistic'),
      desc: 'Connecting mitigation projects directly to commercial viability and green capital.'
    },
    {
      num: '03',
      image: '/images/forestry.jpg',
      title: t('about.purpose.pillar3', 'Measurable Value'),
      desc: 'Delivering audited emissions reductions with lasting environmental co-benefits.'
    }
  ];

  return (
    <section
      id="purpose-mission"
      className="w-full bg-white border-t border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 scroll-mt-24"
    >
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-12">
        {/* Purpose Statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center space-y-5"
        >
          <div className="flex flex-col items-center">
            <span className="inline-block w-[64px] h-[2px] bg-[#019934] mb-3.5" aria-hidden="true" />
            <span className="text-[13px] font-medium tracking-[0.22em] uppercase text-[#0A7A32]">
              {t('about.purpose.eyebrow', 'Our Core Purpose')}
            </span>
          </div>

          <div className="px-6 sm:px-10 py-7 sm:py-9 bg-[#57D182]/[0.08] border border-[#019934] rounded-[4px]">
            <blockquote className="font-['Poppins',sans-serif] font-light text-[18px] sm:text-[22px] lg:text-[25px] text-[#1A5C3B] leading-[1.5]">
              {t('about.purpose.text')}
            </blockquote>
          </div>
        </motion.div>

        {/* 3 Photo-Topped Purpose Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: 'easeOut' }}
              className="group bg-white border border-[#e5e7eb] hover:border-[#019934] rounded-[4px] overflow-hidden transition-colors duration-200 flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#E4F6EA]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/92 text-[#1A5C3B] text-[11px] font-medium tracking-[0.14em] uppercase px-2.5 py-0.5">
                  PILLAR {pillar.num}
                </span>
              </div>

              <div className="p-6 sm:p-7 space-y-2">
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[19px] text-[#1A5C3B] leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.65]">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
