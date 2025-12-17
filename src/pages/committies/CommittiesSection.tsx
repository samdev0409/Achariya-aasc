import React from "react";
import { GraduationCap, FileText, Mail } from "lucide-react";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import Heading from "@/components/reusable/Heading";
import placeholder from "@/assets/images/17122.webp";

interface CommitteeSectionProps {
  slug?: string;
  committeeData?: any;
  overrideData?: any;
}

const CommitteeSection: React.FC<CommitteeSectionProps> = ({
  slug,
  committeeData,
  overrideData,
}) => {
  const isPreview = Boolean(overrideData);

  // ----------------------------------------------------
  // UNIVERSAL IMAGE/FILE URL RESOLVER
  // ----------------------------------------------------
  function resolveImageUrl(img: string) {
    if (!img) return placeholder;

    // CASE 1 — Already full URL (after save)
    if (img.startsWith("http://") || img.startsWith("https://")) {
      return img;
    }

    // CASE 2 — Temp file (filename only)
    if (!img.includes("/assets/images/")) {
      return `${import.meta.env.VITE_API_URL}/assets/images/temp/${img}`;
    }

    // CASE 3 — A backend-built final path already
    return `${import.meta.env.VITE_API_URL}${img}`;
  }

  function resolveFileUrl(file: string) {
    if (!file) return "";

    // CASE 1 — Already full URL (after save)
    if (file.startsWith("http://") || file.startsWith("https://")) {
      return file;
    }

    // CASE 2 — Temp file (filename only)
    if (!file.includes("/assets/documents/")) {
      return `${import.meta.env.VITE_API_URL}/assets/documents/temp/${file}`;
    }

    // CASE 3 — A backend-built final path already
    return file;
  }

  if (!committeeData) {
    return (
      <div className="flex-1 md:p-6 p-4 ">
        <Heading
          title="Committee Not Found"
          size="sm"
          align="left"
          className="text-red-600 font-semibold"
        />
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
    <div className="flex-1 px-6 border-r border-gray-300">
      {/* ===== TOP JUMP MENU ===== */}
      <div className=" mb-6 py-4  sticky md:sticky-none md:top-auto md:text-left text-center top-[130px] bg-white z-[100] md:z-0">
        <Heading title={title} size="md" align="left" />
        <div className="flex items-center border-b  border-gray-300 py-3">
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
      </div>

      {/* OBJECTIVES */}
      <section id="objectives" className="mb-12">
        <Heading title="Objectives" size="md" align="left" />
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
        <Heading title="Members" size="md" align="left" />
        <HeadingUnderline width={120} align="left" />

        {members.length > 0 ? (
          <div className="space-y-6">
            {members.map((m) => (
              <div
                key={m.id}
                className="grid grid-cols-3 md:grid-cols-3 bg-white rounded-lg  md:border border-gray-200"
              >
                {/* LEFT IMAGE — 1/3 on all screens */}
                <div className="flex items-center justify-center col-span-1 p-6 md:border-r md:border-b-0 border-b border-gray-300">
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden ring-1 ring-gray-300">
                    <img
                      src={
                        isPreview
                          ? resolveImageUrl(m.image)
                          : m.image || placeholder
                      }
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* MIDDLE — 2/3 on mobile, center column on md */}
                <div className="flex flex-col justify-center col-span-2 md:col-span-1 p-6 border-b md:border-b-0 md:border-r border-gray-300 text-left">
                  <h3 className="text-lg md:text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-gray-700">{m.designation}</p>

                  {/* Email on mobile only */}
                  <p className="flex md:hidden gap-2 items-center text-sm text-gray-700 mt-2 break-all">
                    <Mail size={16} />
                    <a
                      href={`mailto:${m.email}`}
                      className="hover:text-purple-700 hover:underline"
                    >
                      {m.email}
                    </a>
                  </p>
                </div>

                {/* RIGHT — Contact (md+ only) */}
                <div className="hidden md:flex flex-col justify-center p-6">
                  <Heading
                    title="Contact"
                    size="sm"
                    align="left"
                    className="mb-2 font-semibold"
                  />

                  <p className="flex gap-2 items-center text-sm text-gray-700 break-all">
                    <Mail size={17} />
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
        <Heading title="Circulars" size="md" align="left" />
        <HeadingUnderline width={120} align="left" />
        {circulars.length > 0 ? (
          <ul className="space-y-4">
            {circulars.map((c, idx) => (
              <li key={c.id || idx} className="flex gap-3 text-purple-700">
                <FileText size={20} className="flex-shrink-0 mt-1" />
                <a
                  href={isPreview ? resolveFileUrl(c.file) : c.file}
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
