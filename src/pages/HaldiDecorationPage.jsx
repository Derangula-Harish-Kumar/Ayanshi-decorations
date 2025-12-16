import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ImageGallery from '../components/ImageGallery.jsx';

const HaldiDecorationPage = () => {
  const haldiImages = [
    { src: 'https://source.unsplash.com/random/800x600?haldi', alt: 'Haldi Decoration 1' },
    { src: 'https://source.unsplash.com/random/600x800?haldi', alt: 'Haldi Decoration 2' },
    { src: 'https://source.unsplash.com/random/800x600?haldi', alt: 'Haldi Decoration 3' },
    { src: 'https://source.unsplash.com/random/600x800?haldi', alt: 'Haldi Decoration 4' },
    { src: 'https://source.unsplash.com/random/800x600?haldi', alt: 'Haldi Decoration 5' },
    { src: 'https://source.unsplash.com/random/600x800?haldi', alt: 'Haldi Decoration 6' },
  ];

  return (
    <div className="pt-16">
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
          <ChevronLeft className="h-6 w-6" />
          <span className="ml-2">Back to Home</span>
        </Link>
        <h1 className="text-2xl font-bold">Haldi Decoration</h1>
      </div>
      <ImageGallery images={haldiImages} />
    </div>
  );
};

export default HaldiDecorationPage;
