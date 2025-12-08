import history from "@/assets/images/academic-departments/history-dept.jpg";
import ourTeamData from "@/data/about/OurTeamData.js";

// Helper function to get faculty by department
const getFacultyByDepartment = (departmentName) => {
  return ourTeamData.faculty.filter(
    (faculty) => faculty.department === departmentName
  );
};

// =========================
// SIDEBAR MENU STRUCTURE
// =========================
export const departmentsSidebarMenu = [
  {
    id: "english",
    title: "English",
    url: "/academics/departments/english",
  },
  {
    id: "language",
    title: "Languages",
    url: "/academics/departments/language",
  },
  {
    id: "mathematics",
    title: "Mathematics",
    url: "/academics/departments/mathematics",
  },
  {
    id: "computer-science",
    title: "Computer Science",
    url: "/academics/departments/computer-science",
  },
  {
    id: "computer-application",
    title: "Computer Application (BCA)",
    url: "/academics/departments/computer-application",
  },
  {
    id: "information-technology",
    title: "Information Technology",
    url: "/academics/departments/information-technology",
  },
  {
    id: "bio-technology",
    title: "Bio-Technology",
    url: "/academics/departments/bio-technology",
  },
  {
    id: "commerce-and-management",
    title: "Commerce and Management",
    url: "/academics/departments/commerce-and-management",
  },
  {
    id: "corporate-secretaryship",
    title: "Corporate Secretaryship",
    url: "/academics/departments/corporate-secretaryship",
  },
  {
    id: "visual-communication",
    title: "Visual Communication",
    url: "/academics/departments/visual-communication",
  },
  {
    id: "library",
    title: "Library",
    url: "/academics/departments/library",
  },
];

// =====================================================
// ===============   DEPARTMENT DATA   =================
// =====================================================

// ⭐ English Department
export const englishDepartment = {
  name: "English",
  image: history,
  about:
    "The Department of English had its inception in the year 2009 and widened its horizon by having a larger strength of students and faculty members. It is led by a team of vibrant, aspirant, and experienced faculty members who always strive for the student community.",
  description: [
    {
      title: "About the Department",
      content:
        "The Department of English had its inception in the year 2009 and widened its horizon by having a larger strength of students and faculty members. The department grooms students in communication, critical thinking, and appreciation of literature across genres and eras. The B.A. English course blends the study of language and literature, nurturing creativity, analytical ability, and intellectual curiosity.",
    },
    {
      title: "Department Activities",
      content:
        "The department conducts various intra and intercollegiate competitions, seminars, workshops, Literary Meets, and special programs aimed at enhancing students’ communication skills and leadership abilities.",
    },
    {
      title: "Literary Meet and Special Programs",
      content:
        "The department periodically organizes Guest Lectures, Literary Forums, Seminars, Workshops, Industrial and Library Visits, providing students space to explore and exhibit their talents while preparing them for diverse career opportunities.",
    },
  ],
  faculty: getFacultyByDepartment("English"),
};

// ⭐ ⭐ NEW — LANGUAGE DEPARTMENT ⭐ ⭐
export const languageDepartment = {
  name: "Languages",
  image: history,
  about:
    "The Department of Languages fosters linguistic competence and cultural understanding by offering instruction in Tamil, Hindi, and French. It promotes strong communication skills that build the foundation for academic excellence and personal development.",
  description: [
    {
      title: "About the Department",
      content:
        "The Department of Languages plays a vital role in shaping the linguistic and cultural identity of students by offering a diverse range of language courses including Tamil, Hindi, and French. The department is committed to enhancing students’ proficiency in reading, writing, and speaking, while cultivating an appreciation for linguistic heritage and multiculturalism.",
    },
    {
      title: "Academic Vision",
      content:
        "The department aims to develop communicative competence, literary appreciation, and cultural understanding. It encourages students to engage with classical and contemporary works while enhancing their analytical and expressive abilities.",
    },
    {
      title: "Activities and Enrichment",
      content:
        "Regular workshops, guest lectures, literary events, translation activities, and cultural programs provide students with opportunities to build confidence, explore linguistic creativity, and understand the wider applications of language in education, media, translation, and public service.",
    },
  ],
  faculty: getFacultyByDepartment("Language"),
};

// ⭐ Mathematics Department
export const mathematicsDepartment = {
  name: "Mathematics",
  image: history,
  about:
    "Mathematics plays an important role in accelerating the social, economical, and technological growth of a nation...",
  description: [
    {
      title: "About the Department",
      content:
        "Mathematics plays an important role in accelerating social, economic, and technological growth. The department began in 2004 and continues to produce proficient graduates equipped with strong analytical and problem-solving skills.",
    },
    {
      title: "Leadership History",
      content:
        "Leadership transitioned through several experienced faculty heads, contributing to the department’s consistent academic achievements.",
    },
    {
      title: "Achievements and Value-Added Courses",
      content:
        "The department has produced several gold medalists and offers value-added courses such as Tally, DTP, call center training, and more to enhance employability.",
    },
  ],
  faculty: getFacultyByDepartment("Mathematics"),
};

// ⭐ Computer Science Department
export const computerScienceDepartment = {
  name: "Computer Science",
  image: history,
  about:
    "The undergraduate program in Computer Science was started in 2004...",
  description: [
    {
      title: "About the Department",
      content:
        "The Computer Science Department was founded in 2004 and is one of the largest with over 250 students. It provides strong technical education blending theory and practical training.",
    },
    {
      title: "Industry-Institute Interaction",
      content:
        "The department organizes seminars, workshops, exhibitions, industrial visits, and project activities to prepare students for the IT industry.",
    },
  ],
  faculty: getFacultyByDepartment("Computer Science"),
};

// ⭐ Computer Application (BCA)
export const computerApplicationDepartment = {
  name: "Computer Application (BCA)",
  image: history,
  about:
    "Started in 2004, the Department of Computer Application prepares students for careers in the IT sector.",
  description: [
    {
      title: "About the Department",
      content:
        "The BCA program equips students with theoretical and practical knowledge in programming, software development, and computer applications.",
    },
  ],
  faculty: getFacultyByDepartment("Computer Application (BCA)"),
};

// ⭐ Information Technology
export const informationTechnologyDepartment = {
  name: "Information Technology",
  image: history,
  about:
    "The Department of Information Technology was established in 2005...",
  description: [
    {
      title: "About the Department",
      content:
        "The IT Department focuses on networking, databases, web technologies, and software engineering, preparing graduates for careers in IT and software industries.",
    },
  ],
  faculty: getFacultyByDepartment("Information Technology"),
};

// ⭐ Biotechnology
export const bioTechnologyDepartment = {
  name: "Bio-Technology",
  image: history,
  about:
    "Biotechnology is a frontline field with applications in health, agriculture, environment, and industries.",
  description: [
    {
      title: "About the Department",
      content:
        "Established in 2005, the department offers quality education in biotechnology supported by well-equipped labs and experienced staff.",
    },
  ],
  faculty: getFacultyByDepartment("Biotechnology"),
};

// ⭐ Commerce & Management
export const commerceAndManagementDepartment = {
  name: "Commerce and Management",
  image: history,
  about:
    "The Department of Commerce is one of the pioneering departments of AASC.",
  description: [
    {
      title: "Under Graduate Courses - B.Com",
      content:
        "The B.Com program prepares students for business leadership, accounting, finance, management, and entrepreneurship.",
    },
    {
      title: "Post Graduate Courses - M.Com",
      content:
        "The M.Com program enhances students’ practical and theoretical knowledge for careers in corporate and academic sectors.",
    },
  ],
  faculty: [
    ...getFacultyByDepartment("Commerce (UG/PG)"),
    ...getFacultyByDepartment("Management Studies (BBA)"),
    ...getFacultyByDepartment("Corporate Secretaryship"),
  ],
};

// ⭐ Corporate Secretaryship
export const corporateSecretaryshipDepartment = {
  name: "Corporate Secretaryship",
  image: history,
  about:
    "The department trains students in corporate law, governance, and secretarial practice.",
  description: [
    {
      title: "About the Department",
      content:
        "Students are equipped with strong knowledge in legal procedures, company law, and governance, preparing them for corporate secretary roles.",
    },
  ],
  faculty: getFacultyByDepartment("Corporate Secretaryship"),
};

// ⭐ Visual Communication
export const visualCommunicationDepartment = {
  name: "Visual Communication",
  image: history,
  about:
    "The Department of Visual Communication started in 2008...",
  description: [
    {
      title: "About the Department",
      content:
        "The department prepares students for careers in visual media, film, photography, radio, and multimedia production.",
    },
  ],
  faculty: getFacultyByDepartment("Visual Communication"),
};

// ⭐ Library
export const libraryDepartment = {
  name: "Library",
  image: history,
  about:
    "The library is the central repository of knowledge with over 11,436 books and 5,681 titles.",
  description: [
    {
      title: "About the Library",
      content:
        "The library supports academic needs across all disciplines with journals, e-resources, reprographic services, and digital access.",
    },
  ],
  faculty: getFacultyByDepartment("Library"),
};

// =====================================================
// ========  SLUG TO DATA MAPPER (KEY!)  ==============
// =====================================================
export const departmentDataMapper = {
  english: englishDepartment,
  language: languageDepartment,
  mathematics: mathematicsDepartment,
  "computer-science": computerScienceDepartment,
  "computer-application": computerApplicationDepartment,
  "information-technology": informationTechnologyDepartment,
  "bio-technology": bioTechnologyDepartment,
  "commerce-and-management": commerceAndManagementDepartment,
  "corporate-secretaryship": corporateSecretaryshipDepartment,
  "visual-communication": visualCommunicationDepartment,
  library: libraryDepartment,
};

export default Object.entries(departmentDataMapper).map(([slug, data]) => ({
  slug,
  ...data,
}));
