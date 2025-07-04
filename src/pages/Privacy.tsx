
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, RotateCcw, Phone, MessageCircle, ArrowLeft, MapPin } from "lucide-react";

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
                    At Tiewalavakil, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you use our website or legal services.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">📄 Information We Collect</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Personal Information:</strong> Name, mobile number, email, address, and ID proofs.</li>
                  <li><strong>Property Details:</strong> Land records, ownership documents, sale deed, etc.</li>
                  <li><strong>Service Usage Info:</strong> Pages you visit, forms you submit, and documents uploaded.</li>
                  <li><strong>Communication Details:</strong> When you call, email, or chat with us.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">🔍 How We Use Your Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide legal advice, document verification, and registration services.</li>
                  <li>Prepare or draft your legal documents as requested.</li>
                  <li>Schedule appointments with government offices.</li>
                  <li>Send updates and communicate regarding your case.</li>
                  <li>Improve our website and services.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">🔐 Data Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We take all necessary steps to protect your data. Your information is stored securely and only shared with trusted legal partners or government platforms when required for service delivery. We do not sell or rent your personal information to anyone.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">📤 Sharing Your Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Sub-registrar offices or government bodies (only if required).</li>
                  <li>Advocates or legal professionals working on your case.</li>
                  <li>Our trusted support staff under confidentiality.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">✅ Your Rights</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Request access to the data we hold about you.</li>
                  <li>Ask us to update or correct incorrect information.</li>
                  <li>Ask us to delete your data (except where legally required to keep it).</li>
                </ul>
              </div>
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
                  <h3 className="text-xl font-bold text-primary mb-4">Sale Deed - The Most Crucial Document</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Why Sale Deed is the Most Crucial Legal Document in Property Transactions – Explained by Hapur's Trusted Legal Expert
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In the Indian real estate market, property frauds and legal disputes are more common than ever. Whether you're buying a plot, flat, or commercial shop — the Sale Deed is the most important legal document that ensures you are the lawful owner of the property. At Tiewalavakil, Hapur, we've seen dozens of cases where people assumed they owned a property just because they paid money — but had no valid Sale Deed to prove it.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Let's understand why this single document can either secure your ownership — or cost you everything.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">📜 What is a Sale Deed?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Sale Deed (विक्रय पत्र) is a legal document that officially transfers ownership of a property from the seller to the buyer. It is executed after full payment has been made and is registered at the Sub-Registrar Office. Without a registered Sale Deed, your transaction holds no legal value — even if other documents exist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">🚨 Common Misconceptions</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Many property buyers in smaller cities like Hapur, Pilkhuwa, and nearby areas often think that documents like Power of Attorney (POA), Agreement to Sell, or affidavits are enough to claim ownership. But according to Supreme Court rulings, only a registered Sale Deed is considered conclusive proof of ownership.
                </p>
                <p className="text-primary font-semibold">
                  Only a Registered Sale Deed gives you complete legal ownership of the property.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">✅ Why You Must Get a Sale Deed Registered</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Legal Ownership Guarantee:</strong> The Sale Deed is the only document that confirms legal ownership.</li>
                  <li><strong>Protects Against Future Disputes:</strong> Without it, someone else may claim the property later, especially in disputed land.</li>
                  <li><strong>Essential for Mutation & Loan Processing:</strong> You can't update municipal records (mutation) or apply for a loan without it.</li>
                  <li><strong>Accepted in All Courts:</strong> It is admissible in court as the final evidence of your ownership.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">🧾 Services Offered by Tiewalavakil</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Tiewalavakil, led by Advocate Ajay Shankar Sharma, we provide the following legal services in Hapur:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Sale Deed Drafting & Registration</li>
                  <li>Gift Deed, Lease Deed, POA, Will</li>
                  <li>Mutation / Name Transfer</li>
                  <li>Stamp Duty Case Resolution</li>
                  <li>Property Document Verification</li>
                  <li>Legal Consultancy for Property Matters</li>
                  <li>Online Legal Help & Document Drafting</li>
                </ul>
                <p className="text-primary font-semibold mt-4">
                  📍 Trusted by hundreds in Hapur for property-related legal work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">📌 Real Case from Hapur – Why One Buyer Lost Their Property</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A client from Hapur came to us after paying ₹12 lakhs for a residential plot. He had an unregistered "Agreement to Sell" and a notarized affidavit, but the seller disappeared. Since there was no registered Sale Deed, the buyer could not claim ownership, mutation was denied, and he lost his hard-earned money.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Had he visited us earlier, we would have ensured the Sale Deed was properly executed and registered — protecting his rights legally.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">🖋️ Conclusion: Don't Buy Property Without a Sale Deed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are buying property in Hapur, Pilkhuwa, Simbhaoli, or anywhere in Uttar Pradesh, always ensure your Sale Deed is custom-drafted, legally verified, and registered by a professional. This small legal step protects your big investment for a lifetime.
                </p>
              </div>
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
            📞 Contact Hapur's Most Trusted Legal Expert
          </h2>
          <p className="text-lg mb-6">
            Tiewalavakil – Advocate Ajay Shankar Sharma
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
                WhatsApp: 7037455191
              </Button>
            </a>
          </div>
          <p className="text-sm mt-4 opacity-90">
            🌐 Website: www.tiewalavakil.in
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

export default Privacy;
