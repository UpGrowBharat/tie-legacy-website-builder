
import { Phone, MessageCircle, Scale, BookOpen, FileText, Clock, Star, ChevronDown, Award, Users, MapPin, Search, Receipt, Gavel, Laptop, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const services = [
    { icon: FileText, title: "Sale Deed / Property Registry", desc: "Complete property registration with legal compliance" },
    { icon: FileText, title: "Gift Deed", desc: "Transfer property as gift with proper documentation" },
    { icon: FileText, title: "Agreement to Sell", desc: "Draft legally binding sale agreements" },
    { icon: FileText, title: "Power of Attorney", desc: "General & specific POA drafting and registration" },
    { icon: FileText, title: "Will Drafting & Registration", desc: "Secure your family's future with proper will documentation" },
    { icon: Search, title: "Property Document Verification", desc: "Thorough verification of property documents" },
    { icon: FileText, title: "Mutation / Name Transfer", desc: "Transfer property ownership in revenue records" },
    { icon: Receipt, title: "Stamp Duty Calculator & Help", desc: "Calculate and manage stamp duty requirements" },
    { icon: Gavel, title: "Legal Consultation", desc: "Expert advice on title, ownership and property matters" }
  ];

  const testimonials = [
    {
      name: "राकेश कुमार",
      location: "हापुड़",
      text: "बहुत अच्छी सेवा! प्रॉपर्टी रजिस्ट्रेशन में शुरू से अंत तक मदद मिली। बहुत भरोसेमंद।",
      rating: 5
    },
    {
      name: "प्रिया शर्मा", 
      location: "मेरठ",
      text: "पहली बार प्रॉपर्टी खरीदने में उनकी सलाह बहुत काम आई। पूरी प्रक्रिया आसान बना दी।",
      rating: 5
    },
    {
      name: "अमित गुप्ता",
      location: "गाजियाबाद", 
      text: "वीडियो कॉल पर कानूनी सलाह मिली। प्रोफेशनल सेवा, उचित फीस।",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "प्रॉपर्टी रजिस्ट्रेशन कैसे करें?",
      answer: "हम शुरू से अंत तक प्रॉपर्टी रजिस्ट्रेशन की सेवा देते हैं। बस हमें फोन करें, अपने दस्तावेज़ शेयर करें, और हम पूरी प्रक्रिया संभाल लेंगे।"
    },
    {
      question: "पावर ऑफ अटॉर्नी की वैधता क्या है?",
      answer: "पावर ऑफ अटॉर्नी तब तक वैध रहता है जब तक मूल व्यक्ति इसे रद्द न कर दे या उसकी मृत्यु न हो जाए।"
    },
    {
      question: "गिफ्ट डीड के जरिए प्रॉपर्टी कैसे ट्रांसफर करें?",
      answer: "गिफ्ट डीड के लिए उचित दस्तावेज़, स्टाम्प ड्यूटी और रजिस्ट्रेशन की जरूरत होती है। हम पूरी प्रक्रिया संभालते हैं।"
    },
    {
      question: "क्या अन्य राज्य से सलाह ले सकते हैं?",
      answer: "हां! हम फोन, वीडियो कॉल और व्हाट्सऐप के जरिए सलाह देते हैं। हमारी विशेषज्ञता पूरे भारत में लागू होती है।"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f4f63bd6-23e6-4a96-bfdc-15ea3fe45aa6.png" 
              alt="Tiewala Vakil Logo" 
              className="h-20 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#consultation" className="text-foreground hover:text-primary transition-colors font-medium">Book Consultation</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">FAQs</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground font-medium">License No. 1</div>
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

      {/* Enhanced Side Consultant Widget */}
      <div className="fixed left-6 bottom-6 z-40 hidden lg:block">
        <Card className="w-80 shadow-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-5">
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-primary shadow-lg">
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
              <p className="text-sm text-primary font-bold mb-2">🏛️ License No. 1 Legacy Holder</p>
              <p className="text-sm text-muted-foreground leading-relaxed">तत्काल कानूनी सहायता के लिए संपर्क करें। प्रॉपर्टी मामलों में विशेषज्ञ सलाह।</p>
            </div>
            <div className="space-y-3">
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                तुरंत कॉल करें
              </Button>
              <Button size="sm" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 font-semibold">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp पर बात करें
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
                हापुड़ का विश्वसनीय कानूनी साथी
                <span className="block text-red-700 text-4xl md:text-5xl mt-2">Since the 1950s</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                75+ साल का भरोसा, 33+ साल की कानूनी विशेषज्ञता। अब मिल रही है संपूर्ण ऑनलाइन प्रॉपर्टी कानूनी सेवाएं।
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold px-8 py-4">
                  <Scale className="w-5 h-5 mr-2" />
                  अभी कानूनी मदद लें
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg font-semibold px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 7037455191
                </Button>
              </div>
              <div className="mt-10 inline-flex items-center bg-red-700 text-white px-6 py-3 rounded-full">
                <Award className="w-6 h-6 mr-3" />
                <span className="font-bold text-lg">License No. 1 – Legacy Since 1950s</span>
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

      {/* Legacy Section with Family Photos */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              पीढ़ियों से चली आ रही कानूनी परंपरा
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              हमारा परिवार 1950 के दशक से कानूनी सेवा क्षेत्र में है। आज एडवोकेट अजय शंकर शर्मा इस विरासत को आगे बढ़ाते हुए, 
              पारंपरिक कानूनी विशेषज्ञता को डिजिटल नवाचार के साथ जोड़कर हापुड़ से पूरे क्षेत्र की सेवा कर रहे हैं।
            </p>
          </div>
          
          {/* Heritage Timeline with Larger Photos */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-52 h-52 mx-auto mb-6 rounded-xl overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/07000678-35ac-4da5-95ff-0e13b8936274.png" 
                  alt="Late Father - License No. 1 Holder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">स्वर्गीय पिता जी</h3>
              <p className="text-muted-foreground text-lg">कानूनी विरासत के संस्थापक</p>
            </div>
            
            <div className="text-center">
              <div className="w-52 h-52 mx-auto mb-6 rounded-xl overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/5958f14a-430e-49aa-90f7-633cd71a42e6.png" 
                  alt="Late Uncle - Legal Family Heritage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">स्वर्गीय चाचा जी</h3>
              <p className="text-muted-foreground text-lg">पारिवारिक कानूनी परंपरा</p>
            </div>

            <div className="text-center">
              <div className="w-52 h-52 mx-auto mb-6 rounded-xl overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src="/lovable-uploads/fe348bb1-57a0-40f4-9d2e-b9bd47f61a16.png" 
                  alt="Current Advocate" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">एडवोकेट अजय शंकर शर्मा</h3>
              <p className="text-muted-foreground text-lg">वर्तमान कानूनी विशेषज्ञ</p>
            </div>
          </div>

          {/* Personal Touch Section */}
          <div className="bg-muted/30 rounded-xl p-10">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-6">तीन पीढ़ियों का भरोसा - हापुड़ से सेवा</h3>
              <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                1950 के दशक से शुरू हुई इस परंपरा को आज एडवोकेट अजय शंकर शर्मा हापुड़ से संचालित करते हुए 
                आपकी सभी संपत्ति संबंधी कानूनी जरूरतों को पूरा करते हैं।
              </p>
              <div className="flex justify-center items-center space-x-12">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-red-700 mr-3" />
                  <span className="text-lg font-semibold">License No. 1 Legacy</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <span className="text-lg font-semibold">हापुड़ स्थित कार्यालय</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Hindi Services Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              हमारी सेवाएँ ✨
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto mb-8 leading-relaxed">
              हम आपके सभी प्रॉपर्टी व लीगल डॉक्यूमेंट्स से जुड़े कार्यों को सरल, सुरक्षित और भरोसेमंद तरीके से पूरा कराने के लिए प्रतिबद्ध हैं।
            </p>
            <p className="text-2xl font-bold text-primary">
              Tiewalavakil के साथ पाएँ एक ही जगह पर सम्पूर्ण समाधान! ✅
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Legal Documents Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-8">
                <FileText className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-6">📄 लीगल डॉक्यूमेंट्स तैयार करना व रजिस्ट्री सेवाएँ</h3>
                <ul className="text-base text-muted-foreground space-y-3 leading-relaxed">
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> विक्रय पत्र (Sale Deed)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> दान पत्र (Gift Deed)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> बंधक पत्र (Mortgage Deed)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> इकरारनामा (Agreement to Sale) — कब्जा / बिना कब्जा</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> विनिमय विलेख (Exchange Deed)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> पट्टा विलेख (Lease Deed)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> वसीयतनामा (Will)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> मुख्तयारनामा (Power of Attorney)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> गोदनामा (Adoption Deed)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> ट्रस्ट डीड (Trust Deed)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> कैंसिलेशन (Cancellation Deed)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> करेक्शन डीड (Correction Deed)</li>
                  <li className="flex items-start"><span className="text-primary font-bold mr-2">•</span> शादी रजिस्ट्रेशन (Marriage Registration)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Property Services Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/30">
              <CardContent className="p-8">
                <Search className="w-16 h-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-6">🏠 प्रॉपर्टी डॉक्यूमेंट्स सेवाएँ</h3>
                <ul className="text-base text-muted-foreground space-y-4 leading-relaxed">
                  <li className="flex items-start"><span className="text-blue-600 font-bold mr-2">•</span> Property Documents Verification</li>
                  <li className="flex items-start"><span className="text-blue-600 font-bold mr-2">•</span> Property Documents Drafting</li>
                  <li className="flex items-start"><span className="text-blue-600 font-bold mr-2">•</span> Property Documents Registration</li>
                </ul>
              </CardContent>
            </Card>

            {/* Special Services Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500/30">
              <CardContent className="p-8">
                <Gavel className="w-16 h-16 text-red-600 mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-6">🔍 अन्य विशेष सेवाएँ</h3>
                <ul className="text-base text-muted-foreground space-y-4 leading-relaxed">
                  <li className="flex items-start"><span className="text-red-600 font-bold mr-2">•</span> Mutation / Name Transfer (नामांतरण / नाम परिवर्तन)</li>
                  <li className="flex items-start"><span className="text-red-600 font-bold mr-2">•</span> Expert Resolution of Stamp Duty Case</li>
                  <li className="flex items-start"><span className="text-red-600 font-bold mr-2">•</span> Legal Consultancy for Property Matters</li>
                  <li className="flex items-start"><span className="text-red-600 font-bold mr-2">•</span> Online Legal Help & Documents Assistant</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-xl p-8 shadow-xl max-w-4xl mx-auto border-2 border-primary/20">
              <h4 className="text-2xl font-bold text-primary mb-6">
                आपके हर दस्तावेज़ की जरूरत का एकमात्र विश्वसनीय समाधान — Tiewalavakil के साथ।
              </h4>
              <div className="grid grid-cols-2 gap-6 text-lg text-muted-foreground">
                <div className="flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl mr-2">✅</span>
                  <span className="font-semibold">सटीक प्रक्रिया</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl mr-2">✅</span>
                  <span className="font-semibold">संपूर्ण दस्तावेजी तैयारी</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl mr-2">✅</span>
                  <span className="font-semibold">प्रोफेशनल सलाह</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl mr-2">✅</span>
                  <span className="font-semibold">विश्वसनीयता व गोपनीयता की गारंटी</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-red-700/30">
              <CardContent className="p-8">
                <BookOpen className="w-16 h-16 text-red-700 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Generations of Trust</h3>
                <p className="text-muted-foreground text-lg">Since 1950s</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-8">
                <Scale className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Experienced Legal Practice</h3>
                <p className="text-muted-foreground text-lg">Real courtroom & registry experience</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600/30">
              <CardContent className="p-8">
                <Laptop className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Online Legal Help</h3>
                <p className="text-muted-foreground text-lg">Serving from Hapur to all of India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Our Legal Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-primary mb-6 group-hover:text-red-700 transition-colors" />
                  <h3 className="font-bold text-primary mb-4 text-xl">{service.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{service.desc}</p>
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
                ऑनलाइन कानूनी सहायता – हापुड़ से आपकी सेवा में
              </h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                आप कहीं भी रहते हों – कानूनी मदद सिर्फ एक क्लिक की दूरी पर है। फोन, वीडियो कॉल या व्हाट्सऐप के जरिए 
                परामर्श बुक करें। हमारे हापुड़ कार्यालय आए बिना ही सत्यापित दस्तावेज़ प्राप्त करें।
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                अभी एडवोकेट को कॉल करें – 7037455191
              </Button>
            </div>
            <div className="text-center">
              <div className="inline-block relative">
                <div className="w-72 h-96 mx-auto rounded-xl overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="/lovable-uploads/fe348bb1-57a0-40f4-9d2e-b9bd47f61a16.png" 
                    alt="Advocate Ajay Shankar Sharma - Available for Online Consultation" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-base font-bold">
                  ● उपलब्ध अभी
                </div>
              </div>
              <div className="mt-8 bg-white/10 backdrop-blur rounded-xl p-6">
                <p className="font-bold text-xl">Advocate Ajay Shankar Sharma</p>
                <p className="text-base opacity-90 mt-2">ऑनलाइन परामर्श के लिए उपलब्ध</p>
                <p className="text-base opacity-90">हापुड़, उत्तर प्रदेश स्थित</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            हमारे ग्राहकों की राय
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
            अक्सर पूछे जाने वाले सवाल
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
            अपनी संपत्ति के लिए कानूनी स्पष्टता चाहिए?
          </h2>
          <p className="text-2xl mb-10 opacity-90">
            एक विश्वसनीय कानूनी विशेषज्ञ से 1 क्लिक में बात करें।
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              अभी एडवोकेट को कॉल करें – 7037455191
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg font-semibold px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              व्हाट्सऐप परामर्श
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
                  src="/lovable-uploads/f4f63bd6-23e6-4a96-bfdc-15ea3fe45aa6.png" 
                  alt="Tiewala Vakil Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                भारत का विश्वसनीय संपत्ति कानूनी सेवा प्लेटफॉर्म, 75+ वर्षों की विरासत के साथ। 
                हम हापुड़ कार्यालय से रजिस्ट्रेशन, दस्तावेज़ीकरण और परामर्श की सेवा सरल बनाते हैं।
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">संपर्क</h4>
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
                <div className="text-lg">हापुड़, उत्तर प्रदेश</div>
                <div className="text-base font-bold text-red-400">License No. 1</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
              <div className="space-y-3 text-gray-300">
                <div><a href="#services" className="hover:text-white transition-colors text-lg">Services</a></div>
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
            <p className="text-lg">&copy; 2024 TiewalaVakil.in. All rights reserved. | A Legacy of Trust Since 1950s | License No. 1</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
