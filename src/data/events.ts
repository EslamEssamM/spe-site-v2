interface Event {
    name: string;
    fullName: string;
    type: string;
    status: string;
    description: string;
    date: string;
    duration: string;
    attendees: string;
    location: string;
    city: string;
    color: string;
    icon: string;
    logo: string;
    pastImages: string[];
    shadowColor: string;
}

const events = [
  {
    name: "PACE 2025",
    fullName: "Petroleum Arabian Conference & Exhibition 2025",
    type: "flagship",
    status: "past",
    description: "PACE is the largest student-led technical conference in the Middle East, empowering youth in the upstream oil and gas sector. The event gathers over 400 attendees, offering technical sessions, competitions, internships, and courses to provide both theoretical knowledge and practical experience. PACE fosters collaboration among major SPE student chapters in Egypt and emphasizes career readiness, employability, and exposure to the latest industry technologies.",
    date: "May 7-9, 2025",
    duration: "3 days",
    attendees: "400+",
    location: "The American University in Cairo",
    city: "Cairo",
    color: "from-blue-600 to-cyan-600",
    icon: "🏆",
    logo: "/logos/PACE-logo.png",
    pastImages: [
      "/events/pace/pace-1.jpg",
      "/events/pace/pace-2.jpg",
      "/events/pace/pace-3.jpg",
      "/events/pace/pace-4.jpg",
      "/events/pace/pace-5.jpg",
      "/events/pace/pace-6.jpg",
      "/events/pace/pace-7.jpg",
      "/events/pace/pace-8.jpg",
      "/events/pace/pace-9.jpg",
      "/events/pace/pace-10.jpg",
      "/events/pace/pace-11.jpg",
      "/events/pace/pace-12.jpg",
      "/events/pace/pace-13.jpg",
      "/events/pace/pace-14.jpg",
      "/events/pace/pace-15.jpg",
      "/events/pace/pace-16.jpg",
      "/events/pace/pace-17.jpg",
      "/events/pace/pace-18.jpg",
      "/events/pace/pace-19.jpg",
      "/events/pace/pace-20.jpg"
    ],
    shadowColor: "from-blue-600 to-cyan-600",
  },
  {
    name: "SSPS 4",
    fullName: "SPE Suez Petroleum Summit 4",
    type: "flagship",
    status: "past",
    description: "The 4th SPE Suez Petroleum Summit (SSPS 4) is a two-day event at the Engineers Syndicate – Suez, connecting petroleum engineering students with industry experts. It offers hands-on exposure in Drilling, Reservoir, and Production through technical competitions, tests, sessions, yard visits, courses, and SAGA Wesdom licenses, along with discounts on learning platforms.",
    date: "October 28-29, 2025",
    duration: "2 days",
    attendees: "200+",
    location: "Suez Engineer Syndicate",
    city: "Suez",
    color: "from-green-600 to-teal-600",
    icon: "🎓",
    logo: "/logos/ssps-logo.png",
    pastImages: [
      "/events/ssps/ssps-1.jpg",
      "/events/ssps/ssps-2.jpg",
      "/events/ssps/ssps-3.jpg",
      "/events/ssps/ssps-4.jpg",
      "/events/ssps/ssps-5.jpg",
      "/events/ssps/ssps-6.jpg",
      "/events/ssps/ssps-7.jpg",
      "/events/ssps/ssps-8.jpg"
    ],
    shadowColor: "from-green-600 to-teal-600",
  },
  {
    name: "SPEak 4",
    fullName: "SPEak Summit",
    type: "flagship",
    status: "past",
    description: "SPEak is the largest student-led career event in Egypt, organized by SPE Suez University Student Chapter. It focuses on developing soft skills, technical skills, and job-market readiness through workshops, panels, and networking opportunities. The summit hosts over 200 participants, features 25+ speakers, and provides access to internships, tools, and professional development resources.",
    date: "December 11-12, 2025",
    duration: "2 days",
    attendees: "200+",
    location: "Conference Hall of the Arab Council for Childhood & Development",
    city: "Cairo",
    color: "from-purple-600 to-pink-600",
    icon: "🎯",
    logo: "/logos/speak-logo.png",
    pastImages: [
      "/events/speak/speak-1.jpg",
      "/events/speak/speak-2.jpg",
      "/events/speak/speak-3.jpg",
      "/events/speak/speak-4.jpg",
      "/events/speak/speak-5.jpg",
      "/events/speak/speak-6.jpg",
      "/events/speak/speak-7.jpg",
      "/events/speak/speak-8.jpg",
      "/events/speak/speak-9.jpg",
      "/events/speak/speak-10.jpg",
      "/events/speak/speak-11.jpg"
    ],
    shadowColor: "from-purple-600 to-pink-600",
  },
  {
    name: "SLB Yard Visit",
    fullName: "SLB Yard Visit",
    type: "technical",
    status: "past",
    description: "SPE Suez organized a field visit to SLB facilities, allowing students to connect classroom theory with real-world oilfield operations. The visit included a safety induction, equipment walkthroughs, and an overview of how advanced technologies such as artificial intelligence and machine learning enhance efficiency and decision-making in the energy sector.",
    date: "November 20-21, 2025",
    duration: "2 days",
    attendees: "20",
    location: "SLB 6th October Yard",
    city: "Cairo",
    color: "from-amber-600 to-orange-600",
    icon: "🏭",
    logo: "/logos/slb-logo.png",
    pastImages: [
      "/events/slb/slbyard-1.jpg"
    ],
    shadowColor: "from-amber-600 to-orange-600",
  },
  {
    name: "Shell Yard Visit",
    fullName: "Shell Yard Visit",
    type: "technical",
    status: "upcoming",
    description: "The Shell yard is a cutting-edge energy facility showcasing real-world petroleum and energy operations. It features advanced equipment, operational systems, and safety protocols, offering insight into drilling, production, and sustainability practices. The site highlights the use of innovative technologies, including digitalization, automation, and data-driven solutions.",
    date: "TBA",
    duration: "1 day",
    attendees: "20",
    location: "Shell Egypt",
    city: "Cairo",
    color: "from-yellow-500 to-red-500",
    icon: "⛽",
    logo: "",
    pastImages: [
      "/events/shell/shell-1.jpg"
    ],
    shadowColor: "from-yellow-500 to-red-500",
  },
  {
    name: "Petrocamp 2",
    fullName: "Petrocamp Program",
    type: "competition",
    status: "upcoming",
    description: "PetroCamp is an intensive five-week technical program covering Geology & Geophysics, Reservoir Engineering, Production Technology, Drilling Engineering, and Process Engineering. The program combines online sessions, exams, and a final project, culminating in project presentations evaluated by industry professionals and the winners are rewarded with internships and valuable prizes.",
    date: "December 14, 2025 - February 14, 2026",
    duration: "5 weeks",
    attendees: "200+",
    location: "Online",
    city: "Online",
    color: "from-cyan-600 to-blue-600",
    icon: "📊",
    logo: "",
    pastImages: [
      "/events/petrocamp/petrocamp-1.jpg"
    ],
    shadowColor: "from-cyan-600 to-blue-600",
  },
  {
    name: "SPE Lab",
    fullName: "SPE Lab Visit",
    type: "technical",
    status: "past",
    description: "SPE Lab provides hands-on technical training in petroleum engineering, covering drilling fluids, reservoir analysis, well testing, and simulation software. Participants use industry-standard tools like Ecrin, Eclipse, and Petrel to model reservoirs and simulate production. Conducted in collaboration with SPE BUE, the program combines theory with practical lab work.",
    date: "February 15-19, 2025",
    duration: "5 days",
    attendees: "60",
    location: "The British University in Egypt",
    city: "Cairo",
    color: "from-indigo-600 to-violet-600",
    icon: "🔬",
    logo: "",
    pastImages: [
      "/events/spelab/spelab-1.jpg",
      "/events/spelab/spelab-2.jpg",
      "/events/spelab/spelab-3.jpg"
    ],
    shadowColor: "from-indigo-600 to-violet-600",
  },
  {
    name: "English Club",
    fullName: "English Club",
    type: "career",
    status: "past",
    description: "SPE Suez organized weekly English workshops designed to improve students' language skills through interactive activities. Participants practiced real-life conversations, grammar application, games, and competitions in small supportive groups, helping them build confidence, fluency, and communication skills.",
    date: "October 6 - December 16, 2025",
    duration: "10 weeks",
    attendees: "30",
    location: "Idea Space, Suez University",
    city: "Suez",
    color: "from-rose-600 to-pink-600",
    icon: "📚",
    logo: "",
    pastImages: [
      "/events/englishclub/englishclub-1.jpg",
      "/events/englishclub/englishclub-2.jpg",
      "/events/englishclub/englishclub-3.jpg",
      "/events/englishclub/englishclub-4.jpg",
      "/events/englishclub/englishclub-5.jpg",
      "/events/englishclub/englishclub-6.jpg",
      "/events/englishclub/englishclub-7.jpg"
    ],
    shadowColor: "from-rose-600 to-pink-600",
  }
] as Event[];

export default events;
