
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank You for Contacting Us!",
      description: "Your message has been sent successfully. We will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    // Redirect to homepage after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
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
              <a href="/blog" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Blog</a>
              <a href="/privacy" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Privacy</a>
              <a href="/contact" className="text-primary font-bold text-sm xl:text-base">Contact Us</a>
            </nav>
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="/book-consultant">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
                  <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
              📞 Contact Us – Get Trusted Legal Help in Hapur
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Have a legal query or need expert assistance with your property documents? We're here to help. At Tiewalavakil, we offer professional legal services backed by 33+ years of experience in property law, documentation, registration, mutation, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
            💼 Services We Provide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <Card className="p-4 text-center hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary mb-2">Sale Deed Drafting & Registration</h3>
              </CardContent>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary mb-2">Gift Deed, Lease Deed, Will, and Power of Attorney</h3>
              </CardContent>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary mb-2">Mutation / Name Transfer</h3>
              </CardContent>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary mb-2">Property Document Verification</h3>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-4 text-center hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary mb-2">Stamp Duty Case Resolution</h3>
              </CardContent>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary mb-2">Legal Advice & Consultation</h3>
              </CardContent>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary mb-2">Online Legal Assistance Available</h3>
              </CardContent>
            </Card>
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
                📍 Office Location
              </h2>
              
              <Card className="p-6 mb-6 bg-primary/5">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-primary mb-4">Tiewalavakil – Advocate Ajay Shankar Sharma</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center text-lg">
                      <MapPin className="w-5 h-5 mr-3 text-primary" />
                      Sub-Registrar Office Road, Near Tehsil, Hapur, Uttar Pradesh – 245101
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-primary">🕘 Office Hours</h3>
                        <p className="text-muted-foreground text-base md:text-lg">Monday to Saturday: 10:00 AM – 5:30 PM</p>
                        <p className="text-xs md:text-sm text-muted-foreground">(Closed on Sundays and government holidays)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-primary">📞 Call Us</h3>
                        <p className="text-muted-foreground text-base md:text-lg">7037455191</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Available for urgent matters</p>
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
                        <h3 className="text-lg md:text-xl font-bold text-primary">💬 WhatsApp</h3>
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
                        <h3 className="text-lg md:text-xl font-bold text-primary">📧 Email</h3>
                        <p className="text-muted-foreground text-base md:text-lg">tiewalavakil@gmail.com</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Send detailed queries via email</p>
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
                      <p className="text-xs md:text-sm text-primary font-semibold">🌐 Website: www.tiewalavakil.in</p>
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
                    📩 Send Us Your Query
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Have a question? Fill out the contact form below or send us a message on WhatsApp. Our team will get back to you as soon as possible.
                  </p>
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

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Legal Help?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you need a Sale Deed drafted, help with Stamp Duty issues, or advice on name transfer (mutation)—you can easily reach out to us through phone, WhatsApp, or by visiting our office in Hapur.
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
          <p className="text-sm mt-4 opacity-75">
            Tiewalavakil – Delivering Legally Accurate, Timely, and Trusted Legal Services in Hapur Since 1950s.
          </p>
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

export default Contact;
