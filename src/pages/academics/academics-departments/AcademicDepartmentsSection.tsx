import React from "react";
import Heading from "@/components/reusable/Heading";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import OurTeamFacultyProfile from "@/components/faculty/OurTeamFacultyProfile";

const AcademicDepartmentsSection = ({ slug, departmentData }) => {
  if (!departmentData) {
    return (
      <div className="flex-1 md:p-6 p-4 border-r border-gray-400">
        <Heading
          title="Department Not Found"
          size="sm"
          align="left"
          className="text-red-600 font-semibold"
        />
        <p className="text-gray-600">Please choose a valid department.</p>
      </div>
    );
  }

  const { name, image, about, description = [], faculty = [] } = departmentData;

  return (
    <div className="flex-1 px-6 border-r border-gray-400">
      {/* Department Header */}
      <div className="mb-6 py-4 sticky md:sticky-none md:top-auto md:text-left text-center top-[130px] bg-white z-[100] md:z-0">
        <Heading title={name} size="md" align="left" />
      </div>

      {/* Department Image */}
      {image && (
        <div className="mb-8">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      {/* About Section */}
      <section className="mb-12">
        <Heading title="About" size="md" align="left" />
        <HeadingUnderline width={80} align="left" />
        <p className="text-gray-700 leading-relaxed mt-4">{about}</p>
      </section>

      {/* Description Sections */}
      {description.length > 0 && (
        <section className="space-y-8">
          {description.map((section, index) => (
            <div key={index} className="mb-8">
              <Heading title={section.title} size="sm" align="left" />
              <HeadingUnderline width={120} align="left" />
              <p className="text-gray-700 leading-relaxed mt-4 whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Faculty Section */}
      {faculty.length > 0 && (
        <section className="mt-12">
          <Heading title="Our Faculty" size="md" align="left" />
          <HeadingUnderline width={120} align="left" />
          <div className="mt-6 space-y-4">
            {faculty.map((member, index) => (
              <OurTeamFacultyProfile
                key={`${member.email}-${index}`}
                name={member.name}
                phone={member.phone}
                department={member.department}
                designation={member.designation}
                email={member.email}
                image={member.image}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default AcademicDepartmentsSection;
