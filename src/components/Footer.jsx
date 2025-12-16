import {Phone, MessageCircle, Instagram, Sparkles, Award, Mail, MapPin, Clock } from 'lucide-react';


const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/+919100602001?text=Hello! I would like to inquire about decoration services from Ayanshi Wedding Planner.', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/ayanshi_wedding_planner?igsh=MXJsZXlhd2gzazhueQ%3D%3D&utm_source=qr', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+919100602001', '_blank');
  };

  return (
    <div>
       <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white animate-pulse" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Ayanshi Wedding Planner</div>
                  <div className="text-sm opacity-90">Creating Magical Moments</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Professional decoration services for weddings, birthdays, corporate events, and all special occasions. We specialize in flower, balloon, and bamboo decorations.</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <button onClick={handleInstagram} className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </button>
                <button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button onClick={handlePhone} className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors">
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Services */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-pink-400">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Wedding Decorations</li>
                <li>Birthday Party Setups</li>
                <li>Anniversary Celebrations</li>
                <li>Corporate Events</li>
                <li>Bamboo Decorations</li>
                <li>Flower Arrangements</li>
                <li>Balloon Decorations</li>
                <li>Custom Theme Parties</li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-pink-400">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Phone className="h-5 w-5 text-pink-500" />
                  <span>+91 91006 02001</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="h-5 w-5 text-pink-500" />
                  <span>ashokdammu251@gmail.com</span>
                </div>
                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <MapPin className="h-5 w-5 text-pink-500 mt-1" />
                  <span className="text-sm">5-5-591 Malakunta Street Near Exhibition Ground, Nampally, Hyderabad 500001, Telangana</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Clock className="h-5 w-5 text-pink-500" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="flex justify-center items-center space-x-6 mb-4">
              <Award className="h-6 w-6 text-yellow-500" />
              <span className="text-sm">Trusted by 500+ Happy Customers</span>
            </div>
            <p className="text-gray-500 text-sm">© 2025 Ayanshi Wedding Planner. All rights reserved. | Designed with ❤️ for creating magical moments</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
