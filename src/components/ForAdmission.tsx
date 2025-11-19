import React from "react";
import AdmissionForm from "@/components/forms/ForAdmissionForm";
import HeadingUnderline from "./HeadingUnderline";

const ForAdmission: React.FC = () => {
  return (
    <section className="bg-background">
      <div className="flex flex-col md:flex-row  gap-10 ">
        {/* 🏫 Left Content Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-purple">For Admission</h2>
            <HeadingUnderline width={150} align="left" />
          </div>
          <p className="leading-relaxed">
            Begin your academic journey with Achariya Arts and Science College,
            Puducherry. We’re committed to nurturing excellence and empowering
            students through a holistic educational approach combining
            knowledge, innovation, and values.
          </p>
          <p className="leading-relaxed">
            Begin your academic journey with Achariya Arts and Science College,
            Puducherry. We’re committed to nurturing excellence and empowering
            students through a holistic educational approach combining
            knowledge, innovation, and values.
          </p>
          <p className="leading-relaxed">
            Begin your academic journey with Achariya Arts and Science College,
            Puducherry. We’re committed to nurturing excellence and empowering
            students through a holistic educational approach combining
            knowledge, innovation, and values.
          </p>
          <p className="leading-relaxed">
            Fill out the form to express your interest in our programs. Our
            admission team will reach out to you with all the necessary details
            and guidance to help you start your path toward success.
          </p>
        </div>

        {/* 📝 Right Form Section */}
        <div className="md:w-1/2 w-full bg-card rounded-xl  px-8 ">
          <div>
            <h2 className="text-3xl font-bold text-purple">Admission Enquiry Form</h2>
            <HeadingUnderline width={150} align="left" />
          </div>
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
};

export default ForAdmission;
