import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { committiesdatasidebarMenu } from "@/data/committiesdata";

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
    <aside className="bg-white w-full md:w-64 p-4 py-6 rounded-xl md:rounded-none">
      <ul className="space-y-4">
        {committiesdatasidebarMenu.map((main) => (
          <li key={main.id} className="border-b border-gray-300 pb-2">
            {/* MAIN DROPDOWN BUTTON */}
            <button
              onClick={() =>
                setActiveMain((prev) => (prev === main.id ? null : main.id))
              }
              className={`flex justify-between items-center w-full px-3 py-2 font-medium rounded-md transition ${
                activeMain === main.id
                  ? "bg-purple-100"
                  : "hover:bg-purple-100"
              }`}
            >
              {main.label}
              {activeMain === main.id ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {/* SUB MENU */}
            {activeMain === main.id && (
              <ul className="mt-2 ml-3 space-y-2">
                {main.children?.map((sub) => {
                  // If this submenu has more children (Committees → Committee → list)
                  const hasDeepChildren =
                    sub.children && sub.children.length > 0;

                  return (
                    <li key={sub.id}>
                      {hasDeepChildren ? (
                        <>
                          <ul className="ml-3 space-y-2">
                            {sub.children.map((child) => {
                              const childSlug = child.url.split("/").pop();

                              return (
                                <li
                                  key={child.id}
                                  className=""
                                >
                                  <Link
                                    to={child.url}
                                    className={`block flex items-center gap-2 px-3 py-2 rounded-md transition text-sm ${
                                      slug === childSlug
                                        ? "bg-purple-100"
                                        : "hover:bg-purple-100"
                                    }`}
                                  >
                                    {" "}
                                    <ChevronRight className="w-4 h-4" />
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      ) : (
                        <div className="">
                          <Link
                            to={sub.url}
                            className={`block px-3 py-2 gap-2 rounded-md transition flex items-center ${
                              location.pathname === sub.url
                                ? "bg-purple-100"
                                : "hover:bg-purple-100"
                            }`}
                          >
                            <ChevronRight className="w-4 h-4" />

                            {sub.label}
                          </Link>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CommitteesSidebar;
