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
  const [direction, setDirection] = useState(1); // 1 = left to right, -1 = right to left

  // Auto-slide every 3 seconds (left to right direction)
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Auto-slide always goes left to right
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setDirection(1); // Next button = left to right
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1); // Previous button = right to left
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Variants for smooth directional sliding
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-hidden bg-gray-900">
      {/* Image Slide */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {/* Gradient overlay for better text or visual blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white  p-2 rounded-full shadow-md transition z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 opacity-20 hover:opacity-30" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-purple-600 p-2 rounded-full shadow-md transition z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 opacity-20 hover:opacity-30" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;