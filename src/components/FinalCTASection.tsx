import React from 'react';
import { Calendar, PhoneCall } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[75vh] w-full flex items-center justify-center overflow-hidden bg-black text-white py-16 sm:py-24">
      {/* Immersive Community Farming Background Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/section-final-bg.jpg"
          alt="Urbanfarmz protected net house community farm and dedicated vegetable growing patches on Kanakapura Road Bengaluru"
          className="w-full h-full object-cover object-center scale-102 motion-safe:animate-pulse-subtle"
        />
        {/* Cinematic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e07] via-black/65 to-black/50 z-10" />
        <div className="absolute inset-0 bg-[#071a10]/40 mix-blend-multiply z-10" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Large Headline in Google Font Comfortaa */}
        <h2 className="font-hero text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug text-white drop-shadow-md">
          COME BACK TO{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-farm-bright via-emerald-300 to-lime-300">
            YOUR ROOTS.
          </span>
        </h2>

        {/* Supporting Text in Montserrat */}
        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-gray-200 font-normal leading-relaxed max-w-lg drop-shadow">
          Start growing your own vegetables. Make weekends meaningful. Bring your family closer to nature.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onOpenBooking}
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-farm-bright via-emerald-400 to-farm-bright hover:from-emerald-300 hover:to-farm-bright text-farm-darkest font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-102 active:scale-98 flex items-center gap-2.5"
          >
            <Calendar className="w-4 h-4 text-farm-darkest" />
            <span>BOOK YOUR FARM VISIT</span>
          </button>

          <a
            href={siteConfig.getWhatsAppEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-emerald-500/40 hover:border-farm-bright text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 group"
          >
            <PhoneCall className="w-4 h-4 text-farm-bright group-hover:scale-105 transition-transform" />
            <span>ENQUIRE ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
