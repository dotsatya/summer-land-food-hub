"use client";

import React, { useState } from "react";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { OfferSection } from "./OfferSection";
import { EcosystemAndImpact } from "./EcosystemAndImpact";
import { GetInvolvedSection } from "./GetInvolvedAndFooter";
import { ServiceDetailModal, StoryModal } from "./HubModals";
import { type OfferService } from "./hubData";

export function HomePage() {
  const [storyOpen, setStoryOpen] = useState(false);
  const [activeService, setActiveService] = useState<OfferService | null>(null);

  return (
    <div className="flex-1 flex flex-col bg-[#F8F7F2] text-[#193827]">
      <main className="flex-1">
        <HeroSection onWatchStory={() => setStoryOpen(true)} />
        <AboutSection onLearnMore={() => setStoryOpen(true)} />
        <OfferSection onSelectService={(s) => setActiveService(s)} />
        <EcosystemAndImpact onOpenStory={() => setStoryOpen(true)} />
        <GetInvolvedSection />
      </main>

      {/* Interactive Modals */}
      <StoryModal open={storyOpen} onClose={() => setStoryOpen(false)} />
      <ServiceDetailModal
        service={activeService}
        onSelectService={(s) => setActiveService(s)}
        onClose={() => setActiveService(null)}
      />
    </div>
  );
}
