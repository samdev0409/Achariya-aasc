import React, { useEffect, useState } from "react";

// -------------------- Imports --------------------
import img1 from "@/assets/images/achariya-schools-colleges/aasc-1-removebg-preview.png";
import img2 from "@/assets/images/achariya-schools-colleges/absm-removebg-preview.png";
import img3 from "@/assets/images/achariya-schools-colleges/acchm-300x113-removebg-preview.png";
import img4 from "@/assets/images/achariya-schools-colleges/acet-removebg-preview.png";
import img5 from "@/assets/images/achariya-schools-colleges/aklavya-removebg-preview.png";
import img6 from "@/assets/images/achariya-schools-colleges/ssv-removebg-preview.png";
import HeadingUnderline from "./HeadingUnderline";

// -----------------------------------------------
const recruiters = [img1, img2, img3, img4, img5, img6];

const AchariyaSchoolsAndColleges = () => {
  const rows = [recruiters.slice(0, 5)];

  return (
    <div className="w-full py-12 bg-white">
      <div>
        <h2 className="text-3xl font-bold text-center text-purple">
                  Our Schools And Colleges

        </h2>
        <HeadingUnderline width={200} align="center" />
      </div>
      <div className="flex flex-col gap-6">
        <RowScroller logos={rows[0]} direction="ltr" speed="10s" />
      </div>
    </div>
  );
};

// --------------------------
// PURE CSS INFINITE LOOP
// --------------------------
const RowScroller = ({ logos, direction = "ltr", speed }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-10 items-center whitespace-nowrap 
          ${
            direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr"
          }`}
        style={{ animationDuration: speed }}
      >
        {/* Original + Duplicate */}
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="recruiter"
            className="w-[300px] h-32 object-contain inline-block"
          />
        ))}
      </div>
    </div>
  );
};

export default AchariyaSchoolsAndColleges;
