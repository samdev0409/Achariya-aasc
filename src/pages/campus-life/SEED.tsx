import React from "react";
import campus from "@/assets/images/aasc_building.webp";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import { seedData } from "@/data/campus-life/seeddata";

const SEED = () => {
  return (
    <section className="bg-background">
      <BannerAndBreadCrumb img={campus} title="SEED" />

      <div className="container mx-auto py-16">
        {/* 🔹 Page Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-purple">
            School for Entrepreneurial and Employability Skill Development
          </h2>
          <div className="flex justify-center">
            <HeadingUnderline width={180} align="center" />
          </div>
        </div>

        {/* 🔹 Content Blocks */}
        <div className="space-y-20">
          {seedData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 🖼 Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.image}
                  alt="seed-info"
                  className="w-full h-[350px] object-cover shadow-xl"
                />
              </div>

              {/* 📝 Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <p className="text-gray-700 leading-relaxed ">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEED;
