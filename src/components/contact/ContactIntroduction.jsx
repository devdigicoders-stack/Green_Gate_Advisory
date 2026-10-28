import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Scale, 
  Landmark, 
  Trees, 
  FileText, 
  BarChart3, 
  GraduationCap, 
  AlertCircle 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const AREA_ICONS = [
  Sparkles,
  ShieldCheck,
  Scale,
  Landmark,
  Trees,
  FileText,
  BarChart3,
  GraduationCap
];

export default function ContactIntroduction() {
  const { t } = useTranslation();

  const rawAreas = t('contact.intro.areas', { returnObjects: true }) || [];
  const areas = Array.isArray(rawAreas) ? rawAreas : [];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('contact.intro.eyebrow', 'Consultation Scope')}
            title={t('contact.intro.heading', 'Structured Discussion Across Eight Specialized Areas')}
            subtitle={t('contact.intro.lead', 'Every advisory engagement begins with clarifying your operating context, statutory obligations, data availability, and strategic milestones.')}
          />
        </motion.div>

        {/* 8 Discussion Areas Grid with Left & Right Entrance Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {areas.map((area, idx) => {
            const Icon = AREA_ICONS[idx] || Sparkles;
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
                transition={{ duration: 0.6, ease: 'easeOut', delay: (idx % 4) * 0.09 }}
                className="relative p-5 sm:p-6 rounded-none bg-sage/20 border border-sand-border hover:border-[#019935]/40 hover:bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out space-y-3.5 group flex flex-col justify-start overflow-hidden"
              >
                {/* Top Accent Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#019935] transition-colors duration-300" />

                <div className="w-11 h-11 rounded-none bg-forest/5 flex items-center justify-center text-forest group-hover:bg-[#019935] transition-all duration-300">
                  <Icon className="w-5 h-5 text-deep-green group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                  {area.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Consultation Scope Discipline Notice */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 sm:p-4.5 rounded-none bg-forest/5 border border-forest/15 shadow-sm text-xs sm:text-sm text-charcoal-muted font-sans max-w-4xl mx-auto"
        >
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-relaxed">
            {t('contact.intro.notice', 'Consultation discipline: All discussions are strictly preliminary and focused on scoping technical feasibility and regulatory requirements. We do not make speculative funding promises or guaranteed outcomes.')}
          </span>
        </motion.div>

      </div>
    </section>
  );
}
