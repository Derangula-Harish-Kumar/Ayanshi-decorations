import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  // Contact functions
  const handleWhatsApp = () => {
    window.open('https://wa.me/+919100602001?text=Hello! I would like to inquire about decoration services from Ayanshi Wedding Planner.', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/ayanshi_wedding_planner?igsh=MXJsZXlhd2gzazhueQ%3D%3D&utm_source=qr', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+919100602001', '_blank');
  };

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    event: '',
    message: ''
  });

  // Enhanced EmailJS implementation
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.phone || !contactForm.event || !contactForm.message) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Load EmailJS library dynamically
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
          window.emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
        };
        document.head.appendChild(script);
      }

      // Template parameters for EmailJS
      const templateParams = {
        from_name: contactForm.name,
        from_phone: contactForm.phone,
        event_type: contactForm.event,
        message: contactForm.message,
        to_name: 'Ashok Dammu',
        to_email: 'ashokdammu251@gmail.com',
        reply_to: `${contactForm.name} <noreply@example.com>`
      };

      // Send email via EmailJS
      if (window.emailjs) {
        await window.emailjs.send(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          templateParams
        );
      }

      // Also send via WhatsApp as backup
      const whatsappMessage = `Hello! New inquiry from ${contactForm.name}%0APhone: ${contactForm.phone}%0AEvent Type: ${contactForm.event}%0AMessage: ${contactForm.message}`;
      window.open(`https://wa.me/+919100602001?text=${whatsappMessage}`, '_blank');
      
      alert('Thank you! Your message has been sent successfully. We will contact you soon.');
      setContactForm({ name: '', phone: '', event: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback to WhatsApp
      const whatsappMessage = `Hello! New inquiry from ${contactForm.name}%0APhone: ${contactForm.phone}%0AEvent Type: ${contactForm.event}%0AMessage: ${contactForm.message}`;
      window.open(`https://wa.me/+919100602001?text=${whatsappMessage}`, '_blank');
      
      alert('Message sent via WhatsApp! We will contact you soon.');
      setContactForm({ name: '', phone: '', event: '', message: '' });
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's create something magical together</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <select
                  value={contactForm.event}
                  onChange={(e) => setContactForm({...contactForm, event: e.target.value})}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select Event Type *</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday Party</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Corporate">Corporate Event</option>
                  <option value="Bamboo Decoration">Bamboo Decoration</option>
                  <option value="Flower Decoration">Flower Decoration</option>
                  <option value="Balloon Decoration">Balloon Decoration</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  placeholder="Tell us about your event... *"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Send Message <Mail className="inline ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 91006 02001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">ashokdammu251@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">5-5-591 Malakunta Street Near Exhibition Ground, Nampally, Hyderabad 500001, Telangana</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Working Hours</p>
                      <p className="text-gray-600">24/7 Available for Events</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Buttons */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
                <div className="grid grid-cols-1 gap-4">
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    WhatsApp - +91 91006 02001
                  </button>
                  <button 
                    onClick={handleInstagram}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                  >
                    <Instagram className="mr-3 h-6 w-6" />
                    @ayanshi_wedding_planner
                  </button>
                  <button 
                    onClick={handlePhone}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                  >
                    <Phone className="mr-3 h-6 w-6" />
                    Call Now - +91 91006 02001
                  </button>
                </div>
              </div>
              
              {/* Owner Info */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">About Owner</h3>
                <div className="text-center">
                  <div className="w-40 h-38 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {/* <Users className="h-10 w-10 text-white" /> */}
                    <img src="/owner-images/owner-image.jpeg" alt="owner image"/>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Ashok Dammu</h4>
                  <p className="text-gray-600 mb-4">Owner & Creative Director</p>
                  <p className="text-sm text-gray-500">Transforming your special moments into unforgettable memories with creative decoration solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export default Contact;
