import React from "react";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import Heading from "@/components/reusable/Heading";
import campus from "@/assets/images/aasc_building.webp";
import { BookOpen, Download } from "lucide-react";

// ✅ Direct static PDF import
import academicCalendardoc from "@/assets/documents/academic-calendar/2024-ODD-SEM-CALENDAR-office.pdf";

const AcademicCalendar: React.FC = () => {
  return (
    <div>
      <BannerAndBreadCrumb img={campus} title="Academic Calendar" />

      <section className="bg-background md:container md:py-16 py-6">
        {/* HEADER */}
        <div className="text-center space-y-2 mb-10">
          <Heading title="Academic Calendar" size="lg" align="center" />
          <HeadingUnderline width={200} align="center" />
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            2024 – 2025 ODD SEMESTER
          </p>
        </div>

        <div className="w-full mx-auto bg-white shadow-md rounded-xl p-6 md:p-10 space-y-8">
          {/* PDF PREVIEW */}
          <div className="w-full h-[80vh] border rounded-xl overflow-hidden bg-gray-50">
            <iframe
              src={academicCalendardoc}
              title="Academic Calendar PDF Preview"
              className="w-full h-full"
            />
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="flex justify-center">
            <a
              href={academicCalendardoc}
              download
              className="flex items-center red-btn px-6 py-3 text-lg font-medium"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Academic Calendar
            </a>
          </div>

          {/* METADATA */}
          <div className="text-right">
            <em className="text-gray-600 text-sm">
              Updated On: July 2024 <br />
              Uploaded By: Office of the Principal
            </em>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;
