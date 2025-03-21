"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Calendar, Users, MapPin, Clock, Award, Star, X } from 'lucide-react';
// import { loadFull } from "tsparticles";
// import type { Engine } from "tsparticles-engine";
import eventsData from "@/data/events";

// Mock data - replace with your actual data import


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

  // Handle event selection with smooth scrolling only on mobile and when clicked
  const handleEventSelect = (event: typeof eventsData[0]) => {
    setActiveEvent(event);
    setUserInteracted(true);

    // Only scroll if on mobile and the event section is not in view
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

  // Pause autoplay when hovering
  const handleMouseEnter = () => setAutoplayPaused(true);
  const handleMouseLeave = () => {
    if (!userInteracted) {
      setAutoplayPaused(false);
    }
  };

  // Image modal handlers
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Reset user interaction when leaving the section
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
      className="py-16 md:py-24 relative overflow-hidden"
      ref={eventSectionRef}
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      {/* Glow effects */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
          >
            <Award className="w-16 h-16 text-blue-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover our signature events that bring together industry experts, students, and professionals to share knowledge and build connections.
          </p>
        </motion.div>

        {/* Events Content */}
        <div className="grid md:grid-cols-3 gap-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Events Navigation */}
          <div className="space-y-4 md:pr-4">
            {eventsData.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  className={`w-full justify-start text-left h-auto py-4 px-6 rounded-xl transition-all duration-300 ${activeEvent.name === event.name
                    ? `bg-gradient-to-r ${event.color} shadow-lg border-none text-white`
                    : "bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 text-white"
                    }`}
                  onClick={() => handleEventSelect(event)}
                >
                  <div className="flex items-center w-full">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeEvent.name === event.name
                      ? "bg-white/20"
                      : "bg-white/10"
                      } mr-4`}>
                      <img
                        src={event.logo || "/placeholder.svg?height=24&width=24"}
                        alt={`${event.name} logo`}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="flex-grow font-medium">{event.name}</span>
                    <ChevronRight
                      className={`transition-transform duration-300 ${activeEvent.name === event.name ? "rotate-90" : ""
                        }`}
                    />
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Event Details */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  className="overflow-hidden border-none shadow-2xl"
                >
                  {/* <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div> */}

                  <CardContent className="p-0 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeEvent.color} opacity-90`}></div>
                    {/* Event Header */}
                    <div className="relative p-6 md:p-8 pb-0">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                          <img
                            src={activeEvent.logo || "/placeholder.svg?height=64&width=64"}
                            alt={`${activeEvent.name} logo`}
                            className="w-16 h-16"
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{activeEvent.name}</h3>
                          <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                              <Star className="mr-1 h-3 w-3" /> Flagship Event
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                              <Clock className="mr-1 h-3 w-3" /> {activeEvent.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-white/90 mb-6 leading-relaxed">{activeEvent.description}</p>

                      {/* Event Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                          <div className="bg-white/20 p-2 rounded-lg mr-3">
                            <Calendar className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white/70 text-sm">Date</p>
                            <p className="text-white font-medium">{activeEvent.date}</p>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                          <div className="bg-white/20 p-2 rounded-lg mr-3">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white/70 text-sm">Attendees</p>
                            <p className="text-white font-medium">{activeEvent.attendees}+</p>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                          <div className="bg-white/20 p-2 rounded-lg mr-3">
                            <MapPin className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white/70 text-sm">Location</p>
                            <p className="text-white font-medium">{activeEvent.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Past Event Highlights */}
                    {activeEvent.pastImages.length > 0 && (
                      <div className="relative bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-t-3xl">
                        <h4 className="text-xl font-semibold mb-4 text-white flex items-center">
                          <Award className="mr-2 h-5 w-5 text-yellow-400" />
                          Past Event Highlights
                        </h4>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                          {activeEvent.pastImages.map((image, index) => (
                            <motion.div
                              key={index}
                              className="relative group overflow-hidden rounded-xl aspect-video bg-gray-800"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => openModal(image)}
                            >
                              <img
                                src={image || "/placeholder.svg?height=180&width=320"}
                                alt={`${activeEvent.name} past event ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                <span className="text-white text-sm font-medium">View larger</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex-1"
                        >
                          <Button
                            className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-6 rounded-xl text-base"
                          >
                            Register Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex-1"
                        >
                          <Button
                            className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 font-semibold py-6 rounded-xl text-base"
                          >
                            Learn More
                            <ExternalLink className="ml-2 h-5 w-5" />
                          </Button>
                        </motion.div>
                      </div> */}
                      </div>
                    )}
                  </CardContent>
                </Card>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleModalBackdropClick}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <Button
                  onClick={closeModal}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="aspect-video bg-black flex items-center justify-center">
                <img
                  src={selectedImage || "/placeholder.svg?height=720&width=1280"}
                  alt="Event highlight"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-4 bg-gray-900">
                <h4 className="text-lg font-semibold text-white">{activeEvent.name} Event</h4>
                <p className="text-gray-400 text-sm">Click outside to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}