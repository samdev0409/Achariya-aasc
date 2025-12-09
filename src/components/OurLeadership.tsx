import React from "react";
import cementbg from "@/assets/images/bg/2151890618.jpg";
import HeadingUnderline from "./reusable/HeadingUnderline";
import Heading from "./reusable/Heading";
import { useNavigate } from "react-router-dom";

interface Lead {
  name: string;
  role: string;
  img: string;
  path: string;
}

interface OurLeadershipProps {
  leads: Lead[];
}

const OurLeadership: React.FC<OurLeadershipProps> = ({ leads }) => {
  const navigate = useNavigate();

  return (
    <section className=" pt-8">
      <div className="container px-4">
        <div
          className="flex flex-col md:flex-row justify-center
  "
        >
          {leads.map((lead) => (
            <div
              key={lead.name}
              className="
        bg-card 
        text-center 
        rounded-lg  
        p-2 
        transition-shadow 
        duration-300 
        hover:shadow-xl
      "
            >
              {/* Image Wrapper */}
              <div
                className="
          mx-auto
          mb-4 
          max-w-96 
         
          w-full 
          aspect-square 
          rounded 
          overflow-hidden 
          border 
          border-gray-300 
          cursor-pointer
        "
                style={{ backgroundImage: `url(${cementbg})` }}
                onClick={() => navigate(lead.path)}
              >
                <img
                  src={lead.img}
                  alt={lead.name}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>

              <Heading
                title={lead.name}
                size="sm"
                align="center"
                className="mb-1"
              />

              <p className="text-sm md:text-md text-gray-600 mb-2">
                {lead.role}
              </p>

              <HeadingUnderline width={170} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
