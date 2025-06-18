
import { Phone, MessageCircle, Scale, BookOpen, FileText, Clock, Star, ChevronDown, Award, Users, MapPin, Search, Receipt, Gavel, Laptop, User, Edit, Plus, X, Play, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rohit Sharma",
    feedback:
      "Advocate Ajay Shankar Sharma provided excellent legal advice and helped me resolve my property dispute quickly.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    feedback:
      "Professional and knowledgeable. Highly recommend for any legal consultation related to property matters.",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    feedback:
      "Very responsive and clear in communication. The consultation was worth every penny.",
    rating: 4,
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Property Registration Client",
    thumbnail: "/lovable-uploads/gallery1.jpg",
    videoUrl: "#",
    feedback: "Amazing service! Got my property registered without any hassle."
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Legal Consultation Client",
    thumbnail: "/lovable-uploads/gallery2.jpg",
    videoUrl: "#",
    feedback: "Expert advice that saved me from a major property dispute."
  },
  {
    id: 3,
    name: "Amit Singh",
    title: "Documentation Service Client",
    thumbnail: "/lovable-uploads/gallery3.jpg",
    videoUrl: "#",
    feedback: "Professional documentation service with complete transparency."
  }
];

const faqs = [
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a consultation by visiting the Book Consultant page and filling out the form.",
  },
  {
    question: "What are the consultation fees?",
    answer:
      "Fees vary depending on the consultation type. Phone consultation is ₹500, Video consultation is ₹800, WhatsApp consultation is ₹300, and Document review is ₹1500.",
  },
  {
    question: "Where is your office located?",
    answer:
      "Our office is located at Chamber no. 4, Tehsil Compound Hapur - 245101, Hapur, Uttar Pradesh.",
  },
];

const galleryItems = [
  "/lovable-uploads/gallery1.jpg",
  "/lovable-uploads/gallery2.jpg",
  "/lovable-uploads/gallery3.jpg",
  "/lovable-uploads/gallery4.jpg",
];

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showContact, setShowContact] = useState(false);
  const { toast } = useToast();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
              <a href="/about" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">About Us</a>
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

      {/* WhatsApp Float Button - Always Visible */}
      <a
        href="https://wa.me/917037455191"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 text-sm font-semibold flex items-center"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        WhatsApp Consultation
      </a>

      {/* Contact Button - Small */}
      <div className="fixed left-4 md:left-6 bottom-4 md:bottom-6 z-40">
        <Button
          onClick={() => setShowContact(!showContact)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm px-4 py-2 rounded-lg shadow-lg"
        >
          Contact
        </Button>

        {/* Contact Popup */}
        {showContact && (
          <Card className="absolute bottom-16 left-0 w-72 xl:w-80 shadow-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-blue-50 animate-in slide-in-from-bottom-4">
            <CardContent className="p-4 xl:p-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-sm xl:text-base text-primary">Quick Contact</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowContact(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-3 xl:space-x-4 mb-4 xl:mb-5">
                <div className="w-14 h-16 xl:w-16 xl:h-20 rounded-lg overflow-hidden border-2 border-primary shadow-lg">
                  <img 
                    src="/lovable-uploads/a5616b2f-0963-4545-87ba-000cd45c804a.png" 
                    alt="Advocate Ajay Shankar Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm xl:text-base text-primary">Advocate Ajay Shankar Sharma</h4>
                  <p className="text-xs xl:text-sm text-muted-foreground font-medium">33+ Years Experience</p>
                  <p className="text-xs xl:text-sm text-muted-foreground">Based in Hapur</p>
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 xl:p-4 mb-4 xl:mb-5">
                <p className="text-xs xl:text-sm text-primary font-bold mb-2">🏛️ Legacy</p>
                <p className="text-xs xl:text-sm text-muted-foreground leading-relaxed">Get immediate legal assistance. Expert advice on property matters available now.</p>
              </div>
              <div className="space-y-2 xl:space-y-3">
                <a href="tel:7037455191">
                  <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs xl:text-sm">
                    <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 font-semibold text-xs xl:text-sm">
                    <MessageCircle className="w-3 h-3 xl:w-4 xl:h-4 mr-2" />
                    Chat Now
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Hero Section */}
      <section id="home" className="py-8 md:py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Trusted Legal Services for Property Matters
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                With over 75 years of heritage, we provide expert legal consultation, documentation, and registration services from our Hapur office.
              </p>
              <a href="/book-consultant">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Book a Consultation
                </Button>
              </a>
            </div>
            <div>
              <img 
                src="/lovable-uploads/hero-image.png" 
                alt="Legal Consultation" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Scale className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Legal Expertise</h3>
                <p className="text-muted-foreground">
                  Over three generations of legal expertise in property law and consultation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Client Focused</h3>
                <p className="text-muted-foreground">
                  Personalized legal solutions tailored to your unique property needs.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Receipt className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  Clear and upfront consultation fees with no hidden charges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legacy Section with Family Photos */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary mb-4">
              Generations of Legal Tradition
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our family has been in the legal service sector. Today, Advocate Ajay Shankar Sharma continues this legacy, 
              combining traditional legal expertise with digital innovation to serve the entire region from Hapur.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="text-center">
              <div className="w-24 h-32 md:w-32 md:h-40 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/07000678-35ac-4da5-95ff-0e13b8936274.png" 
                  alt="Late Shri Nagendra Dutt Sharma - License No. 1 Holder" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Late Shri Nagendra Dutt Sharma</h3>
              <p className="text-base md:text-lg text-muted-foreground">License No. 1 Holder</p>
              <p className="text-sm md:text-base text-muted-foreground">Founder of Legal Heritage</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-32 md:w-32 md:h-40 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/4d373dc0-a905-4b85-aa59-a2dde192f61f.png" 
                  alt="Late Shri Narottam Dutt Sharma - Legal Family Heritage" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Late Shri Narottam Dutt Sharma</h3>
              <p className="text-base md:text-lg text-muted-foreground">Family Legal Tradition</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-32 md:w-32 md:h-40 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src="/lovable-uploads/a5616b2f-0963-4545-87ba-000cd45c804a.png" 
                  alt="Current Advocate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Advocate Ajay Shankar Sharma</h3>
              <p className="text-base md:text-lg text-muted-foreground">Current Legal Expert</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Three Generations of Trust - Serving from Hapur</h3>
              <p className="text-muted-foreground mb-6 text-lg md:text-xl leading-relaxed">
                The tradition is now carried forward by Advocate Ajay Shankar Sharma from Hapur, 
                fulfilling all your property-related legal needs with the same dedication and expertise.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
                <div className="flex items-center">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-red-700 mr-3" />
                  <span className="text-base md:text-lg font-semibold">License No. 1 Legacy</span>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=PQJG%2B28+Hapur%2C+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors cursor-pointer"
                >
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mr-3" />
                  <span className="text-base md:text-lg font-semibold">Hapur Office Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultation with Advocate Photo */}
      <section className="py-8 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Online Legal Consultation
              </h2>
              <p className="mb-6 text-lg md:text-xl leading-relaxed">
                Connect with Advocate Ajay Shankar Sharma from the comfort of your home. Choose phone, video, or WhatsApp consultation.
              </p>
              <a href="/book-consultant">
                <Button size="lg" variant="secondary" className="font-semibold px-8 py-4">
                  <Clock className="w-5 h-5 mr-2" />
                  Book Your Session
                </Button>
              </a>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/a5616b2f-0963-4545-87ba-000cd45c804a.png" 
                alt="Advocate Ajay Shankar Sharma" 
                className="rounded-xl shadow-lg w-64 md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Gavel className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Property Registration</h3>
                <p className="text-muted-foreground">
                  Expert assistance in property registration and documentation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Legal Documentation</h3>
                <p className="text-muted-foreground">
                  Preparation and review of legal documents related to property.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Laptop className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Online Consultation</h3>
                <p className="text-muted-foreground">
                  Convenient online consultation via phone, video, or chat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            What Our Clients Say
          </h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-1">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4">"{testimonial.feedback}"</p>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Client Video Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={`${video.name} testimonial`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                      <Play className="w-6 h-6 text-primary" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-primary mb-1">{video.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{video.title}</p>
                  <p className="text-muted-foreground text-sm">"{video.feedback}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-primary focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="p-4 text-muted-foreground border-t border-gray-300 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
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
            <p className="text-lg">&copy; 2024 TiewalaVakil.in. All rights reserved. | A Legacy of Trust Since 1950s</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
