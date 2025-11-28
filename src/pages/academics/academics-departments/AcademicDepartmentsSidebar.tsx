import React from "react";
import GlobalSidebar from "@/components/sidebar/GlobalSidebar";

const AcademicDepartmentsSidebar = ({
  departments,
  activeDept,
  setActiveDept,
}) => {
  const menuItems = [
    {
      id: "all",
      label: "All Departments",
      onClick: () => setActiveDept("all"),
      isActive: activeDept === "all",
    },
    ...departments.map((dept) => ({
      id: dept.id,
      label: dept.name,
      onClick: () => setActiveDept(dept.id),
      isActive: activeDept === dept.id,
    })),
  ];

  return (
    <div>
      <GlobalSidebar
        title="Academic Departments"
        type="none"
        menu={menuItems}
      />
    </div>
  );
};

export default AcademicDepartmentsSidebar;
