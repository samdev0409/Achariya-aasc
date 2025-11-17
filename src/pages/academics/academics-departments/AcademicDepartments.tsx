// AcademicDepartments.jsx
import React, { useState } from "react";
import AcademicDepartmentsData from "@/data/AcademicDepartmentsData.js";
import AcademicDepartmentsSidebar from "./AcademicDepartmentsSidebar";
import AcademicDepartmentsContent from "./AcademicDepartmentsContent";

const AcademicDepartments = () => {
  const [activeDept, setActiveDept] = useState("all"); // Start with "all" view

  const activeDepartment = activeDept === "all" 
    ? "all" 
    : AcademicDepartmentsData.find((dept) => dept.id === activeDept);

  return (
    <section className="mx-auto container">
      <div className="flex flex-col md:flex-row">
        <AcademicDepartmentsSidebar
          departments={AcademicDepartmentsData}
          activeDept={activeDept}
          setActiveDept={setActiveDept}
        />

        <AcademicDepartmentsContent 
          department={activeDepartment}
          departments={AcademicDepartmentsData}
          setActiveDept={setActiveDept}
        />
      </div>
    </section>
  );
};

export default AcademicDepartments;