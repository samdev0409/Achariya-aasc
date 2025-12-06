import React from "react";
import bgLeft from "@/assets/images/bg/bg-pattern-1.png";
import bgRight from "@/assets/images/bg/bg-pattern-2.png";

const LeftRightBorder: React.FC = () => {
  return (
    <div className="w-full">
      {/* LEFT FLOATING BORDER IMAGE */}
      <img
        src={bgLeft}
        alt="Left Border"
        className="
          fixed top-0 left-0
          h-screen
          w-[50px]
          md:w-[180px]
          lg:w-[270px]
          object-cover
          opacity-20
          pointer-events-none
          z-[98]
          transition-all duration-300
          my-12
        "
        style={{
          mixBlendMode: 'multiply',
          backgroundColor: 'transparent'
        }}
      />
      {/* RIGHT FLOATING BORDER IMAGE */}
      <img
        src={bgRight}
        alt="Right Border"
        className="
          fixed top-0 right-0
          h-screen
          w-[50px]
          md:w-[180px]
          lg:w-[270px]
          object-cover
          opacity-20
          pointer-events-none
          z-[98]
          transition-all duration-300
          my-12
        "
        style={{
          mixBlendMode: 'multiply',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
};

export default LeftRightBorder;