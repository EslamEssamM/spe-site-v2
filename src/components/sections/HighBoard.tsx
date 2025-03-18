import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
};

const MemberCard: React.FC<{
  member: TeamMember;
  isActive: boolean;
  onClick: () => void;
  index: number;
}> = ({ member, isActive, onClick, index }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    custom={index}
    whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`bg-gradient-to-br ${isActive
      ? "from-violet-600 via-indigo-600 to-blue-600"
      : "from-slate-800 via-slate-900 to-black hover:from-slate-700 hover:via-slate-800 hover:to-slate-900"
      } rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform`}
  >
    <div className="p-6 flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-indigo-400/50 shadow-xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-2">
        {member.name}
      </h3>
      <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-2">
        {member.position}
      </span>
    </div>
  </motion.div>
);

const DetailView: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto border border-indigo-500/20"
  >
    <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8 border-4 border-indigo-500/50 shadow-2xl">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
    <h2 className="text-4xl font-bold text-white text-center mb-4">
      {member.name}
    </h2>
    <div className="flex flex-col items-center gap-4">
      <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-xl font-medium">
        {member.position}
      </span>
      {member.details && (
        <p className="text-lg text-slate-300 text-center max-w-lg">
          {member.details}
        </p>
      )}
    </div>
  </motion.div>
);

const EnhancedHighboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-16 text-center text-white"
        >
          Our Highboard Team
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
          {teamMembers.map((member, index) => (
            <MemberCard
              key={member.name}
              member={member}
              isActive={index === activeIndex}
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
              index={index}
            />
          ))}
        </motion.div>
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setActiveIndex(null)}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <DetailView member={teamMembers[activeIndex]} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EnhancedHighboard;
