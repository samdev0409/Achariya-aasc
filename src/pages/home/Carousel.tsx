import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import carousel images
import carousel1 from "@/assets/images/carousel/5-2-2048x908.jpg";
import carousel2 from "@/assets/images/carousel/12-2048x908.jpg";
import carousel3 from "@/assets/images/carousel/20-2048x908.png";
import carousel4 from "@/assets/images/carousel/21-2048x908.png";
import carousel5 from "@/assets/images/carousel/22-2048x908.png";
import carousel6 from "@/assets/images/carousel/23-2048x908.png";
import carousel7 from "@/assets/images/carousel/24-2048x908.png";
import carousel8 from "@/assets/images/carousel/25-2048x908.png";
import carousel9 from "@/assets/images/carousel/boobesh-2048x908.jpg";
import carousel10 from "@/assets/images/carousel/Untitled-2480-x-909-px-2048x908.png";

const Carousel = () => {
  const images = [
    carousel10,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
    carousel8,
    carousel9,

    carousel1,
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[55vh] lg:h-[65vh] overflow-hidden shadow-xl rounded-lg">
      {/* Image Slide */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient overlay for better text or visual blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-purple p-2 rounded-full shadow-md transition z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-purple p-2 rounded-full shadow-md transition z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Navigation (bottom overlay) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current
                  ? "bg-purple scale-110"
                  : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
