import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Briefcase, 
  Ship, 
  Sprout, 
  Landmark, 
  Globe2, 
  GraduationCap, 
  ArrowRight 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

const CLIENT_ICONS = [
  Building2,
  Briefcase,
  Ship,
  Sprout,
  Landmark,
  Globe2,
  GraduationCap
];

export default function WhoWeWorkWith() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawGroups = t('about.whoWeWorkWith.groups', { returnObjects: true }) || [];
  const groups = Array.isArray(rawGroups) ? rawGroups : [];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5EDE7] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('about.whoWeWorkWith.eyebrow', 'Client Ecosystem')}
            title={t('about.whoWeWorkWith.heading', 'Who We Work With')}
            subtitle={t('about.whoWeWorkWith.intro')}
          />
        </motion.div>

        {/* 7 Architectural Client Group Cards with Left & Right Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {groups.map((group, idx) => {
            const Icon = CLIENT_ICONS[idx % CLIENT_ICONS.length] || Building2;
            const groupNum = idx + 1 < 10 ? `0${idx + 1}` : idx + 1;
            const colIndex = idx % 4;
            const initialMotion = 
              colIndex === 0 
                ? { opacity: 0, x: -50 } 
                : colIndex === 1 
                ? { opacity: 0, x: -20, y: 25 } 
                : colIndex === 2 
                ? { opacity: 0, x: 20, y: 25 } 
                : { opacity: 0, x: 50 };

            return (
              <motion.div
                key={idx}
                initial={initialMotion}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: (idx % 4) * 0.08 }}
              >
                <Link
                  to={getLocalizedPath('/who-we-serve')}
                  className="relative rounded-none bg-white border border-[#DCE8E0] hover:border-[#019935] p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.05),0_2px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_-8px_rgba(1,153,53,0.18),0_6px_16px_-2px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between space-y-4 group cursor-pointer overflow-hidden block h-full"
                >
                {/* Top Accent bar: sweeps smoothly from Right to Left on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-[#019935] to-[#4ADE80] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />

                <div className="space-y-4">
                  {/* Top Row: Static Icon (No Rotation) + Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-none bg-[#E8F6ED] text-[#019935] border border-[#CFE8D7] flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:bg-[#019935] group-hover:text-white group-hover:border-[#019935]">
                      <Icon className="w-5 h-5 transition-colors duration-300" />
                    </div>

                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#019935] bg-[#E8F6ED] px-2.5 py-0.5 rounded-none border border-[#CDE8D5] shadow-2xs group-hover:bg-[#019935] group-hover:text-white transition-colors duration-300">
                      {groupNum}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-[#16221A] group-hover:text-[#019935] transition-colors duration-300 leading-snug">
                    {group.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4E5E54] leading-relaxed font-sans font-normal">
                    {group.description}
                  </p>
                </div>

                {/* Bottom Bar: Accent line sweeps Right to Left */}
                <div className="relative pt-3.5 border-t border-[#E8EFEA] flex items-center justify-between text-[11px] font-mono font-semibold text-[#5D7064] uppercase tracking-wider">
                  {/* Bottom animated green trace moving right to left */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />

                  <span className="group-hover:text-[#019935] transition-colors">Sector Segment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#019935] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          );
        })}
        </div>

        {/* Link to Dedicated Who We Serve Page - Architectural rounded-none */}
        <div className="text-center pt-2">
          <Link
            to={getLocalizedPath('/who-we-serve')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-none bg-[#019935] hover:bg-[#062A17] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-lg group"
          >
            <span>{t('about.whoWeWorkWith.cta', 'Learn More About Who We Serve')}</span>
            <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
