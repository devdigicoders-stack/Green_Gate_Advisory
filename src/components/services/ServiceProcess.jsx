import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function ServiceProcess({ 
  badge = 'Methodology & Process', 
  title = 'Delivery Pathway', 
  subtitle, 
  steps = [] 
}) {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle}
        />

        {/* Clean Process Pathway Timeline - Non-Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="relative space-y-3 group"
            >
              <div className="flex items-center justify-between pb-3 border-b-2 border-sand-border group-hover:border-deep-green transition-colors">
                <span className="text-xl font-mono font-bold text-deep-green">
                  {st.step || (idx < 9 ? `0${idx + 1}` : idx + 1)}
                </span>
                {idx < steps.length - 1 ? (
                  <ArrowRight className="w-4 h-4 text-charcoal/40 group-hover:text-deep-green group-hover:translate-x-1 transition-all" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-deep-green" />
                )}
              </div>

              <div className="space-y-1.5 pt-1">
                <h3 className="font-display font-bold text-base sm:text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {st.title}
                </h3>

                {st.desc && (
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-normal">
                    {st.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
