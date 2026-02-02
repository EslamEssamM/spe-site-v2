"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  Clock,
  X,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Filter,
  Star,
} from "lucide-react";
import eventsData from "@/data/events";

// Separate events by type
const flagshipEvents = eventsData.filter((e) => e.type === "flagship");
const activityEvents = eventsData.filter((e) => e.type !== "flagship");

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(flagshipEvents[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showAllImages, setShowAllImages] = useState(false);
  const [eventFilter, setEventFilter] = useState<"all" | "flagship" | "activity">("all");
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const getEventTypeBadge = (type: string) => {
    const badges: Record<string, { label: string; color: string }> = {
      flagship: { label: "Flagship Event", color: "bg-[#00C29A]" },
      technical: { label: "Technical", color: "bg-[#0D4C92]" },
      competition: { label: "Competition", color: "bg-[#FFC857] text-[#0F172A]" },
      career: { label: "Career Development", color: "bg-purple-500" },
    };
    return badges[type] || { label: "Event", color: "bg-gray-500" };
  };

  const getStatusBadge = (status: string) => {
    if (status === "upcoming") {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
          Upcoming
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/60">
        Completed
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#050B1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0D4C92]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#00C29A]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-6">
              <Sparkles className="inline-block w-4 h-4 mr-1" />
              Events & Activities
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 font-[Poppins]">
              Our Events
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              From flagship conferences to technical workshops, we offer diverse experiences 
              for professional growth and networking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0a1628]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: flagshipEvents.length, label: "Flagship Events", icon: Star },
              { value: activityEvents.length, label: "Activities", icon: Calendar },
              { value: "1000+", label: "Total Attendees", icon: Users },
              { value: "3", label: "Cities", icon: MapPin },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#050B1A] rounded-2xl p-6 border border-white/10 text-center"
              >
                <stat.icon className="w-8 h-8 text-[#00C29A] mx-auto mb-3" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[#050B1A] sticky top-20 z-30 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 justify-center">
            <Filter className="w-5 h-5 text-white/40" />
            {[
              { value: "all", label: "All Events" },
              { value: "flagship", label: "Flagship Events" },
              { value: "activity", label: "Activities" },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setEventFilter(filter.value as typeof eventFilter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  eventFilter === filter.value
                    ? "bg-[#0D4C92] text-white"
                    : "bg-[#0a1628] text-white/60 hover:text-white border border-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Events */}
      {(eventFilter === "all" || eventFilter === "flagship") && (
        <section className="py-20 lg:py-28 bg-[#0a1628]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-[#00C29A]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
                <Star className="inline-block w-4 h-4 mr-1" />
                Signature Events
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
                Flagship Events
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Our flagship events bring together hundreds of students, industry experts, and professionals
              </p>
            </motion.div>

            {/* Flagship Events Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Event Navigation */}
              <div className="space-y-3">
                {flagshipEvents.map((event, index) => (
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
                      onClick={() => {
                        setActiveEvent(event);
                        setShowAllImages(false);
                      }}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            activeEvent.name === event.name ? "bg-white/20" : "bg-[#0D4C92]/20"
                          } mr-4`}
                        >
                          {event.logo ? (
                            <img
                              src={event.logo}
                              alt={`${event.name} logo`}
                              className="w-7 h-7 object-contain"
                            />
                          ) : (
                            <span className="text-2xl">{event.icon}</span>
                          )}
                        </div>
                        <div className="flex-grow">
                          <span className="font-semibold block">{event.name}</span>
                          <span className="text-xs text-white/50">
                            {event.city} • {event.attendees} attendees
                          </span>
                        </div>
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
                          {activeEvent.logo ? (
                            <img
                              src={activeEvent.logo}
                              alt={`${activeEvent.name} logo`}
                              className="w-10 h-10 object-contain"
                            />
                          ) : (
                            <span className="text-3xl">{activeEvent.icon}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                            {activeEvent.fullName}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00C29A] text-white">
                              Flagship Event
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                              <Clock className="mr-1 h-3 w-3" /> {activeEvent.duration}
                            </span>
                            {getStatusBadge(activeEvent.status)}
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
                            <p className="text-white font-semibold text-sm">{activeEvent.attendees}</p>
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

                      {/* Event Highlights */}
                      {activeEvent.pastImages.length > 0 && (
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-semibold text-white font-[Poppins]">
                              Event Highlights
                            </h4>
                            <span className="text-white/50 text-sm">
                              {activeEvent.pastImages.length} photos
                            </span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                            {(showAllImages
                              ? activeEvent.pastImages
                              : activeEvent.pastImages.slice(0, 6)
                            ).map((image, index) => (
                              <motion.div
                                key={index}
                                className="relative group overflow-hidden rounded-xl aspect-video bg-[#0a1628] cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => openModal(image)}
                              >
                                <img
                                  src={image}
                                  alt={`${activeEvent.name} event ${index + 1}`}
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

                          {/* Show More/Less Button */}
                          {activeEvent.pastImages.length > 6 && (
                            <button
                              onClick={() => setShowAllImages(!showAllImages)}
                              className="w-full flex items-center justify-center gap-2 py-3 text-white/50 hover:text-white transition-colors duration-200 text-sm border border-white/10 rounded-lg hover:bg-white/5"
                            >
                              {showAllImages ? (
                                <>
                                  Show Less <ChevronUp className="w-4 h-4" />
                                </>
                              ) : (
                                <>
                                  Show {activeEvent.pastImages.length - 6} More Photos{" "}
                                  <ChevronDown className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Activities Section */}
      {(eventFilter === "all" || eventFilter === "activity") && (
        <section className="py-20 lg:py-28 bg-[#050B1A]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-[#FFC857]/20 text-[#FFC857] text-sm font-semibold rounded-full mb-4">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activityEvents.map((event, index) => {
                const badge = getEventTypeBadge(event.type);
                return (
                  <motion.div
                    key={event.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-[#0a1628] rounded-2xl border border-white/10 hover:border-[#0D4C92]/50 transition-all duration-300 overflow-hidden h-full">
                      {/* Image */}
                      {event.pastImages.length > 0 && (
                        <div
                          className="relative h-48 overflow-hidden cursor-pointer"
                          onClick={() => openModal(event.pastImages[0])}
                        >
                          <img
                            src={event.pastImages[0]}
                            alt={event.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                          <div className="absolute top-4 left-4 flex gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}>
                              {badge.label}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{event.fullName}</h3>
                            <div className="flex items-center gap-2 text-white/50 text-sm">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </div>
                          </div>
                          {getStatusBadge(event.status)}
                        </div>

                        <p
                          className={`text-white/60 text-sm leading-relaxed mb-4 ${
                            expandedActivity === event.name ? "" : "line-clamp-3"
                          }`}
                        >
                          {event.description}
                        </p>

                        <button
                          onClick={() =>
                            setExpandedActivity(
                              expandedActivity === event.name ? null : event.name
                            )
                          }
                          className="text-[#00C29A] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          {expandedActivity === event.name ? "Show Less" : "Read More"}
                          {expandedActivity === event.name ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>

                        {/* Event Details */}
                        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 text-white/50 text-sm">
                            <Users className="w-4 h-4" />
                            {event.attendees}
                          </div>
                          <div className="flex items-center gap-2 text-white/50 text-sm">
                            <Clock className="w-4 h-4" />
                            {event.duration}
                          </div>
                          <div className="flex items-center gap-2 text-white/50 text-sm">
                            <MapPin className="w-4 h-4" />
                            {event.city}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
              className="relative max-w-5xl w-full bg-[#0a1628] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
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
                  alt="Event highlight"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-4 bg-[#0a1628] border-t border-white/10">
                <p className="text-white/50 text-sm text-center">Click outside to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
