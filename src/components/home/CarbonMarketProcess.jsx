import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

export default function CarbonMarketProcess() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawSteps = t('home.carbonProcess.steps', { returnObjects: true }) || [];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section id="carbon-markets" className="py-20 sm:py-28 lg:py-32 bg-[#F6F8F5] text-charcoal relative overflow-hidden border-b border-sand-border/60 scroll-mt-24">
      {/* Subtle background radial accent for depth */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-forest/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 relative z-10">
        
        <SectionHeader
          light={false}
          badge={t('home.carbonProcess.eyebrow', 'Our Advisory Approach')}
          title={t('home.carbonProcess.heading', 'End-to-End Carbon Market Support')}
          subtitle={t('home.carbonProcess.description')}
        />

        {/* Executive Process Schema Diagram (Visual 4-Stage Convergence Pipeline) */}
        <div className="rounded-3xl bg-forest text-white p-6 sm:p-8 lg:p-10 shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-green/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold tracking-widest text-gold-light uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                  Visual Architecture Schema
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Carbon Asset Development & Monetisation Pipeline
                </h3>
              </div>
              <span className="text-xs font-mono text-sand-surface/75 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 self-start sm:self-auto">
                Traceable to Verra • Gold Standard • Article 6
              </span>
            </div>

            {/* 4 Connected Schema Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              
              {/* Step 1 Schema */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gold bg-gold/15 px-2.5 py-0.5 rounded-md">
                    PHASE 01
                  </span>
                  <span className="text-[11px] font-mono text-sand-surface/60">Feasibility</span>
                </div>
                <h4 className="font-heading font-bold text-base text-white">
                  Eligibility & Baseline
                </h4>
                <p className="text-xs sm:text-sm text-sand-surface/80 leading-relaxed font-sans">
                  Methodology applicability screening, additionality analysis, and carbon yield modeling.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-gold-light font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  <span>Deliverable: Yield Report</span>
                </div>
              </div>

              {/* Step 2 Schema */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gold bg-gold/15 px-2.5 py-0.5 rounded-md">
                    PHASE 02
                  </span>
                  <span className="text-[11px] font-mono text-sand-surface/60">Design</span>
                </div>
                <h4 className="font-heading font-bold text-base text-white">
                  PDD & MRV Protocol
                </h4>
                <p className="text-xs sm:text-sm text-sand-surface/80 leading-relaxed font-sans">
                  Technical Project Design Document drafting, stakeholder consultation, and MRV blueprint.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-gold-light font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  <span>Deliverable: Registered PDD</span>
                </div>
              </div>

              {/* Step 3 Schema */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gold bg-gold/15 px-2.5 py-0.5 rounded-md">
                    PHASE 03
                  </span>
                  <span className="text-[11px] font-mono text-sand-surface/60">Audit</span>
                </div>
                <h4 className="font-heading font-bold text-base text-white">
                  VVB Audit & Registry
                </h4>
                <p className="text-xs sm:text-sm text-sand-surface/80 leading-relaxed font-sans">
                  Accredited auditor site visit support, technical response resolution, and standard approval.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-gold-light font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  <span>Deliverable: Final Validation</span>
                </div>
              </div>

              {/* Step 4 Schema */}
              <div className="p-5 rounded-2xl bg-gold/10 border border-gold/30 hover:border-gold transition-colors space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-forest-dark bg-gold px-2.5 py-0.5 rounded-md">
                    PHASE 04
                  </span>
                  <span className="text-[11px] font-mono text-gold-light">Issuance</span>
                </div>
                <h4 className="font-heading font-bold text-base text-white">
                  Credit Issuance & Retainers
                </h4>
                <p className="text-xs sm:text-sm text-sand-surface/80 leading-relaxed font-sans">
                  Serialised registry credit issuance, compliance off-take advisory, and permanent monitoring.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-gold-light font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  <span>Milestone: Serialized Credits</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 9-Stage Connected Process Grid / Responsive Timeline */}
        <div className="space-y-8">
          <div className="text-center font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-forest">
            {t('home.carbonProcess.timelineTitle', 'Detailed Advisory Milestones Across The 9 Stages')}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, idx) => {
              const isFinal = idx === steps.length - 1;
              return (
                <div
                  key={idx}
                  className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                    isFinal
                      ? 'bg-gradient-to-br from-gold/15 via-white to-forest/5 border-gold/40 shadow-elevated'
                      : 'bg-white border-sand-border/80 hover:border-forest/40 hover:shadow-elevated shadow-subtle'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        isFinal 
                          ? 'bg-gold text-forest-dark' 
                          : 'bg-forest/10 text-forest border border-forest/15'
                      }`}>
                        STAGE {step.num || String(idx + 1).padStart(2, '0')}
                      </span>
                      <CheckCircle2 className={`w-4 h-4 ${isFinal ? 'text-gold-dark' : 'text-forest/40'}`} />
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-forest leading-snug">
                      {step.name}
                    </h3>

                    <p className="text-base text-charcoal/85 leading-relaxed font-sans font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-sand-border/60 flex items-center justify-between text-xs sm:text-[13px] font-sans font-medium">
                    <span className={isFinal ? 'text-forest font-bold' : 'text-charcoal-muted'}>
                      {isFinal ? 'Milestone: Commercialisation' : `Stage ${idx + 1} of ${steps.length}`}
                    </span>
                    {!isFinal && <ArrowRight className="w-4 h-4 text-forest/40" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regulatory Safeguard Notice & Primary CTA */}
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-sand-surface border border-sand-border text-sm text-charcoal/85 text-left font-sans leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
            <p>{t('home.carbonProcess.disclaimer')}</p>
          </div>

          <div className="pt-2">
            <Link
              to={getLocalizedPath('/services/carbon-market-advisory')}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-forest hover:bg-forest-light text-white font-semibold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <span>{t('home.carbonProcess.cta', 'Discuss a Carbon Project')}</span>
              <ArrowRight className="w-4.5 h-4.5 text-gold-light" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
