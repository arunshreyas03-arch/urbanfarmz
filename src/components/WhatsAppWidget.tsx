import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const WhatsAppWidget: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Tooltip Popover */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-[#091f13] border border-farm-bright/40 text-white p-3.5 rounded-2xl shadow-2xl relative text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-farm-bright mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-farm-bright animate-ping" />
            Chat with Urbanfarmz
          </div>
          <p className="text-gray-200 leading-relaxed">
            Have questions about patch sizes, growing seasons, or visit slots? Chat with us instantly on WhatsApp!
          </p>
          <a
            href={siteConfig.getWhatsAppEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-block text-xs font-bold text-farm-bright underline hover:text-white"
          >
            Open WhatsApp Chat →
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={siteConfig.getWhatsAppEnquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-farm-bright to-emerald-500 hover:from-emerald-400 hover:to-farm-bright text-farm-darkest flex items-center justify-center shadow-glow hover:shadow-glow-lg hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-farm-darkest" />
      </a>
    </div>
  );
};

