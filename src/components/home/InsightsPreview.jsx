import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useLocale } from '../../hooks/useLocale';

export default function InsightsPreview() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocale();

  const rawStreams = t('home.insights.streams', { returnObjects: true }) || [];
  const streams = Array.isArray(rawStreams) ? rawStreams : [];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('home.insights.eyebrow', 'Knowledge & Briefings')}
          title={t('home.insights.heading', 'Insights & Resources')}
          subtitle={t('home.insights.description')}
        />

        {/* 8 Knowledge Stream Resource Tiles (Strictly Verified Focus Areas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {streams.map((stream, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-sage/60 border border-sand-border/80 hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-200 flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-gold-dark">
                  KNOWLEDGE STREAM 0{idx + 1}
                </span>

                <h3 className="font-display font-bold text-sm text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {stream.title}
                </h3>

                <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light">
                  {stream.focus}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs text-deep-green font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-deep-green/60" />
                <span>Advisory Overview</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Editorial Disclaimer & Link to /insights */}
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-sage border border-sand-border text-xs text-charcoal-muted text-left font-sans">
            <ShieldAlert className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
            <p>{t('home.insights.notice')}</p>
          </div>

          <div>
            <Link
              to={getLocalizedPath('/insights')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-forest hover:bg-forest-dark text-white font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>{t('home.insights.cta', 'Explore All Knowledge Streams')}</span>
              <ArrowRight className="w-4 h-4 ml-1 text-gold" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
