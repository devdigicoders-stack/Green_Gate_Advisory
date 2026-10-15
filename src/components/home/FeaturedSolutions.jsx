import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

export default function FeaturedSolutions() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawSolutions = t('home.featuredSolutions.solutions', { returnObjects: true }) || [];
  const solutions = Array.isArray(rawSolutions) ? rawSolutions : [];

  return (
    <section className="py-20 sm:py-28 bg-sage/50 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('home.featuredSolutions.eyebrow', 'Structured Advisory Packages')}
          title={t('home.featuredSolutions.heading', 'Featured Solutions')}
          subtitle={t('home.featuredSolutions.subtitle', 'High-priority advisory workstreams addressing immediate regulatory deadlines, compliance mandates and project readiness.')}
        />

        {/* 6 Featured Solutions Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-3xl bg-white border border-sand-border shadow-subtle hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold-dark flex items-center justify-center font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-deep-green/50 group-hover:text-deep-green transition-colors" />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                  {sol.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-sand-border/70">
                <Link
                  to={getLocalizedPath(sol.link || '/services')}
                  className="link-editorial text-xs font-semibold flex items-center justify-between w-full"
                >
                  <span>View solution details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
