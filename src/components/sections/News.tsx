import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import {
  CalendarIcon,
  Users2Icon,
  BarChartIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import petroAnalystImage from "@/assets/news/petro-analys.jpg";
import dataSpeaksImage from "@/assets/news/data-speaks.jpg";

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
      "The PetroAnalyst Competition in the SPE Suez Student Chapter provides students with the unique opportunity to work on real-world oil and gas data, developing essential skills in the industry. Participants engage in tasks such as exploratory data analysis, data cleaning, visualization, and advanced modeling.",
    tags: ["Data Analysis", "Oil & Gas", "Competition"],
    moreDetails:
      "Data SPEaks is an event that brings together students and professionals to discuss the latest trends and technologies in data analysis within the oil and gas industry. Attendees will have the opportunity to network, attend workshops, and learn from industry leaders.",
  },
  // Add more news items here as needed
];

export function NewsSectionComponent() {
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Latest News
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 text-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-2xl font-bold">
                            {item.title}
                          </CardTitle>
                          <Badge
                            variant="secondary"
                            className="bg-blue-600 text-white"
                          >
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            {item.date}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-blue-300 border-blue-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <p className="mb-6 text-gray-300">{item.description}</p>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="outline" className="flex items-center">
                          <Users2Icon className="w-4 h-4 mr-2" />
                          Register Now
                        </Button>
                        <Button
                          variant="outline"
                          className="flex items-center"
                          onClick={() => handleToggle(item.id)}
                        >
                          <BarChartIcon className="w-4 h-4 mr-2" />
                          Learn More
                          {expandedItemId === item.id ? (
                            <ChevronUp className="w-4 h-4 ml-2" />
                          ) : (
                            <ChevronDown className="w-4 h-4 ml-2" />
                          )}
                        </Button>
                      </div>
                      {expandedItemId === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-gray-300"
                        >
                          <p>{item.moreDetails}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
