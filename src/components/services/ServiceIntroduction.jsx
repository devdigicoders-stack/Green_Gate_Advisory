import { motion } from 'framer-motion';

export default function ServiceIntroduction({ 
  eyebrow = 'Strategic Context', 
  heading, 
  text, 
  sideContent = null 
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5EDE7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Main Introduction Column */}
          <motion.div 
            initial={{ opacity: 0, x: sideContent ? -50 : 0, y: sideContent ? 0 : 25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className={`${sideContent ? 'lg:col-span-7' : 'lg:col-span-10 max-w-4xl'} space-y-5`}
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none text-xs font-mono font-bold tracking-wider uppercase bg-[#E8F6ED] text-[#019935] border border-[#CDE8D5]">
                <span className="w-1.5 h-1.5 rounded-none bg-[#019935]"></span>
                <span>{eyebrow}</span>
              </div>
            )}

            {heading && (
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16221A] tracking-tight leading-snug">
                {heading}
              </h2>
            )}

            <p className="text-sm sm:text-base text-[#4E5E54] leading-relaxed font-sans font-normal">
              {text}
            </p>
          </motion.div>

          {/* Optional Side Content / Key Highlights Card */}
          {sideContent && (
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div className="rounded-none bg-white border border-[#DCE8E0] border-l-4 border-l-[#019935] p-6 sm:p-8 space-y-4 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.04)]">
                {sideContent}
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
