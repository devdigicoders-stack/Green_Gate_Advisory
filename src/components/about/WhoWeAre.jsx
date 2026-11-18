import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, BarChart3, Scale, Layers } from 'lucide-react';

export default function WhoWeAre() {
  const { t } = useTranslation();

  const capabilities = [
    { num: '01', icon: Scale, title: t('about.whoWeAre.capability1', 'Regulatory Analysis & Compliance') },
    { num: '02', icon: Layers, title: t('about.whoWeAre.capability2', 'Carbon Project Feasibility & MRV') },
    { num: '03', icon: BarChart3, title: t('about.whoWeAre.capability3', 'Climate Finance Structuring') },
    { num: '04', icon: Award, title: t('about.whoWeAre.capability4', 'Measurable Implementation Plans') }
  ];

  return (
    <section
      id="who-we-are"
      className="w-full bg-white font-['Poppins',sans-serif] py-16 sm:py-20 scroll-mt-24 relative overflow-hidden"
    >
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Concise Narrative + Compact 2x2 Capability Grid */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
                <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
                <span>{t('about.whoWeAre.eyebrow', 'Who We Are')}</span>
              </div>

              <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[36px] lg:text-[40px] text-[#019934] leading-[1.2] tracking-[-0.01em]">
                {t('about.whoWeAre.heading', 'Connecting Regulatory Clarity & Practical Execution')}
              </h2>
            </div>

            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#3C3C3C] leading-[1.72]">
              {t('about.whoWeAre.p1')}
            </p>

            {/* Compact 2x2 Hairline Capability Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#e5e7eb] pt-0">
              {capabilities.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <div
                    key={cap.num}
                    className="group bg-[#f9fafb] hover:bg-[#57D182]/[0.12] border-r border-b border-[#e5e7eb] p-5 transition-colors duration-200 flex items-center gap-3.5"
                  >
                    <IconComponent className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0" />
                    <h3 className="font-['Poppins',sans-serif] font-medium text-[14.5px] text-[#1A5C3B] leading-snug">
                      {cap.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: 2-Photo Editorial Collage */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 grid grid-cols-12 gap-3.5"
          >
            <div className="col-span-12 aspect-[16/9] overflow-hidden rounded-[4px] bg-[#f7f7f7]">
              <img
                src="/images/photo-advisory-office.jpg"
                alt="Green Gate Advisory European sustainable urban district"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="col-span-6 aspect-[16/10] overflow-hidden rounded-[4px] bg-[#f7f7f7]">
              <img
                src="/images/sustainable-industry.jpg"
                alt={t('about.whoWeAre.imageAlt', 'Sustainable industrial transition')}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="col-span-6 aspect-[16/10] overflow-hidden rounded-[4px] bg-[#f7f7f7]">
              <img
                src="/images/photo-corporate-esg.jpg"
                alt="Net-zero corporate climate campus"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
