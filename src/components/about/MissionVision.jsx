import { useTranslation } from 'react-i18next';
import { Compass, Eye, ShieldCheck, Sparkles } from 'lucide-react';

export default function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-sage/40 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <div className="relative rounded-3xl bg-white border border-sand-border/80 p-8 sm:p-10 lg:p-12 shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-300">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-widest uppercase text-gold-dark">
                  {t('about.missionVision.missionEyebrow', 'Our Driving Mandate')}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-forest tracking-tight">
                  {t('about.missionVision.missionTitle', 'Our Mission')}
                </h3>
                <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed font-sans font-normal">
                  {t('about.missionVision.missionText')}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-sand-border/60 flex items-center gap-2 text-xs sm:text-sm font-semibold text-deep-green">
              <ShieldCheck className="w-4 h-4 text-gold-dark" />
              <span>{t('about.missionVision.missionFooter', 'Rigorous design, preparation, finance, and reporting')}</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-3xl bg-white border border-sand-border/80 p-8 sm:p-10 lg:p-12 shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-300">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-widest uppercase text-gold-dark">
                  {t('about.missionVision.visionEyebrow', 'Our Long-Term Horizon')}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-forest tracking-tight">
                  {t('about.missionVision.visionTitle', 'Our Vision')}
                </h3>
                <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed font-sans font-normal">
                  {t('about.missionVision.visionText')}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-sand-border/60 flex items-center gap-2 text-xs sm:text-sm font-semibold text-deep-green">
              <Sparkles className="w-4 h-4 text-gold-dark" />
              <span>{t('about.missionVision.visionFooter', 'Unlocking opportunities and bankable sustainable projects')}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
