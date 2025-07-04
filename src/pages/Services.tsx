import { Scale, Award, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Property Documentation",
      description: "Comprehensive documentation services for property transactions, ensuring legal compliance and accuracy.",
      icon: Scale
    },
    {
      id: 2,
      title: "Legal Consultation",
      description: "Expert legal advice and consultation for property-related matters, helping you make informed decisions.",
      icon: Award
    },
    {
      id: 3,
      title: "Dispute Resolution",
      description: "Effective dispute resolution services to protect your property rights and resolve conflicts efficiently.",
      icon: Users
    }
  ];

  const galleryImages = [
    "/lovable-uploads/315b4579-da29-4b6d-931b-adccdbf5ccee.png",
    "/lovable-uploads/66396184-1e67-4743-938c-cd5ecac431d9.png",
    "/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Expert Legal Services for Your Property Needs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive legal solutions for property documentation, consultation, and dispute resolution
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Card key={service.id} className="p-4 md:p-6 text-center">
                <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Why Choose Our Legal Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Decades of Experience
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                With over 33 years of legal practice, Advocate Ajay Shankar Sharma brings unparalleled expertise to every case.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Client-Centric Approach
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                We prioritize your needs and provide personalized legal solutions tailored to your unique situation.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Comprehensive Legal Support
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                From property documentation to dispute resolution, we offer a full range of legal services to meet all your needs.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Proven Track Record
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Our commitment to excellence and successful outcomes has earned us the trust of clients throughout Hapur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-48 object-cover object-center" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Legal Assistance?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact us today for expert property legal consultation and documentation services
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/book-consultant">
              <Button size="lg" variant="secondary" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full md:w-auto">
                Book Consultation
              </Button>
            </a>
            <a href="tel:7037455191">
              <Button size="lg" className="font-semibold px-6 md:px-8 py-3 md:py-4 border-white text-white bg-transparent border-2 w-full md:w-auto">
                <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
