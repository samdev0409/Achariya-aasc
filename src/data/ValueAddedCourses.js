import ai from "@/assets/icons/artificial-intelligence.png";
import AiImg from "@/assets/images/additional-courses/ai.jpg";

const AdditionalCoursesData = [
  {
    title: "Artificial Intelligence",
    icon: ai,
    courseDescription:
      "A comprehensive program covering AI fundamentals, machine learning, deep learning, and real-world applications.",
    syllabusPdf: "/pdf/syllabus/ai.pdf",
    images: [AiImg, AiImg, AiImg],
    faculty: [
      {
        image: "/images/faculty/ramesh.jpg",
        name: "Dr. C. Ramesh Kumar",
        department: "Computer Science",
        designation: "Assistant Professor",
        phone: "+91 9842367710",
        email: "aascplacement@achariya.org",
      },
    ],
  },

  {
    title: "Cloud Architecture",
    icon: ai,
    courseDescription:
      "Learn cloud computing, AWS, Azure, DevOps pipeline, virtualization, and scalable architecture design.",
    syllabusPdf: "/pdf/syllabus/cloud.pdf",
    images: [AiImg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Data Science and Analytics",
    icon: ai,
    courseDescription:
      "Covers statistics, Python, R, data visualization, machine learning, and predictive analytics.",
    syllabusPdf: "/pdf/syllabus/data-science.pdf",
    images: [AiImg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Internet of Things",
    icon: ai,
    courseDescription:
      "Hands-on learning with sensors, boards, IoT cloud integration, automation, and embedded systems.",
    syllabusPdf: "/pdf/syllabus/iot.pdf",
    images: [AiImg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Entrepreneurship",
    icon: ai,
    courseDescription:
      "A program focused on business models, innovation, startup funding, marketing, and leadership.",
    syllabusPdf: "/pdf/syllabus/entrepreneurship.pdf",
    images: [AiImg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Tally ERP 9",
    icon: ai,
    courseDescription:
      "Learn accounting fundamentals, GST, payroll, financial statements, and Tally ERP 9 practical training.",
    syllabusPdf: "/pdf/syllabus/tally.pdf",
    images: [AiImg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Retail Training",
    icon: ShoppingBag,
    courseDescription:
      "Covers retail operations, customer handling, POS, merchandising, and store management.",
    syllabusPdf: "/pdf/syllabus/retail.pdf",
    images: [AiImg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Medical Coding",
    icon: ai,
    courseDescription:
      "Learn ICD, CPT, HCPCS codes with medical terminology for healthcare documentation and billing.",
    syllabusPdf: "/pdf/syllabus/medical-coding.pdf",
    images: [AiImg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Dialysis Technology",
    icon: ai,
    courseDescription:
      "A paramedical program focused on dialysis principles, equipment handling, patient care & clinical practice.",
    syllabusPdf: "/pdf/syllabus/dialysis.pdf",
    images: [AiImg, AiImg, AiImg],
    faculty: [],
  },
];

const AdditionalCoursesDataGeneralIncharge = [
  {
    image: ramesh,
    name: "Dr. C. Ramesh Kumar",
    department: "Commerce",
    designation: "Assistant Professor & Training and Placement Cell Officer",
    phone: "+91 9842367710",
    email: "aascplacement@achariya.org",
  },

];

export default {AdditionalCoursesData, AdditionalCoursesDataGeneralIncharge};
