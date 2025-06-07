import { Phone, MessageCircle, Scale, BookOpen, FileText, Clock, Star, ChevronDown, Award, Users, MapPin, Search, Receipt, Gavel, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const services = [
    { icon: FileText, title: "Sale Deed / Property Registry", desc: "Complete property registration with legal compliance" },
    { icon: FileText, title: "Gift Deed", desc: "Transfer property as gift with proper documentation" },
    { icon: FileText, title: "Agreement to Sell", desc: "Draft legally binding sale agreements" },
    { icon: FileText, title: "Power of Attorney", desc: "General & specific POA drafting and registration" },
    { icon: FileText, title: "Will Drafting & Registration", desc: "Secure your family's future with proper will documentation" },
    { icon: Search, title: "Property Document Verification", desc: "Thorough verification of property documents" },
    { icon: FileText, title: "Mutation / Name Transfer", desc: "Transfer property ownership in revenue records" },
    { icon: Receipt, title: "Stamp Duty Calculator & Help", desc: "Calculate and manage stamp duty requirements" },
    { icon: Gavel, title: "Legal Consultation", desc: "Expert advice on title, ownership and property matters" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Ghaziabad",
      text: "Excellent service! Helped me with property registration from start to finish. Very trustworthy.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Noida",
      text: "As a first-time buyer, their guidance was invaluable. Made the whole process simple.",
      rating: 5
    },
    {
      name: "Amit Gupta",
      location: "Lucknow",
      text: "Got legal consultation over video call. Professional service, reasonable fees.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How do I register a property online?",
      answer: "We provide end-to-end online property registration services. Simply call us, share your documents, and we'll handle the entire process including stamp duty calculation, document preparation, and registration booking."
    },
    {
      question: "What is the validity of a Power of Attorney?",
      answer: "A Power of Attorney remains valid until revoked by the principal, or until the principal's death. Specific POAs are valid for the particular transaction mentioned, while General POAs have broader scope."
    },
    {
      question: "How do I transfer property via a gift deed?",
      answer: "Gift deed requires proper documentation, stamp duty payment, and registration. We handle the entire process including deed drafting, stamp duty calculation, and registration at the sub-registrar office."
    },
    {
      question: "Can I consult from another state?",
      answer: "Yes! We provide pan-India consultation services via phone, video call, and WhatsApp. Our expertise in property law applies across India with local compliance guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              <span className="text-red-700">T</span>IEWALAVAKIL
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#consultation" className="text-foreground hover:text-primary transition-colors">Book Consultation</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQs</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Phone className="w-4 h-4 mr-2" />
            Call: 7037455191
          </Button>
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
      <section id="home" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              India's Trusted Property Legal Partner
              <span className="block text-red-700">Since the 1940s</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              75+ years of trust, 33+ years of legal expertise. Now offering complete online property legal services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Scale className="w-5 h-5 mr-2" />
                Get Legal Help Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-5 h-5 mr-2" />
                Call: 7037455191
              </Button>
            </div>
            <div className="mt-8 inline-flex items-center bg-red-700 text-white px-4 py-2 rounded-full">
              <Award className="w-5 h-5 mr-2" />
              License No. 1 – Legacy Since Pre-Independence
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Legal Wisdom Passed Down Generations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our family has been serving the legal community since the 1940s, with my late father holding the prestigious License No. 1. 
              Today, Advocate Ajay Shankar Sharma continues this legacy, modernizing traditional legal expertise with digital innovation 
              to serve clients across India.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-primary">1940s</h3>
              <p className="text-muted-foreground">Family Legacy Begins</p>
            </div>
            <div className="hidden md:block w-16 h-1 bg-border"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-primary">1980s</h3>
              <p className="text-muted-foreground">Modern Legal Practice</p>
            </div>
            <div className="hidden md:block w-16 h-1 bg-border"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-primary">Today</h3>
              <p className="text-muted-foreground">Digital Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Why TiewalaVakil.in?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-red-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Generations of Trust</h3>
                <p className="text-muted-foreground">Since 1940s</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">33+ Years of Advocacy</h3>
                <p className="text-muted-foreground">Real courtroom & registry experience</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Laptop className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Online Legal Help</h3>
                <p className="text-muted-foreground">Book from any city or village in India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Our Legal Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6">
                  <service.icon className="w-10 h-10 text-primary mb-4 group-hover:text-red-700 transition-colors" />
                  <h3 className="font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Consultation */}
      <section id="consultation" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Online Legal Help – PAN India
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            No matter where you live – legal help is just a click away. Book consultations via phone, 
            video call, or WhatsApp. Get verified documents without visiting a lawyer in person.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Phone className="w-5 h-5 mr-2" />
            Call Advocate Now – 7037455191
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonial.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-bold text-primary">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Legal Clarity for Your Property?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Talk to a trusted legal expert in 1 click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call Advocate Now – 7037455191
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-red-400">T</span>IEWALAVAKIL
              </h3>
              <p className="text-gray-300 mb-4">
                India's trusted property legal services platform, backed by 75+ years of heritage. 
                We simplify registration, documentation, and consultation across India.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  7037455191
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp: 7037455191
                </div>
                <div>Email: support@tiewalavakil.in</div>
                <div>Ghaziabad, Uttar Pradesh</div>
                <div className="text-sm">(serving PAN India)</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-300">
                <div><a href="#services" className="hover:text-white transition-colors">Services</a></div>
                <div><a href="#about" className="hover:text-white transition-colors">About</a></div>
                <div><a href="#faq" className="hover:text-white transition-colors">FAQ</a></div>
                <div><a href="#consultation" className="hover:text-white transition-colors">Book Now</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  f
                </div>
                <div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center cursor-pointer hover:bg-blue-900 transition-colors">
                  in
                </div>
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TiewalaVakil.in. All rights reserved. | A Legacy of Trust Since 1940s</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
