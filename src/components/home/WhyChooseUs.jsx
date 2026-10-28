import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  FileText, 
  TrendingUp, 
  Compass 
} from 'lucide-react';

const PILLAR_ICONS = [ShieldCheck, Scale, FileText, TrendingUp, Compass];

const getColSpanClasses = (idx) => {
  if (idx < 3) {
    return 'lg:col-span-2';
  }
  if (idx === 3) {
    return 'lg:col-span-2 lg:col-start-2';
  }
  if (idx === 4) {
    return 'md:col-span-2 md:max-w-md md:mx-auto lg:col-span-2 lg:max-w-none';
  }
  return 'lg:col-span-2';
};

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const rawPillars = t('home.whyUs.pillars', { returnObjects: true }) || [];
  const pillars = Array.isArray(rawPillars) ? rawPillars : [];

  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-[#FAFCF9] border-b border-[#E5EDE7] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#019935]" />
            <span>{t('home.whyUs.eyebrow', 'OUR DIFFERENTIATION')}</span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#16221A] tracking-tight leading-tight">
            Why <span className="text-[#019935]">Green Gate Advisory</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#4E5E54] max-w-2xl mx-auto leading-relaxed font-sans font-normal pt-1">
            {t('home.whyUs.subtitle', 'Connecting policy insight, technical analysis, finance preparation and implementation planning.')}
          </p>
        </div>

        {/* 5 Distinctive Pillars Cards: 3 Top, 2 Centered Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-7 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length] || ShieldCheck;
            const badgeNum = pillar.num || (idx + 1 < 10 ? `0${idx + 1}` : idx + 1);

            const initialMotion = 
              idx === 0 || idx === 3
                ? { opacity: 0, x: -55 }
                : idx === 2 || idx === 4
                ? { opacity: 0, x: 55 }
                : { opacity: 0, y: 45 };

            return (
              <motion.div 
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-8 sm:p-9 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06),0_3px_10px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_48px_-8px_rgba(1,153,53,0.18),0_8px_20px_-3px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between space-y-6 group cursor-pointer overflow-hidden ${getColSpanClasses(idx)}`}
              >
                {/* Slow-motion background slide up from bottom to top */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#062A17] to-[#0D4429] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none" 
                />

                {/* Card Content Container (z-10 to stay above the sliding background) */}
                <div className="relative z-10 space-y-6 flex-1 flex flex-col">
                  
                  {/* Top Row: Icon + Value Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CFE8D7] flex items-center justify-center transition-all duration-500 shadow-2xs group-hover:bg-white group-hover:text-[#019935] group-hover:border-white group-hover:scale-105">
                      <Icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    
                    <span className="text-xs sm:text-[13px] font-mono font-bold text-[#019935] bg-[#E8F6ED] px-3.5 py-1 rounded-none border border-[#CDE8D5] transition-all duration-500 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/30 shadow-2xs">
                      VALUE {badgeNum}
                    </span>
                  </div>

                  {/* Body Text with original comfortable font size */}
                  <div className="space-y-3 pt-1">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#16221A] group-hover:text-white transition-colors duration-500 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-[15px] sm:text-base text-[#4E5E54] group-hover:text-white/90 transition-colors duration-500 leading-relaxed font-sans font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
