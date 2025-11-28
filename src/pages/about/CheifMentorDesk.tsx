import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import { chiefMentorData } from "@/data/about/chiefmentordata";
import Heading from "@/components/reusable/Heading";

const CheifMentorDesk = () => {
  const { banner, content } = chiefMentorData;

  return (
    <>
      <BannerAndBreadCrumb title={banner.title} img={banner.image} />

      <section className="bg-background container py-10 mt-10">
        <div className="flex flex-col md:flex-row gap-10 flex items-center">
          <div className="relative w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
            <img
              src={content.image}
              alt="Chief Mentor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 🏫 Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <Heading
              title={content.title}
              size="lg"
              align="left"
      
            />
                          <HeadingUnderline width={200} align="left" />

            {content.paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                <p className="leading-relaxed">{paragraph}</p>
                {index < content.paragraphs.length - 1 && <br />}
              </React.Fragment>
            ))}

            <div className="mt-5">
              <a href={content.cta.link} className="red-btn ">
                {content.cta.text}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React from "react"; // Import React for Fragment
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
export default CheifMentorDesk;
