import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { BookOpen, ArrowLeft, ExternalLink, Sparkles, Filter } from "lucide-react";
import { magazines } from "@/data/magazines";
import { Link } from "@tanstack/react-router";

type FilterType = "all" | "criterion" | "echo";

export default function MagazinesList() {
  const [filter, setFilter] = useState<FilterType>("all");

  // Get latest magazine for featured section
  const latestMagazine = magazines[magazines.length - 1];
  
  // Filter magazines based on selection
  const filteredMagazines = magazines.filter((mag) => {
    if (filter === "all") return true;
    if (filter === "criterion") return mag.title.toLowerCase().includes("criterion");
    if (filter === "echo") return mag.title.toLowerCase().includes("echo");
    return true;
  }).reverse(); // Show newest first

  // Count by series
  const criterionCount = magazines.filter(m => m.title.toLowerCase().includes("criterion")).length;
  const echoCount = magazines.filter(m => m.title.toLowerCase().includes("echo")).length;

  return (
    <div className="min-h-screen bg-[#050B1A]" id="home">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#0D4C92]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#00C29A]/5 rounded-full blur-3xl" />
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
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#0D4C92]/20 text-[#00C29A] text-sm font-semibold rounded-full mb-4">
              Publications Archive
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Magazine Collection
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Explore {magazines.length} issues of student-produced magazines featuring technical articles, 
              industry insights, career development, and chapter news
            </p>
          </motion.div>

          {/* Featured Latest Magazine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-r from-[#0D4C92] to-[#0D4C92]/80 rounded-2xl overflow-hidden border border-[#0D4C92]/30">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={latestMagazine.cover}
                    alt={latestMagazine.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D4C92]/50 md:block hidden" />
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-[#00C29A] text-[#050B1A] text-xs font-bold rounded-full shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    LATEST ISSUE
                  </motion.div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                      {latestMagazine.year}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {latestMagazine.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-6 line-clamp-3">
                    {latestMagazine.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={latestMagazine.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-white text-[#0D4C92] hover:bg-white/90 font-semibold rounded-xl px-6">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read Now
                      </Button>
                    </a>
                    <a
                      href={latestMagazine.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl px-6">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <div className="flex items-center gap-2 mr-4 text-gray-400">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {[
              { key: "all" as FilterType, label: "All Issues", count: magazines.length },
              { key: "criterion" as FilterType, label: "Criterion", count: criterionCount },
              { key: "echo" as FilterType, label: "Echo", count: echoCount },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  filter === tab.key
                    ? "bg-[#0D4C92] text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  filter === tab.key ? "bg-white/20" : "bg-white/10"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Magazine Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredMagazines.map((magazine, index) => (
                <motion.div
                  key={magazine.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-[#0F1629] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#0D4C92]/50 transition-all duration-300 h-full flex flex-col">
                    {/* Cover Image */}
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <img
                        src={magazine.cover}
                        alt={`${magazine.title} cover`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1629] via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Badge className="bg-[#0D4C92]/90 backdrop-blur-sm text-white border-0 rounded-lg px-2.5 py-1 text-xs">
                          {magazine.year}
                        </Badge>
                      </div>
                      {magazine.id === latestMagazine.id && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-[#00C29A] text-[#050B1A] border-0 rounded-lg px-2.5 py-1 text-xs font-bold">
                            NEW
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow flex flex-col p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          magazine.title.toLowerCase().includes("criterion")
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-cyan-500/20 text-cyan-400"
                        }`}>
                          {magazine.title.toLowerCase().includes("criterion") ? "Criterion" : "Echo"}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold mb-2 text-white group-hover:text-[#00C29A] transition-colors">
                        {magazine.title}
                      </h2>
                      <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed line-clamp-2">
                        {magazine.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-3 border-t border-gray-800">
                        <span>{magazine.pageCount} pages</span>
                        <span>{magazine.issue}</span>
                      </div>
                      
                      <a 
                        href={magazine.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-[#0D4C92] hover:bg-[#005CB9] text-white border-0 rounded-xl py-3 text-sm font-semibold group/btn">
                          <BookOpen className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-12" />
                          Read Magazine
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredMagazines.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No magazines found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl px-6 py-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <p className="text-white/40 text-sm hidden sm:block">
              Showing {filteredMagazines.length} of {magazines.length} publications
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
