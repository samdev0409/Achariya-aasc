import React from "react";
import leads from "@/data/OurLeads.js";
import cementbg from "@/assets/images/bg/2151890618.jpg";
import HeadingUnderline from "./HeadingUnderline";
import { Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurLeadership: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      className=" pt-6
    bg-background text-foreground"
    >
      <div className="container mx-auto">
        <div className="justify-center flex flex-row ">
          {leads.map((lead) => (
            <div
              key={lead.name}
              className="bg-card text-center rounded-lg  p-6 transition-shadow duration-300"
            >
              <div
                className="mx-auto mb-4 w-[350px] h-[350px] hover:cursor-pointer rounded overflow-hidden border border-gray-300"
                style={{ backgroundImage: `url(${cementbg})` }}
                onClick={() => navigate(lead.path)}
              >
                <img
                  src={lead.img}
                  alt={lead.name}
                  width={250}
                  height={250}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-2xl font-semibold text-purple mb-1">
                {lead.name}
              </h3>
              <p className="text-md text-gray-600">{lead.role}</p>
              <HeadingUnderline width={170} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
