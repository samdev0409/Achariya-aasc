import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import { principalData } from "@/data/about/principaldata";
import Heading from "@/components/reusable/Heading";
import React from "react";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";

const PrincipalDesk = () => {
  const { banner, content } = principalData;

  return (
    <>
      <BannerAndBreadCrumb title={banner.title} img={banner.image} />
      <section className="bg-background container py-4 md:py-10 mt-10">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* mobile screen heading */}
          <div className="md:hidden block ">
            <Heading
              title={content.title}
              size="lg"
              align="left"
              className=""
            />
            <HeadingUnderline width={150} align="start" />
          </div>

          <div className="relative w-full md:w-1/2  overflow-hidden shadow-lg rounded-lg">
            <img
              src={content.image}
              alt="Principal"
              className="w-full h-full object-cover"
            />
          </div>
          {/* 🏫 Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* Large screen heading */}
            <div className="md:block hidden">
              <Heading
                title={content.title}
                size="lg"
                align="left"
                className=""
              />
              <HeadingUnderline width={200} align="left" />
            </div>

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
      </section>
      <hr className="container" />
    </>
  );
};

export default PrincipalDesk;
