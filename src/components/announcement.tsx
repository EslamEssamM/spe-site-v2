"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { X, ExternalLink, ChevronRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const magazineData = {
  id: 24,
  title: "Echo - Issue 18",
  year: 2026,
  cover: "/pdfs/Echo/covers/ECHO18.webp",
  pdfUrl: "/pdfs/Echo/ECHO18.pdf",
  description:
    "Brings together Exclusive Leader Insights, offering a rare look into the perspectives of top executives, global directors, and ministry leaders shaping the energy sector, alongside Success and Inspiration, which captures real stories of perseverance, innovation, and achievement. It is further enriched by Tech & Innovation Highlights, featuring five in-depth articles on AI, autonomous drilling, and engineering breakthroughs driving the future of energy.",
  editor: "SPE Team",
  pageCount: 44,
};

export function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenAnnouncement = localStorage.getItem("hasSeenEcho18Announcement");
    if (!hasSeenAnnouncement) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenEcho18Announcement", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="w-[95vw] max-w-[800px] max-h-[90vh] p-0 overflow-hidden bg-[#0F1629] border border-gray-800 rounded-2xl text-white">
            <div className="relative w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <Button
                variant="ghost"
                className="absolute z-30 right-2 top-2 sm:right-3 sm:top-3 rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                onClick={handleClose}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>

              {/* Content - Stack on mobile, grid on desktop */}
              <div className="flex flex-col md:grid md:grid-cols-2 md:gap-0">
                {/* Cover Image */}
                <div className="relative h-48 sm:h-56 md:h-[500px] bg-gradient-to-br from-[#0D4C92]/20 to-[#00C29A]/10 flex-shrink-0">
                  <img
                    src={magazineData.cover}
                    alt={magazineData.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1629] via-[#0F1629]/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0F1629]" />

                  {/* New Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#00C29A] text-[#050B1A] text-xs font-bold rounded-full shadow-lg"
                  >
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    NEW RELEASE
                  </motion.div>
                </div>

                {/* Info Section */}
                <DialogHeader className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <DialogDescription className="text-base">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {/* Tags */}
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <span className="px-2.5 py-1 sm:px-3 bg-[#0D4C92]/20 text-[#0D4C92] text-xs font-medium rounded-full">
                          {magazineData.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
                        {magazineData.title}
                      </h3>

                      {/* Features List - Hidden on very small screens */}
                      <ul className="mb-4 sm:mb-6 space-y-2 sm:space-y-3 hidden xs:block">
                        {[
                          `${magazineData.pageCount} pages of insightful content`,
                          "Exclusive leader insights from top executives",
                          "Success and inspiration from real stories",
                          "Tech and innovation highlights across 5 deep-dive articles",
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.3 + index * 0.1,
                              duration: 0.5,
                            }}
                          >
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#00C29A] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-300">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Editor */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                        <BookOpen className="w-4 h-4" />
                        <span>Edited by {magazineData.editor}</span>
                      </div>

                      {/* Actions */}
                      <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 p-0">
                        <Button
                          variant="outline"
                          onClick={handleClose}
                          className="border-gray-700 hover:border-gray-600 text-white rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-sm"
                        >
                          Remind me later
                        </Button>
                        <Link
                          // @ts-ignore
                          to={`/magazine/${magazineData.id}`}
                          onClick={handleClose}
                          
                          className="inline-flex items-center justify-center gap-2 bg-[#0D4C92] hover:bg-[#005CB9] text-white font-semibold transition-colors px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm"
                        >
                          <BookOpen className="w-4 h-4" />
                          Read Now
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </DialogFooter>
                    </motion.div>
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
