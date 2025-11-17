import { Card } from "@/components/ui/card";

const Departments = () => {
  const departments = [
    {
      name: "Commerce",
      programs: ["B.Com", "M.Com"],
      description: "Comprehensive commerce education preparing students for business and accounting careers."
    },
    {
      name: "Computer Applications",
      programs: ["BCA", "MCA"],
      description: "Modern computing courses covering programming, software development, and IT management."
    },
    {
      name: "Business Administration",
      programs: ["BBA", "MBA"],
      description: "Management education focusing on leadership, entrepreneurship, and business strategy."
    },
    {
      name: "English",
      programs: ["BA English", "MA English"],
      description: "Study of English literature, language, and communication skills."
    },
    {
      name: "Tamil",
      programs: ["BA Tamil", "MA Tamil"],
      description: "Deep exploration of Tamil language, literature, and culture."
    },
    {
      name: "Mathematics",
      programs: ["B.Sc Mathematics"],
      description: "Advanced mathematical concepts and their practical applications."
    },
    {
      name: "Physics",
      programs: ["B.Sc Physics"],
      description: "Study of fundamental principles governing the physical world."
    },
    {
      name: "Chemistry",
      programs: ["B.Sc Chemistry"],
      description: "Exploration of chemical processes and laboratory techniques."
    },
    {
      name: "Botany",
      programs: ["B.Sc Botany"],
      description: "Study of plant life, ecology, and biodiversity."
    },
    {
      name: "Zoology",
      programs: ["B.Sc Zoology"],
      description: "Investigation of animal biology and life sciences."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <section className="bg-secondary py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#6B418B] mb-4">Departments</h1>
            <p className="text-base">
              Our college offers diverse programs across Arts, Science, and Commerce streams.
            </p>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Card key={dept.name} className="p-6 bg-card border-border hover:border-[#6B418B] transition-colors">
                <h3 className="text-xl font-semibold text-[#6B418B] mb-3">{dept.name}</h3>
                <div className="mb-3">
                  {dept.programs.map((program) => (
                    <span 
                      key={program} 
                      className="inline-block bg-[#ED1B24] text-white text-xs px-2 py-1 rounded mr-2 mb-2"
                    >
                      {program}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{dept.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default Departments;
