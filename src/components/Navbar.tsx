import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Crown, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

interface NavbarProps {
  onOpenEnquiry: (eventType?: string) => void;
  onOpenConcierge: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenConcierge, onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Weddings & Events', href: '#weddings' },
    { name: 'Meeting Hall', href: '#meeting-hall' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d0e12]/90 backdrop-blur-md border-b border-[#c5a059]/20 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#c5a059]/40 bg-[#16181f] flex items-center justify-center text-[#e6c665] group-hover:border-[#e6c665] transition-colors shadow-lg">
              <Crown className="w-5 h-5 text-[#e6c665]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-wider gold-text-gradient">
                {PROPERTY_CONFIG.name}
              </span>
              <span className="text-[10px] text-[#c5a059]/80 uppercase tracking-widest font-medium">
                Dumka • Jharkhand
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-widest font-medium text-[#fcfaf7]/80 hover:text-[#e6c665] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c5a059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* AI Concierge Trigger */}
            <button
              onClick={onOpenConcierge}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-full border border-[#c5a059]/30 bg-[#16181f]/80 text-[#e6c665] hover:border-[#e6c665] hover:bg-[#1f222d] text-xs font-medium tracking-wider transition-all"
              title="Ask AI Royal Concierge"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#e6c665] animate-pulse" />
              <span>AI Concierge</span>
            </button>

            {/* Enquire Now Button */}
            <button
              onClick={() => onOpenEnquiry()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#0d0e12] bg-gradient-to-r from-[#e6c665] via-[#c5a059] to-[#9e7b3b] hover:brightness-110 shadow-lg shadow-[#c5a059]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenConcierge}
              className="p-2 rounded-full border border-[#c5a059]/30 bg-[#16181f] text-[#e6c665]"
              title="AI Concierge"
            >
              <Sparkles className="w-4 h-4 text-[#e6c665]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#16181f] border border-[#c5a059]/30 text-[#e6c665] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0d0e12]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-5 border-b border-[#c5a059]/20 pb-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-serif-luxury text-[#fcfaf7] hover:text-[#e6c665] transition-colors border-b border-[#2a2721]/50 pb-2 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#c5a059] font-sans font-light">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="pt-6 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#0d0e12] bg-gradient-to-r from-[#e6c665] via-[#c5a059] to-[#9e7b3b] shadow-xl text-center"
              >
                Enquire Now
              </button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${PROPERTY_CONFIG.officialPhone}`}
                  className="py-3 px-4 rounded-xl border border-[#c5a059]/30 bg-[#16181f] text-[#fcfaf7] text-xs font-medium flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-[#e6c665]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${PROPERTY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello CHHAYA PALACE, I would like to enquire about your hotel/event facilities.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-xs font-medium flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
