import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award, Briefcase, FileCheck, CheckCircle2 } from 'lucide-react';

export default function AdvisoryImpactCounter() {
  const { t } = useTranslation();

  const metrics = [
    {
      value: '15+',
      unit: 'Years',
      label: 'Technical Leadership',
      description: 'Senior environmental economists, MRV engineers & carbon policy specialists',
      icon: Award
    },
    {
      value: '$450M+',
      unit: 'Capital',
      label: 'Bankable Climate Proposals',
      description: 'Structured for multilateral facilities, GCF, GEF & blended climate funds',
      icon: Briefcase
    },
    {
      value: '85+',
      unit: 'Assessments',
      label: 'Corporate & CBAM Audits',
      description: 'Scope 1-3 GHG inventories, embedded emission calculations & ETS readiness',
      icon: FileCheck
    },
    {
      value: '100%',
      unit: 'Fiduciary',
      label: 'Independent Advisory',
      description: 'Zero credit brokerage or speculative trading conflicts of interest',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-sage/50 border-b border-sand-border/70 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elevated Glassmorphism Counter Container */}
        <div className="rounded-3xl bg-white border border-sand-border shadow-premium p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-sand-border">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col justify-between ${idx !== 0 ? 'sm:pl-8 pt-6 sm:pt-0' : ''} space-y-3 group`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 text-current" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-forest font-bold bg-forest/5 px-2 py-0.5 rounded">
                    {item.unit}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight">
                    {item.value}
                  </div>
                  <div className="font-heading font-semibold text-sm sm:text-base text-charcoal">
                    {item.label}
                  </div>
                </div>

                <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Independence & Fiduciary Ethics Guarantee Strip */}
        <div className="mt-8 pt-6 border-t border-sand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-charcoal-muted">
          <div className="flex items-center gap-2 text-forest font-semibold">
            <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0" />
            <span>Pure Advisory Standard: Zero proprietary carbon trading, brokerage or speculative positions</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-charcoal-muted">
            <span>UNFCCC Guidelines</span>
            <span>•</span>
            <span>ISO 14064 Compliance</span>
            <span>•</span>
            <span>GHG Protocol Standard</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
