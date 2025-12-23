import React, { useState, useEffect } from "react";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import Heading from "@/components/reusable/Heading";
import campus from "@/assets/images/aasc_building.webp";
import { academicCalendarData } from "@/data/academics/academiccalendardata.js";
import { BookOpen, Download } from "lucide-react";

interface AcademicCalendarProps {
  overrideData?: {
    semesterTitle: string;
    pdfLink: string;
    flipbook: {
      enabled: boolean;
      note: string;
      subnote: string;
    };
    meta: {
      updatedOn: string;
      uploadedBy: string;
    };
  };
}

const AcademicCalendar: React.FC<AcademicCalendarProps> = ({
  overrideData,
}) => {
  const banner = {
    image: campus,
    title: "Academic Calendar",
  };

  const staticData = academicCalendarData;
  const dynamicData = overrideData || staticData;
  const { semesterTitle, pdfLink, meta } = dynamicData;

  const isPreview = Boolean(overrideData);

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

  const pdfUrl = resolveDocumentUrl(pdfLink);

  // PDF Preview States
  const [pdfDataUrl, setPdfDataUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewError, setPreviewError] = useState("");

  // Fetch PDF as data URL for preview (bypasses iframe localhost issues)
  useEffect(() => {
    if (isPreview && pdfLink) {
      setLoading(true);
      setPreviewError("");
      
      fetch(pdfUrl, { 
        method: 'GET',
        headers: { 'Cache-Control': 'no-cache' }
      })
        .then(res => {
          if (!res.ok) throw new Error('PDF fetch failed');
          return res.blob();
        })
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPdfDataUrl(reader.result as string);
            setLoading(false);
          };
          reader.readAsDataURL(blob);
        })
        .catch(err => {
          console.error("PDF Preview Error:", err);
          setPreviewError("Failed to load preview. Download works fine.");
          setLoading(false);
        });
    }
  }, [pdfUrl, isPreview, pdfLink]);

  const iframeSrc = isPreview && pdfDataUrl ? pdfDataUrl : pdfUrl;

  console.log("AcademicCalendar - Resolved URLs:", {
    bannerImageUrl: "STATIC",
    pdfUrl,
    isPreview,
    usingDataUrl: isPreview && !!pdfDataUrl,
  });

  return (
    <div>
      <BannerAndBreadCrumb img={banner.image} title={banner.title} />

      <section className="bg-background md:container md:py-16 py-6">
        <div className="text-center space-y-2">
          <Heading title="Academic Calendar" size="lg" align="center" />
          <HeadingUnderline width={200} align="center" />
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            {semesterTitle}
          </p>
        </div>

        <div className="w-full mx-auto bg-white shadow-md rounded-xl p-6 md:p-10 space-y-8">
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
                sandbox={isPreview ? "allow-same-origin allow-scripts allow-popups" : undefined}
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
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </div>

          {/* Metadata */}
          <div className="text-right">
            <em className="text-gray-600 text-sm">
              Updated On: {meta.updatedOn} <br />
              By {meta.uploadedBy}
            </em>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;
