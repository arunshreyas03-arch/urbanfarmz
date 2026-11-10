import React from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Droplet, 
  Sun, 
  Leaf, 
  ShieldCheck
} from 'lucide-react';

export const AIFarmingSection: React.FC = () => {
  return (
    <section id="ai-farming" className="relative py-16 sm:py-24 bg-[#040e07] text-white overflow-hidden">
      {/* Background Matrix Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#00ff88 1px, transparent 1px), radial-gradient(#22c55e 1px, #040e07 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-lime-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-snug">
            THE FUTURE OF FARMING IS{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-farm-bright via-emerald-300 to-lime-300">
              ALREADY GROWING.
            </span>
          </h2>

          <div className="mt-5 text-xs sm:text-sm md:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            <p>
              At <strong className="text-white font-semibold">Urbanfarmz</strong>, we combine the goodness of nature with the intelligence of technology. Our crops grow in a protected growing environment using organic farming practices, supported by modern irrigation, continuous crop monitoring and AI-powered insights.
            </p>
          </div>
        </div>


        {/* ================= FEATURE 01 & 02: CONTROLLED ENVIRONMENT & ORGANIC PRACTICES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-24">
          
          {/* FEATURE 01 — CONTROLLED GROWING ENVIRONMENT */}
          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0a2315] to-[#06160d] border border-farm-bright/20 shadow-xl relative overflow-hidden group hover:border-farm-bright/40 transition-colors">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-farm-bright animate-ping" />
                FEATURE 01 — PROTECTED ENVIRONMENT
              </span>
              <span className="text-[11px] font-mono text-gray-400">NET HOUSE</span>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug mb-3">
              BETTER GROWING CONDITIONS.<br />
              <span className="text-farm-bright">SMARTER FARMING.</span>
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Our protected growing environment is designed to support healthier crop growth through managed irrigation, suitable growing media, crop care and regular monitoring.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Every growing space receives attention from our farm team, helping members enjoy a more organised and transparent farming experience.
            </p>

            {/* Environmental Telemetry Display Graphics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/10">
              <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.03]">
                <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400 mb-0.5">
                  <Droplet className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">Drip Care</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-farm-bright">Precision</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400">Direct Root Delivery</div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.03]">
                <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400 mb-0.5">
                  <Sun className="w-3 h-3 text-yellow-400 shrink-0" />
                  <span className="truncate">Diffused</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-yellow-300">Shade Net</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400">UV Protection</div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.03]">
                <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400 mb-0.5">
                  <Layers className="w-3 h-3 text-lime-400 shrink-0" />
                  <span className="truncate">Media</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-lime-300">Cocopeat</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400">Sterile Substrate</div>
              </div>
            </div>

            <div className="mt-4 text-[10px] text-gray-400 italic">
              Note: Net house infrastructure designed for managed micro-conditions and pest protection.
            </div>
          </div>

          {/* FEATURE 02 — ORGANIC FARMING PRACTICES */}
          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0a2315] to-[#06160d] border border-emerald-500/20 shadow-xl relative overflow-hidden group hover:border-emerald-400/40 transition-colors">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <span className="text-[11px] font-mono tracking-wider uppercase text-lime-400 flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5 text-lime-400" />
                FEATURE 02 — NATURAL CROPS
              </span>
              <span className="text-[11px] font-mono text-gray-400">RESPONSIBLE CARE</span>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug mb-3">
              GROW NATURALLY.<br />
              <span className="text-lime-300">EAT FRESH.</span>
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
              We believe in growing vegetables with care for the soil, plants and the environment.
            </p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Our farming approach focuses on organic growing practices, responsible nutrient management and careful crop protection. From planting to harvesting, our team follows a considered crop-care process to help members enjoy fresh produce from their own growing space.
            </p>

            {/* Organic Badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-farm-bright shrink-0" />
                <span className="text-xs text-gray-200">
                  Enriched compost, neem oil botanical protection, and bio-nutrients.
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-farm-bright shrink-0" />
                <span className="text-xs text-gray-200">
                  Beneficial insect balance & physical insect barrier netting.
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-farm-bright shrink-0" />
                <span className="text-xs text-gray-200">
                  Harvested at peak crispness for direct family table consumption.
                </span>
              </div>
            </div>

            <div className="mt-4 text-[10px] text-gray-400">
              <ShieldCheck className="w-3 h-3 inline mr-1 text-emerald-400" />
              Urbanfarmz strictly adheres to transparent organic growing practices and natural soil inputs.
            </div>
          </div>

        </div>


        {/* ================= FEATURE 03 (FORMERLY 05): COMPLETE TRANSPARENCY, EVERY WEEK ================= */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0a2315] to-[#041008] border border-farm-bright/25 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono uppercase text-emerald-400 block mb-1.5">
              FEATURE 03 — THE FIVE-STAGE TRANSPARENCY PIPELINE
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
              FROM OUR FARM TO YOUR SCREEN.
            </h3>
            <p className="mt-3 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Your growing journey should never be a mystery. With weekly video walkthroughs and personalised AI-assisted crop reports, you can follow the progress of your vegetables, understand the care they receive and stay connected with your growing space.
            </p>
          </div>

          {/* Connected 5-Step Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
            
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 hover:border-farm-bright/40 transition-colors text-center relative group">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-farm-bright flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">
                01
              </div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-1">
                FARM VIDEO CAPTURE
              </h4>
              <p className="text-[11px] text-gray-400 leading-normal">
                Weekly patch video recorded by farm agronomists.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 hover:border-farm-bright/40 transition-colors text-center relative group">
              <div className="w-8 h-8 rounded-full bg-lime-500/10 text-lime-400 flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">
                02
              </div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-1">
                AI CROP ANALYSIS
              </h4>
              <p className="text-[11px] text-gray-400 leading-normal">
                Vision models detect foliage changes & bloom.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 hover:border-farm-bright/40 transition-colors text-center relative group">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-300 flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">
                03
              </div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-1">
                FARM TEAM REVIEW
              </h4>
              <p className="text-[11px] text-gray-400 leading-normal">
                Agronomists verify notes & confirm care actions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 hover:border-farm-bright/40 transition-colors text-center relative group">
              <div className="w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-300 flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono">
                04
              </div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-1">
                PERSONALISED REPORT
              </h4>
              <p className="text-[11px] text-gray-400 leading-normal">
                Compiled into a branded visual update.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 hover:border-farm-bright/40 transition-colors text-center group">
              <div className="w-8 h-8 rounded-full bg-farm-bright/20 text-farm-bright flex items-center justify-center mx-auto mb-2 text-xs font-bold font-mono shadow-sm">
                05
              </div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-1">
                DELIVERED TO MEMBER
              </h4>
              <p className="text-[11px] text-gray-400 leading-normal">
                Sent directly to your device weekly.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
