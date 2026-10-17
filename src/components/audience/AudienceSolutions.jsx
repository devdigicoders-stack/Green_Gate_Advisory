import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ShieldCheck, 
  Sparkles, 
  Landmark, 
  Scale, 
  BarChart3, 
  FileText, 
  ArrowRight 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

const SOLUTION_ICONS = [
  ShieldCheck,
  Sparkles,
  Landmark,
  Scale,
  BarChart3,
  FileText
];

export default function AudienceSolutions() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawSolutions = t('audience.solutions.items', { returnObjects: true }) || [];
  const solutions = Array.isArray(rawSolutions) ? rawSolutions : [];

  return (
    <section className="py-14 sm:py-20 bg-sage/30 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('audience.solutions.eyebrow', 'Core Workstreams')}
          title={t('audience.solutions.heading', 'Featured Advisory Solutions')}
          subtitle={t('audience.solutions.subtitle', 'High-priority advisory workstreams addressing immediate regulatory deadlines, compliance mandates, and project readiness.')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const Icon = SOLUTION_ICONS[idx] || ShieldCheck;
            return (
              <Link
                key={idx}
                to={getLocalizedPath(`/services/${item.slug}`)}
                className="rounded-3xl bg-white border border-sand-border p-7 sm:p-8 shadow-subtle hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-gold-dark">
                      SOLUTION 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-green group-hover:text-forest transition-colors">
                  <span>View Detailed Practice</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
