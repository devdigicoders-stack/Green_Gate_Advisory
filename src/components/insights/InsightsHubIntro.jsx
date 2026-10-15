import { useTranslation } from 'react-i18next';
import { 
  ShieldCheck, 
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
    <section className="py-20 sm:py-24 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-forest/5 text-deep-green border border-forest/15">
              {t('insights.hubIntro.eyebrow', 'Editorial Foundation')}
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-forest tracking-tight leading-tight">
              {t('insights.hubIntro.heading', 'Navigating Climate Complexity Through Practical Analysis')}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-charcoal-muted font-sans text-base sm:text-lg leading-relaxed">
            <p>
              {t('insights.hubIntro.p1', 'As global climate regulation accelerates and compliance regimes mature, public and private organisations require clear, technically grounded analysis to inform capital allocation and regulatory readiness. The Green Gate Advisory knowledge hub synthesises complex statutory developments into structured, actionable intelligence.')}
            </p>
            <p className="text-charcoal/90">
              {t('insights.hubIntro.p2', 'All published briefings, analytical tools, and technical checklists reflect current international frameworks—spanning the UNFCCC Paris Agreement, the EU CBAM, compliance emissions trading schemes, and multilateral climate fund architectures.')}
            </p>
          </div>
        </div>

        {/* 6 Knowledge Scope Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.key}
                className="p-7 rounded-3xl bg-sage/30 border border-sand-border/80 hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editorial Standard Notice */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-forest/5 border border-forest/10 text-xs text-charcoal-muted font-sans">
          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
          <span>
            {t('insights.hubIntro.notice', 'Editorial standard: Content is reviewed by subject-matter experts and updated when official rules, funding windows, or market conditions change. We do not publish speculative news or unverified claims.')}
          </span>
        </div>

      </div>
    </section>
  );
}
