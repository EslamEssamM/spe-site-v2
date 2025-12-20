import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import {
  CalendarIcon,
  ChevronDown,
  ChevronUp,
  Flame,
  ExternalLink,
  ArrowRight,
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
    <section id="news" className="py-20 lg:py-28 bg-[#050B1A]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
            Stay Updated
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Stay informed about our latest events, partnerships, and achievements
          </p>
        </motion.div>

        {/* Featured/Hot News */}
        {hotNews && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-[#0D4C92] to-[#0D4C92]/80 rounded-2xl overflow-hidden border border-[#0D4C92]/30">
              <div className="lg:flex">
                <div className="lg:w-2/5">
                  <img
                    src={hotNews.image}
                    alt={hotNews.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-3/5 p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFC857] text-[#0F172A] text-xs font-bold rounded-full">
                      <Flame className="w-3.5 h-3.5" />
                      HOT
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {hotNews.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {hotNews.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotNews.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-white/80 border-white/30 bg-white/5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-white/80 leading-relaxed mb-6">
                    {hotNews.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {hotNews.links?.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target={link.url.startsWith("/") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-white text-[#0D4C92] hover:bg-white/90 font-semibold">
                          {link.title}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    ))}
                    {hotNews.moreDetails && (
                      <Button
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                        onClick={() => handleToggle(hotNews.id)}
                      >
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
                        className="mt-6 pt-6 border-t border-white/20"
                      >
                        <p className="text-white/70 whitespace-pre-line">{hotNews.moreDetails}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#0F1629] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#0D4C92]/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#050B1A]/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-[#00C29A] border-[#00C29A]/30 bg-[#00C29A]/10 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C29A] transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.links?.slice(0, 1).map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target={link.url.startsWith("/") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#0D4C92] font-semibold text-sm hover:text-[#00C29A] transition-colors duration-200"
                      >
                        {link.title}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ))}
                    {item.moreDetails && (
                      <button
                        className="inline-flex items-center gap-2 text-gray-400 font-medium text-sm hover:text-white transition-colors duration-200 ml-auto"
                        onClick={() => handleToggle(item.id)}
                      >
                        Details
                        {expandedItemId === item.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {expandedItemId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-800"
                      >
                        <p className="text-gray-400 text-sm whitespace-pre-line">{item.moreDetails}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
