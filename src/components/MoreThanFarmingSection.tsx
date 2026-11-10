import React from 'react';
import { Sun, Smile } from 'lucide-react';

export const MoreThanFarmingSection: React.FC = () => {
  return (
    <section id="memories" className="relative py-16 sm:py-24 bg-[#08180f] text-white overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-[17px] xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            <span className="block whitespace-nowrap">MORE THAN GROWING VEGETABLES.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-farm-bright via-emerald-300 to-lime-300">
              GROWING MEMORIES.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300 font-normal">
            A sanctuary where families unplug, children connect with the soil, and weekends become deeply restorative.
          </p>
        </div>

        {/* Two Story Cards with Section 4 - 1 and Section 4 - 2 */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Story 1: Kids Learning Farming (Section 4 - 1) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-xl group bg-black/40">
                <img
                  src="/assets/section-4-1.png"
                  alt="Children learning organic farming and touching living soil at Urbanfarmz community farm Kanakapura Road Bengaluru"
                  className="w-full h-auto object-cover max-h-[380px] sm:max-h-[460px] transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-farm-bright text-xs font-semibold tracking-wider uppercase">
                <Smile className="w-3.5 h-3.5" />
                <span>Next-Gen Agricultural Education</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                Cultivating Curiosity & Earth Connection
              </h3>

              <div className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed space-y-3 font-normal">
                <p>
                  Modern childhood often unfolds within the glow of digital screens and concrete apartments. At Urbanfarmz, weekends transform into an open-air wonderland where children touch living soil, discover how seeds wake up, and watch food take shape before their eyes.
                </p>
                <p>
                  From placing delicate seedlings into organic grow bags to monitoring daily growth, young minds cultivate patience, empathy, and a lifelong appreciation for genuine nutrition and the planet.
                </p>
              </div>
            </div>

          </div>

          {/* Story 2: Family Picnic (Section 4 - 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Content Side */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-lime-400 text-xs font-semibold tracking-wider uppercase">
                <Sun className="w-3.5 h-3.5" />
                <span>Wholesome Weekend Rituals</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                Relax, Unwind & Celebrate Together
              </h3>

              <div className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed space-y-3 font-normal">
                <p>
                  Urbanfarmz is your private countryside sanctuary without leaving Bengaluru. Spread out a checkered picnic mat on the shaded lawn, sip fresh brew under wooden pergolas, and spend peaceful hours surrounded by the scent of flourishing tomato vines and bell pepper plants.
                </p>
                <p>
                  Bring your parents, children, and friendly pets. Connect with fellow urban growers, trade recipes for freshly harvested herbs, and return home with a refreshed spirit and a basket of nutritious vegetables.
                </p>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-xl group bg-black/40">
                <img
                  src="/assets/section-4-2.png"
                  alt="Families enjoying weekend farming outings, picnics, and farm harvest at Urbanfarmz Bengaluru"
                  className="w-full h-auto object-cover max-h-[380px] sm:max-h-[460px] transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
