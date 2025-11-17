import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import dummy from "@/assets/icons/medal.png";

const useCountUp = (start: number, end: number, duration = 3000, trigger: boolean) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
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

const AchievementsStats: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // 👇 placements starts from 4743 and ends at 4754
  const placements = useCountUp(4743, 4754, 1500, isInView);
  const national = useCountUp(0, 60, 1500, isInView);
  const international = useCountUp(0, 5, 1500, isInView);
  const goldMedals = useCountUp(0, 66, 1500, isInView);
  const medals = useCountUp(0, 138, 1500, isInView);
  const years = useCountUp(0, 20, 1500, isInView);

  const stats = [
    { label: " Placements So Far", icons: dummy, value: placements, suffix: "+", color: "text-purple" },
    { label: "National Placements", icons: dummy, value: national, suffix: "+", color: "text-purple" },
    { label: "International Placements", icons: dummy, value: international, suffix: "+", color: "text-purple" },
    { label: "University Gold Medals", icons: dummy, value: goldMedals, suffix: "+", color: "text-purple" },
    { label: "Medals", icons: dummy, value: medals, suffix: "+", color: "text-purple" },
    { label: "Years of Excellence", icons: dummy, value: years, suffix: "+", color: "text-purple" },
  ];

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120, damping: 12 },
    }),
  };

  return (
    <section ref={ref} className="py-2 bg-gray-200 text-foreground overflow-hidden">
      <div className=" mx-2 text-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2  justify-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-lg py-6 px-6 bg-grey-300"
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
                 <motion.img
                src={item.icons}
                alt="icon"
                className="w-24 h-24 mx-auto mb-3"
                whileHover={{ scale: 1.1 }}
              />
              <motion.p
                className={`text-4xl font-bold ${item.color}`}
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
    </section>
  );
};

export default AchievementsStats;
