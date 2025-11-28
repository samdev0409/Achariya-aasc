import React from "react";
import { ChevronRight } from "lucide-react";

interface NewsTickerProps {
  items: string[];
}

const NewsTicker: React.FC<NewsTickerProps> = ({ items: newsItems }) => {
  return (
    <div className="px-4 md:px-8 bg-purple overflow-hidden relative border-b border-[#fdfdfd]">
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
                <span className="text-purple p-1 rounded-full bg-white ">
                  <ChevronRight />
                </span>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {newsItems.map((item, index) => (
              <div key={`second-${index}`} className="flex items-center gap-2">
                <span className="text-purple  rounded-full bg-white">
                  <ChevronRight />
                </span>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
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
