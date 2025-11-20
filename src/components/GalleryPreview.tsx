import React from "react";
import { useNavigate } from "react-router-dom";
import galleryEvents from "@/data/galleryEvents.js";
import { ArrowUpRight } from "lucide-react";
import HeadingUnderline from "./HeadingUnderline";

const GalleryPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="relative container overflow-hidden">
      <div>
        <h2 className="text-3xl font-bold text-center text-purple">
       
          Our Events Highlights
        </h2>
        <HeadingUnderline width={200} align="center" />
           
      </div>

      {/* Slider Container */}
      <div className="flex container gap-6 animate-scroll w-[200%]">
        {[...galleryEvents, ...galleryEvents].map((event, index) => (
          <div
            key={index}
            className="relative min-w-[240px] sm:min-w-[280px] md:min-w-[350px] h-52 rounded-2 overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => navigate(`/gallery/${event.id}`)}
          >
            {/* Image */}
            <img
              src={event.images[0]}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Title (hide on hover) */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-center py-2 transition duration-300 group-hover:opacity-0">
              <p className="text-white font-semibold">{event.title}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 bg-opacity-0 group-hover:bg-opacity-60 transition duration-500 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100">
              <p className="text-white font-semibold">{event.title}</p> <br />
              <div className="flex items-center gap-2 px-3 py-2 rounded red-btn">
                <span className="text-sm">Click to view</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 15s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default GalleryPreview;
