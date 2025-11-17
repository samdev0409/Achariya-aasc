// PressReleasesSidebar.jsx
import React from "react";

const PressReleasesSidebar = ({ years, activeYear, setActiveYear }) => {
  return (
    <aside className="bg-white border-r border-l border-gray-400 w-full md:w-64 p-4 py-6 rounded-xl md:rounded-none">
      <h2 className="text-lg font-semibold mb-4 border-b border-purple-800 pb-2">
        Press Releases
      </h2>

      <ul className="space-y-2">
        {years.map((year) => (
          <li key={year} className="border-b border-gray-400">
            <button
              onClick={() => setActiveYear(year)}
              className={`block w-full text-left px-3 py-2 rounded-md transition ${
                activeYear === year
                  ? "bg-purple-700 text-white"
                  : "hover:bg-purple-800 hover:text-white"
              }`}
            >
              Year - {year}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PressReleasesSidebar;