
import { Phone, MessageCircle, Scale, Award, MapPin, Users, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/277f1b46-80f1-4bc3-85ff-7189eedb6bea.png" 
              alt="Tiewala Vakil Logo" 
              className="h-24 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="/about" className="text-primary font-bold">About Us</a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="/book-consultant" className="text-foreground hover:text-primary transition-colors font-medium">Book Consultant</a>
            <a href="/news" className="text-foreground hover:text-primary transition-colors font-medium">News & Updates</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact Us</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Call: 7037455191
            </Button>
          </div>
        </div>
      </header>

      {/* About Us Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              About Tiewala Vakil
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Discover the legacy of trust, tradition, and legal excellence that spans over 75 years in Hapur
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  The legacy of Tiewala Vakil began in the 1950s when Narendar Dutt Sharma, holder of License No. 1 in Hapur, 
                  established a foundation of legal excellence that would span generations. His pioneering spirit in the legal 
                  field set the groundwork for what would become one of the most trusted names in property law.
                </p>
                <p className="text-lg">
                  Following this tradition, Narottam Dutt Sharma continued the family's commitment to legal service, 
                  further strengthening the bond of trust with the community and expanding the scope of legal assistance.
                </p>
                <p className="text-lg">
                  Today, Advocate Ajay Shankar Sharma carries forward this rich heritage with over 33 years of personal 
                  experience, combining traditional legal wisdom with modern digital convenience to serve clients 
                  across India from our base in Hapur.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/4569ed3b-2914-4778-b1e3-74d53431dabe.png" 
                  alt="Advocate Ajay Shankar Sharma" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Three Generations of Legal Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-32 h-40 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                  <img 
                    src="/lovable-uploads/07000678-35ac-4da5-95ff-0e13b8936274.png" 
                    alt="Narendar Dutt Sharma" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Narendar Dutt Sharma</h3>
                <p className="text-muted-foreground mb-2">License No. 1 Holder</p>
                <p className="text-sm text-muted-foreground">Founded the legal practice in 1950s, establishing the foundation of trust and excellence in Hapur's legal community.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-32 h-40 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                  <img 
                    src="/lovable-uploads/5958f14a-430e-49aa-90f7-633cd71a42e6.png" 
                    alt="Narottam Dutt Sharma" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Narottam Dutt Sharma</h3>
                <p className="text-muted-foreground mb-2">Second Generation</p>
                <p className="text-sm text-muted-foreground">Continued the family tradition, expanding legal services and strengthening community relationships.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-2 border-primary">
              <CardContent className="p-6">
                <div className="w-32 h-40 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-primary shadow-xl">
                  <img 
                    src="/lovable-uploads/4569ed3b-2914-4778-b1e3-74d53431dabe.png" 
                    alt="Advocate Ajay Shankar Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Advocate Ajay Shankar Sharma</h3>
                <p className="text-muted-foreground mb-2">Current Legal Expert</p>
                <p className="text-sm text-muted-foreground">Leading the practice with 33+ years of experience, combining tradition with modern digital services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Integrity</h3>
                <p className="text-muted-foreground">Upholding the highest ethical standards in all our legal practices and client relationships.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
                <p className="text-muted-foreground">Delivering superior legal services with attention to detail and comprehensive solutions.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Trust</h3>
                <p className="text-muted-foreground">Building lasting relationships based on transparency, reliability, and consistent results.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
                <p className="text-muted-foreground">Embracing modern technology to provide convenient and accessible legal services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Why Choose Tiewala Vakil?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">75+ Years of Heritage</h3>
                    <p className="text-muted-foreground">Three generations of legal expertise serving the community with unwavering dedication.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Local Expertise, National Reach</h3>
                    <p className="text-muted-foreground">Based in Hapur with deep local knowledge, serving clients across India through digital platforms.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Scale className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Comprehensive Legal Solutions</h3>
                    <p className="text-muted-foreground">From property registration to legal consultations, we handle all your legal needs under one roof.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">24/7 Accessibility</h3>
                    <p className="text-muted-foreground">Get legal assistance through phone, video calls, and WhatsApp whenever you need it.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">Thousands of satisfied clients and successfully completed legal cases speak for our expertise.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Personalized Service</h3>
                    <p className="text-muted-foreground">Every client receives individual attention and customized legal solutions for their specific needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Legacy of Trust?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have trusted us with their legal needs. 
            Get expert legal assistance from Hapur's most experienced advocate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 7037455191
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg font-semibold px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Consultation
            </Button>
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
                <div className="text-lg">Hapur, Uttar Pradesh</div>
                <div className="mt-4">
                  <div className="w-full h-24 bg-gray-700 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111194.67707710698!2d77.7616!3d28.7289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf58c6ecedda7%3A0xd7cb8d8eebc75b1f!2sHapur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="filter grayscale"
                    ></iframe>
                  </div>
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
                <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 TiewalaVakil.in. All rights reserved. | A Legacy of Trust Since 1950s</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
