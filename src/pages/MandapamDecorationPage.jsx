import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ImageGallery from '../components/ImageGallery.jsx';

const MandapamDecorationPage = () => {
  const mandapamImages = [
    { src: 'https://source.unsplash.com/random/800x600?mandapam', alt: 'Mandapam Decoration 1' },
    { src: 'https://source.unsplash.com/random/600x800?mandapam', alt: 'Mandapam Decoration 2' },
    { src: 'https://source.unsplash.com/random/800x600?mandapam', alt: 'Mandapam Decoration 3' },
    { src: 'https://source.unsplash.com/random/600x800?mandapam', alt: 'Mandapam Decoration 4' },
    { src: 'https://source.unsplash.com/random/800x600?mandapam', alt: 'Mandapam Decoration 5' },
    { src: 'https://source.unsplash.com/random/600x800?mandapam', alt: 'Mandapam Decoration 6' },
  ];

  return (
    <div className="pt-16">
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800">
          <ChevronLeft className="h-6 w-6" />
          <span className="ml-2">Back to Home</span>
        </Link>
        <h1 className="text-2xl font-bold">Mandapam Decoration</h1>
      </div>
      <ImageGallery images={mandapamImages} />
    </div>
  );
};

export default MandapamDecorationPage;
