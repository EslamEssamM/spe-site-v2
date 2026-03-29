import { motion } from "framer-motion";
import { BookOpen, Download, ArrowRight, Sparkles, FileText, User } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { latestBook } from "@/data/books";

export default function DrillingBookSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#050B1A] overflow-hidden relative">
      {/* Background gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            New Release
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            SPE Drilling Book
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Your comprehensive guide to mastering drilling engineering, curated by the SPE Suez Student Chapter
          </p>
        </motion.div>

        {/* Book Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-[#0F1629] rounded-3xl overflow-hidden border border-gray-800">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Cover Image */}
              <div className="relative bg-gradient-to-br from-amber-500/20 to-orange-500/10 p-8 lg:p-12 flex items-center justify-center">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <span className="text-white font-bold text-xs text-center leading-tight">
                    1st<br/>Edition
                  </span>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Book shadow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-xl blur-xl transform translate-y-4 scale-95" />
                  <img
                    src={latestBook.cover}
                    alt={latestBook.title}
                    className="relative w-full max-w-[280px] rounded-xl shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full">
                    {latestBook.year}
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">
                    {latestBook.edition}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {latestBook.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {latestBook.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>{latestBook.pageCount} pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <User className="w-4 h-4 text-amber-400" />
                    <span>{latestBook.author}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/drilling-book"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-amber-500/25"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Online
                  </Link>
                  <a
                    href={latestBook.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-amber-500/50 text-white rounded-xl font-semibold transition-colors duration-200"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View Full Page Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/drilling-book"
            className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:gap-3 transition-all duration-200"
          >
            View Full Book Details
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
