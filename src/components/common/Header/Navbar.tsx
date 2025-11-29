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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        !e.target.closest("#mobileSidebar") &&
        !e.target.closest("#hamburgerBtn")
      ) {
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
      label: "Home",
      path: "/",
      dropdown: null,
    },
    {
      label: "About Us",
      path: "/about",
      dropdown: [
        {
          label: "Profile Of The College",
          path: "/about/profile-of-the-college",
        },
        {
          label: "Chief Mentor's Desk",
          path: "/about/chief-mentors-desk",
        },
        { label: "Principal's Desk", path: "/about/principal-desk" },
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

    {
      label: "Academics",
      path: "/academics",
      dropdown: [
        { label: "UG Programme", path: "/academics/ug-programs" },
        { label: "PG Programme", path: "/academics/pg-programs " },
        { label: "Departments", path: "/academics/departments" },
        { label: "Academic Calendar", path: "/academics/academic-calendar" },
        { label: "Prospectus", path: "/academics/prospectus" },
      ],
    },

    {
      label: "Facilities",
      path: "/facilities",
      dropdown: [
        { label: "Infrastructure", path: "/facilities/infrastructure" },
        { label: "ICT Facilities", path: "/facilities/ict-facilities" },
        { label: "Laboratories", path: "/facilities/laboratories" },
        { label: "Library", path: "/facilities/library" },
        { label: "Sports", path: "/facilities/sports" },
        { label: "Hostel Facilities", path: "/facilities/hostel-facilities" },
        {
          label: "Transport Facilities",
          path: "/facilities/transport-facilities",
        },
        { label: "Cafeteria", path: "/facilities/cafeteria" },
      ],
    },

    {
      label: "Placements",
      path: "/placements",
      dropdown: [
        {
          label: "Training And Placement Cell",
          path: "/placements/training-and-placement-cell",
        },
        {
          label: "Key Collaborators/Recruiters",
          path: "/placements/key-collaborators-recruiters",
        },
        { label: "Records", path: "/placements/records" },
        { label: "Photo Gallery", path: "/placements/photo-gallery" },
      ],
    },

    {
      label: "Campus Life",
      path: "/campus-life",
      dropdown: [
        { label: "SEED", path: "/campus-life/seed" },
        { label: "Events", path: "/campus-life/events" },
        {
          label: "Value-Added Courses",
          path: "/campus-life/value-added-courses",
        },
        { label: "Department Clubs", path: "/campus-life/department-clubs" },
        { label: "Cultural", path: "/campus-life/cultural" },
        { label: "Sports", path: "/campus-life/sports" },
      ],
    },

    {
      label: "Gallery",
      path: "/gallery/",
      dropdown: null,
    },

    {
      label: "IQAC & NIRF",
      path: "/iqac",
      dropdown: [
        { label: "NIRF", path: "/national-institutional-ranking-ramework" },
        { label: "NAAC", path: "/iqac/naac" },
        { label: "Circulars", path: "/iqac/circulars" },
        // { label: "Contact Us", path: "/iqac/contact-us" },
        { label: "About IQAC", path: "/iqac/about-iqac" },
      ],
    },

    {
      label: "Committees",
      path: "/committees",
      dropdown: null,
    },

    // {
    //   label: "Quick Links",
    //   path: "/quick-links",
    //   dropdown: [{ label: "Downloads", path: "/quick-links/downloads" }],
    // },
  ];

  // const capitalizeLabel = (text) =>
  // text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <div className="hidden md:block sticky top-0 z-[100] bg-white shadow-white">
        <nav className="flex items-center justify-between p-3 bg-purple backdrop-blur-md">
          <Link to="/">
            <img
              src={AASCLOGO}
              width={100}
              className="bg-white p-2"
              alt="AASC Logo"
            />
          </Link>

          <ul className="flex items-center gap-1">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  // For dropdown items, not a Link, just div with onMouseEnter/Leave etc.
                  <div className="relative text-white text-[15px] py-4 px-3 cursor-pointer hover:bg-white/10 flex items-center gap-1 group">
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                    {/* Center animated underline */}
                    <span className="absolute left-1/2 bottom-1 h-[2px] w-0 bg-white/80 -translate-x-1/2 group-hover:w-4/5 transition-all duration-300 ease-out" />
                  </div>
                ) : (
                  // For non-dropdown items, use Link
                  <Link
                    to={item.path}
                    className="relative text-white text-[15px] py-4 px-3 cursor-pointer hover:bg-white/10 flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    {/* Center animated underline */}
                    <span className="absolute left-1/2 bottom-1 h-[2px] w-0 bg-white/80 -translate-x-1/2 group-hover:w-4/5 transition-all duration-300 ease-out" />
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 bg-white min-w-[230px] rounded-md shadow-lg border border-purple-400 transition-all duration-300 ${
                      openDropdown === item.label
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    <ul className="py-2">
                      {item.dropdown.map((sub, subIdx) => (
                        <li key={subIdx} className="relative">
                          <Link
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple/10 transition"
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

          <img src={AchariyaLOGO} width={65} alt="Achariya Logo" />
        </nav>
      </div>

      {/* MOBILE HEADER */}
      <div className="md:hidden sticky top-0 z-[100] bg-purple flex items-center justify-between p-3 shadow-md">
        <img
          src={AASCLOGO}
          width={80}
          className="bg-white p-2"
          alt="AASC Logo"
        />

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
      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[199]"
          onClick={() => setMobileOpen(false)}
        />
      )}
      {/* MOBILE SIDEBAR */}
      <div
        id="mobileSidebar"
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-xl z-[200] p-4 transition-transform duration-300 overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <Heading title="MENU" size="sm" align="left" className="text-lg" />
          <button className="text-purple" onClick={() => setMobileOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <ul className="flex flex-col gap-1">
          {navItems.map((item, index) => (
            
            <Link to={item.path} key={index}><li >
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
                {item.label}

                {item.dropdown && <ChevronDown />}
              </div>
              

              {/* Mobile Submenu */}
              {item.dropdown && mobileSubmenu === item.label && (
                <ul className="ml-4 border-l pl-3">
                  {item.dropdown.map((sub, i) => (
                    <Link to={sub.path}><li key={i}>
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
                        {sub.label}
                        {sub.submenu && <ChevronDown size={16} />}
                      </div>

                      {/* Third Level */}
                      {sub.submenu && mobileSubSubmenu === sub.label && (
                        <ul className="ml-4 border-l pl-3 text-sm">
                          {sub.submenu.map((ss, j) => (
                            <Link to={ss.path}>
                            <li
                              key={j}
                              className="py-1"
                              onClick={() => setMobileOpen(false)}
                            >
                              {ss.label}
                            </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
