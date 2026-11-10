import React from 'react';
import { Check, ArrowRight, Layers } from 'lucide-react';
import { MembershipPlanType } from '../types';

interface MembershipSectionProps {
  onSelectPlan: (plan: MembershipPlanType) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: 'starter' as MembershipPlanType,
      name: 'STARTER PATCH',
      size: '250 SQ. FT.',
      monthlyRate: '₹3,000',
      quarterlyTotal: '₹9,000 for 3 months',
      description: 'Ideal for small family and beginners.',
      badge: 'Beginners & Couples',
      popular: false,
      features: [
        'Dedicated 250 sq. ft. growing patch',
        'Daily watering & routine farm crew care',
        'Guidance on vegetable crop selection',
        'Weekly video walkthrough update',
        'AI-assisted crop progress reports',
        'Access to farm grounds on visiting days',
        '100% harvest belongs to you',
      ],
      borderAccent: 'border-white/10 hover:border-emerald-400/40',
      btnStyle: 'bg-white/10 hover:bg-emerald-500 hover:text-black text-white border border-white/20',
    },
    {
      id: 'family' as MembershipPlanType,
      name: 'FAMILY PATCH',
      size: '500 SQ. FT.',
      monthlyRate: '₹5,500',
      quarterlyTotal: '₹16,500 for 3 months',
      description: 'More room to grow with your family.',
      badge: 'Most Popular Choice',
      popular: true,
      features: [
        'Dedicated 500 sq. ft. growing patch',
        'Multi-crop capacity (greens, gourds & fruiting veg)',
        'Daily watering & routine farm crew care',
        'Guidance on vegetable crop selection',
        'Weekly video walkthrough update',
        'AI-assisted crop progress reports',
        'Access to farm grounds on visiting days',
        '100% harvest belongs to you',
      ],
      borderAccent: 'border-farm-bright shadow-glow bg-gradient-to-b from-[#0f331e] to-[#07190f]',
      btnStyle: 'bg-gradient-to-r from-farm-bright to-emerald-400 hover:from-emerald-400 hover:to-farm-bright text-farm-darkest shadow-sm',
    },
    {
      id: 'pro' as MembershipPlanType,
      name: 'PRO PATCH',
      size: '1,000 SQ. FT.',
      monthlyRate: '₹10,000',
      quarterlyTotal: '₹30,000 for 3 months',
      description: 'Families who want a larger growing space.',
      badge: 'Maximum Bounty',
      popular: false,
      features: [
        'Dedicated 1,000 sq. ft. growing patch',
        'Multi-crop capacity (greens, gourds & fruiting veg)',
        'Abundant harvest to supply Large household vegetable needs',
        'Daily watering & routine farm crew care',
        'Guidance on vegetable crop selection',
        'Weekly video walkthrough update',
        'AI-assisted crop progress reports',
        'Access to farm grounds on visiting days',
        '100% harvest belongs to you',
      ],
      borderAccent: 'border-white/10 hover:border-lime-400/40',
      btnStyle: 'bg-white/10 hover:bg-lime-400 hover:text-black text-white border border-white/20',
    },
  ];

  return (
    <section id="memberships" className="relative py-16 sm:py-24 bg-[#051108] text-white overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            FIND THE SPACE THAT
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-farm-bright via-emerald-300 to-lime-300">
              GROWS WITH YOU.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300 font-normal">
            Choose your own growing space and start your community farming journey.
          </p>

          <div className="mt-3 inline-block px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-medium text-emerald-300">
            All memberships require a minimum three-month commitment.
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative border group ${
                plan.popular
                  ? plan.borderAccent
                  : 'bg-[#08180f]/90 border-white/10 hover:border-farm-bright/40'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-6 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 whitespace-nowrap px-3.5 py-0.5 rounded-full bg-gradient-to-r from-farm-bright to-emerald-400 text-farm-darkest text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold">
                    {plan.size}
                  </span>
                  {!plan.popular && (
                    <span className="text-[10px] sm:text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1.5">
                  {plan.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 mb-5 font-normal">
                  {plan.description}
                </p>

                {/* Pricing display */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      {plan.monthlyRate}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">/ month</span>
                  </div>
                  <div className="mt-1 text-xs font-mono text-farm-bright font-semibold">
                    {plan.quarterlyTotal}
                  </div>
                  <div className="mt-0.5 text-[10px] text-gray-400">
                    Billed quarterly (3-month minimum commitment)
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    What's Included:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-farm-bright shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3 rounded-full font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${plan.btnStyle}`}
                >
                  <span>Enquire For {plan.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* IMPORTANT NOTICE: One-Time Growing Setup Investment */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-950/70 via-[#0a2014] to-emerald-950/70 border border-emerald-500/30 backdrop-blur-md relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-farm-bright/20 flex items-center justify-center text-farm-bright shrink-0 mt-0.5">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-farm-bright font-bold">
                  TRANSPARENT SETUP DISCLOSURE
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  One-Time Growing Setup Investment
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed font-normal">
                  A one-time growing setup investment is additional to membership fees. This covers your dedicated growing infrastructure:
                </p>
                
                {/* Setup items list */}
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {[
                    'Premium UV-Stabilised Grow Bags',
                    'Sterilised Cocopeat & Growing Medium',
                    'Organic Fertilisers & Nutrients'
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10 text-[11px] text-emerald-200"
                    >
                      • {item}
                    </span>
                  ))}
                </div>

                <p className="text-[11px] text-gray-400 italic pt-1">
                  The final setup cost is calculated based on patch size and chosen crop requirements, and will be communicated transparently before membership confirmation.
                </p>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('general')}
              className="shrink-0 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-colors whitespace-nowrap self-stretch md:self-auto text-center"
            >
              Ask About Setup Costs
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
