
import { Scale, Award, Users, Phone, FileText, Home, Shield, Clock, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const mainServices = [
    {
      id: 1,
      title: "Sale Deed (विक्रय पत्र)",
      description: "Complete Sale Deed drafting, verification, and registration services for property transactions",
      icon: FileText,
      details: [
        "Property document verification",
        "Sale deed drafting as per legal requirements",
        "Registration at Sub-Registrar office",
        "Stamp duty calculation and payment",
        "Legal compliance check"
      ]
    },
    {
      id: 2,
      title: "Gift Deed & Will",
      description: "Legal documentation for property transfer through gift or inheritance",
      icon: Home,
      details: [
        "Gift deed preparation and registration",
        "Will drafting and attestation",
        "Succession certificate assistance",
        "Property transfer documentation",
        "Legal heir verification"
      ]
    },
    {
      id: 3,
      title: "Mutation & Name Transfer",
      description: "Property mutation services for updating ownership records",
      icon: Users,
      details: [
        "Mutation application filing",
        "Revenue record updates",
        "Name transfer in municipal records",
        "Khatauni correction",
        "Property tax transfer"
      ]
    },
    {
      id: 4,
      title: "Power of Attorney",
      description: "Legal authorization documents for property matters",
      icon: Scale,
      details: [
        "General Power of Attorney drafting",
        "Special Power of Attorney for property",
        "Registration and notarization",
        "Revocation of POA",
        "Legal validity verification"
      ]
    },
    {
      id: 5,
      title: "Lease Deed",
      description: "Comprehensive lease agreement preparation and registration",
      icon: Shield,
      details: [
        "Residential lease deed",
        "Commercial lease agreement",
        "Rent agreement drafting",
        "Lease renewal documentation",
        "Tenant-landlord legal advice"
      ]
    },
    {
      id: 6,
      title: "Legal Consultation",
      description: "Expert legal advice for all property-related matters",
      icon: Award,
      details: [
        "Property dispute resolution",
        "Legal document review",
        "Title verification",
        "Court case assistance",
        "Legal notice drafting"
      ]
    }
  ];

  const additionalServices = [
    "Stamp Duty Case Resolution",
    "Property Document Verification",
    "Title Search & Verification",
    "NOC (No Objection Certificate)",
    "Affidavit Preparation",
    "Legal Notice Drafting",
    "Court Case Filing",
    "Registration Assistance"
  ];

  const whyChoosePoints = [
    {
      icon: Clock,
      title: "33+ Years Experience",
      description: "Decades of expertise in property law and documentation"
    },
    {
      icon: CheckCircle,
      title: "Legal Compliance",
      description: "All documents prepared as per latest legal requirements"
    },
    {
      icon: Star,
      title: "Trusted by Hundreds",
      description: "Successfully handled 1000+ property cases in Hapur"
    },
    {
      icon: Shield,
      title: "End-to-End Service",
      description: "From documentation to registration - complete assistance"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Document Review",
      description: "We review all your property documents thoroughly"
    },
    {
      step: "2",
      title: "Legal Drafting",
      description: "Prepare legally compliant documents as per requirements"
    },
    {
      step: "3",
      title: "Verification",
      description: "Verify all details and ensure legal compliance"
    },
    {
      step: "4",
      title: "Registration",
      description: "Complete registration process at government offices"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Complete Legal Services for Property Matters
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Expert legal documentation, registration, and consultation services by Advocate Ajay Shankar Sharma - 33+ years of trusted experience in Hapur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-consultant">
              <Button size="lg" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                Book Free Consultation
              </Button>
            </a>
            <a href="tel:7037455191">
              <Button size="lg" variant="outline" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                Call: 7037455191
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Core Legal Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mainServices.map((service) => (
              <Card key={service.id} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Process - Simple & Transparent
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Additional Legal Services
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-muted/50 p-4 rounded-lg text-center">
                <p className="text-sm md:text-base font-medium text-primary">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Why Choose Tiewalavakil?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, index) => (
              <Card key={index} className="p-4 md:p-6 text-center">
                <point.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Service Areas
          </h2>
          
          <div className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              We provide legal services across Hapur and nearby areas including:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Hapur", "Pilkhuwa", "Simbhaoli", "Garh", "Babugarh", "Dhaulana", "Khekra"].map((area, index) => (
                <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm md:text-base font-medium">
                  {area}
                </span>
              ))}
            </div>
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
            Contact Advocate Ajay Shankar Sharma today for expert property legal consultation and documentation services
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
