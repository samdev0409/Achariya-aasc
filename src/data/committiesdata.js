import sampledoc from "@/assets/documents/NIRF/Achariya-Arts-and-Science-College20250108.pdf";

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
      name: "Dr. Janarthanan",
      designation: "Vice Principal",
      email: "janajien@gmail.com",
    },
    {
      id: 2,
      name: "Dr. Askar Ali. M",
      designation: "HOD/Language",
      email: "maskarali.aasc@achariya.org",
    },
    {
      id: 3,
      name: "Mrs Shanmugapriya.G",
      designation: "Assistant Professor",
      email: "shanupriya87@gmail.com",
    },
    {
      id: 4,
      name: "Mr. Murugadass",
      designation: "HOD/Computer Science",
      email: "dossmuruga690@gmail.com",
    },
    {
      id: 5,
      name: "Dr. Arulkumar.A",
      designation: "HOD/Biotechnology",
      email: "aruul3@gmail.com",
    },
    {
      id: 6,
      name: "Mr. Netra Prakash.B",
      designation: "HOD/BBA",
      email: "netraboy@gmail.com",
    },
    {
      id: 7,
      name: "Dr. Sadish Kadhane. D",
      designation: "HOD/Commerce",
      email: "sadish.sam@gmail.com",
    },
    {
      id: 8,
      name: "Mrs. Mangaiyarkarasi.S",
      designation: "HOD/Visual Communication",
      email: "indhuchinn@gmail.com",
    },
  ],
  circulars: [{
    title: "Academic Council Committee - 20 Nov 2025",
    file: sampledoc
  }],
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
      text: "To advise on academic planning, scheduling, and overall progression to maintain the institution’s academic excellence.",
    },
  ],
};

// ⭐ Governing Body Council
export const governingBodyCouncil = {
  members: [
    {
      id: 1,
      name: "Dr. Vimal Anand .S",
      designation: "Principal",
      email: "aaschead@achariya.org",
    },
    {
      id: 2,
      name: "Dr. Janarthanan .T",
      designation: "Vice Principal",
      email: "janajien@gmail.com",
    },
    {
      id: 3,
      name: "Mr. Netra Prakash.B",
      designation: "HOD/BBA",
      email: "netraboy@gmail.com",
    },
    {
      id: 4,
      name: "Mrs. Yasothapriya. M",
      designation: "Assistant Professor",
      email: "yasothapriya2010@gmail.com",
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
      name: "Dr. Janarthanan",
      designation: "Vice Principal",
      email: "janajien@gmail.com",
    },
    {
      id: 2,
      name: "Dr. Elangovan. A",
      designation: "Assistant Professor",
      email: "elangovana.aasc@achariya.org",
    },
    {
      id: 3,
      name: "Mrs. Kalaiselvi.P",
      designation: "Assistant Professor",
      email: "pkalaiselvimphil@gmail.com",
    },
    {
      id: 4,
      name: "Dr. Suresh Rajan. S. G",
      designation: "Assistant Professor",
      email: "sureshrajan1971@gmail.com",
    },
    {
      id: 5,
      name: "Ms. Ushena Begam S",
      designation: "Assistant Professor",
      email: "ushenabegam.aasc@achariya.org",
    },
    {
      id: 6,
      name: "Dr. Rajaraman. A",
      designation: "Assistant Professor",
      email: "rajaraman.aasc@achariya.org",
    },
    {
      id: 7,
      name: "Mrs. Josephine Dayana.F",
      designation: "Assistant Professor",
      email: "jas6daya@gmail.com",
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
      name: "Dr. Senthil Koumar.S",
      designation: "Librarian",
      email: "library.aasc@achariya.org",
    },
    {
      id: 2,
      name: "Mr. Thambiraj Biscot L",
      designation: "Assistant Librarian",
      email: "thambiraj157@gmail.com",
    },
    {
      id: 3,
      name: "Dr.Sakthivelu.S",
      designation: "Assistant Professor",
      email: "sakthivel.aasc@achariya.org",
    },
    {
      id: 4,
      name: "Dr. Selva Kumar",
      designation: "Assistant Professor",
      email: "selvvaa@gmail.com",
    },
    {
      id: 5,
      name: "M Karpagavalli C",
      designation: "Assistant Professor",
      email: "karpagavalli.aasc@achariya.org",
    },
    {
      id: 6,
      name: "Ms. Delphin Mary. A",
      designation: "Assistant Professor",
      email: "delphidelphina322@gmail.com",
    },
    {
      id: 7,
      name: "Mr. Dinesh Saravanan",
      designation: "Assistant Professor",
      email: "dineshsaravanan.aasc@achariya.org",
    },
    {
      id: 8,
      name: "Mr. Kesavan .A",
      designation: "Assistant Professor",
      email: "kesaviji16@gmail.com",
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
      name: "Dr. Rajaprabu.D",
      designation: "Assistant Professor",
      email: "rajapraburaj@gmail.com",
    },
    {
      id: 2,
      name: "Dr. Rishi Iniyan P",
      designation: "Assistant Professor",
      email: "rishiiniyanp.aasc@achariya.org",
    },
    {
      id: 3,
      name: "Mr. Panjatcharam. V",
      designation: "Assistant Professor",
      email: "vpanjatcharam.aasc@achariya.org",
    },
    {
      id: 4,
      name: "Mrs. Vinodhini.J",
      designation: "Assistant Professor",
      email: "vinoedwin@gmail.com",
    },
    {
      id: 5,
      name: "Mr. Prathap K",
      designation: "Assistant Professor",
      email: "prathaap145@gmail.com",
    },
    {
      id: 6,
      name: "Dr. Elavarasan K",
      designation: "Assistant Professor",
      email: "k.elavarasank@yahoomail.com",
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
      designation: "Assistant Professor",
      email: "revathy.aasc@achariya.org",
    },
    {
      id: 2,
      name: "Mr. Vinu A",
      designation: "Assistant Professor",
      email: "vinu.aasc@achariya.org",
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
      name: "Mr. Anitharaj N",
      designation: "Department of Physical Education",
      email: "anith2008.sports@gmail.com",
    },
    {
      id: 2,
      name: "Mrs. Rajalakshmi K",
      designation: "Department of Physical Education",
      email: "rajalakshmi.aasc@achariya.org",
    },
    {
      id: 3,
      name: "Dr. Sadish Kadhane D",
      designation: "HOD/Commerce",
      email: "sadish.sam@gmail.com",
    },
    {
      id: 4,
      name: "Dr. A. Arulkumar",
      designation: "HOD/Biotechnology",
      email: "sureshrajan1971@gmail.com",
    },
    {
      id: 5,
      name: "Mrs. Umarani J",
      designation: "Assistant Professor",
      email: "uma.sandan@gmail.com",
    },
    {
      id: 6,
      name: "Mrs. Kokulakarthika K",
      designation: "Assistant Professor",
      email: "kkogulakarthiga@gmail.com",
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
      name: "Mr. Karthik S",
      designation: "Assistant Professor",
      email: "kathiks.aasc@achariya.org",
    },
    {
      id: 2,
      name: "Mrs. Ilakkiya S",
      designation: "Assistant Professor",
      email: "ilakiya.achariya@gmail.com",
    },
    {
      id: 3,
      name: "Dr. Nithiya Parameswari V",
      designation: "Assistant Professor",
      email: "nithiprakash289@gmail.com",
    },
    {
      id: 4,
      name: "Ms. Nishanthi M",
      designation: "Assistant Professor",
      email: "nishanthiofficial23@gmail",
    },
    {
      id: 5,
      name: "Mrs. Radhapriya A",
      designation: "Assistant Professor",
      email: "priyadoss91@gmail.com",
    },
    {
      id: 6,
      name: "Mrs. Razia Sultana A",
      designation: "Assistant Professor",
      email: "arazia13@gmail.com",
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
      designation: "HOD/Visual Communication",
      email: "indhuchinn@gmail.com",
    },
    {
      id: 2,
      name: "Mr. Vinu A",
      designation: "Assistant Professor",
      email: "vinu.aasc@achariya.org",
    },
    {
      id: 3,
      name: "Dr. Ezhilan K",
      designation: "Assistant Professor",
      email: "drkezhilan2017@gmail.com",
    },
    {
      id: 4,
      name: "Mr. Mathivanan P",
      designation: "Assistant Professor",
      email: "mathipdy20@gmail.com",
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
      designation: "Assistant Professor",
      email: "sherif.aasc@achariya.org",
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
      designation: "HOD/BBA",
      email: "netraboy@gmail.com",
    },
    {
      id: 2,
      name: "Dr. Askar Ali  M",
      designation: "HOD/Language",
      email: "maskarali.aasc@achariya.org",
    },
    {
      id: 3,
      name: "Mr. Sherif Baig I",
      designation: "Assistant Professor",
      email: "sherif.aasc@achariya.org",
    },
    {
      id: 4,
      name: "Mr. Thirukkumarann",
      designation: "Lab Instructor",
      email: "itsupport.aasc@achariya.org",
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
      designation: "Assistant Professor",
      email: "prof.rameshkkl@gmail.com",
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
      name: "Dr. Silambarasan  K",
      designation: "Assistant Professor",
      email: "simbu1541987@gmail.com",
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
// ========  SLUG TO DATA MAPPER (KEY FIX!)  ===========
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
