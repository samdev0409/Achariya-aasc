import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import ImagePopup from "@/components/reusable/ImagePopup";
import React, { useState, useEffect } from "react";

const PressReleasesGallery = ({ images, year }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const formattedImages = images.map((img, index) => ({
    image: img,
    imgTitle: `Press Release ${year} - ${index + 1}`,
  }));

  // NEXT
  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === formattedImages.length - 1 ? 0 : prev + 1
    );
  };

  // PREV
  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? formattedImages.length - 1 : prev - 1
    );
  };

  // ESC + Arrow keys
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <div className="flex-1 p-6 border-r border-gray-400">
      <h1 className="text-2xl font-bold text-purple text-center md:text-left ">
        {year} Press Releases
      </h1>
      <HeadingUnderline width={150}/>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {formattedImages.map((img, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img.image}
              alt={img.imgTitle}
              className="w-full h-auto object-cover border"
            />
          </div>
        ))}
      </div>

      {/* POPUP VIEWER */}
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

export default PressReleasesGallery;
