import { useTranslation } from 'react-i18next';
import { 
  Sparkles, 
  ShieldCheck, 
  Scale, 
  Landmark, 
  Trees, 
  FileText, 
  BarChart3, 
  GraduationCap, 
  AlertCircle 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const AREA_ICONS = [
  Sparkles,
  ShieldCheck,
  Scale,
  Landmark,
  Trees,
  FileText,
  BarChart3,
  GraduationCap
];

export default function ContactIntroduction() {
  const { t } = useTranslation();

  const rawAreas = t('contact.intro.areas', { returnObjects: true }) || [];
  const areas = Array.isArray(rawAreas) ? rawAreas : [];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          badge={t('contact.intro.eyebrow', 'Consultation Scope')}
          title={t('contact.intro.heading', 'Structured Discussion Across Eight Specialized Areas')}
          subtitle={t('contact.intro.lead', 'Every advisory engagement begins with clarifying your operating context, statutory obligations, data availability, and strategic milestones.')}
        />

        {/* 8 Discussion Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, idx) => {
            const Icon = AREA_ICONS[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-sage/30 border border-sand-border/80 hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors">
                  <Icon className="w-5 h-5 text-deep-green group-hover:text-gold" />
                </div>
                <h3 className="font-display font-bold text-base text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {area.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light">
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Consultation Scope Discipline Notice */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-forest/5 border border-forest/10 text-xs text-charcoal-muted font-sans max-w-4xl mx-auto">
          <AlertCircle className="w-4 h-4 text-gold flex-shrink-0" />
          <span>
            {t('contact.intro.notice', 'Consultation discipline: All discussions are strictly preliminary and focused on scoping technical feasibility and regulatory requirements. We do not make speculative funding promises or guaranteed outcomes.')}
          </span>
        </div>

      </div>
    </section>
  );
}
