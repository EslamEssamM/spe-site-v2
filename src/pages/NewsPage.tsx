"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import {
  CalendarIcon,
  ChevronDown,
  ChevronUp,
  Flame,
  ExternalLink,
  ArrowLeft,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";
import newsItems from "@/data/news";

export default function NewsPage() {
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleToggle = (id: number) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  // Get all unique tags
  const allTags = Array.from(new Set(newsItems.flatMap(item => item.tags)));

  // Filter news items
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || item.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const hotNews = filteredNews.find((item) => item.isHot);
  const regularNews = filteredNews.filter((item) => !item.isHot);

  return (
    <div className="min-h-screen bg-[#050B1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#0D4C92]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#00C29A]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-6">
              Stay Updated
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 font-[Poppins]">
              News & Updates
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Stay informed about our latest events, partnerships, achievements, and opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#0a1628] sticky top-20 z-30 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#050B1A] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#0D4C92]"
              />
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-5 h-5 text-white/40" />
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedTag
                    ? "bg-[#0D4C92] text-white"
                    : "bg-[#050B1A] text-white/60 hover:text-white border border-white/10"
                }`}
              >
                All
              </button>
              {allTags.slice(0, 5).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    tag === selectedTag
                      ? "bg-[#00C29A] text-white"
                      : "bg-[#050B1A] text-white/60 hover:text-white border border-white/10"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 lg:py-20 bg-[#050B1A]">
        <div className="container mx-auto px-6">
          {/* Featured/Hot News */}
          {hotNews && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Flame className="w-6 h-6 text-[#FFC857]" />
                Featured News
              </h2>
              <div className="bg-gradient-to-r from-[#0D4C92] to-[#0D4C92]/80 rounded-3xl overflow-hidden border border-[#0D4C92]/30">
                <div className="lg:flex">
                  <div className="lg:w-2/5 relative">
                    <img
                      src={hotNews.image}
                      alt={hotNews.title}
                      className="w-full h-72 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFC857] text-[#0F172A] text-xs font-bold rounded-full">
                        <Flame className="w-3.5 h-3.5" />
                        HOT
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        {hotNews.date}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                      {hotNews.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-6">
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

                    <p className="text-white/80 leading-relaxed mb-8 text-lg">
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
                          Read Full Story
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
                          className="mt-8 pt-8 border-t border-white/20"
                        >
                          <p className="text-white/70 whitespace-pre-line leading-relaxed">{hotNews.moreDetails}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* All News Grid */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">
              {selectedTag ? `${selectedTag} News` : "All News"}
              <span className="text-white/40 text-lg font-normal ml-2">({regularNews.length} articles)</span>
            </h2>
            
            {regularNews.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-white/50 text-lg">No news found matching your criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-[#0a1628] rounded-2xl overflow-hidden border border-white/10 hover:border-[#0D4C92]/50 transition-all duration-300 h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#050B1A]/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            <CalendarIcon className="w-3.5 h-3.5" />
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-2 mb-4">
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

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C29A] transition-colors duration-200 line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-3 items-center mt-auto">
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
                              className="inline-flex items-center gap-2 text-white/40 font-medium text-sm hover:text-white transition-colors duration-200 ml-auto"
                              onClick={() => handleToggle(item.id)}
                            >
                              {expandedItemId === item.id ? "Less" : "More"}
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
                              className="mt-6 pt-6 border-t border-white/10"
                            >
                              <p className="text-white/50 text-sm whitespace-pre-line">{item.moreDetails}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
