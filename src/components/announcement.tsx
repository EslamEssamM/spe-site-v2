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
import { X, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const magazineData = {
  id: 22,
  title: "Echo - Issue 17",
  year: 2025,
  issue: "Issue 17",
  cover: "/pdfs/Echo/covers/ECHO17.webp",
  description:
    "Explores the role of leadership and volunteering in the energy sector, featuring interviews with industry leaders and insights into digital optimization solutions.",
  editor: "SPE Team",
  pageCount: 23,
};

export function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenAnnouncement = localStorage.getItem("hasSeenEchoAnnouncement");
    if (!hasSeenAnnouncement) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenEchoAnnouncement", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[90vw] md:max-w-[700px] p-0 overflow-hidden bg-transparent text-white">
            <div className="relative w-full h-[90vh] sm:h-[600px]">
              <img
                src={magazineData.cover}
                alt={magazineData.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                <DialogHeader className="p-4 sm:p-6 pb-0 relative z-10">
                  <Button
                    variant="ghost"
                    className="absolute z-20 right-2 top-2 sm:right-4 sm:top-4 rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={handleClose}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </DialogHeader>
                <DialogDescription className="text-base p-4 sm:p-6 pt-4 relative z-10 overflow-y-auto max-h-[calc(90vh-120px)] sm:max-h-[480px]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-xl sm:text-2xl mt-16 sm:mt-28 font-semibold mb-4 text-purple-300 drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]">
                      New Release: {magazineData.title}
                    </h3>
                    <p className="mb-4 sm:mb-6 text-base sm:text-lg text-white/90">
                      {magazineData.description}
                    </p>
                    <ul className="mb-4 sm:mb-6 space-y-2 sm:space-y-4">
                      {[
                        `${magazineData.pageCount} pages of insightful content`,
                        "Exclusive interviews with industry leaders",
                        "Latest technological trends and innovations",
                        "Student success stories and achievements",
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
                          <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-white/85">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    <p className="font-semibold text-lg sm:text-xl text-purple-300 drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]">
                      Edited by {magazineData.editor}
                    </p>
                  </motion.div>
                </DialogDescription>
                <DialogFooter className="flex justify-end space-x-2 p-4 sm:p-6 bg-black/80 backdrop-blur-sm absolute bottom-0 left-0 right-0">
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    className=""
                  >
                    Remind me later
                  </Button>
                  <Link
                    to={`/magazine/${magazineData.id}`}
                    onClick={handleClose}
                    className="bg-purple-600 hover:bg-purple-700 text-white transition-colors text-xs sm:text-sm px-4 py-2 rounded-md inline-flex items-center"
                  >
                    Read Now{" "}
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  </Link>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
