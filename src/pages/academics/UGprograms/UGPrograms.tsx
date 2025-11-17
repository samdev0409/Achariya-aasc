import React from "react";
import UGProgramsSidebar from "./UGProgramsSidebar";
import UGProgramsSection from "./UGProgramsSection";

const UGPrograms = () => {
  return (
    <div className="min-h-screen container flex flex-col md:flex-row bg-gray-50">
      <UGProgramsSidebar />
      <UGProgramsSection />
    </div>
  );
};

export default UGPrograms;