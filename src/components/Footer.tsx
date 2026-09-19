import React from 'react';
import { Crown, MapPin, Phone, MessageSquare, Navigation, Settings } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

interface FooterProps {
  onOpenEnquiry: (eventType?: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onOpenAdmin }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#07080a] text-[#fcfaf7] border-t border-[#c5a059]/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#c5a059]/40 bg-[#16181f] flex items-center justify-center text-[#e6c665]">
                <Crown className="w-5 h-5 text-[#e6c665]" />
              </div>
              <span className="font-serif-luxury text-2xl font-bold gold-text-gradient">
                {PROPERTY_CONFIG.name}
              </span>
            </a>

            <p className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">
              {PROPERTY_CONFIG.category}
            </p>

            <p className="text-xs text-[#e0dacb]/80 font-light leading-relaxed max-w-md">
              Where elegant stays meet unforgettable celebrations. Dumka's premier luxury destination for stays, marriage functions, and corporate meetings.
            </p>

            <div className="flex items-center space-x-1.5 text-xs text-[#e0dacb]/70 pt-1">
              <MapPin className="w-4 h-4 text-[#e6c665] shrink-0" />
              <span>Baba Mandir Road, Kumhar Para, Dumka, Jharkhand 814101</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#e6c665]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#e0dacb]">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#e6c665]">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#e6c665]">About Chhaya Palace</a></li>
              <li><a href="#rooms" onClick={(e) => handleNavClick(e, '#rooms')} className="hover:text-[#e6c665]">Hotel Rooms & Suites</a></li>
              <li><a href="#weddings" onClick={(e) => handleNavClick(e, '#weddings')} className="hover:text-[#e6c665]">Weddings & Celebrations</a></li>
              <li><a href="#meeting-hall" onClick={(e) => handleNavClick(e, '#meeting-hall')} className="hover:text-[#e6c665]">Corporate Meeting Hall</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-[#e6c665]">Photo Gallery</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#e6c665]">Contact & Enquiry</a></li>
            </ul>
          </div>

          {/* Direct Contact Actions */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#e6c665]">
              Contact Actions
            </h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href={`tel:${PROPERTY_CONFIG.officialPhone}`}
                className="py-2.5 px-4 rounded-xl border border-[#c5a059]/30 bg-[#16181f] text-xs text-[#fcfaf7] flex items-center justify-between hover:border-[#e6c665]"
              >
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#e6c665]" />
                  <span>Call Reception</span>
                </div>
                <span className="font-mono text-[#c5a059]">{PROPERTY_CONFIG.officialPhoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${PROPERTY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello CHHAYA PALACE, I would like to enquire about your hotel/event facilities.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl border border-emerald-500/30 bg-emerald-950/30 text-xs text-emerald-300 flex items-center justify-between hover:bg-emerald-900/30"
              >
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Enquiry</span>
                </div>
                <span className="font-mono text-emerald-400">Instant Chat</span>
              </a>

              <a
                href={PROPERTY_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl border border-[#c5a059]/30 bg-[#16181f] text-xs text-[#fcfaf7] flex items-center justify-between hover:border-[#e6c665]"
              >
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-[#e6c665]" />
                  <span>Get Directions</span>
                </div>
                <span className="text-[10px] uppercase text-[#c5a059]">Dumka</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2721] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#e0dacb]/60 gap-4">
          <p>© {currentYear} CHHAYA PALACE. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Baba Mandir Road, Kumhar Para, Dumka</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center space-x-1 text-[#c5a059] hover:underline"
            >
              <Settings className="w-3 h-3" />
              <span>Owner Portal</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
