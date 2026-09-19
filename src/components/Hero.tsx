import React from 'react';
import { motion } from 'motion/react';
import { Crown, Phone, ArrowDown, Star, MapPin, Sparkles } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import heroImg from '../assets/images/chhaya_palace_hero_1786512270701.jpg';

interface HeroProps {
  onOpenEnquiry: () => void;
  onOpenConcierge: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onOpenConcierge }) => {
  const scrollToExplore = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Parallax Zoom and Cinematic Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 12, ease: 'easeOut' }}
          src={heroImg}
          alt="CHHAYA PALACE Dumka Exterior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Layered Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-[#0d0e12]" />
      </div>

      {/* Floating Gold Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#e6c665] opacity-60 blur-[1px] animate-pulse" />
        <div className="absolute top-1/3 right-12 w-3 h-3 rounded-full bg-[#c5a059] opacity-40 blur-[1px] animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 rounded-full bg-[#fff1d0] opacity-50 blur-[1px] animate-pulse delay-1000" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#16181f]/80 border border-[#c5a059]/40 backdrop-blur-md mb-6 shadow-xl"
        >
          <div className="flex items-center space-x-1 text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-amber-300">{PROPERTY_CONFIG.googleRating} ★</span>
          </div>
          <span className="text-[11px] text-[#e0dacb]/80 border-l border-[#c5a059]/30 pl-2">
            Google Rated Premier Destination in Dumka
          </span>
        </motion.div>

        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center space-x-3 mb-2"
        >
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#c5a059]" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#c5a059] font-medium">
            WELCOME TO
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#c5a059]" />
        </motion.div>

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight gold-text-gradient mb-4 drop-shadow-2xl"
        >
          CHHAYA PALACE
        </motion.h1>

        {/* Subheading Category */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-lg md:text-xl font-medium tracking-widest text-[#fcfaf7] uppercase mb-4"
        >
          Hotel • Marriage Hall • Meeting Hall
        </motion.p>

        {/* Supporting Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs sm:text-base md:text-lg text-[#e0dacb]/90 max-w-2xl font-light italic mb-8 leading-relaxed"
        >
          "Where elegant stays meet unforgettable celebrations."
        </motion.p>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center space-x-1.5 text-xs text-[#c5a059]/90 mb-10 bg-[#0d0e12]/60 px-3 py-1 rounded-full border border-[#c5a059]/20"
        >
          <MapPin className="w-3.5 h-3.5 text-[#e6c665]" />
          <span>Baba Mandir Road, Kumhar Para, Dumka, Jharkhand 814101</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg"
        >
          {/* Explore CHHAYA PALACE */}
          <button
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#fcfaf7] border border-[#c5a059] bg-[#16181f]/80 hover:bg-[#c5a059] hover:text-[#0d0e12] transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Explore CHHAYA PALACE</span>
          </button>

          {/* Enquire Now */}
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0d0e12] bg-gradient-to-r from-[#e6c665] via-[#c5a059] to-[#9e7b3b] hover:brightness-110 shadow-xl shadow-[#c5a059]/25 transition-all transform hover:-translate-y-0.5"
          >
            Enquire Now
          </button>

          {/* Call Us */}
          <a
            href={`tel:${PROPERTY_CONFIG.officialPhone}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#fcfaf7] border border-[#2a2721] bg-[#12141a]/90 hover:border-[#c5a059]/50 transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#e6c665]" />
            <span>Call Us</span>
          </a>
        </motion.div>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <motion.button
        onClick={scrollToExplore}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 p-2.5 rounded-full border border-[#c5a059]/30 bg-[#16181f]/80 text-[#e6c665] hover:border-[#e6c665] transition-colors"
        aria-label="Scroll down to explore"
      >
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
};
