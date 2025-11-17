import React from "react";
import PGProgramsSidebar from "./PGProgramsSidebar";
import PGProgramsSection from "./PGProgramsSection";

const PGPrograms = () => {
  return (
    <div className="min-h-screen container flex flex-col md:flex-row bg-gray-50">
      <PGProgramsSidebar />
      <PGProgramsSection />
    </div>
  );
};

export default PGPrograms;
