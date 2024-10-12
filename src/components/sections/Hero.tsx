import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
// import { Link } from "@tanstack/react-router";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Empowering the future of petroleum engineering",
    "Connecting students with industry professionals",
    "Fostering innovation in energy solutions",
    "Building leaders for tomorrow's challenges",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    const awardsSection = document.getElementById("awards");
    if (awardsSection) {
      awardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20on%20Google%20-s5tnPd4skdogQMfbH1DM1EmRNmxCDH.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
          opacity,
        }}
      />
      <div className="absolute inset-0 bg-[#0d4b93] bg-opacity-70 z-10" />
      <div className="relative z-20 text-white text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SPE Suez Chapter
        </motion.h1>
        <motion.div
          className="h-16 md:h-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {texts.map((text, index) => (
            <motion.p
              key={index}
              className="text-xl md:text-2xl mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: currentTextIndex === index ? 0 : 50,
                opacity: currentTextIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-[#0d4b93] hover:bg-[#0d4b93] hover:text-white transition-colors duration-300"
            onClick={handleExploreClick}
          >
            Explore Our Chapter
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ChevronDown className="text-white" size={32} />
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-30" />
    </section>
  );
}
