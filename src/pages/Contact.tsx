
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <section className="bg-secondary py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-[#6B418B]">Contact Us</h1>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card border-border">
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">Get in Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#6B418B] mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Meenakshi Chandrasekaran College of Arts & Science (Women)<br />
                    Karambayam, Pattukottai<br />
                    Thanjavur District<br />
                    Tamil Nadu - 614 701<br />
                    India
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#6B418B] mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    Office: +91-4373-XXX XXX
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#6B418B] mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    principal@mccollege.ac.in<br />
                    info@mccollege.ac.in
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#6B418B] mb-1">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-2xl font-semibold text-[#6B418B] mb-4">Send us a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:border-[#6B418B]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:border-[#6B418B]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:border-[#6B418B]"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:border-[#6B418B]"
                    placeholder="Your message"
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-[#ED1B24] hover:bg-[#ED1B24]/90 text-white px-4 py-2 rounded text-sm font-medium"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Contact;
