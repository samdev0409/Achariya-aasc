import React from "react";
import { NavLink } from "react-router-dom";
import galleryEvents  from "@/data/galleryEvents";

const GallerySidebar = () => {
  return (
    <aside className="bg-white border-r border-l border-gray-400 w-full md:w-64 p-4 rounded-xl md:rounded-none">
      <h2 className="text-lg font-semibold mb-4 border-b border-purple-800 pb-2">
        Events
      </h2>
      <ul className="space-y-2">
        {galleryEvents.map((event) => (
          <li key={event.id} className="border-b border-gray-400">
            <NavLink
              to={`/gallery/${event.id}`}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md transition ${
                  isActive ? "bg-purple-700 text-white" : "hover:bg-purple-800 hover:text-white "
                }`
              }
            >
              {event.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default GallerySidebar;
