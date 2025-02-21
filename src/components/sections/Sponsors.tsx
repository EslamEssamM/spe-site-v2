"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Add your actual sponsor logos here
const sponsorLogos = [
  {
    src: "/sponsors/sponsor1.png",
    alt: "Sponsor 1",
    href: "#",
    category: "Gold"
  },
  {
    src: "/sponsors/sponsor2.png",
    alt: "Sponsor 2",
    href: "#",
    category: "Silver"
  },
  {
    src: "/sponsors/sponsor3.png",
    alt: "Sponsor 3",
    href: "#",
    category: "Bronze"
  },
  {
    src: "/sponsors/sponsor3.png",
    alt: "Sponsor 3",
    href: "#",
    category: "Bronze"
  },
  {
    src: "/sponsors/sponsor3.png",
    alt: "Sponsor 3",
    href: "#",
    category: "Bronze"
  },
  {
    src: "/sponsors/sponsor3.png",
    alt: "Sponsor 3",
    href: "#",
    category: "Bronze"
  },
  {
    src: "/sponsors/sponsor3.png",
    alt: "Sponsor 3",
    href: "#",
    category: "Bronze"
  },
  {
    src: "/sponsors/sponsor3.png",
    alt: "Sponsor 3",
    href: "#",
    category: "Bronze"
  },
  // Add more sponsors as needed
];

export default function SponsorsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(sponsorLogos.map(logo => logo.category))];

  const filteredLogos = activeCategory === "All"
    ? sponsorLogos
    : sponsorLogos.filter(logo => logo.category === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            We're proud to work with industry leaders who support our mission and help drive innovation in the energy sector.
          </p>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                  ? "bg-[#0d4b93] text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Logos Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 py-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: filteredLogos.length * 5,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
          >
            {/* Double the logos for smoother infinite loop */}
            {[...filteredLogos, ...filteredLogos].map((logo, index) => (
              <a
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-6 w-44 h-44 flex flex-col items-center justify-center gap-3 border border-white/10 transition-all duration-300">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain filter brightness-100 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-400">
                    {logo.category}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <p className="text-gray-300 mb-6">
          Interested in becoming a sponsor?
        </p>
        <a
          href="mailto:info@spesusc.com"
          target="_blank"
          className="inline-flex items-center px-6 py-3 rounded-full bg-[#0d4b93] text-white hover:bg-[#0d4b93]/90 transition-colors duration-300"
        >
          Become a Sponsor
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  );
} 