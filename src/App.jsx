import React, { useState, useEffect } from 'react';
import { ImagesShow } from './components/ImagesShow.jsx';
import NavBar from './components/NavBar.jsx';
import Reviews from './components/Reviews.jsx';
import { testimonials } from './data/testimonialsData'; // Import testimonials data
import { heroSlides } from './data/heroSlidesData'; // Import heroSlides data
import Footer from './components/Footer.jsx';
import HeroSection from './components/HeroSection.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';


const App = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
 
  // Auto-scroll functionality for all sliders
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => {
      clearInterval(heroInterval);
    };
  }, [heroSlides.length]);

  // Navigation functions
  const nextHeroSlide = () => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  const prevHeroSlide = () => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation - Fixed header */}
        <NavBar />

      {/* Hero Slider Section */}
      <HeroSection 
        heroSlides={heroSlides} 
        currentHeroSlide={currentHeroSlide} 
        prevHeroSlide={prevHeroSlide} 
        nextHeroSlide={nextHeroSlide} 
        handleWhatsApp={handleWhatsApp}
        setCurrentHeroSlide={setCurrentHeroSlide}
      />

      {/* Services Slider Section */}
      <Services />

       {/* Images showing components */}
          <ImagesShow />

      {/* Gallery Slider Section */}
      <Gallery />

      {/* Testimonials Slider Section */}
        <Reviews />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
        <Footer />
    </div>
  );
};

export default App;