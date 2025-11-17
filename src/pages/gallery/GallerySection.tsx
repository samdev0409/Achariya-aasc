import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import galleryEvents from "@/data/galleryEvents";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GallerySection = () => {
  const { eventId } = useParams();
  const event = eventId
    ? galleryEvents.find((e) => e.id === eventId)
    : galleryEvents[0];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!event) {
    return (
      <div className="flex-1 text-center text-gray-400 py-20">
        No gallery found.
      </div>
    );
  }

  // Handle next/previous navigation
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    );
    setSelectedImage(event.images[(currentIndex + 1) % event.images.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
    setSelectedImage(
      event.images[
        (currentIndex - 1 + event.images.length) % event.images.length
      ]
    );
  };

  // Keyboard navigation (Esc, Arrow keys)
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, currentIndex]);

  return (
    <div className="flex-1 p-6 border-r border-gray-400">
      <h1 className="text-2xl font-bold text-purple-800">{event.title}</h1>
      <p className="text-gray-600 mt-2 mb-6">{event.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {event.images.map((img, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer"
            onClick={() => {
              setSelectedImage(img);
              setCurrentIndex(i);
            }}
          >
            <img
              src={img}
              alt={`${event.title} ${i + 1}`}
              className="w-full h-52 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-400"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 text-white hover:text-gray-400"
            onClick={handlePrev}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="fullscreen"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
          />

          {/* Next Button */}
          <button
            className="absolute right-4 text-white hover:text-gray-400"
            onClick={handleNext}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
