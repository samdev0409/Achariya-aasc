import sampledoc from "@/assets/documents/NIRF/Achariya-Arts-and-Science-College20250108.pdf";
import placeholderimg from "@/assets/images/17122.webp";

// Import images from ourTeamData
import principalDrUshadevi from "@/assets/images/our-team/faculty/Principal/Dr. Ushadevi R.jpeg";
import vicePrincipalNetraPrakash from "@/assets/images/our-team/faculty/Vice Principal/Mr. Netra Prakash.B.jpeg";
import languageAskarAli from "@/assets/images/our-team/faculty/Language Dept/Dr.Askar Ali. M.jpeg";
import languageRajaraman from "@/assets/images/our-team/faculty/Language Dept/Dr. Rajaraman. A.jpg";
import languageSilambarasan from "@/assets/images/our-team/faculty/Language Dept/Dr. Silambarasan. K.jpeg";
import mathsShanmugapriya from "@/assets/images/our-team/faculty/Maths Dept/Mrs .Shanmugapriya.G.jpeg";
import bcaSherifBaig from "@/assets/images/our-team/faculty/BCA Dept/Mr. Sherif Baig.I.jpeg";
import bcaVinodhini from "@/assets/images/our-team/faculty/BCA Dept/Mrs. Vinodhini.J.jpeg";
import bcaIlakiya from "@/assets/images/our-team/faculty/BCA Dept/Mrs. Ilakiya.jpg";
import csKalaiselvi from "@/assets/images/our-team/faculty/Computer Science Dept/Mrs.P.Kalaiselvi.jpg";
import csRevathy from "@/assets/images/our-team/faculty/Computer Science Dept/Mrs.R.Revathy.jpg";
import csNishanthi from "@/assets/images/our-team/faculty/Computer Science Dept/Ms.M.Nishanthi.jpg";
import itKarpagavalli from "@/assets/images/our-team/faculty/Information Technology Dept/Mrs. Karpagavalli C.jpeg";
import bioArulkumar from "@/assets/images/our-team/faculty/BioTechnology Dept/Dr. Arulkumar.A.jpeg";
import bioPanjatcharam from "@/assets/images/our-team/faculty/BioTechnology Dept/Mr. Panjatcharam.V.jpeg";
import bbaSureshRajan from "@/assets/images/our-team/faculty/Management Studies BBA Dept/Dr. Suresh Rajan. S. G.jpeg";
import bbaPrathap from "@/assets/images/our-team/faculty/Management Studies BBA Dept/Mr. Prathap K.jpeg";
import commerceSadishKadhane from "@/assets/images/our-team/faculty/Commerce Dept/Dr. Sadish Kadhane. D.jpeg";
import commerceRajaprabu from "@/assets/images/our-team/faculty/Commerce Dept/Dr. Rajaprabu.D.jpg";
import commerceKesavan from "@/assets/images/our-team/faculty/Commerce Dept/Mr. Kesavan A.jpeg";
import commerceSakthivelu from "@/assets/images/our-team/faculty/Commerce Dept/Dr.Sakthivelu.S.jpg";
import commerceUshenaBegam from "@/assets/images/our-team/faculty/Commerce Dept/Ms.Ushena Begam S.jpeg";
import commerceEzhilan from "@/assets/images/our-team/faculty/Commerce Dept/Dr. Ezhilan K.jpeg";
import commerceElavarasan from "@/assets/images/our-team/faculty/Commerce Dept/Dr. Elavarasan K.jpg";
import commerceMathivanan from "@/assets/images/our-team/faculty/Commerce Dept/Mr. Mathivanan P.jpeg";
import csRameshKumar from "@/assets/images/our-team/faculty/Coporate Secretaryship Dept/Dr. Ramesh Kumar C.png";
import csRaziaSultana from "@/assets/images/our-team/faculty/Coporate Secretaryship Dept/Mrs. Razia Sultana A.jpeg";
import csKokulaKarthiga from "@/assets/images/our-team/faculty/Coporate Secretaryship Dept/Mrs. Kokula Karthiga K.jpeg";
import vcMangaiyarkarasi from "@/assets/images/our-team/faculty/Visual Communication Dept/Mrs. Mangaiyarkarasi S.jpeg";
import vcDineshSaravanan from "@/assets/images/our-team/faculty/Visual Communication Dept/Mr. Dinesh Saravanan M.jpeg";
import vcVinu from "@/assets/images/our-team/faculty/Visual Communication Dept/Mr. Vinu A.jpg";
import librarySenthilKoumar from "@/assets/images/our-team/faculty/Library/Dr. S. SENTHILKOUMAR.png";
import libraryThambiraj from "@/assets/images/our-team/faculty/Library/Mr. Thambiraj Biscot L.png";
import peAnitharaj from "@/assets/images/our-team/faculty/Physical Education Dept/Mr.Anitharaj.jpeg";
import peRajalakshmi from "@/assets/images/our-team/faculty/Physical Education Dept/Mrs. Rajalakshmi K.jpeg";
import labThirukumaran from "@/assets/images/our-team/faculty/Laboratory Assistants/Mr.Thirukumaran.jpeg";
import englishUmarani from "@/assets/images/our-team/faculty/English Dept/Mrs. Umarani. J.jpg";
import englishNithiyaParameswari from "@/assets/images/our-team/faculty/English Dept/Dr. Nithiya Parameswari. V.jpg";
import englishRadhapriya from "@/assets/images/our-team/faculty/English Dept/Mrs. Radhapriya. A.jpg";

// =========================
// SIDEBAR MENU STRUCTURE
// =========================
export const committiesdatasidebarMenu = [
  {
    id: 1,
    label: "Committees",
    url: "/committees",
    children: [
      {
        id: 2,
        label: "Committee",
        url: "/committees/committee",
        children: [
          {
            id: 3,
            label: "Academic Council Committee",
            url: "/committees/academic-council",
            children: [],
          },
          {
            id: 4,
            label: "Governing Body Council",
            url: "/committees/governing-body",
            children: [],
          },
          {
            id: 5,
            label: "Admission Committee",
            url: "/committees/admission",
            children: [],
          },
          {
            id: 6,
            label: "Library Body Council",
            url: "/committees/library",
            children: [],
          },
          {
            id: 7,
            label: "Maintenance Committee",
            url: "/committees/maintenance",
            children: [],
          },
          {
            id: 8,
            label: "Hostel Committee",
            url: "/committees/hostel",
            children: [],
          },
          {
            id: 9,
            label: "Discipline Committee",
            url: "/committees/discipline",
            children: [],
          },
          {
            id: 10,
            label: "Cultural Committee",
            url: "/committees/cultural",
            children: [],
          },
          {
            id: 11,
            label: "Social Media Committee",
            url: "/committees/social-media",
            children: [],
          },
          {
            id: 12,
            label: "Transport Committee",
            url: "/committees/transport",
            children: [],
          },
          {
            id: 13,
            label: "Website Committee",
            url: "/committees/website",
            children: [],
          },
          {
            id: 14,
            label: "Student Information Committee",
            url: "/committees/student-information",
            children: [],
          },
          {
            id: 15,
            label: "Finance Committee",
            url: "/committees/finance",
            children: [],
          },
          {
            id: 16,
            label: "NAAC Committee",
            url: "/committees/naac",
            children: [],
          },
          {
            id: 17,
            label: "Anti Ragging Committee",
            url: "/committees/anti-ragging",
            children: [],
          },
          {
            id: 18,
            label: "Staff & Students Welfare Counseling Committee",
            url: "/committees/staff-student-welfare",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 19,
    label: "Cells",
    url: "/cells",
    children: [
      { id: 20, label: "Exam Cell", url: "/cells/exam", children: [] },
      {
        id: 21,
        label: "Training & Placement Cell",
        url: "/cells/training-placement",
        children: [],
      },
      { id: 22, label: "IOAC", url: "/cells/ioac", children: [] },
      { id: 23, label: "NSS", url: "/cells/nss", children: [] },
    ],
  },
  {
    id: 24,
    label: "Clubs",
    url: "/clubs",
    children: [
      { id: 25, label: "RRC", url: "/clubs/rrc", children: [] },
      { id: 26, label: "JCI", url: "/clubs/jci", children: [] },
      {
        id: 27,
        label: "Achariya Code Club",
        url: "/clubs/code-club",
        children: [],
      },
    ],
  },
];

// =====================================================
// ===============   COMMITTEE DATA   ===================
// =====================================================

// ⭐ Academic Council Committee
export const academicCouncilCommittee = {
  members: [
    {
      id: 1,
      name: "Mr. Netra Prakash B",
      designation: "Vice Principal",
      email: "vp.aasc@achariya.org",
      image: vicePrincipalNetraPrakash,
    },
    {
      id: 2,
      name: "Dr. Askar Ali M",
      designation: "Assistant Professor/HOD - Language",
      email: "maskarali.aasc@achariya.org",
      image: languageAskarAli,
    },
    {
      id: 3,
      name: "Mrs. Shanmugapriya G",
      designation: "Assistant Professor - Mathematics",
      email: "shanupriya87@gmail.com",
      image: mathsShanmugapriya,
    },
    {
      id: 4,
      name: "Mrs. Kalaiselvi P",
      designation: "Assistant Professor/HOD - Computer Science",
      email: "pkalaiselvimphil@gmail.com",
      image: csKalaiselvi,
    },
    {
      id: 5,
      name: "Dr. Arulkumar A",
      designation: "Assistant Professor/HOD - Biotechnology",
      email: "head.bt.aasc@achariya.org",
      image: bioArulkumar,
    },
    {
      id: 6,
      name: "Mr. Netra Prakash B",
      designation: "Assistant Professor/HOD - Management Studies (BBA)",
      email: "b.netraprakash.aasc@achariya.org",
      image: vicePrincipalNetraPrakash,
    },
    {
      id: 7,
      name: "Dr. Sadish Kadhane D",
      designation: "Assistant Professor/HOD - Commerce",
      email: "sadish.sam@gmail.com",
      image: commerceSadishKadhane,
    },
    {
      id: 8,
      name: "Mrs. Mangaiyarkarasi S",
      designation: "Assistant Professor/HOD - Visual Communication",
      email: "indhuchinn@gmail.com",
      image: vcMangaiyarkarasi,
    },
  ],
  circulars: [
    {
      title: "Academic Council Committee - 20 Nov 2025",
      file: sampledoc,
    },
  ],
  objectives: [
    {
      id: 1,
      text: "To formulate and review academic policies related to curriculum design, evaluation methods, and academic standards of the institution.",
    },
    {
      id: 2,
      text: "To approve new programs of study, revisions to existing programs, and recommend the introduction of innovative academic practices.",
    },
    {
      id: 3,
      text: "To ensure the effective implementation of the choice-based credit system (CBCS) and outcome-based education (OBE) framework.",
    },
    {
      id: 4,
      text: "To monitor academic quality through continuous assessment, feedback mechanisms, and periodic reviews.",
    },
    {
      id: 5,
      text: "To promote interdisciplinary learning, research culture, and academic collaborations across departments.",
    },
    {
      id: 6,
      text: "To guide the adoption of modern teaching methodologies, digital learning systems, and academic technology enhancements.",
    },
    {
      id: 7,
      text: "To review and recommend improvements in student performance evaluation, examination reforms, and assessment policies.",
    },
    {
      id: 8,
      text: "To ensure compliance with university guidelines, regulatory bodies, and accreditation requirements related to academic affairs.",
    },
    {
      id: 9,
      text: "To strengthen faculty development through training programs, workshops, and pedagogical upskilling initiatives.",
    },
    {
      id: 10,
      text: "To advise on academic planning, scheduling, and overall progression to maintain the institution's academic excellence.",
    },
  ],
};

// ⭐ Governing Body Council
export const governingBodyCouncil = {
  members: [
    {
      id: 1,
      name: "Dr. Ushadevi R",
      designation: "Principal",
      email: "aaschead@achariya.org",
      image: principalDrUshadevi,
    },
    {
      id: 2,
      name: "Mr. Netra Prakash B",
      designation: "Vice Principal",
      email: "vp.aasc@achariya.org",
      image: vicePrincipalNetraPrakash,
    },
    {
      id: 3,
      name: "Mr. Netra Prakash B",
      designation: "Assistant Professor/HOD - Management Studies (BBA)",
      email: "b.netraprakash.aasc@achariya.org",
      image: vicePrincipalNetraPrakash,
    },
    {
      id: 4,
      name: "Dr. Suresh Rajan S. G",
      designation: "Assistant Professor - Management Studies (BBA)",
      email: "sureshrajan1971@gmail.com",
      image: bbaSureshRajan,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Admission Committee
export const admissionCommittee = {
  members: [
    {
      id: 1,
      name: "Mr. Netra Prakash B",
      designation: "Vice Principal",
      email: "vp.aasc@achariya.org",
      image: vicePrincipalNetraPrakash,
    },
    {
      id: 2,
      name: "Mrs. Kalaiselvi P",
      designation: "Assistant Professor/HOD - Computer Science & IT",
      email: "pkalaiselvimphil@gmail.com",
      image: csKalaiselvi,
    },
    {
      id: 3,
      name: "Dr. Suresh Rajan S. G",
      designation: "Assistant Professor - Management Studies (BBA)",
      email: "sureshrajan1971@gmail.com",
      image: bbaSureshRajan,
    },
    {
      id: 4,
      name: "Ms. Ushena Begam S",
      designation: "Assistant Professor - Commerce",
      email: "ushenabegam.aasc@achariya.org",
      image: commerceUshenaBegam,
    },
    {
      id: 5,
      name: "Dr. Rajaraman A",
      designation: "Assistant Professor - Language",
      email: "rajaraman.aasc@achariya.org",
      image: languageRajaraman,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Library Body Council
export const libraryBodyCouncil = {
  members: [
    {
      id: 1,
      name: "Dr. Senthil Koumar S",
      designation: "Librarian",
      email: "library.aasc@achariya.org",
      image: librarySenthilKoumar,
    },
    {
      id: 2,
      name: "Mr. Thambiraj Biscot L",
      designation: "Assistant Librarian",
      email: "thambirajworkplace.org.in@gmail.com",
      image: libraryThambiraj,
    },
    {
      id: 3,
      name: "Dr. Sakthivelu S",
      designation: "Assistant Professor - Commerce",
      email: "sakthivel.aasc@achariya.org",
      image: commerceSakthivelu,
    },
    {
      id: 4,
      name: "Mrs. Karpagavalli C",
      designation: "Assistant Professor - Information Technology",
      email: "karpagavalli.aasc@achariya.org",
      image: itKarpagavalli,
    },
    {
      id: 5,
      name: "Mr. Dinesh Saravanan M",
      designation: "Assistant Professor - Visual Communication",
      email: "dineshsaravanan.aasc@achariya.org",
      image: vcDineshSaravanan,
    },
    {
      id: 6,
      name: "Mr. Kesavan A",
      designation: "Assistant Professor - Commerce",
      email: "kesaviji16@gmail.com",
      image: commerceKesavan,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Maintenance Committee
export const maintenanceCommittee = {
  members: [
    {
      id: 1,
      name: "Dr. Rajaprabu D",
      designation: "Assistant Professor - Commerce",
      email: "rajapraburaj@gmail.com",
      image: commerceRajaprabu,
    },
    {
      id: 2,
      name: "Mr. Panjatcharam V",
      designation: "Assistant Professor - Biotechnology",
      email: "vpanjatcharam.aasc@achariya.org",
      image: bioPanjatcharam,
    },
    {
      id: 3,
      name: "Mrs. Vinodhini J",
      designation: "Assistant Professor - Computer Application (BCA)",
      email: "vinoedwin@gmail.com",
      image: bcaVinodhini,
    },
    {
      id: 4,
      name: "Mr. Prathap K",
      designation: "Assistant Professor - Management Studies (BBA)",
      email: "prathaap145@gmail.com",
      image: bbaPrathap,
    },
    {
      id: 5,
      name: "Dr. Elavarasan K",
      designation: "Assistant Professor - Commerce",
      email: "k.elavarasank@yahoomail.com",
      image: commerceElavarasan,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Hostel Committee
export const hostelCommittee = {
  members: [
    {
      id: 1,
      name: "Mrs. Revathy R",
      designation: "Assistant Professor - Computer Science",
      email: "revathy.aasc@achariya.org",
      image: csRevathy,
    },
    {
      id: 2,
      name: "Mr. Vinu A",
      designation: "Assistant Professor - Visual Communication",
      email: "vinu.aasc@achariya.org",
      image: vcVinu,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Discipline Committee
export const disciplineCommittee = {
  members: [
    {
      id: 1,
      name: "Mr. Anitharaj",
      designation: "Director of Physical Education",
      email: "anith2008.sports@gmail.com",
      image: peAnitharaj,
    },
    {
      id: 2,
      name: "Mrs. Rajalakshmi K",
      designation: "Assistant Directress of Physical Education",
      email: "vimal.suguna.raji@gmail.com",
      image: peRajalakshmi,
    },
    {
      id: 3,
      name: "Dr. Sadish Kadhane D",
      designation: "Assistant Professor/HOD - Commerce",
      email: "sadish.sam@gmail.com",
      image: commerceSadishKadhane,
    },
    {
      id: 4,
      name: "Dr. Arulkumar A",
      designation: "Assistant Professor/HOD - Biotechnology",
      email: "head.bt.aasc@achariya.org",
      image: bioArulkumar,
    },
    {
      id: 5,
      name: "Mrs. Umarani J",
      designation: "Assistant Professor - English",
      email: "umarani.aasc@achariya.org",
      image: englishUmarani,
    },
    {
      id: 6,
      name: "Mrs. Kokula Karthiga K",
      designation: "Assistant Professor - Corporate Secretaryship",
      email: "kkogulakarthiga@gmail.com",
      image: csKokulaKarthiga,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Cultural Committee
export const culturalCommittee = {
  members: [
    {
      id: 1,
      name: "Mrs. Ilakiya",
      designation: "Assistant Professor - Computer Application (BCA)",
      email: "ilakiya.achariya@gmail.com",
      image: bcaIlakiya,
    },
    {
      id: 2,
      name: "Dr. Nithiya Parameswari V",
      designation: "Assistant Professor - English",
      email: "nithiprakash289@gmail.com",
      image: englishNithiyaParameswari,
    },
    {
      id: 3,
      name: "Ms. Nishanthi M",
      designation: "Assistant Professor - Computer Science",
      email: "nishanthiofficial23@gmail",
      image: csNishanthi,
    },
    {
      id: 4,
      name: "Mrs. Radhapriya A",
      designation: "Assistant Professor/HOD - English",
      email: "radhapriya.aasc@achariya.org",
      image: englishRadhapriya,
    },
    {
      id: 5,
      name: "Mrs. Razia Sultana A",
      designation: "Assistant Professor - Corporate Secretaryship",
      email: "arazia13@gmail.com",
      image: csRaziaSultana,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Social Media Committee
export const socialMediaCommittee = {
  members: [
    {
      id: 1,
      name: "Mrs. Mangaiyarkarasi S",
      designation: "Assistant Professor/HOD - Visual Communication",
      email: "indhuchinn@gmail.com",
      image: vcMangaiyarkarasi,
    },
    {
      id: 2,
      name: "Mr. Vinu A",
      designation: "Assistant Professor - Visual Communication",
      email: "vinu.aasc@achariya.org",
      image: vcVinu,
    },
    {
      id: 3,
      name: "Dr. Ezhilan K",
      designation: "Assistant Professor - Commerce",
      email: "drkezhilan2017@gmail.com",
      image: commerceEzhilan,
    },
    {
      id: 4,
      name: "Mr. Mathivanan P",
      designation: "Assistant Professor - Commerce",
      email: "mathipdy20@gmail.com",
      image: commerceMathivanan,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Website Committee
export const websiteCommittee = {
  members: [
    {
      id: 1,
      name: "Mr. Sherif Baig I",
      designation: "Assistant Professor/HOD - Computer Application (BCA)",
      email: "sherif.aasc@achariya.org",
      image: bcaSherifBaig,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Transport Committee
export const transportCommittee = {
  members: [],
  circulars: [],
  objectives: [],
};

// ⭐ Student Information Committee
export const studentInformationCommittee = {
  members: [],
  circulars: [],
  objectives: [],
};

// ⭐ Finance Committee
export const financeCommittee = { members: [], circulars: [], objectives: [] };

// ⭐ NAAC Committee
export const naacCommittee = { members: [], circulars: [], objectives: [] };

// ⭐ Anti-Ragging Committee
export const antiRaggingCommittee = {
  members: [],
  circulars: [],
  objectives: [],
};

// ⭐ Staff & Students Welfare Counseling Committee
export const staffStudentsWelfareCommittee = {
  members: [],
  circulars: [],
  objectives: [],
};

// =====================================================
// ===============      CELLS DATA    ===================
// =====================================================

// ⭐ Exam Cell
export const examCell = {
  members: [
    {
      id: 1,
      name: "Mr. Netra Prakash B",
      designation: "Vice Principal & HOD - Management Studies (BBA)",
      email: "vp.aasc@achariya.org",
      image: vicePrincipalNetraPrakash,
    },
    {
      id: 2,
      name: "Dr. Askar Ali M",
      designation: "Assistant Professor/HOD - Language",
      email: "maskarali.aasc@achariya.org",
      image: languageAskarAli,
    },
    {
      id: 3,
      name: "Mr. Sherif Baig I",
      designation: "Assistant Professor/HOD - Computer Application (BCA)",
      email: "sherif.aasc@achariya.org",
      image: bcaSherifBaig,
    },
    {
      id: 4,
      name: "Mr. Thirukumaran",
      designation: "Lab Assistant",
      email: "bharanivijay16@gmail.com",
      image: labThirukumaran,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ Training & Placement Cell
export const trainingPlacementCell = {
  members: [
    {
      id: 1,
      name: "Dr. Ramesh Kumar C",
      designation: "Assistant Professor & Training and Placement Cell Officer - Corporate Secretaryship",
      email: "prof.rameshkkl@gmail.com",
      image: csRameshKumar,
    },
  ],
  circulars: [],
  objectives: [],
};

// ⭐ IOAC
export const ioacCell = {
  members: [],
  circulars: [],
  objectives: [],
};

// ⭐ NSS
export const nssCell = {
  members: [
    {
      id: 1,
      name: "Dr. Silambarasan K",
      designation: "Assistant Professor - Language",
      email: "simbu154987@gmail.com",
      image: languageSilambarasan,
    },
  ],
  circulars: [],
  objectives: [],
};

// =====================================================
// ===============      CLUBS DATA    ===================
// =====================================================

// ⭐ RRC Club
export const rrcClub = { members: [], circulars: [], objectives: [] };

// ⭐ JCI Club
export const jciClub = { members: [], circulars: [], objectives: [] };

// ⭐ Achariya Code Club
export const achariyaCodeClub = { members: [], circulars: [], objectives: [] };

// =====================================================
// ========  SLUG TO DATA MAPPER  ===========
// =====================================================

export const committeeDataMapper = {
  // COMMITTEES
  "academic-council": academicCouncilCommittee,
  "governing-body": governingBodyCouncil,
  admission: admissionCommittee,
  library: libraryBodyCouncil,
  maintenance: maintenanceCommittee,
  hostel: hostelCommittee,
  discipline: disciplineCommittee,
  cultural: culturalCommittee,
  "social-media": socialMediaCommittee,
  transport: transportCommittee,
  website: websiteCommittee,
  "student-information": studentInformationCommittee,
  finance: financeCommittee,
  naac: naacCommittee,
  "anti-ragging": antiRaggingCommittee,
  "staff-student-welfare": staffStudentsWelfareCommittee,

  // CELLS
  exam: examCell,
  "training-placement": trainingPlacementCell,
  ioac: ioacCell,
  nss: nssCell,

  // CLUBS
  rrc: rrcClub,
  jci: jciClub,
  "code-club": achariyaCodeClub,
};