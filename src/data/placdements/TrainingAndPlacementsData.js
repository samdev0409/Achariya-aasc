import ramesh from "@/assets/images/our-team/faculty/Coporate Secretaryship Dept/Dr. Ramesh Kumar C.webp"
import supportImage1 from "@/assets/images/training-and-placements/training-and-placement-objectives.webp"
import supportImage2 from "@/assets/images/training-and-placements/training-and-placement-role.webp"
import supportImage3 from "@/assets/images/training-and-placements/training-and-placement-policies.webp"
import supportImage4 from "@/assets/images/training-and-placements/training-and-placement-vision-mission.webp"

const TrainingAndPlacementsFacultyData = [
  {
    image: ramesh,
    name: "Dr. Ramesh Kumar C",
    department: "Commerce",
    designation: "Assistant Professor & Training and Placement Cell Officer",
    email: "aascplacement@achariya.org",
  },

];

const activities = [
  {
    id: 1,
    text: "Training and Placement Cell offers Career Development Program for the students who are raring to enter the corporate world and introduce them to the prospective employers according to their aspirations and academic background."
  },
  {
    id: 2,
    text: "The Training programs have been formulated after having a wide discussion with various industrial and academic expert to suit the need of the industry and students."
  },
  {
    id: 3,
    text: "Inspires the students to participate in co-curricular and extra-curricular activities which will make them confidence and develop their personality."
  },
  {
    id: 4,
    text: "Encourages the students to participate in various competition conducted by major academic institutions and corporate houses."
  },
  {
    id: 5,
    text: "Arranges guest lectures by eminent personalities from industry and entrepreneurs to keep the students abreast of the latest happenings."
  },
  {
    id: 6,
    text: "It always aims to bridge the gap between industry and academia."
  }
];

const supportImages =[
  supportImage3,
  supportImage4,
supportImage1,
supportImage2,


]


export default {TrainingAndPlacementsFacultyData, activities, supportImages};
