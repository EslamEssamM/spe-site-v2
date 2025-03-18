"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Award,
  Globe,
  Zap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const sponsorLogos = [
  {
    src: "/sponsors/SLB.webp",
    alt: "SLB",
    href: "https://www.slb.com/",
    description:
      "Global technology leader in the energy industry, providing digital solutions and innovative technologies.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    src: "/sponsors/datacamp.webp",
    alt: "DataCamp",
    href: "https://www.datacamp.com/",
    description:
      "Leading platform for data science and analytics education, empowering learners worldwide.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    src: "/sponsors/BGS.webp",
    alt: "BGS Energy Services",
    href: "https://bgses.com/",
    description:
      "BGS Energy Services is a leading Global provider of products, innovative technologies and services for Oil and Gas Industry.",
    color: "from-purple-500 to-blue-500",
  },
  {
    src: "/sponsors/UEE.webp",
    alt: "United Energy Egypt",
    href: "https://ueel.co/",
    description:
      "United Energy Egypt (UEE) is dedicated to sustainable, long-term growth in the energy sector. As part of United Energy Group (UEG)",
    color: "from-amber-500 to-orange-500",
  },
  {
    src: "/sponsors/ets.webp",
    alt: "ETS",
    href: "https://www.ets.org/",
    description:
      "Global leader in educational assessment, research and measurement solutions.",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function SponsorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Check screen size on mount
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Autoplay functionality with smooth transitions
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sponsorLogos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay]);

  // Animate cards when active index changes
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    });
  }, [activeIndex, controls]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + sponsorLogos.length) % sponsorLogos.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sponsorLogos.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate visible slides based on screen size
  const getVisibleSlides = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return Math.min(3, sponsorLogos.length);
  };

  const visibleSlides = getVisibleSlides();

  // Create a circular array of sponsors for infinite scrolling effect
  const getVisibleSponsors = () => {
    const result = [];
    for (let i = 0; i < visibleSlides; i++) {
      const index = (activeIndex + i) % sponsorLogos.length;
      result.push({
        ...sponsorLogos[index],
        index,
      });
    }
    return result;
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900/80 to-gray-900/40 backdrop-blur-sm relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Partners
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Sponsors
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto text-lg">
            Collaborating with industry leaders to drive innovation and
            excellence in petroleum engineering education.
          </p>
        </motion.div>

        {/* Slider Controls */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          <motion.button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 border border-white/5 hover:border-cyan-500/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous sponsor"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex space-x-2">
            {sponsorLogos.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-cyan-400 to-blue-400 w-10"
                    : "bg-white/30 hover:bg-white/50 w-3"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to sponsor ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 border border-white/5 hover:border-cyan-500/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next sponsor"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Sponsors Showcase */}
        <div
          className="relative overflow-hidden py-10 px-4 perspective"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
          style={{ perspective: "1000px" }}
        >
          <div className="flex justify-center">
            <AnimatePresence mode="popLayout">
              {getVisibleSponsors().map((sponsor, idx) => {
                const centerIndex = Math.floor(visibleSlides / 2);
                const zIndex = visibleSlides - Math.abs(idx - centerIndex);
                const isCenter = idx === centerIndex;

                return (
                  <motion.div
                    key={`${sponsor.alt}-${sponsor.index}`}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotateY:
                        idx < centerIndex ? 15 : idx > centerIndex ? -15 : 0,
                      z: isCenter ? 50 : 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: isCenter ? 1.05 : 0.95,
                      rotateY:
                        idx < centerIndex ? 15 : idx > centerIndex ? -15 : 0,
                      x: isMobile
                        ? 0
                        : (idx - centerIndex) *
                          (isMobile ? 300 : isTablet ? 280 : 320),
                      z: isCenter ? 50 : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      z: -100,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      delay: idx * 0.05,
                    }}
                    className={`flex-shrink-0 px-4 ${isMobile ? "w-full" : "w-auto"}`}
                    style={{
                      zIndex,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to={sponsor.href}
                    >
                      <div className="relative group">
                        {/* Glow effect */}
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${sponsor.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                        ></div>

                        {/* Card */}
                        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 w-full sm:w-72 h-[26rem] flex flex-col border border-white/10 transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10 relative z-10 overflow-hidden">
                          {/* Animated background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/20 z-0"></div>
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

                          {/* Content */}
                          <div className="relative z-10 flex-1 flex flex-col">
                            {/* Logo container */}
                            <div className="flex-1 flex items-center justify-center w-full p-4 mb-4 relative">
                              {/* Animated ring */}
                              <motion.div
                                className={`absolute w-32 h-32 rounded-full border-2 border-dashed border-opacity-20 border-cyan-400`}
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />

                              {/* Logo */}
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                }}
                                className="relative bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl shadow-lg"
                              >
                                <img
                                  src={sponsor.src || "/placeholder.svg"}
                                  alt={sponsor.alt}
                                  className="max-w-full max-h-28 object-contain brightness-110 transition-all duration-300"
                                />
                              </motion.div>
                            </div>

                            {/* Text content */}
                            <div className="text-center">
                              <h3 className="text-white text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                                {sponsor.alt}
                              </h3>
                              <p className="text-sm text-gray-300 line-clamp-3 mb-4 h-12 overflow-hidden">
                                {sponsor.description}
                              </p>

                              {/* Button */}
                              <motion.a
                                href={sponsor.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r ${sponsor.color} text-white transition-all duration-300 text-sm font-medium z-10`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span>Visit Website</span>
                                <ExternalLink className="ml-1 w-4 h-4" />
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Partnership Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_107%,rgba(32,201,151,0.13),rgba(32,201,255,0.04))]"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 mr-4">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  DataCamp Partnership
                </h3>
              </div>

              <p className="text-gray-300 mb-6 pl-16">
                Get free access to DataCamp's comprehensive data science courses
                and boost your career with our exclusive partnership.
              </p>

              <motion.a
                href="/data-camp"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white transition-all duration-300 text-base font-semibold group"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_107%,rgba(32,156,255,0.13),rgba(32,201,255,0.04))]"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mr-4">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  ETS TOEFL Partnership
                </h3>
              </div>

              <p className="text-gray-300 mb-6 pl-16">
                Get 25% off on TOEFL iBT® exam registration through our
                exclusive partnership with ETS.
              </p>

              <motion.a
                href="/ets"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300 text-base font-semibold group"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20 relative"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Become Our Partner
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Join our distinguished partners in shaping the future of energy
              and education
            </p>

            <a
              href="mailto:info@spesusc.com"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary hover:bg-white/90 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              <span>info@spesusc.com</span>
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
