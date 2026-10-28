import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, CheckCircle2, Award, BarChart3, Scale, Layers } from 'lucide-react';

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
    <section id="who-we-are" className="py-14 sm:py-20 lg:py-24 bg-[#FAFCFA] border-b border-[#E3ECE6] scroll-mt-24 relative overflow-hidden">
      {/* Subtle background architectural grid accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#01993508_1px,transparent_1px),linear-gradient(to_bottom,#01993508_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center overflow-hidden">
          
          {/* Left Column: Heading, Subheading & Narrative (Enters from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-[11px] sm:text-xs font-bold tracking-widest uppercase bg-[#019935]/10 text-[#019935] border border-[#019935]/25 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#019935] flex-shrink-0" />
              <span>{t('about.whoWeAre.eyebrow', 'Who We Are')}</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B2816] tracking-tight leading-[1.2]">
              {t('about.whoWeAre.heading', 'Connecting Strategic Insight, Regulatory Clarity & Practical Execution')}
            </h2>

            {/* Accent divider */}
            <div className="w-12 h-0.5 bg-[#019935]" />

            {/* Narrative paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#3A4D42] leading-relaxed font-sans">
              <p className="font-medium text-[#1A3826] leading-relaxed bg-white/70 p-4 border-l-2 border-[#019935] border border-y-[#E3ECE6] border-r-[#E3ECE6] rounded-none shadow-xs">
                {t('about.whoWeAre.p1')}
              </p>

              <p className="text-[#4E6155] leading-relaxed font-normal">
                {t('about.whoWeAre.p2')}
              </p>
            </div>

            {/* Core Capabilities - Architectural 2x2 Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {capabilities.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <div 
                    key={cap.num}
                    className="group relative bg-white border border-[#E3ECE6] hover:border-[#019935] p-4 rounded-none transition-all duration-300 shadow-xs hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-none bg-[#F4FAF5] border border-[#019935]/20 flex items-center justify-center flex-shrink-0 text-[#019935] group-hover:bg-[#019935] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <h3 className="text-xs sm:text-[13px] font-bold text-[#0B2816] tracking-tight leading-snug group-hover:text-[#019935] transition-colors">
                            {cap.title}
                          </h3>
                          <span className="text-[10px] font-mono text-[#019935]/60 font-semibold">{cap.num}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#5D7064] leading-relaxed font-normal">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                    {/* Hover accent bottom line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                );
              })}
            </div>

          </motion.div>

          {/* Right Column: Visual Frame with Architectural Layering (Enters from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Subtle background border frame offset for layered architectural feel */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border-2 border-[#019935]/30 -z-0 rounded-none pointer-events-none" />

            <div className="relative z-10 bg-white p-2.5 sm:p-3 border border-[#DCE7DF] shadow-lg rounded-none">
              <div className="aspect-[4/3] rounded-none overflow-hidden relative group">
                <img
                  src="/images/sustainable-industry.jpg"
                  alt={t('about.whoWeAre.imageAlt')}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                
                {/* Overlay Card Details */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white bg-black/40 backdrop-blur-sm border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold tracking-wide uppercase text-[#4ADE80] mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#019935] flex-shrink-0" />
                    <span>{t('about.whoWeAre.badgeIntegrity', 'Technical Integrity')}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-white/95 font-sans leading-relaxed">
                    {t('about.whoWeAre.caption')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
