import React from "react";
import campus from "@/assets/images/aasc_building.webp";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import { CircularPreviewData } from "@/data/home/CircularPreviewData.js";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";

const Circular = () => {
  // Sort by latest date
  const sortedCirculars = [...CircularPreviewData].sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA; // latest first
  });

  return (
    <>
      <BannerAndBreadCrumb img={campus} title="Prospectus" />

      <section className="bg-background py-10">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-purple">Latest Circulars</h2>
            <HeadingUnderline width={200} />
          </div>

          <div className="space-y-6">
            {sortedCirculars.map((item, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                {/* Title + Date */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-purple leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                {/* Posted By + File */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-600 italic">
                    Posted by:{" "}
                    <span className="font-medium">{item.postedBy}</span>
                  </p>

                  <a
                    href={item.file}
                    target="_blank"
                    className="text-purple font-medium hover:underline"
                  >
                    View PDF →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Circular;
