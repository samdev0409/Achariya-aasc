import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Carousel from "./Carousel";
import GalleryPreview from "@/components/GalleryPreview";
import OurLeadership from "@/components/OurLeadership";
import AchievementsStats from "@/components/AchievementsStats";
import CircularAndUpcomingEvents from "@/components/CircularAndUpcommingEvents";
import OurCampus from "@/components/OurCampus";
import ForAdmission from "@/components/ForAdmission";
import MissionVision from "@/components/MissionVision";
import Testimonials from "@/components/Testimonials";
import OurRecruiters from "@/components/OurRecruiters";
import AchariyaSchoolsAndColleges from "@/components/AchariyaSchoolsAndColleges";
import NewsTicker from "@/components/common/Header/NewsTicker";
import underline from "@/assets/images/underline/decorative-line-divider-design.png";
import HeadingUnderline from "@/components/HeadingUnderline";

const Home = () => {
  const stats = [
    { label: "Programme", value: "2+" },
    { label: "Students", value: "319+" },
    { label: "University Ranks", value: "25+" },
    { label: "Graduation", value: "1225+" },
    { label: "MoU", value: "4+" },
  ];

  const management = [
    { name: "Shri C.Sundarapandian", role: "Founder Chairman" },
    { name: "Shri S. Chandrasekaran", role: "Vice-Chairman" },
    { name: "Smt.S.Sangavai", role: "Secretary" },
    { name: "Shri S. Sankaranarayanan", role: "Joint Secretary" },
  ];

  return (
    <>
      <Carousel />
      <NewsTicker />
      <div className="min-h-screen flex flex-col ">
        <main className="flex-grow space-y-6">
          <section className="bg-secondary container py-12 mt-6 border-border">
            <div className="text-center">
              <h1
                className="text-3xl md:text-4xl font-bold text-purple "
                style={{ textTransform: "capitalize" }}
              >
                Welcome to Achariya Arts and Science College
              </h1>
              <HeadingUnderline width={250} />
              <p className="text-base max-w-5xl text-center mx-auto leading-relaxed">
                Achariya Arts and Science College, Puducherry, is one of the
                premier institutions under the Achariya Group of Educational
                Institutions. Established with a vision to provide holistic
                education and empower students with academic excellence, values,
                and skills, Achariya offers a wide range of undergraduate and
                postgraduate programs in arts, science, and commerce. The
                college fosters innovation, discipline, and leadership among its
                students, preparing them to excel in their chosen fields.
              </p>
            </div>
            <div>
              <OurLeadership />
            </div>
            <p className="text-base leading-relaxed max-w-5xl text-center mx-auto mt-4">
              Achariya Arts and Science College, Puducherry, is one of the
              premier institutions under the Achariya Group of Educational
              Institutions. Established with a vision to provide holistic
              education and empower students with academic excellence, values,
              and skills, Achariya offers a wide range of undergraduate and
              postgraduate programs in arts, science, and commerce. The college
              fosters innovation, discipline, and leadership among its students,
              preparing them to excel in their chosen fields.
            </p>
          </section>

          <section className="py-12 bg-gray-200">
            <AchievementsStats />
          </section>

          <section className="py-12 container">
            <OurCampus />
          </section>

          <section className="py-12 container">
            <MissionVision />
          </section>

          <section className="py-12 pb-14 px-6 bg-gray-200">
            <GalleryPreview />
          </section>

          <section className="py-12 container">
            <OurRecruiters />
          </section>
          <hr className=" container" />

          <section id="contact" className="py-12 container">
            <ForAdmission />
          </section>
          <hr className="text-gray-200 container" />
          <section className="py-12 container">
            <CircularAndUpcomingEvents />
          </section>

          <section className="py-12  ">
            <Testimonials />
          </section>

          <section className="py-12 container">
            <AchariyaSchoolsAndColleges />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
