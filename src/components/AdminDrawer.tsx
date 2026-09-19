import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, X, Phone, Mail, MapPin, ListFilter, Save, Check, ShieldCheck, RefreshCw } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyData';
import { PropertyConfig } from '../types';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: PropertyConfig;
  onUpdateConfig: (newConfig: PropertyConfig) => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig
}) => {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'settings'>('enquiries');
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);
  const [formConfig, setFormConfig] = useState<PropertyConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const fetchEnquiries = async () => {
    setLoadingEnquiries(true);
    try {
      const response = await fetch('/api/enquiries');
      const data = await response.json();
      if (data.enquiries) {
        setEnquiries(data.enquiries);
      }
    } catch (e) {
      console.error("Error fetching enquiries:", e);
    } finally {
      setLoadingEnquiries(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchEnquiries();
      setFormConfig(config);
    }
  }, [isOpen, config]);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(formConfig);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-full max-w-lg bg-[#12141a] border-l border-[#c5a059]/40 h-full flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-5 bg-[#16181f] border-b border-[#c5a059]/20 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-lg bg-[#0d0e12] border border-[#c5a059]/30 text-[#e6c665]">
                  <Settings className="w-5 h-5 text-[#e6c665]" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#fcfaf7]">
                    CHHAYA PALACE Owner Portal
                  </h3>
                  <p className="text-[10px] text-[#c5a059] uppercase tracking-wider">
                    Property Content & Enquiry Management
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#0d0e12] border border-[#c5a059]/30 text-[#e6c665]"
                aria-label="Close portal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-[#2a2721] bg-[#0d0e12]">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${
                  activeTab === 'enquiries'
                    ? 'border-[#e6c665] text-[#e6c665] bg-[#16181f]/60'
                    : 'border-transparent text-[#e0dacb]/60'
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>Submitted Enquiries ({enquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 border-b-2 transition-all ${
                  activeTab === 'settings'
                    ? 'border-[#e6c665] text-[#e6c665] bg-[#16181f]/60'
                    : 'border-transparent text-[#e0dacb]/60'
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Property Contact Config</span>
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 p-6 overflow-y-auto">
              {activeTab === 'enquiries' ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#2a2721]">
                    <span className="text-xs text-[#e0dacb] font-light">Recent Customer Enquiries</span>
                    <button
                      onClick={fetchEnquiries}
                      className="p-1.5 rounded-lg bg-[#16181f] text-[#e6c665] border border-[#c5a059]/30 hover:bg-[#c5a059] hover:text-[#0d0e12]"
                      title="Refresh"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${loadingEnquiries ? 'animate-spin' : ''}`} />
                    </button>
                  </div>

                  {enquiries.length === 0 ? (
                    <div className="p-8 text-center glass-panel rounded-2xl border border-[#2a2721]">
                      <p className="text-xs text-[#e0dacb]/70 italic mb-2">No enquiries received yet.</p>
                      <p className="text-[11px] text-[#c5a059]">Test the Enquiry Form on the website to see real-time updates here!</p>
                    </div>
                  ) : (
                    enquiries.map((enq) => (
                      <div key={enq.id} className="p-4 rounded-xl bg-[#16181f] border border-[#c5a059]/30 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-xs text-[#fcfaf7]">{enq.fullName}</span>
                          <span className="px-2 py-0.5 rounded-full bg-[#c5a059]/20 text-[#e6c665] text-[10px] font-mono">
                            {enq.eventType}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-[#e0dacb]">
                          <div><Phone className="w-3 h-3 inline mr-1 text-[#e6c665]" />{enq.phone}</div>
                          <div><Mail className="w-3 h-3 inline mr-1 text-[#e6c665]" />{enq.email}</div>
                          <div><strong>Date:</strong> {enq.preferredDate}</div>
                          <div><strong>Guests:</strong> {enq.numberOfGuests}</div>
                        </div>
                        {enq.message && (
                          <p className="text-[11px] text-[#e0dacb]/80 italic pt-1 border-t border-[#2a2721]">
                            "{enq.message}"
                          </p>
                        )}
                        <span className="text-[9px] text-[#c5a059]/60 font-mono block text-right">
                          {new Date(enq.createdAt).toLocaleString()}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <form onSubmit={handleSaveSettings} className="space-y-4">
                  <div className="p-3 rounded-xl bg-[#16181f] border border-[#c5a059]/30 text-xs text-[#e6c665] flex items-center space-x-2 mb-4">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Update reception phone numbers, WhatsApp, and email dynamically.</span>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#fcfaf7] mb-1">Official Display Phone</label>
                    <input
                      type="text"
                      value={formConfig.officialPhoneDisplay}
                      onChange={(e) => setFormConfig({ ...formConfig, officialPhoneDisplay: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d0e12] border border-[#c5a059]/30 text-xs text-[#fcfaf7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#fcfaf7] mb-1">Official Tel Link (+91...)</label>
                    <input
                      type="text"
                      value={formConfig.officialPhone}
                      onChange={(e) => setFormConfig({ ...formConfig, officialPhone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d0e12] border border-[#c5a059]/30 text-xs text-[#fcfaf7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#fcfaf7] mb-1">WhatsApp Number (Digits only)</label>
                    <input
                      type="text"
                      value={formConfig.whatsappNumber}
                      onChange={(e) => setFormConfig({ ...formConfig, whatsappNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d0e12] border border-[#c5a059]/30 text-xs text-[#fcfaf7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#fcfaf7] mb-1">Official Email</label>
                    <input
                      type="email"
                      value={formConfig.officialEmail}
                      onChange={(e) => setFormConfig({ ...formConfig, officialEmail: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d0e12] border border-[#c5a059]/30 text-xs text-[#fcfaf7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-[#fcfaf7] mb-1">Street Address</label>
                    <input
                      type="text"
                      value={formConfig.address}
                      onChange={(e) => setFormConfig({ ...formConfig, address: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d0e12] border border-[#c5a059]/30 text-xs text-[#fcfaf7]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#0d0e12] bg-gradient-to-r from-[#e6c665] to-[#c5a059] flex items-center justify-center space-x-1.5"
                  >
                    {savedSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                    <span>{savedSuccess ? 'Settings Saved!' : 'Save Dynamic Config'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
