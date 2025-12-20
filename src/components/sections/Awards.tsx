import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, Award, Trophy } from "lucide-react";

const awards = [
  {
    title: "Presidential Award for Outstanding Student Chapter",
    years: [2014, 2015, 2017, 2019, 2020, 2022, 2025],
    description:
      "Recognized for exceptional performance in technical dissemination and professional development. Ranked among the top three performing student chapters worldwide.",
    icon: Trophy,
    accentColor: "#FFC857",
  },
  {
    title: "Gold Standard Award",
    years: [2010, 2011, 2012, 2013, 2016],
    description:
      "Achieved the highest level of excellence in chapter operations and activities.",
    icon: Award,
    accentColor: "#00C29A",
  },
];

export default function AnimatedAwardsSection() {
  const [currentAward, setCurrentAward] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentAward((prev) => (prev + 1) % awards.length);
    }, 8000);
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FFC857]/20 text-[#FFC857] text-sm font-semibold rounded-full mb-4">
            Recognition
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
            Our Achievements
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Celebrating years of excellence and recognition in the petroleum engineering community
          </p>
        </motion.div>

        {/* Awards Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#0a1628] rounded-3xl border border-white/10 p-8 lg:p-12 min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentAward}
                custom={direction}
                initial={{ opacity: 0, x: 100 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 * direction }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="text-center"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${awards[currentAward].accentColor}20` }}
                >
                  <CurrentIcon
                    className="w-10 h-10"
                    style={{ color: awards[currentAward].accentColor }}
                  />
                </motion.div>

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
                  className="text-white/60 text-lg max-w-xl mx-auto mb-8"
                >
                  {awards[currentAward].description}
                </motion.p>

                {/* Years */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-3"
                >
                  {awards[currentAward].years.map((year, i) => (
                    <motion.span
                      key={year}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: `${awards[currentAward].accentColor}15`,
                        color: awards[currentAward].accentColor,
                        border: `1px solid ${awards[currentAward].accentColor}30`,
                      }}
                    >
                      {year}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevAward}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 bg-[#0a1628] border-white/20 text-white hover:bg-[#0D4C92] hover:text-white hover:border-[#0D4C92]"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextAward}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 bg-[#0a1628] border-white/20 text-white hover:bg-[#0D4C92] hover:text-white hover:border-[#0D4C92]"
          >
            <ChevronRight size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentAward ? 1 : -1);
                  setCurrentAward(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentAward
                    ? "bg-[#0D4C92] w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
