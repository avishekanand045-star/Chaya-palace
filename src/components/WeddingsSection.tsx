import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, PartyPopper, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { WEDDING_CATEGORIES } from '../data/propertyData';

interface WeddingsSectionProps {
  onOpenEnquiry: (eventType?: string) => void;
}

export const WeddingsSection: React.FC<WeddingsSectionProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState(WEDDING_CATEGORIES[0]);

  return (
    <section id="weddings" className="relative py-24 bg-[#0b0c10] overflow-hidden">
      {/* Subtle Golden Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e6c665]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-[#e6c665]" />
            <span>Grand Celebrations</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient mb-4">
            Your Celebration. Your Palace.
          </h2>
          <p className="text-sm sm:text-base text-[#e0dacb]/80 font-light">
            Create unforgettable moments and grand wedding memories at CHHAYA PALACE, Dumka.
          </p>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {WEDDING_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory.id === cat.id
                  ? 'bg-gradient-to-r from-[#e6c665] to-[#c5a059] text-[#0d0e12] shadow-lg shadow-[#c5a059]/20'
                  : 'bg-[#16181f] text-[#e0dacb]/80 border border-[#2a2721] hover:border-[#c5a059]/50 hover:text-[#fcfaf7]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Celebration Feature Showcase */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 border border-[#c5a059]/30 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Media */}
            <motion.div
              key={activeCategory.id + '-img'}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 relative rounded-2xl overflow-hidden h-72 sm:h-96 border border-[#c5a059]/30 shadow-xl group"
            >
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 glass-panel rounded-xl flex items-center justify-between text-xs text-[#fcfaf7]">
                <span className="font-serif-luxury font-bold text-[#e6c665]">
                  CHHAYA PALACE Marriage & Event Space
                </span>
                <span className="text-[10px] text-[#c5a059] uppercase tracking-widest">
                  Dumka, Jharkhand
                </span>
              </div>
            </motion.div>

            {/* Event Details Content */}
            <motion.div
              key={activeCategory.id + '-text'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#e6c665] block mb-2">
                  Event Distinction
                </span>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#fcfaf7] mb-3">
                  {activeCategory.title}
                </h3>
                <p className="text-sm text-[#e0dacb]/90 font-light leading-relaxed mb-6">
                  {activeCategory.description}
                </p>

                {/* Event Highlights List */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c5a059]">
                    Key Event Features & Setup
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCategory.highlights.map((item) => (
                      <div
                        key={item}
                        className="p-2.5 rounded-lg bg-[#16181f]/90 border border-[#c5a059]/20 text-xs text-[#e0dacb] flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#e6c665] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call To Action */}
              <button
                onClick={() => onOpenEnquiry(activeCategory.title)}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#0d0e12] bg-gradient-to-r from-[#e6c665] via-[#c5a059] to-[#9e7b3b] hover:brightness-110 shadow-xl shadow-[#c5a059]/20 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
