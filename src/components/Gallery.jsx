import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  // Gallery Slider Data - 16 images total
  const gallerySlides = [
    {
      image: "/portfolio-images/wedding-1.jpeg",
      title: "Royal Wedding Setup",
      category: "Wedding"
    },
    {
      image: "/main-images/baloon.jpeg",
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

  // Auto-scroll functionality
  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setCurrentGallerySlide(prev => (prev + 1) % Math.ceil(gallerySlides.length / 3));
    }, 3500);

    return () => {
      clearInterval(galleryInterval);
    };
  }, [gallerySlides.length]);

  // Navigation functions
  const nextGallerySlide = () => setCurrentGallerySlide((prev) => (prev + 1) % Math.ceil(gallerySlides.length / 3));
  const prevGallerySlide = () => setCurrentGallerySlide((prev) => (prev - 1 + Math.ceil(gallerySlides.length / 3)) % Math.ceil(gallerySlides.length / 3));

  return (
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
  );
};

export default Gallery;