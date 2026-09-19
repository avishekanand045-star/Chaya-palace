import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Crown, Bot, User } from 'lucide-react';

interface AIConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (eventType?: string) => void;
}

export const AIConciergeModal: React.FC<AIConciergeModalProps> = ({ isOpen, onClose, onOpenEnquiry }) => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: "Greetings! I am the AI Royal Concierge for CHHAYA PALACE Dumka. How may I assist you today with room accommodation, marriage hall planning, or corporate meeting arrangements?"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sampleQuestions = [
    "What spaces are available for a wedding ceremony?",
    "Do you have executive rooms for business guests?",
    "How do I enquire about marriage hall dates?",
    "Where is Chhaya Palace located in Dumka?"
  ];

  const handleSend = async (textToSend?: string) => {
    const prompt = textToSend || input;
    if (!prompt.trim() || loading) return;

    const userMsg = { role: 'user' as const, text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', text: data.reply || "Thank you for reaching out to Chhaya Palace." }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: "Thank you for inquiring about CHHAYA PALACE Dumka. For personalized booking assistance and availability, please fill out our Enquiry Form or call us directly at +91 98012 34567."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#12141a] border border-[#c5a059]/40 rounded-3xl max-w-xl w-full h-[600px] flex flex-col relative shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-[#16181f] border-b border-[#c5a059]/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full border border-[#c5a059]/40 bg-[#0d0e12] flex items-center justify-center text-[#e6c665]">
                  <Crown className="w-5 h-5 text-[#e6c665]" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-base font-bold text-[#fcfaf7] flex items-center space-x-1.5">
                    <span>AI Royal Concierge</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#e6c665] animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-[#c5a059] uppercase tracking-wider">
                    CHHAYA PALACE Dumka Virtual Assistant
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#0d0e12] border border-[#c5a059]/30 text-[#e6c665] hover:bg-[#c5a059] hover:text-[#0d0e12] transition-colors"
                aria-label="Close Concierge"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0d0e12]/60">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start space-x-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-[#16181f] border border-[#c5a059]/40 flex items-center justify-center text-[#e6c665] shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-[#e6c665]" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-[#e6c665] to-[#c5a059] text-[#0d0e12] font-medium rounded-tr-none shadow-md'
                        : 'bg-[#16181f] border border-[#c5a059]/25 text-[#fcfaf7] rounded-tl-none font-light'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-[#2a2721] border border-[#c5a059]/30 flex items-center justify-center text-[#fcfaf7] shrink-0 mt-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-center space-x-2 text-xs text-[#c5a059] italic p-2">
                  <Sparkles className="w-4 h-4 text-[#e6c665] animate-spin" />
                  <span>Consulting Royal Concierge...</span>
                </div>
              )}
            </div>

            {/* Sample Chips */}
            <div className="px-4 py-2 bg-[#12141a] border-t border-[#2a2721] flex items-center space-x-2 overflow-x-auto no-scrollbar">
              {sampleQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="px-3 py-1.5 rounded-full bg-[#16181f] border border-[#c5a059]/20 text-[10px] text-[#e0dacb] whitespace-nowrap hover:border-[#e6c665] transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#16181f] border-t border-[#c5a059]/20 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask about rooms, marriage hall, or event packages..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#0d0e12] border border-[#c5a059]/30 text-[#fcfaf7] placeholder-[#e0dacb]/40 text-xs focus:outline-none focus:border-[#e6c665]"
              />

              <button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#e6c665] to-[#c5a059] text-[#0d0e12] disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
