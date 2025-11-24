import React from "react";
import { useParams } from "react-router-dom";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.webp";

import CommitteesSidebar from "./CommittiesSidebar";
import CommitteeSection from "./CommittiesSection";

// Data
import { committeeDataMapper } from "@/data/committiesdata.js";

const Committees = () => {
  const { slug } = useParams();

  const committeeData = committeeDataMapper[slug] || null;

  return (
    <>
      {/* ===== BANNER ALWAYS ON TOP ===== */}
      <BannerAndBreadCrumb title="Committees" img={campus} />

      {/* ===== MAIN WORKSPACE (FULL SCREEN MINUS BANNER) ===== */}
      <div className="flex h-[calc(150vh-250px)] overflow-hidden container mx-auto">
        {/* ==== SIDEBAR (SCROLLABLE) ==== */}
        <aside className="w-72 border-r border-gray-300 overflow-y-auto sticky top-0 h-full">
          <CommitteesSidebar />
        </aside>

        {/* ==== CONTENT (SCROLLABLE) ==== */}
        <main className="flex-1 overflow-y-auto">
          <CommitteeSection slug={slug} committeeData={committeeData} />
        </main>
      </div>
    </>
  );
};

export default Committees;
