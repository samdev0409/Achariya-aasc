// AdmissionsOpenData.js

import ugprogramsdatadetails  from "@/data/ugprogramsdatadetails.js";
import pgProgramsData from "@/data/pgProgramsData.js";

// Convert UG and PG programs into admission list format
const formatProgram = (item, level) => ({
  id: `${level}-${item.id}`,
  programme: item.programme,
  degree: item.degree,
  stream: item.stream,
  level, // "UG" or "PG"
  category: item.category,
  path: `/programs/${level.toLowerCase()}/${item.id}`, // dynamic navigation
});

// UG + PG combined
export const AdmissionsOpenData = [
  ...ugprogramsdatadetails.map((item) => formatProgram(item, "UG")),
  ...pgProgramsData.map((item) => formatProgram(item, "PG")),
];

export default AdmissionsOpenData;
