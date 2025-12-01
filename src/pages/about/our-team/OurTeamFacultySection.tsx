import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ourTeamData from "@/data/about/OurTeamData.js";
import { Filter } from "lucide-react";
import FacultyProfile from "@/components/FacultyProfile";
import OurTeamFacultyProfile from "@/components/faculty/OurTeamFacultyProfile";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";

const OurTeamFacultySection = () => {
  const { teamType } = useParams();
  const activeCategory = teamType || "faculty";

  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [departmentFilterOpen, setDepartmentFilterOpen] = useState(false);

  useEffect(() => {
    const data = ourTeamData[activeCategory] || [];
    setList(data);
    setFiltered(data);
  }, [teamType]);

  // FILTER HANDLING
  useEffect(() => {
    let result = list;

    // Department filter
    if (departmentFilter) {
      result = result.filter(
        (item) =>
          item.department &&
          item.department.toLowerCase() === departmentFilter.toLowerCase()
      );
    }

    // Search filter
    if (search.trim()) {
      const text = search.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(text) ||
          (item.department && item.department.toLowerCase().includes(text)) ||
          item.email.toLowerCase().includes(text)
      );
    }

    setFiltered(result);
  }, [search, departmentFilter, list]);

  const departments = [
    ...new Set(list.filter((d) => d.department).map((d) => d.department)),
  ];

  // GROUP RESULTS BY DEPARTMENT
  const grouped = filtered.reduce((acc, item) => {
    const dep = item.department;
    if (!acc[dep]) acc[dep] = [];
    acc[dep].push(item);
    return acc;
  }, {});

  return (
    <div className="flex-1 px-6 border-r border-gray-400">
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-end items-start">
        <div className="flex flex-col md:flex-row  gap-4 mt-4 mb-6">
          <input
            type="text"
            placeholder="Search by name, designation, email..."
            className="w-full  px-3 py-2 border border-gray-400 rounded-lg focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {activeCategory === "faculty" && (
            <div className="relative w-full ">
              {/* Button (Does NOT clear the value anymore) */}
              <button
                onClick={() => setDepartmentFilterOpen((prev) => !prev)}
                className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-white text-left text-gray-700 capitalize hover:bg-purple/10 hover:text-purple-700 transition-all flex items-center justify-between"
              >
                <span>{departmentFilter || "All Departments"}</span>

                {/* Filter Icon */}
                <Filter size={18} className="text-gray-600" />
              </button>

              {/* Dropdown */}
              {departmentFilterOpen && (
                <div className="absolute top-full left-0 bg-white min-w-full rounded-md shadow-lg border border-gray-200 z-50 mt-1 origin-top opacity-100 scale-100 visible transition-all duration-200">
                  <ul className="py-1">
                    {/* All Departments */}
                    <li
                      onClick={() => {
                        setDepartmentFilter("");
                        setDepartmentFilterOpen(false);
                      }}
                      className="px-4 py-2 text-gray-700 capitalize text-[13px] hover:bg-purple/10 hover:text-purple-700 transition-all cursor-pointer"
                    >
                      All Departments
                    </li>

                    <div className="h-[1px] bg-gray-300 mx-4 my-1"></div>

                    {/* Dynamic Department List */}
                    {departments.map((dep, index) => (
                      <li key={index}>
                        <div
                          onClick={() => {
                            setDepartmentFilter(dep);
                            setDepartmentFilterOpen(false);
                          }}
                          className="px-4 py-2 text-gray-700 capitalize text-[13px] hover:bg-purple/10 hover:text-purple-700 transition-all cursor-pointer"
                        >
                          {dep}
                        </div>

                        {/* Separator except last */}
                        {index !== departments.length - 1 && (
                          <div className="h-[1px] bg-gray-300 mx-4 "></div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ================================
            GROUPED TABLE RENDERING
      ================================= */}
      {Object.keys(grouped).map((dep, index) => (
        <div key={dep} className={`my- ${index !== 0 ? "mt-10" : ""}`}>
          <div>
            {/* Department heading (always show) */}
            <h2 className="text-2xl text-center capitalize font-semibold text-purple">
              {dep === ""
                ? activeCategory.replace("-", " ") + " Team"
                : `${dep} ${dep === "Principal" ? "" : "Department Faculty"}`}
            </h2>

            <HeadingUnderline align="center" width={150} />
          </div>
          <div className="overflow-x-auto   py-2">
            {grouped[dep].map((item) => (
              <OurTeamFacultyProfile
                name={item.name}
                phone={item.phone}
                department={item.deparment}
                designation={item.designation}
                email={item.email}
                image={item.image}
              />
            ))}
          </div>
        </div>
      ))}

      {/* NO RESULTS */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No results found.</p>
      )}
    </div>
  );
};

export default OurTeamFacultySection;
