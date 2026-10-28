import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FileText, 
  Share2, 
  ShieldCheck, 
  Landmark, 
  Layers, 
  BarChart3, 
  Compass, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';

export default function TrainingIntro() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const PILLARS = [
    {
      key: 'policy',
      icon: FileText,
      title: 'Climate Policy & NDCs',
      text: t('training.intro.pillars.policy', 'National climate policy design, NDC alignment, and international negotiation mechanics.')
    },
    {
      key: 'markets',
      icon: Share2,
      title: 'Carbon Market Mechanisms',
      text: t('training.intro.pillars.markets', 'Voluntary carbon market methodologies, baseline rules, and additionality testing.')
    },
    {
      key: 'compliance',
      icon: ShieldCheck,
      title: 'Compliance & CBAM',
      text: t('training.intro.pillars.compliance', 'EU CBAM embedded emissions calculations and ETS allowance compliance obligations.')
    },
    {
      key: 'finance',
      icon: Landmark,
      title: 'Climate Finance Access',
      text: t('training.intro.pillars.finance', 'Climate finance proposal formulation for GCF, GEF, Adaptation Fund, and bilateral facilities.')
    },
    {
      key: 'preparation',
      icon: Layers,
      title: 'Project Preparation & MRV',
      text: t('training.intro.pillars.preparation', 'Project Design Document (PDD) preparation, feasibility studies, and digital MRV planning.')
    },
    {
      key: 'reporting',
      icon: BarChart3,
      title: 'Emissions Accounting',
      text: t('training.intro.pillars.reporting', 'GHG Protocol Scope 1, 2, and 3 accounting boundaries and primary supplier data workflows.')
    },
    {
      key: 'governance',
      icon: Compass,
      title: 'Environmental Governance',
      text: t('training.intro.pillars.governance', 'Environmental decision-making frameworks, safeguards, and Paris Agreement transparency.')
    }
  ];

  return (
    <section 
      className="relative py-10 sm:py-14 lg:py-16 bg-cover bg-center bg-no-repeat overflow-hidden border-b border-sand-border/70"
      style={{ backgroundImage: `url('/images/training-intro-bg.jpg')` }}
    >
      {/* Light translucent wash so the vibrant eco background image shines through while keeping text clear */}
      <div className="absolute inset-0 bg-white/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-transparent to-white/65 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Editorial Narrative Split with Smooth Left & Right Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start overflow-hidden">
          {/* Left Column: Heading & Badge (Enters smoothly from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-2.5 sm:space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-[#E8F5E9] text-[#019935] border border-[#C8E6C9] text-xs font-bold tracking-wider uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-none bg-[#019935] animate-pulse"></span>
              <span>{t('training.intro.eyebrow', 'Knowledge & Institutional Capability')}</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.15]">
              <span className="text-[#1A2E22] block">Building Climate Knowledge &</span>
              <span className="text-[#019935] block">Practical Delivery Capacity</span>
            </h2>

            {/* Green Accent Line */}
            <div className="w-16 h-1 bg-[#019935] rounded-none"></div>
          </motion.div>

          {/* Right Column: Paragraph Descriptions (Enters smoothly from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-6 space-y-3 text-charcoal/85 font-sans text-xs sm:text-sm md:text-base leading-relaxed lg:pt-2"
          >
            <p>
              {t('training.intro.p1', 'Climate regulation, international carbon mechanisms, and sustainable finance requirements demand specialized institutional competencies. Green Gate Advisory designs bespoke training and capacity-building programmes to bridge the gap between high-level climate ambition and day-to-day technical execution.')}
            </p>
            <p>
              {t('training.intro.p2', 'Our training programmes support public ministries, industrial compliance teams, project sponsors, and financial analysts—equipping teams with the technical tools, regulatory clarity, and methodological frameworks needed to deliver credible climate outcomes.')}
            </p>
          </motion.div>
        </div>

        {/* Core Technical Competencies & Delivery Disciplines White Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white/95 backdrop-blur-md rounded-none border border-[#D5E5DA] shadow-xl p-5 sm:p-7 lg:p-8 space-y-5 overflow-hidden"
        >
          
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E3EFE6] gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-none bg-[#E8F5E9] flex items-center justify-center text-[#019935] flex-shrink-0 border border-[#019935]/20">
                <FileText className="w-4 h-4 text-[#019935]" />
              </div>
              <h3 className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase text-[#017A2A]">
                CORE TECHNICAL COMPETENCIES & DELIVERY DISCIPLINES
              </h3>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#E8F5E9] text-[#019935] text-xs font-semibold self-start sm:self-auto border border-[#C8E6C9]/70">
              <Layers className="w-3.5 h-3.5 text-[#019935]" />
              <span>Co-Designed • Non-Rigid Curricula</span>
            </div>
          </div>

          {/* 7 Pillars Grid with Alternating Left and Right Entrance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
            {PILLARS.map((p, idx) => {
              const Icon = p.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={p.key}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: (idx % 2) * 0.1 }}
                >
                  <Link
                    to={getLocalizedPath('/contact?service=training')}
                    state={{ serviceInterest: p.title }}
                    className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-none bg-[#F4F9F5] hover:bg-white border border-[#E3EFE6] hover:border-[#019935] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 gap-4 w-full"
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 flex-grow min-w-0">
                      <div className="w-10 h-10 rounded-none bg-white border border-[#019935]/20 flex items-center justify-center text-[#019935] flex-shrink-0 shadow-xs group-hover:bg-[#019935] group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5 text-current group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="min-w-0 space-y-0.5">
                        <h4 className="font-heading font-bold text-sm sm:text-base text-[#1A2E22] leading-snug group-hover:text-[#019935] transition-colors">
                          {p.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-charcoal-muted leading-relaxed font-sans font-light">
                          {p.text}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="w-8 h-8 rounded-none bg-white border border-[#019935]/20 text-[#019935] flex items-center justify-center flex-shrink-0 group-hover:bg-[#019935] group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-current group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Bottom Hover Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#019935] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
