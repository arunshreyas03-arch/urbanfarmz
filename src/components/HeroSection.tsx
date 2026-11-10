import React from 'react';
import { Calendar, ChevronDown, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const scrollToConcept = () => {
    const el = document.getElementById('concept');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white">
      {/* Background Video with Mobile Poster Fallback */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          key="hero-video"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[78%_center] sm:object-center scale-102 transform motion-safe:animate-pulse-subtle"
        >
          <source src="/assets/section-1-v2.mp4" type="video/mp4" />
          <source src="/assets/section-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* 50% Black Overlay on the entire section */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Subtle gradient vignette to blend edges cleanly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 z-10 pointer-events-none" />
      </div>

      {/* Top Bar: JUST THE LOGO IN THE CENTER (No cluttered nav header) */}
      <div className="relative z-20 pt-6 sm:pt-10 px-4 w-full flex justify-center items-center">
        <div
          className="flex flex-col items-center group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/assets/logo.png"
            alt="Urbanfarmz Community Farming Logo"
            className="h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Main Content Area: Headline strictly on the LEFT side */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full mt-auto mb-2 sm:my-auto py-2 sm:py-12">
        <div className="max-w-2xl text-left">
          
          {/* Main Headline in Google Font Comfortaa */}
          <h1 className="font-hero text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.2] text-white drop-shadow-md">
            YOUR OWN FARM.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-farm-bright via-emerald-300 to-lime-300">
              Grow Fresh. Eat Fresh. Live Fresh.
            </span>
          </h1>

          {/* Supporting Text in Montserrat */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-200 font-normal leading-relaxed max-w-xl drop-shadow">
            Grow your own vegetables. Experience the joy of farming. Bring your family closer to nature.
          </p>

          {/* Call to Actions */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-farm-bright via-emerald-500 to-farm-bright hover:from-emerald-400 hover:to-farm-bright text-farm-darkest font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-102 active:scale-98 flex items-center gap-2.5"
            >
              <Calendar className="w-4 h-4 text-farm-darkest" />
              <span>Book Your Farm Visit</span>
            </button>

            <button
              onClick={scrollToConcept}
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:border-farm-bright/60 flex items-center gap-2 group"
            >
              <span>Explore The Concept</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-farm-bright" />
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className="relative z-20 pb-5 sm:pb-6 flex flex-col items-center justify-center cursor-pointer"
        onClick={scrollToConcept}
      >
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-gray-400 mb-1">
          Scroll to Discover
        </span>
        <ChevronDown className="w-4 h-4 text-farm-bright animate-bounce" />
      </div>
    </section>
  );
};
