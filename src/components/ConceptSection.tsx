import React from 'react';
import { CheckCircle2, Sprout, Home, ShoppingBag } from 'lucide-react';

export const ConceptSection: React.FC = () => {
  return (
    <section id="concept" className="relative py-16 sm:py-24 bg-[#07170e] text-white overflow-hidden">
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Theme Headline */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-3xl text-white leading-snug">
            “A little piece of farmland.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-farm-bright via-emerald-300 to-lime-300">
              A whole lot of happiness.”
            </span>
          </h2>
        </div>

        {/* Two-Column Grid: Copy & Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative Copy & Animated Highlight Typography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-100 leading-snug">
                What if you could have your own vegetable farm without purchasing farmland?
              </h3>

              <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                <p>
                  At <strong className="text-white font-semibold">Urbanfarmz</strong>, you get a dedicated growing space where you can choose, plant and grow your favourite vegetables.
                </p>
                <p>
                  Enjoy the experience of farming while our team supports the everyday care of your crops.
                </p>
              </div>
            </div>

            {/* Typography Highlights: YOUR SPACE. YOUR PLANTS. YOUR HARVEST. */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-[11px] uppercase tracking-widest text-emerald-400 font-semibold">
                The Urbanfarmz Experience
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Pillar 1 */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-farm-bright/40 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-farm-bright mb-2.5 group-hover:scale-105 transition-transform">
                    <Home className="w-4 h-4" />
                  </div>
                  <h4 className="font-hero font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-farm-bright transition-colors">
                    YOUR SPACE.
                  </h4>
                  <p className="mt-1 text-xs text-gray-300 leading-relaxed">
                    A dedicated, protected growing patch exclusively for your family.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/40 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center text-lime-400 mb-2.5 group-hover:scale-105 transition-transform">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <h4 className="font-hero font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-lime-300 transition-colors">
                    YOUR PLANTS.
                  </h4>
                  <p className="mt-1 text-xs text-gray-300 leading-relaxed">
                    Choose what you love—crisp greens, juicy tomatoes, and herbs.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-lime-400/40 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-300 mb-2.5 group-hover:scale-105 transition-transform">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <h4 className="font-hero font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                    YOUR HARVEST.
                  </h4>
                  <p className="mt-1 text-xs text-gray-300 leading-relaxed">
                    Take home fresh, naturally nourished vegetables every harvest cycle.
                  </p>
                </div>
              </div>
            </div>

            {/* Farm Care Quote */}
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-start gap-2.5 text-xs sm:text-sm text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-farm-bright shrink-0 mt-0.5" />
              <p>
                <strong className="text-white font-semibold">Daily care supported by professionals:</strong> Routine watering, crop monitoring, nutrient feeding, and plant support managed every day.
              </p>
            </div>
          </div>

          {/* Right Column: Section 2 Video Display */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-xl bg-black group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/community-garden-golden.png"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/section-2-v2.mp4" type="video/mp4" />
                  <source src="/assets/section-2.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
