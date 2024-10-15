import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, ChevronRight, Linkedin, Facebook } from "lucide-react";

const boardMembers = [
  {
    name: "Hossam Essam",
    role: "President",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Ahmed Saad",
    role: "Vice President",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Amani Abdelbari",
    role: "Operation",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Ahmed Alkley",
    role: "Marketing",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Eslam Essam",
    role: "IT",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Mohammed Maher",
    role: "Secretary",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Saeed Mohammed",
    role: "HR",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Mohammed Fawzy",
    role: "Treasurer",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Fatma Mohammed",
    role: "Development",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Moaz Aleraky",
    role: "Technical",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Mahmoud Mohamed",
    role: "Vice Technical",
    image: "/placeholder.svg?height=150&width=150",
  },
];

export function HighBoardSectionComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCompactView, setIsCompactView] = useState(false);

  const nextMember = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % boardMembers.length);
  };

  const prevMember = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + boardMembers.length) % boardMembers.length
    );
  };

  return (
    <section
      id="highboard"
      className="bg-gradient-to-br from-[#1a237e] via-[#0d47a1] to-[#01579b]"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            SPE SU SC High Board 2025
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-white">Compact View</span>
            <Switch
              checked={isCompactView}
              onCheckedChange={setIsCompactView}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isCompactView ? (
            <motion.div
              key="compact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {boardMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-none overflow-hidden group"
                >
                  <CardContent className="p-4">
                    <div className="relative mb-4 overflow-hidden rounded-full">
                      <Avatar className="w-full h-auto aspect-square border-2 border-white">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                        <div className="flex space-x-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-white hover:text-blue-300"
                          >
                            <Linkedin size={20} />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-white hover:text-blue-300"
                          >
                            <Facebook size={20} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white text-center mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-200 text-center">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `-${activeIndex * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {boardMembers.map((member, index) => (
                    <Card
                      key={index}
                      className="flex-shrink-0 w-full bg-white/10 backdrop-blur-md border-none overflow-hidden"
                    >
                      <CardContent className="p-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                        <div className="relative">
                          <Avatar className="w-48 h-48 border-4 border-white shadow-lg">
                            <AvatarImage src={member.image} alt={member.name} />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-full flex items-end justify-center pb-4"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <div className="flex space-x-2">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="text-white hover:text-blue-300"
                              >
                                <Linkedin size={24} />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="text-white hover:text-blue-300"
                              >
                                <Facebook size={24} />
                              </Button>
                            </div>
                          </motion.div>
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {member.name}
                          </h3>
                          <p className="text-xl text-blue-200 mb-4">
                            {member.role}
                          </p>
                          <p className="text-white/80 max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white"
                onClick={prevMember}
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white"
                onClick={nextMember}
              >
                <ChevronRight size={24} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {!isCompactView && (
          <div className="mt-8 flex justify-center space-x-2">
            {boardMembers.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 rounded-full p-0 ${
                  index === activeIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
