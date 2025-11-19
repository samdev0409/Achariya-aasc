import React from "react";
import Xarrow from "react-xarrows";
import {
  Users,
  UserCheck,
  FileSpreadsheet,
  Library,
  GraduationCap,
  Building2,
  Briefcase,
  Wrench,
  Bed,
  Bus,
} from "lucide-react";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.webp";

const boxBase =
  "bg-white p-4 border border-gray-300 shadow-sm text-center text-[15px] tracking-wide";

const Organogram = () => {
  return (
    <>
      <BannerAndBreadCrumb title="Organogram" img={campus} />

      <section className="bg-background container py-10 relative">
        <h2 className="text-3xl font-semibold text-purple text-center mb-14">
          Organogram
        </h2>

        {/* -------------------- TOP SECTION -------------------- */}
        <div className="flex flex-col items-center relative">
          <div id="governing" className={`${boxBase} relative`}>
            <Users className="inline-block text-purple mb-1" size={20} />
            <div>Governing Council</div>
          </div>

          <div id="principal" className={`${boxBase} mt-10 bg-purple/10`}>
            <UserCheck className="inline-block text-purple mb-1" size={20} />
            <div>Principal</div>
          </div>

          {/* Arrow between Governing → Principal */}
          <Xarrow
            start="governing"
            end="principal"
            showHead={false}
            color="gray"
            strokeWidth={2}
          />
        </div>

        {/* -------------------- MAIN GRID -------------------- */}
        {/* -------------------- MAIN ROW EXACTLY LIKE SCREENSHOT -------------------- */}
        <div className="relative mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {/* HOD (Left Side) */}
            <div className="relative flex flex-col items-center">
              <div id="hod" className={`${boxBase} w-full`}>
                <div className="flex items-center justify-center gap-2 text-purple mb-2">
                  <GraduationCap size={18} />
                  Heads of Departments
                </div>

                <ul className="text-left text-sm leading-relaxed">
                  <li>1. Commerce</li>
                  <li>2. Management</li>
                  <li>3. Computer Science</li>
                  <li>4. Mathematics</li>
                  <li>5. Bio-Technology</li>
                  <li>6. Visual Communication</li>
                  <li>7. English</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full mt-6">
                <div id="teaching" className={`${boxBase} bg-green-50`}>
                  Teaching Faculties
                </div>
                <div id="nonteaching" className={`${boxBase} bg-green-50`}>
                  Non-Teaching Faculties
                </div>
              </div>

              <div id="students" className={`${boxBase} mt-6`}>
                Students
              </div>
            </div>

            {/* Examination Cell */}
            <div className="flex flex-col items-center">
              <div id="exam" className={`${boxBase} w-full`}>
                <FileSpreadsheet
                  className="text-purple mb-1 mx-auto"
                  size={18}
                />
                Examination Cell
              </div>
              <div id="physical" className={`${boxBase} w-full`}>
                <Users className="text-purple mb-1 mx-auto" size={18} />
                Director of Physical Education
              </div>
              <div id="library" className={`${boxBase} w-full`}>
                <Library className="text-purple mb-1 mx-auto" size={18} />
                Library
              </div>
            </div>

            {/* TPO + HR + Support */}
            <div className="flex flex-col items-center">
              <div id="tpo" className={`${boxBase} w-full`}>
                <Briefcase className="text-purple mb-1 mx-auto" size={18} />
                Training & Placement
              </div>

              <div id="hr" className={`${boxBase} mt-4 w-full`}>
                Human Resources
              </div>

              {/* 4 Support Items */}
              <div className="grid grid-cols-4 gap-4 w-full mt-4">
                <div id="transport" className={`${boxBase} bg-orange-50`}>
                  Transport
                </div>
                <div id="admin" className={`${boxBase} bg-orange-50`}>
                  Admin Office
                </div>
                <div id="maintenance" className={`${boxBase} bg-orange-50`}>
                  Maintenance
                </div>
                <div id="hostel" className={`${boxBase} bg-orange-50`}>
                  Hostel
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Governing → Principal */}
        <Xarrow
          start="governing"
          end="principal"
          showHead={false}
          color="gray"
          strokeWidth={2}
          path="smooth"
        />

        {/* Principal → five main boxes */}
        <Xarrow
          start="principal"
          end="hod"
          showHead={false}
          color="gray"
          path="smooth"
          strokeWidth={2}
        />
        <Xarrow
          start="principal"
          end="exam"
          showHead={false}
          color="gray"
          path="smooth"
          strokeWidth={2}
        />
        <Xarrow
          start="principal"
          end="physical"
          showHead={false}
          color="gray"
          path="smooth"
          strokeWidth={2}
        />
        <Xarrow
          start="principal"
          end="library"
          showHead={false}
          color="gray"
          path="smooth"
          strokeWidth={2}
        />
        <Xarrow
          start="principal"
          end="tpo"
          showHead={false}
          color="gray"
          path="smooth"
          strokeWidth={2}
        />

        {/* HOD → children */}
        <Xarrow
          start="hod"
          end="teaching"
          showHead={false}
          color="gray"
          strokeWidth={2}
          path="smooth"
        />
        <Xarrow
          start="hod"
          end="nonteaching"
          showHead={false}
          color="gray"
          strokeWidth={2}
          path="smooth"
        />
        <Xarrow
          start="hod"
          end="students"
          showHead={false}
          color="gray"
          strokeWidth={2}
          path="smooth"
        />

        {/* TPO → HR → 4 items */}
        <Xarrow
          start="tpo"
          end="hr"
          showHead={false}
          color="gray"
          strokeWidth={2}
          path="smooth"
        />
        <Xarrow
          start="hr"
          end="transport"
          showHead={false}
          color="gray"
          path="smooth"
        />
        <Xarrow
          start="hr"
          end="admin"
          showHead={false}
          color="gray"
          path="smooth"
        />
        <Xarrow
          start="hr"
          end="maintenance"
          showHead={false}
          color="gray"
          path="smooth"
        />
        <Xarrow
          start="hr"
          end="hostel"
          showHead={false}
          color="gray"
          path="smooth"
        />

        <hr className="mt-12" />
      </section>
    </>
  );
};

export default Organogram;
