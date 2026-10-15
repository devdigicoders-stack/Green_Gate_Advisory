import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Factory, 
  Leaf, 
  LineChart, 
  Globe, 
  ArrowRight 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

const AUDIENCE_ICONS = [
  Building2,
  Factory,
  Leaf,
  LineChart,
  Globe
];

export default function WhoWeServePreview() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawAudiences = t('home.whoWeServe.audiences', { returnObjects: true }) || [];
  const audiences = Array.isArray(rawAudiences) ? rawAudiences : [];

  return (
    <section className="py-20 sm:py-28 bg-sage/60 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('home.whoWeServe.eyebrow', 'Client Groups')}
          title={t('home.whoWeServe.heading', 'Who We Serve')}
          subtitle={t('home.whoWeServe.subtitle', 'Tailored climate advisory for governments, exporters, companies, project developers, investors and institutions.')}
        />

        {/* 5 Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => {
            const IconComponent = AUDIENCE_ICONS[idx % AUDIENCE_ICONS.length] || Building2;
            const isLast = idx === audiences.length - 1;

            return (
              <div 
                key={aud.id || idx}
                className={`p-7 rounded-3xl bg-white border border-sand-border shadow-subtle hover:border-deep-green/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  isLast ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center border border-forest/10">
                      <IconComponent className="w-5 h-5 text-deep-green" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-dark bg-gold/15 px-2 py-0.5 rounded">
                      SEGMENT 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-forest leading-snug">
                    {aud.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-light">
                    {aud.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60">
                  <Link
                    to={getLocalizedPath('/who-we-serve')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-green hover:text-forest transition-colors group/link"
                  >
                    <span>View advisory scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore all CTA */}
        <div className="text-center pt-2">
          <Link
            to={getLocalizedPath('/who-we-serve')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-forest hover:bg-forest-dark text-white font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>{t('home.whoWeServe.cta', 'Explore Client Segment Capabilities')}</span>
            <ArrowRight className="w-4 h-4 ml-1 text-gold" />
          </Link>
        </div>

      </div>
    </section>
  );
}
