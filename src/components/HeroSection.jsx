import React from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const HeroSection = ({ heroSlides, currentHeroSlide, prevHeroSlide, nextHeroSlide, handleWhatsApp, setCurrentHeroSlide }) => {
  return (
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
  );
};

export default HeroSection;

