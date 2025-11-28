import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import React from "react";
import campus from "@/assets/images/aasc_building.webp";
import { governingBodyMembersData } from "@/data/about/governingbodycouncildata.js";
import { Phone, Mail } from "lucide-react";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import Heading from "@/components/reusable/Heading";

const GoverningBodyCouncil = () => {
  return (
    <div>
      <BannerAndBreadCrumb title="Governing Body Council" img={campus} />
      <div className="text-center py-10 ">
        <Heading
          title="Governing Body Council - Members"
          size="lg"
          align="center"
        />
        <HeadingUnderline width={200} align="center" />
      </div>
      <div className="container space-y-3">
        {governingBodyMembersData.map((member, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3  rounded-md overflow-hidden"
          >
            {/* LEFT — IMAGE */}
            <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-300 p-6">
              <div className="w-40 h-40 rounded-full ring-1 ring-gray-300 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* MIDDLE — INFO */}
            <div className="flex flex-col justify-center text-center md:text-left border-b md:border-b-0 md:border-r border-gray-300 p-6">
              <Heading
                title={member.name}
                size="sm"
                align="left"
                className="tracking-wide font-semibold"
              />
              <p className=" text-gray-600 mt-1">{member.department}</p>
            </div>

            {/* RIGHT — CONTACT */}
            <div className="flex flex-col justify-center p-6 space-y-2">
              <Heading
                title="Designation"
                size="sm"
                align="left"
                className="tracking-wide font-semibold"
              />
              <p className=" text-gray-700 mt-2">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoverningBodyCouncil;
