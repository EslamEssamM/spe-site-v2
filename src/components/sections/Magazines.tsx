import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { topMagazines as magazines } from "@/data/magazines";

export default function PerfectedMagazinesSectionWithParticles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const nextMagazine = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % magazines.length);
  };

  const prevMagazine = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + magazines.length) % magazines.length
    );
  };

  return (
    <section id="magazines" className="py-20 lg:py-28 bg-[#050B1A] overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
            Publications
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Magazines
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Explore our collection of student-produced magazines featuring technical articles, industry insights, and chapter news
          </p>
        </motion.div>

        {/* Magazine Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="min-h-[500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0F1629] rounded-3xl overflow-hidden border border-gray-800"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Cover Image */}
                  <div className="relative bg-gradient-to-br from-[#0D4C92]/20 to-[#00C29A]/10 p-8 lg:p-12 flex items-center justify-center">
                    <motion.img
                      src={magazines[currentIndex].cover}
                      alt={magazines[currentIndex].title}
                      className="w-full max-w-[280px] rounded-xl shadow-2xl"
                      whileHover={{ scale: 1.03, rotate: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#0D4C92]/20 text-[#0D4C92] text-sm font-medium rounded-full">
                        {magazines[currentIndex].year}
                      </span>
                      <span className="px-3 py-1 bg-[#00C29A]/20 text-[#00C29A] text-sm font-medium rounded-full">
                        {magazines[currentIndex].issue}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {magazines[currentIndex].title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {magazines[currentIndex].description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <BookOpen className="w-4 h-4" />
                        <span>{magazines[currentIndex].pageCount} pages</span>
                      </div>
                      <div className="text-gray-500 text-sm">
                        Editor: {magazines[currentIndex].editor}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={`/magazine/${magazines[currentIndex].id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D4C92] hover:bg-[#0D4C92]/80 text-white rounded-xl font-semibold transition-colors duration-200"
                      >
                        <BookOpen className="w-4 h-4" />
                        Read Online
                      </Link>
                      <a
                        href={magazines[currentIndex].pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-gray-600 text-white rounded-xl font-semibold transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevMagazine}
              className="w-10 h-10 rounded-full bg-[#0F1629] border border-gray-800 text-white hover:bg-[#0D4C92] hover:border-[#0D4C92] flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {magazines.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#0D4C92] w-8"
                      : "bg-gray-700 hover:bg-gray-600 w-2.5"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextMagazine}
              className="w-10 h-10 rounded-full bg-[#0F1629] border border-gray-800 text-white hover:bg-[#0D4C92] hover:border-[#0D4C92] flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/magazines"
            className="inline-flex items-center gap-2 text-[#00C29A] font-semibold hover:gap-3 transition-all duration-200"
          >
            Explore Magazine Archive
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
