import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Scale,
  Sparkles,
  Landmark,
  FileText,
  Layers,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

export default function InsightsHubIntro() {
  const { t } = useTranslation();

  const PILLARS = [
    {
      key: 'regulatory',
      icon: Scale,
      title: t('insights.hubIntro.pillars.regulatory.title', 'Regulatory Clarity'),
      desc: t('insights.hubIntro.pillars.regulatory.desc', 'Unpacking evolving compliance requirements, carbon border adjustments, and cross-border trade implications.')
    },
    {
      key: 'carbonMarkets',
      icon: Sparkles,
      title: t('insights.hubIntro.pillars.carbonMarkets.title', 'Carbon Market Architecture'),
      desc: t('insights.hubIntro.pillars.carbonMarkets.desc', 'Examining integrity standards, baseline calculation rules, and commercial crediting structures.')
    },
    {
      key: 'climateFinance',
      icon: Landmark,
      title: t('insights.hubIntro.pillars.climateFinance.title', 'Climate Finance Readiness'),
      desc: t('insights.hubIntro.pillars.climateFinance.desc', 'Translating multilateral fund criteria into bankable project concepts and structured proposals.')
    },
    {
      key: 'environmentalPolicy',
      icon: FileText,
      title: t('insights.hubIntro.pillars.environmentalPolicy.title', 'Environmental Policy & NDCs'),
      desc: t('insights.hubIntro.pillars.environmentalPolicy.desc', 'Assessing national adaptation roadmaps, Article 6 transfer agreements, and institutional governance.')
    },
    {
      key: 'projectPrep',
      icon: Layers,
      title: t('insights.hubIntro.pillars.projectPrep.title', 'Project Design & MRV'),
      desc: t('insights.hubIntro.pillars.projectPrep.desc', 'Structuring robust monitoring frameworks, baseline methodologies, and validation pathways.')
    },
    {
      key: 'ghgAccounting',
      icon: BarChart3,
      title: t('insights.hubIntro.pillars.ghgAccounting.title', 'Corporate GHG Accounting'),
      desc: t('insights.hubIntro.pillars.ghgAccounting.desc', 'Guiding Scope 1, 2, and 3 measurement boundaries, supplier primary data, and transition plans.')
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto space-y-14 sm:space-y-16">
        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
              <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
              <span>{t('insights.hubIntro.eyebrow', 'Editorial Foundation')}</span>
            </div>

            <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#1A5C3B] tracking-[-0.01em] leading-[1.2]">
              {t('insights.hubIntro.heading', 'Navigating Climate Complexity Through Practical Analysis')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[16.5px] text-[#555555] leading-[1.75]">
              {t('insights.hubIntro.p1', 'As global climate regulation accelerates and compliance regimes mature, public and private organisations require clear, technically grounded analysis to inform capital allocation and regulatory readiness. The Green Gate Advisory knowledge hub synthesises complex statutory developments into structured, actionable intelligence.')}
            </p>
            <p className="font-['Poppins',sans-serif] font-medium text-[15.5px] sm:text-[16.5px] text-[#1A5C3B] leading-[1.7]">
              {t('insights.hubIntro.p2', 'All published briefings, analytical tools, and technical checklists reflect current international frameworks—spanning the UNFCCC Paris Agreement, the EU CBAM, compliance emissions trading schemes, and multilateral climate fund architectures.')}
            </p>
          </motion.div>
        </div>

        {/* 6 Knowledge Scope Pillars — GCC Flat White Hairline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const num = String(idx + 1).padStart(2, '0');
            return (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.06 }}
                className="relative p-7 sm:p-8 rounded-[4px] bg-white border border-[#e5e7eb] hover:border-[#019934] transition-colors duration-200 space-y-4 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#019934]" />

                <div className="flex items-center justify-between">
                  <span className="font-['Poppins',sans-serif] font-light text-[30px] leading-none text-[#019934]">
                    {num}
                  </span>
                  <Icon className="w-6 h-6 text-[#cbd5e1] group-hover:text-[#019934] stroke-[1.4] transition-colors duration-200" />
                </div>

                <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] sm:text-[19px] text-[#1A5C3B] leading-snug">
                  {pillar.title}
                </h3>

                <p className="font-['Poppins',sans-serif] font-light text-[14px] text-[#555555] leading-[1.68]">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial Standard Notice — GCC Pale Mint Callout */}
        <div className="flex items-start sm:items-center gap-3.5 p-5 sm:p-6 rounded-[4px] bg-[#57D182]/12 border border-[#019934]/30 border-l-[3px] border-l-[#019934] text-[13.5px] sm:text-[14px] text-[#3C3C3C] font-light leading-[1.7]">
          <CheckCircle2 className="w-5 h-5 text-[#019934] flex-shrink-0 mt-0.5 sm:mt-0 stroke-[1.8]" />
          <span>
            {t('insights.hubIntro.notice', 'Editorial standard: Content is reviewed by subject-matter experts and updated when official rules, funding windows, or market conditions change. We do not publish speculative news or unverified claims.')}
          </span>
        </div>
      </div>
    </section>
  );
}
