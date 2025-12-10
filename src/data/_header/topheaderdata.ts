import nirfdoc from "@/assets/documents/NIRF/Achariya-Arts-and-Science-College20250108.pdf";
import ugcdoc from "@/assets/documents/ugc/UGC-1.pdf";
import aishedoc from "@/assets/documents/aishi/AISHE Provisional Certficate.pdf";
import pondicherryuniversityaffilationdoc from "@/assets/documents/pondicheryuniversity-affilation/Pondicherry university Affiliation.pdf";

import AISHELOGO from "@/assets/images/common/aishe.webp";
import PondicherryUniversityLogo from "@/assets/images/common/pondicherryuniversitylogo.webp";
import UGCLogo from "@/assets/images/common/ugclogo.webp";

export const documentsData = [
  {
    id: "nirf",
    label: "NIRF",
    file: nirfdoc,
    type: "text",
  },
  {
    id: "ugc",
    label: "UGC",
    file: ugcdoc,
    type: "img",
    img: UGCLogo,
    imgAlt: "UGC Logo",
    rounded: true,
  },
  {
    id: "aishe",
    label: "AISHE",
    file: aishedoc,
    type: "img",
    img: AISHELOGO,
    imgAlt: "AISHE Logo",
  },
  {
    id: "pondy",
    label: "Pondicherry University",
    file: pondicherryuniversityaffilationdoc,
    type: "img",
    img: PondicherryUniversityLogo,
    imgAlt: "Pondicherry University Logo",
    rounded: true,
  },
];
