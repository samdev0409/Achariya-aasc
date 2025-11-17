
import { Card } from "@/components/ui/card";

const Facilities = () => {
  const facilities = [
    {
      title: "Library",
      description: "Well-stocked library with extensive collection of books, journals, and digital resources for academic excellence."
    },
    {
      title: "Computer Lab",
      description: "Modern computer laboratories equipped with latest hardware and software for practical training."
    },
    {
      title: "Science Laboratories",
      description: "State-of-the-art laboratories for Physics, Chemistry, Botany, and Zoology with modern equipment."
    },
    {
      title: "Seminar Hall",
      description: "Spacious seminar hall with audio-visual facilities for conferences, workshops, and presentations."
    },
    {
      title: "Sports Facilities",
      description: "Playground and indoor sports facilities encouraging physical fitness and sportsmanship."
    },
    {
      title: "Hostel",
      description: "Safe and comfortable hostel accommodation for outstation students with modern amenities."
    },
    {
      title: "Canteen",
      description: "Hygienic canteen serving nutritious food at affordable prices."
    },
    {
      title: "Transportation",
      description: "College bus service connecting various parts of the town and nearby areas."
    },
    {
      title: "Internet & Wi-Fi",
      description: "High-speed internet connectivity throughout the campus for research and learning."
    },
    {
      title: "Career Guidance Cell",
      description: "Dedicated cell for placement assistance, career counseling, and skill development programs."
    },
    {
      title: "NSS & NCC",
      description: "Active National Service Scheme and National Cadet Corps units for community service and leadership."
    },
    {
      title: "Women's Cell",
      description: "Dedicated cell for addressing women's issues and promoting gender equality."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <section className="bg-secondary py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#6B418B] mb-4">Facilities</h1>
            <p className="text-base">
              Our college provides comprehensive facilities to support holistic student development.
            </p>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <Card key={facility.title} className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold text-[#6B418B] mb-3">{facility.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{facility.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>


    </div>
  );
};

export default Facilities;
