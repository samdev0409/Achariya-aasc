import placeholderImg from "@/assets/images/17122.webp";
import chairman from "@/assets/images/cheif-mentor/Dr.-J.arawindhan.webp";
import { principalData } from "@/data/about/principaldata";
import { chiefMentorData } from "@/data/about/chiefmentordata";

export const governingBodyMembersData = [
  {
    id: 1,
    image: chiefMentorData?.content?.ourleadsimage,
    name: chiefMentorData?.content?.signOff?.name || "Dr. J. Arawindhan",
    department:
      "Managing Trustee, Achariya Group of Educational Institutions, Puducherry – 605110.",
    designation: "Chairman",
    phone: "0000000000",
    email: "info@achariya.in",
  },
  {
    id: 2,
    image: placeholderImg,
    name: "Smt. A. Vinothini",
    department:
      "Trustee, Achariya Group of Educational Institutions, Puducherry – 605110.",
    designation: "Member",
    phone: "0000000000",
    email: "info@achariya.in",
  },
  {
    id: 3,
    image: placeholderImg,
    name: "Dr. H. Kalpana",
    department: "Professor, Department of English, Pondicherry University.",
    designation: "Member / University Nominee",
    phone: "0000000000",
    email: "kalpana@pondiuni.ac.in",
  },
  {
    id: 4,
    image: placeholderImg,
    name: "Dr. Jaswinder Singh",
    department:
      "Principal, SCTP Khalsa College, University of Delhi, Delhi – 110007.",
    designation: "Member / University Nominee",
    phone: "0000000000",
    email: "principal@khalsacollege.edu",
  },
  {
    id: 5,

    name: principalData?.content?.signOff?.name || "Dr. R. Ushadevi",
    email: principalData?.content?.email || "aaschead@achariya.org",
    department:
      "Principal, Achariya Arts and Science College, Villianur, Puducherry – 605110.",
    designation: "Member / Secretary",
    image: principalData?.content?.image,
  },
  {
    id: 6,
    image: placeholderImg,
    name: "Dr. T. Janarthanan",
    department:
      "Vice Principal, Department of English, Achariya Arts and Science College, Villianur, Puducherry – 605110.",
    designation: "Teacher Representative / Member",
    phone: "0000000000",
    email: "janarthanan@achariya.in",
  },
  {
    id: 7,
    image: placeholderImg,
    name: "Mr. B. Netra Prakash",
    department:
      "Head, Department of Commerce & Management, Achariya Arts and Science College, Villianur, Puducherry – 605110.",
    designation: "Teacher Representative / Member",
    phone: "0000000000",
    email: "netraprakash@achariya.in",
  },
];
