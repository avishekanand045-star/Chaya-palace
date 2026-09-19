import React from 'react';
import { MessageSquare, Phone, Shield } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

export const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PROPERTY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello CHHAYA PALACE, I would like to enquire about your hotel/event facilities.")}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end pointer-events-auto">
      {/* Mobile Floating Call Button */}
      <a
        href={`tel:${PROPERTY_CONFIG.officialPhone}`}
        className="sm:hidden p-3.5 rounded-full bg-[#16181f] border border-[#c5a059]/50 text-[#e6c665] shadow-2xl hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
        aria-label="Call CHHAYA PALACE"
        title="Call CHHAYA PALACE"
      >
        <Phone className="w-5 h-5 text-[#e6c665]" />
      </a>

      {/* Floating WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 sm:px-5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 border border-emerald-400/40 group"
        aria-label="Enquire on WhatsApp"
        title="Enquire on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
          WhatsApp Enquiry
        </span>
      </a>
    </div>
  );
};
