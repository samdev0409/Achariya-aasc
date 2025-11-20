import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import tag from "@/assets/icons/achievements-stats/medal.png";
import medal from "@/assets/icons/achievements-stats/medal-ribbon.png";
import internationalPlacement from "@/assets/icons/achievements-stats/airplane-travel-around-the-world.png";
import gradhat from "@/assets/icons/achievements-stats/graduate.png";
import studentGroup from "@/assets/icons/achievements-stats/group.png";

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
const AchievementsStats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const placements = useCountUp(4743, 4754, 1500, isInView);
  const national = useCountUp(0, 60, 1500, isInView);
  const international = useCountUp(0, 5, 1500, isInView);
  const goldMedals = useCountUp(0, 66, 1500, isInView);
  const years = useCountUp(0, 20, 1500, isInView);

  const stats = [
    { label: " Placements So Far", icons: tag, value: placements, suffix: "+" },
    { label: "National Placements", icons: gradhat, value: national, suffix: "+" },
    { label: "International Placements", icons: internationalPlacement, value: international, suffix: "+" },
    { label: "University Gold Medals", icons: medal, value: goldMedals, suffix: "+" },
    { label: "Years of Excellence", icons: studentGroup, value: years, suffix: "+" },
  ];

  return (
    <section ref={ref} className=" text-foreground container">
      <div className="mx-2 text-center ">
        <div className="flex justify-center align-center gap-4">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="rounded py-6 px-6 bg-white shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
            >
              {/* OUTER CIRCLE (ROTATES FORWARD) */}
              <div className="relative w-36 h-36 mx-auto mb-4">
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
                      border border-transparent
                      flex items-center justify-center
                      animate-rotateReverse
                    "
                  >
                    <motion.img
                      src={item.icons}
                      alt="icon"
                      className="w-16 h-16"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                </div>
              </div>

              {/* NUMBER */}
              <motion.p
                className="text-4xl font-bold text-[#16611C]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.value.toLocaleString()}
                <span className="text-xl">{item.suffix}</span>
              </motion.p>

              <p className="text-muted-foreground mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* KEYFRAMES STYLE */}
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
