import React from "react";
import { Phone, Mail } from "lucide-react";

const FacultyProfile = ({
  image,
  name,
  department,
  designation,
  phone,
  email,
}) => {
  return (
    <section className="w-full mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
       

        {/* MIDDLE — NAME + DEPARTMENT + DESIGNATION */}
        <div className="flex flex-col justify-center text-center md:text-left border-b md:border-b-0 md:border-r border-gray-300 p-6">
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          <p className="text-sm text-gray-600 mt-1">{department}</p>
          <p className="text-sm text-gray-700 mt-2">{designation}</p>
        </div>

         {/* LEFT — IMAGE */}
        <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-300 p-6">
          <div className="w-40 h-40 rounded-full ring-1 ring-gray-300 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT — CONTACT DETAILS */}
        <div className="flex flex-col justify-center p-6 space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">Contact</h2>

          {/* Phone */}
          <p className="flex items-center gap-2 text-gray-700 text-sm">
            <Phone size={17} />
            <a href={`tel:${phone}`} className="hover:text-black duration-200">
              {phone}
            </a>
          </p>

          {/* Email */}
          <p className="flex items-center gap-2 text-gray-700 text-sm break-all">
            <Mail size={17} />
            <a
              href={`mailto:${email}`}
              className="hover:text-black duration-200"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacultyProfile;
