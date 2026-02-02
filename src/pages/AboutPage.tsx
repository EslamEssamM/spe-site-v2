"use client";

import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Target,
  Lightbulb,
  Users,
  Shield,
  ArrowLeft,
  ArrowRight,
  Trophy,
  Handshake,
  Globe,
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  Sparkles,
  Building,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in technical performance and global-level achievement",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing creativity, data-driven thinking, and emerging technologies",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong connections among students, professionals, and society",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding ethical standards, transparency, and accountability",
  },
  {
    icon: Trophy,
    title: "Leadership",
    description: "Cultivating responsible leaders who inspire and contribute positively",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Committed to continuous learning and career readiness",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description: "Valuing collaboration, mutual respect, and diversity",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "Encouraging international exposure and cultural exchange",
  },
];

const milestones = [
  { year: "2004", title: "Chapter Founded", description: "SPE Suez Student Chapter was established at Suez University" },
  { year: "2008", title: "Active Operations", description: "Chapter began actively organizing events and programs" },
  { year: "2010", title: "First Excellence Award", description: "Received our first Student Chapter Excellence Award" },
  { year: "2014", title: "Presidential Award", description: "First Presidential Outstanding Student Chapter Award" },
  { year: "2020", title: "MENA's Largest", description: "Became the largest SPE student chapter in MENA region" },
  { year: "2025", title: "7th Presidential Award", description: "Received our 7th Presidential Outstanding Chapter Award" },
];

const activities = [
  {
    icon: BookOpen,
    title: "Technical Education",
    description: "Hands-on workshops, software training, and industry-standard courses",
    color: "#0D4C92",
  },
  {
    icon: Sparkles,
    title: "Professional Development",
    description: "Career workshops, resume building, interview preparation, and networking",
    color: "#00C29A",
  },
  {
    icon: Building,
    title: "Industry Exposure",
    description: "Field visits, internship opportunities, and industry mentorship programs",
    color: "#FFC857",
  },
  {
    icon: Heart,
    title: "Community Engagement",
    description: "Outreach programs, volunteer initiatives, and social impact projects",
    color: "#E91E63",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050B1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0D4C92]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00C29A]/10 rounded-full blur-3xl" />
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
              About Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 font-[Poppins]">
              SPE Suez University
              <span className="block text-[#00C29A]">Student Chapter</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              The largest SPE student chapter in the MENA region, dedicated to empowering students 
              and fresh graduates through technical education, professional development, 
              leadership training, and community engagement since 2004.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a1628]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "2004", label: "Founded", icon: Calendar },
              { value: "17+", label: "SPE Awards", icon: Award },
              { value: "200+", label: "Active Members", icon: Users },
              { value: "5+", label: "Industry Partners", icon: Handshake },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#050B1A] rounded-2xl p-6 border border-white/10 text-center"
              >
                <stat.icon className="w-8 h-8 text-[#00C29A] mx-auto mb-4" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-[#050B1A]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0D4C92]/20 to-[#0D4C92]/5 rounded-3xl p-8 lg:p-10 border border-[#0D4C92]/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0D4C92] flex items-center justify-center mb-8">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 font-[Poppins]">Our Mission</h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                To develop competent, innovative, and industry-ready engineers by providing high-quality 
                technical training, hands-on experience, global exposure, and strong industry connections.
              </p>
              <p className="text-white/60 leading-relaxed">
                SPE Suez aims to bridge the gap between academia and industry while fostering leadership, 
                teamwork, ethical responsibility, and lifelong learning among petroleum engineering students.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#00C29A]/20 to-[#00C29A]/5 rounded-3xl p-8 lg:p-10 border border-[#00C29A]/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00C29A] flex items-center justify-center mb-8">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 font-[Poppins]">Our Vision</h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                To be a globally leading and influential student chapter, recognized for excellence in 
                technical dissemination, professional development, research impact, and community contribution.
              </p>
              <p className="text-white/60 leading-relaxed">
                We aspire to shape future leaders capable of driving innovation and sustainability 
                in the energy sector while maintaining the highest standards of professional excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-[#0a1628]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
              Our Focus Areas
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              We provide comprehensive programs across four key pillars to ensure holistic development of our members
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#050B1A] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ backgroundColor: `${activity.color}20` }}
                >
                  <activity.icon className="h-7 w-7" style={{ color: activity.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{activity.title}</h3>
                <p className="text-white/50 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
              Chapter Milestones
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Two decades of excellence, growth, and impact in the petroleum engineering community
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0D4C92] via-[#00C29A] to-[#FFC857]" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-[#00C29A] rounded-full transform -translate-x-1/2 border-4 border-[#050B1A] z-10" />

                {/* Content */}
                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-[#0a1628] rounded-2xl p-6 border border-white/10">
                    <span className="text-[#00C29A] font-bold text-2xl">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-2">{milestone.title}</h3>
                    <p className="text-white/50">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-[#0a1628]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
              Our Principles
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
              Core Values
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              The guiding principles that shape our culture and drive our mission forward
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#050B1A] rounded-xl p-6 text-center border border-white/10 hover:border-[#0D4C92]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D4C92]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0D4C92] transition-colors duration-300">
                  <value.icon className="h-6 w-6 text-[#00C29A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-white/50">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#050B1A]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#0D4C92] to-[#0D4C92]/80 rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Become part of the largest SPE student chapter in the MENA region and unlock opportunities for growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://rec.spesuez.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#0D4C92] hover:bg-white/90 font-semibold px-8 py-3 text-lg">
                  Join Chapter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to="/events">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-lg">
                  Explore Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
