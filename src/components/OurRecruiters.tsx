import React, { useEffect, useState } from "react";
import HeadingUnderline from "./reusable/HeadingUnderline";
import Heading from "./reusable/Heading";

interface OurRecruitersProps {
  title: string;
  logos: string[];
}

const OurRecruiters: React.FC<OurRecruitersProps> = ({ title, logos }) => {
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
        <Heading title={title} size="lg" align="center" />
        <HeadingUnderline width={200} align="center" />
      </div>

      <div className="flex flex-col gap-7 px-4 md:px-0">
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
            className="flex-shrink-0 md:h-[128px] md:w-[310px] w-[200px] h-[80px]"
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
