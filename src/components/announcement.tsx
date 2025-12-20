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

const magazineData = {
  id: 23,
  title: "Criterion - Issue 6",
  year: 2025,
  issue: "Issue 6",
  cover: "/pdfs/Criterion/covers/Criterion6.jpeg",
  pdfUrl: "/pdfs/Criterion/Criterion6.pdf",
  description:
    "A leadership and career growth special issue exploring career development, leadership, energy innovations like geothermal expansion, AI-driven business strategies, and professional interviews for the next generation of energy and business professionals.",
  editor: "SPE Team",
  pageCount: 38,
};

export function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenAnnouncement = localStorage.getItem("hasSeenCriterion6Announcement");
    if (!hasSeenAnnouncement) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenCriterion6Announcement", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[90vw] md:max-w-[800px] p-0 overflow-hidden bg-[#0F1629] border border-gray-800 rounded-2xl text-white">
            <div className="relative w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                className="absolute z-30 right-3 top-3 rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                onClick={handleClose}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-0">
                {/* Cover Image */}
                <div className="relative h-64 md:h-[500px] bg-gradient-to-br from-[#0D4C92]/20 to-[#00C29A]/10">
                  <img
                    src={magazineData.cover}
                    alt={magazineData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1629] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0F1629]" />
                  
                  {/* New Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-[#00C29A] text-[#050B1A] text-xs font-bold rounded-full shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    NEW RELEASE
                  </motion.div>
                </div>

                {/* Info Section */}
                <DialogHeader className="p-6 md:p-8 flex flex-col justify-center">
                  <DialogDescription className="text-base">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {/* Tags */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-[#0D4C92]/20 text-[#0D4C92] text-xs font-medium rounded-full">
                          {magazineData.year}
                        </span>
                        <span className="px-3 py-1 bg-[#00C29A]/20 text-[#00C29A] text-xs font-medium rounded-full">
                          {magazineData.issue}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        {magazineData.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-6 text-gray-400 leading-relaxed">
                        {magazineData.description}
                      </p>

                      {/* Features List */}
                      <ul className="mb-6 space-y-3">
                        {[
                          `${magazineData.pageCount} pages of insightful content`,
                          "Career development and leadership insights",
                          "Energy innovations including geothermal expansion",
                          "AI-driven business strategies",
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
                            <ChevronRight className="h-5 w-5 text-[#00C29A] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-300">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Editor */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <BookOpen className="w-4 h-4" />
                        <span>Edited by {magazineData.editor}</span>
                      </div>

                      {/* Actions */}
                      <DialogFooter className="flex flex-col sm:flex-row gap-3 p-0">
                        <Button
                          variant="outline"
                          onClick={handleClose}
                          className="border-gray-700 hover:border-gray-600 text-white rounded-xl px-6 py-3"
                        >
                          Remind me later
                        </Button>
                        <a
                          href={magazineData.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleClose}
                          className="inline-flex items-center justify-center gap-2 bg-[#0D4C92] hover:bg-[#005CB9] text-white font-semibold transition-colors px-6 py-3 rounded-xl"
                        >
                          <BookOpen className="w-4 h-4" />
                          Read Now
                          <ExternalLink className="w-4 h-4" />
                        </a>
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
