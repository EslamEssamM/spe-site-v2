import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import {
  CalendarIcon,
  BarChartIcon,
  ChevronDown,
  ChevronUp,
  Flame,
  ExternalLink,
} from "lucide-react";
import newsItems from "@/data/news";

export function NewsSectionComponent() {
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  const hotNews = newsItems.find((item) => item.isHot);
  const regularNews = newsItems.filter((item) => !item.isHot);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Latest News
        </h2>

        {hotNews && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-r from-blue-800 to-blue-600 text-white overflow-hidden">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/2 lg:w-2/5">
                    <img
                      src={hotNews.image}
                      alt={hotNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 lg:w-3/5 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-3xl font-bold flex items-center">
                          <Flame className="w-8 h-8 mr-2 text-blue-300" />
                          {hotNews.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="bg-blue-300 text-blue-900"
                        >
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {hotNews.date}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotNews.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-blue-200 border-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <p className="mb-6 text-white text-lg">
                      {hotNews.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {hotNews.links?.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="secondary"
                            className="flex items-center bg-blue-300 text-blue-900 hover:bg-blue-200"
                          >
                            {link.icon && (
                              <link.icon className="w-4 h-4 mr-2" />
                            )}
                            {link.title}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      ))}
                      {hotNews.moreDetails && (
                        <Button
                          variant="secondary"
                          className="flex items-center bg-blue-300 text-blue-900 hover:bg-blue-200"
                          onClick={() => handleToggle(hotNews.id)}
                        >
                          <BarChartIcon className="w-4 h-4 mr-2" />
                          Learn More
                          {expandedItemId === hotNews.id ? (
                            <ChevronUp className="w-4 h-4 ml-2" />
                          ) : (
                            <ChevronDown className="w-4 h-4 ml-2" />
                          )}
                        </Button>
                      )}
                    </div>
                    <AnimatePresence>
                      {expandedItemId === hotNews.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-white"
                        >
                          <p>{hotNews.moreDetails}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-8">
          {regularNews.map((item, index) => (
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
                        {item.links?.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              className="flex items-center"
                            >
                              {link.icon && (
                                <link.icon className="w-4 h-4 mr-2" />
                              )}
                              {link.title}
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </a>
                        ))}
                        {item.moreDetails && (
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
                        )}
                      </div>
                      <AnimatePresence>
                        {expandedItemId === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 text-gray-300"
                          >
                            <p>{item.moreDetails}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
