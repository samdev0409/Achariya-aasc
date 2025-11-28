import React from "react";
import GlobalSidebar from "@/components/sidebar/GlobalSidebar";

const PressReleasesSidebar = ({ years, activeYear, setActiveYear }) => {
  const menuItems = years.map((year) => ({
    id: year,
    label: `Year - ${year}`,
    onClick: () => setActiveYear(year),
    isActive: activeYear === year,
  }));

  return (
    <div>
      <GlobalSidebar title="Press Releases" type="none" menu={menuItems} />
    </div>
  );
};

export default PressReleasesSidebar;
