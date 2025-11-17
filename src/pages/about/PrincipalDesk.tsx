import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import principal from "@/assets/PrincipalAASC.png";

const PrincipalDesk = () => {
  return (
    <section className="bg-background container py-10 mt-10">
      <div className="flex flex-col md:flex-row gap-10 flex items-center">
        {/* 🏫 Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-purple mb-4">
            Our Principal's Desk
          </h2>
          <p className=" leading-relaxed">
            ACHARIYA Arts and Science College, throughout its glorious history,
            has played a pivotal role in imparting education in the field of
            Arts and science. It provides technology-based integrated and
            inclusive education in a disciplined, dynamic, vibrant and hygienic
            environment. We try to nurture students with adequate emphasis on
            all the three aspects of integrated education e.g., physical,
            intellectual, and value education.
          </p>
          <br />
          <p className=" leading-relaxed">
            ACHARIYA Arts and Science College provides all facilities like
            Library, Computers, Internet, Laboratories, Language Lab and Sports
            activities to meet the needs of the new upgraded pattern of
            education under the Choice Based Credit System (CBCS). The hostel
            facility is provided with wholesome nutritious food and care. Buses
            ply on specific routes, enabling the students from different parts
            of the city to reach the college on time. Besides infrastructure,
            college is valued for its academic rigor, in particular the delivery
            of student-centric content. We promote continuous engagement between
            college and industry to produce graduates prized by the industry.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
          <img
            src={principal}
            alt="Our Campus"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="pt-6">
        <p className=" leading-relaxed">
          ACHARIYA Arts and Science College, the fraternity has successfully
          conducted themselves over the years for achieving excellence. The
          faculty members continue to discharge their duties with dedication,
          commitment, passion, and courage. In the years ahead, ACHARIYA Arts
          and Science College will continue to uphold the rich legacy of being
          the number one college for Arts and Science education in Pondicherry.
          A lot has been done and much more is desired to take it to a higher
          trajectory of growth. For this, we believe that all the stakeholders
          are equally significant but the most important stakeholder and the
          strength of the ACHARIYA Arts and Science College is the input of the
          system i.e., the STUDENTS, who pass through the various processes
          designed by the faculty members.
        </p> <br />
        <p className=" leading-relaxed">
          I convey my good wishes to all those who are aspiring to get admitted
          to ACHARIYA Arts and Science College.{" "}
        </p>
      </div>
      <div className="flex-row text-right  py-6">
        <p>With best wishes,</p>
        <h3 className="text-lg"><b>Dr. S.Vimalanand</b></h3>
        <em>Principal</em>
      </div>
            <hr className="mt-5" />

    </section>
  );
};

export default PrincipalDesk;
