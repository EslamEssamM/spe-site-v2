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
import { ChevronRight, ExternalLink, Star, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import dataCampImage from "@/assets/news/datacamp.webp";

function DataCampPartnership() {
  const benefits = [
    "Full year of free access to all DataCamp courses",
    "440+ courses on data science, machine learning, Python, R, SQL, and more",
    "Learn from industry experts and apply skills through real-world projects",
    "Boost your employability with globally recognized certificates",
    "Self-paced learning to fit your schedule",
    "Interactive coding challenges and real-world projects",
    "Access to a supportive community of learners and experts",
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 px-4"
      id="home"
    >
      <div className="container mx-auto px-0 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative border-none overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${dataCampImage})` }}
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10" />
            <div className="relative z-20">
              <CardHeader className="p-6 sm:p-10">
                <CardTitle className="text-4xl sm:text-5xl font-bold mb-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  Partnership Announcement
                </CardTitle>
                <CardDescription className="text-xl sm:text-2xl text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                  SPE Suez Chapter x DataCamp Donates{" "}
                  <span className="text-yellow-300 font-semibold">
                    Free Scholarship
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 sm:p-10">
                <motion.div
                  className="flex items-center justify-center mb-6 bg-blue-600/30 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Calendar className="w-6 h-6 mr-2 text-yellow-300" />
                  <span className="text-lg sm:text-xl font-semibold text-yellow-300">
                    Application Deadline: 27/11/2024
                  </span>
                </motion.div>
                <motion.h2
                  className="text-2xl sm:text-3xl font-semibold mb-6 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  DataCamp Donates Scholarship Program
                </motion.h2>
                <motion.p
                  className="mb-8 text-lg sm:text-xl text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  We're thrilled to announce our groundbreaking partnership with
                  DataCamp, bringing an exclusive learning opportunity to our
                  community! This partnership aims to empower our members with
                  cutting-edge data science skills and open doors to exciting
                  career opportunities.
                </motion.p>
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Program Benefits
                </motion.h3>
                <ul className="mb-8 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + 0.1 * index, duration: 0.5 }}
                    >
                      {index === 0 ? (
                        <Star className="h-6 w-6 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-6 w-6 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                      )}
                      <span
                        className={`text-base sm:text-lg ${index === 0 ? "text-yellow-300 font-semibold" : "text-white/85"}`}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  Who Can Apply?
                </motion.h3>
                <motion.p
                  className="mb-6 text-base sm:text-lg text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  This scholarship program is open to everyone interested in
                  data science. Whether you're a beginner looking to start your
                  data science journey or an experienced practitioner aiming to
                  upgrade your skills, this program has something for you.
                </motion.p>
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  How to Apply
                </motion.h3>
                <motion.p
                  className="mb-6 text-base sm:text-lg text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  To apply for this exciting opportunity, click the "Apply Now"
                  button below. You'll be directed to a form where you can
                  provide your details and explain why you're interested in this
                  program. Don't miss out on this chance to transform your
                  career!
                </motion.p>
                <motion.div
                  className="flex justify-center mt-8 mb-6"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                >
                  <Button
                    onClick={() =>
                      window.open(
                        "https://forms.gle/jMTfSGep5Fwu32cr9",
                        "_blank"
                      )
                    }
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white transition-colors text-lg sm:text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
                  >
                    Apply Now <ExternalLink className="w-6 h-6 ml-2" />
                  </Button>
                </motion.div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-center bg-black/60 backdrop-blur-sm p-6 sm:p-10">
                <motion.p
                  className="font-semibold text-xl sm:text-2xl text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] mb-4 sm:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                >
                  #Volunteers_to_pioneers
                </motion.p>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.0, duration: 0.3 }}
                >
                  <Button
                    asChild
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

export default DataCampPartnership;
