import React from 'react';
import { motion } from 'motion/react';
import { Star, Hotel, Sparkles, Briefcase, Building2, ShieldCheck, MapPin } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import heroImg from '../assets/images/chhaya_palace_hero_1786512270701.jpg';
import marriageHallImg from '../assets/images/chhaya_marriage_hall_1786512286692.jpg';
import royalSuiteImg from '../assets/images/chhaya_royal_suite_1786512323371.jpg';

export const AboutSection: React.FC = () => {
  const stats = [
    {
      value: '4.4 ★',
      label: 'Google Rating',
      subtext: 'Highly rated by local & visiting guests',
      icon: Star,
      color: 'text-amber-400'
    },
    {
      value: 'Hotel',
      label: 'Comfortable Stay',
      subtext: 'Deluxe rooms & executive suites',
      icon: Hotel,
      color: 'text-[#e6c665]'
    },
    {
      value: 'Wedding',
      label: 'Celebration Spaces',
      subtext: 'Grand marriage hall & stage decor',
      icon: Sparkles,
      color: 'text-[#c5a059]'
    },
    {
      value: 'Business',
      label: 'Meeting Facilities',
      subtext: 'Equipped hall for corporate events',
      icon: Briefcase,
      color: 'text-[#9e7b3b]'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0b0c10] overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Editorial Story</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient mb-4">
            A Place Made for Memorable Moments
          </h2>
          <p className="text-sm sm:text-base text-[#e0dacb]/80 font-light leading-relaxed">
            Situated on Baba Mandir Road in Dumka, CHHAYA PALACE is a distinguished destination where fine hospitality, grand celebrations, and professional gatherings unite seamlessly.
          </p>
        </div>

        {/* Editorial Layout: Grid of Images and Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Main Hero Property Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#16181f]">
              <img
                src={heroImg}
                alt="Chhaya Palace Facade Dumka"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl">
                <span className="text-xs uppercase tracking-widest text-[#e6c665] font-semibold block mb-1">
                  Premier Dumka Destination
                </span>
                <p className="text-xs text-[#e0dacb]/90 font-light">
                  Baba Mandir Road, Kumhar Para, Dumka, Jharkhand 814101
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Editorial Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6 glass-panel-gold p-8 rounded-2xl"
          >
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#e6c665]">
              <ShieldCheck className="w-4 h-4 text-[#e6c665]" />
              <span>Hospitality & Elegance</span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#fcfaf7] leading-snug">
              Creating Timeless Memories in Dumka
            </h3>

            <p className="text-xs sm:text-sm text-[#e0dacb]/85 leading-relaxed font-light">
              Whether you are seeking a restful stay during business or family travel, hosting a majestic wedding ceremony with family and friends, or organizing a corporate seminar, CHHAYA PALACE delivers refined comfort and attentive coordination.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-xs text-[#e0dacb]">
                <div className="w-2 h-2 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                <span><strong>Prime Dumka Location:</strong> Easy accessibility on Baba Mandir Road, Kumhar Para.</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#e0dacb]">
                <div className="w-2 h-2 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                <span><strong>Versatile Venue Spaces:</strong> Custom Marriage Hall & Corporate Meeting Hall under one roof.</span>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#e0dacb]">
                <div className="w-2 h-2 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                <span><strong>Hospitable Care:</strong> Attentive hospitality team dedicated to guest comfort.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-[#c5a059]/20 hover:border-[#c5a059]/50 transition-all transform hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#16181f] border border-[#c5a059]/30 flex items-center justify-center text-[#e6c665] group-hover:scale-110 transition-transform">
                    <IconComp className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <span className="text-[10px] text-[#c5a059] uppercase tracking-widest font-mono">
                    STAT 0{idx + 1}
                  </span>
                </div>
                <h4 className="font-serif-luxury text-2xl font-bold gold-text-gradient mb-1">
                  {stat.value}
                </h4>
                <p className="text-xs uppercase font-semibold tracking-wider text-[#fcfaf7] mb-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-[#e0dacb]/70 font-light">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
