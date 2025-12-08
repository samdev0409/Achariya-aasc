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
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Prospectus = () => {
  const { toast } = useToast();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPDF, setSelectedPDF] = useState(prospectusData[0].doc);

  // Responsive visible button count
  const [visibleCount, setVisibleCount] = useState(4);

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

  // Navigation
  const showPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const showNext = () => {
    if (currentIndex < prospectusData.length - visibleCount)
      setCurrentIndex(currentIndex + 1);
  };

  const handleSelectYear = (pdf) => {
    setSelectedPDF(pdf);
    // toast({
    //   title: "Year Selected",
    //   description: "The selected Prospectus is now displayed.",
    //   duration: 1500,
    // });
  };

  const visibleYears = prospectusData.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div>
      <BannerAndBreadCrumb img={campus} title="Prospectus" />

      <section className="bg-background md:container md:py-16 py-6 px-4">
        {/* Title */}
        <div className="text-center">
          <Heading title="Prospectus" size="lg" align="center" />
          <HeadingUnderline width={200} align="center" />
        </div>

        {/* YEARS SELECTOR */}
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
                  onClick={() => handleSelectYear(item.doc)}
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
            disabled={currentIndex >= prospectusData.length - visibleCount}
            className="p-2 border rounded-full hover:bg-gray-100 disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>

        {/* PDF PREVIEW BOX */}
        <div className="w-full mx-auto bg-white shadow-md rounded-xl md:p-10 space-y-8">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <FileTextIcon className="w-8 h-8 p-1 text-purple-700" />
            </div>
            <h3 className="font-semibold text-xl text-center capitalize">
              {selectedPDF.split("/").pop()}
            </h3>
          </div>

          <div className="w-full h-[80vh] border rounded-xl overflow-hidden bg-gray-50">
            <iframe
              src={selectedPDF}
              className="w-full h-full"
              title="PDF Viewer"
            />
          </div>

          {/* Download */}
          <div className="flex justify-center">
            <a
              href={selectedPDF}
              download
              className="flex items-center red-btn"
              onClick={() =>
                toast({
                  title: "Download Started",
                  description: "Your Prospectus PDF is being downloaded.",
                })
              }
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prospectus;
