import React, { useState } from "react";
import LibrarySidebar from "./LibrarySidebar";
import LibrarySection from "./LibrarySection";

const Library = () => {
  const [activeKey, setActiveKey] = useState("profile");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <LibrarySidebar activeKey={activeKey} setActiveKey={setActiveKey} />
      <LibrarySection activeKey={activeKey} />
    </div>
  );
};

export default Library;
    