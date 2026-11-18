import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, BarChart3, Scale, Layers } from 'lucide-react';

export default function WhoWeAre() {
  const { t } = useTranslation();

  const capabilities = [
    {
      num: '01',
      icon: Scale,
      title: t('about.whoWeAre.capability1', 'Regulatory Analysis & Compliance'),
      desc: 'Navigating evolving climate disclosure, carbon tariffs, and national compliance frameworks.'
    },
    {
      num: '02',
      icon: Layers,
      title: t('about.whoWeAre.capability2', 'Carbon Project Feasibility & MRV'),
      desc: 'Robust baseline studies, monitoring protocols, and registry compliance.'
    },
    {
      num: '03',
      icon: BarChart3,
      title: t('about.whoWeAre.capability3', 'Climate Finance Structuring'),
      desc: 'Connecting mitigation assets with institutional capital and green funds.'
    },
    {
      num: '04',
      icon: Award,
      title: t('about.whoWeAre.capability4', 'Measurable Implementation Plans'),
      desc: 'Turning commitments into audited emissions reductions and bankable milestones.'
    }
  ];

  return (
    <section
      id="who-we-are"
      className="w-full bg-white font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 scroll-mt-24 relative overflow-hidden"
    >
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-10 sm:space-y-12">
        {/* Top Full-Width Teal Intro Block (Exact GCC About Block A Style) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="space-y-5 max-w-5xl"
        >
          <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
            <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
            <span>{t('about.whoWeAre.eyebrow', 'Who We Are')}</span>
          </div>

          <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[36px] lg:text-[42px] text-[#019934] leading-[1.2] tracking-[-0.01em]">
            {t('about.whoWeAre.heading', 'Connecting Strategic Insight, Regulatory Clarity & Practical Execution')}
          </h2>

          {/* Full-Width Medium-Weight Lead Summary Paragraph */}
          <p className="font-['Poppins',sans-serif] font-medium text-[16.5px] sm:text-[18px] text-[#3C3C3C] leading-[1.68]">
            {t('about.whoWeAre.p1')}
          </p>
        </motion.div>

        {/* Asymmetric 2-Column Editorial Split (~62% Left Text & Sector Grid / ~38% Right Clean Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Body Copy + GCC Bordered Hairline 2x2 Capability Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#3C3C3C] leading-[1.75]">
              {t('about.whoWeAre.p2')}
            </p>

            {/* GCC-Style Shared-Hairline Bordered 2x2 Grid (#f9fafb cells, 1px #e5e7eb lines) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#e5e7eb]">
              {capabilities.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <div
                    key={cap.num}
                    className="group bg-[#f9fafb] hover:bg-[#57D182]/[0.12] border-r border-b border-[#e5e7eb] p-6 transition-colors duration-200 flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <IconComponent className="w-5 h-5 text-[#019934] stroke-[1.6] flex-shrink-0" />
                      <span className="text-[12px] font-medium text-[#1A5C3B]/45 group-hover:text-[#019934] transition-colors">
                        {cap.num}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-['Poppins',sans-serif] font-medium text-[15.5px] text-[#1A5C3B] leading-snug">
                        {cap.title}
                      </h3>
                      <p className="font-['Poppins',sans-serif] font-light text-[13.5px] text-[#666666] leading-[1.6]">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Clean Sharp-Cornered Editorial Photograph (Exact GCC About Block A Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-0"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-none bg-[#f7f7f7]">
              <img
                src="/images/sustainable-industry.jpg"
                alt={t('about.whoWeAre.imageAlt')}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
            </div>

            {/* Clean Architectural Caption Panel below Photo */}
            <div className="bg-[#f7f7f7] border border-t-0 border-[#e5e7eb] border-l-[3px] border-l-[#019934] p-5 sm:p-6 space-y-2">
              <div className="flex items-center gap-2 text-[12px] font-medium tracking-[0.14em] uppercase text-[#019934]">
                <ShieldCheck className="w-4 h-4 stroke-[1.75] flex-shrink-0" />
                <span>{t('about.whoWeAre.badgeIntegrity', 'Technical Integrity')}</span>
              </div>
              <p className="font-['Poppins',sans-serif] font-light text-[13.5px] sm:text-[14px] text-[#444444] leading-[1.65]">
                {t('about.whoWeAre.caption')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
