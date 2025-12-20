import { useState, useEffect } from "react";
import { useParams, Link } from "@tanstack/react-router";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ArrowLeft,
  AlertCircle,
  ExternalLink,
  User,
  FileText,
} from "lucide-react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { magazines, Magazine } from "@/data/magazines";

// Properly initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function MagazineReader() {
  const { id } = useParams({ from: "/magazine/$id" });
  const [magazine, setMagazine] = useState<Magazine | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [pdfData, setPdfData] = useState<any | null>(null);

  useEffect(() => {
    const loadPdf = async () => {
      setLoading(true);
      if (id) {
        const foundMagazine = magazines.find((mag) => mag.id === Number(id));
        if (foundMagazine) {
          setMagazine(foundMagazine);
          try {
            const response = await fetch(foundMagazine.pdfUrl);
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
        } else {
          setPdfError("Magazine not found");
        }
      }
      setLoading(false);
    };

    loadPdf();
  }, [id]);

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

  if (!magazine && !loading && !pdfError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050B1A]">
        <p className="text-white text-2xl">Magazine not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050B1A]" id="home">
      {/* Header */}
      {magazine && (
        <section className="pt-32 pb-8 border-b border-white/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Link to="/magazines" className="text-white/60 hover:text-white transition-colors">
                  Magazines
                </Link>
                <ChevronRight className="w-4 h-4 text-white/40" />
                <span className="text-white">{magazine.title}</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {magazine.title}
                  </h1>
                  <p className="text-white/60 max-w-2xl">{magazine.description}</p>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{magazine.editor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>{magazine.pageCount} pages</span>
                  </div>
                  <span className="text-[#0D4C92] font-semibold">{magazine.year}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* PDF Viewer */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          {/* Navigation Controls */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 p-4 bg-white/[0.03] border border-white/10">
            <Button
              onClick={() => setPageNumber((page) => Math.max(page - 1, 1))}
              disabled={pageNumber <= 1}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-xl disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <span className="text-white font-medium px-4">
              Page {pageNumber} of {numPages || "..."}
            </span>
            <Button
              onClick={() => setPageNumber((page) => Math.min(page + 1, numPages || 1))}
              disabled={pageNumber >= (numPages || 1)}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-xl disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* PDF Display */}
          <div className="bg-white mb-8 w-full max-w-3xl mx-auto">
            <div className="p-4">
              {loading ? (
                <div className="flex items-center justify-center h-[600px] bg-gray-100">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-[#0D4C92] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading PDF...</p>
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

          {/* Actions */}
          {!pdfError && !loading && magazine && (
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href={magazine.pdfUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl px-6 py-4">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Browser
                </Button>
              </a>
              <a href={magazine.pdfUrl} target="_blank" rel="noopener noreferrer" download>
                <Button className="bg-[#0D4C92] hover:bg-[#005CB9] text-white rounded-xl px-6 py-4">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <Link to="/magazines">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl px-6 py-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Magazines
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
