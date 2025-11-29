import OurCampus from "@/components/OurCampus";
import OurRecruiters from "@/components/OurRecruiters";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Play, X } from "lucide-react";
import campus from "@/assets/images/aasc_building.png";
import { Head } from "react-day-picker";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import FacultyProfile from "@/components/FacultyProfile";
import TrainingAndPlacementsData from "@/data/TrainingAndPlacementsData.js";
import { homeData } from "@/data/home/allhomedata";
import Heading from "@/components/reusable/Heading";

const TrainingAndPlacementsCell = () => {
  const { TrainingAndPlacementsFacultyData, activities } =
    TrainingAndPlacementsData;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section>
        <BannerAndBreadCrumb
          img={campus}
          title="Training And Placements Cell"
        />
      </section>
      <div className="container md:py-10 py-3">
        <section className="bg-background py-10">
          <div className="md:hidden block ">
            <Heading
              title="Training and placements Cell"
              size="lg"
              align="left"
            />
            <HeadingUnderline width={150} align="left" />
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* 🎥 Video Section */}
            <div className="relative w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
              {/* Placeholder thumbnail */}
              <img
                src={campus}
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

            {/* 🏫 Content Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <div className="md:block hidden">
                <Heading
                  title="Training and placements Cell"
                  size="lg"
                  align="left"
                />
                <HeadingUnderline width={150} align="left" />
              </div>

              <p className=" leading-relaxed">
                The college has established a full-fledged and active Training
                and Placement Cell, which monitors the employment opportunities
                and arranges campus interviews for the pre-final year and final
                year students. Our college considers placement and training as
                its prime duty to every student who gets admission into the
                college. Placement cell edifies all the managerial traits, which
                are required for the students and prepare them according to the
                requirement of industry. The placement cell also facilitates to
                sign MOU with reputed organizations which are located in an
                around Pondicherry and Tamil Nadu.
              </p>
              <p className=" leading-relaxed">
                Achariya Arts and Science College, Puducherry, is one of the
                premier institutions under the Achariya Group of Educational
                Institutions. Established with a vision to provide holistic
                education and empower students with academic excellence, values,
                and skills, Achariya offers a wide range of undergraduate and
                postgraduate programs in arts, science, and commerce. The
                college fosters innovation, discipline, and leadership among its
                students.
              </p>
              <div>
                <a href="#contact" className="red-btn">
                  For Admissions
                </a>
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
                    src="https://player.vimeo.com/video/996960549?h=83a2493a4d"
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
        <section className="bg-background py-10">
          <div className="flex flex-col md:flex-row gap-10">
            {/* 🏫 Content Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-5">
              <div>
                <Heading
                  title="Training and placements Cell - Activities"
                  size="lg"
                  align="left"
                />
                <HeadingUnderline width={150} align="left" />
              </div>
              <div className="relative md:hidden  block  w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
                {/* Placeholder thumbnail */}
                <img
                  src={campus}
                  alt="Our Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-3 ">
                {activities.map((item) => (
                  <li key={item.id} className="flex gap-3 text-left">
                    <div className="w-5 h-5 flex items-start justify-center pt-1">
                      <GraduationCap className="w-4 h-4 text-purple-700" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* <div>
                <a href="#contact" className="red-btn">
                  For Admissions
                </a>
              </div> */}
            </div>
            <div className="relative md:block hidden w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
              {/* Placeholder thumbnail */}
              <img
                src={campus}
                alt="Our Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <Heading title="Faculty" size="lg" align="center" />
            <HeadingUnderline width={150} align="center" />
          </div>
          {TrainingAndPlacementsFacultyData.map((faculty, index) => (
            <FacultyProfile
              key={index}
              image={faculty.image}
              name={faculty.name}
              department={faculty.department}
              designation={faculty.designation}
              phone={faculty.phone}
              email={faculty.email}
            />
          ))}{" "}
        </section>

        <section>
          <div className="py-10">
            <OurRecruiters
              title={homeData.recruiters.title}
              logos={homeData.recruiters.logos}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default TrainingAndPlacementsCell;
