
import React from "react";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <section className="bg-secondary py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#6B418B]">About MC College</h1>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">College Profile</h2>
              <p className="mb-4 leading-relaxed">
                Meenakshi Chandrasekaran College of Arts & Science (Women), established in 1998, is located in 
                Karambayam, Pattukottai, in the heart of the Cauvery delta region of Tamil Nadu. The college has 
                been dedicated to providing quality education to women for over two decades.
              </p>
              <p className="mb-4 leading-relaxed">
                Affiliated to Bharathidasan University, Tiruchirapalli, the college offers various undergraduate 
                and postgraduate programs in Arts, Science, and Commerce streams. The institution is committed to 
                nurturing the intellectual, social, and moral development of young women.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">History</h2>
              <p className="mb-4 leading-relaxed">
                Originally started as a Co-Education College in the academic year 1998-1999, the institution took 
                a significant turn in 2008-2009 when it was converted into an exclusive women's college. This 
                transformation was driven by the trustees' observation that there was no dedicated Arts & Science 
                college for women in and around Pattukkottai.
              </p>
              <p className="mb-4 leading-relaxed">
                The percentage of girls pursuing collegiate education in the region was notably low, prompting the 
                management to establish a dedicated forum for women's higher education. Since then, the college has 
                been progressively expanding its infrastructure and course offerings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">Vision & Mission</h2>
              <div className="bg-card p-6 rounded border border-border">
                <h3 className="font-semibold text-[#6B418B] mb-2">Vision</h3>
                <p className="mb-4 leading-relaxed">
                  To achieve excellence in imparting quality education and empowering women to become 
                  responsible citizens and leaders in their chosen fields.
                </p>
                
                <h3 className="font-semibold text-[#6B418B] mb-2">Mission</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>To provide quality education in Arts and Science</li>
                  <li>To promote holistic development of women students</li>
                  <li>To foster research and innovation</li>
                  <li>To create socially responsible and employable graduates</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">Accreditation & Affiliations</h2>
              <p className="leading-relaxed">
                The college is affiliated to Bharathidasan University, Tiruchirapalli, and follows the 
                curriculum and examination pattern prescribed by the university. The institution is committed 
                to maintaining high academic standards and pursuing excellence in all its endeavors.
              </p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default About;
