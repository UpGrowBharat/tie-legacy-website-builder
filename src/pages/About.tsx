
import { Scale, Award, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            About Our Legal Heritage
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three generations of legal excellence serving property law needs with dedication and expertise
          </p>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Our Legal Heritage
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <div className="w-32 h-40 mx-auto mb-6 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/07000678-35ac-4da5-95ff-0e13b8936274.png" 
                  alt="Late Shri Nagendra Dutt Sharma" 
                  className="w-full h-full object-cover object-center"
                  style={{objectPosition: '50% 20%'}}
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Late Shri Nagendra Dutt Sharma</h3>
              <p className="text-lg text-muted-foreground mb-2">License No. 1 Holder</p>
              <p className="text-muted-foreground">Founder of our legal heritage, establishing the foundation of trust and expertise that continues today.</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-32 h-40 mx-auto mb-6 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/4d373dc0-a905-4b85-aa59-a2dde192f61f.png" 
                  alt="Late Shri Narottam Dutt Sharma" 
                  className="w-full h-full object-cover object-center"
                  style={{objectPosition: '50% 10%'}}
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Late Shri Narottam Dutt Sharma</h3>
              <p className="text-lg text-muted-foreground mb-2">Second Generation</p>
              <p className="text-muted-foreground">Continued the family tradition of legal excellence, expanding our expertise in property law.</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-32 h-40 mx-auto mb-6 rounded-lg overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                  alt="Advocate Ajay Shankar Sharma" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Advocate Ajay Shankar Sharma</h3>
              <p className="text-lg text-muted-foreground mb-2">Current Legal Expert</p>
              <p className="text-muted-foreground">Leading the third generation with 33+ years of experience, combining traditional expertise with modern solutions.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Our Values & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Legal Excellence</h3>
              <p className="text-muted-foreground">
                Over 75 years of combined legal expertise in property law, documentation, and consultation services.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Trusted Heritage</h3>
              <p className="text-muted-foreground">
                Three generations of legal professionals serving clients with dedication, integrity, and professional excellence.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Client Focus</h3>
              <p className="text-muted-foreground">
                Personalized legal solutions tailored to each client's unique property needs and circumstances.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Practice */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Modern Legal Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Today, Advocate Ajay Shankar Sharma continues the family tradition from our Hapur office, 
                combining decades of legal expertise with modern technology to provide comprehensive 
                property legal services.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  33+ years of active legal practice
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Specialized in property law and documentation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Online and offline consultation services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Transparent pricing and professional service
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                alt="Advocate Ajay Shankar Sharma" 
                className="w-80 mx-auto rounded-xl shadow-lg border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Legal Assistance?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for expert property legal consultation and documentation services
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/book-consultant">
              <Button size="lg" variant="secondary" className="font-semibold px-8 py-4">
                Book Consultation
              </Button>
            </a>
            <a href="tel:7037455191">
              <Button size="lg" variant="outline" className="font-semibold px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
