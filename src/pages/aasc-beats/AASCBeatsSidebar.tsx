import React from "react";
import GlobalSidebar from "@/components/sidebar/GlobalSidebar";
import { aascbeatsdata } from "@/data/aasc-beats/aasc-beatsdata.ts";

const AASCBeatsSidebar = () => {
  const months = Object.keys(aascbeatsdata); // ["november", "october"]

  const menuItems = months.map((month) => ({
    id: month,
    label: aascbeatsdata[month].sectiontitle, // ⭐ use the sectiontitle text
    url: `/aasc-beats/${month}`,
  }));

  return (
    <GlobalSidebar title="AASC Beats" type="none" menu={menuItems} />
  );
};

export default AASCBeatsSidebar;
