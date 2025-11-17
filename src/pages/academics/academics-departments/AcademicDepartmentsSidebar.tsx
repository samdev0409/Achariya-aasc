// AcademicDepartmentsSidebar.jsx
import React from "react";

const AcademicDepartmentsSidebar = ({ departments, activeDept, setActiveDept }) => {
  return (
    <aside className="bg-white border-r border-l border-gray-400 w-full md:w-64 p-4 py-6 rounded-xl md:rounded-none">
      <h2 className="text-lg font-semibold mb-4 border-b border-purple-800 pb-2">
        Academic Departments
      </h2>

      <ul className="space-y-2">
          {/* All Departments Option */}
        <li className="border-b border-gray-400">
          <button
            onClick={() => setActiveDept("all")}
            className={`block w-full text-left px-3 py-2 rounded-md transition ${
              activeDept === "all"
                ? "bg-purple-700 text-white"
                : "hover:bg-purple-800 hover:text-white"
            }`}
          >
            All Departments
          </button>
        </li>
        {departments.map((dept) => (
          <li key={dept.id} className="border-b border-gray-400">
            <button
              onClick={() => setActiveDept(dept.id)}
              className={`block w-full text-left px-3 py-2 rounded-md transition ${
                activeDept === dept.id
                  ? "bg-purple-700 text-white"
                  : "hover:bg-purple-800 hover:text-white"
              }`}
            >
              {dept.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AcademicDepartmentsSidebar;