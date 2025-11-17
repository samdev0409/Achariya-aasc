import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import TopHeaderBar from "./TopHeadBar";
import HeaderBannerSection from "./HeaderBannerSection";
import NewsTicker from "./NewsTicker";
import AASCLOGO from "@/assets/common/AASC-Logo.webp";
import AchariyaLOGO from "@/assets/common/achariya-logo-300x300.webp"

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

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
        {
          label: "Media Talks",
          path: "/about/media-talks",
        },
      ],
    },
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
        {
          label: "Transport Facilities",
          path: "/facilities/transport-facilities",
        },
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
        { label: "Activities", path: "/placements/activities" },
        {
          label: "Key Collaborators/Recruiters",
          path: "/placements/key-collaborators-recruiters",
        },
        { label: "Records", path: "/placements/records" },
        { label: "Photo gallery", path: "/placements/photo-gallery" },
        { label: "Reports", path: "/placements/reports" },
      ],
    },
    {
      label: "CAMPUS LIFE",
      path: "/campus-life",
      dropdown: [
        { label: "SEED", path: "/campus-life/seed" },
        {
          label: "Value-added courses",
          path: "/campus-life/value-added-courses",
        },
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
        {
          label: "Best Practices",
          path: "/iqac/best-practices",
          submenu: [
            {
              label: "Poster Campaign",
              path: "/iqac/best-practices/poster-campaign",
            },
            {
              label: "Spirituality in AASC",
              path: "/iqac/best-practices/spirituality-in-aasc",
            },
            { label: "Webinars", path: "/iqac/best-practices/webinars" },
            {
              label: "LMS",
              path: "https://admin.training.achariya.in/login",
              external: true,
            },
          ],
        },
      ],
    },
    {
      label: "NIRF",
      path: "/main-nirf",
      dropdown: null,
    },
    {
      label: "COMMITTEES",
      path: "/committees",
      dropdown: [
        {
          label: "Committee",
          path: "/committees/naac",
          submenu: [
            {
              label: "Academic Council Committee",
              path: "/committees/academic-council-committee-cn",
            },
            {
              label: "Governing Council Committee",
              path: "/committees/governing-council-committee-cn",
            },
            {
              label: "Admission Committee",
              path: "/committees/admission-committee-cn",
            },
            {
              label: "Library Committee",
              path: "/committees/library-committee-cn",
            },
            {
              label: "Maintenance Committee",
              path: "/committees/maintenance-committee-cn",
            },
            {
              label: "Hostel Committee",
              path: "/committees/hostel-committee-cn",
            },
            {
              label: "Discipline Committee",
              path: "/committees/discipline-committee-cn",
            },
            {
              label: "Cultural Committee",
              path: "/committees/cultural-committee-cn",
            },
            {
              label: "Social Media Committee",
              path: "/committees/social-media-committee-cn",
            },
            {
              label: "Transport Committee",
              path: "/committees/transport-committee-cn",
            },
            {
              label: "Website Committee",
              path: "/committees/website-committee-cn",
            },
            {
              label: "Student information Committee",
              path: "/committees/student-information-committee-cn",
            },
            {
              label: "Finance Committee",
              path: "/committees/finance-committee-cn",
            },
            { label: "NAAC Committee", path: "/committees/naac-committee-cn" },
            {
              label: "Anti Ragging Committee",
              path: "/committees/anti-ragging-committee-cn",
            },
            {
              label: "Staff & Students Welfare Counseling Committee",
              path: "/committees/staff-students-welfare-councilling-committee-cn",
            },
          ],
        },
        {
          label: "Cells",
          path: "/committees/cells",
          submenu: [
            { label: "Exam Cell", path: "/committees/cells/exam-cell-cn" },
            {
              label: "Training & Placement Cell",
              path: "/committees/cells/training-and-placement-cell-cn",
            },
            { label: "IOAC", path: "/committees/cells/ioac" },
            {
              label: "National Service Scheme (NSS)",
              path: "/committees/cells/nss-cn",
            },
          ],
        },
        {
          label: "Clubs",
          path: "/committees/clubs",
          submenu: [
            { label: "RRC", path: "/committees/clubs/rrc" },
            { label: "JCI", path: "/committees/clubs/jci" },
            {
              label: "Achariya Code Club",
              path: "/committees/clubs/achariya-code-club",
            },
          ],
        },
      ],
    },
    {
      label: "QUICK LINKS",
      path: "/quick-links",
      dropdown: [{ label: "Downloads", path: "/quick-links/downloads" }],
    },
  ];

  return (
    <>
      <TopHeaderBar />
      {/* <HeaderBannerSection /> */}
      {/* <NewsTicker /> */}
      <nav className="bg-purple flex items-center justify-content-between p-3">
        <div>
          <img src={AASCLOGO} width={150} className="bg-white p-3" alt="" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4">
          <ul className="flex items-center justify-between gap-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="text-white text-sm font-medium py-4 px-3 hover:bg-purple/80 transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 bg-white min-w-[230px] rounded-md shadow-lg border border-gray-200 z-50 transform transition-all duration-300 origin-top ${
                      openDropdown === item.label
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    <ul className="py-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex} className="relative group/sub">
                          {subItem.external ? (
                            <a
                              href={subItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2.5 text-gray-700 capitalize text-sm hover:bg-purple/10 hover:text-purple-700 transition-all duration-300"
                            >
                              {subItem.label}
                              <span className="ml-1 text-xs">↗</span>
                            </a>
                          ) : (
                            <Link
                              to={subItem.path}
                              className="block px-4 py-2.5 text-gray-700 capitalize text-sm hover:bg-purple/10 hover:text-purple-700 transition-all duration-300 flex items-center justify-between"
                            >
                              {subItem.label}
                              {subItem.submenu && (
                                <span className="ml-2 text-xs">›</span>
                              )}
                            </Link>
                          )}

                          {/* Third-level submenu (sub-dropdown) */}
                          {subItem.submenu && (
                            <div className="absolute left-full top-0 bg-white min-w-[250px] rounded-md shadow-lg border border-gray-200 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform origin-left scale-95 group-hover/sub:scale-100">
                              <ul className="py-2">
                                {subItem.submenu.map(
                                  (subSubItem, subSubIndex) => (
                                    <li key={subSubIndex}>
                                      {subSubItem.external ? (
                                        <a
                                          href={subSubItem.path}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block px-4 py-2.5 text-gray-700 capitalize text-sm hover:bg-purple/10 hover:text-purple-700 transition-all duration-300"
                                        >
                                          {subSubItem.label}
                                          <span className="ml-1 text-xs">
                                            ↗
                                          </span>
                                        </a>
                                      ) : (
                                        <Link
                                          to={subSubItem.path}
                                          className="block px-4 py-2.5 text-gray-700 capitalize text-sm hover:bg-purple/10 hover:text-purple-700 transition-all duration-300"
                                        >
                                          {subSubItem.label}
                                        </Link>
                                      )}

                                      {/* Gray Separator for submenu items (except last) */}
                                      {subSubIndex !==
                                        subItem.submenu.length - 1 && (
                                        <div className="h-[1px] bg-gray-300 mx-4"></div>
                                      )}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}

                          {/* Gray Separator (except last item) */}
                          {subIndex !== item.dropdown.length - 1 && (
                            <div className="h-[1px] bg-gray-300 mx-4"></div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
         <div>
          <img src={AchariyaLOGO} width={85}  alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
