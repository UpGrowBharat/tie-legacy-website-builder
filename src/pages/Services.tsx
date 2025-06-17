
import { Phone, MessageCircle, Scale, FileText, Receipt, Search, Gavel, Award, Users, MapPin, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    "Sale Deed (Vikray Patra)",
    "Gift Deed (Daan Patra)", 
    "Agreement to Sell (Ikraarnama) – With or Without Possession",
    "Will & Testament (Vasiyat)",
    "Power of Attorney (Mukhtarnama)",
    "Mortgage Deed (Bandhak Patra)",
    "Exchange Deed (Vinimay Vilekh)",
    "Lease Deed (Patta Vilekh)",
    "Mutation / Name Transfer (Naamantaran)",
    "Stamp Duty Guidance",
    "Property Verification"
  ];

  const whyChoosePoints = [
    "33+ Years of Experience in handling complex property matters",
    "Hapur-based, regionally trusted advocate",
    "Backed by a 75-year-old legal legacy",
    "Offering online consultation and document services",
    "Specializing in Sale Deed, Agreement to Sell, Will, Gift Deed, Power of Attorney, Lease Deed, and more",
    "Transparent, ethical, and client-focused approach"
  ];

  const digitalServices = [
    "Online property legal document drafting",
    "Telephonic legal consultations", 
    "Remote document submission and verification",
    "Quick, professional legal assistance from Hapur"
  ];

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
            <a href="/services" className="text-primary font-bold">Services</a>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="/#consultation" className="text-foreground hover:text-primary transition-colors font-medium">Book Consultation</a>
            <a href="/#faq" className="text-foreground hover:text-primary transition-colors font-medium">FAQs</a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Call: 7037455191
            </Button>
          </div>
        </div>
      </header>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/917037455191"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
              Hapur's Trusted Legal Partner
              <span className="block text-red-700 text-4xl md:text-5xl mt-2">Since the 1950s</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-4xl mx-auto">
              Advocate Ajay Shankar Sharma
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto">
              75+ Years of Legal Tradition | 33+ Years of Experience | License No. 1 Legacy
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl mb-8">
                In the heart of Hapur lies a name synonymous with trust, tradition, and legal excellence — Advocate Ajay Shankar Sharma. With a family legacy dating back to the 1950s and over 33 years of personal experience, he stands as one of the most respected names in property legal services in the region.
              </p>
              
              <p className="text-lg mb-12">
                If you're seeking property-related legal assistance in Hapur, you're not just hiring a lawyer — you're connecting with three generations of legal wisdom and a name that carries the License No. 1 legacy.
              </p>

              {/* A Legacy Section */}
              <div className="bg-primary/5 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">🔹 A Legacy That Began in the 1950s</h3>
                <p className="text-lg leading-relaxed mb-6">
                  The journey of legal service for this family began over 75 years ago with Advocate Sharma's late father, who proudly held License No. 1 in Hapur. A pioneer in the region's legal field, he laid the foundation for a legal dynasty rooted in ethics, expertise, and client trust.
                </p>
                <p className="text-lg leading-relaxed">
                  Alongside him, Advocate Sharma's late uncle also served with distinction, further solidifying the family's standing in the legal community. Today, Advocate Ajay Shankar Sharma proudly carries this heritage forward, providing a unique blend of traditional legal insight and modern digital convenience.
                </p>
              </div>

              {/* Why Choose Section */}
              <div className="bg-blue-50 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">🔹 Why Choose Advocate Ajay Shankar Sharma?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyChoosePoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-base">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Digital Innovation Section */}
              <div className="bg-green-50 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">🔹 Bridging Legal Tradition with Digital Innovation</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Advocate Ajay Shankar Sharma has successfully merged his family's traditional legal practices with the needs of the modern digital era. Whether you're in Hapur or connecting from anywhere in India, you can now avail of:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {digitalServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-primary text-xl">📄📞📤📍</span>
                      <span className="text-base">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mt-6">
                  With this approach, legal help is now just a call away — making it easier than ever to manage property issues, disputes, registrations, or verifications with expert guidance.
                </p>
              </div>

              {/* Services Offered Section */}
              <div className="bg-primary/5 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">🔹 Services Offered</h3>
                <p className="text-lg mb-6">Here's a glimpse of the comprehensive property-related legal services offered:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Scale className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-base font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mt-6">
                  All documents are prepared with utmost precision and legal compliance, tailored to your property needs in Hapur and surrounding areas.
                </p>
              </div>

              {/* License No. 1 Section */}
              <div className="bg-red-50 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">🔹 License No. 1 – The Badge of Legacy</h3>
                <p className="text-lg leading-relaxed">
                  Holding the License No. 1 is not just a number — it's a symbol of unmatched credibility, history, and public trust. This distinction sets Advocate Sharma apart as someone who is not just practicing law, but upholding a generational commitment to justice and legal excellence.
                </p>
              </div>

              {/* Location Section */}
              <div className="bg-blue-50 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">📍 Located in the Heart of Hapur</h3>
                <p className="text-lg leading-relaxed mb-6">
                  You can visit Advocate Sharma's office in Hapur or reach out online for a consultation. No matter where you are, you can rest assured that your property matters are in expert hands.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-bold">Get Legal Help Now</p>
                    <p className="text-lg">7037455191</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-bold">Office Location</p>
                    <p className="text-lg">Hapur, Uttar Pradesh</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-bold">Legal Partner</p>
                    <p className="text-lg">Advocate Ajay Shankar Sharma</p>
                  </div>
                </div>
              </div>

              {/* Final Thoughts Section */}
              <div className="bg-primary text-primary-foreground rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Final Thoughts</h3>
                <p className="text-lg leading-relaxed mb-6">
                  In an era where trust is hard to come by, Advocate Ajay Shankar Sharma remains a beacon of reliability and professionalism. With 33+ years of practice and a legacy spanning over 75 years, he represents more than just a lawyer — he is the guardian of a legal heritage built on honesty, dedication, and client satisfaction.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether it's drafting a Sale Deed or managing a Property Dispute, let the most trusted legal name in Hapur be your guiding force.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Get Legal Help?
          </h2>
          <p className="text-2xl mb-10 opacity-90">
            Contact Advocate Ajay Shankar Sharma today for expert legal assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Now – 7037455191
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
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
              <div className="space-y-3 text-gray-300">
                <div><a href="/" className="hover:text-white transition-colors text-lg">Home</a></div>
                <div><a href="/services" className="hover:text-white transition-colors text-lg">Services</a></div>
                <div><a href="/#about" className="hover:text-white transition-colors text-lg">About</a></div>
                <div><a href="/#consultation" className="hover:text-white transition-colors text-lg">Book Now</a></div>
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

export default Services;
