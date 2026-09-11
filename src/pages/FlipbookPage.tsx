import { useState, useEffect, useRef, useCallback, forwardRef } from "react";
import { useParams, Link } from "@tanstack/react-router";
import { pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ArrowLeft,
  AlertCircle,
  Maximize2,
  RotateCcw,
  BookOpen,
  X,
  Home,
  User,
  FileText,
} from "lucide-react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { magazines, Magazine } from "@/data/magazines";
import { cn } from "@/utils/css";

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

// Page component for the flipbook
interface PageCoverProps {
  children: React.ReactNode;
  className?: string;
}

const PageCover = forwardRef<HTMLDivElement, PageCoverProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "page page-cover bg-gradient-to-br from-[#0D4C92] via-[#1a5da8] to-[#0a3d75] flex items-center justify-center",
          className
        )}
        data-density="hard"
      >
        {children}
      </div>
    );
  }
);
PageCover.displayName = "PageCover";

interface PageContentProps {
  children: React.ReactNode;
  number?: number;
}

const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  ({ children, number }, ref) => {
    return (
      <div ref={ref} className="page bg-white relative overflow-hidden">
        <div className="page-content w-full h-full">{children}</div>
        {number && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium">
            {number}
          </div>
        )}
      </div>
    );
  }
);
PageContent.displayName = "PageContent";

export default function FlipbookViewer() {
  const { id } = useParams({ from: "/magazine/$id" });
  const [magazine, setMagazine] = useState<Magazine | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  const [pageImages, setPageImages] = useState<string[]>([]);
  const [renderingPages, setRenderingPages] = useState(false);

  const flipBookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load PDF data
  useEffect(() => {
    const loadPdf = async () => {
      setLoading(true);
      if (id) {
        const foundMagazine = magazines.find((mag) => mag.id === Number(id));
        if (foundMagazine) {
          setMagazine(foundMagazine);
          
          // Load and render PDF pages
          try {
            setRenderingPages(true);
            const response = await fetch(foundMagazine.pdfUrl);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
            
            setNumPages(pdf.numPages);
            const images: string[] = [];
            
            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const scale = 2;
              const viewport = page.getViewport({ scale });
              
              const canvas = document.createElement("canvas");
              const context = canvas.getContext("2d");
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              if (context) {
                await page.render({
                  canvasContext: context,
                  viewport: viewport,
                }).promise;

                images.push(canvas.toDataURL("image/jpeg", 0.9));
              }
              
              // Update progress
              setPageImages([...images]);
            }

            setPageImages(images);
            setPdfError(null);
          } catch (error) {
            console.error("PDF load error:", error);
            setPdfError(
              "Unable to load the PDF. Please check your internet connection and try again."
            );
          }
          setRenderingPages(false);
        } else {
          setPdfError("Magazine not found");
        }
      }
      setLoading(false);
    };

    loadPdf();
  }, [id]);

  // Navigation functions
  const goToPage = (pageNum: number) => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(pageNum);
    }
  };

  const nextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const onFlip = useCallback(
    (e: { data: number }) => {
      setCurrentPage(e.data);
    },
    []
  );

  // Fullscreen handling
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const nextWidth = window.innerWidth;
      // Ignore tiny mobile viewport width changes that happen during gestures/UI chrome animation.
      setViewportWidth((prevWidth) =>
        Math.abs(prevWidth - nextWidth) > 8 ? nextWidth : prevWidth
      );
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextPage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevPage();
      } else if (e.key === "Escape" && isFullscreen) {
        document.exitFullscreen();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  // Calculate reader dimensions
  const getFlipbookDimensions = () => {
    const isMobile = viewportWidth < 768;
    const horizontalPadding = isFullscreen ? 32 : 24;
    const availableWidth = Math.max(260, viewportWidth - horizontalPadding * 2);

    if (isMobile) {
      const width = Math.min(availableWidth, 430);
      const height = Math.round(width * 1.45);
      return {
        width,
        height,
      };
    }

    const baseWidth = isFullscreen ? 620 : 500;
    const baseHeight = isFullscreen ? 860 : 680;
    return {
      width: baseWidth,
      height: baseHeight,
    };
  };

  const dimensions = getFlipbookDimensions();
  const isMobileViewport = viewportWidth < 768;

  if (!magazine && !loading && !pdfError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050B1A]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <BookOpen className="w-16 h-16 text-white/40 mx-auto mb-4" />
          <p className="text-white text-2xl mb-4">Magazine not found</p>
          <Link to="/magazines">
            <Button className="bg-[#0D4C92] hover:bg-[#005CB9]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Magazines
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "min-h-screen bg-gradient-to-b from-[#030810] via-[#050B1A] to-[#0a1628]",
        isFullscreen && "fixed inset-0 z-50"
      )}
    >

      {/* Header */}
      {magazine && !isFullscreen && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-28 pb-6 border-b border-white/5"
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Link
                to="/"
                className="text-white/40 hover:text-white transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/20" />
              <Link
                to="/magazines"
                className="text-white/40 hover:text-white transition-colors"
              >
                Magazines
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/20" />
              <span className="text-[#0D4C92]">Magazine Reader</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br",
                      magazine.color || "from-blue-500 to-indigo-600"
                    )}
                  >
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    {magazine.title}
                  </h1>
                </div>
                <p className="text-white/50 text-sm max-w-xl line-clamp-2">
                  {magazine.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-white/40">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <User className="w-3.5 h-3.5" />
                  <span>{magazine.editor}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <FileText className="w-3.5 h-3.5" />
                  <span>{magazine.pageCount} pages</span>
                </div>
                <div className="bg-[#0D4C92]/20 text-[#0D4C92] px-3 py-1.5 rounded-full font-semibold">
                  {magazine.year}
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      )}

      {/* Main Content */}
      <main
        className={cn(
          "py-8",
          isFullscreen && "h-full flex flex-col items-center justify-center"
        )}
      >
        <div className="container mx-auto px-4">
          {/* Loading State */}
          {(loading || renderingPages) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center min-h-[500px]"
            >
              <div className="relative">
                <div className="w-20 h-20 border-4 border-[#0D4C92]/20 rounded-full"></div>
                <div className="absolute inset-0 w-20 h-20 border-4 border-[#0D4C92] border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-white/60 mt-6 text-lg">
                {renderingPages
                  ? `Preparing magazine... ${pageImages.length}/${numPages} pages`
                  : "Loading magazine..."}
              </p>
              {magazine && (
                <a
                  href={magazine.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-5"
                >
                  <Button className="bg-gradient-to-r from-[#0D4C92] to-[#005CB9] hover:from-[#005CB9] hover:to-[#0D4C92] text-white rounded-xl px-6">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
              )}
              {renderingPages && (
                <div className="w-64 h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#0D4C92] to-[#005CB9] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(pageImages.length / numPages) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </motion.div>
          )}

          {/* Error State */}
          {pdfError && !loading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center max-w-md">
                <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <p className="text-red-400 mb-4">{pdfError}</p>
                <div className="flex gap-3 justify-center">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => window.location.reload()}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  {magazine && (
                    <a
                      href={magazine.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Button className="bg-gradient-to-r from-[#0D4C92] to-[#005CB9] hover:from-[#005CB9] hover:to-[#0D4C92] text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  )}
                  <Link to="/magazines">
                    <Button className="bg-[#0D4C92] hover:bg-[#005CB9]">
                      Back to Magazines
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Flipbook Viewer */}
          {!loading && !pdfError && pageImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Fullscreen Close Button */}
              {isFullscreen && (
                <div className="fixed top-4 right-4 z-50">
                  <Button
                    onClick={() => document.exitFullscreen()}
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-xl border border-white/20 bg-black/45 text-white/90 backdrop-blur-xl hover:bg-black/65 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {/* Flipbook Container with Side Navigation */}
              <div className="flex items-center justify-center gap-4 lg:gap-8">
                {/* Left Navigation Arrow */}
                <Button
                  onClick={prevPage}
                  disabled={currentPage <= 0}
                  variant="ghost"
                  className="hidden md:flex h-16 w-16 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 disabled:opacity-20 disabled:hover:bg-transparent transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Flipbook */}
                  <div className="relative">
                    {/* Book shadow */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] h-12 bg-black/60 blur-2xl rounded-full" />

                    {/* Book container with 3D effect */}
                    <div
                      className="relative"
                      style={{
                        perspective: "2500px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                    {/* @ts-ignore */}
                    <HTMLFlipBook
                      ref={flipBookRef}
                      width={dimensions.width}
                      height={dimensions.height}
                      size={isMobileViewport ? "fixed" : "stretch"}
                      minWidth={260}
                      maxWidth={800}
                      minHeight={360}
                      maxHeight={1000}
                      maxShadowOpacity={0.5}
                      showCover={true}
                      mobileScrollSupport={true}
                      onFlip={onFlip}
                      className="flipbook-shadow"
                      style={{}}
                      startPage={0}
                      drawShadow={true}
                      flippingTime={600}
                      usePortrait={true}
                      startZIndex={0}
                      autoSize={!isMobileViewport}
                      clickEventForward={true}
                      useMouseEvents={true}
                      swipeDistance={30}
                      showPageCorners={true}
                      disableFlipByClick={false}
                    >
                      {pageImages.map((img, index) => (
                        <div key={index} className="page-wrapper">
                          {index === 0 ? (
                            <PageCover className={magazine?.color}>
                              <div className="text-center p-6">
                                <img
                                  src={img}
                                  alt={`Cover`}
                                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                                />
                              </div>
                            </PageCover>
                          ) : (
                            <PageContent number={index + 1}>
                              <img
                                src={img}
                                alt={`Page ${index + 1}`}
                                className="w-full h-full object-contain"
                              />
                            </PageContent>
                          )}
                        </div>
                      ))}
                    </HTMLFlipBook>
                  </div>
                </div>
              </div>

                {/* Right Navigation Arrow */}
                <Button
                  onClick={nextPage}
                  disabled={currentPage >= pageImages.length - 1}
                  variant="ghost"
                  className="hidden md:flex h-16 w-16 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 disabled:opacity-20 disabled:hover:bg-transparent transition-all duration-300 shadow-lg"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </div>

              {/* Page Counter */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-3 px-6 py-2.5 bg-white/5 rounded-full border border-white/10">
                  <span className="text-white font-semibold text-lg">
                    {currentPage + 1}
                  </span>
                  <span className="text-white/30">/</span>
                  <span className="text-white/50 text-lg">
                    {pageImages.length}
                  </span>
                </div>
              </div>

              {/* Fullscreen Action */}
              {!isFullscreen && (
                <div className="flex justify-center mt-4">
                  <Button
                    onClick={toggleFullscreen}
                    className="rounded-xl px-6 bg-gradient-to-r from-[#0D4C92] to-[#005CB9] hover:from-[#005CB9] hover:to-[#0D4C92] text-white shadow-lg shadow-[#0D4C92]/25"
                  >
                    <Maximize2 className="w-4 h-4 mr-2" />
                    Open in Fullscreen
                  </Button>
                </div>
              )}

              {/* Mobile Navigation (visible on small screens) */}
              <div className="flex md:hidden items-center justify-center gap-4 mt-4">
                <Button
                  onClick={prevPage}
                  disabled={currentPage <= 0}
                  variant="outline"
                  className="h-12 px-6 border-white/20 text-white hover:bg-white/10 disabled:opacity-30 rounded-xl"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Prev
                </Button>
                <Button
                  onClick={nextPage}
                  disabled={currentPage >= pageImages.length - 1}
                  variant="outline"
                  className="h-12 px-6 border-white/20 text-white hover:bg-white/10 disabled:opacity-30 rounded-xl"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>

              {/* Quick Navigation Dots */}
              <div className="flex justify-center mt-6 gap-1.5 flex-wrap max-w-2xl mx-auto">
                {pageImages.slice(0, 30).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      currentPage === index
                        ? "bg-[#0D4C92] w-6"
                        : "bg-white/20 hover:bg-white/40"
                    )}
                  />
                ))}
                {pageImages.length > 30 && (
                  <span className="text-white/40 text-xs ml-2">
                    +{pageImages.length - 30} more
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer Actions */}
      {!isFullscreen && magazine && !loading && !pdfError && (
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="py-6 border-t border-white/5"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link to="/magazines">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All Magazines
                </Button>
              </Link>

              <a
                href={magazine.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button className="bg-gradient-to-r from-[#0D4C92] to-[#005CB9] hover:from-[#005CB9] hover:to-[#0D4C92] text-white rounded-xl px-6">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </a>
            </div>
          </div>
        </motion.footer>
      )}

      {/* Custom Styles */}
      <style>{`
        .flipbook-shadow {
          box-shadow:
            0 0 40px rgba(0, 0, 0, 0.3),
            0 0 80px rgba(0, 0, 0, 0.2),
            inset 0 0 10px rgba(255, 255, 255, 0.05);
        }
        
        .page {
          background-color: white;
          box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.1);
        }
        
        .page-cover {
          background: linear-gradient(135deg, #0D4C92 0%, #005CB9 100%);
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thumb-white\/10::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        
        .scrollbar-thumb-white\/10::-webkit-scrollbar-track {
          background: transparent;
        }

        :fullscreen {
          background: radial-gradient(circle at 50% 20%, #122a4d 0%, #050b1a 45%, #02050d 100%);
        }
      `}</style>
    </div>
  );
}
