import AASClogo from "@/assets/images/common/AASC-Logo.png";
import campus from "@/assets/images/aasc_building.webp";
import {
  Building,
  Wallet,
  MapPin,
  ScanSearch,
  School,
  Layers,
} from "lucide-react";

export const profileOfCollegeData = {
  banner: {
    title: "Profile Of The College",
    image: campus,
  },
  header: {
    logo: AASClogo,
    title: "Achariya Arts and Science College",
    description:
      "Achariya Arts and Science College, Puducherry, is one of the premier institutions under the Achariya Group of Educational Institutions. Established with a vision to provide holistic education and empower students with academic excellence, values, and skills, Achariya offers a wide range of undergraduate and postgraduate programs in arts, science, and commerce. The college fosters innovation, discipline, and leadership among its students, preparing them to excel in their chosen fields.",
  },
  details: [
    {
      title: "Type of College",
      icon: Building,
      items: [{ label: "Type", value: "Co-education" }],
    },
    {
      title: "Financial Category",
      icon: Wallet,
      items: [{ label: "Category", value: "Self-Financing" }],
    },
    {
      title: "Area of Campus",
      icon: ScanSearch,
      items: [{ label: "Area", value: "52274.16 sq. mts." }],
    },
    {
      title: "Location Information",
      icon: MapPin,
      items: [
        { label: "Place", value: "ACHARIYAPURAM, VILLIANUR, PUDUCHERRY" },
        { label: "State", value: "Puducherry" },
        { label: "Location", value: "Urban" },
      ],
    },
    {
      title: "Academic Affiliation",
      icon: School,
      items: [
        { label: "Affiliating University", value: "Pondicherry University" },
        {
          label: "Status of the College",
          value: "Affiliated to Pondicherry University",
        },
        { label: "Medium of Instruction", value: "English" },
      ],
    },
    {
      title: "Programs & Establishment",
      icon: Layers,
      items: [
        { label: "No. of Programs", value: "UG 10 | PG 1" },
        { label: "Year of Establishment", value: "2004" },
        { label: "Telephone Number", value: "0413-2660731" },
      ],
    },
  ],
};
