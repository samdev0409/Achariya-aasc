import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import HeadingUnderline from "./reusable/HeadingUnderline";
import VideoPopup from "./reusable/VideoPopup";
import Heading from "./reusable/Heading";

const OurCampus = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-background px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* {mobile screen heading} */}
        <div className="md:hidden block">
          <Heading title={data.title} size="lg" align="left" />
          <HeadingUnderline width={150} align="left" />
        </div>

        {/* Thumbnail + Play (THIS MUST TRIGGER POPUP) */}
        <div className="relative w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
          <VideoPopup thumbnail={data.image} videoUrl={data.videoUrl} />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* {large screen heading} */}
          <div className="md:block hidden">
            <Heading title={data.title} size="lg" align="left" />
            <HeadingUnderline width={150} align="left" />
          </div>
          <div className="mb-7">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </div>

          <a href="#contact" className="red-btn">
            For Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurCampus;
