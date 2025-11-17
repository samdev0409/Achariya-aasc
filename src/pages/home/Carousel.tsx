"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80", // group studying outdoors
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80", // classroom learning
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80", // students discussing project
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[55vh] lg:h-[65vh] overflow-hidden shadow-xl">
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
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-purple p-2 rounded-full shadow-md transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-purple p-2 rounded-full shadow-md transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Navigation (bottom overlay) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
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
