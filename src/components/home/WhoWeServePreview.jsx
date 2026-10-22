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
    <section id="who-we-serve" className="py-20 sm:py-28 lg:py-32 bg-[#F6F8F5] border-b border-sand-border/60 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        <SectionHeader
          badge={t('navigation.whoWeServe', 'Who We Serve')}
          title={t('home.whoWeServe.heading', 'Who We Serve')}
          subtitle={t('home.whoWeServe.subtitle', 'Tailored climate advisory for governments, exporters, companies, project developers, investors and institutions.')}
        />

        {/* 5 Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((aud, idx) => {
            const IconComponent = AUDIENCE_ICONS[idx % AUDIENCE_ICONS.length] || Building2;
            const isLast = idx === audiences.length - 1;

            return (
              <div 
                key={aud.id || idx}
                className={`p-8 sm:p-9 rounded-3xl bg-white border border-sand-border/80 shadow-subtle hover:border-forest/30 hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isLast ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-forest/5 text-forest flex items-center justify-center border border-forest/10 shadow-xs">
                      <IconComponent className="w-5 h-5 text-deep-green" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-mono font-bold text-gold-dark bg-gold/15 px-3.5 py-1 rounded-full border border-gold/20">
                      SEGMENT 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-forest leading-snug">
                    {aud.title}
                  </h3>

                  <p className="text-base text-charcoal/85 leading-relaxed font-sans font-normal">
                    {aud.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60">
                  <Link
                    to={getLocalizedPath('/who-we-serve')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-deep-green hover:text-forest transition-colors group/link"
                  >
                    <span>View advisory scope</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
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
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-forest hover:bg-forest-dark text-white font-semibold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>{t('home.whoWeServe.cta', 'Explore Client Segment Capabilities')}</span>
            <ArrowRight className="w-4.5 h-4.5 ml-1 text-gold" />
          </Link>
        </div>

      </div>
    </section>
  );
}
