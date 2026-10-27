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
    <section id="insights" className="py-20 sm:py-28 lg:py-32 bg-[#F6F8F5] border-b border-sand-border/60 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        <SectionHeader
          badge={t('home.insights.eyebrow', 'Knowledge & Briefings')}
          title={t('home.insights.heading', 'Insights & Resources')}
          subtitle={t('home.insights.description')}
        />

        {/* 8 Knowledge Stream Resource Tiles (Strictly Verified Focus Areas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {streams.map((stream, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-3xl bg-white border border-sand-border/80 hover:border-forest/30 shadow-subtle hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-gold-dark bg-gold/15 px-2.5 py-1 rounded-full border border-gold/20 inline-block">
                  KNOWLEDGE STREAM 0{idx + 1}
                </span>

                <h3 className="font-display font-bold text-lg sm:text-xl text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {stream.title}
                </h3>

                <p className="text-[15px] sm:text-base text-charcoal/90 leading-relaxed font-sans font-normal">
                  {stream.focus}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs sm:text-[13px] text-deep-green font-semibold">
                <CheckCircle2 className="w-4 h-4 text-deep-green" />
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
