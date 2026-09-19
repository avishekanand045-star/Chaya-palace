import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Film, X, Sparkles, Volume2 } from 'lucide-react';
import heroImg from '../assets/images/chhaya_palace_hero_1786512270701.jpg';
import marriageHallImg from '../assets/images/chhaya_marriage_hall_1786512286692.jpg';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-24 bg-[#0d0e12] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-3">
            <Film className="w-3.5 h-3.5 text-[#e6c665]" />
            <span>Cinematic Property Walkthrough</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient mb-4">
            Experience CHHAYA PALACE
          </h2>
          <p className="text-sm sm:text-base text-[#e0dacb]/80 font-light">
            Take a visual tour of our hotel rooms, grand marriage hall, and event facilities in Dumka.
          </p>
        </div>

        {/* Video Player Card Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#16181f] group h-[380px] sm:h-[480px]">
          <img
            src={heroImg}
            alt="CHHAYA PALACE Experience Walkthrough"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-75 contrast-105 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-black/40 to-black/60" />

          {/* Central Animated Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#e6c665] to-[#c5a059] text-[#0d0e12] flex items-center justify-center shadow-2xl shadow-[#c5a059]/40 mb-6 group-hover:ring-8 ring-[#e6c665]/30 transition-all"
              aria-label="Watch Experience Video"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-[#0d0e12] ml-1" />
            </motion.button>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#e6c665] mb-2">
              WATCH EXPERIENCE
            </span>
            <p className="text-sm sm:text-lg font-serif-luxury text-[#fcfaf7] max-w-md">
              A Glimpse into Royalty & Hospitality in Dumka
            </p>
          </div>
        </div>
      </div>

      {/* Cinematic Walkthrough Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#12141a] border border-[#c5a059]/40 rounded-2xl max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#16181f] border border-[#c5a059]/40 text-[#e6c665] hover:bg-[#c5a059] hover:text-[#0d0e12] transition-colors z-20"
                aria-label="Close video modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="rounded-xl overflow-hidden relative aspect-video bg-[#000] border border-[#c5a059]/30 mb-6">
                {/* Visual Sequence Simulation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#12141a] via-[#16181f] to-[#0d0e12]">
                  <img
                    src={marriageHallImg}
                    alt="Chhaya Palace Property Walkthrough"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-90 animate-pulse duration-1000"
                  />
                  <div className="relative z-10 p-6 glass-panel-gold rounded-2xl max-w-md">
                    <Sparkles className="w-8 h-8 text-[#e6c665] mx-auto mb-3 animate-bounce" />
                    <h3 className="font-serif-luxury text-2xl font-bold gold-text-gradient mb-2">
                      CHHAYA PALACE Property Tour
                    </h3>
                    <p className="text-xs text-[#e0dacb]/90 font-light mb-4">
                      Experience the grand marriage hall, luxurious suites, and corporate conference room setups in full cinematic presentation.
                    </p>
                    <div className="inline-flex items-center space-x-2 text-[10px] text-[#e6c665] uppercase font-mono bg-[#0d0e12] px-3 py-1 rounded-full border border-[#c5a059]/40">
                      <Volume2 className="w-3 h-3" />
                      <span>Audio Visual Tour Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-[#e0dacb]">
                <span className="font-serif-luxury text-[#e6c665]">CHHAYA PALACE — Baba Mandir Road, Dumka</span>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="px-5 py-2 rounded-lg border border-[#c5a059]/30 text-[#e6c665] hover:bg-[#c5a059] hover:text-[#0d0e12]"
                >
                  Close Tour
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
