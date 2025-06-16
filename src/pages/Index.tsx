
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

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { toast } = useToast();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const testimonials = [
    {
      name: "Rakesh Kumar",
      location: "Hapur",
      text: "Excellent service! Got complete help from start to finish in property registration. Very trustworthy and reliable.",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      location: "Meerut",
      text: "Their advice was very helpful for my first property purchase. They made the entire process simple and easy.",
      rating: 5
    },
    {
      name: "Amit Gupta",
      location: "Ghaziabad", 
      text: "Got legal advice through video call. Professional service with reasonable fees. Highly recommended.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How to register property?",
      answer: "We provide end-to-end property registration services. Just call us, share your documents, and we'll handle the complete process for you."
    },
    {
      question: "What is the validity of Power of Attorney?",
      answer: "Power of Attorney remains valid until the principal person revokes it or passes away. We ensure proper documentation for maximum validity."
    },
    {
      question: "How to transfer property through Gift Deed?",
      answer: "Gift Deed requires proper documentation, stamp duty payment, and registration. We handle the complete process including legal compliance."
    },
    {
      question: "Can I get consultation from other states?",
      answer: "Yes! We provide consultation via phone, video call, and WhatsApp. Our expertise applies across India with local Hapur office support."
    }
  ];

  const galleryItems = [
    {
      src: "/lovable-uploads/c1baa9e5-2320-40a7-9fd6-d0782076aa21.png",
    },
    {
      src: "/lovable-uploads/b4ec8f5d-4f96-45f5-94da-a770ba9dc513.png",
    },
    {
      src: "/lovable-uploads/01dcd1d0-1b9d-4c30-9235-a162e52e1170.png",
    },
    {
      src: "/lovable-uploads/7858c111-5051-4af3-9a8c-7413a4e2f1d0.png",
    },
    {
      src: "/lovable-uploads/e9a533d9-17e5-4da9-95fe-41ff02932349.png",
    },
    {
      src: "/lovable-uploads/31c9ac15-bbdd-4420-a700-ea74291c7028.png",
    },
    {
      src: "/lovable-uploads/6e183dc5-07b5-4356-86f4-d08700662354.png",
    }
  ];

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
              <a href="#home" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="/about" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">About Us</a>
              <a href="/services" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="/book-consultant" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Book Consultant</a>
              <a href="/news" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">News & Updates</a>
              <a href="/contact" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Contact Us</a>
            </nav>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Call: </span>7037455191
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/917037455191"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      </a>

      {/* Consultant Widget - Desktop Only */}
      <div className="fixed left-4 md:left-6 bottom-4 md:bottom-6 z-40 hidden lg:block">
        <Card className="w-72 xl:w-80 shadow-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-blue-50">
          <CardContent className="p-4 xl:p-6">
            <div className="flex items-center space-x-3 xl:space-x-4 mb-4 xl:mb-5">
              <div className="w-14 h-16 xl:w-16 xl:h-20 rounded-lg overflow-hidden border-2 border-primary shadow-lg">
                <img 
                  src="/lovable-uploads/c1baa9e5-2320-40a7-9fd6-d0782076aa21.png" 
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
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs xl:text-sm">
                <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-2" />
                Call Now
              </Button>
              <Button size="sm" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 font-semibold text-xs xl:text-sm">
                <MessageCircle className="w-3 h-3 xl:w-4 xl:h-4 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hero Section */}
      <section id="home" className="py-8 md:py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold text-primary mb-4 md:mb-6 leading-tight">
                Hapur's Trusted Legal Partner
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                75+ years of trust, 33+ years of legal expertise. Now offering comprehensive online property legal services from Hapur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
                  <Scale className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Get Legal Help Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Call: 7037455191
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-64 md:h-96 overflow-hidden">
                  <img 
                    src="/lovable-uploads/c1baa9e5-2320-40a7-9fd6-d0782076aa21.png" 
                    alt="Advocate Ajay Shankar Sharma - Current Legal Expert" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <p className="text-base md:text-lg font-bold text-primary">Advocate Ajay Shankar Sharma</p>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">33+ Years Experience • Hapur Based</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary mb-4">
                Advocate Ajay Shankar Sharma
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                75+ Years of Legal Tradition | 33+ Years of Experience
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg md:text-xl mb-4 md:mb-6">
                In the heart of Hapur lies a name synonymous with trust, tradition, and legal excellence — Advocate Ajay Shankar Sharma. With a family legacy and over 33 years of personal experience, he stands as one of the most respected names in property legal services in the region.
              </p>
              
              <p className="text-base md:text-lg mb-4 md:mb-6">
                If you're seeking property-related legal assistance in Hapur, you're not just hiring a lawyer — you're connecting with generations of legal wisdom and a name that carries a prestigious legacy.
              </p>

              <div className="bg-primary/5 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">🔹 A Legacy That Began</h3>
                <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                  The journey of legal service for this family began with Advocate Sharma's late father, who proudly held License No. 1 in Hapur. A pioneer in the region's legal field, he laid the foundation for a legal dynasty rooted in ethics, expertise, and client trust.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Today, Advocate Ajay Shankar Sharma proudly carries this heritage forward, providing a unique blend of traditional legal insight and modern digital convenience.
                </p>
              </div>
            </div>
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
          
          {/* Heritage Timeline with Passport Size Photos */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="text-center">
              <div className="w-24 h-32 md:w-32 md:h-40 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/07000678-35ac-4da5-95ff-0e13b8936274.png" 
                  alt="Nagendra Dutt Sharma - License No. 1 Holder" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Nagendra Dutt Sharma</h3>
              <p className="text-base md:text-lg text-muted-foreground">License No. 1 Holder</p>
              <p className="text-sm md:text-base text-muted-foreground">Founder of Legal Heritage</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-32 md:w-32 md:h-40 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/5958f14a-430e-49aa-90f7-633cd71a42e6.png" 
                  alt="Narottam Dutt Sharma - Legal Family Heritage" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Narottam Dutt Sharma</h3>
              <p className="text-base md:text-lg text-muted-foreground">Family Legal Tradition</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-32 md:w-32 md:h-40 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src="/lovable-uploads/c1baa9e5-2320-40a7-9fd6-d0782076aa21.png" 
                  alt="Current Advocate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Advocate Ajay Shankar Sharma</h3>
              <p className="text-base md:text-lg text-muted-foreground">Current Legal Expert</p>
            </div>
          </div>

          {/* Personal Touch Section */}
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
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mr-3" />
                  <span className="text-base md:text-lg font-semibold">Hapur Office Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultation with Advocate Photo */}
      <section className="py-8 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Online Legal Assistance – At Your Service from Hapur
              </h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed">
                Wherever you live – legal help is just one click away. Book consultation via phone, video call, or WhatsApp. 
                Get verified documents without visiting our Hapur office.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Call Advocate Now – 7037455191
              </Button>
            </div>
            <div className="text-center">
              <div className="inline-block relative">
                <div className="w-40 h-48 md:w-48 md:h-64 mx-auto rounded-xl overflow-hidden border-4 md:border-8 border-white shadow-2xl">
                  <img 
                    src="/lovable-uploads/c1baa9e5-2320-40a7-9fd6-d0782076aa21.png" 
                    alt="Advocate Ajay Shankar Sharma - Available for Online Consultation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 md:px-6 py-1 md:py-2 rounded-full text-sm md:text-base font-bold">
                  ● Available Now
                </div>
              </div>
              <div className="mt-6 md:mt-8 bg-white/10 backdrop-blur rounded-xl p-4 md:p-6">
                <p className="font-bold text-lg md:text-xl">Advocate Ajay Shankar Sharma</p>
                <p className="text-sm md:text-base opacity-90 mt-2">Available for Online Consultation</p>
                <p className="text-sm md:text-base opacity-90">Based in Hapur, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-4 md:p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-base md:text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-bold text-primary text-base md:text-lg">{testimonial.name}</div>
                  <div className="text-sm md:text-base text-muted-foreground flex items-center mt-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    {testimonial.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
            Gallery
          </h2>
          <div className="w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryItems.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="relative aspect-square">
                          <img 
                            src={item.src} 
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 md:p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-bold text-primary text-lg md:text-xl">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 text-primary transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
            Need Legal Clarity for Your Property?
          </h2>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 opacity-90">
            Talk to a trusted legal expert in just 1 click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Call Advocate Now – 7037455191
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/277f1b46-80f1-4bc3-85ff-7189eedb6bea.png" 
                  alt="Tiewala Vakil Logo" 
                  className="h-12 md:h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                India's trusted property legal service platform, with 75+ years of heritage. 
                We simplify registration, documentation and consultation services from our Hapur office.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg md:text-xl">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center text-base md:text-lg">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                  7037455191
                </div>
                <div className="flex items-center text-base md:text-lg">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                  WhatsApp: 7037455191
                </div>
                <div className="text-base md:text-lg">Email: support@tiewalavakil.in</div>
                <div className="text-base md:text-lg">Hapur, Uttar Pradesh</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg md:text-xl">Quick Links</h4>
              <div className="space-y-3 text-gray-300">
                <div><a href="/services" className="hover:text-white transition-colors text-base md:text-lg">Services</a></div>
                <div><a href="/about" className="hover:text-white transition-colors text-base md:text-lg">About Us</a></div>
                <div><a href="/news" className="hover:text-white transition-colors text-base md:text-lg">News & Updates</a></div>
                <div><a href="/book-consultant" className="hover:text-white transition-colors text-base md:text-lg">Book Consultant</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg md:text-xl">Connect</h4>
              <div className="flex space-x-4 mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="font-bold text-sm md:text-base">f</span>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-800 rounded flex items-center justify-center cursor-pointer hover:bg-blue-900 transition-colors">
                  <span className="font-bold text-sm md:text-base">in</span>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <div className="w-full h-20 md:h-24 bg-gray-700 rounded-lg overflow-hidden">
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
          <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
            <p className="text-base md:text-lg">&copy; 2024 TiewalaVakil.in. All rights reserved. | A Legacy of Trust</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
