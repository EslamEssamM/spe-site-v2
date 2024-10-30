import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About SPE Suez Student Chapter
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center max-w-4xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Welcome to the Society of Petroleum Engineers (SPE) Suez Student
          Chapter. We are a dynamic community of future petroleum engineers
          dedicated to fostering knowledge, innovation, and professional growth
          in the energy sector.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Mission Card */}
          <div className="bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              The SPE Suez Student Chapter is committed to bridging the gap
              between academic learning and industry practices. We aim to
              empower our members with cutting-edge knowledge, practical skills,
              and networking opportunities that will shape the future of energy
              exploration and production.
            </p>
          </div>
          {/* Activities Card */}
          <div className="bg-teal-800 bg-opacity-20 p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl font-bold mb-4">Our Activities</h3>
            <p>
              We organize a wide range of activities including technical
              workshops, field trips, guest lectures from industry experts, and
              international conferences. Our chapter also focuses on research
              initiatives, community outreach programs, and professional
              development seminars to ensure our members are well-rounded and
              industry-ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
