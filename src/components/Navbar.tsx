import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const navItems = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "news", label: "News", href: "/#news" },
  { id: "awards", label: "Awards", href: "/#awards" },
  { id: "highboard", label: "Team", href: "/#highboard" },
  { id: "events", label: "Events", href: "/#events" },
  { id: "magazines", label: "Publications", href: "/#magazines" },
  { id: "partners", label: "Partners", href: "/partners" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Handle anchor links
    if (href.includes("#")) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050B1A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick("/#home")}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <img
              src="/brand/spe-logo-light.png"
              alt="SPE Suez"
              className="h-11 w-11 rounded-full object-cover border-2 border-white/20 group-hover:border-[#00C29A]/50 transition-colors duration-300"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold text-white text-sm leading-tight">
              SPE Suez Student Chapter
            </p>
            <p className="text-xs text-gray-400">Suez University</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://rec.spesuez.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="hidden md:flex bg-[#0D4C92] hover:bg-[#005CB9] text-white font-medium px-5 py-2 rounded-lg transition-all duration-200"
            >
              Join Chapter
            </Button>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-80 max-w-[85vw] bg-[#050B1A] border-l border-white/10 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src="/brand/spe-logo-light.png"
                      alt="SPE Suez"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-white text-sm">SPE Suez</p>
                      <p className="text-xs text-gray-400">Student Chapter</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 text-[#00C29A]" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-white/10">
                  <a
                    href="https://rec.spesuez.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#0D4C92] hover:bg-[#005CB9] text-white font-medium py-3 rounded-lg">
                      Join the Chapter
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
