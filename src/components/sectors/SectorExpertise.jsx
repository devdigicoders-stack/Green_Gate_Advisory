import { useTranslation } from 'react-i18next';
import { Layers, ShieldCheck, Scale, Compass } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function SectorExpertise() {
  const { t } = useTranslation();

  const differentiators = [
    {
      icon: Scale,
      title: t('sectors.expertise.cards.reg.title', 'Differentiated Regulations'),
      desc: t('sectors.expertise.cards.reg.desc', 'Compliance obligations such as EU CBAM, national ETS rules, and Article 6 transfers apply selectively based on industrial thresholds, trade flows, and production technologies.')
    },
    {
      icon: Layers,
      title: t('sectors.expertise.cards.decarb.title', 'Bespoke Abatement Realities'),
      desc: t('sectors.expertise.cards.decarb.desc', 'Heavy industrial sectors require deep process re-engineering, while land use, forestry, and blue carbon projects centre on biological additionality, permanency, and community safeguards.')
    },
    {
      icon: Compass,
      title: t('sectors.expertise.cards.finance.title', 'Targeted Capital & Finance'),
      desc: t('sectors.expertise.cards.finance.desc', 'Commercial debt, concessional climate funds (GCF, GEF), and voluntary carbon markets have distinct due diligence criteria, return hurdles, and monitoring protocols.')
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-forest/5 text-deep-green border border-forest/15">
              {t('sectors.intro.eyebrow', 'Tailored Engagement')}
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-forest tracking-tight leading-tight">
              {t('sectors.intro.heading', 'Aligning Sector Realities with Climate Regulation & Investment')}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-charcoal-muted font-sans text-base sm:text-lg leading-relaxed">
            <p>
              {t('sectors.intro.p1', 'Every industry operates under distinct commercial pressures, asset life-cycles, emissions profiles, and compliance timelines. A decarbonisation strategy for heavy manufacturing requires fundamentally different technical and economic tools than an ecosystem restoration project or an international climate finance facility.')}
            </p>
            <p className="text-charcoal/90">
              {t('sectors.intro.p2', 'Green Gate Advisory helps organisations unpack the specific regulatory frameworks, carbon pricing mechanisms, and transition risks impacting their sector—translating overarching climate goals into practical, bankable workstreams.')}
            </p>
          </div>
        </div>

        {/* 3 Pillars of Sector Calibration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-sage/30 border border-sand-border/80 hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-sand-border flex items-center justify-center text-forest shadow-sm">
                  <Icon className="w-5 h-5 text-deep-green" />
                </div>
                <h3 className="font-heading font-bold text-lg text-forest">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Advisory Boundaries Notice */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-forest/5 border border-forest/10 text-xs text-charcoal-muted font-sans">
          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
          <span>
            {t('sectors.expertise.notice', 'Scope discipline: All sectoral guidance is strictly aligned with approved methodologies, verified standards (GHG Protocol, ISO 14064, UNFCCC), and jurisdiction-specific statutory instruments.')}
          </span>
        </div>

      </div>
    </section>
  );
}
