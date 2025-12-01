import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import eventsData from "@/data/events/eventsdata.js";
import GlobalSidebar from "@/components/sidebar/GlobalSidebar";

// Convert eventsData → sidebar-friendly structured menu
const eventSidebarMenu = eventsData.map((e) => ({
  id: e.id,
  label: e.title,
  url: `/campus-life/events/${e.id}`, // FIXED URL
}));

const EventsSidebar = () => {
  const { eventId } = useParams();
  const location = useLocation();

  const findActiveMain = () => {
    for (let item of eventSidebarMenu) {
      if (location.pathname.startsWith(item.url)) return item.id;
    }
    return eventSidebarMenu[0]?.id;
  };

  const [activeMain, setActiveMain] = useState(findActiveMain());

  useEffect(() => {
    setActiveMain(findActiveMain());
  }, [location.pathname]);

  return (
    <div>
      <GlobalSidebar title="Events" type="none" menu={eventSidebarMenu}/>
    </div>
  );
};

export default EventsSidebar;
