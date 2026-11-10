import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ConceptSection } from './components/ConceptSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { MoreThanFarmingSection } from './components/MoreThanFarmingSection';
import { AIFarmingSection } from './components/AIFarmingSection';
import { MembershipSection } from './components/MembershipSection';
import { ReelsShowcaseSection } from './components/ReelsShowcaseSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { MembershipPlanType } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlanType>('general');

  const handleOpenBooking = (plan: MembershipPlanType = 'general') => {
    setSelectedPlan(plan);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050f09] text-gray-100 flex flex-col font-sans selection:bg-farm-bright selection:text-black">
      {/* Dynamic Navigation Bar (Reveals smoothly on scroll) */}
      <Navbar onOpenBooking={() => handleOpenBooking('general')} />

      <main className="flex-1">
        {/* SECTION 01 — HERO */}
        <HeroSection onOpenBooking={() => handleOpenBooking('general')} />

        {/* SECTION 02 — THE CONCEPT */}
        <ConceptSection />

        {/* SECTION 03 — HOW IT WORKS */}
        <HowItWorksSection />

        {/* SECTION 04 — MORE THAN JUST FARMING */}
        <MoreThanFarmingSection />

        {/* SECTION 05 — NEW-AGE FARMING: ORGANIC GROWING POWERED BY AI */}
        <AIFarmingSection />

        {/* SECTION 06 — MEMBERSHIP PLANS */}
        <MembershipSection onSelectPlan={(plan) => handleOpenBooking(plan)} />

        {/* REELS & SHORTS SHOWCASE */}
        <ReelsShowcaseSection />

        {/* SECTION 07 — FAQ */}
        <FAQSection />

        {/* SECTION 08 — FINAL CALL TO ACTION */}
        <FinalCTASection onOpenBooking={() => handleOpenBooking('general')} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppWidget />

      {/* BOOKING / ENQUIRY MODAL */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialPlan={selectedPlan}
      />
    </div>
  );
}

