import React from "react";
import cementbg from "@/assets/images/bg/2151890618.webp";
import HeadingUnderline from "./reusable/HeadingUnderline";
import Heading from "./reusable/Heading";
import { useNavigate } from "react-router-dom";
import { OurLeads } from "@/data/home/OurLeads.js";

interface Lead {
  name: string;
  role: string;
  img: string;
  path: string;
}

interface OurLeadershipProps {
  overrideData?: {
    leads: Lead[];
  };
}

const OurLeadership: React.FC<OurLeadershipProps> = ({ overrideData }) => {
  const navigate = useNavigate();

  /** STATIC in public, DYNAMIC in preview */
  const data = overrideData?.leads || OurLeads;

  /** detect preview mode */
  const isPreview = Boolean(overrideData);

  /**
   * UNIVERSAL IMAGE URL RESOLVER
   * Matches ProfileOfCollege pattern exactly
   */
  const resolveImageUrl = (img: string) => {
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
  };

  return (
    <section className="py-8">
      <div className="container px-4">
        <div className="flex gap-4 flex-col md:flex-row justify-center">
          {data.map((lead, idx) => (
            <div
              key={idx}
              className="bg-card text-center rounded-lg p-2 hover:shadow-md hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div
                className="mx-auto mb-4 max-w-96 w-full aspect-square rounded overflow-hidden "
                style={{ backgroundImage: `url(${cementbg})` }}
                onClick={() => navigate(lead.path)}
              >
                <img
                  src={resolveImageUrl(lead.img)}
                  alt={lead.name}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>

              <Heading title={lead.name} size="sm" align="center" />
              <p className="text-sm text-gray-600 mb-2">{lead.role}</p>
              <HeadingUnderline width={170} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
