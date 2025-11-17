// PressReleasesGallery.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const PressReleasesGallery = ({ images, year }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next/previous navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length]
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
      <h1 className="text-2xl font-bold text-purple-800 mb-6">
        {year} Press Releases
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer"
            onClick={() => {
              setSelectedImage(img);
              setCurrentIndex(index);
            }}
          >
            <img
              src={img}
              alt={`Press Release ${year} - ${index + 1}`}
              className="w-full h-auto object-cover border"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-400 transition"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 text-white hover:text-gray-400 transition"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt={`Press Release ${year} - Fullscreen`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
          />

          {/* Next Button */}
          <button
            className="absolute right-4 text-white hover:text-gray-400 transition"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default PressReleasesGallery;