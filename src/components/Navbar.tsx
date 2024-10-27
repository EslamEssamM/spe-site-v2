import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const sections = [
  { id: "home", title: "Home" },
  {
    id: "news",
    title: "News",
  },
  { id: "awards", title: "Awards" },

  { id: "highboard", title: "Highboard Team" },
  { id: "events", title: "Events" },
  { id: "magazines", title: "Magazines" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.offsetTop <= currentPosition &&
          element.offsetTop + element.offsetHeight > currentPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d4b93] to-transparent opacity-90"></div>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <Link to="/" onClick={() => handleNavClick("home")} className="group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <img
              src="/speLogo.png"
              alt="SPE Suez Chapter Logo"
              className="h-12 rounded-full border-2 border-white shadow-lg"
            />
            <motion.div
              className="absolute -inset-0.5 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              initial={false}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </Link>
        <div className="hidden md:flex space-x-1">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/#${section.id}`}
                onClick={() => handleNavClick(section.id)}
                className={`relative px-4 py-2 text-white hover:text-[#0d4b93] transition-colors duration-300 overflow-hidden group`}
              >
                <span className="relative z-10">{section.title}</span>
                <motion.div
                  className="absolute inset-0 bg-white rounded-md"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {activeSection === section.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    layoutId="activeSection"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-[#0d4b93] hover:bg-white transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 w-64 bg-[#0d4b93] shadow-lg p-4 md:hidden"
          >
            <div className="flex flex-col space-y-4 mt-16">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/#${section.id}`}
                    onClick={() => handleNavClick(section.id)}
                    className="flex items-center text-white hover:text-[#ffffff] transition-colors duration-300"
                  >
                    <ChevronRight className="mr-2" />
                    <span>{section.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
