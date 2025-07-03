import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, RotateCcw, Phone, MessageCircle, ArrowLeft } from "lucide-react";

const Privacy = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  const renderContent = () => {
    switch (activeTab) {
      case "privacy":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Privacy Policy</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <img 
                src="/lovable-uploads/2561dbe8-f8bd-4677-9fc9-e1cc79f71abe.png" 
                alt="Privacy Protection" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Your Privacy Matters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At TiewalaVakil, we are committed to protecting your personal information and ensuring your privacy is maintained throughout our legal consultation services.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you book a consultation, fill out forms, or communicate with our legal team. This includes your name, contact information, and case details necessary for providing legal services.
              </p>

              <h3 className="text-xl font-bold text-primary">How We Use Your Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your information is used solely for providing legal consultation services, maintaining client records as required by law, and communicating with you about your legal matters. We maintain strict confidentiality as per legal professional standards.
              </p>

              <h3 className="text-xl font-bold text-primary">Data Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All client information is treated with the highest level of confidentiality.
              </p>

              <h3 className="text-xl font-bold text-primary">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                For any privacy-related concerns, please contact Advocate Ajay Shankar Sharma at 7037455191 or visit our office at Chamber no. 4, Tehsil Compound Hapur - 245101.
              </p>
            </div>
          </div>
        );

      case "disclaimer":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Legal Disclaimer</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <img 
                src="/lovable-uploads/315b4579-da29-4b6d-931b-adccdbf5ccee.png" 
                alt="Legal Documentation" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Important Legal Notice</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The information provided on this website is for general informational purposes only and does not constitute legal advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">No Attorney-Client Relationship</h3>
              <p className="text-muted-foreground leading-relaxed">
                Viewing this website or contacting us does not create an attorney-client relationship. An attorney-client relationship is established only after a formal consultation and mutual agreement.
              </p>

              <h3 className="text-xl font-bold text-primary">Legal Advice Disclaimer</h3>
              <p className="text-muted-foreground leading-relaxed">
                The content on this website should not be considered as legal advice for any specific case. Each legal matter is unique and requires individual assessment. Always consult with a qualified legal professional for advice specific to your situation.
              </p>

              <h3 className="text-xl font-bold text-primary">Accuracy of Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to keep the information up-to-date and accurate, we make no representations or warranties about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
              </p>

              <h3 className="text-xl font-bold text-primary">Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                TiewalaVakil and Advocate Ajay Shankar Sharma shall not be liable for any losses or damages arising from the use of information on this website or any actions taken based on such information.
              </p>
            </div>
          </div>
        );

      case "return":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <RotateCcw className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Return Policy</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <img 
                src="/lovable-uploads/66396184-1e67-4743-938c-cd5ecac431d9.png" 
                alt="Client Satisfaction" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Client Satisfaction Guarantee</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to providing quality legal services and ensuring client satisfaction in all our consultation services.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Consultation Fees</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our consultation fees are as follows: Phone consultation - ₹500, Video consultation - ₹800, WhatsApp consultation - ₹300, and Document review - ₹1500. All fees are clearly communicated before service delivery.
              </p>

              <h3 className="text-xl font-bold text-primary">Refund Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consultation fees are generally non-refundable once the service has been provided. However, in cases where technical issues prevent the consultation from taking place, a full refund or rescheduling will be offered.
              </p>

              <h3 className="text-xl font-bold text-primary">Service Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                We ensure timely delivery of all legal services. If there are any delays or issues with service delivery, clients will be promptly notified and alternative arrangements will be made.
              </p>

              <h3 className="text-xl font-bold text-primary">Cancellation Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consultations can be cancelled or rescheduled up to 2 hours before the scheduled time without any penalty. Cancellations made within 2 hours may be subject to a cancellation fee.
              </p>

              <h3 className="text-xl font-bold text-primary">Contact for Concerns</h3>
              <p className="text-muted-foreground leading-relaxed">
                For any concerns regarding our services or policies, please contact us at 7037455191 or visit our office. We are committed to resolving any issues promptly and fairly.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
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
              <a href="/news" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">News & Updates</a>
              <a href="/privacy" className="text-sm xl:text-base text-primary font-medium">Privacy</a>
              <a href="/contact" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium">Contact Us</a>
            </nav>
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="/book-consultant">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs md:text-sm px-3 md:px-4 py-2">
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

      {/* Back to Home Button */}
      <div className="container mx-auto px-4 py-4">
        <a href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </a>
      </div>

      {/* Privacy Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab("privacy")}
              variant={activeTab === "privacy" ? "default" : "outline"}
              className="font-semibold"
            >
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </Button>
            <Button
              onClick={() => setActiveTab("disclaimer")}
              variant={activeTab === "disclaimer" ? "default" : "outline"}
              className="font-semibold"
            >
              <FileText className="w-4 h-4 mr-2" />
              Disclaimer
            </Button>
            <Button
              onClick={() => setActiveTab("return")}
              variant={activeTab === "return" ? "default" : "outline"}
              className="font-semibold"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Return Policy
            </Button>
          </div>

          {/* Content */}
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              {renderContent()}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions About Our Policies?
          </h2>
          <p className="text-lg mb-6">
            Contact Advocate Ajay Shankar Sharma for clarification on any legal matters or policies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7037455191">
              <Button size="lg" variant="secondary" className="font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call: 7037455191
              </Button>
            </a>
            <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="font-semibold border-white text-white hover:bg-white/10">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-amber-50 text-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/277f1b46-80f1-4bc3-85ff-7189eedb6bea.png" 
              alt="Tiewala Vakil Logo" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-slate-600 mb-4">
            Chamber no. 4, Tehsil Compound Hapur - 245101, Uttar Pradesh
          </p>
          <p className="text-slate-500">
            &copy; 2024 TiewalaVakil.in. All rights reserved. | A Legacy of Trust Since 1950s
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;