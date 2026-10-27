import { useTranslation } from 'react-i18next';
import { 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Landmark, 
  Layers, 
  BarChart3, 
  Compass, 
  AlertCircle 
} from 'lucide-react';

export default function TrainingIntro() {
  const { t } = useTranslation();

  const PILLARS = [
    {
      key: 'policy',
      icon: FileText,
      title: 'Climate Policy & NDCs',
      text: t('training.intro.pillars.policy', 'National climate policy design, NDC alignment, and international negotiation mechanics')
    },
    {
      key: 'markets',
      icon: Sparkles,
      title: 'Carbon Market Mechanisms',
      text: t('training.intro.pillars.markets', 'Voluntary carbon market methodologies, baseline rules, and additionality testing')
    },
    {
      key: 'compliance',
      icon: ShieldCheck,
      title: 'Compliance & CBAM',
      text: t('training.intro.pillars.compliance', 'EU CBAM embedded emissions calculations and ETS allowance compliance obligations')
    },
    {
      key: 'finance',
      icon: Landmark,
      title: 'Climate Finance Access',
      text: t('training.intro.pillars.finance', 'Climate finance proposal formulation for GCF, GEF, Adaptation Fund, and bilateral facilities')
    },
    {
      key: 'preparation',
      icon: Layers,
      title: 'Project Preparation & MRV',
      text: t('training.intro.pillars.preparation', 'Project Design Document (PDD) preparation, feasibility studies, and digital MRV planning')
    },
    {
      key: 'reporting',
      icon: BarChart3,
      title: 'Emissions Accounting',
      text: t('training.intro.pillars.reporting', 'GHG Protocol Scope 1, 2, and 3 accounting boundaries and primary supplier data workflows')
    },
    {
      key: 'governance',
      icon: Compass,
      title: 'Environmental Governance',
      text: t('training.intro.pillars.governance', 'Environmental decision-making frameworks, safeguards, and Paris Agreement transparency')
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-forest/5 text-deep-green border border-forest/15">
              {t('training.intro.eyebrow', 'Knowledge & Institutional Capability')}
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-forest tracking-tight leading-tight">
              {t('training.intro.heading', 'Building Climate Knowledge & Practical Delivery Capacity')}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-charcoal-muted font-sans text-base sm:text-lg leading-relaxed">
            <p>
              {t('training.intro.p1', 'Climate regulation, international carbon mechanisms, and sustainable finance requirements demand specialized institutional competencies. Green Gate Advisory designs bespoke training and capacity-building programmes to bridge the gap between high-level climate ambition and day-to-day technical execution.')}
            </p>
            <p className="text-charcoal/90">
              {t('training.intro.p2', 'Our training programmes support public ministries, industrial compliance teams, project sponsors, and financial analysts—equipping teams with the technical tools, regulatory clarity, and methodological frameworks needed to deliver credible climate outcomes.')}
            </p>
          </div>
        </div>

        {/* Clean, Non-Card Capability Matrix Layout */}
        <div className="bg-[#FAFBF9] rounded-2xl border border-sand-border p-6 sm:p-8">
          <div className="flex items-center justify-between pb-6 border-b border-sand-border mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#019935] uppercase">
              Core Technical Competencies & Delivery Disciplines
            </span>
            <span className="text-xs text-neutral-500 font-medium hidden sm:inline">
              Co-Designed • Non-Rigid Curricula
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.key} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white border border-sand-border flex items-center justify-center text-[#019935] flex-shrink-0 mt-0.5 shadow-xs">
                    <Icon className="w-4 h-4 text-current" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans font-normal">
                      {p.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disciplinary Scope Box */}
        <div className="flex items-start sm:items-center gap-3 p-4.5 rounded-2xl bg-white border border-sand-border text-xs sm:text-[13.5px] text-charcoal/85 font-sans shadow-xs">
          <AlertCircle className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-relaxed">
            {t('training.intro.notice', 'Scope discipline: Training scope, format, depth and duration are confirmed collaboratively with the client based on specific learning requirements and existing participant expertise. We do not publish pre-set course fees, rigid curricula or unverified certificates.')}
          </span>
        </div>

      </div>
    </section>
  );
}
