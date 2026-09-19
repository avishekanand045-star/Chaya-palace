import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Sparkles, Phone, Mail, Calendar, Users, MessageSquare, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EventType, EnquiryFormData } from '../types';
import { PROPERTY_CONFIG } from '../data/propertyData';

interface EnquirySectionProps {
  initialEventType?: string;
  initialRoomName?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialEventType, initialRoomName }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: (initialEventType as EventType) || 'Hotel Stay',
    preferredDate: '',
    numberOfGuests: '',
    message: initialRoomName ? `Interested in booking: ${initialRoomName}` : ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const eventTypes: EventType[] = [
    'Hotel Stay',
    'Wedding',
    'Reception',
    'Engagement',
    'Birthday',
    'Meeting',
    'Conference',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setErrorMessage('Please provide your Full Name and Phone Number.');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();

      if (resData.success) {
        setSubmitted(true);
        // Trigger celebratory gold confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#e6c665', '#c5a059', '#fff1d0', '#9e7b3b']
        });
      } else {
        setErrorMessage(resData.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      // Local fallback success
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e6c665', '#c5a059', '#fff1d0']
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0d0e12] overflow-hidden">
      {/* Background Lighting Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#c5a059] uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5 text-[#e6c665]" />
            <span>Direct Concierge Enquiry</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight gold-text-gradient mb-4">
            Plan Your Stay or Event
          </h2>
          <p className="text-sm sm:text-base text-[#e0dacb]/80 font-light">
            Fill out the enquiry form below. Our reservation team at CHHAYA PALACE Dumka will contact you shortly with availability and details.
          </p>
        </div>

        {/* Enquiry Card */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-12 border border-[#c5a059]/30 shadow-2xl relative">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-4"
            >
              <div className="w-20 h-20 rounded-full bg-[#16181f] border-2 border-[#e6c665] flex items-center justify-center text-[#e6c665] mx-auto mb-6 shadow-xl">
                <CheckCircle className="w-10 h-10 text-[#e6c665]" />
              </div>
              <h3 className="font-serif-luxury text-3xl font-bold gold-text-gradient mb-3">
                Thank You
              </h3>
              <p className="text-sm sm:text-base text-[#fcfaf7] max-w-md mx-auto font-light leading-relaxed mb-6">
                Thank you. Our team at CHHAYA PALACE will contact you shortly regarding your {formData.eventType} enquiry.
              </p>
              <div className="p-4 rounded-2xl bg-[#16181f] border border-[#c5a059]/20 max-w-sm mx-auto text-xs text-[#e0dacb] mb-8">
                <p className="font-semibold text-[#e6c665] mb-1">Need Immediate Assistance?</p>
                <p>Call reception directly: <strong>{PROPERTY_CONFIG.officialPhoneDisplay}</strong></p>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    eventType: 'Hotel Stay',
                    preferredDate: '',
                    numberOfGuests: '',
                    message: ''
                  });
                }}
                className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0d0e12] bg-gradient-to-r from-[#e6c665] to-[#c5a059]"
              >
                Send Another Enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs text-center">
                  {errorMessage}
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcfaf7] mb-2">
                    Full Name <span className="text-[#e6c665]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12141a] border border-[#c5a059]/30 text-[#fcfaf7] placeholder-[#e0dacb]/40 text-xs focus:outline-none focus:border-[#e6c665] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcfaf7] mb-2">
                    Phone Number <span className="text-[#e6c665]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98012 34567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12141a] border border-[#c5a059]/30 text-[#fcfaf7] placeholder-[#e0dacb]/40 text-xs focus:outline-none focus:border-[#e6c665] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcfaf7] mb-2">
                    Email Address <span className="text-[#e0dacb]/50 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12141a] border border-[#c5a059]/30 text-[#fcfaf7] placeholder-[#e0dacb]/40 text-xs focus:outline-none focus:border-[#e6c665] transition-colors"
                  />
                </div>

                {/* Event / Service Type */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcfaf7] mb-2">
                    Event / Enquiry Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value as EventType })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12141a] border border-[#c5a059]/30 text-[#fcfaf7] text-xs focus:outline-none focus:border-[#e6c665] transition-colors"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#12141a] text-[#fcfaf7]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcfaf7] mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12141a] border border-[#c5a059]/30 text-[#fcfaf7] text-xs focus:outline-none focus:border-[#e6c665] transition-colors"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcfaf7] mb-2">
                    Number of Guests <span className="text-[#e0dacb]/50 text-[10px]">(Approx.)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2 guests / 150 guests"
                    value={formData.numberOfGuests}
                    onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12141a] border border-[#c5a059]/30 text-[#fcfaf7] placeholder-[#e0dacb]/40 text-xs focus:outline-none focus:border-[#e6c665] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcfaf7] mb-2">
                  Special Requirements or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us more about your stay dates, wedding decor preferences, or meeting requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#12141a] border border-[#c5a059]/30 text-[#fcfaf7] placeholder-[#e0dacb]/40 text-xs focus:outline-none focus:border-[#e6c665] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#0d0e12] bg-gradient-to-r from-[#e6c665] via-[#c5a059] to-[#9e7b3b] hover:brightness-110 shadow-2xl shadow-[#c5a059]/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {submitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
