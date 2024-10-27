import { useState, useEffect } from "react";
import { useParams, Link } from "@tanstack/react-router";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Properly initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
const magazines = [
  {
    id: 1,
    title: "Petro Insights",
    year: 2023,
    cover: "/placeholder.svg?height=400&width=300",
    pdfUrl: "/pdfs/Criterion1.pdf",
    description:
      "Exploring cutting-edge technologies in petroleum engineering.",
    editor: "Dr. Jane Smith",
    pageCount: 32,
  },
];

export default function MagazineReader() {
  const { id } = useParams({ from: "/magazines/$id" });
  const [magazine, setMagazine] = useState<any>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState(1.5);
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
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-white text-2xl">Magazine not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {magazine && (
            <Card className="bg-gray-800 text-white mb-8">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl font-bold mb-2">
                      {magazine.title}
                    </CardTitle>
                    <p className="text-xl text-gray-400">{magazine.year}</p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    {magazine.pageCount} pages
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{magazine.description}</p>
                <p className="text-sm text-gray-400">
                  Editor: {magazine.editor}
                </p>
              </CardContent>
            </Card>
          )}

          <Card className="bg-white mb-8">
            <CardContent className="p-4">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-500">Loading PDF...</p>
                </div>
              ) : pdfError ? (
                <div className="flex flex-col items-center justify-center text-red-500 p-4">
                  <AlertCircle className="w-12 h-12 mb-2" />
                  <p>{pdfError}</p>
                  <Button
                    variant="outline"
                    className="mt-4"
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
                    <div className="flex items-center justify-center h-64">
                      <p className="text-gray-500">Loading PDF...</p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    className="max-w-full shadow-lg"
                    scale={scale}
                  />
                </Document>
              )}
            </CardContent>
          </Card>

          {!pdfError && !loading && magazine && (
            <>
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <Button
                  onClick={() => setPageNumber((page) => Math.max(page - 1, 1))}
                  disabled={pageNumber <= 1}
                  variant="outline"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <span className="text-white">
                  Page {pageNumber} of {numPages}
                </span>
                <Button
                  onClick={() =>
                    setPageNumber((page) => Math.min(page + 1, numPages || 1))
                  }
                  disabled={pageNumber >= (numPages || 1)}
                  variant="outline"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <Card className="bg-gray-800 text-white mb-8">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <ZoomOut className="w-4 h-4 mr-2" />
                      <Slider
                        value={[scale]}
                        min={0.5}
                        max={2}
                        step={0.1}
                        onValueChange={(value) => setScale(value[0])}
                        className="w-40"
                      />
                      <ZoomIn className="w-4 h-4 ml-2" />
                    </div>
                    <a
                      href={magazine.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Button variant="outline" className="flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <div className="text-center">
            <Link to="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Magazines
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
