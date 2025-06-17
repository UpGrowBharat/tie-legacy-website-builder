
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "We will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
              <a href="/contact" className="text-primary font-bold text-sm xl:text-base">Contact Us</a>
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

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Get in touch with Hapur's most trusted legal expert. We're here to help with all your property legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary mb-6 md:mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-primary">Phone</h3>
                        <p className="text-muted-foreground text-base md:text-lg">7037455191</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Available 24/7 for urgent matters</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-primary">WhatsApp</h3>
                        <p className="text-muted-foreground text-base md:text-lg">7037455191</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Quick legal consultation via WhatsApp</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-primary">Email</h3>
                        <p className="text-muted-foreground text-base md:text-lg">support@tiewalavakil.in</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Send detailed queries via email</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-primary">Office Location</h3>
                        <p className="text-muted-foreground text-base md:text-lg">Hapur, Uttar Pradesh</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Visit us for in-person consultation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Advocate Photo */}
              <Card className="p-4 md:p-6 bg-primary/5">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-16 h-20 md:w-20 md:h-24 rounded-lg overflow-hidden border-2 border-primary shadow-lg">
                      <img 
                        src="/lovable-uploads/c1baa9e5-2320-40a7-9fd6-d0782076aa21.png" 
                        alt="Advocate Ajay Shankar Sharma" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-primary">Advocate Ajay Shankar Sharma</h3>
                      <p className="text-sm md:text-base text-muted-foreground">33+ Years Experience</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Available for immediate consultation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-primary/30">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm md:text-base">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          placeholder="Enter your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm md:text-base">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                          placeholder="Enter your phone number"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm md:text-base">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter your email address"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm md:text-base">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required
                        placeholder="Enter the subject of your inquiry"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm md:text-base">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        placeholder="Please describe your legal issue or inquiry in detail..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" className="w-full text-base md:text-lg font-semibold py-3 md:py-4">
                      <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Office Hours & Availability
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Regular Hours</h3>
                <p className="text-muted-foreground mb-2 text-sm md:text-base">Monday - Saturday</p>
                <p className="text-base md:text-lg font-semibold">9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary">
              <CardContent className="p-4 md:p-6">
                <Phone className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Emergency</h3>
                <p className="text-muted-foreground mb-2 text-sm md:text-base">24/7 Available</p>
                <p className="text-base md:text-lg font-semibold">Call: 7037455191</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-2 text-sm md:text-base">Quick Response</p>
                <p className="text-base md:text-lg font-semibold">Within 30 minutes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Legal Help?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait for legal issues to become complicated. Contact us today for expert legal advice and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Call Now: 7037455191
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              WhatsApp Now
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
              <div className="flex space-x-4">
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

export default Contact;
