import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, Award, Trophy, Medal, X, ZoomIn } from "lucide-react";
import { Link } from "@tanstack/react-router";

const awards = [
  {
    title: "Presidential Award for Outstanding Student Chapter",
    years: [2014, 2015, 2017, 2019, 2020, 2022, 2025],
    description:
      "Global-level recognition presented to the top 10% of student chapters worldwide for exemplary efforts in technical initiatives, professional development, leadership, and community involvement.",
    icon: Trophy,
    accentColor: "#FFC857",
    certificateImage: "/awards/Outstanding.jpg",
    awardedBy: "SPE International",
    badge: "/logos/25-Badge-StudentChapter.png",
  },
  {
    title: "Student Chapter Excellence Award",
    years: [2010, 2011, 2012, 2013, 2016, 2021],
    description:
      "Recognizes chapters achieving high impact across professional development, technical initiatives, industry engagement, and community involvement, honoring those who go beyond expectations.",
    icon: Award,
    accentColor: "#00C29A",
    certificateImage: "/awards/Excellence.png",
    awardedBy: "SPE International",
    badge: null,
  },
  {
    title: "Regional Outstanding Student Chapter Award",
    years: [2025],
    description:
      "Honors chapters demonstrating exceptional service and leadership within the Middle East and North Africa region, excelling in technical dissemination and professional development.",
    icon: Medal,
    accentColor: "#0D4C92",
    certificateImage: "/awards/Regional.jpg",
    awardedBy: "SPE International",
    badge: "/logos/25-Badge-StudentChapter.png",
  },
];

const totalAwards = awards.reduce((sum, award) => sum + award.years.length, 0);

export default function AnimatedAwardsSection() {
  const [currentAward, setCurrentAward] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentAward((prev) => (prev + 1) % awards.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextAward = () => {
    setDirection(1);
    setCurrentAward((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setDirection(-1);
    setCurrentAward((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const CurrentIcon = awards[currentAward].icon;

  return (
    <section id="awards" className="py-20 lg:py-28 bg-[#050B1A] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FFC857]/20 text-[#FFC857] text-sm font-semibold rounded-full mb-4">
            <Trophy className="inline-block w-4 h-4 mr-1" />
            Recognition
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-[Poppins]">
            Our Achievements
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-6">
            {totalAwards}+ awards celebrating excellence in petroleum engineering education
          </p>
        </motion.div>

        {/* Awards Carousel with Certificate */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-[#0a1628] rounded-3xl border border-white/10 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentAward}
                custom={direction}
                initial={{ opacity: 0, x: 100 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 * direction }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="grid lg:grid-cols-2 gap-0"
              >
                {/* Certificate Image Side */}
                <div className="relative group cursor-pointer" onClick={() => setShowCertificate(true)}>
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={awards[currentAward].certificateImage}
                      alt={awards[currentAward].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent lg:bg-gradient-to-r" />
                    
                    {/* Zoom indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Badge overlay for recent awards */}
                    {awards[currentAward].badge && (
                      <motion.div
                        initial={{ scale: 0, rotate: -15 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute top-4 right-4 w-20 h-20 lg:w-24 lg:h-24"
                      >
                        <img
                          src={awards[currentAward].badge}
                          alt="SPE Badge"
                          className="w-full h-full object-contain drop-shadow-2xl"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: `${awards[currentAward].accentColor}20` }}
                  >
                    <CurrentIcon
                      className="w-8 h-8"
                      style={{ color: awards[currentAward].accentColor }}
                    />
                  </motion.div>

                  {/* Awarded By */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="text-sm text-white/40 mb-2"
                  >
                    Awarded by {awards[currentAward].awardedBy}
                  </motion.span>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl lg:text-3xl font-bold text-white mb-4 font-[Poppins]"
                  >
                    {awards[currentAward].title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/60 text-base lg:text-lg mb-6 leading-relaxed"
                  >
                    {awards[currentAward].description}
                  </motion.p>

                  {/* Years Won */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6"
                  >
                    <span className="text-sm text-white/40 mb-3 block">Years Won ({awards[currentAward].years.length})</span>
                    <div className="flex flex-wrap gap-2">
                      {awards[currentAward].years.map((year, i) => (
                        <motion.span
                          key={year}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          className="px-3 py-1.5 rounded-full text-sm font-semibold"
                          style={{
                            backgroundColor: `${awards[currentAward].accentColor}15`,
                            color: awards[currentAward].accentColor,
                            border: `1px solid ${awards[currentAward].accentColor}30`,
                          }}
                        >
                          {year}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* View All Link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      to="/awards"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                      style={{ color: awards[currentAward].accentColor }}
                    >
                      View All Awards
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevAward}
            className="absolute left-2 lg:-left-16 top-1/2 -translate-y-1/2 bg-[#0a1628] border-white/20 text-white hover:bg-[#0D4C92] hover:text-white hover:border-[#0D4C92] z-10"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextAward}
            className="absolute right-2 lg:-right-16 top-1/2 -translate-y-1/2 bg-[#0a1628] border-white/20 text-white hover:bg-[#0D4C92] hover:text-white hover:border-[#0D4C92] z-10"
          >
            <ChevronRight size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {awards.map((award, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentAward ? 1 : -1);
                  setCurrentAward(index);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentAward
                    ? "w-8"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                style={index === currentAward ? { backgroundColor: award.accentColor } : {}}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B1A]/95 backdrop-blur-sm"
            onClick={() => setShowCertificate(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={awards[currentAward].certificateImage}
                alt={awards[currentAward].title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold text-white">{awards[currentAward].title}</h4>
                <p className="text-white/60">Click outside to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
