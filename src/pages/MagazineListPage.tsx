import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import { magazines } from "@/data/magazines";
import { Link } from "@tanstack/react-router";

export default function MagazinesList() {
  return (
    <div className="min-h-screen bg-[#050B1A]" id="home">
      {/* Header Section */}
      <section className="pt-32 pb-16 border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#0D4C92]" />
              <span className="text-[#0D4C92] text-sm font-medium uppercase tracking-wider">
                Publications
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Magazines
            </h1>
            <p className="text-white/60 max-w-2xl text-lg">
              Explore our collection of magazines featuring industry insights, technical articles, and chapter updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Magazine Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {magazines.map((magazine, index) => (
              <motion.div
                key={magazine.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/[0.03] border border-white/10 text-white overflow-hidden h-full flex flex-col hover:border-[#0D4C92]/50 transition-all duration-300">
                  {/* Cover Image */}
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={magazine.cover}
                      alt={`${magazine.title} cover`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-[#0D4C92] text-white border-0 rounded-xl px-3 py-1">
                      {magazine.year}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow flex flex-col p-6">
                    <h2 className="text-xl font-bold mb-2 text-white">{magazine.title}</h2>
                    <p className="text-white/60 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">
                      {magazine.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4 py-3 border-t border-white/10 text-sm">
                      <span className="text-white/40">
                        Editor: <span className="text-white/60">{magazine.editor}</span>
                      </span>
                      <span className="text-white/40">
                        {magazine.pageCount} pages
                      </span>
                    </div>
                    
                    <a 
                      href={magazine.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-[#0D4C92] hover:bg-[#005CB9] text-white border-0 rounded-xl py-4 group/btn">
                        <span className="mr-2">Read Magazine</span>
                        <BookOpen className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              {magazines.length} publications available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
