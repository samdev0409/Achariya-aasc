import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const categories = [
  {
    title: "Profile of the Library",
    items: [
      { key: "profile", label: "Profile" },
      { key: "library", label: "Library" },
      { key: "sections", label: "Sections" },
      { key: "book-collection", label: "Book Collection (Random)" },
      { key: "map", label: "Map" },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        key: "print-resources",
        label: "Print Resources (OPAC) - { How to use }",
      },
      { key: "e-resources", label: "E-Resources - { How to use }" },
      { key: "ugc-inflibnet", label: "UGC-INFLIBNET Corner" },
      { key: "shodhganga", label: "Shodhganga" },
      { key: "eshodhsindhu", label: "E-ShodhSindhu (UGC N-List)" },
    ],
  },
  {
    title: "Faculty",
    items: [
      { key: "vidwan", label: "Vidwan (Expert Database)" },
      { key: "irins", label: "IRINS (Research Information System)" },
    ],
  },
  {
    title: "Guidelines",
    items: [
      { key: "library-hours", label: "Library Hours" },
      { key: "book-lending", label: "Book Lending" },
      { key: "membership", label: "Membership" },
      { key: "facilities", label: "Facilities" },
    ],
  },
];

const LibrarySidebar = ({ activeKey, setActiveKey }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (title) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <aside className="bg-white border-r border-l border-gray-400 w-full md:w-64 p-4 rounded-xl md:rounded-none">
      <h2 className="text-lg font-semibold mb-4 border-b border-purple-800 pb-2">
        Library
      </h2>

      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.title}>
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(cat.title)}
              className="w-full flex justify-between items-center font-semibold text-gray-700 border-b border-gray-400 py-2 hover:text-purple-700"
            >
              {cat.title}
              <span className="text-sm">
                {openCategory === cat.title ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            </button>

            {/* Dropdown Items */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openCategory === cat.title ? "max-h-[600px] mt-2" : "max-h-0"
              }`}
            >
              <ul className="ml-3 border-l border-gray-300 pl-3 space-y-1">
                {cat.items.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => setActiveKey(item.key)}
                      className={`block w-full text-left px-2 py-1 rounded-md transition ${
                        activeKey === item.key
                          ? "bg-purple-700 text-white"
                          : "hover:bg-purple-800 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LibrarySidebar;
