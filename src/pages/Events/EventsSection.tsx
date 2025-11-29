import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import galleryEvents from "@/data/events/eventsdata.js";
import ImagePopup from "@/components/reusable/ImagePopup";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";

const EventsSection = () => {
  const { eventId } = useParams();
  const event = eventId
    ? galleryEvents.find((e) => e.id === eventId)
    : galleryEvents[0];

  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!event) {
    return (
      <div className="flex-1 text-center text-gray-400 py-20">
        No gallery found.
      </div>
    );
  }

  // Formatted images for popup
  const formattedImages = event.images.map((img, index) => ({
    image: img,
    imgTitle: `${event.title} - Image ${index + 1}`,
  }));

  // Next image
  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    );
  };

  // Previous image
  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold text-purple md:text-left text-center">{event.title}</h1>
      <HeadingUnderline width={150} align="left" />
      <p className="text-gray-600 mt-2 mb-6 md:text-left text-center">{event.description}</p>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {event.images.map((img, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img}
              alt={`${event.title} ${index + 1}`}
              className="w-full h-52 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Image Popup */}
      <ImagePopup
        images={formattedImages}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default EventsSection;
