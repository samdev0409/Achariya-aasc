import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import chiefMentor from "@/assets/images/chief-mentor.jpg";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from '@/assets/images/aasc_building.webp'

const CheifMentorDesk = () => {
  return (<>
        <BannerAndBreadCrumb title=" Cheif Mentor's Desk" img={campus} />

    <section className="bg-background container py-10 mt-10">
      <div className="flex flex-col md:flex-row gap-10 flex items-center">
        <div className="relative w-full md:w-1/2 aspect-video overflow-hidden shadow-lg">
          <img
            src={chiefMentor}
            alt="Our Campus"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🏫 Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-purple mb-4">
            Our Cheif Mentor's Desk
          </h2>
          <p className=" leading-relaxed">
            I have travelled to many destinations to derive completely a
            next-generation educational system. The educational design,
            methodology, infrastructure, and systems, adopted in ACHARIYA, focus
            entirely on the holistic development of your child. I believe, the
            highly motivated and well-trained teaching faculty and the
            intellectual environment with the serene beauty added to it will be
            the ideal school that you can choose for your child.
          </p>
          <br />
          <p className=" leading-relaxed">
            Dear parents, choose ACHARIYA to give your child a life of abundance
            and choice. I will be happy to welcome your child to the family of
            ACHARIYA. We offer, international standard of education accessible
            and affordable to every child.
          </p>

          <div className="mt-5">
            <a href="#contact" className="red-btn ">
              For Admissions
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CheifMentorDesk;
