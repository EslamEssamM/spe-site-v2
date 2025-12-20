import { motion } from "framer-motion";
import { Calendar, Trophy, Users, Handshake } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "2004",
    label: "Founded",
    description: "Years of Excellence",
  },
  {
    icon: Trophy,
    value: "17+",
    label: "Awards",
    description: "SPE International",
  },
  {
    icon: Users,
    value: "200+",
    label: "Members",
    description: "Active Students",
  },
  {
    icon: Handshake,
    value: "5+",
    label: "Partners",
    description: "Industry Leaders",
  },
];

export default function StatsStrip() {
  return (
    <section className="relative py-16 bg-[#050B1A]">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0D4C92] to-transparent opacity-30" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-[#0a1628] rounded-2xl p-6 border border-white/10 hover:border-[#0D4C92]/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0D4C92]/20 flex items-center justify-center mb-4 group-hover:bg-[#0D4C92] transition-colors duration-300">
                  <stat.icon className="h-6 w-6 text-[#00C29A] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Value */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-[#00C29A] font-semibold text-sm uppercase tracking-wide mb-1">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-white/50 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
