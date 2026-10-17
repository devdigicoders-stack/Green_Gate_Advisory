import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function ServiceScope({ 
  badge = 'Advisory Scope', 
  title = 'How We Can Support', 
  subtitle, 
  items = [] 
}) {
  return (
    <section className="py-14 sm:py-20 bg-sage/40 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle}
        />

        {/* Deliverables & Advisory Scope Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-sand-border/90 p-6 sm:p-7 shadow-subtle hover:shadow-premium hover:border-deep-green/30 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-deep-green bg-sage px-3 py-1 rounded-full border border-forest/5">
                    WORKSTREAM {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-forest/5 flex items-center justify-center text-deep-green group-hover:bg-deep-green group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <p className="font-display font-bold text-sm sm:text-base text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {item}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-semibold tracking-wide uppercase text-charcoal-muted/70 font-sans">
                Technical Advisory Deliverable
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
