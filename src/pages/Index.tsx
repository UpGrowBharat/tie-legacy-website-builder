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
  // State variables and functions for form or other interactive elements can be defined here if needed

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
              <a href="tel:7037455191">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Call: </span>7037455191
                </Button>
              </a>
              <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Consultant Widget - Desktop Only */}
      <div className="fixed left-4 md:left-6 bottom-4 md:bottom-6 z-40 hidden lg:block">
        <Card className="w-72 xl:w-80 shadow-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-blue-50">
          <CardContent className="p-4 xl:p-6">
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
                  WhatsApp Chat
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hero Section */}
      <section id="home" className="py-8 md:py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Welcome to Tiewala Vakil
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Your trusted legal partner in Hapur for property-related matters.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="tel:7037455191">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 font-semibold px-6 py-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Our Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We provide expert legal services in property matters, backed by a legacy of trust and decades of experience.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you need assistance with sale deeds, gift deeds, agreements, wills, or any property-related legal documentation, we are here to help.
          </p>
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
              
              {/* Button-style contact for Ajay Shankar Sharma */}
              <div className="mt-4 space-y-2">
                <a href="tel:7037455191">
                  <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs">
                    <Phone className="w-3 h-3 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 font-semibold text-xs">
                    <MessageCircle className="w-3 h-3 mr-2" />
                    Chat Now
                  </Button>
                </a>
              </div>
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
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=PQJG%2B28+Hapur%2C+Uttar+Pradesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors cursor-pointer"
                >
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mr-3" />
                  <span className="text-base md:text-lg font-semibold hover:underline">Hapur Office Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultation Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Online Consultation & Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Access expert legal advice and document services from anywhere in India. We offer telephonic consultations, remote document verification, and quick legal assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white rounded-lg shadow p-6 w-64">
              <BookOpen className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Document Drafting</h3>
              <p className="text-muted-foreground text-sm">Professional legal document preparation for property matters.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 w-64">
              <Phone className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Telephonic Consultation</h3>
              <p className="text-muted-foreground text-sm">Get expert advice over the phone at your convenience.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 w-64">
              <FileText className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Remote Verification</h3>
              <p className="text-muted-foreground text-sm">Submit and verify documents remotely with ease.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 w-64">
              <Scale className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Legal Assistance</h3>
              <p className="text-muted-foreground text-sm">Quick and professional help for property disputes and registrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Sale Deed (Vikray Patra)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Gift Deed (Daan Patra)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Agreement to Sell (Ikraarnama) – With or Without Possession</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Will & Testament (Vasiyat)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Power of Attorney (Mukhtarnama)</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Mortgage Deed (Bandhak Patra)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Exchange Deed (Vinimay Vilekh)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Lease Deed (Patta Vilekh)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Mutation / Name Transfer (Naamantaran)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">Stamp Duty Guidance & Property Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary mb-4">
              Contact Information
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for all your legal needs. We're here to help you with expert advice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Details */}
            <div className="space-y-6 md:space-y-8">
              <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Phone</h3>
                      <p className="text-lg text-muted-foreground">7037455191</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for urgent matters</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">WhatsApp</h3>
                      <p className="text-lg text-muted-foreground">7037455191</p>
                      <p className="text-sm text-muted-foreground">Quick legal consultation via WhatsApp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Office Address</h3>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=PQJG%2B28+Hapur%2C+Uttar+Pradesh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-base md:text-lg hover:text-primary transition-colors hover:underline cursor-pointer"
                      >
                        Chamber no. 4, Tehsil Compound, Teacher Colony, Hapur, Uttar Pradesh 245101
                      </a>
                      <p className="text-sm text-muted-foreground">Click to view on Google Maps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              {/* If there is a contact form or other content, it can be added here */}
            </div>
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
                <div className="text-base md:text-lg">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=PQJG%2B28+Hapur%2C+Uttar+Pradesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors hover:underline"
                  >
                    Chamber no. 4, Tehsil Compound, Teacher Colony, Hapur, Uttar Pradesh 245101
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg md:text-xl">Quick Links</h4>
              <div className="space-y-3 text-gray-300">
                <div><a href="/" className="hover:text-white transition-colors text-lg">Home</a></div>
                <div><a href="/services" className="hover:text-white transition-colors text-lg">Services</a></div>
                <div><a href="/about" className="hover:text-white transition-colors text-lg">About</a></div>
                <div><a href="/book-consultant" className="hover:text-white transition-colors text-lg">Book Now</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg md:text-xl">Connect</h4>
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

export default Index;
