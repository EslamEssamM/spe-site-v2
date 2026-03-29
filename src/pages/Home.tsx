"use client";

import HeroSection from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import HighBoardSectionComponent from "@/components/sections/HighBoard";
import FlagshipEventsSection from "@/components/sections/FlagshipEvents";
import ActivitiesSection from "@/components/sections/Activities";
import EnhancedMagazinesSectionComponent from "@/components/sections/Magazines";
import DrillingBookSection from "@/components/sections/DrillingBook";
import Awards from "@/components/sections/Awards";
import { NewsSectionComponent } from "@/components/sections/News";
import AboutSection from "@/components/sections/About";
import { AnnouncementModal } from "@/components/announcement";
import SponsorsSection from "@/components/sections/Sponsors";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050B1A]">
      <AnnouncementModal />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <StatsStrip />

        <section id="about">
          <AboutSection />
        </section>

        <section id="news">
          <NewsSectionComponent />
        </section>

        <section id="awards">
          <Awards />
        </section>

        <section id="highboard">
          <HighBoardSectionComponent />
        </section>

        <section id="events">
          <FlagshipEventsSection />
        </section>

        <section id="activities">
          <ActivitiesSection />
        </section>

        <section id="magazines">
          <EnhancedMagazinesSectionComponent />
        </section>

        <section id="drilling-book">
          <DrillingBookSection />
        </section>

        <section id="sponsors">
          <SponsorsSection />
        </section>
      </main>
    </div>
  );
}
