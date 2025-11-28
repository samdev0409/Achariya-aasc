import React from "react";
import GlobalSidebar from "@/components/sidebar/GlobalSidebar";

const menuItems = [
  { id: "faculty", label: "Faculty", url: "/about/our-team/faculty" },
  {
    id: "administrative",
    label: "Administrative Team",
    url: "/about/our-team/administrative",
  },
  { id: "media", label: "Media Team", url: "/about/our-team/media" },
];

const OurTeamSidebar = () => {
  return (
    <div>
      <GlobalSidebar title="Our Team" type="none" menu={menuItems} />
    </div>
  );
};

export default OurTeamSidebar;
