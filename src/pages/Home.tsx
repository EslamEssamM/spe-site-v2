"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/sections/Hero";
import HighBoardSectionComponent from "@/components/sections/HighBoard";
import { Navbar } from "@/components/Navbar";
import EventsSectionWithParticles from "@/components/sections/Events";
import EnhancedMagazinesSectionComponent from "@/components/sections/Magazines";
import Awards from "@/components/sections/Awards";
import { NewsSectionComponent } from "@/components/sections/News";
import AboutSection from "@/components/sections/About";
import { Button } from "@/components/ui/Button";
const sections = [
  { id: "awards", title: "Awards" },
  { id: "about", title: "About" },
  {
    id: "news",
    title: "News",
  },
  { id: "highboard", title: "Highboard Team" },
  { id: "events", title: "Events" },
  { id: "magazines", title: "Magazines" },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <ServiceUnavailable />;
  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-lg p-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[#0d4b93] hover:text-[#0d4b93]/80 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about" className="">
          <AboutSection />
        </section>

        <section id="news" className="">
          <NewsSectionComponent />
        </section>
        <section id="awards" className="">
          <Awards />
        </section>
        <section id="highboard" className="">
          <HighBoardSectionComponent />
        </section>

        <section id="events" className="">
          <EventsSectionWithParticles />
        </section>

        <section id="magazines" className="">
          <EnhancedMagazinesSectionComponent />
        </section>

        {/* {sections.map((section) => (
          <section key={section.id} id={section.id} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#0d4b93]">
                {section.title}
              </h2>
              {/* Content for each section will be added here */}
        {/* <p className="text-center text-gray-600">
                Content for {section.title} section coming soon...
              </p>
            </div>
          </section> */}
        {/* ))} */}
      </main>

      <footer className="bg-[#0d4b93] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} SPE Suez University Student
            Chapter. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceUnavailable() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Service Unavailable</h1>
        <p className="text-xl mb-8">
          Your limit has reached. Please recharge cloud hosting issuer to run
          this instance.
        </p>
        <Button
          variant="secondary"
          className="mr-4"
          onClick={() =>
            // hostinger
            window.open("https://www.hostinger.com/")
          }
        >
          Contact Us
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Reload
        </Button>
      </motion.div>
    </div>
  );
}
