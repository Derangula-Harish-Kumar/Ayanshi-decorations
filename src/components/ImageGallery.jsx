import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="p-4">
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
