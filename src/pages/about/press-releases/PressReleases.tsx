// PressReleases.jsx
import React, { useState } from "react";
import pressReleases from "@/data/PressReleasesData";
import PressReleasesSidebar from "./PressReleasesSidebar";
import PressReleasesGallery from "./PressReleasesGallery";


const PressReleases = () => {
  const years = Object.keys(pressReleases).sort((a, b) => b - a);
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <section className="mx-auto">

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
  );
};

export default PressReleases;
