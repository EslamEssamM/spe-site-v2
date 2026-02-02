import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  ExternalLink,
  Book,
  Headphones,
  Mic,
  Pencil,
  CheckCircle2,
  Globe2,
  Award,
  ArrowLeft,
  Percent,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import etsImage from "@/assets/news/ets.webp";
import etsLogo from "@/assets/logos/ets.svg";

function ETSPartnership() {
  const skills = [
    { icon: Book, title: "Reading", description: "Understand academic texts and passages" },
    { icon: Headphones, title: "Listening", description: "Comprehend lectures and conversations" },
    { icon: Mic, title: "Speaking", description: "Express yourself clearly and confidently" },
    { icon: Pencil, title: "Writing", description: "Compose well-structured academic essays" },
  ];

  const benefits = [
    { icon: Globe2, title: "Widely Recognized", description: "Accepted by thousands of universities globally" },
    { icon: CheckCircle2, title: "Comprehensive", description: "Assesses all four key English skills" },
    { icon: Award, title: "Reliable", description: "Fair and unbiased scoring system" },
  ];

  return (
    <div className="min-h-screen bg-[#050B1A] text-white" id="home">
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <Link to="/">
          <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 bg-[#050B1A]/50 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={etsImage}
            alt="ETS TOEFL Partnership"
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
            <div className="flex items-center gap-6 mb-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                ETS TOEFL iBT®
              </h1>
              <img src={etsLogo} alt="ETS Logo" className="h-12 lg:h-16 hidden sm:block" />
            </div>
            <p className="text-xl text-white/80 max-w-2xl">
              SPE Suez Chapter x ETS — Exclusive discount on TOEFL iBT® exam registration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="border-y border-white/10 bg-[#0D4C92]/10">
        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-[#0D4C92] flex items-center justify-center">
                <Percent className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-white">25% OFF</p>
                <p className="text-white/60">Special discount on exam registration</p>
              </div>
            </div>
            <Button
              onClick={() => window.open("https://forms.gle/m7Au3jMMW3QY85ax9", "_blank")}
              className="bg-[#0D4C92] hover:bg-[#005CB9] text-white font-semibold px-8 py-6 rounded-xl shadow-lg"
            >
              Register Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              About TOEFL iBT®
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              The TOEFL iBT® is the world's most widely recognized English-language
              proficiency test, accepted by thousands of universities and institutions
              worldwide. It measures your ability to use and understand English in an
              academic setting through real-world academic tasks.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="mb-20">
            <h3 className="text-xl font-bold text-white text-center mb-8">
              Four Key Skills Assessed
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/[0.03] border border-white/10 p-6 text-center hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                >
                  <skill.icon className="w-8 h-8 text-[#0D4C92] mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">{skill.title}</h4>
                  <p className="text-white/60 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Why Choose TOEFL iBT®?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 p-4 bg-white/[0.03] border border-white/10"
                  >
                    <benefit.icon className="w-6 h-6 text-[#0D4C92] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-white/60 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/[0.03] border border-white/10 p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                How to Get Your Discount
              </h3>
              <ol className="space-y-4 text-white/70 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0D4C92] text-white text-sm font-bold flex items-center justify-center">1</span>
                  <span>Click the "Register Now" button to fill out the application form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0D4C92] text-white text-sm font-bold flex items-center justify-center">2</span>
                  <span>Provide your details and verify your eligibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0D4C92] text-white text-sm font-bold flex items-center justify-center">3</span>
                  <span>Receive your exclusive discount code via email</span>
                </li>
              </ol>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => window.open("https://forms.gle/m7Au3jMMW3QY85ax9", "_blank")}
                  className="bg-[#0D4C92] hover:bg-[#005CB9] text-white font-semibold px-6 py-4 rounded-xl"
                >
                  Get 25% Discount
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-xl"
                >
                  <Link to="/partners">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    All Partners
                  </Link>
                </Button>
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

export default ETSPartnership;
