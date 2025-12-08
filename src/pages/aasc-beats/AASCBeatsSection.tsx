import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { aascbeatsdata } from "@/data/aasc-beats/aasc-beatsdata.ts";
import ImagePopup from "@/components/reusable/ImagePopup";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";

const AASCBeatsSection = () => {
  const { month } = useParams();
  const activeMonth = month || Object.keys(aascbeatsdata)[0];

  const section = aascbeatsdata[activeMonth];

  const [selectedEntryIndex, setSelectedEntryIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  if (!section) {
    return (
      <div className="flex-1 p-6 text-center text-gray-500">
        Month not found.
      </div>
    );
  }

  const openPopup = (entryIdx, imgIdx) => {
    setSelectedEntryIndex(entryIdx);
    setSelectedImageIndex(imgIdx);
    setZoom(1);
  };

  const closePopup = () => {
    setSelectedEntryIndex(null);
    setSelectedImageIndex(null);
    setZoom(1);
  };

  const currentImages =
    selectedEntryIndex !== null
      ? section.entries[selectedEntryIndex].images
      : [];

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % currentImages.length);
    setZoom(1);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
    setZoom(1);
  };

  return (
    <div className="flex-1 p-6 border-r border-gray-300">
      {/* MAIN MONTH TITLE */}
      <h1 className="text-4xl font-bold text-purple text-center">
        AASC Beats {section.sectiontitle}
      </h1>
      <HeadingUnderline width={180} align="center" />

      {/* ENTRIES LOOP */}
      <div className="mt-8 space-y-14">
        {section.entries.map((entry, entryIdx) => (
          <>
          <div key={entryIdx}>
            {/* ENTRY TITLE */}
            <h2 className="text-3xl font-semibold text-purple text-center ">
              {entry.title}
            </h2>
            <div className="flex justify-center">
              <HeadingUnderline width={120} align="center" />
            </div>

            {/* GRID IMAGES */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {entry.images.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  className="overflow-hidden rounded-lg cursor-pointer group
                 w-full sm:w-[48%] md:w-[48%] mb-4 " // 1 → 2 → 3 per row
                  onClick={() => openPopup(entryIdx, imgIdx)}
                >
                  <img
                    src={img}
                    alt={entry.title}
                    className="w-full h-auto rounded-lg border border-gray-200 p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          <hr />
          </>
        ))}
      </div>

      {/* IMAGE POPUP */}
      <ImagePopup
        images={currentImages.map((i) => ({ image: i, imgTitle: "" }))}
        selectedIndex={selectedImageIndex}
        onClose={closePopup}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default AASCBeatsSection;
