import { useTranslation } from 'react-i18next';
import { 
  Search, 
  Layers, 
  FileCheck2, 
  TrendingUp, 
  Info, 
  CheckCircle2 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const STEP_ICONS = [Search, Layers, FileCheck2, TrendingUp];

export default function SectorApproach() {
  const { t } = useTranslation();

  const rawSteps = t('sectors.framework.steps', { returnObjects: true }) || [];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('sectors.framework.eyebrow', 'Delivery Architecture')}
          title={t('sectors.framework.heading', 'Our Sector-Specific Advisory Framework')}
          subtitle={t('sectors.framework.subtitle', 'How Green Gate Advisory structures engagements around industry-specific realities rather than generic templates.')}
        />

        {/* 4-Step Process Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || Search;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-sage/30 border border-sand-border/80 p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-bold text-gold-dark/60 group-hover:text-gold-dark transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 flex items-center gap-2 text-[11px] font-semibold text-deep-green">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark flex-shrink-0" />
                  <span>Objective-aligned output</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deliverables Rigour & Advisory Boundaries Box */}
        <div className="rounded-2xl bg-sage/50 border border-gold/30 p-6 sm:p-8 flex flex-col md:flex-row items-start gap-4 sm:gap-6">
          <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-forest flex-shrink-0">
            <Info className="w-5 h-5 text-gold-dark" />
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-charcoal-muted font-sans leading-relaxed">
            <h4 className="font-heading font-bold text-sm sm:text-base text-forest">
              Deliverable Integrity & Engagement Principles
            </h4>
            <p>
              {t('sectors.framework.notice', 'Illustrative notice: Deliverables and pathways are tailored to client context and agreed engagement scope. We do not publish unverified client outcomes or guaranteed regulatory determinations.')}
            </p>
            <p className="text-charcoal/70 text-[11px]">
              Every deliverable is prepared in accordance with applicable statutory reporting frameworks, accredited greenhouse gas accounting methodologies (GHG Protocol Corporate Standard, ISO 14064, EU CBAM Implementing Regulations), and approved carbon registry rules.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
