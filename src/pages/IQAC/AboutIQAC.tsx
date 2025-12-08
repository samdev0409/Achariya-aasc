import React from "react";
import campus from "@/assets/images/aasc_building.webp";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import Heading from "@/components/reusable/Heading";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import { GraduationCap } from "lucide-react";

const AboutIQAC = () => {
  const iqacInfo = [
    {
      id: 1,
      text: "The Internal Quality Assurance Cell (IQAC) is established to develop a quality system for conscious, consistent, and catalytic improvement in the performance of the institution.",
    },
    {
      id: 2,
      text: "IQAC works towards internalizing and institutionalizing quality enhancement initiatives across all academic and administrative activities.",
    },
    {
      id: 3,
      text: "It facilitates the creation of a learner-centric environment by supporting effective teaching-learning practices and enhancing student engagement.",
    },
    {
      id: 4,
      text: "IQAC coordinates quality-related activities, including documentation, best practice dissemination, academic audits, and periodic reviews for continuous improvement.",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <BannerAndBreadCrumb img={campus} title="About IQAC" />

      {/* Content Section */}
      <section className="bg-background container pt-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 aspect-video  overflow-hidden">
            <img
              src={campus}
              alt="NAAC"
              className="w-full h-full  object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <div>
              <Heading
                title="Internal Quality Assurance Cell (IQAC)"
                size="lg"
                align="left"
              />
              <HeadingUnderline width={200} align="left" />
            </div>

            {/* Info List */}
            <ul className="space-y-4">
              {iqacInfo.map((item) => (
                <li key={item.id} className="flex text-start gap-3">
                  <div className="w-5 h-5 flex items-start justify-center pt-1">
                    <GraduationCap className="w-4 h-4 text-purple-700" />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* No Document Section (as requested) */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutIQAC;
