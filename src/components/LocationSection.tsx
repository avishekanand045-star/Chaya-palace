import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, MessageSquare, Star, ExternalLink } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative py-24 bg-[#0b0c10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#e6c665]" />
            <span>Prime Location</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient mb-4">
            Located in Dumka
          </h2>
          <p className="text-sm sm:text-base text-[#e0dacb]/80 font-light">
            Conveniently situated on Baba Mandir Road in Kumhar Para, Dumka.
          </p>
        </div>

        {/* Location Layout: Info + Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel-gold p-8 rounded-3xl border border-[#c5a059]/30 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-6">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Google Rating {PROPERTY_CONFIG.googleRating} ★</span>
              </div>

              <h3 className="font-serif-luxury text-3xl font-bold text-[#fcfaf7] gold-text-gradient mb-2">
                {PROPERTY_CONFIG.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] mb-6">
                {PROPERTY_CONFIG.category}
              </p>

              <div className="space-y-4 mb-8 text-xs sm:text-sm text-[#e0dacb]/90 font-light">
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#16181f]/80 border border-[#2a2721]">
                  <MapPin className="w-5 h-5 text-[#e6c665] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#fcfaf7] block font-semibold">Street Address:</strong>
                    <span>{PROPERTY_CONFIG.address}, {PROPERTY_CONFIG.city}, {PROPERTY_CONFIG.state} {PROPERTY_CONFIG.pincode}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#16181f]/80 border border-[#2a2721]">
                  <Phone className="w-5 h-5 text-[#e6c665] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#fcfaf7] block font-semibold">Direct Reception Phone:</strong>
                    <span>{PROPERTY_CONFIG.officialPhoneDisplay}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#c5a059]/20">
              <a
                href={PROPERTY_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-gradient-to-r from-[#e6c665] to-[#c5a059] text-[#0d0e12] text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md hover:brightness-110"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>

              <a
                href={`tel:${PROPERTY_CONFIG.officialPhone}`}
                className="py-3 px-3 rounded-xl border border-[#c5a059]/30 bg-[#16181f] text-[#fcfaf7] text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1.5 hover:border-[#e6c665]"
              >
                <Phone className="w-3.5 h-3.5 text-[#e6c665]" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/${PROPERTY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello CHHAYA PALACE, I would like to enquire about your hotel/event facilities.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1.5 hover:bg-emerald-900/40"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-2xl h-[380px] lg:h-auto min-h-[380px] bg-[#16181f] relative"
          >
            <iframe
              title="CHHAYA PALACE Dumka Map"
              src={PROPERTY_CONFIG.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute top-4 right-4 z-10">
              <a
                href={PROPERTY_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-xs text-[#e6c665] flex items-center space-x-1.5 hover:border-[#e6c665]"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
