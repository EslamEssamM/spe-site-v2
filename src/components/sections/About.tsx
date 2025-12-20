import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Shield, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing new ideas and technologies in the energy sector",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong connections between students and industry",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Maintaining ethical standards and transparency",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0a1628]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Poppins]">
            About SPE Suez Student Chapter
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            SPE Suez University Student Chapter is the largest SPE student chapter in the MENA region. 
            Established in 2004 and actively operating since 2008, we are dedicated to empowering students 
            through technical, professional, and developmental activities.
          </p>
        </motion.div>

        {/* Mission & Activities Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#050B1A] rounded-2xl p-8 border border-white/10 hover:border-[#0D4C92]/50 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-[#0D4C92] flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-[Poppins]">Our Mission</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              To prepare students and fresh graduates academically and professionally 
              through hands-on experience, global exposure, and strong industry connections. 
              We bridge the gap between academic learning and real-world industry practices.
            </p>
            <a
              href="#events"
              className="inline-flex items-center gap-2 text-[#00C29A] font-semibold hover:gap-3 transition-all duration-200"
            >
              Explore our events
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Activities Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#050B1A] rounded-2xl p-8 border border-white/10 hover:border-[#00C29A]/50 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-[#00C29A] flex items-center justify-center mb-6">
              <Lightbulb className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-[Poppins]">What We Do</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              We organize technical workshops, certified courses, internships, and 
              engineering sessions across multiple disciplines. Our chapter conducts 
              field visits and facilitates direct industry interaction while building 
              strong connections with major national and international companies.
            </p>
            <a
              href="#magazines"
              className="inline-flex items-center gap-2 text-[#00C29A] font-semibold hover:gap-3 transition-all duration-200"
            >
              Read our publications
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-white font-[Poppins]">Our Core Values</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#050B1A] rounded-xl p-6 text-center border border-white/10 hover:border-[#0D4C92]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0D4C92]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0D4C92] transition-colors duration-300">
                <value.icon className="h-6 w-6 text-[#00C29A] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
              <p className="text-sm text-white/50">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
