import React from 'react';
import { ChevronRight } from 'lucide-react';
  const newsItems = [
    "UG Courses: B.A., Lil Tamil, B.A., English, B.Sc., Maths, B.Sc., Physics, B.Sc., Biochemistry, B.Sc., Microbiology, B.Sc., Computer Science, B.C.A., B.Com., B.B.A.,",
    "PG Courses: M.A., English., M.Sc., Maths, M.Sc., Microbiology, M.Sc., Computer Science., M.Com., M.B.A.,",
    "For Admission Details Contact: +91 413 2615596 / 2615597",
    "We are NAAC accredited and UGC Recognized 2(f) and 12(B) institution",
    "Bharathidasan University New Syllabi",
    "Click here for Admission 2025-2026 - Online Application"
  ];


const NewsTicker = () => {

  return (
    <div className="px-8 bg-purple overflow-hidden relative border-b border-[#fdfdfd]">
      <div className="flex items-center">
        {/* News Label */}
        {/* <div className="bg-white px-4 py-2 flex-shrink-0">
          <span className="text-purple font-bold text-sm italic">News</span>
        </div> */}

        {/* Scrolling Content */}
        <div className="flex-1 overflow-hidden py-2">
          <div className="animate-scroll flex items-center gap-8 whitespace-nowrap">
            {/* First set of items */}
            {newsItems.map((item, index) => (
              <div key={`first-${index}`} className="flex items-center gap-2">
                <span className="text-purple p-1 rounded-full bg-white "><ChevronRight/></span>
                                <span className="text-white text-sm">{item}</span>

              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {newsItems.map((item, index) => (
              <div key={`second-${index}`} className="flex items-center gap-2">
                <span className="text-purple  rounded-full bg-white"><ChevronRight/></span>
                                <span className="text-white text-sm">{item}</span>

              </div>
            ))}
          </div>
        </div>
      </div>

      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;