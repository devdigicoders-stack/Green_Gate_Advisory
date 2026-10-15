import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function ServiceProcess({ 
  badge = 'Methodology & Process', 
  title = 'Delivery Pathway', 
  subtitle, 
  steps = [] 
}) {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle}
        />

        {/* Process Steps Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-sage/40 border border-sand-border p-6 hover:bg-white hover:border-deep-green/30 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-mono font-extrabold text-gold">
                    {st.step || (idx < 9 ? `0${idx + 1}` : idx + 1)}
                  </span>
                  {idx < steps.length - 1 ? (
                    <ArrowRight className="w-4 h-4 text-charcoal-muted/40 group-hover:text-deep-green group-hover:translate-x-0.5 transition-all" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-deep-green" />
                  )}
                </div>

                <h3 className="font-display font-bold text-base text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {st.title}
                </h3>

                {st.desc && (
                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light">
                    {st.desc}
                  </p>
                )}
              </div>

              <div className="pt-2 text-[10px] font-mono font-bold tracking-widest uppercase text-gold-dark">
                STAGE {st.step || (idx < 9 ? `0${idx + 1}` : idx + 1)} OF {steps.length < 10 ? `0${steps.length}` : steps.length}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
