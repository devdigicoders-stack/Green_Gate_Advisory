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

        {/* Deliverables & Technical Workstreams - Clean Non-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-sand-border/80 pb-6 flex flex-col justify-between space-y-3 group hover:border-deep-green transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-deep-green">
                    WORKSTREAM {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-deep-green/60 group-hover:text-deep-green transition-colors" />
                </div>

                <p className="font-display font-bold text-base sm:text-lg text-forest group-hover:text-deep-green transition-colors leading-snug">
                  {item}
                </p>
              </div>

              <div className="text-[11px] font-semibold tracking-wider uppercase text-charcoal/60 font-sans">
                Technical Advisory Deliverable
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
