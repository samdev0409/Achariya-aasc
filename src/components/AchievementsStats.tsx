
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// -------------------------------------------
// COUNT UP HOOK
// -------------------------------------------
const useCountUp = (start, end, duration = 3000, trigger) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setCount(current);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, trigger]);

  return count;
};

// -------------------------------------------
// MAIN COMPONENT
// -------------------------------------------
const AchievementsStats = ({ stats: statsData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Create animated stats with count-up values
  const stats = statsData.map((stat) => ({
    ...stat,
    value: useCountUp(stat.startValue, stat.endValue, 1500, isInView),
  }));

  return (
    <section ref={ref} className="w-full py-8 flex items-center justify-center">
      <div className="w-full max-w-7xl px-4">
        {/* ★ Responsive Grid Layout ★ */}
        <div
          className="
            grid 
            grid-cols-2        /* 2 per row on mobile */
            sm:grid-cols-3     /* 3 per row on tablets */
            md:grid-cols-5     /* 6 per row on medium+ screens */
            lg:grid-cols-5     /* 6 per row on large screens */
             gap-4 sm:gap-6    /* spacing between cards */
            justify-items-center
            place-items-center
          "
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="rounded py-4 sm:py-6 sm:px-6 bg-white shadow w-full h-full flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
            >
              {/* OUTER CIRCLE (ROTATES FORWARD) */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-3 sm:mb-4">
                <div
                  className="
                    outer-circle absolute inset-0 rounded-full p-[2px]
                    bg-gradient-to-br from-[#ff4d4d] via-[#ffc5c5] to-[#ffffff]
                    animate-rotateForward
                  "
                >
                  {/* INNER CIRCLE (ROTATES IN REVERSE) */}
                  <div
                    className="
                      inner-circle rounded-full w-full h-full bg-white 
                      flex items-center justify-center
                      animate-rotateReverse
                    "
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-2xl">
                      <img src={item.icons} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* NUMBER */}
              <motion.p
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16611C] text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.value.toLocaleString()}
                <span className="text-base sm:text-lg md:text-xl">{item.suffix}</span>
              </motion.p>

              <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes rotateForward {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes rotateReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-rotateForward {
          animation: rotateForward 3s linear infinite;
        }

        .animate-rotateReverse {
          animation: rotateReverse 3s linear infinite;
        }
      `}</style>
    </section>
  );
};


export default AchievementsStats;
