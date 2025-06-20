
import { Phone, MessageCircle, Clock, User, Edit, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const News = () => {
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
  const { toast } = useToast();

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
              <a href="/news" className="text-primary font-bold text-sm xl:text-base">News & Updates</a>
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

      {/* News & Updates Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-6">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary">
                News & Updates
              </h1>
              {!isAdminLoggedIn && (
                <Button 
                  onClick={() => setShowAdminLogin(!showAdminLogin)}
                  variant="outline"
                  size="sm"
                  className="text-xs md:text-sm"
                >
                  <Edit className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  Admin
                </Button>
              )}
              {isAdminLoggedIn && (
                <Button 
                  onClick={() => setIsAdminLoggedIn(false)}
                  variant="outline"
                  size="sm"
                  className="text-xs md:text-sm"
                >
                  Logout
                </Button>
              )}
            </div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Stay updated with our latest legal services and announcements
            </p>
          </div>

          {/* Admin Login Form */}
          {showAdminLogin && !isAdminLoggedIn && (
            <div className="max-w-md mx-auto mb-8 md:mb-12">
              <Card className="border-2 border-primary/30">
                <CardContent className="p-4 md:p-6">
                  <form onSubmit={handleAdminLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="admin-username" className="text-sm md:text-base">Username</Label>
                      <Input
                        id="admin-username"
                        type="text"
                        value={adminUsername}
                        onChange={(e) => setAdminUsername(e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="admin-password" className="text-sm md:text-base">Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button type="submit" className="flex-1 text-sm md:text-base">Login</Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowAdminLogin(false)}
                        className="text-sm md:text-base"
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
            <div className="max-w-2xl mx-auto mb-8 md:mb-12">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Add New News/Update</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="news-title" className="text-sm md:text-base">Title</Label>
                      <Input
                        id="news-title"
                        type="text"
                        value={newNewsTitle}
                        onChange={(e) => setNewNewsTitle(e.target.value)}
                        placeholder="Enter news title"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="news-content" className="text-sm md:text-base">Content</Label>
                      <Textarea
                        id="news-content"
                        value={newNewsContent}
                        onChange={(e) => setNewNewsContent(e.target.value)}
                        placeholder="Enter news content"
                        rows={4}
                        className="mt-1"
                      />
                    </div>
                    <Button onClick={handleAddNews} className="w-full text-sm md:text-base">
                      <Plus className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      Add News
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* News Items */}
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.content}</p>
                    </div>
                    {isAdminLoggedIn && (
                      <Button
                        onClick={() => handleDeleteNews(item.id)}
                        variant="outline"
                        size="sm"
                        className="ml-4 text-red-600 hover:bg-red-50"
                      >
                        <X className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
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

export default News;
