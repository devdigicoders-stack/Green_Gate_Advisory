import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../../assets/logo-white.png';

export function StandaloneLoader() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#06180E] flex flex-col items-center justify-center p-6 select-none">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,153,53,0.22)_0%,rgba(6,24,14,0.95)_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-6 max-w-sm text-center">
        {/* Animated Brand Logo */}
        <motion.div
          animate={{ scale: [0.96, 1.02, 0.96], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 1.0, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center justify-center"
        >
          <img
            src={logoWhite}
            alt="Green Gate Advisory"
            className="h-14 sm:h-16 w-auto object-contain brightness-0 invert drop-shadow-[0_8px_24px_rgba(1,153,53,0.35)]"
            onError={(e) => {
              e.currentTarget.src = '/images/Green_gate_Logo_Concept_01-removebg-preview.png';
            }}
          />
        </motion.div>

        {/* High-Precision Scanning Progress Line */}
        <div className="w-52 sm:w-64 h-[2.5px] bg-white/10 relative overflow-hidden rounded-none">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.95, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-[#019935] via-[#4ADE80] to-[#019935] shadow-[0_0_12px_#019935]"
          />
        </div>

        {/* Brand Label & Tagline */}
        <div className="space-y-1.5 pt-0.5">
          <div className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#019935] uppercase">
            GREEN GATE ADVISORY
          </div>
          <p className="text-[12px] sm:text-[13px] text-white/70 font-sans font-light tracking-wide">
            Strategic Climate Execution
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RouteTransitionLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for exactly 1 second on route change and initial load
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Exactly 1.0 second (1000ms)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key={location.pathname + '-loader'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-[#06180E] flex flex-col items-center justify-center p-6 select-none pointer-events-auto"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,153,53,0.22)_0%,rgba(6,24,14,0.95)_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-6 max-w-sm text-center">
            {/* Animated Brand Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [0.92, 1.02, 0.98], opacity: [0.3, 1, 1] }}
              transition={{ duration: 0.95, ease: 'easeOut' }}
              className="relative flex items-center justify-center"
            >
              <img
                src={logoWhite}
                alt="Green Gate Advisory"
                className="h-14 sm:h-16 w-auto object-contain brightness-0 invert drop-shadow-[0_8px_24px_rgba(1,153,53,0.35)]"
                onError={(e) => {
                  e.currentTarget.src = '/images/Green_gate_Logo_Concept_01-removebg-preview.png';
                }}
              />
            </motion.div>

            {/* High-Precision Scanning Progress Line */}
            <div className="w-52 sm:w-64 h-[2.5px] bg-white/10 relative overflow-hidden rounded-none">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.95, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#019935] via-[#4ADE80] to-[#019935] shadow-[0_0_12px_#019935]"
              />
            </div>

            {/* Brand Label & Tagline */}
            <div className="space-y-1.5 pt-0.5">
              <div className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#019935] uppercase">
                GREEN GATE ADVISORY
              </div>
              <p className="text-[12px] sm:text-[13px] text-white/70 font-sans font-light tracking-wide">
                Strategic Climate Execution
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
