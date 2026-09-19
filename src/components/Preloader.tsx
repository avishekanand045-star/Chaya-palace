import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 600); // Allow fade out animation to finish
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0e12] text-[#fcfaf7] overflow-hidden"
        >
          {/* Subtle background ambient gold glow */}
          <div className="absolute w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            {/* Royal Crown Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-4 text-[#e6c665] p-3 rounded-full border border-[#c5a059]/30 bg-[#16181f]/80"
            >
              <Crown className="w-8 h-8 text-[#e6c665]" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.4em] text-[#c5a059] font-medium mb-2"
            >
              WELCOME TO
            </motion.span>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-wider gold-text-gradient mb-3"
            >
              CHHAYA PALACE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs sm:text-sm text-[#e0dacb]/80 tracking-widest font-light uppercase"
            >
              Hotel • Marriage Hall • Meeting Hall
            </motion.p>

            {/* Minimal Gold Progress Bar */}
            <div className="w-48 sm:w-64 h-[2px] bg-[#2a2721] rounded-full overflow-hidden mt-8 relative">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#9e7b3b] via-[#e6c665] to-[#fff1d0]"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-[10px] text-[#c5a059]/70 tracking-widest uppercase mt-3"
            >
              Dumka, Jharkhand
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
