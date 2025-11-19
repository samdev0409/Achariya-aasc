import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import TopHeaderBar from "./TopHeadBar";
import AASCLOGO from "@/assets/images/common/AASC-Logo.webp";
import AchariyaLOGO from "@/assets/images/common/achariya-logo-300x300.webp";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [mobileSubSubmenu, setMobileSubSubmenu] = useState(null);

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

  const navItems = [
    {
      label: "HOME",
      path: "/",
      dropdown: null,
    },
    {
      label: "ABOUT US",
      path: "/about",
      dropdown: [
        {
          label: "Profile of the college",
          path: "/about/profile-of-the-college",
        },
        { label: "Chief mentor's desk", path: "/about/chief-mentors-desk" },
        { label: "Principal's desk", path: "/about/principal-desk" },
        {
          label: "Governing Body Council",
          path: "/about/governing-body-counsil",
        },
        { label: "Organogram", path: "/about/organogram" },
        {
          label: "Our Team",
          path: "/about/our-team",
          submenu: [
            { label: "Faculty", path: "/about/our-team/faculty" },
            {
              label: "Administrative Team",
              path: "/about/our-team/administrative-team",
            },
            { label: "Media Team", path: "/about/our-team/media-team" },
          ],
        },
        { label: "Press Releases", path: "/about/press-releases" },
        { label: "Media Talks", path: "/about/media-talks" },
      ],
    },

    // remaining navItems unchanged...
    {
      label: "ACADEMICS",
      path: "/academics",
      dropdown: [
        { label: "UG Programme", path: "/academics/ug-programs" },
        { label: "PG Programme", path: "/academics/pg-programs " },
        { label: "Syllabus", path: "/academics/syllabus" },
        { label: "Departments", path: "/academics/departments" },
        { label: "Academic calendar", path: "/academics/academic-calendar" },
        { label: "Prospectus", path: "/academics/prospectus" },
      ],
    },

    {
      label: "FACILITIES",
      path: "/facilities",
      dropdown: [
        { label: "Infrastructure", path: "/facilities/infrastructure" },
        { label: "ICT Facilities", path: "/facilities/ict-facilities" },
        { label: "Laboratories", path: "/facilities/laboratories" },
        { label: "Library", path: "/facilities/library" },
        { label: "Sports", path: "/facilities/sports" },
        { label: "Hostel Facilities", path: "/facilities/hostel-facilities" },
        { label: "Transport Facilities", path: "/facilities/transport-facilities" },
        { label: "Cafeteria", path: "/facilities/cafeteria" },
      ],
    },

    {
      label: "PLACEMENTS",
      path: "/placements",
      dropdown: [
        {
          label: "Training and Placement Cell",
          path: "/placements/training-and-placement-cell",
        },
        {
          label: "Key Collaborators/Recruiters",
          path: "/placements/key-collaborators-recruiters",
        },
        { label: "Records", path: "/placements/records" },
        { label: "Photo gallery", path: "/placements/photo-gallery" },
        // { label: "Reports", path: "/placements/reports" },
      ],
    },

    {
      label: "CAMPUS LIFE",
      path: "/campus-life",
      dropdown: [
        { label: "SEED", path: "/campus-life/seed" },
        { label: "Value-added courses", path: "/campus-life/value-added-courses" },
        { label: "Department Clubs", path: "/campus-life/department-clubs" },
        { label: "Cultural", path: "/campus-life/cultural" },
        { label: "Sports", path: "/campus-life/sports" },
      ],
    },

    {
      label: "GALLERY",
      path: "/gallery",
      dropdown: null,
    },

    {
      label: "IQAC",
      path: "/iqac",
      dropdown: [
        { label: "NAAC", path: "/iqac/learning-outcomes" },
        { label: "Circulars", path: "/iqac/circulars" },
        { label: "Contact us", path: "/iqac/contact-us" },
        { label: "About IQAC", path: "/iqac/about-iqac-2" },
      ],
    },

    {
      label: "NIRF",
      path: "/main-nirf",
      dropdown: null,
    },

    {
      label: "QUICK LINKS",
      path: "/quick-links",
      dropdown: [{ label: "Downloads", path: "/quick-links/downloads" }],
    },
  ];

  return (
    <>
    <div className="md:block hidden">
      <TopHeaderBar />
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-purple hidden md:flex items-center justify-between p-3">
        <img src={AASCLOGO} width={150} className="bg-white p-3" />

        <ul className="flex items-center gap-1">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className="text-white text-sm py-4 px-3 hover:bg-purple/80 flex items-center gap-1"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {item.dropdown && (
                <div
                  className={`absolute top-full left-0 bg-white min-w-[230px] rounded-md shadow-lg border border-gray-200 z-50 transition-all duration-300 ${
                    openDropdown === item.label
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <ul className="py-2">
                    {item.dropdown.map((sub, subIdx) => (
                      <li key={subIdx} className="relative group/sub">
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple/10"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <img src={AchariyaLOGO} width={85} />
      </nav>

      {/* MOBILE HEADER */}
      <div className="bg-purple md:hidden flex items-center justify-between p-3">
        <img src={AASCLOGO} width={120} className="bg-white p-2" />

        <button
          id="hamburgerBtn"
          className="text-white"
          onClick={(e) => {
            e.stopPropagation();
            setMobileOpen(true);
          }}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        id="mobileSidebar"
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-xl z-[200] p-4 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-purple">MENU</h3>
          <button
            className="text-purple"
            onClick={() => setMobileOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        <ul className="flex flex-col gap-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <div
                className="flex justify-between items-center py-2 text-gray-800 font-medium"
                onClick={() =>
                  item.dropdown
                    ? setMobileSubmenu(
                        mobileSubmenu === item.label ? null : item.label
                      )
                    : setMobileOpen(false)
                }
              >
                <Link to={item.path}>{item.label}</Link>

                {item.dropdown && <ChevronDown />}
              </div>

              {/* Mobile Submenu */}
              {item.dropdown && mobileSubmenu === item.label && (
                <ul className="ml-4 border-l pl-3">
                  {item.dropdown.map((sub, i) => (
                    <li key={i}>
                      <div
                        className="flex justify-between py-2 text-gray-700"
                        onClick={() =>
                          sub.submenu
                            ? setMobileSubSubmenu(
                                mobileSubSubmenu === sub.label
                                  ? null
                                  : sub.label
                              )
                            : setMobileOpen(false)
                        }
                      >
                        <Link to={sub.path}>{sub.label}</Link>
                        {sub.submenu && <ChevronDown size={16} />}
                      </div>

                      {/* Third Level */}
                      {sub.submenu &&
                        mobileSubSubmenu === sub.label && (
                          <ul className="ml-4 border-l pl-3 text-sm">
                            {sub.submenu.map((ss, j) => (
                              <li
                                key={j}
                                className="py-1"
                                onClick={() => setMobileOpen(false)}
                              >
                                <Link to={ss.path}>{ss.label}</Link>
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
