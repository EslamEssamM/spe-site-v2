import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const events = [
  {
    name: "SPEak",
    description:
      "Annual technical conference featuring industry experts and innovative presentations.",
    date: "October 15-17, 2025",
    attendees: "500+",
    location: "Suez University Campus",
    color: "from-purple-600 to-indigo-600",
    icon: "🎙️",
    logo: "public/events/SPEak-logo.jpg",
    pastImages: ["/events/pace.png", "/events/pace.png", "/events/pace.png"],
  },
  {
    name: "PACE",
    description:
      "Petroleum Advanced Computer Experiments - Hands-on workshop on cutting-edge simulation tools.",
    date: "November 5-7, 2025",
    attendees: "200",
    location: "Virtual Event",
    color: "from-blue-600 to-cyan-600",
    icon: "💻",
    logo: "/events/PACE-logo.png",
    pastImages: ["/events/pace.png", "/events/pace.png", "/events/pace.png"],
  },
  {
    name: "SBSS",
    description:
      "Suez Branch Student Summit - Networking event connecting students with industry professionals.",
    date: "December 1-2, 2025",
    attendees: "300+",
    location: "Suez Convention Center",
    color: "from-green-600 to-teal-600",
    icon: "🤝",
    logo: "public/events/SBS-logo.jpg",
    pastImages: ["/events/pace.png", "/events/pace.png", "/events/pace.png"],
  },
  {
    name: "E4ME",
    description:
      "Energy for Middle East - Regional conference on sustainable energy solutions.",
    date: "January 20-22, 2026",
    attendees: "1000+",
    location: "Cairo International Convention Center",
    color: "from-red-600 to-orange-600",
    icon: "⚡",
    logo: "public/events/PICS-logo.jpg",
    pastImages: ["/events/pace.png", "/events/pace.png", "/events/pace.png"],
  },
];

export default function EnhancedEventsSection() {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine as any);
  }, []);

  return (
    <section
      id="events"
      className=" bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Flagship Events
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant={
                    activeEvent.name === event.name ? "default" : "outline"
                  }
                  className={`w-full justify-start text-left h-auto py-4 px-6 ${
                    activeEvent.name === event.name
                      ? "bg-gradient-to-r " + event.color
                      : ""
                  }`}
                  onClick={() => setActiveEvent(event)}
                >
                  <img
                    src={event.logo}
                    alt={`${event.name} logo`}
                    className="w-8 h-8 mr-4"
                  />
                  <span className="flex-grow">{event.name}</span>
                  <ChevronRight
                    className={`ml-2 transition-transform ${
                      activeEvent.name === event.name ? "rotate-90" : ""
                    }`}
                  />
                </Button>
              </motion.div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-2"
            >
              <Card
                className={`bg-gradient-to-br ${activeEvent.color} text-white overflow-hidden`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={activeEvent.logo}
                      alt={`${activeEvent.name} logo`}
                      className="w-16 h-16 mr-4"
                    />
                    <h3 className="text-3xl font-bold">{activeEvent.name}</h3>
                  </div>
                  <p className="text-lg mb-6">{activeEvent.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="mr-2" />
                      <span>{activeEvent.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2" />
                      <span>{activeEvent.attendees} Attendees</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <MapPin className="mr-2" />
                      <span>{activeEvent.location}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">
                    Past Event Highlights
                  </h4>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {activeEvent.pastImages.map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`${activeEvent.name} past event ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      />
                    ))}
                  </div>
                  <motion.div
                    className="flex justify-between"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      Register Now
                    </Button>
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-gray-900"
                    >
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
