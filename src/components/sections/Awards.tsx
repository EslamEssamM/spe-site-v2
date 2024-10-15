import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const awards = [
  {
    title: "OUTSTANDING STUDENT CHAPTER",
    years: [2014, 2015, 2017, 2019, 2020, 2022],
    description:
      "Recognized for exceptional performance and contributions to the petroleum engineering community.",
    color: "#FFD700",
  },
  {
    title: "BEST CHAPTER AWARD",
    years: [2011, 2012, 2014, 2015, 2016],
    description:
      "Awarded for outstanding overall performance among all student chapters.",
    color: "#C0C0C0",
  },
  {
    title: "GOLDEN STANDARD STATUS",
    years: [2010, 2011, 2012, 2013, 2016],
    description:
      "Achieved the highest level of excellence in chapter operations and activities.",
    color: "#CD7F32",
  },
];

const backgroundVariants = {
  initial: {
    backgroundPosition: "0% 50%",
  },
  animate: {
    backgroundPosition: "100% 50%",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 20,
      ease: "linear",
    },
  },
};

const titleVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } },
};

const descriptionVariants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: "easeIn" } },
};

const yearVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
  exit: (i: number) => ({
    scale: 0,
    opacity: 0,
    transition: { duration: 0.3, delay: i * 0.05, ease: "easeIn" },
  }),
};

export default function AnimatedAwardsSection() {
  const [currentAward, setCurrentAward] = useState(0);
  const [direction, setDirection] = useState(0);

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

  return (
    <motion.section
      className="py-24 overflow-hidden relative"
      initial="initial"
      animate="animate"
      //@ts-ignore
      variants={backgroundVariants}
      style={{
        background:
          "linear-gradient(45deg, #0d4b93, #1a237e, #4a148c, #311b92)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our Stellar Achievements
        </motion.h2>
        <div className="relative h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentAward}
              custom={direction}
              initial={{ opacity: 0, x: 300 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 * direction }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.div
                className="text-center mb-8"
                variants={titleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Award
                  className="w-24 h-24 mx-auto mb-4"
                  style={{ color: awards[currentAward].color }}
                />
                <h3
                  className="text-4xl md:text-5xl font-bold"
                  style={{ color: awards[currentAward].color }}
                >
                  {awards[currentAward].title}
                </h3>
              </motion.div>
              <motion.p
                className="text-xl text-white text-center max-w-2xl mb-8"
                variants={descriptionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {awards[currentAward].description}
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4">
                {awards[currentAward].years.map((year, i) => (
                  <motion.span
                    key={year}
                    custom={i}
                    variants={yearVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-full text-lg font-semibold text-white"
                  >
                    {year}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            onClick={prevAward}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextAward}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
