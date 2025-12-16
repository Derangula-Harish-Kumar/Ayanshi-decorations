import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Heart, Gift, Sparkles, Users, Camera } from 'lucide-react';

const Services = () => {
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);

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

  // Auto-scroll functionality
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentServiceSlide(prev => (prev + 1) % serviceSlides.length);
    }, 4000);

    return () => {
      clearInterval(serviceInterval);
    };
  }, [serviceSlides.length]);

  // Navigation functions
  const nextServiceSlide = () => setCurrentServiceSlide((prev) => (prev + 1) % serviceSlides.length);
  const prevServiceSlide = () => setCurrentServiceSlide((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);

  return (
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
              {serviceSlides.map((service, index) => {
                const serviceCard = (
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
                );

                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    {service.title === "Wedding Decorations" ? (
                      <Link to="/wedding-decorations">{serviceCard}</Link>
                    ) : (
                      serviceCard
                    )}
                  </div>
                );
              })}
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
  );
};

export default Services;
