
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
              Contact Us – Get Trusted Legal Help in Hapur
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Have a legal query or need expert assistance with your property documents? We're here to help. At Tiewalavakil, we offer professional legal services backed by 33+ years of experience in property law, documentation, registration, mutation, and more.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Whether you need a Sale Deed drafted, help with Stamp Duty issues, or advice on name transfer (mutation)—you can easily reach out to us through phone, WhatsApp, or by visiting our office in Hapur.
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
                📍 Office Location
              </h2>
              
              <Card className="p-4 md:p-6 mb-6 border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary">Tiewalavakil – Advocate Ajay Shankar Sharma</h3>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Sub-Registrar Office Road,</p>
                        <p>Near Tehsil, Hapur, Uttar Pradesh – 245101</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">🕘 Office Hours:</h3>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Monday to Saturday: 10:00 AM – 5:30 PM</p>
                  <p className="text-sm text-muted-foreground">(Closed on Sundays and government holidays)</p>
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <h3 className="text-xl font-bold text-primary">📱 Contact Details</h3>
                
                <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-primary">📞 Call Us: 7037455191</h4>
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
                        <h4 className="text-lg md:text-xl font-bold text-primary">💬 WhatsApp: 7037455191</h4>
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
                        <h4 className="text-lg md:text-xl font-bold text-primary">📧 Email: tiewalavakil@gmail.com</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">Send detailed queries via email</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-primary">🌐 Website: www.tiewalavakil.in</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">Visit our website for more information</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">💼 Services We Provide:</h3>
                <div className="grid md:grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-muted-foreground">Sale Deed (Vikray Patra) Drafting & Registration</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-muted-foreground">Gift Deed, Lease Deed, Will, and Power of Attorney</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-muted-foreground">Mutation / Name Transfer</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-muted-foreground">Property Document Verification</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-muted-foreground">Stamp Duty Case Resolution</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-muted-foreground">Legal Advice & Consultation</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-muted-foreground">Online Legal Assistance Available</p>
                  </div>
                </div>
              </div>
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

                  <div className="mt-8 pt-6 border-t border-muted">
                    <p className="text-center text-muted-foreground text-sm">
                      Tiewalavakil – Delivering Legally Accurate, Timely, and Trusted Legal Services in Hapur Since 1950s.
                    </p>
                  </div>
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
            Don't wait for legal issues to become complicated. Contact us today for expert legal advice and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="tel:7037455191">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Call Now: 7037455191
              </Button>
            </a>
            <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
