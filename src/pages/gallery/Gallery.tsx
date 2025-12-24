import React from "react";
import { galleryData } from "@/data/gallery/gallerydata";
import ImagePopup from "@/components/reusable/ImagePopup";
import Heading from "@/components/reusable/Heading";

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-24">
      <Heading title="Our Gallery" size="lg" align="center" className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((item, index) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3"
          >
            <ImagePopup
              images={galleryData.map((img) => img.src)}
              initialIndex={index}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
            </ImagePopup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
