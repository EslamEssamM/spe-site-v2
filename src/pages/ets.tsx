import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  ExternalLink,
  Star,
  Book,
  Headphones,
  Mic,
  Pencil,
  Clock,
  CheckCircle2,
  Globe2,
  Award,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import etsImage from "@/assets/news/ets.jpg";
import etsLogo from "@/assets/logos/ets.svg";

function ETSPartnership() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const deadline = new Date("2024-11-27");
    const today = new Date();
    const diff = deadline.getTime() - today.getTime();
    setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  const skills = [
    {
      icon: Book,
      title: "Reading",
      description: "Understand academic texts and passages",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: "Listening",
      description: "Comprehend lectures and conversations",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Mic,
      title: "Speaking",
      description: "Express yourself clearly and confidently",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: Pencil,
      title: "Writing",
      description: "Compose well-structured academic essays",
      color: "from-emerald-500 to-blue-500",
    },
  ];

  const benefits = [
    {
      icon: Globe2,
      title: "Widely Recognized",
      description:
        "Accepted by thousands of universities and institutions globally",
    },
    {
      icon: CheckCircle2,
      title: "Comprehensive",
      description: "Assesses all four key English skills",
    },
    {
      icon: Clock,
      title: "Convenient",
      description: "Available year-round at test centers worldwide",
    },
    {
      icon: Award,
      title: "Reliable",
      description: "Fair and unbiased scoring system",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative border-none overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${etsImage})` }}
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10" />
            <div className="relative z-20">
              <CardHeader className="p-6 sm:p-10">
                <CardTitle className="text-4xl sm:text-5xl font-bold mb-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  Partnership Announcement
                </CardTitle>
                <CardDescription className="text-xl sm:text-2xl text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] mb-4">
                  SPE Suez Chapter x ETS TOEFL iBT®
                </CardDescription>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex justify-center"
                >
                  <img
                    src={etsLogo}
                    alt="ETS TOEFL iBT® Logo"
                    className="h-16 sm:h-20 object-contain fill-white text-white"
                    // fill-white svg
                    style={{ fill: "white" }}
                  />
                </motion.div>
              </CardHeader>

              <CardContent className="p-6 sm:p-10">
                {/* Discount Banner */}
                <motion.div
                  className="relative overflow-hidden bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl p-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse" />
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-4"
                    >
                      <span className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                        25% OFF
                      </span>
                    </motion.div>
                    <p className="text-xl sm:text-2xl text-white/90 mb-4">
                      Special discount on TOEFL iBT® exam registration
                    </p>
                    {daysLeft > 0 && (
                      <div className="text-lg text-yellow-300 mb-6 flex items-center justify-center">
                        <Clock className="w-5 h-5 mr-2 animate-pulse" />
                        Only {daysLeft} days left to apply!
                      </div>
                    )}
                    <Button
                      onClick={() =>
                        window.open(
                          "https://forms.gle/m7Au3jMMW3QY85ax9",
                          "_blank"
                        )
                      }
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all text-lg sm:text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center">
                        Register Now & Get Your Voucher
                        <ExternalLink className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                    About TOEFL iBT®
                  </h2>
                  <p className="mb-8 text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                    The TOEFL iBT® is the world's most widely recognized
                    English-language proficiency test, accepted by thousands of
                    universities and institutions worldwide. It measures your
                    ability to use and understand English in an academic setting
                    through real-world academic tasks.
                  </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.title}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm" />
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center relative transform group-hover:scale-105 transition-transform duration-300">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} p-4 transform group-hover:rotate-12 transition-transform duration-300`}
                        >
                          <skill.icon className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {skill.title}
                        </h3>
                        <p className="text-white/70">{skill.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.h3
                  className="text-2xl sm:text-3xl font-semibold mb-8 text-cyan-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Why Choose TOEFL iBT®?
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start bg-white/5 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + 0.1 * index, duration: 0.5 }}
                    >
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 mr-4">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-white/85">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="flex justify-center mt-8 mb-6"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.3 }}
                >
                  <Button
                    onClick={() =>
                      window.open(
                        "https://forms.gle/m7Au3jMMW3QY85ax9",
                        "_blank"
                      )
                    }
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all text-lg sm:text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Your 25% Discount Now
                      <ExternalLink className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </motion.div>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row justify-between items-center bg-black/60 backdrop-blur-sm p-6 sm:p-10">
                <motion.p
                  className="font-semibold text-xl sm:text-2xl text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] mb-4 sm:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  #Volunteers_to_pioneers
                </motion.p>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                >
                  <Button
                    asChild
                    // variant="outline"
                    className="text-white border-white/20 hover:bg-white/10 transition-colors text-base sm:text-lg"
                  >
                    <Link to="/partners">Back to Partners</Link>
                  </Button>
                </motion.div>
              </CardFooter>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default ETSPartnership;
