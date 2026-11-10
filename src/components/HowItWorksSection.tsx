import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Sprout, HeartHandshake, Salad } from 'lucide-react';

interface Step {
  id: string;
  stepNumber: string;
  title: string;
  copy: string;
  image: string;
  icon: any;
  tagline: string;
}

export const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'CHOOSE YOUR PATCH',
      copy: 'Choose a growing space that suits your family and lifestyle.',
      image: '/assets/section-3-1.jpg?v=4',
      icon: Compass,
      tagline: 'Tailored Growing Areas',
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'CHOOSE WHAT TO GROW',
      copy: "Explore suitable vegetables and select crops with our team's guidance.",
      image: '/assets/section-3-2.jpg?v=4',
      icon: Sprout,
      tagline: 'Seasonal Crop Planning',
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'PLANT YOUR SEEDS',
      copy: 'Get your hands dirty. Plant seedlings and experience the joy of growing.',
      image: '/assets/section-3-3.jpg?v=4',
      icon: Sparkles,
      tagline: 'Hands-On Connection',
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'WE HELP CARE FOR YOUR CROPS',
      copy: 'Our farm team supports routine watering, crop monitoring and daily farming activities.',
      image: '/assets/section-3-4.jpg?v=4',
      icon: HeartHandshake,
      tagline: 'Dedicated Daily Care',
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'ENJOY YOUR HARVEST',
      copy: 'Visit your patch, enjoy the growing journey and take home your fresh produce.',
      image: '/assets/section-3-5.jpg?v=4',
      icon: Salad,
      tagline: 'Table-Ready Goodness',
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 bg-[#050f09] text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            FROM A TINY SEED TO YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-farm-bright via-emerald-300 to-lime-300">
              FAMILY TABLE.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300 font-normal">
            A seamless five-stage growing journey designed for beginners and nature enthusiasts alike.
          </p>
        </div>

        {/* Five Visually Connected Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHighlighted = activeStep === index;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 border group ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#0e2c1a] to-[#07170e] border-farm-bright/60 shadow-glow'
                    : 'bg-[#08170e]/90 border-white/10 hover:border-farm-bright/30'
                }`}
              >
                {/* Step Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={step.image}
                    alt={`Urbanfarmz Step ${step.stepNumber}: ${step.title} - Organic Community Vegetable Patch on Kanakapura Road Bengaluru`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08170e] via-transparent to-black/30 pointer-events-none" />

                  {/* Step Number Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold text-farm-bright">
                    STEP {step.stepNumber}
                  </div>
                </div>

                {/* Step Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-farm-bright text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mb-1.5">
                      <Icon className="w-3 h-3" />
                      <span>{step.tagline}</span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-farm-bright transition-colors">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      “{step.copy}”
                    </p>
                  </div>

                  {/* Stage indicator */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Stage {index + 1} of 5</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-farm-bright/50 group-hover:bg-farm-bright transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Guidance Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-farm-forest/40 to-emerald-950/60 border border-emerald-500/20 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-farm-bright/20 flex items-center justify-center text-farm-bright shrink-0">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">
                Zero Farming Experience Needed.
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                Our farm crew handles routine watering, crop care, and monitoring so you enjoy the growing journey without stress.
              </p>
            </div>
          </div>

          <a
            href="#memberships"
            className="shrink-0 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 self-stretch sm:self-auto justify-center"
          >
            <span>View Patches</span>
            <ArrowRight className="w-3.5 h-3.5 text-farm-bright" />
          </a>
        </div>

      </div>
    </section>
  );
};
