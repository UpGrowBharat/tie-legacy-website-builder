
import { Phone, MessageCircle, Scale, BookOpen, FileText, Clock, Star, ChevronDown, Award, Users, MapPin, Search, Receipt, Gavel, Laptop, User, Edit, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [news, setNews] = useState([
    {
      id: 1,
      title: "New Online Consultation Services Available",
      content: "We are now offering video consultation services for clients across India.",
      date: "2024-06-10"
    },
    {
      id: 2,
      title: "Digital Document Verification Launched",
      content: "Experience faster property document verification with our new digital process.",
      date: "2024-06-08"
    }
  ]);
  const [newNewsTitle, setNewNewsTitle] = useState("");
  const [newNewsContent, setNewNewsContent] = useState("");
  const [editingNews, setEditingNews] = useState<number | null>(null);
  const { toast } = useToast();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUsername === "admin" && adminPassword === "admin@1212") {
      setIsAdminLoggedIn(true);
      setShowAdminLogin(false);
      toast({
        title: "Login Successful",
        description: "You can now manage news & updates.",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAddNews = () => {
    if (newNewsTitle && newNewsContent) {
      const newNewsItem = {
        id: Date.now(),
        title: newNewsTitle,
        content: newNewsContent,
        date: new Date().toISOString().split('T')[0]
      };
      setNews([newNewsItem, ...news]);
      setNewNewsTitle("");
      setNewNewsContent("");
      toast({
        title: "News Added",
        description: "New news item has been added successfully.",
      });
    }
  };

  const handleDeleteNews = (id: number) => {
    setNews(news.filter(item => item.id !== id));
    toast({
      title: "News Deleted",
      description: "News item has been deleted successfully.",
    });
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
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#consultation" className="text-foreground hover:text-primary transition-colors font-medium">Book Consultation</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">FAQs</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
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

      {/* Enhanced Hover Consultant Widget */}
      <div className="fixed left-6 bottom-6 z-40 hidden lg:block group">
        {/* Compact Button - Always Visible */}
        <div className="w-16 h-16 bg-primary rounded-full shadow-lg cursor-pointer flex items-center justify-center group-hover:opacity-0 transition-all duration-300">
          <Phone className="w-8 h-8 text-white" />
        </div>
        
        {/* Expanded Card - Shows on Hover */}
        <Card className="absolute bottom-0 left-0 w-80 shadow-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-5">
              <div className="w-16 h-20 rounded-lg overflow-hidden border-2 border-primary shadow-lg">
                <img 
                  src="/lovable-uploads/fe348bb1-57a0-40f4-9d2e-b9bd47f61a16.png" 
                  alt="Advocate Ajay Shankar Sharma" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h4 className="font-bold text-base text-primary">Advocate Ajay Shankar Sharma</h4>
                <p className="text-sm text-muted-foreground font-medium">33+ Years Experience</p>
                <p className="text-sm text-muted-foreground">Based in Hapur</p>
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 mb-5">
              <p className="text-sm text-primary font-bold mb-2">🏛️ Legacy Since 1950s</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Get immediate legal assistance. Expert advice on property matters available now.</p>
            </div>
            <div className="space-y-3">
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button size="sm" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 font-semibold">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hero Section */}
      <section id="home" className="py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
                Hapur's Trusted Legal Partner
                <span className="block text-red-700 text-4xl md:text-5xl mt-2">Since the 1950s</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                75+ years of trust, 33+ years of legal expertise. Now offering comprehensive online property legal services from Hapur.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold px-8 py-4">
                  <Scale className="w-5 h-5 mr-2" />
                  Get Legal Help Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg font-semibold px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 7037455191
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-96 overflow-hidden">
                  <img 
                    src="/lovable-uploads/fe348bb1-57a0-40f4-9d2e-b9bd47f61a16.png" 
                    alt="Advocate Ajay Shankar Sharma - Current Legal Expert" 
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg font-bold text-primary">Advocate Ajay Shankar Sharma</p>
                <p className="text-sm text-muted-foreground font-medium">33+ Years Experience • Hapur Based</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Advocate Ajay Shankar Sharma
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                75+ Years of Legal Tradition | 33+ Years of Experience
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl mb-8">
                In the heart of Hapur lies a name synonymous with trust, tradition, and legal excellence — Advocate Ajay Shankar Sharma. With a family legacy dating back to the 1950s and over 33 years of personal experience, he stands as one of the most respected names in property legal services in the region.
              </p>
              
              <p className="text-lg mb-8">
                If you're seeking property-related legal assistance in Hapur, you're not just hiring a lawyer — you're connecting with three generations of legal wisdom and a name that carries a prestigious legacy.
              </p>

              <div className="bg-primary/5 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">🔹 A Legacy That Began in the 1950s</h3>
                <p className="text-lg leading-relaxed mb-6">
                  The journey of legal service for this family began over 75 years ago with Advocate Sharma's late father, who proudly held License No. 1 in Hapur. A pioneer in the region's legal field, he laid the foundation for a legal dynasty rooted in ethics, expertise, and client trust.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, Advocate Ajay Shankar Sharma proudly carries this heritage forward, providing a unique blend of traditional legal insight and modern digital convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section with Family Photos */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Generations of Legal Tradition
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our family has been in the legal service sector since the 1950s. Today, Advocate Ajay Shankar Sharma continues this legacy, 
              combining traditional legal expertise with digital innovation to serve the entire region from Hapur.
            </p>
          </div>
          
          {/* Heritage Timeline with Passport Size Photos */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-32 h-40 mx-auto mb-6 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/07000678-35ac-4da5-95ff-0e13b8936274.png" 
                  alt="Late Father - License No. 1 Holder" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Late Father</h3>
              <p className="text-muted-foreground text-lg">License No. 1 Holder</p>
              <p className="text-muted-foreground">Founder of Legal Heritage</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-40 mx-auto mb-6 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/5958f14a-430e-49aa-90f7-633cd71a42e6.png" 
                  alt="Late Uncle - Legal Family Heritage" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Late Uncle</h3>
              <p className="text-muted-foreground text-lg">Family Legal Tradition</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-40 mx-auto mb-6 rounded-lg overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src="/lovable-uploads/fe348bb1-57a0-40f4-9d2e-b9bd47f61a16.png" 
                  alt="Current Advocate" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Advocate Ajay Shankar Sharma</h3>
              <p className="text-muted-foreground text-lg">Current Legal Expert</p>
            </div>
          </div>

          {/* Personal Touch Section */}
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-6">Three Generations of Trust - Serving from Hapur</h3>
              <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                The tradition that began in the 1950s is now carried forward by Advocate Ajay Shankar Sharma from Hapur, 
                fulfilling all your property-related legal needs with the same dedication and expertise.
              </p>
              <div className="flex justify-center items-center space-x-12">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-red-700 mr-3" />
                  <span className="text-lg font-semibold">License No. 1 Legacy</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <span className="text-lg font-semibold">Hapur Office Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                News & Updates
              </h2>
              {!isAdminLoggedIn && (
                <Button 
                  onClick={() => setShowAdminLogin(!showAdminLogin)}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Admin
                </Button>
              )}
              {isAdminLoggedIn && (
                <Button 
                  onClick={() => setIsAdminLoggedIn(false)}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Logout
                </Button>
              )}
            </div>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest legal services and announcements
            </p>
          </div>

          {/* Admin Login Form */}
          {showAdminLogin && !isAdminLoggedIn && (
            <div className="max-w-md mx-auto mb-12">
              <Card className="border-2 border-primary/30">
                <CardContent className="p-6">
                  <form onSubmit={handleAdminLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="admin-username">Username</Label>
                      <Input
                        id="admin-username"
                        type="text"
                        value={adminUsername}
                        onChange={(e) => setAdminUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="admin-password">Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button type="submit" className="flex-1">Login</Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowAdminLogin(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Admin Add News Form */}
          {isAdminLoggedIn && (
            <div className="max-w-2xl mx-auto mb-12">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Add New News/Update</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="news-title">Title</Label>
                      <Input
                        id="news-title"
                        type="text"
                        value={newNewsTitle}
                        onChange={(e) => setNewNewsTitle(e.target.value)}
                        placeholder="Enter news title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="news-content">Content</Label>
                      <Textarea
                        id="news-content"
                        value={newNewsContent}
                        onChange={(e) => setNewNewsContent(e.target.value)}
                        placeholder="Enter news content"
                        rows={4}
                      />
                    </div>
                    <Button onClick={handleAddNews} className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add News
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* News Items */}
          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                    {isAdminLoggedIn && (
                      <Button
                        onClick={() => handleDeleteNews(item.id)}
                        variant="outline"
                        size="sm"
                        className="ml-4 text-red-600 hover:bg-red-50"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {new Date(item.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Consultation with Advocate Photo */}
      <section id="consultation" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Online Legal Assistance – At Your Service from Hapur
              </h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Wherever you live – legal help is just one click away. Book consultation via phone, video call, or WhatsApp. 
                Get verified documents without visiting our Hapur office.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call Advocate Now – 7037455191
              </Button>
            </div>
            <div className="text-center">
              <div className="inline-block relative">
                <div className="w-48 h-64 mx-auto rounded-xl overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="/lovable-uploads/fe348bb1-57a0-40f4-9d2e-b9bd47f61a16.png" 
                    alt="Advocate Ajay Shankar Sharma - Available for Online Consultation" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-base font-bold">
                  ● Available Now
                </div>
              </div>
              <div className="mt-8 bg-white/10 backdrop-blur rounded-xl p-6">
                <p className="font-bold text-xl">Advocate Ajay Shankar Sharma</p>
                <p className="text-base opacity-90 mt-2">Available for Online Consultation</p>
                <p className="text-base opacity-90">Based in Hapur, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-bold text-primary text-lg">{testimonial.name}</div>
                  <div className="text-base text-muted-foreground flex items-center mt-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    {testimonial.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-bold text-primary text-xl">{faq.question}</h3>
                  <ChevronDown className={`w-6 h-6 text-primary transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-8">
                    <p className="text-muted-foreground text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Need Legal Clarity for Your Property?
          </h2>
          <p className="text-2xl mb-10 opacity-90">
            Talk to a trusted legal expert in just 1 click.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Advocate Now – 7037455191
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg font-semibold px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-slate-900 text-white">
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
                <div><a href="/services" className="hover:text-white transition-colors text-lg">Services</a></div>
                <div><a href="#about" className="hover:text-white transition-colors text-lg">About</a></div>
                <div><a href="#faq" className="hover:text-white transition-colors text-lg">FAQ</a></div>
                <div><a href="#consultation" className="hover:text-white transition-colors text-lg">Book Now</a></div>
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

export default Index;
