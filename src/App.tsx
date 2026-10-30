import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { SolutionSection } from './components/SolutionSection.tsx';
import { ProductStructure } from './components/ProductStructure.tsx';
import { InteractiveIntroductions } from './components/InteractiveIntroductions.tsx';
import { InteractiveChecklist } from './components/InteractiveChecklist.tsx';
import { DiscursivaComparator } from './components/DiscursivaComparator.tsx';
import { TargetAudience } from './components/TargetAudience.tsx';
import { Differentiators } from './components/Differentiators.tsx';
import { StepByStepFlow } from './components/StepByStepFlow.tsx';
import { HowToBuySection } from './components/HowToBuySection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { OfferSection } from './components/OfferSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';
import { VirtualAssistant } from './components/VirtualAssistant.tsx';
import { LegalModal } from './components/LegalModal.tsx';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <div className="min-h-screen bg-[#051218] text-[#f0f6fc] flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-300">
      {/* Fixed Top Navigation Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (Above the fold with exam sheet & direct WhatsApp CTA) */}
        <Hero />

        {/* 2. The Problem (Pain points of knowing theory vs freezing in discursivas) */}
        <ProblemSection />

        {/* 3. The Solution (The 3 Pillars of High Scoring) */}
        <SolutionSection />

        {/* 4. Product Structure (Detailed 3 blocks) */}
        <ProductStructure />

        {/* 5. Interactive Introductions (Copyable models for top opening paragraphs) */}
        <InteractiveIntroductions />

        {/* 6. Interactive Checklist (Visual evaluation tool) */}
        <InteractiveChecklist />

        {/* 7. Discursiva Comparator (Before vs After: Grade 3.5 vs Grade 10.0) */}
        <DiscursivaComparator />

        {/* 8. Target Audience (Concursos, Certificações DPO, Pareceres) */}
        <TargetAudience />

        {/* 9. Differentiators (Why Redação LGPD is different from 80h courses) */}
        <Differentiators />

        {/* 10. Step-by-Step Flow (The 4-step path to the 10.0 score) */}
        <StepByStepFlow />

        {/* 11. How to Buy via WhatsApp (3 simple steps) */}
        <div id="como-funciona">
          <HowToBuySection />
        </div>

        {/* 12. Social Proof / Credibility */}
        <TestimonialsSection />

        {/* 13. Offer & Pricing Section (With WhatsApp Phone & Big CTA) */}
        <OfferSection />

        {/* 14. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 15. Footer with copyright & legal links */}
      <Footer
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

      {/* Floating WhatsApp Action Button with gentle pulse (Right) */}
      <WhatsAppFloatingButton />

      {/* Floating Virtual Assistant with AI Human Portrait (Left) */}
      <VirtualAssistant />

      {/* Interactive Terms & Privacy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
