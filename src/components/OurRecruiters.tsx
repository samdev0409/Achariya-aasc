import React, { useEffect, useState } from "react";

// -------------------- Imports --------------------
import img1 from "@/assets/images/our-recruiters/1-1.png";
import img2 from "@/assets/images/our-recruiters/2-1.png";
import img3 from "@/assets/images/our-recruiters/3-1.png";
import img4 from "@/assets/images/our-recruiters/4-1.png";
import img10 from "@/assets/images/our-recruiters/10-1.png";
import img11 from "@/assets/images/our-recruiters/11-1.png";
import img12 from "@/assets/images/our-recruiters/12-1.png";
import img13 from "@/assets/images/our-recruiters/13-1.png";
import img14 from "@/assets/images/our-recruiters/14-1.png";
import img15 from "@/assets/images/our-recruiters/15-1.png";
import img16 from "@/assets/images/our-recruiters/16-1.png";
import img17 from "@/assets/images/our-recruiters/17-1.png";
import img18 from "@/assets/images/our-recruiters/18-1.png";
import img19 from "@/assets/images/our-recruiters/19-1.png";
import img20 from "@/assets/images/our-recruiters/20-1.png";
import img21 from "@/assets/images/our-recruiters/21-1.png";
import img22 from "@/assets/images/our-recruiters/22-1.png";
import img23 from "@/assets/images/our-recruiters/23-1.png";
import img24 from "@/assets/images/our-recruiters/24-1.png";
import img25 from "@/assets/images/our-recruiters/25-1.png";
import img26 from "@/assets/images/our-recruiters/26-1.png";
import img27 from "@/assets/images/our-recruiters/27-1.png";
import img28 from "@/assets/images/our-recruiters/28-1.png";
import img29 from "@/assets/images/our-recruiters/29-1.png";
import img30 from "@/assets/images/our-recruiters/30-1.png";
import img31 from "@/assets/images/our-recruiters/31-1.png";
import img32 from "@/assets/images/our-recruiters/32-1.png";
import img33 from "@/assets/images/our-recruiters/33-1.png";
import img34 from "@/assets/images/our-recruiters/34-1.png";
import img35 from "@/assets/images/our-recruiters/35-1.png";
import img36 from "@/assets/images/our-recruiters/36-1.png";
import img37 from "@/assets/images/our-recruiters/37-1.png";
import img38 from "@/assets/images/our-recruiters/38-1.png";
import img39 from "@/assets/images/our-recruiters/39-1.png";
import img40 from "@/assets/images/our-recruiters/40-1.png";
import img41 from "@/assets/images/our-recruiters/41-1.png";
import img42 from "@/assets/images/our-recruiters/42-1.png";
import HeadingUnderline from "./HeadingUnderline";

// -----------------------------------------------
const logos = [
  img1,
  img2,
  img3,
  img4,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
];

const OurRecruiters = () => {
  const rows = [logos.slice(0, 14), logos.slice(14, 28), logos.slice(28, 42)];

  return (
    <div className="w-full bg-white">
      <style>{`
        @keyframes step-scroll-left {
          0%, 4.76% {
            transform: translateX(0);
          }
          7.14%, 11.90% {
            transform: translateX(-330px);
          }
          14.28%, 19.04% {
            transform: translateX(-660px);
          }
          21.42%, 26.18% {
            transform: translateX(-990px);
          }
          28.56%, 33.32% {
            transform: translateX(-1320px);
          }
          35.70%, 40.46% {
            transform: translateX(-1650px);
          }
          42.84%, 47.60% {
            transform: translateX(-1980px);
          }
          50%, 54.76% {
            transform: translateX(-2310px);
          }
          57.14%, 61.90% {
            transform: translateX(-2640px);
          }
          64.28%, 69.04% {
            transform: translateX(-2970px);
          }
          71.42%, 76.18% {
            transform: translateX(-3300px);
          }
          78.56%, 83.32% {
            transform: translateX(-3630px);
          }
          85.70%, 90.46% {
            transform: translateX(-3960px);
          }
          92.84%, 97.60% {
            transform: translateX(-4290px);
          }
          100% {
            transform: translateX(-4620px);
          }
        }
        
        @keyframes step-scroll-right {
          0%, 4.76% {
            transform: translateX(-4620px);
          }
          7.14%, 11.90% {
            transform: translateX(-4290px);
          }
          14.28%, 19.04% {
            transform: translateX(-3960px);
          }
          21.42%, 26.18% {
            transform: translateX(-3630px);
          }
          28.56%, 33.32% {
            transform: translateX(-3300px);
          }
          35.70%, 40.46% {
            transform: translateX(-2970px);
          }
          42.84%, 47.60% {
            transform: translateX(-2640px);
          }
          50%, 54.76% {
            transform: translateX(-2310px);
          }
          57.14%, 61.90% {
            transform: translateX(-1980px);
          }
          64.28%, 69.04% {
            transform: translateX(-1650px);
          }
          71.42%, 76.18% {
            transform: translateX(-1320px);
          }
          78.56%, 83.32% {
            transform: translateX(-990px);
          }
          85.70%, 90.46% {
            transform: translateX(-660px);
          }
          92.84%, 97.60% {
            transform: translateX(-330px);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-step-scroll-left {
          animation: step-scroll-left 42s ease-in-out infinite;
        }
        
        .animate-step-scroll-right {
          animation: step-scroll-right 42s ease-in-out infinite;
        }
        
       
      `}</style>

      <div>
        <h2 className="text-3xl font-bold text-center text-purple">Our Recruiters</h2>
        <HeadingUnderline width={200} align="center" />
      </div>

      <div className="flex flex-col gap-7">
        <RowScroller logos={rows[0]} direction="ltr" />
        <RowScroller logos={rows[1]} direction="rtl" />
        <RowScroller logos={rows[2]} direction="ltr" />
      </div>
    </div>
  );
};

const RowScroller = ({ logos, direction = "ltr" }) => {
  const animationClass =
    direction === "ltr"
      ? "animate-step-scroll-left"
      : "animate-step-scroll-right";

  return (
    <div className="overflow-hidden w-full scroller-container">
      <div
        className={`flex items-center gap-3 ${animationClass}`}
        style={{
          width: "fit-content",
        }}
      >
        {/* Render logos twice for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ width: "310px", height: "128px" }}
          >
            <img
              src={logo}
              alt={`Recruiter ${(i % logos.length) + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRecruiters;
