import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EVENT_STEPS } from '../data/propertyData';
import { MessageSquare, LayoutGrid, Sparkles, PartyPopper, CheckCircle2 } from 'lucide-react';

interface EventTimelineProps {
  onOpenEnquiry: (eventType?: string) => void;
}

export const EventTimeline: React.FC<EventTimelineProps> = ({ onOpenEnquiry }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    MessageSquare,
    LayoutGrid,
    Sparkles,
    PartyPopper
  };

  return (
    <section className="relative py-24 bg-[#0d0e12] border-y border-[#c5a059]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e6c665]" />
            <span>Seamless Planning Journey</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient mb-4">
            How We Bring Your Event to Life
          </h2>
          <p className="text-sm sm:text-base text-[#e0dacb]/80 font-light">
            A simple 4-step event coordination process at CHHAYA PALACE Dumka.
          </p>
        </div>

        {/* Timeline Desktop Horizontal Track */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {EVENT_STEPS.map((step, idx) => {
            const IconComp = iconMap[step.icon] || Sparkles;
            const isActive = idx === activeStepIndex;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
                  isActive
                    ? 'bg-[#16181f] border-[#e6c665] shadow-xl shadow-[#c5a059]/15 -translate-y-1'
                    : 'bg-[#12141a]/60 border-[#2a2721] hover:border-[#c5a059]/40'
                }`}
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-luxury text-3xl font-bold gold-text-gradient">
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-[#c5a059] text-[#0d0e12]' : 'bg-[#16181f] text-[#e6c665] border border-[#2a2721]'}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif-luxury text-lg font-bold text-[#fcfaf7] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#e0dacb]/80 font-light leading-relaxed mb-3">
                  {step.description}
                </p>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-3 border-t border-[#c5a059]/30 text-[11px] text-[#e6c665] font-medium"
                  >
                    {step.detail}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenEnquiry()}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0d0e12] bg-gradient-to-r from-[#e6c665] via-[#c5a059] to-[#9e7b3b] hover:brightness-110 shadow-lg"
          >
            Start Step 01 — Tell Us Your Event
          </button>
        </div>
      </div>
    </section>
  );
};
