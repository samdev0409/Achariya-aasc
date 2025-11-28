import React from "react";
import { NavLink } from "react-router-dom";
import galleryEvents  from "@/data/eventsdata.js";
import GlobalSidebar from "@/components/sidebar/GlobalSidebar";

const EventsSidebar = () => {
  return (
    <div>
      < GlobalSidebar title="Events" type="none" menu={galleryEvents} />

    </div>
  );
};

export default EventsSidebar;
