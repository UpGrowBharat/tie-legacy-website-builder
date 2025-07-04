
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Sale Deed is the Most Crucial Legal Document in Property Transactions",
      excerpt: "In the Indian real estate market, property frauds and legal disputes are more common than ever. Whether you're buying a plot, flat, or commercial shop — the Sale Deed is the most important legal document that ensures you are the lawful owner of the property.",
      author: "Advocate Ajay Shankar Sharma",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "/lovable-uploads/315b4579-da29-4b6d-931b-adccdbf5ccee.png",
      tags: ["Property Law", "Sale Deed", "Legal Advice"]
    },
    {
      id: 2,
      title: "Common Property Documentation Mistakes That Can Cost You Lakhs",
      excerpt: "Property documentation errors are more common than you think. Learn about the most frequent mistakes property buyers make and how proper legal guidance can save you from financial losses.",
      author: "Advocate Ajay Shankar Sharma", 
      date: "December 10, 2024",
      readTime: "4 min read",
      image: "/lovable-uploads/66396184-1e67-4743-938c-cd5ecac431d9.png",
      tags: ["Documentation", "Property Law", "Legal Tips"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Legal Insights & Updates
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with expert legal advice and insights from Hapur's most trusted property law expert
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:gap-12 max-w-4xl mx-auto">
            {blogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 leading-tight hover:text-primary/80 transition-colors">
                        {blog.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {blog.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {blog.date}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {blog.readTime}
                        </div>
                      </div>
                      
                      <Button className="w-full font-semibold group">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Stay Updated with Legal Insights
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest updates on property law, legal procedures, and expert advice delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-6 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Legal Consultation?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have questions about property law or need expert legal advice? Contact us today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" variant="secondary" className="font-semibold px-8 py-4">
                Contact Us
              </Button>
            </a>
            <a href="tel:7037455191">
              <Button size="lg" variant="outline" className="font-semibold px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Call: 7037455191
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
