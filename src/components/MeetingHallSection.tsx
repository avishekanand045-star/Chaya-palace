import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Monitor, Users, Zap, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import meetingHallImg from '../assets/images/chhaya_meeting_hall_1786512310484.jpg';

interface MeetingHallSectionProps {
  onOpenEnquiry: (eventType?: string) => void;
}

export const MeetingHallSection: React.FC<MeetingHallSectionProps> = ({ onOpenEnquiry }) => {
  const meetingFeatures = [
    { title: 'Corporate Boardroom Setup', desc: 'Sleek executive seating layout for high-level meetings & strategy sessions.' },
    { title: 'High-Tech Display & Audio', desc: 'Presentation display screens and crisp sound microphone setups.' },
    { title: 'Air Conditioning & Power Backup', desc: 'Climate controlled comfort and silent power generators ensuring seamless proceedings.' },
    { title: 'High-Speed Wi-Fi', desc: 'Reliable wireless connectivity for video conferencing and online presentations.' },
    { title: 'High Tea & Corporate Dining', desc: 'Catering support for refreshment breaks, executive lunches, and teas.' },
    { title: 'Flexible Seating Configurations', desc: 'Adaptable to theatre style, classroom style, or hollow square setups.' }
  ];

  return (
    <section id="meeting-hall" className="relative py-24 bg-[#0b0c10] overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#e6c665]" />
            <span>Corporate & Conference Venue</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient mb-4">
            Meet. Connect. Achieve.
          </h2>
          <p className="text-sm sm:text-base text-[#e0dacb]/80 font-light">
            CHHAYA PALACE provides a quiet, well-equipped, and professional venue in Dumka for corporate meetings, workshops, and business conferences.
          </p>
        </div>

        {/* Corporate Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#16181f] group"
          >
            <img
              src={meetingHallImg}
              alt="CHHAYA PALACE Corporate Meeting Hall"
              referrerPolicy="no-referrer"
              className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-xl flex items-center justify-between text-xs text-[#fcfaf7]">
              <div className="flex items-center space-x-2">
                <Monitor className="w-4 h-4 text-[#e6c665]" />
                <span className="font-semibold text-[#fcfaf7]">Executive Conference Room</span>
              </div>
              <span className="text-[10px] text-[#c5a059] uppercase tracking-widest">
                Dumka Business Hub
              </span>
            </div>
          </motion.div>

          {/* Corporate Features List */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 glass-panel-gold p-8 rounded-2xl border border-[#c5a059]/30 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#e6c665] block mb-2">
                Professional Hospitality
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#fcfaf7] mb-3">
                Tailored for Business Productivity
              </h3>
              <p className="text-xs sm:text-sm text-[#e0dacb]/85 font-light leading-relaxed mb-6">
                Host your seminars, company reviews, training workshops, or client presentations in an atmosphere of quiet professionalism and modern comfort.
              </p>

              <div className="space-y-3 mb-8">
                {meetingFeatures.slice(0, 4).map((feat) => (
                  <div key={feat.title} className="flex items-start space-x-3 text-xs text-[#e0dacb]">
                    <CheckCircle2 className="w-4 h-4 text-[#e6c665] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fcfaf7] font-semibold">{feat.title}:</strong>{' '}
                      <span className="text-[#e0dacb]/80 font-light">{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenEnquiry('Meeting')}
              className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0d0e12] bg-gradient-to-r from-[#e6c665] via-[#c5a059] to-[#9e7b3b] hover:brightness-110 shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <span>Enquire for Meeting Hall</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
