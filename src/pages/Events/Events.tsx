import React from "react";
import campus from "@/assets/images/aasc_building.webp";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import EventsSidebar from "./EventsSidebar";
import EventsSection from "./EventsSection";

const Events = () => {
  return (
    <>
      <div className="md:mt-0 mt-14">
        <BannerAndBreadCrumb img={campus} title="Events" />
      </div>
      <div className=" min-h-screen flex flex-col md:flex-row bg-gray-50">
        <EventsSidebar />
        <EventsSection />
      </div>
    </>
  );
};

export default Events;
