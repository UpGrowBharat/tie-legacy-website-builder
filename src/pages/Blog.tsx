
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/277f1b46-80f1-4bc3-85ff-7189eedb6bea.png" 
                alt="Tiewalavakil Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-blue-900">Tiewalavakil</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/blog" className="text-blue-600 font-medium">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Insights & Updates</h1>
            <p className="text-xl text-gray-600">Expert guidance on property law and legal documentation</p>
          </div>

          {/* Featured Blog Post */}
          <Card className="mb-8">
            <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-t-lg">
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-lg"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <Badge className="bg-yellow-500 text-black mb-2">Featured Post</Badge>
                <h2 className="text-3xl font-bold mb-2">विक्रय पत्र (Sale Deed) – A Complete Guide</h2>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 27, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Advocate Ajay Shankar Sharma</span>
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  A विक्रय पत्र (Sale Deed) is one of the most important legal documents involved in the process of buying or selling property in India. Whether you're purchasing a plot, flat, house, or agricultural land, a Sale Deed is the final agreement that legally transfers ownership from the seller to the buyer.
                </p>
                
                <p className="text-gray-700 mb-6">
                  In this blog, we will explain everything you need to know about a Sale Deed in Hapur, its importance, contents, legal process, and how to ensure it is prepared and registered properly.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What is a Sale Deed (विक्रय पत्र)?</h3>
                <p className="text-gray-700 mb-6">
                  A Sale Deed, also known as Vikray Patra, is a legal document that confirms the sale and transfer of ownership of property. It is executed between the seller (transferor) and the buyer (transferee) and must be signed by both parties and registered at the Sub-Registrar Office to be legally valid.
                </p>
                <p className="text-gray-700 mb-6">
                  The Sale Deed acts as the final proof of sale and is considered the most critical document during any property transaction.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why is a Sale Deed Important?</h3>
                <p className="text-gray-700 mb-4">
                  A registered Sale Deed in Hapur is not just a piece of paper—it is the legal foundation of property ownership. Without this document, a buyer cannot legally claim rights over the purchased property.
                </p>
                <p className="text-gray-700 mb-4">Key reasons why a Sale Deed is important:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>It legally confirms the transfer of ownership.</li>
                  <li>It protects both the buyer and seller from future disputes.</li>
                  <li>It is mandatory for applying for mutation (नामांतरण) in government records.</li>
                  <li>It is required by banks and financial institutions for home loans.</li>
                  <li>It is admissible in court as evidence of ownership in case of litigation.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  If you're planning to buy or sell a property in Hapur, ensuring that a proper Sale Deed is drafted and registered is non-negotiable.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contents of a Sale Deed (Vikray Patra)</h3>
                <p className="text-gray-700 mb-4">
                  A well-drafted Sale Deed must include specific legal details to be considered valid and enforceable. Here are the essential elements that must be present in a Sale Deed in Hapur:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Property Details</h4>
                    <ul className="list-disc pl-4 text-gray-700 space-y-1">
                      <li>Description of the property: plot size, address, location, boundaries</li>
                      <li>Type of property: residential, commercial, agricultural, etc.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Buyer and Seller Details</h4>
                    <ul className="list-disc pl-4 text-gray-700 space-y-1">
                      <li>Full name, address, age, and ID proof of both parties</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Sale Consideration</h4>
                    <ul className="list-disc pl-4 text-gray-700 space-y-1">
                      <li>Total sale price agreed upon</li>
                      <li>Payment details: mode of payment, advance paid (if any), balance amount</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Transfer of Rights</h4>
                    <ul className="list-disc pl-4 text-gray-700 space-y-1">
                      <li>Clear statement that the seller has transferred all rights, title, and interest to the buyer</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Legal Process of Registering a Sale Deed in Hapur</h3>
                <p className="text-gray-700 mb-4">
                  Once the Sale Deed is drafted, it must be registered with the Sub-Registrar Office in Hapur under the Indian Registration Act, 1908.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Steps to Register a Sale Deed:</h4>
                <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Preparation of Draft:</strong> A qualified legal expert drafts the Sale Deed as per current property laws.</li>
                  <li><strong>Stamp Duty & Registration Fee:</strong> The buyer must pay the applicable stamp duty and registration fee based on the property value.</li>
                  <li><strong>Execution of Sale Deed:</strong> Both parties sign the document along with two witnesses.</li>
                  <li><strong>Registration at Sub-Registrar Office:</strong> The parties visit the office with their ID proofs, photographs, and the original document.</li>
                </ol>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">Documents Required for Sale Deed Registration:</h4>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                  <li>PAN Card & Aadhar Card of buyer and seller</li>
                  <li>Passport-size photographs</li>
                  <li>Property documents (like previous sale deed or title papers)</li>
                  <li>Proof of payment of stamp duty</li>
                  <li>Electricity bill or property tax receipt (as address proof)</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Legal Validity of an Unregistered Sale Deed</h4>
                  <p className="text-gray-700">
                    According to Indian property law, an unregistered Sale Deed has no legal value. Even if signed, if it is not registered, it cannot be used as proof of ownership, and courts will not consider it valid evidence. Always ensure your Sale Deed in Hapur is properly registered to protect your property rights.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Mistakes to Avoid While Making a Sale Deed</h3>
                <p className="text-gray-700 mb-4">
                  Many people make costly legal errors while drafting or registering a Sale Deed. Here are some common mistakes to avoid:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                  <li>Using outdated or copied templates</li>
                  <li>Missing details about property boundaries or identity</li>
                  <li>Not checking seller's title and encumbrance status</li>
                  <li>Skipping legal review by an experienced advocate</li>
                  <li>Not registering the deed properly</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  To avoid these issues, always consult a property lawyer in Hapur who is experienced in Sale Deed drafting and registration.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Advocate Ajay Shankar Sharma – Trusted Sale Deed Lawyer in Hapur</h3>
                  <p className="text-gray-700 mb-4">
                    With 33+ years of legal experience, Advocate Ajay Shankar Sharma at Tiewalavakil provides professional and error-free Sale Deed drafting services in Hapur. Backed by a 75-year-old legal legacy, his services are trusted by hundreds of property buyers and sellers across the region.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Whether it's a residential sale or agricultural land, we ensure that your Sale Deed is legally compliant, accurately drafted, and smoothly registered.
                  </p>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Us for Expert Help</h4>
                    <p className="text-gray-700 mb-4">
                      Don't take risks with your property transactions. Secure your sale or purchase with a professionally drafted विक्रय पत्र (Sale Deed).
                    </p>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Call Now: <strong>7037455191</strong></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Office Location: <strong>Hapur, Uttar Pradesh</strong></span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Link to="/contact">Get Expert Consultation</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Tiewalavakil. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Presented by Digivizual</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
