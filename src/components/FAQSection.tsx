import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is Urbanfarmz?",
      answer: "Urbanfarmz is a community farming concept where members get their own dedicated vegetable-growing space without owning farmland."
    },
    {
      question: "How does membership work?",
      answer: "Choose a patch size and pay the applicable membership fee. The minimum membership period is three months."
    },
    {
      question: "Do I need farming experience?",
      answer: "No. You can learn with guidance from our farm team."
    },
    {
      question: "Do I need to visit every day?",
      answer: "No. Our team supports routine watering, crop monitoring and farm care. Members can visit and participate according to their preference and the farm's visiting arrangements."
    },
    {
      question: "Can I choose what vegetables to grow?",
      answer: "You can select suitable crops in consultation with the farm team, depending on season, space and growing conditions."
    },
    {
      question: "Are grow bags and planting materials included in membership?",
      answer: "A separate one-time growing setup investment applies. The costs and inclusions will be explained before membership confirmation."
    },
    {
      question: "How does AI crop monitoring work?",
      answer: "Our farm team records crop walkthrough videos. AI-assisted analysis helps document visible crop progress and generate weekly observations, which are reviewed by our farm team."
    },
    {
      question: "Will I receive updates about my own crops?",
      answer: "Yes. Every member is intended to receive a personalised weekly video walkthrough and AI-assisted crop report about their growing space."
    },
    {
      question: "Do I need to visit the farm to know how my crops are growing?",
      answer: "No. Your weekly updates help you follow crop progress remotely. Members can still visit their growing spaces and participate in farming."
    },
    {
      question: "Is Urbanfarmz an organic farm?",
      answer: "Urbanfarmz follows an organic-growing approach. Specific growing inputs and practices will be communicated transparently. Do not describe the produce as certified organic unless the applicable certification has been obtained."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-[#06140b] text-white overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            EVERYTHING YOU NEED TO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-farm-bright via-emerald-300 to-lime-300">
              KNOW.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300 font-normal">
            Clear, transparent answers about how Urbanfarmz community farming works.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl sm:rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? 'bg-[#0a2214] border-farm-bright/40 shadow-sm'
                    : 'bg-[#08190f]/70 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-3 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-xs sm:text-sm md:text-base text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-farm-bright text-farm-darkest rotate-180'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-200 ease-in-out px-4 sm:px-6 overflow-hidden ${
                    isOpen ? 'max-h-96 pb-4 sm:pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <div className="pt-2 border-t border-white/10 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-10 text-center text-xs text-gray-400 font-normal">
          Have more questions not answered here?{' '}
          <a
            href="#contact"
            className="text-farm-bright font-semibold underline underline-offset-4 hover:text-white"
          >
            Reach out to our farm team
          </a>{' '}
          or book a weekend walkthrough visit.
        </div>

      </div>
    </section>
  );
};
