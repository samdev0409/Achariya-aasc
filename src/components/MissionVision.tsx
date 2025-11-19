import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import thumb from "@/assets/images/md.png";
import { Head } from "react-day-picker";
import HeadingUnderline from "./HeadingUnderline";

const MissionVision = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-background ">
      <div className="flex flex-col md:flex-row gap-10">
        {/* 🏫 Content Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-purple">Our Mission</h2>
            <HeadingUnderline width={150} align="left" />
          </div>
          <p className=" leading-relaxed">
            Achariya Arts and Science College, Puducherry, is one of the premier
            institutions under the Achariya Group of Educational Institutions.
            Established with a vision to provide holistic education and empower
            students with academic excellence, values, and skills, Achariya
            offers a wide range of undergraduate and postgraduate programs in
            arts, science, and commerce. The college fosters innovation,
            discipline, and leadership among its students.
          </p>
          <div>
            <h2 className="text-3xl font-bold text-purple">Our Vision</h2>
            <HeadingUnderline width={150} align="left" />
          </div>{" "}
          <p className=" leading-relaxed">
            Achariya Arts and Science College, Puducherry, is one of the premier
            institutions under the Achariya Group of Educational Institutions.
            Established with a vision to provide holistic education and empower
            students with academic excellence, values, and skills, Achariya
            offers a wide range of undergraduate and postgraduate programs in
            arts, science, and commerce. The college fosters innovation,
            discipline, and leadership among its students.
          </p>
          <div>
            <a href="#contact" className="red-btn">
              For Admissions
            </a>
          </div>
        </div>

        {/* 🎥 Video Section */}
        <div className="relative w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
          {/* Placeholder thumbnail */}
          <img
            src={thumb}
            alt="Our Campus"
            className="w-full h-full object-cover"
          />

          {/* Animated Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute rounded-full border-4 border-white/40 w-20 h-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative bg-white/90 rounded-full p-4 shadow-md hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-8 h-8 text-purple-700" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* 🎬 Fullscreen Video Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-purple-400 transition"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Vimeo Video (no controls, autoplay) */}
            <motion.div
              className="w-full max-w-4xl aspect-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* <iframe
                src="https://player.vimeo.com/video/996960549?autoplay=1&title=0&byline=0&portrait=0&controls=0"
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe> */}

              <iframe
                className="w-full h-full rounded-lg"
                title="vimeo-player"
                src="https://player.vimeo.com/video/996958609?h=fe176b5239"
                width="640"
                height="360"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MissionVision;
