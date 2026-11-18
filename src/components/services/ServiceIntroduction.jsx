import { motion } from 'framer-motion';

export default function ServiceIntroduction({
  eyebrow = 'Strategic Context',
  heading,
  text,
  sideContent = null
}) {
  return (
    <section className="w-full bg-white border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-[90%] max-w-[1680px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Introduction Column — Exact GCC Inner Page Teal Heading + Light Body */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className={`${sideContent ? 'lg:col-span-7' : 'lg:col-span-10 max-w-4xl'} space-y-5`}
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
                <span className="inline-block w-[50px] h-[2px] bg-[#019934]" aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
            )}

            {heading && (
              <h2 className="font-['Poppins',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#019934] tracking-[-0.01em] leading-[1.2]">
                {heading}
              </h2>
            )}

            <p className="font-['Poppins',sans-serif] font-light text-[15.5px] sm:text-[17px] text-[#3C3C3C] leading-[1.75]">
              {text}
            </p>
          </motion.div>

          {/* Optional Side Content — Exact GCC .grey-list / .boxed-para Architectural Callout */}
          {sideContent && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div className="rounded-[4px] bg-[#f7f7f7] border border-[#e5e7eb] border-l-[3px] border-l-[#019934] p-7 sm:p-9 space-y-4">
                {sideContent}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
