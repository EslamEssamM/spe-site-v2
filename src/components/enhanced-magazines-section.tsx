"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const magazines = [
  {
    title: "Petroleum Insights",
    issue: "Vol. 1, Issue 1",
    cover: "/placeholder.svg?height=400&width=300",
    description: "Exploring the latest trends in oil and gas exploration.",
  },
  {
    title: "Energy Frontiers",
    issue: "Vol. 2, Issue 3",
    cover: "/placeholder.svg?height=400&width=300",
    description: "Innovations in renewable energy and sustainable practices.",
  },
  {
    title: "Tech Horizons",
    issue: "Vol. 3, Issue 2",
    cover: "/placeholder.svg?height=400&width=300",
    description: "Cutting-edge technologies shaping the future of energy.",
  },
  {
    title: "Global Energy Review",
    issue: "Vol. 4, Issue 1",
    cover: "/placeholder.svg?height=400&width=300",
    description: "Analyzing worldwide energy policies and market trends.",
  },
];
export function EnhancedMagazinesSectionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const nextMagazine = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % magazines.length);
  };

  const prevMagazine = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + magazines.length) % magazines.length
    );
  };

  return (
    <section id="magazines" className="py-16 overflow-hidden relative">
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"
        style={{
          transform: `translate(${mousePosition.x / 100}px, ${mousePosition.y / 100}px)`,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Magazines
        </motion.h2>
        <div className="relative" ref={ref}>
          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {magazines.map((magazine, index) => (
              <motion.div
                key={magazine.title}
                className={`absolute transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 scale-100 z-20"
                    : index === (currentIndex + 1) % magazines.length
                      ? "opacity-60 scale-90 translate-x-1/2 z-10"
                      : index ===
                          (currentIndex - 1 + magazines.length) %
                            magazines.length
                        ? "opacity-60 scale-90 -translate-x-1/2 z-10"
                        : "opacity-0 scale-75 z-0"
                }`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    y: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <Card
                  className="w-64 md:w-80 bg-white shadow-xl transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    boxShadow:
                      hoveredIndex === index
                        ? "0 0 20px 5px rgba(66, 153, 225, 0.5)"
                        : "none",
                  }}
                >
                  <CardContent className="p-4">
                    <img
                      src={magazine.cover}
                      alt={magazine.title}
                      className="w-full h-96 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{magazine.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {magazine.issue}
                    </p>
                    <p className="text-sm text-gray-700">
                      {magazine.description}
                    </p>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4"
                      >
                        <Button className="w-full" variant="outline">
                          <Download className="mr-2 h-4 w-4" /> Download PDF
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30"
            onClick={prevMagazine}
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30"
            onClick={nextMagazine}
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}
