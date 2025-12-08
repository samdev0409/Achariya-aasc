import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { committiesdatasidebarMenu } from "@/data/commitees/committiesdata";
import GlobalSidebar from "@/components/sidebar/GlobalSidebar";

const CommitteesSidebar = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Which MAIN menu should be open based on URL?
  const findActiveMain = () => {
    for (let main of committiesdatasidebarMenu) {
      if (location.pathname.startsWith(main.url)) return main.id;
    }
    return committiesdatasidebarMenu[0].id;
  };

  const [activeMain, setActiveMain] = useState(findActiveMain());

  useEffect(() => {
    setActiveMain(findActiveMain());
  }, [location.pathname]);

  return (
    <div>
      <GlobalSidebar
        title="Committees"
        type="dropdown"
        menu={committiesdatasidebarMenu}
      />
    </div>
  );
};

export default CommitteesSidebar;
