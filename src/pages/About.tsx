
import { Scale, Award, Users, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-2 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/277f1b46-80f1-4bc3-85ff-7189eedb6bea.png" 
                alt="Tiewala Vakil Logo" 
                className="h-16 md:h-24 w-auto"
              />
            </div>
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="/" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="/about" className="text-sm xl:text-base text-primary font-medium">About Us</a>
              <a href="/services" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="/book-consultant" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Book Consultant</a>
              <a href="/news" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">News & Updates</a>
              <a href="/contact" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Contact Us</a>
            </nav>
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="tel:7037455191">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Call: </span>7037455191
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

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
                  className="w-full h-full object-cover object-top"
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
                  className="w-full h-full object-cover object-top"
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
                  className="w-full h-full object-cover"
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

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/277f1b46-80f1-4bc3-85ff-7189eedb6bea.png" 
                  alt="Tiewala Vakil Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                India's trusted property legal service platform, with 75+ years of heritage. 
                We simplify registration, documentation and consultation services from our Hapur office.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center text-lg">
                  <Phone className="w-5 h-5 mr-3" />
                  7037455191
                </div>
                <div className="flex items-center text-lg">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp: 7037455191
                </div>
                <div className="text-lg">Email: support@tiewalavakil.in</div>
                <div className="text-lg">Chamber no. 4, Tehsil Compound Hapur - 245101</div>
                <div className="mt-4">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=PQJG%2B28+Hapur%2C+Uttar+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full h-24 bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition-colors"
                  >
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <MapPin className="w-6 h-6 mr-2" />
                      <span>View on Google Maps</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
              <div className="space-y-3 text-gray-300">
                <div><a href="/services" className="hover:text-white transition-colors text-lg">Services</a></div>
                <div><a href="/about" className="hover:text-white transition-colors text-lg">About Us</a></div>
                <div><a href="/news" className="hover:text-white transition-colors text-lg">News & Updates</a></div>
                <div><a href="/book-consultant" className="hover:text-white transition-colors text-lg">Book Consultant</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center cursor-pointer hover:bg-blue-900 transition-colors">
                  <span className="font-bold">in</span>
                </div>
                <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 TiewalaVakil.in. All rights reserved. | A Legacy of Trust Since 1950s | Presented by Digivizual</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
