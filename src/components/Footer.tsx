
import { Phone, MessageCircle, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-amber-50 text-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
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
              <div className="text-base md:text-lg">Email: support@tiewalavakil.in</div>
            </div>
            <div className="flex space-x-4 mt-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-600 rounded flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-400 rounded flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <Twitter className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <Youtube className="w-4 h-4 md:w-5 md:h-5 text-white" />
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
              <div><a href="/contact" className="hover:text-slate-800 transition-colors text-base md:text-lg">Contact</a></div>
              <div><a href="/privacy" className="hover:text-slate-800 transition-colors text-base md:text-lg">Privacy Policy</a></div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg md:text-xl">Office Location</h4>
            <div className="text-slate-600 space-y-3">
              <p className="text-base md:text-lg flex items-start">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 mt-1 flex-shrink-0" />
                Chamber no. 4, Tehsil Compound Hapur - 245101, Uttar Pradesh
              </p>
              <div className="pl-6">
                <p className="text-sm md:text-base text-slate-500 mb-2">Map Location:</p>
                <p className="text-base md:text-lg">Sub-Registrar Office Road, Near Tehsil, Hapur, Uttar Pradesh - 245101</p>
              </div>
              
              {/* Map Location */}
              <div className="mt-4">
                <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.123456789!2d77.77!3d28.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQzJzQ4LjAiTiA3N8KwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tiewalavakil Office Location"
                  ></iframe>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  <a 
                    href="https://maps.google.com/?q=Sub-Registrar Office Road, Near Tehsil, Hapur, Uttar Pradesh 245101" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-slate-700 underline"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-300 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-slate-500">
          <p className="text-base md:text-lg">&copy; 2024 TiewalaVakil.in. All rights reserved. | A Legacy of Trust Since 1950s</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
