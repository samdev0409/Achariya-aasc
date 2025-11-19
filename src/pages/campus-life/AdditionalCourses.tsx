import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import React from "react";
import campus from "@/assets/images/aasc_building.webp";
import HeadingUnderline from "@/components/HeadingUnderline";
import ProfileOfCollege from "../about/ProfileOfCollege";
import FacultyProfile from "@/components/FacultyProfile";
import ValueAddedCoursesData from "@/data/ValueAddedCourses.js";

const AdditionalCourses = () => {
  const ValueAddedCoursesData = [
    AdditionalCoursesData,
    AdditionalCoursesDataGeneralIncharge,
  ];
  return (
    <div>
      <BannerAndBreadCrumb img={campus} title="Value Added Courses" />
      <section className="container bg-secondary border-border py-10">
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
            employability skills of students. It is the need of the hour for all
            the Higher Education Institutions to enrich the academic-curriculum
            with value added courses to develop the technical skills of the
            students to meet the current industry demands.
          </p>
        </div>
      </section>
      <section className="py-10">
        <FacultyProfile name={} />
      </section>
    </div>
  );
};

export default AdditionalCourses;
