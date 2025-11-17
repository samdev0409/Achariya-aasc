import React from "react";
import OurTeamSidebar from "./OurTeamSidebar";
import OurTeamFacultySection from "./OurTeamFacultySection";

const OurTeam = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row bg-gray-50">
      <OurTeamSidebar />
      <OurTeamFacultySection />
    </div>
  );
};

export default OurTeam;
