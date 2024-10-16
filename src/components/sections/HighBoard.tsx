import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Card, CardContent } from "@/components/ui/card";
import Tooltip from "@/components/ui/Tooltip";

const teamMembers = [
  {
    name: "Hossam Essam",
    role: "President",
    image: "/team/Eslam.jpg",
  },
  {
    name: "Ahmed Saad",
    role: "Vice President",
    image: "/team/Eslam.jpg",
  },

  {
    name: "Amani Abdelbari",
    role: "Operation",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Ahmed Alkley",
    role: "Marketing",
    image: "/team/Eslam.jpg",
  },

  {
    name: "Mohammed Maher",
    role: "Secretary",
    image: "/team/Eslam.jpg",
  },
  {
    name: "Saeed Mohammed",
    role: "HR",
    image: "/team/Eslam.jpg",
  },
  {
    name: "Mohammed Fawzy",
    role: "Treasurer",
    image: "/team/Eslam.jpg",
  },
  {
    name: "Fatma Mohammed",
    role: "Development",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Moaz Aleraky",
    role: "Technical",
    image: "/team/Eslam.jpg",
  },

  {
    name: "Mahmoud Mohamed",
    role: "Vice Technical",
    image: "/team/Eslam.jpg",
  },
  {
    name: "Eslam Essam",
    role: "IT",
    image: "/team/Eslam.jpg",
  },
];

const MemberCard = ({ member, isActive, onClick, position }: any) => {
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        scale: isActive ? 1.1 : 1,
        zIndex: isActive ? 10 : 1,
      }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <Tooltip content={`${member.name}`} active={isActive} />
      <Card
        className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br ${isActive ? "from-blue-600 to-purple-600" : "from-gray-700 to-gray-800"} text-white overflow-hidden rounded-2xl`}
      >
        <CardContent className="p-1 flex flex-col items-center justify-center h-full">
          <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 border-2 border-white">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((n: any) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-center leading-tight mt-1 truncate w-full">
            {member.name}
          </h3>
          <p className="text-[6px] sm:text-[8px] md:text-[10px] text-center opacity-80 truncate w-full">
            {member.role}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const GlowingLine = ({ start, end, isActive }: any) => {
  return (
    <motion.div
      className="absolute h-px bg-gradient-to-r from-blue-500 to-purple-500"
      style={{
        left: `${start.x}%`,
        top: `${start.y}%`,
        width: `${Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2))}%`,
        transform: `rotate(${Math.atan2(end.y - start.y, end.x - start.x)}rad)`,
        transformOrigin: "left center",
      }}
      animate={{
        opacity: isActive ? 0.8 : 0.2,
        height: isActive ? "2px" : "1px",
      }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default function OptimizedHighboardSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const calculatePositions = () => {
      const container = containerRef.current as any;
      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      const centerX = 40;
      const centerY = 50;
      let radius =
        ((Math.min(width, height) * 0.45) / Math.max(width, height)) * 100;
      if (width < 400) {
        radius += 10;
      }

      const newPositions = teamMembers.map((_, index) => {
        const angle = (index / teamMembers.length) * Math.PI * 2 - Math.PI / 2;
        return {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
        };
      });
      setPositions(newPositions as any);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-0 sm:mb-0 text-center text-white">
          Our Highboard Team
        </h2>
        <div
          ref={containerRef}
          className="relative w-full mt-[-50px] md:mt-[-70px] h-[550px] sm:h-[600px] md:h-[700px] lg:h-[800px]"
        >
          {positions.map((start, i) =>
            positions
              .slice(i + 1)
              .map((end, j) => (
                <GlowingLine
                  key={`${i}-${j}`}
                  start={start}
                  end={end}
                  isActive={i === activeIndex || i + j + 1 === activeIndex}
                />
              ))
          )}
          {teamMembers.map((member, index) => (
            <MemberCard
              key={member.name}
              member={member}
              index={index}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              position={positions[index] || { x: 0, y: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
