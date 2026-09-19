import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { ThreeCanvasBackground } from './components/ThreeCanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { WeddingsSection } from './components/WeddingsSection';
import { MarriageHallSection } from './components/MarriageHallSection';
import { MeetingHallSection } from './components/MeetingHallSection';
import { EventTimeline } from './components/EventTimeline';
import { GallerySection } from './components/GallerySection';
import { VideoSection } from './components/VideoSection';
import { LocationSection } from './components/LocationSection';
import { EnquirySection } from './components/EnquirySection';
import { AIConciergeModal } from './components/AIConciergeModal';
import { AdminDrawer } from './components/AdminDrawer';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { PROPERTY_CONFIG as defaultPropertyConfig } from './data/propertyData';
import { PropertyConfig } from './types';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [propertyConfig, setPropertyConfig] = useState<PropertyConfig>(defaultPropertyConfig);

  const [enquiryParams, setEnquiryParams] = useState<{ eventType?: string; roomName?: string }>({});

  const handleOpenEnquiry = (eventType?: string, roomName?: string) => {
    setEnquiryParams({ eventType, roomName });
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0e12] text-[#fcfaf7] font-sans relative overflow-x-hidden">
      {/* Entrance Preloader */}
      {!preloaderFinished && (
        <Preloader onComplete={() => setPreloaderFinished(true)} />
      )}

      {/* 3D WebGL Background Canvas */}
      <ThreeCanvasBackground />

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          onOpenEnquiry={(type) => handleOpenEnquiry(type)}
          onOpenConcierge={() => setConciergeOpen(true)}
          onOpenAdmin={() => setAdminOpen(true)}
        />

        <main className="flex-1">
          <Hero
            onOpenEnquiry={() => handleOpenEnquiry()}
            onOpenConcierge={() => setConciergeOpen(true)}
          />

          <AboutSection />

          <RoomsSection onOpenEnquiry={handleOpenEnquiry} />

          <WeddingsSection onOpenEnquiry={handleOpenEnquiry} />

          <MarriageHallSection onOpenEnquiry={handleOpenEnquiry} />

          <MeetingHallSection onOpenEnquiry={handleOpenEnquiry} />

          <EventTimeline onOpenEnquiry={handleOpenEnquiry} />

          <GallerySection />

          <VideoSection />

          <LocationSection />

          <EnquirySection
            initialEventType={enquiryParams.eventType}
            initialRoomName={enquiryParams.roomName}
          />
        </main>

        <Footer
          onOpenEnquiry={handleOpenEnquiry}
          onOpenAdmin={() => setAdminOpen(true)}
        />
      </div>

      {/* Floating Call & WhatsApp Widgets */}
      <FloatingActions />

      {/* AI Concierge Chat Modal */}
      <AIConciergeModal
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Property Owner Management Portal */}
      <AdminDrawer
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        config={propertyConfig}
        onUpdateConfig={setPropertyConfig}
      />
    </div>
  );
}
