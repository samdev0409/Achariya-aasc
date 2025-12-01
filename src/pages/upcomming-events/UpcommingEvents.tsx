import React from "react";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.webp";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import { UpcommingEventsPreviewData } from "@/data/events/UpcommingEventsPreviewData.js";

const UpcomingEvents = () => {
  // Sort by latest date
  const sortedEvents = [...UpcommingEventsPreviewData].sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA; // latest first
  });

  return (
    <>
      <BannerAndBreadCrumb img={campus} title="Upcoming Events" />

      <section className="container bg-background py-10">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-purple">Upcoming Events</h2>
            <HeadingUnderline width={200} />
          </div>

          <div className="space-y-8">
            {sortedEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                {/* Title + Date */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-purple leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    {new Date(event.date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>

                {/* Event Image */}
                {event.image && (
                  <div className="w-full mt-4 mb-4 overflow-hidden rounded-lg shadow">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-60 object-cover"
                    />
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>

                {/* Posted By + File */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-600 italic">
                    Posted by:{" "}
                    <span className="font-medium">{event.postedBy}</span>
                  </p>

                  <a
                    href={event.file}
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

export default UpcomingEvents;
