import React, { useState } from "react";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import Heading from "@/components/reusable/Heading";
import campus from "@/assets/images/aasc_building.webp";
import { academicCalendarData } from "@/data/academics/academiccalendardata.js";
import { BookOpen, Download } from "lucide-react";

// Setup PDF.js worker

const AcademicCalendar = () => {
  const { title, semesterTitle, pdfLink, meta } = academicCalendarData;

  const [numPages, setNumPages] = useState(null);

  return (
    <div>
      <BannerAndBreadCrumb img={campus} title="Academic Calendar" />

      <section className="bg-background md:container md:py-16 py-6 ">
        {/* Title */}
        <div className="text-center space-y-2 ">
          <Heading title="Academic Calendar" size="lg" align="center" />
          <HeadingUnderline width={200} align="center" />
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            {semesterTitle}
          </p>
        </div>

        {/* PDF Preview Box */}
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10 space-y-8">
          {/* Icon
          <div className="flex justify-center">
            <BookOpen className="w-14 h-14 text-purple-700" />
          </div> */}

          {/* PDF Viewer */}
          <div className="w-full h-[80vh] border rounded-xl overflow-hidden bg-gray-50">
            <iframe
              src={pdfLink}
              className="w-full h-full"
              title="PDF Viewer"
            />
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <a
              href={pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center red-btn"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>

          <div className="text-right">
            <em className="text-gray-600">
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
