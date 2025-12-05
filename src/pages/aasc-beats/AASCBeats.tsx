import React from "react";
import campus from "@/assets/images/aasc_building.webp";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";

import AASCBeatsSidebar from "./AASCBeatsSidebar";
import AASCBeatsSection from "./AASCBeatsSection";

const AASCBeats = () => {
  return (
    <>
      <BannerAndBreadCrumb img={campus} title="AASC Beats" />

      <div className="2xl:container min-h-screen flex flex-col md:flex-row bg-gray-50">
        <AASCBeatsSidebar />
        <AASCBeatsSection />
      </div>
    </>
  );
};

export default AASCBeats;
