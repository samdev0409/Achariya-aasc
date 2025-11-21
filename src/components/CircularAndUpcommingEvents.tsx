import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Camera,
  ChevronRight,
  GraduationCap,
  MoveRight,
} from "lucide-react";
import { CircularPreviewData } from "@/data/CircularPreviewData.js";
import { UpcommingEventsPreviewData } from "@/data/UpcommingEventsPreviewData.js";
import HeadingUnderline from "./HeadingUnderline";
import campus from "@/assets/images/aasc_building.png";
import AdmissionsOpenData from "@/data/AdmissionsOpenData.js";

const CircularAndUpcomingEvents: React.FC = () => {
  const navigate = useNavigate();
  const circularsAnim = useAnimation();
  const eventsAnim = useAnimation();
  const admissionsAnim = useAnimation();

  // 🔁 Seamless continuous vertical looping animation
  useEffect(() => {
    const createSeamlessLoop = async (controller) => {
      await controller.start({
        y: "-50%", // Move by half (since we duplicate the content)
        transition: {
          duration: 15, // Same speed for all
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    createSeamlessLoop(circularsAnim);
    createSeamlessLoop(eventsAnim);
    createSeamlessLoop(admissionsAnim);
  }, [circularsAnim, eventsAnim, admissionsAnim]);

  return (
    <section className="bg-background text-foreground">
      <div>
        <h2 className="text-3xl font-bold text-center text-purple">
          Important Announcements
        </h2>
        <HeadingUnderline width={200} align="center" />
        <p className="text-center max-w-5xl mb-4 mx-auto">
          Achariya Arts and Science College, Puducherry, is one of the premier
          institutions under the Achariya Group of Educational Institutions.
          Established with a vision to provide holistic education and empower
          students with academic excellence, values, and skills, Achariya offers
          a wide range of undergraduate and postgraduate programs in arts,
          science, and commerce. The college fosters innovation, discipline, and
          leadership among its students.
        </p>
      </div>
      <div className="mx-auto items-center grid grid-cols-1 md:grid-cols-3">
        {/* 🔔 Circulars Section */}
        <div className="bg-card rounded-lg border-r border-gray-200 p-6">
          <div>
            <h2 className="text-2xl font-bold text-left text-purple mb-5">
              E-Circulars
            </h2>
          </div>

          <div className="relative h-40 overflow-hidden">
            <motion.div animate={circularsAnim} className="flex flex-col gap-3">
              {/* Duplicate content for seamless loop */}
              {[...CircularPreviewData, ...CircularPreviewData].map(
                (item, index) => (
                  <div
                    key={index}
                    onClick={() => navigate('/circulars')}
                    className="flex items-center gap-2 cursor-pointer text-black hover:text-blue-600 transition-all duration-200 hover:underline"
                  >
                    <Bell className="w-4 h-4" />
                    <span>{item.title}</span>
                    <MoveRight className="w-4 h-4" />
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* 🎥 Upcoming Events Section */}
        <div className="bg-card rounded-lg p-6 border-r border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-left text-purple mb-5">
              Upcoming Events
            </h2>
          </div>

          <div className="relative h-40 overflow-hidden">
            <motion.div animate={eventsAnim} className="flex flex-col gap-3">
              {/* Duplicate content for seamless loop */}
              {[
                ...UpcommingEventsPreviewData,
                ...UpcommingEventsPreviewData,
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate('/upcomming-events')}
                  className="flex items-center gap-2 cursor-pointer text-black hover:text-blue-600 transition-all duration-200 hover:underline"
                >
                  <Camera className="w-4 h-4" />
                  <span>{item.title}</span>
                  <MoveRight className="w-4 h-4" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Admissions Open */}
        <div className="bg-card rounded-lg p-6">
          <div>
            <h2 className="text-2xl font-bold text-left text-purple mb-5">
              Admissions Open
            </h2>
          </div>

          <div className="relative h-40 overflow-hidden">
            <motion.div
              animate={admissionsAnim}
              className="flex flex-col gap-3"
            >
              {/* Duplicate content for seamless loop */}
              {[...AdmissionsOpenData, ...AdmissionsOpenData].map(
                (item, index) => (
                  <div
                    key={index}
                    onClick={() => navigate("/academics/ug-programs/existing")}
                    className="flex items-center gap-2 cursor-pointer text-black hover:text-blue-600 transition-all duration-200 hover:underline"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>
                      {item.degree} – {item.stream}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularAndUpcomingEvents;
