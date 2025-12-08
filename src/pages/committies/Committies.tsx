import React from "react";
import { useParams } from "react-router-dom";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.webp";

import CommitteesSidebar from "./CommittiesSidebar";
import CommitteeSection from "./CommittiesSection";

import { committeeDataMapper } from "@/data/commitees/committiesdata.js";

const Committees = () => {
  const { slug } = useParams();

  const committeeData = committeeDataMapper[slug] || committeeDataMapper[0];

  return (
    <div>
      <div className="md:mt-0 mt-14">
        <BannerAndBreadCrumb img={campus} title="Committees" />
      </div>
      <div className=" min-h-screen  2xl:container flex flex-col md:flex-row  bg-gray-50">
        <CommitteesSidebar />
        <CommitteeSection slug={slug} committeeData={committeeData} />
      </div>
    </div>
  );
};

export default Committees;
