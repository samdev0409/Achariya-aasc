import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import AdminLogin from "./pages/AdminLogin";
import DashboardHome from "./pages/DashboardHome";
import ProtectedRoute from "./components/ProtectedRoute";
import "./admin.css";

// Import all dedicated collection managers
// About Section
import ChiefMentorDataManager from "./managers/ChiefMentorDataManager";
import GoverningBodyCouncilDataManager from "./managers/GoverningBodyCouncilDataManager";
import PrincipalDataManager from "./managers/PrincipalDataManager";
import ProfileOfCollegeDataManager from "./managers/ProfileOfCollegeDataManager";
<<<<<<< HEAD
import OurTeamDataManager from "./managers/OurTeamDataManager";
import PressReleasesDataManager from "./managers/PressReleasesDataManager";
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

// Academics Section
import AcademicCalendarDataManager from "./managers/AcademicCalendarDataManager";
import DepartmentsDataManager from "./managers/DepartmentsDataManager";
import ProspectusDataManager from "./managers/ProspectusDataManager";
<<<<<<< HEAD
import PGProgramsDetailsManager from "./managers/PGProgramsDetailsManager";
import UGProgramsDetailsManager from "./managers/UGProgramsDetailsManager";
import ValueAddedCoursesDataManager from "./managers/ValueAddedCoursesDataManager";
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

// Campus Life Section
import SeedDataManager from "./managers/SeedDataManager";

// Committees Section
import CommittiesDataManager from "./managers/CommittiesDataManager";

// Contact Section
import ContactDataManager from "./managers/ContactDataManager";

// Events Section
import UpcomingEventsPreviewDataManager from "./managers/UpcomingEventsPreviewDataManager";
import CircularPreviewDataManager from "./managers/CircularPreviewDataManager";
<<<<<<< HEAD
import EventsDataManager from "./managers/EventsDataManager";
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

// Home Section
import AchievementsStatsDataManager from "./managers/AchievementsStatsDataManager";
import AdmissionsDataManager from "./managers/AdmissionsDataManager";
import AllHomeDataManager from "./managers/AllHomeDataManager";
import CarouselDataManager from "./managers/CarouselDataManager";
import MissionVisionDataManager from "./managers/MissionVisionDataManager";
import NewsTickerDataManager from "./managers/NewsTickerDataManager";
import OurCampusDataManager from "./managers/OurCampusDataManager";
import OurLeadsDataManager from "./managers/OurLeadsDataManager";
import OurSchoolsCollegesDataManager from "./managers/OurSchoolsCollegesDataManager";
import RecruitersDataManager from "./managers/RecruitersDataManager";
import TestimonialsDataManager from "./managers/TestimonialsDataManager";
import WelcomeDataManager from "./managers/WelcomeDataManager";
<<<<<<< HEAD
import AnnouncementsDataManager from "./managers/AnnouncementsDataManager";
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

// IQAC Section
import NIRFDataManager from "./managers/NIRFDataManager";

// Placements Section
import PlacementRecordsManager from "./managers/PlacementRecordsManager";
<<<<<<< HEAD
import TrainingAndPlacementsDataManager from "./managers/TrainingAndPlacementsDataManager";
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

// Users
import UsersManager from "./managers/UsersManager";

<<<<<<< HEAD
// Generic Manager
import DynamicCollectionManager from "./components/DynamicCollectionManager";

=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
const AdminDashboard: React.FC = () => {
  return (
    <Routes>
      {/* Login - no sidebar */}
      <Route path="/login" element={<AdminLogin />} />

      {/* Protected Admin Area */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="admin-layout">
              <AdminSidebar />
              <main className="admin-main">
                <Routes>
                  {/* Dashboard */}
                  <Route path="/dashboard" element={<DashboardHome />} />

                  {/* About Section Routes */}
                  <Route
                    path="/collection/about__chiefmentordata"
                    element={<ChiefMentorDataManager />}
                  />
                  <Route
                    path="/collection/about__governingbodycouncildata"
                    element={<GoverningBodyCouncilDataManager />}
                  />
                  <Route
                    path="/collection/about__principaldata"
                    element={<PrincipalDataManager />}
                  />
                  <Route
                    path="/collection/about__profileofcollegedata"
                    element={<ProfileOfCollegeDataManager />}
                  />
<<<<<<< HEAD
                  <Route
                    path="/collection/about__ourteamdata"
                    element={<OurTeamDataManager />}
                  />
                  <Route
                    path="/collection/about__pressreleasesdata"
                    element={<PressReleasesDataManager />}
                  />
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

                  {/* Academics Section Routes */}
                  <Route
                    path="/collection/academics__academiccalendardata"
                    element={<AcademicCalendarDataManager />}
                  />
                  <Route
                    path="/collection/academics__departmentsdata"
                    element={<DepartmentsDataManager />}
                  />
                  <Route
                    path="/collection/academics__prospectusdata"
                    element={<ProspectusDataManager />}
                  />
<<<<<<< HEAD
                  <Route
                    path="/collection/academics__pgprogrammsdetails"
                    element={<PGProgramsDetailsManager />}
                  />
                  <Route
                    path="/collection/academics__ugprogramsdatadetails"
                    element={<UGProgramsDetailsManager />}
                  />
                  <Route
                    path="/collection/academics__valueaddedcoursesdata"
                    element={<ValueAddedCoursesDataManager />}
                  />
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

                  {/* Campus Life Section Routes */}
                  <Route
                    path="/collection/campus-life__seeddata"
                    element={<SeedDataManager />}
                  />

                  {/* Committees Section Routes */}
                  <Route
<<<<<<< HEAD
                    path="/collection/committees__committiesdata"
=======
                    path="/collection/commitees__committiesdata"
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                    element={<CommittiesDataManager />}
                  />

                  {/* Contact Section Routes */}
                  <Route
                    path="/collection/contact__contactdata"
                    element={<ContactDataManager />}
                  />

                  {/* Events Section Routes */}
                  <Route
                    path="/collection/events__upcommingeventspreviewdata"
                    element={<UpcomingEventsPreviewDataManager />}
                  />
                  <Route
                    path="/collection/home__circularpreviewdata"
                    element={<CircularPreviewDataManager />}
                  />
<<<<<<< HEAD
                  <Route
                    path="/collection/events__eventsdata"
                    element={<EventsDataManager />}
                  />
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

                  {/* Home Section Routes */}
                  <Route
                    path="/collection/home__achievementsstatsdata"
                    element={<AchievementsStatsDataManager />}
                  />
                  <Route
                    path="/collection/home__admissionsdata"
                    element={<AdmissionsDataManager />}
                  />
                  <Route
                    path="/collection/home__allhomedata"
                    element={<AllHomeDataManager />}
                  />
                  <Route
                    path="/collection/home__carouseldata"
                    element={<CarouselDataManager />}
                  />
                  <Route
                    path="/collection/home__missionvisiondata"
                    element={<MissionVisionDataManager />}
                  />
                  <Route
                    path="/collection/home__newstickerdata"
                    element={<NewsTickerDataManager />}
                  />
                  <Route
                    path="/collection/home__ourcampusdata"
                    element={<OurCampusDataManager />}
                  />
                  <Route
                    path="/collection/home__ourleads"
                    element={<OurLeadsDataManager />}
                  />
                  <Route
                    path="/collection/home__ourschoolscollegesdata"
                    element={<OurSchoolsCollegesDataManager />}
                  />
                  <Route
                    path="/collection/home__recruitersdata"
                    element={<RecruitersDataManager />}
                  />
                  <Route
                    path="/collection/home__testimonialdata"
                    element={<TestimonialsDataManager />}
                  />
                  <Route
                    path="/collection/home__welcomedata"
                    element={<WelcomeDataManager />}
                  />
<<<<<<< HEAD
                  <Route
                    path="/collection/home__announcementsdata"
                    element={<AnnouncementsDataManager />}
                  />
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

                  {/* IQAC Section Routes */}
                  <Route
                    path="/collection/iqac__nirfdata"
                    element={<NIRFDataManager />}
                  />

                  {/* Placements Section Routes */}
                  <Route
                    path="/collection/placements__placementrecords"
                    element={<PlacementRecordsManager />}
                  />
<<<<<<< HEAD
                  <Route
                    path="/collection/placements__trainingandplacementsdata"
                    element={<TrainingAndPlacementsDataManager />}
                  />
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

                  {/* Users Route */}
                  <Route path="/collection/users" element={<UsersManager />} />

<<<<<<< HEAD
                  {/* Generic Route for all other collections */}
                  <Route
                    path="/collection/:collectionId"
                    element={<DynamicCollectionManager />}
                  />

=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                  {/* Default redirect */}
                  <Route
                    path="/"
                    element={<Navigate to="/admin/dashboard" replace />}
                  />

                  <Route
                    path="*"
                    element={<Navigate to="/admin/dashboard" replace />}
                  />
                </Routes>
              </main>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminDashboard;
