import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ExternalLink, ArrowLeft, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import dataCampImage from "@/assets/news/datacamp.webp";
import etsImage from "@/assets/news/ets.webp";
import dataCampLogo from "@/assets/logos/data-camp-logo.svg";
import etsLogo from "@/assets/logos/ets.svg";

function PartnersPage() {
  const partnerships = [
    {
      name: "DataCamp",
      description: "Free Scholarship Program",
      logo: dataCampLogo,
      image: dataCampImage,
      benefits: [
        "Full year of free access to all DataCamp courses",
        "440+ courses on data science, machine learning, Python, R, SQL",
        "Globally recognized certificates",
      ],
      applyLink: "https://forms.gle/jMTfSGep5Fwu32cr9",
      viewMoreLink: "/data-camp",
      stats: { courses: "440+", learners: "10K+", skills: "50+" },
    },
    {
      name: "ETS TOEFL iBT®",
      description: "25% Discount on Exam",
      logo: etsLogo,
      image: etsImage,
      benefits: [
        "25% off on TOEFL iBT® exam registration",
        "Recognized by 11,000+ institutions globally",
        "Comprehensive English proficiency assessment",
      ],
      applyLink: "https://forms.gle/m7Au3jMMW3QY85ax9",
      viewMoreLink: "/ets",
      stats: { savings: "25%", institutions: "11K+", countries: "150+" },
    },
  ];

  return (
    <div className="min-h-screen bg-[#050B1A] text-white" id="home">
      {/* Hero Header */}
      <section className="pt-32 pb-16 border-b border-white/10">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#0D4C92]" />
              <span className="text-[#0D4C92] text-sm font-medium uppercase tracking-wider">
                Exclusive Opportunities
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-white/60 max-w-2xl text-lg">
              Unlock exclusive benefits and opportunities through our collaborations 
              with industry-leading organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative bg-white/[0.03] border border-white/10 overflow-hidden hover:border-[#0D4C92]/50 transition-all duration-300 h-full">
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={partnership.image}
                      alt={partnership.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/10 backdrop-blur-sm p-3 border border-white/10">
                        <img
                          src={partnership.logo}
                          alt={`${partnership.name} Logo`}
                          className="h-8 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {partnership.name}
                    </h2>
                    <p className="text-[#0D4C92] font-medium mb-6">
                      {partnership.description}
                    </p>
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-white/10">
                      {Object.entries(partnership.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-white">{value}</div>
                          <div className="text-xs text-white/50 uppercase tracking-wider">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {partnership.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#0D4C92]" />
                          <span className="text-white/70 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button
                        onClick={() => window.open(partnership.applyLink, "_blank")}
                        className="flex-1 bg-[#0D4C92] hover:bg-[#005CB9] text-white font-semibold py-4 rounded-xl"
                      >
                        Apply Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 text-white border-white/20 hover:bg-white/10 font-semibold py-4 rounded-xl"
                      >
                        <Link to={partnership.viewMoreLink}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        
      {/* Why Partner Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0D4C92] flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">200+ Members</h3>
                <p className="text-white/60 text-sm">Active engineering students</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0D4C92] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Award-Winning</h3>
                <p className="text-white/60 text-sm">SPE Presidential Award recipient</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#0D4C92] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">MENA's Largest</h3>
                <p className="text-white/60 text-sm">SPE student chapter in the region</p>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl"
              >
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;
