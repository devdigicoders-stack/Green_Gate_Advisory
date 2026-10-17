export default function ServiceIntroduction({ 
  eyebrow = 'Strategic Context', 
  heading, 
  text, 
  sideContent = null 
}) {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Introduction Column */}
          <div className={`${sideContent ? 'lg:col-span-7' : 'lg:col-span-10 max-w-4xl'} space-y-6`}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-forest/5 text-deep-green border border-forest/10">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>{eyebrow}</span>
              </div>
            )}

            {heading && (
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-[1.12]">
                {heading}
              </h2>
            )}

            <p className="text-base sm:text-lg text-charcoal leading-relaxed font-sans font-light">
              {text}
            </p>
          </div>

          {/* Optional Side Content / Key Highlights Card */}
          {sideContent && (
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-sage/50 border border-sand-border p-6 sm:p-8 shadow-subtle space-y-4">
                {sideContent}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
