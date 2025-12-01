import ai from "@/assets/icons/additonal-courses/artificial-intelligence.png";
import AiImg from "@/assets/images/additional-courses/ai.jpg";
import ramesh from "@/assets/images/17122.webp";
import iotimg from "@/assets/icons/additonal-courses/networking.png"
import cloudimg from "@/assets/icons/additonal-courses/cloud-storage.png"
import dataimg from "@/assets/icons/additonal-courses/exploratory-analysis.png";
import retailimg from "@/assets/icons/additonal-courses/retailer.png";
import entrepreneurshipimg from "@/assets/icons/additonal-courses/entrepreneurship.png";
import tallyimg from "@/assets/icons/additonal-courses/count.png";
import medicalimg from "@/assets/icons/additonal-courses/healthcare.png";
import dialysisimg from "@/assets/icons/additonal-courses/healthcare.png";

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
    icon: cloudimg,
    courseDescription:
      "Learn cloud computing, AWS, Azure, DevOps pipeline, virtualization, and scalable architecture design.",
    syllabusPdf: "/pdf/syllabus/cloud.pdf",
    images: [cloudimg, cloudimg, cloudimg],
    faculty: [],
  },

  {
    title: "Data Science and Analytics",
    icon: dataimg,
    courseDescription:
      "Covers statistics, Python, R, data visualization, machine learning, and predictive analytics.",
    syllabusPdf: "/pdf/syllabus/data-science.pdf",
    images: [dataimg, dataimg, dataimg],
    faculty: [],
  },

  {
    title: "Internet of Things",
    icon: iotimg,
    courseDescription:
      "Hands-on learning with sensors, boards, IoT cloud integration, automation, and embedded systems.",
    syllabusPdf: "/pdf/syllabus/iot.pdf",
    images: [iotimg, iotimg, iotimg],
    faculty: [],
  },

  {
    title: "Entrepreneurship",
    icon:   entrepreneurshipimg,
    courseDescription:
      "A program focused on business models, innovation, startup funding, marketing, and leadership.",
    syllabusPdf: "/pdf/syllabus/entrepreneurship.pdf",
    images: [entrepreneurshipimg, AiImg, AiImg],  
    faculty: [],
  },

  {
    title: "Tally ERP 9",
    icon: tallyimg,
    courseDescription:
      "Learn accounting fundamentals, GST, payroll, financial statements, and Tally ERP 9 practical training.",
    syllabusPdf: "/pdf/syllabus/tally.pdf",
    images: [ tallyimg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Retail Training",
    icon: retailimg,
    courseDescription:
      "Covers retail operations, customer handling, POS, merchandising, and store management.",
    syllabusPdf: "/pdf/syllabus/retail.pdf",
    images: [retailimg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Medical Coding",
    icon: medicalimg,
    courseDescription:
      "Learn ICD, CPT, HCPCS codes with medical terminology for healthcare documentation and billing.",
    syllabusPdf: "/pdf/syllabus/medical-coding.pdf",
    images: [medicalimg, AiImg, AiImg],
    faculty: [],
  },

  {
    title: "Dialysis Technology",
    icon: dialysisimg,
    courseDescription:
      "A paramedical program focused on dialysis principles, equipment handling, patient care & clinical practice.",
    syllabusPdf: "/pdf/syllabus/dialysis.pdf",
    images: [dialysisimg, AiImg, AiImg],
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

export default { AdditionalCoursesData, AdditionalCoursesDataGeneralIncharge };
