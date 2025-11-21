import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/common/Header/Navbar";
import MainGallery from "./pages/gallery/MainGallery";
import Footer from "./components/common/Footer";
import "./App.css";
import ProfileOfCollege from "./pages/about/ProfileOfCollege";
import CheifMentorDesk from "./pages/about/CheifMentorDesk";
import OurTeam from "./pages/about/our-team/OurTeam";
import PrincipalDesk from "./pages/about/PrincipalDesk";
import Organogrm from "./pages/about/Organogrm";
import GoverningBodyCouncil from "./pages/about/GoverningBodyCouncil";
import MediaTalks from "./pages/about/MediaTalks";
import PressReleases from "./pages/about/press-releases/PressReleases";
import AcademicDepartments from "./pages/academics/academics-departments/AcademicDepartments";
import UGPrograms from "./pages/academics/UGprograms/UGPrograms";
import PGPrograms from "./pages/academics/PGprograms/PGprograms";
import Library from "./pages/facilities/library/Library";
import TrainingAndPlacementsCell from "./pages/placements/TrainingAndPlacementsCell";
import PlacementRecords from "./pages/placements/PlacementRecords";
import KeyRecruiters from "./pages/placements/KeyCollaboratorsRecruiters";
import KeyCollaboratorsRecruiters from "./pages/placements/KeyCollaboratorsRecruiters";
import ValueAddedCourses from "./pages/campus-life/ValueAddedCourses";
import Sports from "./pages/facilities/sports/Sports";
import SEED from "./pages/campus-life/SEED";
import TopHeaderBar from "./components/common/Header/TopHeadBar";
import ScrollToTop from "./components/ScrollTop";
import UpcomingEvents from "./pages/upcomming-events/UpcommingEvents";
import Circular from "./pages/circlulars/Circulars";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> 
        <TopHeaderBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Abou US Pages Routes */}
          <Route
            path="/about/profile-of-the-college"
            element={<ProfileOfCollege />}
          />
          <Route
            path="/about/chief-mentors-desk"
            element={<CheifMentorDesk />}
          />
          <Route path="/about/our-team/:teamType" element={<OurTeam />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/principal-desk" element={<PrincipalDesk />} />
          <Route path="/about/organogram" element={<Organogrm />} />
          <Route
            path="/about/governing-body-counsil"
            element={<GoverningBodyCouncil />}
          />
          <Route path="/about/press-releases" element={<PressReleases />} />
          <Route path="/about/media-talks" element={<MediaTalks />} />

          {/* Academic Pages Routes */}
          <Route
            path="/academics/departments/"
            element={<AcademicDepartments />}
          />
          {/* <Route
            path="/academics/ug-programs"
            element={<Navigate to="/academics/ug-programs/existing" replace />}
          /> */}
          <Route
            path="/academics/ug-programs/:programType"
            element={<UGPrograms />}
          />
          <Route
            path="/academics/pg-programs"
            element={<Navigate to="/academics/pg-programs/existing" replace />}
          />
          <Route
            path="/academics/pg-programs/:programType"
            element={<PGPrograms />}
          />

          {/* FACILITIES Pages */}

          <Route path="/facilities/library/" element={<Library />} />

          {/* Placements Pages */}
          <Route
            path="/placements/training-and-placement-cell"
            element={<TrainingAndPlacementsCell />}
          />
          <Route path="/placements/records" element={<PlacementRecords />} />
          <Route
            path="/placements/key-collaborators-recruiters"
            element={<KeyCollaboratorsRecruiters />}
          />

          {/* Campus Life pages */}
          <Route
            path="/campus-life/value-added-courses"
            element={<ValueAddedCourses />}
          />
          <Route path="/campus-life/seed" element={<SEED />} />
          <Route path="/campus-life/sports" element={<Sports />} />
          <Route path="/campus-life/sports" element={<Sports />} />
          <Route path="/campus-life/sports" element={<Sports />} />

          {/* 404 error */}
          <Route path="*" element={<NotFound />} />

          <Route path="/gallery" element={<MainGallery />} />
          <Route path="/gallery/:eventId" element={<MainGallery />} />

          <Route path="/upcomming-events" element={<UpcomingEvents/>}/>
          <Route path="/circulars" element={<Circular/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
