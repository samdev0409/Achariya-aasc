import React from "react";
import underline from "@/assets/images/underline/decorative-line-divider-design.png";

const HeadingUnderline = ({ width = 300, className = "", align = "center" }) => {
  // Map align prop to Tailwind classes
  const alignClass =
    align === "left"
      ? "ml-0 mr-auto"
      : align === "right"
      ? "ml-auto mr-0"
      : "mx-auto"; // default center

  return (
    <img
      src={underline}
      width={width}
      className={`${alignClass} mb-4 py-2 ${className}`}
      alt="underline"
    />
  );
};

export default HeadingUnderline;
