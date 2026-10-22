import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award, Briefcase, FileCheck, CheckCircle2 } from 'lucide-react';

export default function AdvisoryImpactCounter() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  const metrics = isEs ? [
    {
      value: 'CMNUCC e ISO',
      unit: 'Estándares Globales',
      label: 'Rigor Metodológico',
      description: 'Alineación estricta con el Artículo 6, normas ISO 14064 y el GHG Protocol Corporate Standard.',
      icon: Award
    },
    {
      value: 'Propuestas Bancables',
      unit: 'Finanzas Climáticas',
      label: 'Estructuración Multilateral',
      description: 'Diseño de proyectos de grado de inversión para facilidades multilaterales, FVC, FMAM y capital mixto.',
      icon: Briefcase
    },
    {
      value: 'Alcance 1–3 y CBAM',
      unit: 'Auditorías de Cumplimiento',
      label: 'Verificación Técnica',
      description: 'Contabilidad de emisiones incorporadas, declaraciones de cumplimiento CBAM de la UE y preparación ETS.',
      icon: FileCheck
    },
    {
      value: '100% Independiente',
      unit: 'Ética Fiduciaria',
      label: 'Modelo de Asesoría Pura',
      description: 'Cero intermediación de créditos de carbono, corretaje o posiciones especulativas que generen conflicto.',
      icon: ShieldCheck
    }
  ] : [
    {
      value: 'UNFCCC & ISO',
      unit: 'Global Standards',
      label: 'Methodological Rigor',
      description: 'Frameworks aligned strictly with Article 6, ISO 14064, and the GHG Protocol Corporate Standard.',
      icon: Award
    },
    {
      value: 'Bankable Proposals',
      unit: 'Climate Finance',
      label: 'Multilateral Structuring',
      description: 'Investment-grade project design structured for multilateral facilities, GCF, GEF & blended climate funds.',
      icon: Briefcase
    },
    {
      value: 'Scope 1–3 & CBAM',
      unit: 'Compliance Audits',
      label: 'Technical Verification',
      description: 'Embedded emissions accounting, EU CBAM compliance declarations, and national ETS readiness.',
      icon: FileCheck
    },
    {
      value: '100% Independent',
      unit: 'Fiduciary Ethics',
      label: 'Pure Advisory Model',
      description: 'Zero proprietary carbon trading, brokerage or speculative positions to eliminate conflicts of interest.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-sand-border/60 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elevated Glassmorphism Counter Container */}
        <div className="rounded-3xl bg-[#FAF9F5] border border-sand-border/80 shadow-premium p-8 sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-sand-border/80">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col justify-between ${idx !== 0 ? 'sm:pl-8 lg:pl-10 pt-6 sm:pt-0' : ''} space-y-4 group`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-all duration-300 shadow-xs">
                    <Icon className="w-5 h-5 text-current" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-deep-green font-bold bg-white px-3 py-1 rounded-full border border-sand-border/80 shadow-xs">
                    {item.unit}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="font-display font-bold text-2xl sm:text-2xl lg:text-3xl text-forest tracking-tight">
                    {item.value}
                  </div>
                  <div className="font-heading font-semibold text-sm sm:text-base text-charcoal">
                    {item.label}
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] text-charcoal/85 leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Independence & Fiduciary Ethics Guarantee Strip */}
        <div className="mt-8 pt-6 border-t border-sand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-charcoal/80">
          <div className="flex items-center gap-2 text-forest font-semibold">
            <CheckCircle2 className="w-4.5 h-4.5 text-deep-green flex-shrink-0" />
            <span>{isEs ? 'Estándar de Asesoría Pura: Cero intermediación de carbono, corretaje o posiciones especulativas' : 'Pure Advisory Standard: Zero proprietary carbon trading, brokerage or speculative positions'}</span>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-[13px] font-mono text-charcoal-muted">
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
