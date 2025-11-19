import React from "react";
import OurTeamSidebar from "./OurTeamSidebar";
import OurTeamFacultySection from "./OurTeamFacultySection";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.webp";

const OurTeam = () => {
  return (
    <>
      <BannerAndBreadCrumb title="Our Team" img={campus} />

      <div className="container min-h-screen flex flex-col md:flex-row bg-gray-50">
        <OurTeamSidebar />
        <OurTeamFacultySection />
      </div>
    </>
  );
};

export default OurTeam;
