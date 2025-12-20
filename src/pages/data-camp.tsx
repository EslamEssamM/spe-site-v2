import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ExternalLink, Star, ArrowLeft, BookOpen, Users, Award } from "lucide-react";
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
  ];

  const stats = [
    { icon: BookOpen, number: "440+", label: "Courses Available" },
    { icon: Users, number: "10K+", label: "Learners Worldwide" },
    { icon: Award, number: "50+", label: "Skills to Master" },
  ];

  return (
    <div className="min-h-screen bg-[#050B1A] text-white" id="home">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dataCampImage}
            alt="DataCamp Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-[#050B1A]/80 to-[#050B1A]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/60 via-transparent to-[#050B1A]/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-white" />
              <span className="text-white text-sm font-medium uppercase tracking-wider">
                Partnership Program
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
              DataCamp Donates
              <br />
              <span className="text-white/60">Free Scholarship</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              SPE Suez Chapter x DataCamp — Empowering our members with cutting-edge data science skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-white/10 bg-[#050B1A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="py-8 px-4 text-center"
              >
                <stat.icon className="w-6 h-6 text-[#0D4C92] mx-auto mb-3" />
                <p className="text-2xl lg:text-3xl font-bold text-white">{stat.number}</p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                About the Program
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We're thrilled to announce our groundbreaking partnership with
                DataCamp, bringing an exclusive learning opportunity to our
                community! This partnership aims to empower our members with
                cutting-edge data science skills and open doors to exciting
                career opportunities.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">
                Who Can Apply?
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                This scholarship program is open to everyone interested in
                data science. Whether you're a beginner looking to start your
                data science journey or an experienced practitioner aiming to
                upgrade your skills, this program has something for you.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => window.open("https://forms.gle/jMTfSGep5Fwu32cr9", "_blank")}
                  className="bg-[#0D4C92] hover:bg-[#005CB9] text-white font-semibold px-8 py-6 rounded-xl shadow-lg"
                >
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-xl"
                >
                  <Link to="/partners">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Partners
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Program Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                  >
                    {index === 0 ? (
                      <Star className="h-5 w-5 text-[#0D4C92] mt-0.5 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-[#0D4C92] mt-0.5 flex-shrink-0" />
                    )}
                    <span className={`${index === 0 ? "text-white font-semibold" : "text-white/70"}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-semibold text-xl text-[#0D4C92]">
              #Volunteers_to_pioneers
            </p>
            <p className="text-white/60 text-sm">
              SPE Suez University Student Chapter © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataCampPartnership;
