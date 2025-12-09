import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import TopHeaderBar from "./TopHeadBar";
import AASCLOGO from "@/assets/images/common/AASC-Logo.webp";
import AchariyaLOGO from "@/assets/images/common/achariya-logo-300x300.webp";
import Heading from "../../reusable/Heading";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [mobileSubSubmenu, setMobileSubSubmenu] = useState(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest("#mobileSidebar") && !e.target.closest("#hamburgerBtn")) {
        setMobileOpen(false);
        setMobileSubmenu(null);
        setMobileSubSubmenu(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // ---------------- NAV ITEMS ----------------
  const navItems = [
    { label: "Home", path: "/", dropdown: null },

    {
      label: "About Us",
      path: "/about",
      dropdown: [
        { label: "Profile Of The College", path: "/about/profile-of-the-college" },
        { label: "Chief Mentor's Desk", path: "/about/chief-mentors-desk" },
        { label: "Principal's Desk", path: "/about/principal-desk" },
        { label: "Governing Body Council", path: "/about/governing-body-counsil" },
        { label: "Organogram", path: "/about/organogram" },
        {
          label: "Our Team",
          path: "/about/our-team/faculty",
          submenu: [
            { label: "Faculty", path: "/about/our-team/faculty" },
            { label: "Administrative Team", path: "/about/our-team/administrative-team" },
            { label: "Media Team", path: "/about/our-team/media-team" },
          ],
        },
        { label: "Press Releases", path: "/about/press-releases" },
        { label: "Media Talks", path: "/about/media-talks" },
      ],
    },

    {
      label: "Academics",
      path: "/academics",
      dropdown: [
        { label: "UG Programme", path: "/academics/ug-programs" },
        { label: "PG Programme", path: "/academics/pg-programs" },
        { label: "Departments", path: "/academics/departments" },
        { label: "Academic Calendar", path: "/academics/academic-calendar" },
        { label: "Prospectus", path: "/academics/prospectus" },
      ],
    },

    {
      label: "Placements",
      path: "/placements",
      dropdown: [
        { label: "Training And Placement Cell", path: "/placements/training-and-placement-cell" },
        { label: "Key Collaborators/Recruiters", path: "/placements/key-collaborators-recruiters" },
        { label: "Records", path: "/placements/records" },
      ],
    },

    {
      label: "Campus Life",
      path: "/campus-life",
      dropdown: [
        { label: "SEED", path: "/campus-life/seed" },
        { label: "Events", path: "/campus-life/events" },
        { label: "Value-Added Courses", path: "/campus-life/value-added-courses" },
        { label: "Department Clubs", path: "/campus-life/department-clubs" },
        { label: "Cultural", path: "/campus-life/cultural" },
        { label: "Sports", path: "/campus-life/sports" },
      ],
    },

    { label: "AASC Beats", path: "/aasc-beats", dropdown: null },

    {
      label: "IQAC & NIRF",
      path: "/iqac",
      dropdown: [
        { label: "NIRF", path: "/national-institutional-ranking-framework" },
        { label: "NAAC", path: "/iqac/naac" },
        { label: "About IQAC", path: "/iqac/about-iqac" },

        {
          label: "Best Practices",
          path: "/iqac/best-practices/poster-campaign",
          submenu: [
            { label: "Poster Campaign", path: "/iqac/best-practices/poster-campaign" },
            { label: "LMS", path: "/iqac/best-practices/lms" },
            { label: "Spirituality in AASC", path: "/iqac/best-practices/spirituality-in-aasc" },
            { label: "Webinars", path: "/iqac/best-practices/webinars" },
          ],
        },
      ],
    },

    { label: "Committees", path: "/committees", dropdown: null },
  ];

  // ---------------- RETURN UI ----------------
  return (
    <>
      {/* -------- DESKTOP NAVBAR -------- */}
      <div className="hidden md:block sticky top-0 z-[200] bg-white shadow-lg">
        <TopHeaderBar />

        <nav className="flex items-center justify-between p-3 ps-5 bg-purple">
          <Link to="/">
            <img src={AASCLOGO} width={100} className="bg-white p-2" />
          </Link>

          {/* -------- MENU ITEMS -------- */}
          <ul className="flex items-center gap-1">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* MAIN ITEM */}
                <div className="relative text-white text-[15px] py-4 px-3 cursor-pointer hover:bg-white/10 flex items-center gap-1 group">
                  <Link to={item.path}>{item.label}</Link>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  {/* Center animated underline */}
                  <span className="absolute left-1/2 bottom-1 h-[2px] w-0 bg-white/80 -translate-x-1/2 group-hover:w-4/5 transition-all duration-300 ease-out" />
                </div>

                {/* ------------ FIRST DROPDOWN ------------ */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 bg-white min-w-[240px] rounded-md shadow-xl border border-purple-300 transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    <ul className="py-2">
                      {item.dropdown.map((sub, i) => (
                        <li key={i} className="relative group/submenu">
                          <Link
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple/10 hover:text-purple rounded transition"
                          >
                            {sub.label}
                          </Link>

                          {/* ------------ SUBMENU (THIRD LEVEL) ------------ */}
                          {sub.submenu && (
                            <div
                              className="
                                absolute left-full top-0 ml-1
                                bg-white min-w-[220px]
                                rounded-md shadow-xl border border-purple-300
                                opacity-0 scale-95 invisible
                                group-hover/submenu:opacity-100 
                                group-hover/submenu:scale-100 
                                group-hover/submenu:visible
                                transition-all duration-200
                                z-[999]
                              "
                            >
                              <ul className="py-2 space-y-1">
                                {sub.submenu.map((ss, j) => (
                                  <li key={j}>
                                    <Link
                                      to={ss.path}
                                      className="
                                        block px-4 py-2 text-sm text-gray-700
                                        hover:bg-purple/10 hover:text-purple
                                        rounded transition
                                      "
                                    >
                                      {ss.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <img src={AchariyaLOGO} width={65} />
        </nav>
      </div>

      {/* -------- MOBILE NAV -------- */}
      <div className="md:hidden sticky top-0 z-[300] bg-purple p-3 flex justify-between items-center">
        <img src={AASCLOGO} width={80} className="bg-white p-2" />

        <button id="hamburgerBtn" onClick={() => setMobileOpen(true)}>
          <Menu size={28} className="text-white" />
        </button>
      </div>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[299]"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* -------- MOBILE SIDEBAR -------- */}
      <div
        id="mobileSidebar"
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-xl z-[300] p-4 transition-transform duration-300 overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <Heading title="MENU" size="sm" className="text-lg" />
          <button onClick={() => setMobileOpen(false)}>
            <X size={26} className="text-purple" />
          </button>
        </div>

        {/* MOBILE LIST */}
        <ul className="flex flex-col gap-1">
          {navItems.map((item, i) => (
            <li key={i}>
              <div
                className="flex justify-between py-2 text-gray-800 font-medium"
                onClick={() =>
                  item.dropdown
                    ? setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)
                    : setMobileOpen(false)
                }
              >
                <Link to={item.path}>{item.label}</Link>
                {item.dropdown && <ChevronDown />}
              </div>

              {/* MOBILE SUBMENU */}
              {item.dropdown && mobileSubmenu === item.label && (
                <ul className="ml-4 border-l-2 pl-3">
                  {item.dropdown.map((sub, j) => (
                    <li key={j}>
                      <div
                        className="flex justify-between py-2 text-gray-700"
                        onClick={() =>
                          sub.submenu
                            ? setMobileSubSubmenu(
                                mobileSubSubmenu === sub.label ? null : sub.label
                              )
                            : setMobileOpen(false)
                        }
                      >
                        <Link to={sub.path}>{sub.label}</Link>
                        {sub.submenu && <ChevronDown size={16} />}
                      </div>

                      {/* MOBILE SUB-SUBMENU */}
                      {sub.submenu && mobileSubSubmenu === sub.label && (
                        <ul className="ml-4 border-l-2 pl-3 text-sm space-y-1">
                          {sub.submenu.map((ss, k) => (
                            <li key={k}>
                              <Link
                                to={ss.path}
                                className="block py-1"
                                onClick={() => setMobileOpen(false)}
                              >
                                {ss.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
