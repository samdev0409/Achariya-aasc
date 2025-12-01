import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import { chiefMentorData } from "@/data/about/chiefmentordata";
import Heading from "@/components/reusable/Heading";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import React from "react";

const CheifMentorDesk = () => {
  const { banner, content } = chiefMentorData;

  return (
    <>
      <BannerAndBreadCrumb title={banner.title} img={banner.image} />

      <section className="bg-background container py-10 mt-10">
        <div className="flex flex-col md:flex-row gap-10 flex items-center">
          <div className="relative w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
            <img
              src={content.cheifmentordeskimage}
              alt="Chief Mentor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 🏫 Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <Heading title={content.title} size="lg" align="left" />
            <HeadingUnderline width={200} align="left" />

            {content.paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                <p className="leading-relaxed">{paragraph}</p>
                {index < content.paragraphs.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-right py-6">
          <p>{content.signOff.text}</p>
          <h4 className="md:text-xl text-md font-bold">
            {content.signOff.name}
          </h4>
          <em>{content.signOff.title}</em>
        </div>
        <hr className="container" />
      </section>
    </>
  );
};

export default CheifMentorDesk;
