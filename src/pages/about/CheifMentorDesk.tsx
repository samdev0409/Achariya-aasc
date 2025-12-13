import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import { chiefMentorData } from "@/data/about/chiefmentordata";
import Heading from "@/components/reusable/Heading";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import React from "react";

interface ChiefMentorDeskProps {
  overrideData?: {
    content?: {
      title: string;
      ourleadsimage: string;
      cheifmentordeskimage: string;
      paragraphs: string[];
      signOff: {
        text: string;
        name: string;
        title: string;
      };
    };
  };
}

const CheifMentorDesk: React.FC<ChiefMentorDeskProps> = ({ overrideData }) => {
  // STATIC banner → always from data file
  const banner = chiefMentorData.banner;

  // content = dynamic in preview, static in public view
  const content = overrideData?.content || chiefMentorData.content;

  // detect admin live preview mode
  const isPreview = Boolean(overrideData);

  // static image from public data file
  const staticImage = chiefMentorData.content.cheifmentordeskimage;

  // ----------------------------------------------------
  // UNIVERSAL IMAGE URL RESOLVER (FINAL FIX)
  // ----------------------------------------------------
  function resolveImageUrl(img: string) {
    if (!img) return "";

    // CASE 1 — Already full URL (after save)
    if (img.startsWith("http://") || img.startsWith("https://")) {
      return img;
    }

    // CASE 2 — Temp file (filename only)
    // e.g. "123123-image.png"
    if (!img.includes("/assets/images/")) {
      return `${import.meta.env.VITE_API_URL}/assets/images/temp/${img}`;
    }

    // CASE 3 — A backend-built final path already
    return img;
  }

  // FINAL resolved image URL (preview or public)
  const imageUrl = isPreview
    ? resolveImageUrl(content.cheifmentordeskimage)
    : staticImage;

  console.log("Resolved Live Preview Image URL:", imageUrl);

  return (
    <>
      <BannerAndBreadCrumb title={banner.title} img={banner.image} />

      <section className="bg-background container py-10 mt-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="relative w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt="Chief Mentor"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <Heading title={content.title} size="lg" align="left" />
            <HeadingUnderline width={200} align="left" />

            {content.paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                <p className="leading-relaxed break-word">{paragraph}</p>
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
