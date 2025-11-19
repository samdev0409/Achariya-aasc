import React from "react";
import { FileText } from "lucide-react";
import HeadingUnderline from "@/components/HeadingUnderline";
import { placementRecords } from "@/data/PlacementRecords.js";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.webp";

const PlacementRecords = () => {
  return (
    <>
    <BannerAndBreadCrumb img={campus} title=" Training And Placements - Records"/>
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
 
        <div className="mb-6  md:text-left">
          <h2 className="text-3xl text-center font-bold text-purple">
            Training And Placements - Records
          </h2>
          <HeadingUnderline width={150} align="center" />
        </div>

        {/* Grid of PDF Year Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-5 mt-8">
          {placementRecords.map((item, index) => (
            <a
              key={index}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white border border-gray-300 
                rounded-lg p-4 text-center 
                hover:bg-purple/10 hover:border-purple 
                cursor-pointer transition-all
                flex flex-col items-center justify-center gap-2
              "
            >
              <FileText className="w-6 h-6 text-purple-700" />

              <span className="font-medium text-gray-700">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default PlacementRecords;
