import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Hossam Essam", role: "President", image: "/team/Hossam Essam.png" },
  { name: "Ahmed Saad", role: "Vice President", image: "/team/Ahmed Saad.png" },
  {
    name: "Amani Abdelbari",
    role: "Operation",
    image: "/team/Amani Abdelbari.png",
  },
  { name: "Ahmed Alkley", role: "Marketing", image: "/team/Ahmed Alkley.png" },
  {
    name: "Mohammed Maher",
    role: "Secretary",
    image: "/team/Mohammed Maher.png",
  },
  { name: "Saeed Mohammed", role: "HR", image: "/team/Saeed Mohammed.png" },
  {
    name: "Mohammed Fawzy",
    role: "Treasurer",
    image: "/team/Mohammed Fawzy.png",
  },
  {
    name: "Fatma Mohammed",
    role: "Development",
    image: "/team/Fatma Mohammed.png",
  },
  { name: "Moaz Aleraky", role: "Technical", image: "/team/Moaz Aleraky.png" },
  {
    name: "Mahmoud Mohamed",
    role: "Vice Technical",
    image: "/team/Mahmoud Mohamed.png",
  },
  { name: "Eslam Essam", role: "IT", image: "/team/Eslam Essam.png" },
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
    className={`bg-gradient-to-br ${
      isActive ? "from-purple-600 to-blue-600" : "from-gray-800 to-gray-900"
    } rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform`}
  >
    <div className="p-6 flex flex-col items-center ">
      <div className="w-32 h-32  overflow-hidden mb-2 mt-0   shadow-inner">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-2">
        {member.name}
      </h3>
      <p className="text-sm text-gray-300 text-center">{member.role}</p>
    </div>
  </motion.div>
);

const DetailView: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto"
  >
    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-purple-500 shadow-lg">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">
      {member.name}
    </h2>
    <p className="text-xl text-purple-600 text-center mb-6">{member.role}</p>
    <p className="text-gray-700 text-center leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </motion.div>
);

const EnhancedHighboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 min-h-screen">
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
              className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50"
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
