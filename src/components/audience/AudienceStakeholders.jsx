import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Factory, 
  Sparkles, 
  Landmark, 
  Globe2, 
  CheckCircle2 
} from 'lucide-react';

const AUDIENCE_QUICK_CHIPS = [
  { icon: Building2, label: 'Governments & Public Institutions' },
  { icon: Factory, label: 'Companies, Manufacturers & Exporters' },
  { icon: Sparkles, label: 'Carbon Project Developers' },
  { icon: Landmark, label: 'Investors & Financial Institutions' },
  { icon: Globe2, label: 'International NGOs & Research' }
];

export default function AudienceStakeholders() {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-forest/5 text-deep-green border border-forest/15">
              {t('audience.intro.eyebrow', 'Client Diversity')}
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-forest tracking-tight leading-tight">
              {t('audience.intro.heading', 'Tailored Advisory for Distinct Institutional Mandates')}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-charcoal-muted font-sans text-base sm:text-lg leading-relaxed">
            <p>
              {t('audience.intro.p1', 'Organisations encounter climate imperatives from diverse vantage points. A sovereign government designing compliance carbon pricing requires different analytical frameworks than an exporter calculating embedded emissions for the EU CBAM, or an institutional investor assessing transition risk across an infrastructure portfolio.')}
            </p>
            <p className="text-charcoal/90">
              {t('audience.intro.p2', 'We tailor our technical, regulatory, and finance advisory to each client\'s specific operational context, institutional maturity, and strategic objectives.')}
            </p>
          </div>
        </div>

        {/* 5 Core Audience Anchor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
          {AUDIENCE_QUICK_CHIPS.map((chip, idx) => {
            const Icon = chip.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-sage/30 border border-sand-border/80 flex flex-col justify-between space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-sand-border flex items-center justify-center text-forest shadow-xs">
                  <Icon className="w-4 h-4 text-deep-green" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-gold-dark uppercase tracking-wider block">
                    GROUP 0{idx + 1}
                  </span>
                  <span className="font-heading font-bold text-xs sm:text-sm text-forest leading-snug">
                    {chip.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Principle Banner */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-forest/5 border border-forest/10 text-xs text-charcoal-muted font-sans">
          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
          <span>
            {t('audience.stakeholders.notice', 'Engagement integrity: Our recommendations reflect client realities without claiming guaranteed financial access, project approvals, or regulatory exemptions.')}
          </span>
        </div>

      </div>
    </section>
  );
}
