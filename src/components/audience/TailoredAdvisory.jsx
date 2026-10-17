import { useTranslation } from 'react-i18next';
import { 
  Target, 
  Scale, 
  Layers, 
  Sparkles, 
  Database, 
  Users2, 
  FileCheck2,
  SlidersHorizontal,
  Info
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const DIMENSION_ICONS = [
  Target,
  Scale,
  Layers,
  Sparkles,
  Database,
  Users2,
  FileCheck2
];

export default function TailoredAdvisory() {
  const { t } = useTranslation();

  const rawDimensions = t('audience.adaptation.dimensions', { returnObjects: true }) || [];
  const dimensions = Array.isArray(rawDimensions) ? rawDimensions : [];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('audience.adaptation.eyebrow', 'Engagement Flexibility')}
          title={t('audience.adaptation.heading', 'Tailored to Your Context & Objectives')}
          subtitle={t('audience.adaptation.subtitle', 'Rather than enforcing a rigid template, Green Gate Advisory adapts its advisory scope to each organisation\'s unique operating environment.')}
        />

        {/* 7 Adaptation Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dimensions.map((dim, idx) => {
            const Icon = DIMENSION_ICONS[idx] || SlidersHorizontal;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-sage/30 border border-sand-border/80 hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-dark">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {dim.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {dim.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand-border/50 text-[11px] font-semibold text-deep-green flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Calibrated advisory scope</span>
                </div>
              </div>
            );
          })}

          {/* 8th Balancing Summary Card */}
          <div className="p-7 rounded-3xl bg-forest text-white flex flex-col justify-between space-y-4 shadow-subtle">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider block">
                DELIVERY PHILOSOPHY
              </span>
              <h3 className="font-heading font-bold text-lg text-white">
                Context-Driven Advisory
              </h3>
              <p className="text-xs text-sand-surface/85 leading-relaxed font-sans font-light">
                Every advisory engagement is structured directly with client leadership, avoiding generic playbooks and ensuring statutory compliance.
              </p>
            </div>
            <div className="pt-3 border-t border-white/15 text-[11px] text-gold-light flex items-center gap-1.5 font-sans">
              <Info className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Tailored deliverables only</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
