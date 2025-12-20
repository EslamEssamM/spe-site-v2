"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Handshake, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

const sponsorLogos = [
  {
    src: "/sponsors/SLB.webp",
    alt: "SLB",
    href: "https://www.slb.com/",
    description: "Global technology leader in the energy industry, providing digital solutions and innovative technologies.",
  },
  {
    src: "/sponsors/datacamp.webp",
    alt: "DataCamp",
    href: "https://www.datacamp.com/",
    description: "Leading platform for data science and analytics education, empowering learners worldwide.",
  },
  {
    src: "/sponsors/BGS.webp",
    alt: "BGS Energy Services",
    href: "https://bgses.com/",
    description: "Leading global provider of products, innovative technologies and services for the Oil and Gas Industry.",
  },
  {
    src: "/sponsors/UEE.webp",
    alt: "United Energy Egypt",
    href: "https://ueel.co/",
    description: "Dedicated to sustainable, long-term growth in the energy sector as part of United Energy Group.",
  },
  {
    src: "/sponsors/ets.webp",
    alt: "ETS",
    href: "https://www.ets.org/",
    description: "Global leader in educational assessment, research and measurement solutions.",
  },
];

export default function SponsorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sponsorLogos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + sponsorLogos.length) % sponsorLogos.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % sponsorLogos.length);

  return (
    <section id="sponsors" className="py-20 lg:py-28 bg-[#050B1A]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
            Partnerships
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Partners & Sponsors
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Collaborating with industry leaders to drive innovation and excellence in petroleum engineering education
          </p>
        </motion.div>

        {/* Sponsors Carousel */}
        <div
          className="relative max-w-4xl mx-auto mb-16"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Main Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0F1629] rounded-2xl p-8 lg:p-12 border border-gray-800"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Logo */}
              <div className="w-48 h-48 bg-[#0a1628] rounded-2xl p-6 flex items-center justify-center flex-shrink-0 border border-white/10">
                <img
                  src={sponsorLogos[activeIndex].src}
                  alt={sponsorLogos[activeIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {sponsorLogos[activeIndex].alt}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {sponsorLogos[activeIndex].description}
                </p>
                <Link
                  to={sponsorLogos[activeIndex].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D4C92] hover:bg-[#0D4C92]/80 text-white rounded-xl font-semibold transition-colors duration-200"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#0F1629] border border-gray-800 text-white hover:bg-[#0D4C92] hover:border-[#0D4C92] flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {sponsorLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#0D4C92] w-8"
                      : "bg-gray-700 hover:bg-gray-600 w-2.5"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#0F1629] border border-gray-800 text-white hover:bg-[#0D4C92] hover:border-[#0D4C92] flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {sponsorLogos.map((sponsor, index) => (
            <motion.a
              key={sponsor.alt}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#0a1628] rounded-xl p-4 h-24 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#0D4C92]/50 hover:bg-[#0D4C92]/10 cursor-pointer ${
                index === activeIndex ? "ring-2 ring-[#0D4C92] bg-[#0D4C92]/10" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            >
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </motion.a>
          ))}
        </div>

        {/* Partnership Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F1629] rounded-2xl p-8 border border-gray-800 hover:border-[#00C29A]/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#00C29A]/10 flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6 text-[#00C29A]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">DataCamp Partnership</h3>
            <p className="text-gray-400 mb-6">
              Get free access to DataCamp's comprehensive data science courses and boost your career with our exclusive partnership.
            </p>
            <Link
              to="/data-camp"
              className="inline-flex items-center gap-2 text-[#00C29A] font-semibold hover:gap-3 transition-all duration-200"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0F1629] rounded-2xl p-8 border border-gray-800 hover:border-[#0D4C92]/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0D4C92]/10 flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6 text-[#0D4C92]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">ETS TOEFL Partnership</h3>
            <p className="text-gray-400 mb-6">
              Get 25% off on TOEFL iBT® exam registration through our exclusive partnership with ETS.
            </p>
            <Link
              to="/ets"
              className="inline-flex items-center gap-2 text-[#0D4C92] font-semibold hover:gap-3 transition-all duration-200"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#0D4C92]/20 to-[#00C29A]/20 rounded-2xl p-8 lg:p-12 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Become Our Partner</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join our distinguished partners in shaping the future of energy and education
            </p>
            <a
              href="mailto:info@spesuez.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0D4C92] rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              info@spesuez.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
