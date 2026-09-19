import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_DATA } from '../data/propertyData';
import { GalleryItem } from '../types';
import { Images, X, ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Property', 'Marriage Hall', 'Rooms', 'Meeting Hall', 'Hotel', 'Events', 'Food'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    const index = GALLERY_DATA.findIndex((g) => g.id === item.id);
    if (index !== -1) setActiveLightboxIndex(index);
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_DATA.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-[#0b0c10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-3">
            <Images className="w-3.5 h-3.5 text-[#e6c665]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient mb-4">
            Immersive Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#e0dacb]/80 font-light">
            Explore authentic visuals of CHHAYA PALACE — rooms, marriage banquet halls, conference setups, and evening ambiance in Dumka.
          </p>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#c5a059] text-[#0d0e12] font-semibold shadow-md'
                  : 'bg-[#16181f] text-[#e0dacb]/80 border border-[#2a2721] hover:border-[#c5a059]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => openLightbox(item)}
              className="group relative h-64 rounded-2xl overflow-hidden border border-[#c5a059]/20 hover:border-[#e6c665] cursor-pointer shadow-lg bg-[#16181f]"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="self-end p-2 rounded-full bg-[#0d0e12]/80 border border-[#c5a059]/40 text-[#e6c665]">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#e6c665] font-bold block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-base font-bold text-[#fcfaf7]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#e0dacb]/80 font-light line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Top Lightbox Header */}
            <div className="flex items-center justify-between text-[#fcfaf7] relative z-10">
              <div className="flex items-center space-x-3">
                <span className="font-serif-luxury font-bold text-[#e6c665] text-lg">
                  CHHAYA PALACE GALLERY
                </span>
                <span className="text-xs text-[#c5a059] bg-[#16181f] px-2.5 py-1 rounded-full border border-[#c5a059]/30">
                  {activeLightboxIndex + 1} / {GALLERY_DATA.length}
                </span>
              </div>

              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2.5 rounded-full bg-[#16181f] border border-[#c5a059]/40 text-[#e6c665] hover:bg-[#c5a059] hover:text-[#0d0e12] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Image View */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={GALLERY_DATA[activeLightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_DATA[activeLightboxIndex].image}
                alt={GALLERY_DATA[activeLightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-[#c5a059]/30 shadow-2xl"
              />

              {/* Prev / Next Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 p-3 rounded-full bg-[#16181f]/80 border border-[#c5a059]/40 text-[#e6c665] hover:bg-[#c5a059] hover:text-[#0d0e12] transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 p-3 rounded-full bg-[#16181f]/80 border border-[#c5a059]/40 text-[#e6c665] hover:bg-[#c5a059] hover:text-[#0d0e12] transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div
              className="text-center max-w-xl mx-auto glass-panel p-4 rounded-xl relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs uppercase font-bold text-[#e6c665] tracking-widest block mb-0.5">
                {GALLERY_DATA[activeLightboxIndex].category}
              </span>
              <h3 className="font-serif-luxury text-lg font-bold text-[#fcfaf7]">
                {GALLERY_DATA[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-[#e0dacb]/80 font-light">
                {GALLERY_DATA[activeLightboxIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
