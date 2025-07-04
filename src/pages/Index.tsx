
import { ArrowRight, Phone, MessageCircle, CheckCircle, Star, Scale, Users, Award, Calendar, User, MapPin, FileText, Camera, Building2, Stamp, Shield, BookOpen, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
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
              <a href="/" className="text-sm xl:text-base text-primary font-medium">Home</a>
              <a href="/about" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">About Us</a>
              <a href="/services" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="/blog" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Blog</a>
              <a href="/privacy" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Privacy</a>
              <a href="/contact" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Contact Us</a>
            </nav>
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="/book-consultant">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
                  Book Consultant
                </Button>
              </a>
              <a href="tel:7037455191">
                <Button variant="outline" className="font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
                India's Most Trusted Property Legal Service Platform
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                75+ years of legal heritage. Expert property documentation, registration, and consultation services. 
                From Sale Deed to Mutation - we handle it all with precision and trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <a href="/book-consultant">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Book Free Consultation
                  </Button>
                </a>
                <a href="tel:7037455191">
                  <Button size="lg" variant="outline" className="font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Call: 7037455191
                  </Button>
                </a>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                alt="Advocate Ajay Shankar Sharma" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Legal Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-0 text-center">
                <FileText className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Sale Deed Registration</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Complete Sale Deed drafting, verification, and registration services with government compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-0 text-center">
                <Building2 className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Property Mutation</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Name transfer, property mutation, and revenue record updates with municipal authorities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-0 text-center">
                <Stamp className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Stamp Duty Cases</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Expert resolution of stamp duty disputes, deficiency cases, and compliance issues.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-0 text-center">
                <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Document Verification</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Thorough verification of property documents, title clearance, and legal due diligence.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-0 text-center">
                <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Legal Consultation</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Expert legal advice on property matters, inheritance, and real estate transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-0 text-center">
                <FileText className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Will & POA Drafting</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Professional drafting of Wills, Power of Attorney, and other legal documents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
            Why Choose TiewalaVakil?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Award className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">75+ Years Heritage</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Three generations of legal expertise serving clients with dedication and professional excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Scale className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Expert Legal Team</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Led by Advocate Ajay Shankar Sharma with 33+ years of specialized property law experience.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Users className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Trusted by Thousands</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Successfully handled thousands of property cases with 100% client satisfaction and transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed italic">
                  "Excellent service for my property registration. Advocate Sharma handled everything professionally 
                  and the process was smooth. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <User className="w-8 h-8 text-primary mr-3" />
                  <div>
                    <p className="font-semibold text-primary">Rajesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Property Buyer, Hapur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed italic">
                  "Best legal service in Hapur! They helped me with stamp duty case and mutation. 
                  Very transparent pricing and quick resolution."
                </p>
                <div className="flex items-center">
                  <User className="w-8 h-8 text-primary mr-3" />
                  <div>
                    <p className="font-semibold text-primary">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Landowner, Pilkhuwa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed italic">
                  "Traditional family lawyers with modern approach. They saved my property from legal disputes. 
                  Grateful for their expertise and guidance."
                </p>
                <div className="flex items-center">
                  <User className="w-8 h-8 text-primary mr-3" />
                  <div>
                    <p className="font-semibold text-primary">Amit Singh</p>
                    <p className="text-sm text-muted-foreground">Business Owner, Meerut</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Office Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/39b7aae8-0209-4926-8db2-d52354527704.png" 
                  alt="Office Interior" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Modern Office Setup</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/31c9ac15-bbdd-4420-a700-ea74291c7028.png" 
                  alt="Legal Documentation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Legal Documentation Process</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/98917bca-9155-41eb-9652-10af67e03728.png" 
                  alt="Client Consultation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Client Consultation Room</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/ed62dcfa-e067-48b4-a735-809bf4e22ca3.png" 
                  alt="Legal Library" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Legal Reference Library</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/fe348bb1-57a0-40f4-9d2e-b9bd47f61a16.png" 
                  alt="Government Office" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Government Registration Office</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/061017e6-8ed4-47a9-9ad1-85295e52f719.png" 
                  alt="Team Meeting" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Team Strategy Meeting</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            Ready to Secure Your Property Rights?
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl mb-8 md:mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Don't let property legal issues become complicated. Get expert consultation from Hapur's most trusted legal family today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="/book-consultant">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Book Free Consultation
              </Button>
            </a>
            <a href="tel:7037455191">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Call: 7037455191
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-amber-50 text-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 md:gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/277f1b46-80f1-4bc3-85ff-7189eedb6bea.png" 
                  alt="Tiewala Vakil Logo" 
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed text-base md:text-lg">
                India's trusted property legal service platform, with 75+ years of heritage. 
                We simplify registration, documentation and consultation services.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg md:text-xl">Contact</h4>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-center text-base md:text-lg">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                  7037455191
                </div>
                <div className="flex items-center text-base md:text-lg">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                  WhatsApp: 7037455191
                </div>
                <div className="text-base md:text-lg">Email: tiewalavakil@gmail.com</div>
              </div>
              <div className="flex space-x-4 mt-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="font-bold text-sm md:text-base text-white">f</span>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg md:text-xl">Quick Links</h4>
              <div className="space-y-3 text-slate-600">
                <div><a href="/services" className="hover:text-slate-800 transition-colors text-base md:text-lg">Services</a></div>
                <div><a href="/about" className="hover:text-slate-800 transition-colors text-base md:text-lg">About Us</a></div>
                <div><a href="/blog" className="hover:text-slate-800 transition-colors text-base md:text-lg">Blog</a></div>
                <div><a href="/book-consultant" className="hover:text-slate-800 transition-colors text-base md:text-lg">Book Consultant</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg md:text-xl">Office Location</h4>
              <div className="text-slate-600 mb-4">
                <p className="text-base md:text-lg mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Sub-Registrar Office Road, Near Tehsil, Hapur - 245101, Uttar Pradesh
                </p>
                <p className="text-sm text-slate-500">
                  Current Location: Chamber no. 4, Tehsil Compound Hapur
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-300 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-slate-500">
            <p className="text-base md:text-lg">&copy; 2024 TiewalaVakil.in. All rights reserved. | A Legacy of Trust Since 1950s</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
