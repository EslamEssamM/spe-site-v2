// src/data/magazines.ts

export interface Magazine {
  id: number;
  title: string;
  year: number;
  cover: string;
  pdfUrl: string;
  description: string;
  editor: string;
  pageCount: number;
  color?: string;
}

export const magazines: Magazine[] = [
  // Criterion Series
  {
    id: 1,
    title: "Criterion - Issue 1",
    year: 2020,
    cover: "/pdfs/Criterion/covers/Criterion1.webp",
    pdfUrl: "/pdfs/Criterion/Criterion1.pdf",
    description:
      "An introductory exploration of the oil and gas sector, focusing on upstream activities and the industry's challenges in the new decade.",
    editor: "SPE Team",
    pageCount: 32,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Criterion - Issue 2",
    year: 2021,
    cover: "/pdfs/Criterion/covers/Criterion2.webp",
    pdfUrl: "/pdfs/Criterion/Criterion2.pdf",
    description:
      "Dives into reservoir engineering advancements, discussing new technologies that enhance efficiency and reduce environmental impact.",
    editor: "SPE Team",
    pageCount: 36,
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Criterion - Issue 3",
    year: 2022,
    cover: "/pdfs/Criterion/covers/Criterion-Issue-3.webp",
    pdfUrl: "/pdfs/Criterion/Criterion-Issue-3.pdf",
    description:
      "Focuses on digital transformation in oil and gas, exploring the role of data analytics, AI, and IoT in optimizing operations.",
    editor: "SPE Team",
    pageCount: 36,
    color: "from-purple-500 to-pink-600",
  },

  // Echo Series
  {
    id: 6,
    title: "Echo - Issue 1",
    year: 2009,
    cover: "/pdfs/Echo/covers/ECHO1.webp",
    pdfUrl: "/pdfs/Echo/ECHO1.pdf",
    description:
      "Examines the global energy market, covering both traditional and renewable energy sources and their roles in the evolving energy landscape.",
    editor: "SPE Team",
    pageCount: 20,
    color: "from-blue-600 to-cyan-700",
  },
  {
    id: 7,
    title: "Echo - Issue 2",
    year: 2010,
    cover: "/pdfs/Echo/covers/ECHO2.webp",
    pdfUrl: "/pdfs/Echo/ECHO2.pdf",
    description:
      "Explores innovations in drilling technology and techniques aimed at enhancing safety and reducing operational costs.",
    editor: "SPE Team",
    pageCount: 28,
    color: "from-green-600 to-teal-700",
  },
  {
    id: 8,
    title: "Echo - Issue 3",
    year: 2011,
    cover: "/pdfs/Echo/covers/ECHO3.webp",
    pdfUrl: "/pdfs/Echo/ECHO3.pdf",
    description:
      "Focuses on environmental challenges, highlighting new regulations and best practices for reducing the ecological footprint of energy production.",
    editor: "SPE Team",
    pageCount: 28,
    color: "from-yellow-600 to-orange-700",
  },
  {
    id: 9,
    title: "Echo - Issue 4",
    year: 2012,
    cover: "/pdfs/Echo/covers/ECHO4.webp",
    pdfUrl: "/pdfs/Echo/ECHO4.pdf",
    description:
      "Presents case studies on energy efficiency improvements and shares expert insights on future industry innovations.",
    editor: "SPE Team",
    pageCount: 28,
    color: "from-red-600 to-pink-700",
  },
  {
    id: 10,
    title: "Echo - Issue 5",
    year: 2013,
    cover: "/pdfs/Echo/covers/ECHO5.webp",
    pdfUrl: "/pdfs/Echo/ECHO5.pdf",
    description:
      "Analyzes global energy policies and the role of renewables in shaping energy security for the future.",
    editor: "SPE Team",
    pageCount: 28,
    color: "from-purple-600 to-indigo-700",
  },
  {
    id: 11,
    title: "Echo - Issue 6",
    year: 2014,
    cover: "/pdfs/Echo/covers/ECHO6.webp",
    pdfUrl: "/pdfs/Echo/ECHO6.pdf",
    description:
      "Explores new technologies in carbon capture and storage (CCS) and their potential for large-scale emission reductions.",
    editor: "SPE Team",
    pageCount: 28,
    color: "from-blue-600 to-purple-600",
  },
  {
    id: 12,
    title: "Echo - Issue 7",
    year: 2015,
    cover: "/pdfs/Echo/covers/ECHO7.webp",
    pdfUrl: "/pdfs/Echo/ECHO7.pdf",
    description:
      "Highlights advancements in offshore drilling and the engineering innovations designed to maximize resource extraction in deep waters.",
    editor: "SPE Team",
    pageCount: 28,
    color: "from-teal-600 to-green-700",
  },
  {
    id: 13,
    title: "Echo - Issue 8",
    year: 2016,
    cover: "/pdfs/Echo/covers/ECHO8.webp",
    pdfUrl: "/pdfs/Echo/ECHO8.pdf",
    description:
      "Discusses the impact of renewable energy on traditional markets and the economic shifts driven by clean technology.",
    editor: "SPE Team",
    pageCount: 28,
    color: "from-orange-600 to-yellow-600",
  },
  {
    id: 14,
    title: "Echo - Issue 9",
    year: 2017,
    cover: "/pdfs/Echo/covers/ECHO9.webp",
    pdfUrl: "/pdfs/Echo/ECHO9.pdf",
    description:
      "Focuses on safety innovations in energy production, including automation and the Internet of Things (IoT) for monitoring hazards.",
    editor: "SPE Team",
    pageCount: 28,
    color: "from-red-500 to-purple-700",
  },
  {
    id: 15,
    title: "Echo - Issue 10",
    year: 2018,
    cover: "/pdfs/Echo/covers/ECHO10.webp",
    pdfUrl: "/pdfs/Echo/ECHO10.pdf",
    description:
      "An exploration of the emerging hydrogen economy, examining the latest projects and policies supporting hydrogen as a clean fuel.",
    editor: "SPE Team",
    pageCount: 32,
    color: "from-purple-500 to-blue-700",
  },
  {
    id: 16,
    title: "Echo - Issue 11",
    year: 2019,
    cover: "/pdfs/Echo/covers/ECHO11.webp",
    pdfUrl: "/pdfs/Echo/ECHO11.pdf",
    description:
      "Provides a review of the global petroleum engineering education landscape and trends in workforce development for the energy sector.",
    editor: "SPE Team",
    pageCount: 36,
    color: "from-teal-500 to-green-700",
  },
  {
    id: 17,
    title: "Echo - Issue 12",
    year: 2020,

    cover: "/pdfs/Echo/covers/ECHO12.jpeg",
    pdfUrl: "/pdfs/Echo/ECHO12.pdf",
    description:
      "Insights on advanced geophysical methods and their role in improving accuracy and efficiency in resource exploration.",
    editor: "SPE Team",
    pageCount: 36,
    color: "from-orange-500 to-yellow-600",
  },
  {
    id: 18,
    title: "Echo - Issue 13",
    year: 2021,
    cover: "/pdfs/Echo/covers/ECHO13.webp",
    pdfUrl: "/pdfs/Echo/ECHO13.pdf",
    description:
      "Discusses breakthroughs in unconventional resources and technologies that are pushing the limits of extraction and recovery.",
    editor: "SPE Team",
    pageCount: 40,
    color: "from-red-600 to-pink-700",
  },
  {
    id: 19,
    title: "Echo - Issue 14",
    year: 2022,
    cover: "/pdfs/Echo/covers/ECHO14.webp",
    pdfUrl: "/pdfs/Echo/ECHO14.pdf",
    description:
      "Analyzes the impact of AI and machine learning on predictive maintenance and decision-making in energy operations.",
    editor: "SPE Team",
    pageCount: 36,
    color: "from-blue-600 to-purple-700",
  },
  // add 15 16
  {
    id: 20,
    title: "Echo - Issue 15",
    year: 2023,
    cover: "/pdfs/Echo/covers/ECHO15.webp",
    pdfUrl: "/pdfs/Echo/ECHO15.pdf",
    description:
      "Focuses on the role of digital twins in energy production, exploring their applications in asset management and optimization.",
    editor: "SPE Team",
    pageCount: 36,
    color: "from-teal-600 to-green-700",
  },
  {
    id: 21,
    title: "Echo - Issue 16",
    year: 2024,
    cover: "/pdfs/Echo/covers/ECHO16.webp",
    pdfUrl: "/pdfs/Echo/ECHO16.pdf",
    description:
      "Examines the future of energy storage technologies and their potential to revolutionize the power grid and energy distribution.",
    editor: "SPE Team",
    pageCount: 40,
    color: "from-orange-600 to-yellow-700",
  },
  // {
  //   id: 4,
  //   title: "Criterion - Issue 5",
  //   year: 2023,
  //   issue: "Special Issue",
  //   cover: "/pdfs/Criterion/covers/Criterion-New.webp",
  //   pdfUrl: "/pdfs/Criterion/Criterion-New.pdf",
  //   description:
  //     "A special issue dedicated to sustainable practices in petroleum engineering, with insights into renewable integration and carbon management.",
  //   editor: "SPE Team",
  //   pageCount: 42,
  //   color: "from-yellow-500 to-orange-600",
  // },
  {
    id: 5,
    title: "Criterion - Issue 4",
    year: 2023,
    cover: "/pdfs/Criterion/covers/Criterion4.webp",
    pdfUrl: "/pdfs/Criterion/Criterion4.pdf",
    description:
      "Explores the economic and geopolitical landscape impacting oil and gas, providing an in-depth analysis of market trends.",
    editor: "SPE Team",
    pageCount: 32,
    color: "from-red-500 to-purple-600",
  },
  {
    id: 22,
    title: "Echo - Issue 17",
    year: 2025,
    cover: "/pdfs/Echo/covers/ECHO17.webp",
    pdfUrl: "/pdfs/Echo/ECHO17.pdf",
    description:
      "Explores the role of leadership and volunteering in the energy sector, featuring interviews with industry leaders and insights into digital optimization solutions.",
    editor: "SPE Team",
    pageCount: 23,
    color: "from-purple-600 to-blue-700",
  },
  {
    id: 23,
    title: "Criterion - Issue 6",
    year: 2025,
    cover: "/pdfs/Criterion/covers/Criterion6.jpeg",
    pdfUrl: "/pdfs/Criterion/Criterion6.pdf",
    description:
      "A leadership and career growth special issue exploring career development, leadership, energy innovations like geothermal expansion, AI-driven business strategies, and professional interviews for the next generation of energy and business professionals.",
    editor: "SPE Team",
    pageCount: 40,
    color: "from-indigo-500 to-cyan-600",
  },
];

// top magazins (5) from end of the array
export const topMagazines = magazines.slice(-5);
