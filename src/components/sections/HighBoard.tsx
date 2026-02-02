import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Linkedin, Mail, ChevronRight, ExternalLink, GraduationCap } from "lucide-react";
import { highboardMembers, chapterAdvisor, type TeamMember } from "@/data/team";

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
    whileHover={{ y: -10, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    className="group relative cursor-pointer"
  >
    {/* Card Container */}
    <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0a1628]/80 rounded-3xl overflow-hidden border border-white/10 hover:border-[#0D4C92]/60 transition-all duration-500 shadow-lg hover:shadow-[#0D4C92]/20">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-[#050B1A]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D4C92]/90 via-[#0D4C92]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00C29A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 shadow-xl">
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={false}
            className="transform transition-transform duration-300 group-hover:-translate-y-3"
          >
            {/* Position Badge */}
            <div className="mb-3">
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#00C29A] to-[#00A582] text-white rounded-full shadow-lg">
                {member.position}
              </span>
            </div>
            
            {/* Name */}
            <h3 className="text-xl font-bold text-white font-[Poppins] leading-tight mb-2 drop-shadow-lg">
              {member.name}
            </h3>
            
            {/* View Profile Text */}
            <p className="text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
              View Full Profile
              <ChevronRight className="w-4 h-4" />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    
    {/* Enhanced Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-[#0D4C92] via-[#00C29A] to-[#0D4C92] rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10" />
  </motion.div>
);

const DetailModal: React.FC<{ member: TeamMember; onClose: () => void }> = ({ member, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 bg-[#050B1A]/97 backdrop-blur-xl flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-gradient-to-br from-[#0a1628] to-[#0a1628]/90 rounded-3xl max-w-2xl w-full relative border border-white/20 overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0D4C92]/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00C29A]/20 rounded-full blur-3xl -z-10" />
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 z-10 group"
      >
        <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
      </button>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Profile Image */}
        <div className="relative md:w-2/5">
          <div className="aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent md:bg-gradient-to-r" />
          
          {/* Position Badge on Image */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#00C29A] to-[#00A582] text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-xl">
              {member.position}
            </span>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-8 md:w-3/5 flex flex-col max-h-[70vh] md:max-h-[500px]">
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 font-[Poppins]">
              {member.name}
            </h2>
            
            <div className="h-1 w-20 bg-gradient-to-r from-[#0D4C92] to-[#00C29A] rounded-full mb-4" />
            
            {member.bio && (
              <p className="text-white/70 leading-relaxed text-sm lg:text-base mb-6">
                {member.bio}
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-auto">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#0D4C92]/20 hover:bg-[#0D4C92] text-white flex items-center justify-center gap-2 transition-all duration-300 border border-[#0D4C92]/30 hover:border-[#0D4C92] hover:shadow-lg hover:shadow-[#0D4C92]/30 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">LinkedIn</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#00C29A]/20 hover:bg-[#00C29A] text-white flex items-center justify-center gap-2 transition-all duration-300 border border-[#00C29A]/30 hover:border-[#00C29A] hover:shadow-lg hover:shadow-[#00C29A]/30 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Email</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const EnhancedHighboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAdvisor, setShowAdvisor] = useState(false);

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

        {/* Faculty Advisor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-[#00C29A]/50" />
            <span className="text-[#00C29A] text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Faculty Advisor
            </span>
            <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-[#00C29A]/50" />
          </div>
          
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => setShowAdvisor(true)}
            className="max-w-3xl mx-auto cursor-pointer group"
          >
            <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0D4C92]/20 rounded-3xl overflow-hidden border border-[#0D4C92]/30 hover:border-[#00C29A]/50 transition-all duration-500 shadow-xl hover:shadow-[#0D4C92]/20">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 lg:p-8">
                {/* Advisor Image */}
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-2 border-[#00C29A]/30 group-hover:border-[#00C29A] transition-colors duration-300">
                    <img
                      src={chapterAdvisor.image}
                      alt={chapterAdvisor.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Decorative Badge */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#00C29A] to-[#00A582] rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Advisor Info */}
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block px-4 py-1.5 bg-[#00C29A]/20 text-[#00C29A] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    {chapterAdvisor.position}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 font-[Poppins]">
                    {chapterAdvisor.name}
                  </h3>
                  <p className="text-white/60 text-sm lg:text-base leading-relaxed line-clamp-3 mb-4">
                    {chapterAdvisor.bio}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    {chapterAdvisor.linkedin && (
                      <a
                        href={chapterAdvisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-[#0D4C92] hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                    )}
                    <span className="text-white/40 text-sm flex items-center gap-1 group-hover:text-[#00C29A] transition-colors">
                      View Full Profile
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00C29A]/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#0D4C92]/20 to-transparent rounded-tr-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Student Board Divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-white/50 text-sm font-medium uppercase tracking-wider">Student Board</span>
          <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {highboardMembers.map((member, index) => (
            <MemberCard
              key={member.name}
              member={member}
              onClick={() => setActiveIndex(index)}
              index={index}
            />
          ))}
        </div>

        {/* Detail Modal for Team Members */}
        <AnimatePresence>
          {activeIndex !== null && (
            <DetailModal
              member={highboardMembers[activeIndex]}
              onClose={() => setActiveIndex(null)}
            />
          )}
        </AnimatePresence>

        {/* Detail Modal for Advisor */}
        <AnimatePresence>
          {showAdvisor && (
            <DetailModal
              member={chapterAdvisor}
              onClose={() => setShowAdvisor(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EnhancedHighboard;
