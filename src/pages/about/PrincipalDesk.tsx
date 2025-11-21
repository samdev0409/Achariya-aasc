import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import principal from "@/assets/images/leads/principal-ushadevi.jpeg";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.png";

const PrincipalDesk = () => {
  return (
    <>
      <BannerAndBreadCrumb title="Principal's Desk" img={campus} />
      <section className="bg-background container py-10 mt-10">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          <div className="relative w-full md:w-1/2 min-h-96 overflow-hidden shadow-lg rounded-lg">
            <img
              src={principal}
              alt="Our Campus"
              className="w-full h-full object-cover"
            />
          </div>
          {/* 🏫 Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-purple mb-4">
              Our Principal's Desk
            </h2>
            <p className="leading-relaxed">
              ACHARIYA Arts and Science College, throughout its glorious
              history, has played a pivotal role in imparting education in the
              field of Arts and science. It provides technology-based integrated
              and inclusive education in a disciplined, dynamic, vibrant and
              hygienic environment. We try to nurture students with adequate
              emphasis on all the three aspects of integrated education e.g.,
              physical, intellectual, and value education.
            </p>
            <br />
            <p className="leading-relaxed">
              ACHARIYA Arts and Science College provides all facilities like
              Library, Computers, Internet, Laboratories, Language Lab and
              Sports activities to meet the needs of the new upgraded pattern of
              education under the Choice Based Credit System (CBCS). The hostel
              facility is provided with wholesome nutritious food and care.
              Buses ply on specific routes, enabling the students from different
              parts of the city to reach the college on time. Besides
              infrastructure, college is valued for its academic rigor, in
              particular the delivery of student-centric content. We promote
              continuous engagement between college and industry to produce
              graduates prized by the industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-right py-6">
          <p>With best wishes,</p>
          <h3 className="text-lg">
            <b>Dr. S.Vimalanand</b>
          </h3>
          <em>Principal</em>
        </div>
      </section>
    </>
  );
};

export default PrincipalDesk;
