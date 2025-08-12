// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Phone, MessageCircle, Instagram, Star, Calendar, Heart, Gift, Sparkles, Camera, Users, Award, Mail, MapPin, Clock } from 'lucide-react';

// const DecorationApp = () => {
//   const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
//   const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
//   const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
//   const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);

//   // Hero Slider Data - Replace these URLs with your own photos
//   const heroSlides = [
//     {
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=600&fit=crop",
//       title: "Magical Wedding Decorations",
//       subtitle: "Transform your special day into a fairy tale",
//       overlay: "bg-gradient-to-r from-pink-500/80 to-purple-600/80"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=600&fit=crop",
//       title: "Elegant Birthday Celebrations",
//       subtitle: "Make every birthday unforgettable with our stunning balloon arrangements",
//       overlay: "bg-gradient-to-r from-blue-500/80 to-teal-600/80"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=600&fit=crop",
//       title: "Beautiful Flower Arrangements",
//       subtitle: "Fresh flowers that speak the language of love",
//       overlay: "bg-gradient-to-r from-rose-500/80 to-pink-600/80"
//     }
//   ];

//   // Services Slider Data
//   const serviceSlides = [
//     {
//       icon: <Heart className="w-12 h-12 text-pink-500" />,
//       title: "Wedding Decorations",
//       description: "Complete wedding decoration packages including mandap, stage, entrance, and floral arrangements",
//       features: ["Mandap Decoration", "Stage Setup", "Entrance Decor", "Floral Arrangements"],
//       color: "from-pink-100 to-rose-100"
//     },
//     {
//       icon: <Gift className="w-12 h-12 text-blue-500" />,
//       title: "Birthday Parties",
//       description: "Colorful balloon decorations and theme-based setups for memorable birthday celebrations",
//       features: ["Balloon Arches", "Theme Decorations", "Photo Booths", "Cake Table Setup"],
//       color: "from-blue-100 to-cyan-100"
//     },
//     {
//       icon: <Sparkles className="w-12 h-12 text-purple-500" />,
//       title: "Anniversary Celebrations",
//       description: "Romantic and elegant decorations to celebrate your love milestones",
//       features: ["Romantic Lighting", "Flower Petals", "Candle Arrangements", "Memory Walls"],
//       color: "from-purple-100 to-pink-100"
//     },
//     {
//       icon: <Users className="w-12 h-12 text-green-500" />,
//       title: "Corporate Events",
//       description: "Professional and sophisticated decorations for business events and functions",
//       features: ["Stage Backdrops", "Branding Setup", "Welcome Arrangements", "Award Ceremonies"],
//       color: "from-green-100 to-teal-100"
//     }
//   ];

//   // Gallery Slider Data - Replace with your own photos
//   const gallerySlides = [
//     {
//       image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
//       title: "Royal Wedding Setup",
//       category: "Wedding"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
//       title: "Balloon Paradise",
//       category: "Birthday"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop",
//       title: "Floral Elegance",
//       category: "Anniversary"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=300&fit=crop",
//       title: "Garden Wedding",
//       category: "Wedding"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=300&fit=crop",
//       title: "Kids Birthday Theme",
//       category: "Birthday"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
//       title: "Corporate Gala",
//       category: "Corporate"
//     }
//   ];

//   // Testimonials Data
//   const testimonials = [
//     {
//       name: "Priya Sharma",
//       rating: 5,
//       comment: "Absolutely stunning work! They transformed our wedding venue into a dream location. Highly recommended!",
//       event: "Wedding Decoration"
//     },
//     {
//       name: "Raj Patel",
//       rating: 5,
//       comment: "Amazing balloon decorations for my daughter's birthday. The kids were thrilled! Professional service.",
//       event: "Birthday Party"
//     },
//     {
//       name: "Meera Singh",
//       rating: 5,
//       comment: "Beautiful flower arrangements for our anniversary celebration. Exceeded our expectations completely.",
//       event: "Anniversary"
//     },
//     {
//       name: "Amit Kumar",
//       rating: 5,
//       comment: "Professional setup for our corporate event. Everything was perfect and on time. Great team!",
//       event: "Corporate Event"
//     }
//   ];

//   // Auto-scroll functionality for all sliders
//   useEffect(() => {
//   const heroInterval = setInterval(() => {
//     setCurrentHeroSlide(prev => (prev + 1) % heroSlides.length);
//   }, 5000);

//   const serviceInterval = setInterval(() => {
//     setCurrentServiceSlide(prev => (prev + 1) % serviceSlides.length);
//   }, 4000);

//   const galleryInterval = setInterval(() => {
//     setCurrentGallerySlide(prev => (prev + 1) % Math.ceil(gallerySlides.length / 3));
//   }, 3500);

//   const testimonialInterval = setInterval(() => {
//     setCurrentTestimonialSlide(prev => (prev + 1) % testimonials.length);
//   }, 4500);

//   return () => {
//     clearInterval(heroInterval);
//     clearInterval(serviceInterval);
//     clearInterval(galleryInterval);
//     clearInterval(testimonialInterval);
//   };
// }, [
//   heroSlides.length,
//   serviceSlides.length,
//   gallerySlides.length,
//   testimonials.length
// ]);


//   // Contact functions
//   const handleWhatsApp = () => {
//     window.open('https://wa.me/+919876543210?text=Hello! I would like to inquire about decoration services.', '_blank');
//   };

//   const handleInstagram = () => {
//     window.open('https://instagram.com/yourdecorations', '_blank');
//   };

//   const handlePhone = () => {
//     window.open('tel:+919876543210', '_blank');
//   };

//   const [contactForm, setContactForm] = useState({
//     name: '',
//     phone: '',
//     event: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const whatsappMessage = `Hello! I'm ${contactForm.name}. Event: ${contactForm.event}. Phone: ${contactForm.phone}. Message: ${contactForm.message}`;
//     window.open(`https://wa.me/+919876543210?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
//     setContactForm({ name: '', phone: '', event: '', message: '' });
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation - Fixed header with gradient background */}
//       <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-50 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-2">
//               <Sparkles className="h-8 w-8 text-white animate-pulse" />
//               <span className="text-white text-xl font-bold">DreamDecorations</span>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#home" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Home</a>
//               <a href="#services" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Services</a>
//               <a href="#gallery" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Gallery</a>
//               <a href="#contact" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Contact</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Slider Section - Main showcase with auto-scrolling images */}
//       <section id="home" className="relative h-screen overflow-hidden">
//         {heroSlides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-all duration-1000 transform ${
//               index === currentHeroSlide 
//                 ? 'opacity-100 scale-100' 
//                 : 'opacity-0 scale-110'
//             }`}
//           >
//             <div className="absolute inset-0 bg-cover bg-center" 
//                  style={{ backgroundImage: `url(${slide.image})` }}>
//               <div className={`absolute inset-0 ${slide.overlay}`}></div>
//             </div>
//             <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
//               <div className="max-w-4xl animate-pulse">
//                 <h1 className="text-4xl sm:text-6xl font-bold mb-6 drop-shadow-lg">{slide.title}</h1>
//                 <p className="text-xl sm:text-2xl mb-8 drop-shadow-lg">{slide.subtitle}</p>
//                 <button 
//                   onClick={handleWhatsApp}
//                   className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-xl"
//                 >
//                   Book Now <MessageCircle className="inline ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
        
//         {/* Hero Navigation Buttons */}
//         <button 
//           onClick={() => setCurrentHeroSlide(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300"
//         >
//           <ChevronLeft className="h-6 w-6 text-white" />
//         </button>
//         <button 
//           onClick={() => setCurrentHeroSlide(prev => (prev + 1) % heroSlides.length)}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300"
//         >
//           <ChevronRight className="h-6 w-6 text-white" />
//         </button>
        
//         {/* Slide Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentHeroSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentHeroSlide ? 'bg-white' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Services Slider Section - Showcases different decoration services */}
//       <section id="services" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
//             <p className="text-xl text-gray-600">Creating magical moments for every occasion</p>
//           </div>
          
//           <div className="relative overflow-hidden">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
//             >
//               {serviceSlides.map((service, index) => (
//                 <div key={index} className="w-full flex-shrink-0">
//                   <div className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-xl p-8 mx-4 transform hover:scale-105 transition-all duration-300`}>
//                     <div className="text-center mb-6">
//                       <div className="mb-4 flex justify-center">{service.icon}</div>
//                       <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
//                       <p className="text-gray-700 text-lg mb-6">{service.description}</p>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       {service.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center space-x-2">
//                           <Star className="h-5 w-5 text-yellow-500" />
//                           <span className="text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Service Navigation */}
//             <button 
//               onClick={() => setCurrentServiceSlide(prev => prev === 0 ? serviceSlides.length - 1 : prev - 1)}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
//             >
//               <ChevronLeft className="h-6 w-6 text-gray-600" />
//             </button>
//             <button 
//               onClick={() => setCurrentServiceSlide(prev => (prev + 1) % serviceSlides.length)}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
//             >
//               <ChevronRight className="h-6 w-6 text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Slider Section - Portfolio showcase */}
//       <section id="gallery" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h2>
//             <p className="text-xl text-gray-600">Recent decoration projects that made dreams come true</p>
//           </div>
          
//           <div className="relative overflow-hidden">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentGallerySlide * 100}%)` }}
//             >
//               {Array.from({ length: Math.ceil(gallerySlides.length / 3) }, (_, slideIndex) => (
//                 <div key={slideIndex} className="w-full flex-shrink-0">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {gallerySlides.slice(slideIndex * 3, (slideIndex + 1) * 3).map((item, index) => (
//                       <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                         <img 
//                           src={item.image} 
//                           alt={item.title}
//                           className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="absolute bottom-4 left-4 right-4 text-white">
//                             <h3 className="text-lg font-bold mb-1">{item.title}</h3>
//                             <span className="text-sm bg-pink-500 px-2 py-1 rounded-full">{item.category}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Slider Section - Customer reviews */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
//             <p className="text-xl text-white/90">Real experiences from our happy customers</p>
//           </div>
          
//           <div className="relative">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`transition-all duration-500 ${
//                   index === currentTestimonialSlide 
//                     ? 'opacity-100 transform translate-x-0' 
//                     : 'opacity-0 transform translate-x-full absolute top-0 left-0 right-0'
//                 }`}
//               >
//                 <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
//                   <div className="flex justify-center mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.comment}"</p>
//                   <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
//                   <p className="text-gray-600">{testimonial.event}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section - Contact form and information */}
//       <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-600">Let's create something magical together</p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   value={contactForm.name}
//                   onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={contactForm.phone}
//                   onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
//                 />
//                 <select
//                   value={contactForm.event}
//                   onChange={(e) => setContactForm({...contactForm, event: e.target.value})}
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
//                 >
//                   <option value="">Select Event Type</option>
//                   <option value="Wedding">Wedding</option>
//                   <option value="Birthday">Birthday Party</option>
//                   <option value="Anniversary">Anniversary</option>
//                   <option value="Corporate">Corporate Event</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 <textarea
//                   placeholder="Tell us about your event..."
//                   value={contactForm.message}
//                   onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
//                   rows="4"
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
//                 ></textarea>
//                 <button 
//                   onClick={handleSubmit}
//                   className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
//                 >
//                   Send Message <Mail className="inline ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
            
//             {/* Contact Info */}
//             <div className="space-y-8">
//               <div className="bg-white rounded-2xl shadow-xl p-8">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-4">
//                     <Phone className="h-6 w-6 text-pink-500" />
//                     <span className="text-gray-700">+91 98765 43210</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <Mail className="h-6 w-6 text-pink-500" />
//                     <span className="text-gray-700">info@dreamdecorations.com</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <MapPin className="h-6 w-6 text-pink-500" />
//                     <span className="text-gray-700">Mumbai, Maharashtra, India</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <Clock className="h-6 w-6 text-pink-500" />
//                     <span className="text-gray-700">24/7 Available</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Social Media Buttons */}
//               <div className="bg-white rounded-2xl shadow-xl p-8">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
//                 <div className="flex space-x-4">
//                   <button 
//                     onClick={handleWhatsApp}
//                     className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
//                   >
//                     <MessageCircle className="mr-2 h-5 w-5" />
//                     WhatsApp
//                   </button>
//                   <button 
//                     onClick={handleInstagram}
//                     className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
//                   >
//                     <Instagram className="mr-2 h-5 w-5" />
//                     Instagram
//                   </button>
//                   <button 
//                     onClick={handlePhone}
//                     className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
//                   >
//                     <Phone className="mr-2 h-5 w-5" />
//                     Call
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating Action Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button 
//           onClick={handleWhatsApp}
//           className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
//         >
//           <MessageCircle className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex items-center justify-center space-x-2 mb-6">
//             <Sparkles className="h-8 w-8 text-pink-500 animate-pulse" />
//             <span className="text-2xl font-bold">DreamDecorations</span>
//           </div>
//           <p className="text-gray-400 mb-6">Creating magical moments since 2020</p>
//           <div className="flex justify-center space-x-6 mb-6">
//             <Award className="h-6 w-6 text-yellow-500" />
//             <span className="text-sm">Trusted by 1000+ Happy Customers</span>
//           </div>
//           <p className="text-gray-500 text-sm">© 2025 DreamDecorations. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default DecorationApp;









// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Phone, MessageCircle, Instagram, Star, Calendar, Heart, Gift, Sparkles, Camera, Users, Award, Mail, MapPin, Clock } from 'lucide-react';

// const DecorationWebsite = () => {
//   const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
//   const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
//   const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
//   const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);

//   // Hero Slider Data - Replace these URLs with your own photos
//   const heroSlides = [
//     {
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=600&fit=crop",
//       title: "Magical Wedding Decorations",
//       subtitle: "Transform your special day into a fairy tale",
//       overlay: "bg-gradient-to-r from-pink-500/60 to-purple-600/60"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=600&fit=crop",
//       title: "Elegant Birthday Celebrations",
//       subtitle: "Make every birthday unforgettable with our stunning balloon arrangements",
//       overlay: "bg-gradient-to-r from-blue-500/60 to-teal-600/60"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=600&fit=crop",
//       title: "Beautiful Flower Arrangements",
//       subtitle: "Fresh flowers that speak the language of love",
//       overlay: "bg-gradient-to-r from-rose-500/60 to-pink-600/60"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
//       title: "Bamboo & Nature Decorations",
//       subtitle: "Eco-friendly bamboo decorations for sustainable celebrations",
//       overlay: "bg-gradient-to-r from-green-500/60 to-emerald-600/60"
//     }
//   ];

//   // Services Slider Data
//   const serviceSlides = [
//     {
//       icon: <Heart className="w-12 h-12 text-pink-500" />,
//       title: "Wedding Decorations",
//       description: "Complete wedding decoration packages including mandap, stage, entrance, and floral arrangements",
//       features: ["Mandap Decoration", "Stage Setup", "Entrance Decor", "Floral Arrangements"],
//       color: "from-pink-100 to-rose-100"
//     },
//     {
//       icon: <Gift className="w-12 h-12 text-blue-500" />,
//       title: "Birthday Parties",
//       description: "Colorful balloon decorations and theme-based setups for memorable birthday celebrations",
//       features: ["Balloon Arches", "Theme Decorations", "Photo Booths", "Cake Table Setup"],
//       color: "from-blue-100 to-cyan-100"
//     },
//     {
//       icon: <Sparkles className="w-12 h-12 text-purple-500" />,
//       title: "Anniversary Celebrations",
//       description: "Romantic and elegant decorations to celebrate your love milestones",
//       features: ["Romantic Lighting", "Flower Petals", "Candle Arrangements", "Memory Walls"],
//       color: "from-purple-100 to-pink-100"
//     },
//     {
//       icon: <Users className="w-12 h-12 text-green-500" />,
//       title: "Corporate Events",
//       description: "Professional and sophisticated decorations for business events and functions",
//       features: ["Stage Backdrops", "Branding Setup", "Welcome Arrangements", "Award Ceremonies"],
//       color: "from-green-100 to-teal-100"
//     },
//     {
//       icon: <Camera className="w-12 h-12 text-amber-500" />,
//       title: "Bamboo Decorations",
//       description: "Eco-friendly bamboo and natural decorations for sustainable events",
//       features: ["Bamboo Arches", "Natural Backdrops", "Eco-friendly Setup", "Garden Themes"],
//       color: "from-amber-100 to-yellow-100"
//     }
//   ];

//   // Expanded Gallery Slider Data - 16 images total
//   const gallerySlides = [
//     {
//       image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
//       title: "Royal Wedding Setup",
//       category: "Wedding"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
//       title: "Balloon Paradise",
//       category: "Birthday"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop",
//       title: "Floral Elegance",
//       category: "Anniversary"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&h=600&fit=crop",
//       title: "Garden Wedding",
//       category: "Wedding"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=300&fit=crop",
//       title: "Kids Birthday Theme",
//       category: "Birthday"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
//       title: "Corporate Gala",
//       category: "Corporate"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
//       title: "Bamboo Arch Wedding",
//       category: "Bamboo"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop",
//       title: "Rose Garden Setup",
//       category: "Flowers"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1520637836862-4d197d17c787?w=400&h=300&fit=crop",
//       title: "Balloon Ceiling Decor",
//       category: "Balloon"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
//       title: "Elegant Table Setting",
//       category: "Wedding"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
//       title: "Tropical Flower Arrangement",
//       category: "Flowers"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
//       title: "Colorful Birthday Balloons",
//       category: "Birthday"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
//       title: "Natural Bamboo Backdrop",
//       category: "Bamboo"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
//       title: "Luxury Wedding Mandap",
//       category: "Wedding"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
//       title: "Rainbow Balloon Arch",
//       category: "Balloon"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
//       title: "Corporate Event Stage",
//       category: "Corporate"
//     }
//   ];

//   // Expanded Testimonials Data
//   const testimonials = [
//     {
//       name: "Priya Sharma",
//       rating: 5,
//       comment: "Absolutely stunning work! They transformed our wedding venue into a dream location. Highly recommended!",
//       event: "Wedding Decoration"
//     },
//     {
//       name: "Raj Patel",
//       rating: 5,
//       comment: "Amazing balloon decorations for my daughter's birthday. The kids were thrilled! Professional service.",
//       event: "Birthday Party"
//     },
//     {
//       name: "Meera Singh",
//       rating: 5,
//       comment: "Beautiful flower arrangements for our anniversary celebration. Exceeded our expectations completely.",
//       event: "Anniversary"
//     },
//     {
//       name: "Amit Kumar",
//       rating: 5,
//       comment: "Professional setup for our corporate event. Everything was perfect and on time. Great team!",
//       event: "Corporate Event"
//     },
//     {
//       name: "Neha Gupta",
//       rating: 5,
//       comment: "The bamboo decorations were unique and eco-friendly. Ashok's team did an incredible job!",
//       event: "Garden Wedding"
//     },
//     {
//       name: "Rohit Verma",
//       rating: 5,
//       comment: "Outstanding balloon arrangements! My son's birthday party was magical thanks to Ayanshi Wedding Planner.",
//       event: "Kids Birthday"
//     },
//     {
//       name: "Kavya Reddy",
//       rating: 5,
//       comment: "Floral decorations were breathtaking. Every detail was perfect. Will definitely book again!",
//       event: "Engagement Ceremony"
//     },
//     {
//       name: "Suresh Jain",
//       rating: 5,
//       comment: "Excellent service and creative designs. The team understood our vision perfectly and delivered beyond expectations.",
//       event: "Corporate Launch"
//     }
//   ];

//   // Forward-only auto-scroll functionality for all sliders
//   useEffect(() => {
//     const heroInterval = setInterval(() => {
//       setCurrentHeroSlide(prev => (prev + 1) % heroSlides.length);
//     }, 5000);

//     const serviceInterval = setInterval(() => {
//       setCurrentServiceSlide(prev => (prev + 1) % serviceSlides.length);
//     }, 4000);

//     const galleryInterval = setInterval(() => {
//       setCurrentGallerySlide(prev => (prev + 1) % Math.ceil(gallerySlides.length / 3));
//     }, 3500);

//     const testimonialInterval = setInterval(() => {
//       setCurrentTestimonialSlide(prev => (prev + 1) % testimonials.length);
//     }, 4500);

//     return () => {
//       clearInterval(heroInterval);
//       clearInterval(serviceInterval);
//       clearInterval(galleryInterval);
//       clearInterval(testimonialInterval);
//     };
//   }, [heroSlides.length, serviceSlides.length, gallerySlides.length, testimonials.length]);

//   // Contact functions with your business details
//   const handleWhatsApp = () => {
//     window.open('https://wa.me/+919100602001?text=Hello! I would like to inquire about decoration services from Ayanshi Wedding Planner.', '_blank');
//   };

//   const handleInstagram = () => {
//     window.open('https://www.instagram.com/ayanshi_wedding_planner?igsh=MXJsZXlhd2gzazhueQ%3D%3D&utm_source=qr', '_blank');
//   };

//   const handlePhone = () => {
//     window.open('tel:+919100602001', '_blank');
//   };

//   const [contactForm, setContactForm] = useState({
//     name: '',
//     phone: '',
//     event: '',
//     message: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // EmailJS implementation
//     try {
//       const templateParams = {
//         from_name: contactForm.name,
//         from_phone: contactForm.phone,
//         event_type: contactForm.event,
//         message: contactForm.message,
//         to_name: 'Ashok Dammu',
//         to_email: 'ashokdammu251@gmail.com'
//       };

//       // You need to configure EmailJS with your service ID, template ID, and public key
//       // For now, we'll also send via WhatsApp as backup
//       const whatsappMessage = `Hello! I'm ${contactForm.name}. Event: ${contactForm.event}. Phone: ${contactForm.phone}. Message: ${contactForm.message}`;
//       window.open(`https://wa.me/+919100602001?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      
//       alert('Thank you! Your message has been sent. We will contact you soon.');
//       setContactForm({ name: '', phone: '', event: '', message: '' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       // Fallback to WhatsApp
//       const whatsappMessage = `Hello! I'm ${contactForm.name}. Event: ${contactForm.event}. Phone: ${contactForm.phone}. Message: ${contactForm.message}`;
//       window.open(`https://wa.me/+919100602001?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation - Fixed header with gradient background */}
//       <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-50 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-3">
//               {/* Logo */}
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <Sparkles className="w-6 h-6 text-pink-500" />
//               </div>
//               <div className="text-white">
//                 <div className="text-lg font-bold">Ayanshi Wedding Planner</div>
//                 <div className="text-xs opacity-90">Creating Magical Moments</div>
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#home" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Home</a>
//               <a href="#services" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Services</a>
//               <a href="#gallery" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Gallery</a>
//               <a href="#contact" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Contact</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Slider Section - Main showcase with auto-scrolling images */}
//       <section id="home" className="relative h-screen overflow-hidden">
//         {heroSlides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-all duration-1000 transform ${
//               index === currentHeroSlide 
//                 ? 'opacity-100 scale-100' 
//                 : 'opacity-0 scale-110'
//             }`}
//           >
//             <div className="absolute inset-0 bg-cover bg-center" 
//                  style={{ backgroundImage: `url(${slide.image})` }}>
//               <div className={`absolute inset-0 ${slide.overlay}`}></div>
//             </div>
//             <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
//               <div className="max-w-4xl animate-pulse">
//                 <h1 className="text-4xl sm:text-6xl font-bold mb-6 drop-shadow-lg">{slide.title}</h1>
//                 <p className="text-xl sm:text-2xl mb-8 drop-shadow-lg">{slide.subtitle}</p>
//                 <button 
//                   onClick={handleWhatsApp}
//                   className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-xl"
//                 >
//                   Book Now <MessageCircle className="inline ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
        
//         {/* Hero Navigation Buttons - Forward only */}
//         <button 
//           onClick={() => setCurrentHeroSlide((currentHeroSlide + 1) % heroSlides.length)}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300"
//         >
//           <ChevronRight className="h-6 w-6 text-white" />
//         </button>
        
//         {/* Slide Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentHeroSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentHeroSlide ? 'bg-white' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Services Slider Section */}
//       <section id="services" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
//             <p className="text-xl text-gray-600">Creating magical moments for every occasion</p>
//           </div>
          
//           <div className="relative overflow-hidden">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
//             >
//               {serviceSlides.map((service, index) => (
//                 <div key={index} className="w-full flex-shrink-0">
//                   <div className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-xl p-8 mx-4 transform hover:scale-105 transition-all duration-300`}>
//                     <div className="text-center mb-6">
//                       <div className="mb-4 flex justify-center">{service.icon}</div>
//                       <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
//                       <p className="text-gray-700 text-lg mb-6">{service.description}</p>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       {service.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center space-x-2">
//                           <Star className="h-5 w-5 text-yellow-500" />
//                           <span className="text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Service Navigation - Forward only */}
//             <button 
//               onClick={() => setCurrentServiceSlide((currentServiceSlide + 1) % serviceSlides.length)}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
//             >
//               <ChevronRight className="h-6 w-6 text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Slider Section */}
//       <section id="gallery" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h2>
//             <p className="text-xl text-gray-600">Recent decoration projects that made dreams come true</p>
//           </div>
          
//           <div className="relative overflow-hidden">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentGallerySlide * 100}%)` }}
//             >
//               {Array.from({ length: Math.ceil(gallerySlides.length / 3) }, (_, slideIndex) => (
//                 <div key={slideIndex} className="w-full flex-shrink-0">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {gallerySlides.slice(slideIndex * 3, (slideIndex + 1) * 3).map((item, index) => (
//                       <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                         <img 
//                           src={item.image} 
//                           alt={item.title}
//                           className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="absolute bottom-4 left-4 right-4 text-white">
//                             <h3 className="text-lg font-bold mb-1">{item.title}</h3>
//                             <span className="text-sm bg-pink-500 px-2 py-1 rounded-full">{item.category}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Slider Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
//             <p className="text-xl text-white/90">Real experiences from our happy customers</p>
//           </div>
          
//           <div className="relative">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`transition-all duration-500 ${
//                   index === currentTestimonialSlide 
//                     ? 'opacity-100 transform translate-x-0' 
//                     : 'opacity-0 transform translate-x-full absolute top-0 left-0 right-0'
//                 }`}
//               >
//                 <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
//                   <div className="flex justify-center mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.comment}"</p>
//                   <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
//                   <p className="text-gray-600">{testimonial.event}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-600">Let's create something magical together</p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   value={contactForm.name}
//                   onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={contactForm.phone}
//                   onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
//                   required
//                 />
//                 <select
//                   value={contactForm.event}
//                   onChange={(e) => setContactForm({...contactForm, event: e.target.value})}
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
//                   required
//                 >
//                   <option value="">Select Event Type</option>
//                   <option value="Wedding">Wedding</option>
//                   <option value="Birthday">Birthday Party</option>
//                   <option value="Anniversary">Anniversary</option>
//                   <option value="Corporate">Corporate Event</option>
//                   <option value="Bamboo Decoration">Bamboo Decoration</option>
//                   <option value="Flower Decoration">Flower Decoration</option>
//                   <option value="Balloon Decoration">Balloon Decoration</option>
//                   <option value="Other">Other</option>
//                 </select>
//                 <textarea
//                   placeholder="Tell us about your event..."
//                   value={contactForm.message}
//                   onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
//                   rows="4"
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
//                   required
//                 ></textarea>
//                 <button 
//                   onClick={handleSubmit}
//                   className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
//                 >
//                   Send Message <Mail className="inline ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
            
//             {/* Contact Info */}
//             <div className="space-y-8">
//               <div className="bg-white rounded-2xl shadow-xl p-8">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-pink-100 p-3 rounded-full">
//                       <Phone className="h-6 w-6 text-pink-500" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">Phone</p>
//                       <p className="text-gray-600">+91 91006 02001</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-pink-100 p-3 rounded-full">
//                       <Mail className="h-6 w-6 text-pink-500" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">Email</p>
//                       <p className="text-gray-600">ashokdammu251@gmail.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-pink-100 p-3 rounded-full">
//                       <MapPin className="h-6 w-6 text-pink-500" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">Address</p>
//                       <p className="text-gray-600">5-5-591 Malakunta Street Near Exhibition Ground, Nampally, Hyderabad 500001, Telangana</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-pink-100 p-3 rounded-full">
//                       <Clock className="h-6 w-6 text-pink-500" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">Working Hours</p>
//                       <p className="text-gray-600">24/7 Available for Events</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Social Media Buttons */}
//               <div className="bg-white rounded-2xl shadow-xl p-8">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
//                 <div className="grid grid-cols-1 gap-4">
//                   <button 
//                     onClick={handleWhatsApp}
//                     className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
//                   >
//                     <MessageCircle className="mr-3 h-6 w-6" />
//                     WhatsApp - +91 91006 02001
//                   </button>
//                   <button 
//                     onClick={handleInstagram}
//                     className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
//                   >
//                     <Instagram className="mr-3 h-6 w-6" />
//                     @ayanshi_wedding_planner
//                   </button>
//                   <button 
//                     onClick={handlePhone}
//                     className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
//                   >
//                     <Phone className="mr-3 h-6 w-6" />
//                     Call Now - +91 91006 02001
//                   </button>
//                 </div>
//               </div>
              
//               {/* Owner Info */}
//               <div className="bg-white rounded-2xl shadow-xl p-8">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">About Owner</h3>
//                 <div className="text-center">
//                   <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Users className="h-10 w-10 text-white" />
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-800 mb-2">Ashok Dammu</h4>
//                   <p className="text-gray-600 mb-4">Owner & Creative Director</p>
//                   <p className="text-sm text-gray-500">Transforming your special moments into unforgettable memories with creative decoration solutions.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating Action Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button 
//           onClick={handleWhatsApp}
//           className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
//         >
//           <MessageCircle className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Company Info */}
//             <div className="text-center md:text-left">
//               <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
//                 <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
//                   <Sparkles className="h-8 w-8 text-white animate-pulse" />
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold">Ayanshi Wedding Planner</div>
//                   <div className="text-sm opacity-90">Creating Magical Moments</div>
//                 </div>
//               </div>
//               <p className="text-gray-400 mb-4">Professional decoration services for weddings, birthdays, corporate events, and all special occasions. We specialize in flower, balloon, and bamboo decorations.</p>
//               <div className="flex justify-center md:justify-start space-x-4">
//                 <button onClick={handleInstagram} className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition-colors">
//                   <Instagram className="h-5 w-5" />
//                 </button>
//                 <button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors">
//                   <MessageCircle className="h-5 w-5" />
//                 </button>
//                 <button onClick={handlePhone} className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors">
//                   <Phone className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
            
//             {/* Services */}
//             <div className="text-center md:text-left">
//               <h3 className="text-xl font-bold mb-4 text-pink-400">Our Services</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Wedding Decorations</li>
//                 <li>Birthday Party Setups</li>
//                 <li>Anniversary Celebrations</li>
//                 <li>Corporate Events</li>
//                 <li>Bamboo Decorations</li>
//                 <li>Flower Arrangements</li>
//                 <li>Balloon Decorations</li>
//                 <li>Custom Theme Parties</li>
//               </ul>
//             </div>
            
//             {/* Contact Info */}
//             <div className="text-center md:text-left">
//               <h3 className="text-xl font-bold mb-4 text-pink-400">Contact Info</h3>
//               <div className="space-y-3 text-gray-400">
//                 <div className="flex items-center justify-center md:justify-start space-x-3">
//                   <Phone className="h-5 w-5 text-pink-500" />
//                   <span>+91 91006 02001</span>
//                 </div>
//                 <div className="flex items-center justify-center md:justify-start space-x-3">
//                   <Mail className="h-5 w-5 text-pink-500" />
//                   <span>ashokdammu251@gmail.com</span>
//                 </div>
//                 <div className="flex items-start justify-center md:justify-start space-x-3">
//                   <MapPin className="h-5 w-5 text-pink-500 mt-1" />
//                   <span className="text-sm">5-5-591 Malakunta Street Near Exhibition Ground, Nampally, Hyderabad 500001, Telangana</span>
//                 </div>
//                 <div className="flex items-center justify-center md:justify-start space-x-3">
//                   <Clock className="h-5 w-5 text-pink-500" />
//                   <span>24/7 Available</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Bottom Footer */}
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//             <div className="flex justify-center items-center space-x-6 mb-4">
//               <Award className="h-6 w-6 text-yellow-500" />
//               <span className="text-sm">Trusted by 500+ Happy Customers</span>
//             </div>
//             <p className="text-gray-500 text-sm">© 2025 Ayanshi Wedding Planner. All rights reserved. | Designed with ❤️ for creating magical moments</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default DecorationWebsite;











import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Instagram, Star, Calendar, Heart, Gift, Sparkles, Camera, Users, Award, Mail, MapPin, Clock } from 'lucide-react';
import logo from "./assets/logo.png";  // adjust path to where your image is
import MyQR from './Qrcode.jsx';


const DecorationWebsite = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);

  // Hero Slider Data - Using more relevant decoration images
  const heroSlides = [
    {
      image: "/main-images/wedding.jpeg",
      title: "Magical Wedding Decorations",
      subtitle: "Transform your special day into a fairy tale",
      overlay: "bg-gradient-to-r from-pink-500/70 to-purple-600/70"
    },
    {
      image: "/main-images/baloon.jpeg",
      title: "Elegant Birthday Celebrations",
      subtitle: "Make every birthday unforgettable with stunning decorations",
      overlay: "bg-gradient-to-r from-blue-500/70 to-teal-600/70"
    },
    {
      image: "/main-images/flower.jpeg",
      title: "Beautiful Floral Arrangements",
      subtitle: "Fresh flowers that speak the language of love",
      overlay: "bg-gradient-to-r from-rose-500/70 to-pink-600/70"
    },
    {
      image: "/main-images/bambu.jpeg",
      title: "Bamboo & Nature Decorations",
      subtitle: "Eco-friendly decorations for sustainable celebrations",
      overlay: "bg-gradient-to-r from-green-500/70 to-emerald-600/70"
    }
  ];



  // Services Slider Data
  const serviceSlides = [
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: "Wedding Decorations",
      description: "Complete wedding decoration packages including mandap, stage, entrance, and floral arrangements",
      features: ["Mandap Decoration", "Stage Setup", "Entrance Decor", "Floral Arrangements"],
      color: "from-pink-100 to-rose-100"
    },
    {
      icon: <Gift className="w-12 h-12 text-blue-500" />,
      title: "Birthday Parties",
      description: "Colorful balloon decorations and theme-based setups for memorable birthday celebrations",
      features: ["Balloon Arches", "Theme Decorations", "Photo Booths", "Cake Table Setup"],
      color: "from-blue-100 to-cyan-100"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-purple-500" />,
      title: "Anniversary Celebrations",
      description: "Romantic and elegant decorations to celebrate your love milestones",
      features: ["Romantic Lighting", "Flower Petals", "Candle Arrangements", "Memory Walls"],
      color: "from-purple-100 to-pink-100"
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Corporate Events",
      description: "Professional and sophisticated decorations for business events and functions",
      features: ["Stage Backdrops", "Branding Setup", "Welcome Arrangements", "Award Ceremonies"],
      color: "from-green-100 to-teal-100"
    },
    {
      icon: <Camera className="w-12 h-12 text-amber-500" />,
      title: "Bamboo Decorations",
      description: "Eco-friendly bamboo and natural decorations for sustainable events",
      features: ["Bamboo Arches", "Natural Backdrops", "Eco-friendly Setup", "Garden Themes"],
      color: "from-amber-100 to-yellow-100"
    }
  ];

  // Gallery Slider Data - 16 images total
  const gallerySlides = [
    {
      image: "/portfolio-images/wedding-1.jpeg",
      title: "Royal Wedding Setup",
      category: "Wedding"
    },
    {
      image: "main-images/baloon.jpeg",
      title: "Balloon Paradise",
      category: "Birthday"
    },
    {
      image: "/portfolio-images/wedding-2.jpeg",
      title: "Floral Elegance",
      category: "Anniversary"
    },
    {
      image: "/portfolio-images/wedding-3.jpeg",
      title: "Garden Wedding",
      category: "Wedding"
    },
    {
      image: "/main-images/baloon.jpeg",
      title: "Kids Birthday Theme",
      category: "Birthday"
    },
    {
      image: "/portfolio-images/mandapam-1.jpeg",
      title: "Corporate Gala",
      category: "Corporate"
    },
    {
      image: "/portfolio-images/bamboo-1.jpeg",
      title: "Bamboo Arch Wedding",
      category: "Bamboo"
    },
    {
      image: "/portfolio-images/mandapam-2.jpeg",
      title: "Rose Garden Setup",
      category: "Flowers"
    },
    {
      image: "/portfolio-images/wedding-4.jpeg",
      title: "Balloon Ceiling Decor",
      category: "Balloon"
    },
    {
      image: "/portfolio-images/wedding-5.jpeg",
      title: "Elegant Table Setting",
      category: "Wedding"
    },
    {
      image: "/portfolio-images/mandapam-3.jpeg",
      title: "Tropical Flower Arrangement",
      category: "Flowers"
    },
    {
      image: "/portfolio-images/mandapam-5.jpeg",
      title: "Colorful Birthday Balloons",
      category: "Birthday"
    },
    {
      image: "/portfolio-images/bamboo-2.jpeg",
      title: "Natural Bamboo Backdrop",
      category: "Bamboo"
    },
    {
      image: "/portfolio-images/wedding-6.jpeg",
      title: "Luxury Wedding Mandap",
      category: "Wedding"
    },
    {
      image: "/portfolio-images/mandapam-6.jpeg",
      title: "Rainbow Balloon Arch",
      category: "Balloon"
    },
    {
      image: "/portfolio-images/bamboo-3.jpeg",
      title: "Corporate Event Stage",
      category: "Corporate"
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Absolutely stunning work! They transformed our wedding venue into a dream location. Highly recommended!",
      event: "Wedding Decoration"
    },
    {
      name: "Raj Patel",
      rating: 5,
      comment: "Amazing balloon decorations for my daughter's birthday. The kids were thrilled! Professional service.",
      event: "Birthday Party"
    },
    {
      name: "Meera Singh",
      rating: 5,
      comment: "Beautiful flower arrangements for our anniversary celebration. Exceeded our expectations completely.",
      event: "Anniversary"
    },
    {
      name: "Amit Kumar",
      rating: 5,
      comment: "Professional setup for our corporate event. Everything was perfect and on time. Great team!",
      event: "Corporate Event"
    },
    {
      name: "Neha Gupta",
      rating: 5,
      comment: "The bamboo decorations were unique and eco-friendly. Ashok's team did an incredible job!",
      event: "Garden Wedding"
    },
    {
      name: "Rohit Verma",
      rating: 5,
      comment: "Outstanding balloon arrangements! My son's birthday party was magical thanks to Ayanshi Wedding Planner.",
      event: "Kids Birthday"
    }
  ];

  // Auto-scroll functionality for all sliders
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    const serviceInterval = setInterval(() => {
      setCurrentServiceSlide(prev => (prev + 1) % serviceSlides.length);
    }, 4000);

    const galleryInterval = setInterval(() => {
      setCurrentGallerySlide(prev => (prev + 1) % Math.ceil(gallerySlides.length / 3));
    }, 3500);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialSlide(prev => (prev + 1) % testimonials.length);
    }, 4500);

    return () => {
      clearInterval(heroInterval);
      clearInterval(serviceInterval);
      clearInterval(galleryInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  // Navigation functions
  const nextHeroSlide = () => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  const prevHeroSlide = () => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const nextServiceSlide = () => setCurrentServiceSlide((prev) => (prev + 1) % serviceSlides.length);
  const prevServiceSlide = () => setCurrentServiceSlide((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);

  const nextGallerySlide = () => setCurrentGallerySlide((prev) => (prev + 1) % Math.ceil(gallerySlides.length / 3));
  const prevGallerySlide = () => setCurrentGallerySlide((prev) => (prev - 1 + Math.ceil(gallerySlides.length / 3)) % Math.ceil(gallerySlides.length / 3));

  const nextTestimonialSlide = () => setCurrentTestimonialSlide((prev) => (prev + 1) % testimonials.length);
  const prevTestimonialSlide = () => setCurrentTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation - Fixed header */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden" >
                {/* <Sparkles className="w-6 h-6 text-pink-500" /> */}
                <img src={logo} alt="Logo" className=" object-cover" />

                
              </div>
              <div className="text-white">
                <div className="text-lg font-bold">Ayanshi Wedding Planner</div>
                <div className="text-xs opacity-90">Creating Magical Moments</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Home</a>
              <a href="#services" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Services</a>
              <a href="#gallery" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Gallery</a>
              <a href="#contact" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                index === currentHeroSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
            >
              <div className="absolute inset-0 bg-cover bg-center" 
                   style={{ backgroundImage: `url(${slide.image})` }}>
                <div className={`absolute inset-0 ${slide.overlay}`}></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
                <div className="max-w-4xl">
                  <h1 className="text-4xl sm:text-6xl font-bold mb-6 drop-shadow-lg animate-fade-in">{slide.title}</h1>
                  <p className="text-xl sm:text-2xl mb-8 drop-shadow-lg">{slide.subtitle}</p>
                  <button 
                    onClick={handleWhatsApp}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Book Now <MessageCircle className="inline ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Hero Navigation Buttons */}
        <button 
          onClick={prevHeroSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300 hidden md:block" 
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button 
          onClick={nextHeroSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all duration-300 hidden md:block"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Slider Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Creating magical moments for every occasion</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
              >
                {serviceSlides.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300`}>
                      <div className="text-center mb-6">
                        <div className="mb-4 flex justify-center">{service.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                        <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="h-5 w-5 text-yellow-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Service Navigation Buttons */}
            <button 
              onClick={prevServiceSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextServiceSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Slider Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600">Recent decoration projects that made dreams come true</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentGallerySlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(gallerySlides.length / 3) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {gallerySlides.slice(slideIndex * 3, (slideIndex + 1) * 3).map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                              <span className="text-sm bg-pink-500 px-2 py-1 rounded-full">{item.category}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gallery Navigation Buttons */}
            <button 
              onClick={prevGallerySlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextGallerySlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/90">Real experiences from our happy customers</p>
          </div>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentTestimonialSlide 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-full absolute top-0 left-0 right-0'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.comment}"</p>
                  <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.event}</p>
                </div>
              </div>
            ))}
            
            {/* Testimonial Navigation Buttons */}
            <button 
              onClick={prevTestimonialSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonialSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
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
  );
};

export default DecorationWebsite;