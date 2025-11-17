import React from "react";
import ChiefMentor from "@/assets/cheif-mentor/Dr.-J.arawindhan.png";

const OurLeadership: React.FC = () => {
  const leads = [
    {
      name: "Dr.J.arawindhan",
      role: "Chief Mentor",
      img: ChiefMentor,
    },
    {
      name: "Dr.J.arawindhan",
      role: "Chief Mentor",
      img: ChiefMentor,
    },
    {
      name: "Dr.J.arawindhan",
      role: "Chief Mentor",
      img: ChiefMentor,
    },
    // {
    //   name: "Shri S. Chandrasekaran",
    //   role: "Vice-Chairman",
    //   img: placeholderImage,
    // },
    // {
    //   name: "Smt. S. Sangavai",
    //   role: "Secretary",
    //   img: placeholderImage,
    // },
    // {
    //   name: "Shri S. Sankaranarayanan",
    //   role: "Joint Secretary",
    //   img: placeholderImage,
    // },
  ];

  return (
    <section className=" pt-6
    6 bg-background text-foreground">
      <div className="container mx-auto">
        <div className="justify-center flex flex-row ">
          {leads.map((lead) => (
            <div
              key={lead.name}
              className="bg-card text-center rounded-lg  p-6 transition-shadow duration-300"
            >
              <div className="mx-auto mb-4 w-[250px] h-[250px] rounded overflow-hidden border border-gray-300">
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
              <p className="text-sm text-gray-600">{lead.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
