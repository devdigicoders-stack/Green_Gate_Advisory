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
    <section id="solutions" className="py-20 sm:py-28 lg:py-32 bg-[#F6F8F5] border-b border-sand-border/60 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        <SectionHeader
          badge={t('home.featuredSolutions.eyebrow', 'Structured Advisory Packages')}
          title={t('home.featuredSolutions.heading', 'Featured Solutions')}
          subtitle={t('home.featuredSolutions.subtitle', 'High-priority advisory workstreams addressing immediate regulatory deadlines, compliance mandates and project readiness.')}
        />

        {/* 6 Featured Solutions Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((sol, idx) => (
            <div 
              key={idx}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-sand-border/80 shadow-subtle hover:border-forest/30 hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center font-mono font-bold text-xs border border-gold/20">
                    0{idx + 1}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-deep-green group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {sol.title}
                </h3>

                <p className="text-base sm:text-[17px] text-charcoal/90 leading-relaxed font-sans font-normal">
                  {sol.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-sand-border/70">
                <Link
                  to={getLocalizedPath(sol.link || '/services')}
                  className="link-editorial text-sm font-semibold flex items-center justify-between w-full"
                >
                  <span>View solution details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
