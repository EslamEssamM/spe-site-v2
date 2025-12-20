"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Calendar, Users, MapPin, Clock, X } from 'lucide-react';
import eventsData from "@/data/events";

export default function EnhancedEventsSection() {
  const [activeEvent, setActiveEvent] = useState(eventsData[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const eventSectionRef = useRef<HTMLDivElement>(null);

  // Auto-rotate through events only if not paused and user hasn't interacted
  useEffect(() => {
    if (autoplayPaused || userInteracted) return;

    const interval = setInterval(() => {
      const currentIndex = eventsData.findIndex(e => e.name === activeEvent.name);
      const nextIndex = (currentIndex + 1) % eventsData.length;
      setActiveEvent(eventsData[nextIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeEvent, autoplayPaused, userInteracted]);

  // Handle event selection
  const handleEventSelect = (event: typeof eventsData[0]) => {
    setActiveEvent(event);
    setUserInteracted(true);

    if (window.innerWidth < 768 && eventSectionRef.current) {
      const sectionRect = eventSectionRef.current.getBoundingClientRect();
      const isInView = (
        sectionRect.top >= 0 &&
        sectionRect.bottom <= window.innerHeight
      );

      if (!isInView) {
        eventSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    }
  };

  const handleMouseEnter = () => setAutoplayPaused(true);
  const handleMouseLeave = () => {
    if (!userInteracted) {
      setAutoplayPaused(false);
    }
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          setUserInteracted(false);
          setAutoplayPaused(false);
        }
      },
      { threshold: 0.1 }
    );

    if (eventSectionRef.current) {
      observer.observe(eventSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="events"
      className="py-20 lg:py-28 bg-[#0a1628] relative overflow-hidden"
      ref={eventSectionRef}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
            Events
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
            Our Flagship Events
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Discover our signature events that bring together industry experts, students, and professionals
          </p>
        </motion.div>

        {/* Events Content */}
        <div className="grid lg:grid-cols-3 gap-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Events Navigation */}
          <div className="space-y-3">
            {eventsData.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeEvent.name === event.name
                      ? "bg-[#0D4C92] text-white shadow-lg shadow-[#0D4C92]/20"
                      : "bg-[#050B1A] text-white hover:bg-[#050B1A]/80 border border-white/10"
                  }`}
                  onClick={() => handleEventSelect(event)}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeEvent.name === event.name
                        ? "bg-white/20"
                        : "bg-[#0D4C92]/20"
                    } mr-4`}>
                      <img
                        src={event.logo || "/placeholder.svg?height=24&width=24"}
                        alt={`${event.name} logo`}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <span className="flex-grow font-semibold">{event.name}</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeEvent.name === event.name ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Event Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#050B1A] rounded-2xl border border-white/10 overflow-hidden"
              >
                {/* Event Header */}
                <div className="bg-[#0D4C92] p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <img
                        src={activeEvent.logo || "/placeholder.svg?height=64&width=64"}
                        alt={`${activeEvent.name} logo`}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{activeEvent.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00C29A] text-white">
                          Flagship Event
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                          <Clock className="mr-1 h-3 w-3" /> {activeEvent.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed">{activeEvent.description}</p>
                </div>

                {/* Event Details Grid */}
                <div className="p-6 lg:p-8">
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-[#0a1628] rounded-xl p-4 flex items-center">
                      <div className="w-10 h-10 bg-[#0D4C92]/20 rounded-lg flex items-center justify-center mr-3">
                        <Calendar className="h-5 w-5 text-[#0D4C92]" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs">Date</p>
                        <p className="text-white font-semibold text-sm">{activeEvent.date}</p>
                      </div>
                    </div>

                    <div className="bg-[#0a1628] rounded-xl p-4 flex items-center">
                      <div className="w-10 h-10 bg-[#00C29A]/20 rounded-lg flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-[#00C29A]" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs">Attendees</p>
                        <p className="text-white font-semibold text-sm">{activeEvent.attendees}+</p>
                      </div>
                    </div>

                    <div className="bg-[#0a1628] rounded-xl p-4 flex items-center">
                      <div className="w-10 h-10 bg-[#FFC857]/20 rounded-lg flex items-center justify-center mr-3">
                        <MapPin className="h-5 w-5 text-[#FFC857]" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs">Location</p>
                        <p className="text-white font-semibold text-sm">{activeEvent.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Past Event Highlights */}
                  {activeEvent.pastImages.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 font-[Poppins]">
                        Past Event Highlights
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {activeEvent.pastImages.map((image, index) => (
                          <motion.div
                            key={index}
                            className="relative group overflow-hidden rounded-xl aspect-video bg-[#0a1628] cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => openModal(image)}
                          >
                            <img
                              src={image || "/placeholder.svg?height=180&width=320"}
                              alt={`${activeEvent.name} past event ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#0D4C92]/0 group-hover:bg-[#0D4C92]/30 transition-colors duration-300 flex items-center justify-center">
                              <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                View
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B1A]/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#0a1628] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-[#050B1A]/50 hover:bg-[#050B1A]/70 text-white rounded-full w-10 h-10 p-0"
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="aspect-video bg-[#050B1A] flex items-center justify-center">
                <img
                  src={selectedImage || "/placeholder.svg?height=720&width=1280"}
                  alt="Event highlight"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-4 bg-[#0a1628] border-t border-white/10">
                <h4 className="text-lg font-semibold text-white">{activeEvent.name}</h4>
                <p className="text-white/50 text-sm">Click outside to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}