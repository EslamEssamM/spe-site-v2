import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  AlertCircle,
  User,
  FileText,
  BookOpen,
  Calendar,
  Sparkles,
} from "lucide-react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { latestBook, Book } from "@/data/books";

// Properly initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function DrillingBookPage() {
  const [book] = useState<Book>(latestBook);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [pdfData, setPdfData] = useState<ArrayBuffer | null>(null);

  useEffect(() => {
    const loadPdf = async () => {
      setLoading(true);
      try {
        const response = await fetch(book.pdfUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        setPdfData(arrayBuffer);
        setPdfError(null);
      } catch (error) {
        console.error("PDF load error:", error);
        setPdfError(
          "Unable to load the PDF. Please check your internet connection and try again."
        );
      }
      setLoading(false);
    };

    loadPdf();
  }, [book.pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setPdfError(null);
    setLoading(false);
  };

  const onDocumentLoadError = (error = {}) => {
    console.error("PDF load error:", error);
    setPdfError(
      "Unable to load the PDF. Please check your internet connection and try again."
    );
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#050B1A]" id="home">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-transparent pointer-events-none" />
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-60 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-white/60 hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-amber-400 font-medium">Drilling Book</span>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Book Info */}
              <div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">{book.edition} • {book.year}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                  SPE Drilling
                  <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Engineering Guide
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/70 text-lg leading-relaxed mb-8"
                >
                  {book.description}
                </motion.p>

                {/* Meta Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap items-center gap-6 text-sm mb-8"
                >
                  <div className="flex items-center gap-2 text-white/60">
                    <User className="w-4 h-4 text-amber-400" />
                    <span>{book.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>{book.pageCount} pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>{book.year}</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <a href="#reader">
                    <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-lg shadow-amber-500/25">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Read Now
                    </Button>
                  </a>
                </motion.div>
              </div>

              {/* Right: Book Cover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Book shadow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-2xl blur-2xl transform translate-y-4 scale-95" />
                  
                  {/* Book cover */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-2 rounded-2xl border border-white/10 shadow-2xl">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full max-w-sm rounded-xl shadow-2xl"
                    />
                    
                    {/* Decorative corner */}
                    <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs text-center leading-tight">
                        NEW<br/>2026
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: "📚",
                title: "Comprehensive Coverage",
                description: "Full spectrum of drilling operations explained",
              },
              {
                icon: "🎯",
                title: "Easy to Understand",
                description: "Complex concepts simplified for students",
              },
              {
                icon: "🛠️",
                title: "Practical Approach",
                description: "Real-world applications and examples",
              },
              {
                icon: "🚀",
                title: "Career Roadmap",
                description: "Guide for aspiring petroleum engineers",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PDF Reader Section */}
      <section id="reader" className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Read Online</h2>
            <p className="text-white/60">Browse through the book right here in view-only mode</p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 p-4 bg-white/[0.03] border border-white/10 rounded-2xl max-w-2xl mx-auto">
            <Button
              onClick={() => setPageNumber((page) => Math.max(page - 1, 1))}
              disabled={pageNumber <= 1}
              variant="outline"
              className="border-amber-500/30 text-white hover:bg-amber-500/10 rounded-xl disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <span className="text-white font-medium px-4">
              Page <span className="text-amber-400">{pageNumber}</span> of{" "}
              <span className="text-amber-400">{numPages || "..."}</span>
            </span>
            <Button
              onClick={() =>
                setPageNumber((page) => Math.min(page + 1, numPages || 1))
              }
              disabled={pageNumber >= (numPages || 1)}
              variant="outline"
              className="border-amber-500/30 text-white hover:bg-amber-500/10 rounded-xl disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* PDF Display */}
          <div className="bg-white rounded-2xl mb-8 w-full max-w-3xl mx-auto overflow-hidden shadow-2xl">
            <div className="p-4">
              {loading ? (
                <div className="flex items-center justify-center h-[600px] bg-gray-100">
                  <div className="text-center">
                    <div className="w-10 h-10 border-3 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading your drilling guide...</p>
                  </div>
                </div>
              ) : pdfError ? (
                <div className="flex flex-col items-center justify-center h-[400px] text-red-500 p-4">
                  <AlertCircle className="w-12 h-12 mb-4" />
                  <p className="text-center mb-4">{pdfError}</p>
                  <Button
                    variant="outline"
                    className="rounded-xl"
                    onClick={() => window.location.reload()}
                  >
                    Try Again
                  </Button>
                </div>
              ) : (
                <Document
                  file={pdfData}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  className="flex flex-col items-center"
                  loading={
                    <div className="flex items-center justify-center h-[600px]">
                      <p className="text-gray-500">Loading PDF...</p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    className="max-w-full shadow-lg !w-full !min-w-0 !min-h-0"
                  />
                </Document>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <Link to="/">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-xl px-6 py-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
