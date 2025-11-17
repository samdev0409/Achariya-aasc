import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videosRaw = [
  // provided iframe embed (kept as embed src)
  "https://www.youtube.com/embed/DCS3cdSSXdM",
  // short youtu.be link -> normalized to embed id
  "https://youtu.be/si-MknERvy4",
  // provided iframe embed
  "https://www.youtube.com/embed/jrtTtCIVOCw",
  // provided iframe embed (kept as embed src)
  "https://www.youtube.com/embed/DCS3cdSSXdM",
  // short youtu.be link -> normalized to embed id
  "https://youtu.be/si-MknERvy4",
  // provided iframe embed
  "https://www.youtube.com/embed/jrtTtCIVOCw",
];

const normalizeToEmbed = (url: string) => {
  // handle youtu.be short links and full youtube watch URLs
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("youtube.com")) {
      // if already embed, return as-is
      if (u.pathname.startsWith("/embed/")) return url;
      // handle watch?v=
      const params = u.searchParams;
      const id = params.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch {
    // not a URL (could be already an embed path) -> return input
  }
  return url;
};

const Testimonials: React.FC = () => {
  const videos = useMemo(() => videosRaw.map((v) => normalizeToEmbed(v)), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // fixed item size (you asked constant width/height)
  // We'll adapt itemWidth based on itemsPerPage so layout stays consistent
  const itemWidth = 360; // px
  const itemHeight = 202; // px (approx 16:9 scaled)

  // responsive items per page
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerPage(1); // mobile
      else if (w < 1024) setItemsPerPage(2); // tablet
      else setItemsPerPage(3); // desktop
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, videos.length - itemsPerPage);

  const prev = () => {
    // wrap-around
    setCurrentIndex((prev) => {
      if (prev <= 0) return maxIndex;
      return prev - 1;
    });
  };

  const next = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
  };

  // ensure currentIndex is within bounds when itemsPerPage changes
  useEffect(() => {
    setCurrentIndex((ci) => Math.min(ci, maxIndex));
  }, [itemsPerPage, maxIndex]);

  // compute translateX
  const translateX = -(currentIndex * (itemWidth + 16)); // 16 = gap px

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold text-center text-purple mb-7">
        Testimonials
      </h2>
        <div className="relative">
          {/* Left Arrow */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-transparent border border-border rounded-full p-2 shadow hover:scale-105 transition transform"
            style={{ marginLeft: -24 }}
          >
            <ChevronLeft className="w-6 h-6 text-purple" />
          </button>

          {/* Right Arrow */}
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-4 bg-transparent top-1/2 -translate-y-1/2 z-20  border border-border rounded-full p-2 shadow hover:scale-105 transition transform"
            style={{ marginRight: -24 }}
          >
            <ChevronRight className="w-6 h-6 text-purple" />
          </button>

            <div className="w-full flex justify-center">
          {/* Visible viewport */}
          <div
            className="overflow-hidden"
            style={{
              width: itemsPerPage * (itemWidth + 16) - 16, // account for gaps
            }}
            ref={containerRef}
          >
            {/* Sliding track */}
            <div
              className="flex items-start gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateX}px)`,
              }}
            >
              {/* Render videos, duplicate sequence to allow smoother wrap if desired */}
              {videos.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 rounded-lg overflow-hidden shadow-md bg-black"
                  style={{
                    width: itemWidth,
                    height: itemHeight,
                  }}
                >
                  <iframe
                    title={`video-${idx}`}
                    src={`${src}?rel=0&modestbranding=1`}
                    width={itemWidth}
                    height={itemHeight}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>

        {/* Dots / indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition ${
                i === currentIndex ? "bg-purple" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
