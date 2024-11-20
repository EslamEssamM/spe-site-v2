import { Users2Icon } from "lucide-react";
import petroAnalystImage from "@/assets/news/petro-analys.jpg";
import dataSpeaksImage from "@/assets/news/data-speaks.jpg";
import dataCampImage from "@/assets/news/datacamp.jpg";

const newsItems = [
  {
    id: 1,
    title: "PetroAnalyst Competition 2023",
    date: "3-15 Feb 2023",
    image: petroAnalystImage,
    description:
      "The PetroAnalyst Competition in the SPE Suez Student Chapter provides students with the unique opportunity to work on real-world oil and gas data, developing essential skills in the industry. Participants engage in tasks such as exploratory data analysis, data cleaning, visualization, and advanced modeling.",
    tags: ["Data Analysis", "Oil & Gas", "Competition"],
    moreDetails:
      "This competition is designed to challenge students and provide them with hands-on experience in the field of petroleum engineering. The tasks will include working with large datasets, creating predictive models, and presenting findings to a panel of industry experts.",
  },
  {
    id: 2,
    title: "Data SPEaks",
    date: "3-15 Feb 2023",
    image: dataSpeaksImage,
    description:
      "The Data Speaks Competition in the SPE Suez Student Chapter focused on analyzing survey data about remote working trends in Australia, with participants working exclusively in Excel. Competitors were tasked with exploring, cleaning, and visualizing the data to uncover key insights into remote work dynamics. This Excel-based analysis challenge allowed students to apply their data handling and analytical skills, emphasizing practical experience with survey data and remote work trends.",
    tags: ["Data Analysis", "Oil & Gas", "Competition"],
    moreDetails:
      "Data SPEaks is an event that brings together students and professionals to discuss the latest trends and technologies in data analysis within the oil and gas industry. Attendees will have the opportunity to network, attend workshops, and learn from industry leaders.",
  },
  {
    id: 3,
    title: "Datacamp Donates",
    date: "19 Nov 2024",
    image: dataCampImage,
    isHot: true,
    links: [
      {
        title: "apply now",
        url: "https://forms.gle/jMTfSGep5Fwu32cr9",
        icon: Users2Icon,
      },
      {
        title: "read full article",
        url: "/data-camp",
        icon: Users2Icon,
      },
    ],
    description:
      "We’re beyond thrilled to announce a groundbreaking scholarship with DataCamp, a leading online learning platform for data science and analytics. This collaboration will provide selected applicants with 1 full year of access to all courses on the platform—completely free! 🎉",
    tags: ["Data Analysis", "Oil & Gas", "Competition"],
    moreDetails:
      " 💻 Why DataCamp?\n Access to 440+ courses on data science, machine learning, Python, R, SQL, and more.\n Learn from industry experts and apply your skills through real-world projects.\n Boost your employability with certificates recognized worldwide.\n 🌍 What Does This Mean for You?\n This partnership is your ticket to mastering in-demand skills, exploring new career opportunities, and becoming a leader in the digital transformation era. Whether you're a beginner or an advanced learner, DataCamp has something for everyone!\n Let’s shape tomorrow, today. Together, we’ll continue empowering the next generation of data-driven leaders! 🚀",
  },
];
export default newsItems;
