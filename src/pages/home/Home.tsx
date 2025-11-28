import Carousel from "./Carousel";
import EventsHighlightsPreview from "@/components/EventsHighlightsPreview";
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
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import Heading from "@/components/reusable/Heading";
import { homeData } from "@/data/home/allhomedata.ts";

const Home = () => {
  return (
    <>
      <Carousel images={homeData.carousel.images} />
      <NewsTicker items={homeData.newsTicker.items} />
      <div className="min-h-screen flex flex-col ">
        <main className="flex-grow space-y-6">
          <section className="bg-secondary container py-6 md:py-12 mt-6 border-border">
            <div className="text-center">
              <Heading
                title={homeData.welcome.title}
                size="lg"
                align="center"
                className="capitalize"
              />
              <HeadingUnderline width={250} />
              <p className="text-base max-w-5xl text-center mx-auto leading-relaxed">
                {homeData.welcome.description}
              </p>
            </div>
            <div>
              <OurLeadership leads={homeData.leadership.leads} />
            </div>
            <p className="text-base leading-relaxed max-w-5xl text-center mx-auto mt-4">
              {homeData.welcome.description}
            </p>
          </section>

          <section className="py-6 md:py-12 bg-gray-200">
            <AchievementsStats stats={homeData.stats.items} />
          </section>

          <section className="py-6 md:py-12 container">
            <OurCampus data={homeData.campus} />
          </section>
          <hr className=" container" />

          <section className="py-6 md:py-10 container">
            <MissionVision data={homeData.missionVision} />
          </section>

          <section className="py-6 md:py-12 pb-14 px-6 bg-gray-200">
            <EventsHighlightsPreview
              title={homeData.gallery.title}
              events={homeData.gallery.events}
            />
          </section>

          <section className="py-6 md:py-12 container">
            <OurRecruiters
              title={homeData.recruiters.title}
              logos={homeData.recruiters.logos}
            />
          </section>
          <hr className=" container" />

          <section id="contact" className="py-6 md:py-12 container">
            <ForAdmission data={homeData.admission} />
          </section>
          <hr className="text-gray-200 container" />
          <section className="py-6 md:py-12 container">
            <CircularAndUpcomingEvents data={homeData.announcements} />
          </section>

          <section className="py-6 md:py-12 bg-gray-200 ">
            <Testimonials
              title={homeData.testimonials.title}
              videos={homeData.testimonials.videos}
            />
          </section>

          <section className="py-6 md:py-12 container">
            <AchariyaSchoolsAndColleges
              title={homeData.schoolsAndColleges.title}
              logos={homeData.schoolsAndColleges.logos}
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
