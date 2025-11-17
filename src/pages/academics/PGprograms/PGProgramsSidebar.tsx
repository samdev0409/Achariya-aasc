import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { key: "existing", label: "Existing PG Programs" },
  { key: "proposed", label: "Proposed PG Programs" },
];

const PGProgramsSidebar = () => {
  return (
    <aside className="bg-white border-r border-l border-gray-400 w-full md:w-64 p-4 rounded-xl md:rounded-none">
      <h2 className="text-lg font-semibold mb-4 border-b border-purple-800 pb-2">
        PG Programs
      </h2>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.key} className="border-b border-gray-400">
            <NavLink
              to={`/academics/pg-programs/${item.key}`}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md transition ${
                  isActive
                    ? "bg-purple-700 text-white"
                    : "hover:bg-purple-800 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PGProgramsSidebar;
