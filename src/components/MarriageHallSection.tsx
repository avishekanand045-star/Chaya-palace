import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Sparkles, Check, Calendar, ArrowRight, ShieldCheck, X } from 'lucide-react';
import marriageHallImg from '../assets/images/chhaya_marriage_hall_1786512286692.jpg';
import heroImg from '../assets/images/chhaya_palace_hero_1786512270701.jpg';

interface MarriageHallSectionProps {
  onOpenEnquiry: (eventType?: string) => void;
}

export const MarriageHallSection: React.FC<MarriageHallSectionProps> = ({ onOpenEnquiry }) => {
  const [showInspector, setShowInspector] = useState(false);

  const hallFeatures = [
    { title: 'Grand Stage & Mandap Setup', desc: 'Customizable stage elevated for optimum guest visibility and bridal entry.' },
    { title: 'Crystal Lighting & Chandelier Ambiance', desc: 'Warm royal lighting creating regal photograph opportunities.' },
    { title: 'Spacious Dining & Buffet Layout', desc: 'Dedicated dining zone ensuring hygienic and comfortable banquet service.' },
    { title: 'Air-Conditioned Comfort & Backup', desc: 'Climate control and silent heavy generator power backup for uninterrupted events.' },
    { title: 'Bridal & Family Changing Rooms', desc: 'Private, secure changing rooms adjacent to the hall for wedding families.' },
    { title: 'Decor & Theme Flexibility', desc: 'Open to customized floral, royal, and contemporary stage decoration setups.' }
  ];

  return (
    <section className="relative py-24 bg-[#0d0e12] overflow-hidden">
      {/* Background Visual Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#16181f]">
          {/* Hero Banner Visual */}
          <div className="relative h-96 sm:h-[480px]">
            <img
              src={marriageHallImg}
              alt="CHHAYA PALACE Grand Marriage Hall"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-black/40" />

            {/* Overlaid Title Content */}
            <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f]/90 border border-[#c5a059]/40 text-xs text-[#e6c665] uppercase tracking-widest mb-3 w-fit">
                <Crown className="w-3.5 h-3.5 text-[#e6c665]" />
                <span>Marriage Banquet Hall</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#fcfaf7] gold-text-gradient mb-3">
                A Grand Space for Grand Celebrations
              </h2>
              <p className="text-xs sm:text-base text-[#e0dacb]/90 font-light leading-relaxed mb-6">
                Chhaya Palace Marriage Hall offers a majestic setting for weddings, receptions, and traditional ceremonies in Dumka.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowInspector(true)}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#fcfaf7] border border-[#c5a059] bg-[#16181f]/80 hover:bg-[#c5a059] hover:text-[#0d0e12] transition-all flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-[#e6c665]" />
                  <span>Inspect Hall Features</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry('Wedding')}
                  className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#0d0e12] bg-gradient-to-r from-[#e6c665] to-[#c5a059] hover:brightness-110 shadow-lg"
                >
                  Check Hall Availability
                </button>
              </div>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="p-6 sm:p-10 bg-[#12141a] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-[#c5a059]/20">
            {hallFeatures.map((feat, idx) => (
              <div key={feat.title} className="p-4 rounded-xl bg-[#16181f] border border-[#2a2721] flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#0d0e12] border border-[#c5a059]/30 flex items-center justify-center text-[#e6c665] shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#e6c665]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#fcfaf7] mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-[11px] text-[#e0dacb]/70 font-light leading-snug">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hall Feature Inspector Lightbox */}
      <AnimatePresence>
        {showInspector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowInspector(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#12141a] border border-[#c5a059]/40 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowInspector(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-[#e6c665] hover:bg-[#c5a059] hover:text-[#0d0e12] transition-colors"
                aria-label="Close inspector"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-serif-luxury text-3xl font-bold gold-text-gradient mb-2">
                CHHAYA PALACE Marriage Hall Specifications
              </h3>
              <p className="text-xs text-[#c5a059] uppercase tracking-widest font-semibold mb-6">
                Dumka Premier Banquet Venue
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl overflow-hidden h-48 border border-[#c5a059]/30">
                  <img src={marriageHallImg} alt="Marriage Hall Decor" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden h-48 border border-[#c5a059]/30">
                  <img src={heroImg} alt="Hall Night Lighting" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-3 mb-6 text-xs text-[#e0dacb]/90 font-light">
                <p>
                  Our marriage hall is engineered for royal wedding experiences. From intricate floral stage design to spacious guest circulation and dining setups, our event managers work closely with families to ensure your celebration proceeds smoothly.
                </p>
                <div className="p-3 rounded-lg bg-[#16181f] border border-[#c5a059]/20 flex items-center space-x-2 text-xs text-[#e6c665]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Exact guest capacity and decoration packages are tailored during booking enquiry.</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#2a2721]">
                <button
                  onClick={() => setShowInspector(false)}
                  className="px-5 py-2.5 rounded-xl border border-[#2a2721] text-xs text-[#e0dacb]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowInspector(false);
                    onOpenEnquiry('Wedding');
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0e12] bg-gradient-to-r from-[#e6c665] to-[#c5a059]"
                >
                  Check Availability Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
