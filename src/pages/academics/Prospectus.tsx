import React, { useState, useEffect } from "react";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import Heading from "@/components/reusable/Heading";
import campus from "@/assets/images/aasc_building.webp";
import { prospectusData } from "@/data/academics/prospectusdata.js";
import {
  Download,
  ChevronLeft,
  ChevronRight,
  FileText,
  FileTextIcon,
  BookOpen,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ProspectusItem {
  year: string;
  doc: string;
}

interface ProspectusProps {
  overrideData?: ProspectusItem[];
}

const Prospectus: React.FC<ProspectusProps> = ({ overrideData }) => {
  const { toast } = useToast();

  const banner = {
    image: campus,
    title: "Prospectus",
  };

  // DYNAMIC data = overrideData in preview, staticData in public view
  const staticData = prospectusData;
  const dynamicData = overrideData || staticData;

  // detect admin live preview mode
  const isPreview = Boolean(overrideData);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPDF, setSelectedPDF] = useState(dynamicData[0]?.doc || "");
  const [selectedYear, setSelectedYear] = useState(dynamicData[0]?.year || "");

  // Responsive visible button count
  const [visibleCount, setVisibleCount] = useState(4);

  // PDF Preview States
  const [pdfDataUrl, setPdfDataUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewError, setPreviewError] = useState("");

  // Handle real responsive calculations
  useEffect(() => {
    const updateCounts = () => {
      if (window.matchMedia("(max-width: 639px)").matches) {
        setVisibleCount(2); // mobile
      } else if (
        window.matchMedia("(min-width: 640px) and (max-width: 767px)").matches
      ) {
        setVisibleCount(3); // tablet
      } else {
        setVisibleCount(4); // md & lg
      }
    };

    updateCounts();
    window.addEventListener("resize", updateCounts);
    return () => window.removeEventListener("resize", updateCounts);
  }, []);

  // Update selected PDF when data changes
  useEffect(() => {
    if (dynamicData.length > 0) {
      setSelectedPDF(dynamicData[0].doc);
      setSelectedYear(dynamicData[0].year);
    }
  }, [overrideData]);

  // ----------------------------------------------------
  // UNIVERSAL DOCUMENT URL RESOLVER (for PDF)
  // ----------------------------------------------------
  function resolveDocumentUrl(doc: string) {
    if (!doc) return "";

    if (doc.startsWith("http://") || doc.startsWith("https://")) {
      return doc;
    }

    if (!doc.includes("/assets/documents/")) {
      // Preview: Use proxy-safe URL, Public: Use temp path
      return isPreview
        ? `${import.meta.env.VITE_API_URL}/preview-pdf/${doc}`
        : `${import.meta.env.VITE_API_URL}/assets/documents/temp/${doc}`;
    }

    return doc;
  }

  const pdfUrl = resolveDocumentUrl(selectedPDF);

  // Fetch PDF as data URL for preview (bypasses iframe localhost issues)
  useEffect(() => {
    if (isPreview && selectedPDF) {
      setLoading(true);
      setPreviewError("");

      fetch(pdfUrl, {
        method: "GET",
        headers: { "Cache-Control": "no-cache" },
      })
        .then((res) => {
          if (!res.ok) throw new Error("PDF fetch failed");
          return res.blob();
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPdfDataUrl(reader.result as string);
            setLoading(false);
          };
          reader.readAsDataURL(blob);
        })
        .catch((err) => {
          console.error("PDF Preview Error:", err);
          setPreviewError("Failed to load preview. Download works fine.");
          setLoading(false);
        });
    }
  }, [pdfUrl, isPreview, selectedPDF]);

  const iframeSrc = isPreview && pdfDataUrl ? pdfDataUrl : pdfUrl;

  console.log("Prospectus - Resolved URLs:", {
    bannerImageUrl: "STATIC",
    pdfUrl,
    isPreview,
    usingDataUrl: isPreview && !!pdfDataUrl,
  });

  // Navigation
  const showPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const showNext = () => {
    if (currentIndex < dynamicData.length - visibleCount)
      setCurrentIndex(currentIndex + 1);
  };

  const handleSelectYear = (item: ProspectusItem) => {
    setSelectedPDF(item.doc);
    setSelectedYear(item.year);
  };

  const visibleYears = dynamicData.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div>
      <BannerAndBreadCrumb img={banner.image} title={banner.title} />

      <section className="bg-background md:container md:py-16 py-6 px-4">
        {/* Title */}
        <div className="text-center">
          <Heading title="Prospectus" size="lg" align="center" />
          <HeadingUnderline width={200} align="center" />
        </div>

        {/* YEARS SELECTOR → DYNAMIC */}
        <div className="max-w-3xl mx-auto mt-10 mb-4 flex items-center justify-center gap-3">
          {/* Prev arrow */}
          <button
            onClick={showPrev}
            disabled={currentIndex === 0}
            className="p-2 border rounded-full hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          {/* Buttons */}
          <div className="flex-1 flex justify-center gap-0 bg-white rounded-lg overflow-hidden relative">
            {visibleYears.map((item, index) => (
              <div
                key={item.year}
                className="relative flex items-center justify-center gap-3"
              >
                <button
                  onClick={() => handleSelectYear(item)}
                  className={`w-full h-full px-5 py-3 text-sm font-medium text-center
                     hover:bg-purple hover:text-white transition mx-1
                    ${
                      selectedPDF === item.doc
                        ? "bg-purple text-white"
                        : "bg-purple-100 text-gray-700"
                    }
                  `}
                >
                  {item.year}
                </button>

                {/* Separator except last */}
                {index !== visibleYears.length - 1 && (
                  <div className="absolute right-0 top-2 h-6 w-px bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={showNext}
            disabled={currentIndex >= dynamicData.length - visibleCount}
            className="p-2 border rounded-full hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>

        {/* PDF PREVIEW BOX → DYNAMIC */}
        <div className="w-full mx-auto bg-white shadow-md rounded-xl md:p-10 space-y-8">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <FileTextIcon className="w-8 h-8 p-1 text-purple-700" />
            </div>
            <h3 className="font-semibold text-xl text-center capitalize">
              {selectedYear}
            </h3>
          </div>

          {/* PDF Preview Box */}
          <div className="w-full h-[80vh] border rounded-xl overflow-hidden bg-gray-50">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <p>Loading PDF preview...</p>
              </div>
            ) : previewError ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-2 p-8 text-center">
                <BookOpen className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-lg font-medium">{previewError}</p>
                <p className="text-sm">Download button works perfectly.</p>
              </div>
            ) : (
              <iframe
                src={iframeSrc}
                className="w-full h-full"
                title="PDF Viewer"
                sandbox={
                  isPreview
                    ? "allow-same-origin allow-scripts allow-popups"
                    : undefined
                }
              />
            )}
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center red-btn px-6 py-3 text-lg font-medium"
              onClick={() =>
                toast({
                  title: "Download Started",
                  description: "Your Prospectus PDF is being downloaded.",
                })
              }
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prospectus;
