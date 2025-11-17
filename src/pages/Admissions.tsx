
import { Button } from "@/components/ui/button";

const Admissions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <section className="bg-secondary py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#6B418B]">Admissions</h1>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">Admission Process</h2>
              <p className="mb-4 leading-relaxed">
                Admissions to MC College are conducted based on merit and in accordance with the guidelines 
                set by Bharathidasan University and the Government of Tamil Nadu. We welcome applications from 
                women candidates seeking quality education in Arts, Science, and Commerce streams.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">Eligibility Criteria</h2>
              <div className="bg-card p-6 rounded border border-border space-y-4">
                <div>
                  <h3 className="font-semibold text-[#6B418B] mb-2">Undergraduate Programs (UG)</h3>
                  <p className="text-sm leading-relaxed">
                    Candidates who have completed Higher Secondary Education (12th standard) or equivalent 
                    examination are eligible to apply for undergraduate programs.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#6B418B] mb-2">Postgraduate Programs (PG)</h3>
                  <p className="text-sm leading-relaxed">
                    Candidates who have completed a relevant undergraduate degree from a recognized university 
                    are eligible to apply for postgraduate programs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">Important Documents</h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>10th Standard Mark Sheet and Certificate</li>
                <li>12th Standard Mark Sheet and Certificate (for UG)</li>
                <li>Degree Certificate and Mark Sheets (for PG)</li>
                <li>Transfer Certificate (TC)</li>
                <li>Community Certificate (if applicable)</li>
                <li>Income Certificate (if applicable)</li>
                <li>Aadhaar Card</li>
                <li>Passport size photographs</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">Application Process</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm mb-6">
                <li>Visit the college during admission period</li>
                <li>Collect and fill the application form</li>
                <li>Submit required documents</li>
                <li>Pay the application fee</li>
                <li>Attend counseling session (if required)</li>
                <li>Complete admission formalities upon selection</li>
              </ol>
              
              <Button className="bg-[#ED1B24] hover:bg-[#ED1B24]/90 text-white px-4 py-2 rounded text-sm">
                Download Application Form
              </Button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">Contact for Admissions</h2>
              <p className="text-sm leading-relaxed">
                For admission-related queries, please contact the college office during working hours 
                (Monday to Saturday, 9:00 AM to 5:00 PM).
              </p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Admissions;
