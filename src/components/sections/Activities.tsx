"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar, Users, MapPin, Clock, X, ChevronDown, ChevronUp } from 'lucide-react';
import eventsData from "@/data/events";

// Get only non-flagship events (activities)
const activityEvents = eventsData.filter(e => e.type !== "flagship");

export default function ActivitiesSection() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [modalEventName, setModalEventName] = useState("");

  const getEventTypeBadge = (type: string) => {
    const badges: Record<string, { label: string; color: string }> = {
      technical: { label: "Technical", color: "bg-[#0D4C92]" },
      competition: { label: "Competition", color: "bg-[#FFC857] text-[#0F172A]" },
      career: { label: "Career Development", color: "bg-purple-500" },
    };
    return badges[type] || { label: "Event", color: "bg-gray-500" };
  };

  const getStatusBadge = (status: string) => {
    if (status === "upcoming") {
      return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">Upcoming</span>;
    }
    return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/60">Completed</span>;
  };

  const openModal = (imageSrc: string, eventName: string) => {
    setSelectedImage(imageSrc);
    setModalEventName(eventName);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const toggleExpand = (eventName: string) => {
    setExpandedEvent(expandedEvent === eventName ? null : eventName);
  };

  return (
    <section
      id="activities"
      className="py-20 lg:py-28 bg-[#050B1A] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Activities Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#00C29A]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
            Activities & Programs
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
            More Ways to Get Involved
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Beyond our flagship events, we offer technical workshops, field visits, competitions, 
            and skill-building programs throughout the year
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {activityEvents.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#0a1628] rounded-2xl border border-white/10 hover:border-[#0D4C92]/50 transition-all duration-300 overflow-hidden">
                {/* Activity Header with Image */}
                <div className="relative">
                  {event.pastImages.length > 0 ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.pastImages[0]}
                        alt={event.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <span className="text-2xl">{event.icon}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white">{event.name}</h3>
                            <p className="text-white/70 text-sm">{event.fullName}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-r ${event.color} p-5`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <span className="text-2xl">{event.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white">{event.name}</h3>
                          <p className="text-white/70 text-sm">{event.fullName}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Activity Content */}
                <div className="p-5">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getEventTypeBadge(event.type).color}`}>
                      {getEventTypeBadge(event.type).label}
                    </span>
                    {getStatusBadge(event.status)}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
                      <Clock className="mr-1 h-3 w-3" /> {event.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-white/60 text-sm leading-relaxed mb-4 ${expandedEvent === event.name ? '' : 'line-clamp-2'}`}>
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-[#050B1A] rounded-lg p-3 text-center">
                      <Calendar className="w-4 h-4 text-[#0D4C92] mx-auto mb-1" />
                      <p className="text-white/50 text-xs">Date</p>
                      <p className="text-white text-xs font-medium truncate">{event.date}</p>
                    </div>
                    <div className="bg-[#050B1A] rounded-lg p-3 text-center">
                      <MapPin className="w-4 h-4 text-[#FFC857] mx-auto mb-1" />
                      <p className="text-white/50 text-xs">Location</p>
                      <p className="text-white text-xs font-medium truncate">{event.city}</p>
                    </div>
                    <div className="bg-[#050B1A] rounded-lg p-3 text-center">
                      <Users className="w-4 h-4 text-[#00C29A] mx-auto mb-1" />
                      <p className="text-white/50 text-xs">Participants</p>
                      <p className="text-white text-xs font-medium">{event.attendees}</p>
                    </div>
                  </div>

                  {/* Gallery Preview (if images exist) */}
                  <AnimatePresence>
                    {expandedEvent === event.name && event.pastImages.length > 1 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 overflow-hidden"
                      >
                        <p className="text-white/50 text-xs mb-2">Event Gallery</p>
                        <div className="grid grid-cols-3 gap-2">
                          {event.pastImages.slice(0, 6).map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              onClick={() => openModal(image, event.name)}
                            >
                              <img
                                src={image}
                                alt={`${event.name} ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-[#0D4C92]/0 hover:bg-[#0D4C92]/30 transition-colors duration-300" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleExpand(event.name)}
                    className="w-full flex items-center justify-center gap-2 py-2 text-white/50 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {expandedEvent === event.name ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
                  src={selectedImage}
                  alt="Activity highlight"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-4 bg-[#0a1628] border-t border-white/10">
                <h4 className="text-lg font-semibold text-white">{modalEventName}</h4>
                <p className="text-white/50 text-sm">Click outside to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
