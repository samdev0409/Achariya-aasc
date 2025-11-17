import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery/:eventId?" element={<MainGallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

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
          <Route
            path="/academics/ug-programs"
            element={<Navigate to="/academics/ug-programs/existing" replace />}
          />
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

          {/* 404 error */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
