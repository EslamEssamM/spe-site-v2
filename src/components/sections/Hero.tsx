import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";

const texts = [
  "Empowering the future of petroleum engineering",
  "Connecting students with industry professionals",
  "Fostering innovation in energy solutions",
  "Building leaders for tomorrow's challenges",
];

export default function BestHeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { stiffness: 100, damping: 5 };
  const mouseXSpring = useSpring(mousePosition.x, springConfig);
  const mouseYSpring = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleExploreClick = () => {
    const awardsSection = document.getElementById("awards");
    if (awardsSection) {
      awardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <motion.div className="absolute inset-0 z-0 bg-[url('/events/activities.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-900/70 to-purple-900/60 z-10" />

      {/* Animated particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
            opacity: 0.2,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          // @ts-ignore
          animate={{
            x: mouseXSpring,
            y: mouseYSpring,
            transition: {
              delay: index * 0.05,
              type: "spring",
              stiffness: 50,
              damping: 10,
            },
          }}
        />
      ))}

      <div className="relative z-20 text-white text-center px-4 max-w-4xl">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SPE Suez Chapter
        </motion.h1>
        <div className="h-24 md:h-28 mb-8">
          <TypeAnimation
            sequence={[
              texts[0],
              2000,
              texts[1],
              2000,
              texts[2],
              2000,
              texts[3],
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-light"
          />
        </div>
        <motion.div
          ref={ref}
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg px-8 py-4 rounded-full"
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
        <ChevronDown className="text-white" size={40} />
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900 to-transparent z-30" />
    </section>
  );
}
