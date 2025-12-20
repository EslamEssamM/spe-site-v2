import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Disable parallax effects on mobile for better scroll behavior
  const imageY = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 400], isMobile ? [1, 1] : [1, 0]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#050B1A] overflow-hidden">
      {/* Background */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute inset-0 lg:h-[110vh]"
      >
        <div className="absolute inset-0 h-full">
          <img
            src="/hero.webp"
            alt="SPE Suez Chapter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B1A]/60 via-[#050B1A]/70 to-[#050B1A]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/80 via-transparent to-[#050B1A]/60" />
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ opacity: contentOpacity }} 
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7">
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-8"
              >
                <div className="h-px w-8 bg-white" />
                <span className="text-white text-sm font-medium uppercase tracking-wider">
                  Est. 2004 • Chapter #5948
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1]"
              >
                Building
                <br />
                <span className="relative inline-block">
                  Tomorrow's
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-2 left-0 h-3 bg-[#0D4C92] -z-10"
                  />
                </span>
                <br />
                Energy Leaders
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg sm:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed"
              >
                The largest SPE student chapter in the MENA region, empowering petroleum 
                engineering students through world-class training, industry connections, 
                and hands-on experience.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="https://rec.spesuez.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join SPE Suez Student Chapter"
                  className="group px-8 py-4 bg-[#0D4C92] text-white font-semibold rounded-xl hover:bg-[#005CB9] transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  Join Our Chapter
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => scrollToSection("events")}
                  aria-label="View our events"
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  View Events
                </button>
              </motion.div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {[
                { icon: Users, number: "200+", label: "Active Members", description: "Passionate students" },
                { icon: Award, number: "17", label: "International Awards", description: "Since 2010" },
                { icon: Sparkles, number: "10+", label: "Annual Events", description: "Technical & professional" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-white/[0.05] backdrop-blur-sm border border-white/20 p-6 hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300">
                    {/* Left accent line */}
                    <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#0D4C92] group-hover:h-full transition-all duration-500" />
                    
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-4xl lg:text-5xl font-bold text-white mb-1">
                          {stat.number}
                        </p>
                        <p className="text-white font-semibold mb-1">
                          {stat.label}
                        </p>
                        <p className="text-white/60 text-sm">
                          {stat.description}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-[#0D4C92] flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3"
          >
            <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[2px] h-12 bg-gradient-to-b from-white/40 to-transparent"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050B1A] to-transparent pointer-events-none z-20" />
    </section>
  );
}
