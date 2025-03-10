interface Event {
  name: string;
  description: string;
    date: string;
    duration: string;
  attendees: string;
  location: string;
  color: string;
  icon: string;
  logo: string;
  pastImages: string[];
    shadowColor: string;
}

const events = [
  {
    name: "Petroleum Arabian Conference and Exhibition",
    description:
      "Petroleum Arabian Conference and Exhibition - Hands-on workshop on cutting-edge simulation tools.",
    date: "November 5-7, 2025",
    duration: "3 days",
    attendees: "200",
    location: "Virtual Event",
    color: "from-blue-600 to-cyan-600",
    icon: "💻",
    logo: "/events/PACE-logo.png",
    pastImages: ["/events/pace.png", "/events/pace.png", "/events/pace.png"],
    shadowColor: "from-blue-600 to-cyan-600",
    },
  {
    name: "SSPS - SPE Suez Petroleum Summit",
    description: 
      "The 3rd Edition of SPE Suez Petroleum Summit (SSPS) is a 3-day event designed to expand students' knowledge beyond academic studies. Featuring trusted industry experts, the event offers lectures, competitions, training opportunities, and hands-on experience in the petroleum field. Building on the success of previous years, SSPS continues to provide valuable insights and networking opportunities for petroleum engineering students.",
    date: "November 5-7, 2024",
    duration: "3 days",
    attendees: "300+", 
    location: "Ideaspace Suez, Suez University",
    color: "from-green-600 to-teal-600",
    icon: "🎓",
    logo: "/events/SBS-logo.jpg",
    pastImages: ["/events/pace.png", "/events/pace.png", "/events/pace.png"],
    shadowColor: "from-green-600 to-teal-600",
    },
  {
    name: "PetroAnalyst Competition",
    description: "Discover the world of petroleum data with Python in our PetroAnalyst Competition. This multi-week challenge combines learning and practical application, where participants solve weekly tasks using Python for petroleum data analysis. Each week features a notebook with questions, earning points towards the final ranking. The competition focuses on extracting valuable insights from petroleum industry data using Python programming and data analysis skills.",
    date: "December 3, 2023",
    duration: "1 day",
    attendees: "150+",
    location: "Virtual Event",
    color: "from-yellow-600 to-amber-600",
    icon: "📊",
    logo: "/events/petro-analyst.jpg",
    pastImages: ["/events/petro-analyst.png", "/events/petro-analyst.png", "/events/petro-analyst.png"],
    shadowColor: "from-yellow-600 to-amber-600",
  },
  {
    name: "Energy for ME",
    description:
      "Energy for Middle East - Regional conference on sustainable energy solutions.",
    date: "January 20-22, 2026",
    duration: "3 days",
    attendees: "1000+",
    location: "Cairo International Convention Center",
    color: "from-red-600 to-orange-600",
    icon: "⚡",
    logo: "/events/PICS-logo.jpg",
    pastImages: ["/events/pace.png", "/events/pace.png", "/events/pace.png"],
    shadowColor: "from-red-600 to-orange-600",
    },
  {
    name: "SPEAK Conference",
    description: "SPEAK conference is your compass in the career maze, helping you discover your passion and find the right field. Connect with specialists and experts across multiple domains including Digitalization, Business Development, Programming, Data Analysis, and more.",
    date: "December 13-14, 2025",
    duration: "2 days",
    attendees: "500+",
    location: "Data Center Sheraton, Cairo",
    color: "from-purple-600 to-pink-600",
    icon: "🎯",
    logo: "/events/speak-logo.png",
    pastImages: ["/events/speak.png", "/events/speak.png", "/events/speak.png"],
    shadowColor: "from-purple-600 to-pink-600",
    }
  
] as Event[];

export default events;
