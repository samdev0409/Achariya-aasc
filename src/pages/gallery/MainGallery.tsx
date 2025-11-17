import React from "react";
import GallerySidebar from "./GallerySidebar";
import GallerySection from "./GallerySection";

const MainGallery = () => {
  return (
    <div className="container min-h-screen flex flex-col md:flex-row bg-gray-50">
      <GallerySidebar />
      <GallerySection />
    </div>
  );
};

export default MainGallery;
