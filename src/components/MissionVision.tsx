import React from "react";
import HeadingUnderline from "./reusable/HeadingUnderline";
import VideoPopup from "@/components/reusable/VideoPopup"; // <-- IMPORT POPUP HERE
import Heading from "./reusable/Heading";

interface MissionVisionProps {
  data: {
    mission: { title: string; description: string };
    vision: { title: string; description: string };
    image: string;
    videoUrl: string;
    ctaText: string;
    ctaLink: string;
  };
}

const MissionVision: React.FC<MissionVisionProps> = ({ data }) => {
  return (
    <section className="bg-background px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* LEFT SIDE — TEXT */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Mission */}
          <Heading title={data.mission.title} size="lg" align="left" />
          <HeadingUnderline width={150} align="left" />
          <p className="leading-relaxed mb-4">{data.mission.description}</p>

 <div className="md:w-1/2 md:hidden py-6  block ">
          <VideoPopup thumbnail={data.image} videoUrl={data.videoUrl} />
        </div>
          {/* Vision */}
          <Heading title={data.vision.title} size="lg" align="left" />
          <HeadingUnderline width={150} align="left" />
          <p className="leading-relaxed mb-6">{data.vision.description}</p>

          {/* CTA */}
          <a href={data.ctaLink} className="red-btn">
            {data.ctaText}
          </a>
        </div>

        {/* RIGHT SIDE — VIDEO (REPLACED WITH VideoPopup) */}
        <div className="md:w-1/2 md:block hidden">
          <VideoPopup thumbnail={data.image} videoUrl={data.videoUrl} />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
