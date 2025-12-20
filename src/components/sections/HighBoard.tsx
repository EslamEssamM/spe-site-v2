import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Linkedin, Mail, ChevronRight } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  details: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Hossam Essam",
    position: "President",
    details: "Senior Petroleum Engineering Student, Suez University",
    image: "/team/Hossam Essam.webp"
  },
  {
    name: "Ahmed Saad",
    position: "Vice President",
    details: "Senior Petroleum Engineering Student, Suez University",
    image: "/team/Ahmed Saad.webp"
  },
  {
    name: "Amani Abdelbari",
    position: "Operation",
    details: "Third-Year Economics Student, Faculty of Economics and Political Science, Suez University",
    image: "/team/Amani Abdelbari.webp",
  },
  {
    name: "Ahmed Alkley",
    position: "Marketing",
    details: "Senior Petroleum Engineering Student, Suez University",
    image: "/team/Ahmed Alkley.webp"
  },
  {
    name: "Mohammed Maher",
    position: "Secretary",
    details: "Junior Petroleum Engineering Student, Suez University",
    image: "/team/Mohammed Maher.webp",
  },
  {
    name: "Saeed Mohammed",
    position: "HR",
    details: "Junior Petroleum Engineering Student, Suez University",
    image: "/team/Saeed Mohammed.webp"
  },
  {
    name: "Mohammed Fawzy",
    position: "Treasurer",
    details: "Senior Petroleum Engineering Student, Suez University",
    image: "/team/Mohammed Fawzy.webp",
  },
  {
    name: "Fatma Mohammed",
    position: "Development",
    details: "Senior Faculty of Arts Student, Suez University",
    image: "/team/Fatma Mohammed.webp",
  },
  {
    name: "Moaz Aleraky",
    position: "Technical",
    details: "Junior Petroleum Engineering Student, Suez University",
    image: "/team/Moaz Aleraky.webp"
  },
  {
    name: "Abdelrahman Atef",
    position: "Vice Technical",
    details: "Junior Petroleum Engineering Student, Suez University",
    image: "/team/Abdelrahman-Atef.webp",
  },
  {
    name: "Eslam Essam",
    position: "IT",
    details: "Junior Petroleum Engineering Student & Senior Software Developer, Suez University",
    image: "/team/Eslam Essam.webp"
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const MemberCard: React.FC<{
  member: TeamMember;
  onClick: () => void;
  index: number;
}> = ({ member, onClick, index }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group relative cursor-pointer"
  >
    {/* Card Container */}
    <div className="relative bg-[#0a1628] rounded-2xl overflow-hidden border border-white/10 hover:border-[#0D4C92]/50 transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-[#050B1A]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D4C92]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <ChevronRight className="w-5 h-5 text-white" />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <motion.div
            initial={false}
            className="transform transition-transform duration-300 group-hover:-translate-y-2"
          >
            {/* Position Badge */}
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider bg-[#00C29A] text-white rounded-full">
              {member.position}
            </span>
            
            {/* Name */}
            <h3 className="text-xl font-bold text-white font-[Poppins] leading-tight">
              {member.name}
            </h3>
            
            {/* View Profile Text */}
            <p className="text-white/60 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
              View Profile
              <ChevronRight className="w-4 h-4" />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    
    {/* Glow Effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0D4C92] to-[#00C29A] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
  </motion.div>
);

const DetailModal: React.FC<{ member: TeamMember; onClose: () => void }> = ({ member, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 bg-[#050B1A]/95 backdrop-blur-md flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-[#0a1628] rounded-3xl max-w-lg w-full relative border border-white/10 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0D4C92]/20 rounded-full blur-3xl -z-10" />
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 z-10"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Profile Image */}
      <div className="relative">
        <div className="aspect-square max-h-80 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />
        
        {/* Position Badge on Image */}
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block px-4 py-1.5 bg-[#00C29A] text-white rounded-full text-sm font-semibold uppercase tracking-wider">
            {member.position}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-8 pt-4">
        <h2 className="text-3xl font-bold text-white mb-4 font-[Poppins]">
          {member.name}
        </h2>
        
        {member.details && (
          <p className="text-white/60 leading-relaxed mb-8">
            {member.details}
          </p>
        )}

        {/* Social Links */}
        <div className="flex gap-3">
          <button className="flex-1 py-3 px-6 rounded-xl bg-[#0D4C92]/20 hover:bg-[#0D4C92] text-white flex items-center justify-center gap-2 transition-all duration-300 border border-[#0D4C92]/30 hover:border-[#0D4C92]">
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </button>
          <button className="flex-1 py-3 px-6 rounded-xl bg-[#00C29A]/20 hover:bg-[#00C29A] text-white flex items-center justify-center gap-2 transition-all duration-300 border border-[#00C29A]/30 hover:border-[#00C29A]">
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email</span>
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const EnhancedHighboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#050B1A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0D4C92]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00C29A]/10 rounded-full blur-3xl" />
      
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
            Our Team
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Poppins]">
            Meet the Highboard
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            The dedicated leaders driving SPE Suez Student Chapter forward with passion and innovation
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-6">
          {teamMembers.map((member, index) => (
            <MemberCard
              key={member.name}
              member={member}
              onClick={() => setActiveIndex(index)}
              index={index}
            />
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {activeIndex !== null && (
            <DetailModal
              member={teamMembers[activeIndex]}
              onClose={() => setActiveIndex(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EnhancedHighboard;
