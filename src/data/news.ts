import { Users2Icon } from "lucide-react";

const newsItems = [
  {
    id: 1,
    isHot: true,
    title: "DataCamp Partnership - Free Premium Access",
    date: "15 Nov 2025",
    category: "partnership",
    image: "/news/datacamp-partnership.webp",
    links: [
      {
        title: "See more",
        url: "https://www.facebook.com/share/p/1A23UyP4Xg/",
        icon: Users2Icon,
      },
    ],
    description:
      "SPE Suez University Student Chapter is continuing its partnership with DataCamp to provide students with practical, hands-on learning opportunities in data and analytics. This renewed collaboration offers a wider range of courses, guided learning paths, and assessments designed to help students build skills at their own pace and strengthen their foundation in data-driven technologies.",
    tags: ["Partnership", "Data Science", "Learning"],
    moreDetails:
      "DataCamp Partnership Returns! This collaboration offers a wider range of courses, guided learning paths, and assessments designed to help students build skills at their own pace and strengthen their foundation in data-driven technologies.",
  },
  {
    id: 2,
    isHot: false,
    title: "PetroBowl Competition - Top 10 Worldwide",
    date: "23 Oct 2025",
    category: "achievement",
    image: "/news/petrobowl-1.jpg",
    links: [
      {
        title: "See more",
        url: "https://www.facebook.com/share/p/17zDEpro6C/",
        icon: Users2Icon,
      },
    ],
    description:
      "SPE Suez achieved a historic milestone by ranking among the Top 10 teams worldwide at PetroBowl 2025, becoming the only team from the MENA region to reach this level. After the team ranked within the Top 5 in the MENA region and represented Egypt internationally.",
    tags: ["Achievement", "Competition", "PetroBowl"],
    moreDetails:
      "This historic achievement marks SPE Suez as the only team from the MENA region to reach this level at PetroBowl 2025. The team ranked within the Top 5 in the MENA region before advancing to represent Egypt internationally.",
  },
  {
    id: 3,
    isHot: false,
    title: "ADIPEC Participation",
    date: "3 Nov 2025",
    category: "achievement",
    image: "/news/adipec-1.jpg",
    links: [
      {
        title: "See more",
        url: "https://www.facebook.com/share/p/1KYLtBdA3T/",
        icon: Users2Icon,
      },
    ],
    description:
      "SPE Suez University Student Chapter proudly represented Suez University at the 2025 SPE ADIPEC University Program in Abu Dhabi, UAE (3-5 November). The program provided an invaluable opportunity for learning, innovation, and global exposure.",
    tags: ["Conference", "ADIPEC", "International"],
    moreDetails:
      "The ADIPEC University Program provided an invaluable opportunity for learning, innovation, and global exposure. Our representatives gained insights from industry leaders and connected with students from around the world.",
  },
  {
    id: 4,
    isHot: false,
    title: "ATCE Participation",
    date: "20 Oct 2025",
    category: "achievement",
    image: "/news/atce-1.jpg",
    links: [
      {
        title: "See more",
        url: "https://www.facebook.com/share/p/14Qg2vsoeqf/",
        icon: Users2Icon,
      },
    ],
    description:
      "SPE Suez University Student Chapter proudly participated in the 2025 SPE ATCE, gaining exposure to the latest innovations, technologies, and best practices in the energy industry. The experience provided opportunities for professional development, networking with industry leaders, and learning from global experts.",
    tags: ["Conference", "ATCE", "Professional Development"],
    moreDetails:
      "Participation in ATCE strengthened our chapter's commitment to technical excellence and collaboration while reinforcing SPE's mission of connecting minds, inspiring change, and shaping the future of energy.",
  },
];

export default newsItems;
