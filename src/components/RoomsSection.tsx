import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bed, Users, Wifi, Check, Sparkles, X, ChevronRight, Info } from 'lucide-react';
import { ROOMS_DATA } from '../data/propertyData';
import { Room } from '../types';

interface RoomsSectionProps {
  onOpenEnquiry: (eventType?: string, roomName?: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="rooms" className="relative py-24 bg-[#0d0e12] overflow-hidden">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-3">
            <Bed className="w-3.5 h-3.5 text-[#e6c665]" />
            <span>Accommodation</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient mb-4">
            Stay in Comfort
          </h2>
          <p className="text-sm sm:text-base text-[#e0dacb]/80 font-light">
            Elegantly appointed rooms and executive suites in Dumka, designed for tranquil relaxation and attentive room service.
          </p>
        </div>

        {/* Room Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="tilt-card glass-panel rounded-2xl overflow-hidden border border-[#c5a059]/25 hover:border-[#e6c665]/60 transition-all duration-300 flex flex-col group relative"
            >
              {room.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-[#e6c665] to-[#c5a059] text-[#0d0e12] text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Featured Room</span>
                </div>
              )}

              {/* Room Image Container with Hover Zoom & 3D Depth */}
              <div className="relative h-64 overflow-hidden bg-[#16181f]">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80" />

                {/* Quick Spec Badges overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#fcfaf7]">
                  <div className="flex items-center space-x-1.5 bg-[#0d0e12]/80 px-2.5 py-1 rounded-md border border-[#c5a059]/30 backdrop-blur-sm">
                    <Users className="w-3.5 h-3.5 text-[#e6c665]" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-[#0d0e12]/80 px-2.5 py-1 rounded-md border border-[#c5a059]/30 backdrop-blur-sm">
                    <Bed className="w-3.5 h-3.5 text-[#e6c665]" />
                    <span>{room.bedType}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#fcfaf7] group-hover:text-[#e6c665] transition-colors mb-1">
                    {room.name}
                  </h3>
                  <p className="text-xs text-[#c5a059] font-medium tracking-wide mb-3">
                    {room.tagline}
                  </p>
                  <p className="text-xs text-[#e0dacb]/80 line-clamp-2 font-light leading-relaxed mb-4">
                    {room.description}
                  </p>

                  {/* Top Amenities List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <span
                        key={amenity}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-[#16181f] text-[#e0dacb]/90 border border-[#2a2721] flex items-center space-x-1"
                      >
                        <Check className="w-3 h-3 text-[#e6c665]" />
                        <span>{amenity}</span>
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="text-[10px] px-2 py-1 rounded-md bg-[#16181f] text-[#c5a059]">
                        +{room.amenities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#2a2721]">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="py-2.5 px-3 rounded-xl border border-[#c5a059]/30 bg-[#16181f] text-[#fcfaf7] text-xs font-medium hover:border-[#e6c665] transition-colors flex items-center justify-center space-x-1"
                  >
                    <Info className="w-3.5 h-3.5 text-[#e6c665]" />
                    <span>View Room</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiry('Hotel Stay', room.name)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#0d0e12] bg-gradient-to-r from-[#e6c665] to-[#c5a059] hover:brightness-110 shadow-md transition-all flex items-center justify-center"
                  >
                    Enquire Stay
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#12141a] border border-[#c5a059]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-[#e6c665] hover:bg-[#c5a059] hover:text-[#0d0e12] transition-colors"
                aria-label="Close details modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-xl overflow-hidden mb-6 h-64 sm:h-72 relative">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#0d0e12]/80 px-3 py-1 rounded-lg border border-[#c5a059]/30 text-xs text-[#e6c665]">
                  CHHAYA PALACE Dumka Room Experience
                </div>
              </div>

              <h3 className="font-serif-luxury text-3xl font-bold gold-text-gradient mb-1">
                {selectedRoom.name}
              </h3>
              <p className="text-xs text-[#c5a059] uppercase tracking-widest font-semibold mb-4">
                {selectedRoom.tagline}
              </p>

              <p className="text-sm text-[#e0dacb]/90 font-light leading-relaxed mb-6">
                {selectedRoom.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#fcfaf7] mb-3">
                  Included Amenities & Room Features
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {selectedRoom.amenities.map((item) => (
                    <div
                      key={item}
                      className="p-2.5 rounded-lg bg-[#16181f] border border-[#2a2721] text-xs text-[#e0dacb] flex items-center space-x-2"
                    >
                      <Check className="w-3.5 h-3.5 text-[#e6c665] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#2a2721]">
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#2a2721] text-xs text-[#e0dacb] hover:border-[#c5a059]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const roomName = selectedRoom.name;
                    setSelectedRoom(null);
                    onOpenEnquiry('Hotel Stay', roomName);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0e12] bg-gradient-to-r from-[#e6c665] to-[#c5a059] hover:brightness-110 shadow-lg"
                >
                  Enquire for Stay
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
