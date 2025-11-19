// PressReleases.jsx
import React, { useState } from "react";
import pressReleases from "@/data/PressReleasesData.js";
import PressReleasesSidebar from "./PressReleasesSidebar";
import PressReleasesGallery from "./PressReleasesGallery";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.webp";

const PressReleases = () => {
  const years = Object.keys(pressReleases).sort((a, b) => b - a);
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <>
      <BannerAndBreadCrumb title="Press Releases" img={campus} />

      <section className="mx-auto container">
        <div className="flex">
          <PressReleasesSidebar
            years={years}
            activeYear={activeYear}
            setActiveYear={setActiveYear}
          />

          <PressReleasesGallery
            year={activeYear}
            images={pressReleases[activeYear]}
          />
        </div>
      </section>
    </>
  );
};

export default PressReleases;
