import React from "react";
import { GraduationCap, FileText, Mail } from "lucide-react";
import HeadingUnderline from "@/components/HeadingUnderline";

const CommitteeSection = ({ slug, committeeData }) => {
  if (!committeeData) {
    return (
      <div className="flex-1 p-6 border-r border-gray-400">
        <h1 className="text-xl font-semibold text-red-600">
          Committee Not Found
        </h1>
        <p className="text-gray-600">Please choose a valid committee.</p>
      </div>
    );
  }

  const { objectives = [], members = [], circulars = [] } = committeeData;

  // Create a friendly title from slug
  const title = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Committee";

  return (
    <div className="flex-1 px-6 border-r border-gray-400">
      {/* ===== TOP JUMP MENU ===== */}
      <div className="flex  items-center border-b border-t border-gray-300 py-3 mb-6 sticky top-0 bg-white z-10">
        <a
          href="#objectives"
          className="px-4 py-2 border-r border-gray-200 hover:underline"
        >
          Objectives
        </a>

        <a
          href="#members"
          className="px-4 py-2 border-r border-gray-200 hover:underline"
        >
          Members
        </a>

        <a href="#circulars" className="px-4 py-2 hover:underline">
          Circulars
        </a>
      </div>

      {/* OBJECTIVES */}
      <section id="objectives" className="mb-12">
        <h2 className="text-2xl font-bold">{title} — Objectives</h2>
        <HeadingUnderline width={150} align="left" />

        {objectives.length > 0 ? (
          <ul className="space-y-3">
            {objectives.map((item) => (
              <li key={item.id} className="flex gap-3">
                <GraduationCap className="w-5 h-5 text-purple-700 mt-1 flex-shrink-0" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No objectives listed yet.</p>
        )}
      </section>

      {/* MEMBERS */}
      <section id="members" className="mb-12">
        <h2 className="text-2xl font-bold">Members</h2>
        <HeadingUnderline width={120} align="left" />

        {members.length > 0 ? (
          <div className="space-y-6">
            {members.map((m) => (
              <div
                key={m.id}
                className="grid grid-cols-1 md:grid-cols-3 bg-white  rounded-lg shadow"
              >
                {/* LEFT IMAGE */}
                <div className="flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-300">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-purple-200">
                    <img
                      src={m.image || "/placeholder-profile.jpg"}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* MIDDLE */}
                <div className="flex flex-col justify-center p-6 border-b md:border-b-0 md:border-r border-gray-300 text-center md:text-left">
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-gray-700 mt-2">{m.designation}</p>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col justify-center p-6">
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="flex gap-2 items-center text-sm text-gray-700 break-all">
                    <Mail size={17} className="flex-shrink-0" />
                    <a
                      href={`mailto:${m.email}`}
                      className="hover:text-purple-700 hover:underline"
                    >
                      {m.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No members listed yet.</p>
        )}
      </section>

      {/* CIRCULARS */}
      <section id="circulars">
        <h2 className="text-2xl font-bold">Circulars</h2>
        <HeadingUnderline width={120} align="left" />
        {circulars.length > 0 ? (
          <ul className="space-y-4">
            {circulars.map((c) => (
              <li key={c.id} className="flex gap-3 text-purple-700">
                <FileText size={20} className="flex-shrink-0 mt-1" />
                <a
                  href={c.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No circulars available yet.</p>
        )}
      </section>
    </div>
  );
};

export default CommitteeSection;
