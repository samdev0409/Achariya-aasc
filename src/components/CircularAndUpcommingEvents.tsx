import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Bell, Camera } from "lucide-react"; // ✅ Lucide icons
import { CircularPreviewData } from "@/data/CircularPreviewData.js";
import { UpcommingEventsPreviewData } from "@/data/UpcommingEventsPreviewData.js";

const CircularAndUpcomingEvents: React.FC = () => {
  const navigate = useNavigate();
  const circularsAnim = useAnimation();
  const eventsAnim = useAnimation();

  // 🔁 Continuous vertical looping animation
  useEffect(() => {
    const animateCirculars = async () => {
      while (true) {
        await circularsAnim.start({
          y: "-100%",
          transition: { duration: 10, ease: "linear" },
        });
        circularsAnim.set({ y: 0 });
      }
    };

    const animateEvents = async () => {
      while (true) {
        await eventsAnim.start({
          y: "-100%",
          transition: { duration: 12, ease: "linear" },
        });
        eventsAnim.set({ y: 0 });
      }
    };

    animateCirculars();
    animateEvents();
  }, [circularsAnim, eventsAnim]);

  return (
    <section className="bg-background text-foreground ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 🔔 Circulars Section */}
        <div className="bg-card rounded-lg border-2 border-purple p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold text-purple border-b border-purple pb-2 mb-4 text-center">
            E - Circulars
          </h2>

          <div className="relative h-40 overflow-hidden">
            <motion.div
              animate={circularsAnim}
              className="flex flex-col gap-3 absolute top-0 left-0 right-0"
            >
              {[...CircularPreviewData, ...CircularPreviewData].map(
                (item, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="flex items-center gap-2 cursor-pointer text-black hover:text-blue-600 transition-all duration-200 hover:underline"
                  >
                    <Bell className="w-4 h-4 " />
                    <span>{item.title}</span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* 🎥 Upcoming Events Section */}
        <div className="bg-card rounded-lg border-2 border-purple p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold text-purple border-b border-purple pb-2 mb-4 text-center">
            Upcoming Events
          </h2>

          <div className="relative h-40 overflow-hidden">
            <motion.div
              animate={eventsAnim}
              className="flex flex-col gap-3 absolute top-0 left-0 right-0"
            >
              {[
                ...UpcommingEventsPreviewData,
                ...UpcommingEventsPreviewData,
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-2 cursor-pointer text-black hover:text-blue-600 transition-all duration-200 hover:underline"
                >
                  <Camera className="w-4 h-4 " />
                  <span>{item.title}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularAndUpcomingEvents;
