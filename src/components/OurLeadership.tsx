import React from "react";
import placeholderImage from "@/assets/17122.jpg";

const OurLeadership: React.FC = () => {
  const leads = [
    {
      name: "Shri C. Sundarapandian",
      role: "Founder Chairman",
      img: placeholderImage,
    },
    {
      name: "Shri S. Chandrasekaran",
      role: "Vice-Chairman",
      img: placeholderImage,
    },
    {
      name: "Smt. S. Sangavai",
      role: "Secretary",
      img: placeholderImage,
    },
    {
      name: "Shri S. Sankaranarayanan",
      role: "Joint Secretary",
      img: placeholderImage,
    },
  ];

  return (
    <section className="pb-16 pt-
    6 bg-background text-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {leads.map((lead) => (
            <div
              key={lead.name}
              className="bg-card text-center rounded-lg  p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mx-auto mb-4 w-full h-full rounded overflow-hidden border border-gray-300">
                <img
                  src={lead.img}
                  alt={lead.name}
                  width={250}
                  height={250}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple mb-1">
                {lead.name}
              </h3>
              <p className="text-sm text-muted-foreground">{lead.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
