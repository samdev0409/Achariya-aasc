import React from "react";
import GallerySidebar from "./GallerySidebar";
import GallerySection from "./GallerySection";
import campus from '@/assets/images/aasc_building.webp';
import BannerAndBreadCrumb from '@/components/BannerAndBreadCrumb';

const MainGallery = () => {
  return (<>    <div>
        <BannerAndBreadCrumb img={campus} title='Academic Calendar'/>
    </div>

    <div className="container min-h-screen flex flex-col md:flex-row bg-gray-50">
      <GallerySidebar />
      <GallerySection />
    </div>
      </>
  );
};

export default MainGallery;
