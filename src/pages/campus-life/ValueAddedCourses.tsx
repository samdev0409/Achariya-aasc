import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import React from "react";
import campus from "@/assets/images/aasc_building.webp";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import FacultyProfile from "@/components/FacultyProfile";
import addoncourseddata from "@/data/ValueAddedCoursesData.js";
import { Phone, Mail } from "lucide-react";

const ValueAddedCourses = () => {
  const {
    AdditionalCoursesData = [],
    AdditionalCoursesDataGeneralIncharge = [],
  } = addoncourseddata || {};

  // overall incharge (use first item as the overall incharge)
  const overallIncharge = AdditionalCoursesDataGeneralIncharge[0] || null;

  return (
    <div>
      <BannerAndBreadCrumb img={campus} title="Value Added Courses" />

      <div className="container">
        <section className="py-10">
          <div className="text-center">
            <h1
              className="text-3xl md:text-4xl font-bold text-purple "
              style={{ textTransform: "capitalize" }}
            >
              Value Added Courses
            </h1>
            <HeadingUnderline width={250} />
            <p className="text-base leading-relaxed">
              Value added courses, supplements the learner centric aspects of
              students along with the regular curriculum with the sole notion of
              providing skill-oriented training programs for improving the
              employability skills of students. It is the need of the hour for
              all the Higher Education Institutions to enrich the
              academic-curriculum with value added courses to develop the
              technical skills of the students to meet the current industry
              demands.
            </p>
          </div>
        </section>

        {/* courses details */}
        <section className="py-10">
          <div>
            <h2 className="text-3xl font-bold text-center">
              Courses We Provide
            </h2>
            <HeadingUnderline width={150} align="center" />
          </div>
          {AdditionalCoursesData.map((course, index) => {
            const faculty = course.faculty?.[0] || null;
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 border-b md:border-b-0 md:border-r md:border-l mb-4 border-gray-300 "
              >
                {/* LEFT — ICON */}
                <div className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-300">
                  <img
                    src={course.icon}
                    alt={course.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>

                {/* CENTER — COURSE TITLE */}
                <div className="flex flex-col justify-center text-center md:text-left p-6 border-b md:border-b-0 md:border-r border-gray-300">
                  <h2 className="text-xl font-semibold tracking-wide">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {course.courseDescription}
                  </p>
                </div>

                {/* RIGHT — FACULTY INCHARGE OR OVERALL INCHARGE */}
                <div className="flex flex-col justify-center p-6 space-y-2 text-center md:text-left">
                  {faculty ? (
                    <>
                      <p className="text-sm font-medium">{faculty.name}</p>
                      {/* <p className="text-sm text-gray-600">
                        {faculty.designation}
                      </p> */}
                      <p className="text-sm text-gray-600">
                        {faculty.department}
                      </p>

                      {/* Phone */}
                      {faculty.phone && (
                        <p className="flex items-center gap-2 text-gray-700 text-sm mt-2">
                          <Phone size={17} />
                          <a
                            href={`tel:${faculty.phone}`}
                            className="hover:text-black duration-200"
                          >
                            {faculty.phone}
                          </a>
                        </p>
                      )}

                      {/* Email */}
                      {/* {faculty.email && (
                        <p className="flex items-center gap-2 text-gray-700 text-sm break-all">
                          <Mail size={17} />
                          <a
                            href={`mailto:${faculty.email}`}
                            className="hover:text-black duration-200"
                          >
                            {faculty.email}
                          </a>
                        </p>
                      )} */}
                    </>
                  ) : overallIncharge ? (
                    <>
                      <p className="text-sm font-medium">
                        {overallIncharge.name}
                      </p>
                      {/* <p className="text-sm text-gray-600">
                        {overallIncharge.designation}
                      </p> */}
                      <p className="text-sm text-gray-600">
                        {overallIncharge.department}
                      </p>

                      {/* Phone */}
                      {overallIncharge.phone && (
                        <p className="flex items-center gap-2 text-gray-700 text-sm mt-2">
                          <Phone size={17} />
                          <a
                            href={`tel:${overallIncharge.phone}`}
                            className="hover:text-black duration-200"
                          >
                            {overallIncharge.phone}
                          </a>
                        </p>
                      )}

                      {/* Email */}
                      {/* {overallIncharge.email && (
                        <p className="flex items-center gap-2 text-gray-700 text-sm break-all">
                          <Mail size={17} />
                          <a
                            href={`mailto:${overallIncharge.email}`}
                            className="hover:text-black duration-200"
                          >
                            {overallIncharge.email}
                          </a>
                        </p>
                      )} */}
                    </>
                  ) : (
                    <p className="text-sm text-gray-500">Not Assigned</p>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        <section className="py-10">
          <div>
            <h2 className="text-3xl font-bold text-center">For More Enquiry</h2>
            <HeadingUnderline width={150} align="center" />
          </div>
          {AdditionalCoursesDataGeneralIncharge.map((fac, index) => (
            <div key={index}>
              <FacultyProfile
                name={fac.name}
                department={fac.department}
                designation={fac.designation}
                image={fac.image}
                phone={fac.phone}
                email={fac.email}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ValueAddedCourses;
