// AcademicDepartments.jsx
import React, { useState } from "react";
import AcademicDepartmentsData from "@/data/AcademicDepartmentsData.js";
import AcademicDepartmentsSidebar from "./AcademicDepartmentsSidebar";
import AcademicDepartmentsContent from "./AcademicDepartmentsContent";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.webp";

const AcademicDepartments = () => {
  const [activeDept, setActiveDept] = useState("all"); // Start with "all" view

  const activeDepartment =
    activeDept === "all"
      ? "all"
      : AcademicDepartmentsData.find((dept:any) => dept.id === activeDept);

  return (
    <>
      <BannerAndBreadCrumb title="Departments" img={campus} />
      <section className="mx-auto ">
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
    </>
  );
};

export default AcademicDepartments;
