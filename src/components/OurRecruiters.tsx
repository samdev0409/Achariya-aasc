import React from "react";
import HeadingUnderline from "./reusable/HeadingUnderline";
import Heading from "./reusable/Heading";

interface OurRecruitersProps {
  title: string;
  logos: string[];
}

const OurRecruiters: React.FC<OurRecruitersProps> = ({ title, logos }) => {
  const rowCountMobile = 2;

  const logosPerDesktopRow = 14; 
  const logosPerMobileRow = Math.ceil(logos.length / rowCountMobile);

  // Desktop: 3 rows
  const desktopRows = [
    logos.slice(0, 14),
    logos.slice(14, 28),
    logos.slice(28, 42),
  ];

  // Mobile: 2 rows with all logos distributed
  const mobileRows = [
    logos.slice(0, logosPerMobileRow),
    logos.slice(logosPerMobileRow),
  ];

  return (
    <div className="w-full bg-white">

      {/* Smooth Infinite Marquee CSS */}
      <style>{`
        .marquee {
          animation: marquee 22s linear infinite;
        }
        .marquee-reverse {
          animation: marquee-reverse 22s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div>
        <Heading title={title} size="lg" align="center" />
        <HeadingUnderline width={200} align="center" />
      </div>

      {/* MOBILE — 2 rows */}
      <div className="flex flex-col gap-7 px-4 md:hidden">
        <RowScroller logos={mobileRows[0]} direction="ltr" />
        <RowScroller logos={mobileRows[1]} direction="rtl" />
      </div>

      {/* DESKTOP — 3 rows */}
      <div className="hidden md:flex flex-col gap-7 px-4 md:px-0">
        <RowScroller logos={desktopRows[0]} direction="ltr" />
        <RowScroller logos={desktopRows[1]} direction="rtl" />
        <RowScroller logos={desktopRows[2]} direction="ltr" />
      </div>
    </div>
  );
};

const RowScroller = ({ logos, direction = "ltr" }) => {
  const animationClass =
    direction === "ltr" ? "marquee" : "marquee-reverse";

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex items-center gap-6 min-w-max ${animationClass}`}>
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="
              flex-shrink-0 
              flex items-center justify-center
              h-[60px] w-[120px]
              sm:h-[80px] sm:w-[160px]
              md:h-[110px] md:w-[220px]
              lg:h-[140px] lg:w-[260px]
              xl:h-[160px] xl:w-[300px]
            "
          >
            <img
              src={logo}
              alt={`Recruiter ${(i % logos.length) + 1}`}
              className="max-w-full max-h-full object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRecruiters;
