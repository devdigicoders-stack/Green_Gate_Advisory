import { useTranslation } from 'react-i18next';
import { ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-sage/60 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subheading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-forest/5 text-deep-green border border-forest/10">
              <Compass className="w-3.5 h-3.5 text-deep-green" />
              <span>{t('about.whoWeAre.eyebrow', 'Who We Are')}</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-[1.12]">
              {t('about.whoWeAre.heading', 'Connecting Strategic Insight, Regulatory Clarity & Practical Execution')}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-charcoal leading-relaxed font-sans">
              <p className="font-medium text-forest-dark/90 leading-relaxed">
                {t('about.whoWeAre.p1')}
              </p>

              <p className="text-charcoal-muted leading-relaxed">
                {t('about.whoWeAre.p2')}
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-forest">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0" />
                <span>{t('about.whoWeAre.capability1', 'Regulatory Analysis & Compliance')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0" />
                <span>{t('about.whoWeAre.capability2', 'Carbon Project Feasibility & MRV')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0" />
                <span>{t('about.whoWeAre.capability3', 'Climate Finance Structuring')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0" />
                <span>{t('about.whoWeAre.capability4', 'Measurable Implementation Plans')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame & Caption */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-sand-border shadow-elevated bg-white p-3">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src="/images/about-landscape.jpg"
                  alt={t('about.whoWeAre.imageAlt')}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-gold-light mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    <span>{t('about.whoWeAre.badgeIntegrity', 'Technical Integrity')}</span>
                  </div>
                  <p className="text-xs text-white/90 font-sans leading-snug">
                    {t('about.whoWeAre.caption')}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
