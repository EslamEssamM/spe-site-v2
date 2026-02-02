"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  Trophy,
  Award,
  Medal,
  Star,
  Calendar,
  Globe,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const awards = [
  {
    title: "Presidential Award for Outstanding Student Chapter",
    years: [2014, 2015, 2017, 2019, 2020, 2022, 2025],
    description:
      "The Presidential Outstanding Student Chapter Award is a global-level recognition presented to the top 10 percent of student chapters worldwide in each award category and size range. Chapters considered for this award have demonstrated exemplary efforts in technical initiatives, professional development, leadership, and community involvement, exceeding regional expectations.",
    icon: Trophy,
    accentColor: "#FFC857",
    certificateImage: "/awards/Outstanding.jpg",
    awardedBy: "SPE International",
    criteria: [
      "Technical dissemination and knowledge sharing",
      "Professional development programs",
      "Leadership and governance",
      "Community and social responsibility",
      "Membership engagement and growth",
    ],
  },
  {
    title: "Student Chapter Excellence Award",
    years: [2010, 2011, 2012, 2013, 2016, 2021],
    description:
      "The Student Chapter Excellence Award recognizes chapters that achieve a high level of activity and impact across key areas such as professional development, technical initiatives, industry engagement, and community involvement. It honors chapters that go beyond basic expectations, demonstrating consistent effort and success in serving their members and advancing SPE's mission globally.",
    icon: Award,
    accentColor: "#00C29A",
    certificateImage: "/awards/Excellence.png",
    awardedBy: "SPE International",
    criteria: [
      "Consistent event organization",
      "Member development initiatives",
      "Industry partnerships",
      "Community service projects",
      "Active SPE collaboration",
    ],
  },
  {
    title: "Regional Outstanding Student Chapter Award",
    years: [2025],
    description:
      "The Regional Outstanding Student Chapter Award recognizes student chapters that demonstrate exceptional service and leadership within their super region. This award honors chapters that excel in technical dissemination, professional development, community engagement, and member recognition, reflecting their commitment to advancing SPE's mission at a regional level.",
    icon: Medal,
    accentColor: "#0D4C92",
    certificateImage: "/awards/Regional.jpg",
    awardedBy: "SPE International",
    criteria: [
      "Regional leadership",
      "Cross-chapter collaboration",
      "Regional event hosting",
      "Mentorship programs",
      "Regional representation",
    ],
  },
];

const totalAwards = awards.reduce((sum, award) => sum + award.years.length, 0);

export default function AwardsPage() {
  const [currentAward, setCurrentAward] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);

  const nextAward = () => {
    setCurrentAward((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setCurrentAward((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const CurrentIcon = awards[currentAward].icon;

  return (
    <div className="min-h-screen bg-[#050B1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#FFC857]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0D4C92]/20 rounded-full blur-3xl" />
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
            <span className="inline-block px-4 py-1.5 bg-[#FFC857]/20 text-[#FFC857] text-sm font-semibold rounded-full mb-6">
              <Trophy className="inline-block w-4 h-4 mr-1" />
              Recognition
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 font-[Poppins]">
              Our Achievements
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Celebrating years of excellence and recognition as one of the most decorated SPE student chapters globally
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-[#0a1628]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: totalAwards, label: "Total Awards", icon: Trophy, color: "#FFC857" },
              { value: awards[0].years.length, label: "Presidential Awards", icon: Star, color: "#FFC857" },
              { value: awards[1].years.length, label: "Excellence Awards", icon: Award, color: "#00C29A" },
              { value: "15+", label: "Years Awarded", icon: Calendar, color: "#0D4C92" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#050B1A] rounded-2xl p-6 border border-white/10 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: stat.color }} />
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Awards Showcase */}
      <section className="py-20 lg:py-28 bg-[#050B1A]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
              Award Categories
            </h2>
            <p className="text-lg text-white/60">
              Explore our prestigious awards from SPE International
            </p>
          </motion.div>

          {/* Award Showcase */}
          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAward}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0a1628] rounded-3xl border border-white/10 overflow-hidden"
              >
                <div className="lg:flex">
                  {/* Award Info */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-8">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${awards[currentAward].accentColor}20` }}
                      >
                        <CurrentIcon
                          className="w-8 h-8"
                          style={{ color: awards[currentAward].accentColor }}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-[Poppins]">
                          {awards[currentAward].title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/50 text-sm">
                          <Globe className="w-4 h-4" />
                          Awarded by {awards[currentAward].awardedBy}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-8 text-lg">
                      {awards[currentAward].description}
                    </p>

                    {/* Criteria */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#00C29A]" />
                        Award Criteria
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {awards[currentAward].criteria.map((criterion, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-white/60 text-sm"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: awards[currentAward].accentColor }}
                            />
                            {criterion}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Years Received */}
                    <div>
                      <h4 className="text-white font-semibold mb-4">Years Received</h4>
                      <div className="flex flex-wrap gap-3">
                        {awards[currentAward].years.map((year, i) => (
                          <motion.span
                            key={year}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-4 py-2 rounded-full text-sm font-bold"
                            style={{
                              backgroundColor: `${awards[currentAward].accentColor}15`,
                              color: awards[currentAward].accentColor,
                              border: `1px solid ${awards[currentAward].accentColor}30`,
                            }}
                          >
                            {year}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Certificate Preview */}
                  <div className="lg:w-2/5 bg-[#050B1A] p-8 flex flex-col items-center justify-center">
                    <div
                      className="relative cursor-pointer group"
                      onClick={() => setShowCertificate(true)}
                    >
                      <img
                        src={awards[currentAward].certificateImage}
                        alt={`${awards[currentAward].title} certificate`}
                        className="rounded-xl shadow-2xl max-h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold flex items-center gap-2">
                          <ExternalLink className="w-5 h-5" />
                          View Certificate
                        </span>
                      </div>
                    </div>
                    <p className="text-white/40 text-sm mt-4 text-center">
                      Click to view full certificate
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevAward}
              className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 bg-[#0a1628] border-white/20 text-white hover:bg-[#0D4C92] hover:text-white hover:border-[#0D4C92]"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextAward}
              className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 bg-[#0a1628] border-white/20 text-white hover:bg-[#0D4C92] hover:text-white hover:border-[#0D4C92]"
            >
              <ChevronRight size={20} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAward(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentAward
                      ? "w-8"
                      : "w-2.5 hover:bg-white/50"
                  }`}
                  style={{
                    backgroundColor:
                      index === currentAward
                        ? awards[currentAward].accentColor
                        : "rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 bg-[#0a1628]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
              Awards Timeline
            </h2>
            <p className="text-lg text-white/60">
              Our journey of recognition over the years
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFC857] via-[#00C29A] to-[#0D4C92]" />

            {/* Timeline Items - Sorted by year */}
            {[...awards]
              .flatMap(award =>
                award.years.map(year => ({
                  year,
                  title: award.title.includes("Presidential") ? "Presidential Outstanding" :
                         award.title.includes("Excellence") ? "Excellence Award" : "Regional Outstanding",
                  color: award.accentColor,
                  icon: award.icon,
                }))
              )
              .sort((a, b) => a.year - b.year)
              .map((item, index) => (
                <motion.div
                  key={`${item.title}-${item.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex items-center mb-6 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 border-4 border-[#0a1628] z-10"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="bg-[#050B1A] rounded-xl p-4 border border-white/10 inline-flex items-center gap-3">
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                      <div>
                        <span className="text-white font-bold">{item.year}</span>
                        <span className="text-white/50 text-sm ml-2">{item.title}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B1A]/95 backdrop-blur-sm"
            onClick={() => setShowCertificate(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={awards[currentAward].certificateImage}
                alt={`${awards[currentAward].title} certificate`}
                className="w-full rounded-xl shadow-2xl"
              />
              <Button
                onClick={() => setShowCertificate(false)}
                className="absolute top-4 right-4 bg-[#050B1A]/80 hover:bg-[#050B1A] text-white"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
